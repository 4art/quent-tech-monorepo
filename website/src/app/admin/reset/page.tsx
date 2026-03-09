"use client";

import { useState, useEffect } from "react";

export default function ResetPasswordPage() {
  const [token, setToken] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setToken(params.get("token") || "");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    try {
      const resp = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword: newPass, confirmPassword: confirm }),
      });
      const data = await resp.json();
      if (resp.ok) {
        setMessage(data.message);
        setDone(true);
      } else {
        setError(data.error);
      }
    } catch {
      setError("Network error");
    }
    setLoading(false);
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-sm border border-gray-800 text-center">
          <p className="text-red-400">Invalid or missing reset token.</p>
          <a href="/admin/" className="text-blue-400 text-sm mt-4 inline-block hover:underline">← Back to Login</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-sm border border-gray-800">
        <h1 className="text-2xl font-bold text-white mb-2 text-center">Set New Password</h1>
        <p className="text-gray-400 text-sm mb-6 text-center">Min 8 chars, uppercase, lowercase, and number.</p>
        {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}
        {message && <p className="text-green-400 text-sm mb-4 text-center">{message}</p>}
        {!done ? (
          <>
            <input
              className="w-full mb-4 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="New password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            <input
              className="w-full mb-6 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Confirm new password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
            <button
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </>
        ) : (
          <a href="/admin/" className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-center">
            Go to Login
          </a>
        )}
      </form>
    </div>
  );
}
