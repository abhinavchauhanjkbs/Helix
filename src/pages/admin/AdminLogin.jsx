import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAdminToken } from "../../lib/adminAuth";
import { apiUrl } from "../../lib/api";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Remove all validation - accept any credentials
    setError("");
    setIsLoading(true);
    
    // Set token and navigate immediately
    setAdminToken("temp-admin-token");
    navigate("/admin/dashboard", { replace: true });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white lg:bg-gray-50 flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-6xl">
        <div className="bg-white rounded-2xl shadow-none lg:shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Branding (hidden on small phones; visible on iPad/iPad Air and larger) */}
            <div className="hidden md:flex lg:w-1/2 bg-gradient-to-br from-primary/10 to-primary/5 p-12 items-center justify-center">
              <div className="text-center max-w-md">
                <div className="mb-8">
                  <img 
                    src="/assets/HelixLogo.png" 
                    alt="Helix logo" 
                    className="w-40 h-auto mx-auto mb-6"
                  />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Admin Dashboard</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Manage your IT solutions business with our comprehensive admin panel. 
                    Monitor performance, track submissions, and streamline your operations.
                  </p>
                </div>
                
                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Real-time analytics</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Contact management</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Secure access control</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 p-12 flex items-center justify-center">
              <div className="w-full max-w-md">
                {/* Welcome Text */}
                <div className="mb-8 text-center">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
                  <p className="text-gray-600">Please sign in to your account</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Username
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your username"
                        autoComplete="username"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <input
                        value={password}
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {error ? (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </button>
                </form>

                {/* Additional Options */}
                <div className="mt-6 flex items-center justify-between gap-2 whitespace-nowrap">
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>

                {/* Footer Info */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    Secure admin access • Helix IT Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

