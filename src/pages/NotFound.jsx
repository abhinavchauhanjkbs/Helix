import React from 'react'

const NotFound = () => {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">404</h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-6">Page not found</p>
      <a href="/" className="text-primary font-semibold hover:underline">Return to Home</a>
    </div>
  )
}

export default NotFound