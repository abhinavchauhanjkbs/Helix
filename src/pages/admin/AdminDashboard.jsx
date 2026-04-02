import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearAdminToken, getAdminToken } from "../../lib/adminAuth";
import { apiUrl, isBackendConfigured } from "../../lib/api";

const PAGE_SIZE = 10;
const LOCAL_SUBMISSIONS_KEY = "local_contact_submissions";

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleString();
  } catch {
    return iso;
  }
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ total: 0, today: 0 });
  const [submissions, setSubmissions] = useState([]);
  const [total, setTotal] = useState(0);
  const [q, setQ] = useState("");
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = getAdminToken();

  async function handleUnauthorized() {
    // only force logout when real API is configured
    if (isBackendConfigured()) {
      clearAdminToken();
      navigate("/admin/login", { replace: true });
    }
  }

  const getLocalSubmissions = () => {
    const items = JSON.parse(localStorage.getItem(LOCAL_SUBMISSIONS_KEY) || "[]");
    return Array.isArray(items) ? items : [];
  };

  const fetchStats = async () => {
    if (!isBackendConfigured()) {
      const items = getLocalSubmissions();
      setStats({ total: items.length, today: items.filter((s) => {
        const d = new Date(s.createdAt);
        const now = new Date();
        return d.toDateString() === now.toDateString();
      }).length });
      return;
    }

    try {
      const res = await fetch(apiUrl("/api/admin/submissions/stats"), {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) {
        await handleUnauthorized();
        return;
      }
      if (!res.ok) throw new Error("Failed to load stats");
      const data = await res.json();
      setStats({ total: data.total || 0, today: data.today || 0 });
    } catch (err) {
      console.log("API not available, using local data");
      const items = getLocalSubmissions();
      setStats({ total: items.length, today: items.filter((s) => {
        const d = new Date(s.createdAt);
        const now = new Date();
        return d.toDateString() === now.toDateString();
      }).length });
    }
  };

  const fetchSubmissions = async () => {
    if (!isBackendConfigured()) {
      const local = getLocalSubmissions();
      const filtered = q.trim()
        ? local.filter((item) => {
            const term = q.trim().toLowerCase();
            return (
              String(item.firstName || "").toLowerCase().includes(term) ||
              String(item.lastName || "").toLowerCase().includes(term) ||
              String(item.email || "").toLowerCase().includes(term) ||
              String(item.phone || "").toLowerCase().includes(term) ||
              String(item.company || "").toLowerCase().includes(term) ||
              String(item.message || "").toLowerCase().includes(term)
            );
          })
        : local;
      setSubmissions(filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE));
      setTotal(filtered.length);
      return;
    }

    try {
      const params = new URLSearchParams();
      params.set("limit", String(PAGE_SIZE));
      params.set("offset", String(page * PAGE_SIZE));
      if (q.trim()) params.set("q", q.trim());

      const res = await fetch(apiUrl(`/api/admin/submissions?${params.toString()}`), {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 401) {
        await handleUnauthorized();
        return;
      }
      if (!res.ok) throw new Error("Failed to load submissions");

      const data = await res.json();
      setSubmissions(data.items || []);
      setTotal(Number(data.total || 0));
    } catch (err) {
      console.log("API not available, using local data");
      const local = getLocalSubmissions();
      setSubmissions(local);
      setTotal(local.length);
    }
  };

  useEffect(() => {
    // Remove authentication check for testing
    let cancelled = false;

    (async () => {
      setLoading(true);
      setError("");
      try {
        await fetchStats();
        await fetchSubmissions();
      } catch (err) {
        if (cancelled) return;
        // Don't show any errors for testing
        console.log("Dashboard loaded in testing mode");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, q]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(0);
    // Effect will reload using the updated `q`.
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6 rounded-2xl border border-gray-300 bg-gray-100 p-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm uppercase tracking-widest text-[#ffb72e]">Helix Admin Dashboard</div>
            <h1 className="text-3xl font-extrabold text-gray-900">Contact Submissions</h1>
            <p className="text-gray-600 mt-1">Live view of messages submitted by customers.</p>
          </div>
          <img src="/assets/HelixLogo.png" alt="Helix logo" className="hidden sm:block h-14" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Submissions Dashboard</h1>
          <p className="text-gray-600 text-sm mt-1">View contact form details submitted by users.</p>
        </div>
      </div>

      <div className="mt-6 flex flex-row gap-2">
        <div className="w-1/2 bg-gray-100 border border-gray-300 rounded-2xl p-3">
          <div className="text-gray-600 text-sm">Total submissions</div>
          <div className="text-2xl font-bold mt-1 text-gray-900">{stats.total}</div>
        </div>
        <div className="w-1/2 bg-gray-100 border border-gray-300 rounded-2xl p-3">
          <div className="text-gray-600 text-sm">Today</div>
          <div className="text-2xl font-bold mt-1 text-gray-900">{stats.today}</div>
        </div>
      </div>

      <form onSubmit={handleSearch} className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-2">
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by name, email, phone, company..."
          className="w-full sm:flex-1 mb-2 sm:mb-0 px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <div className="w-full sm:w-auto flex gap-2 sm:justify-end">
          <button
            type="submit"
            className="w-1/2 sm:w-auto bg-primary rounded-xl px-4 py-2 font-semibold text-white transition hover:bg-primary/90 active:scale-[0.99]"
          >
            Search
          </button>
          <button
            type="button"
            onClick={() => {
              setQ("");
              setPage(0);
            }}
            className="w-1/2 sm:w-auto bg-gray-100 rounded-xl px-4 py-2 font-semibold text-gray-700 border border-gray-300 transition hover:bg-gray-200 active:scale-[0.99]"
          >
            Clear
          </button>
        </div>
      </form>

      {error ? <div className="mt-4 text-red-600 text-sm">{error}</div> : null}

      <div className="mt-5 bg-gray-100 border border-gray-300 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-6 text-gray-600 text-sm">Loading...</div>
        ) : submissions.length ? (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="text-gray-700 text-xs uppercase bg-gray-200">
                  <th className="px-4 py-3">Submitted At</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Company</th>
                  <th className="px-4 py-3">Message</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s) => (
                  <tr key={s.id} className="border-t border-gray-300 align-top">
                    <td className="px-4 py-3 text-sm text-gray-800">{formatDate(s.createdAt)}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {s.firstName} {s.lastName}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{s.email}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{s.phone}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{s.company}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">
                      <div className="max-w-[340px]">
                        {s.message.length > 140 ? `${s.message.slice(0, 140)}...` : s.message}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-6 text-gray-600 text-sm">No submissions found.</div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 flex-wrap">
        <div className="text-gray-600 text-sm">
          Page {page + 1} of {totalPages} (Total: {total})
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 font-semibold text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page >= totalPages - 1}
            className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 font-semibold text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

