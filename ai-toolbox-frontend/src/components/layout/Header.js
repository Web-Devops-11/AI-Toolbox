import React from "react";

function Header({
  title,
  subtitle,
  Icon,
  bgcolor = "bg-white",
  showAuth = false,
  onLoginClick,
  onSignupClick,
}) {
  return (
    <div className={`${bgcolor} rounded-xl shadow p-6 mb-6 max-w-full`}>
      <div className="flex justify-between items-start">

        {/* Left side */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            {Icon && <Icon className="w-6 h-6 text-blue-700" />}
            <h1 className="text-3xl font-bold text-gray-900">
              {title}
            </h1>
          </div>

          <p className="text-gray-600 text-lg max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Right side – Login / Signup */}
        {showAuth && (
          <div className="flex gap-3">
            <button
              onClick={onLoginClick}
              className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition"
            >
              Login
            </button>

            <button
              onClick={onSignupClick}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
