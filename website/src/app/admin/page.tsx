"use client";

import { useState, useEffect, useCallback } from "react";

// ─── Login ───
function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotMsg, setForgotMsg] = useState("");
  const [forgotLoading, setForgotLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const resp = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pass }),
        credentials: "same-origin",
      });
      const data = await resp.json();
      if (resp.ok) {
        onLogin();
      } else {
        setError(data.error || "Login failed");
      }
    } catch {
      setError("Network error");
    }
    setLoading(false);
  };

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotLoading(true);
    setForgotMsg("");
    try {
      const resp = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail }),
      });
      const data = await resp.json();
      setForgotMsg(data.message || "Check your email.");
    } catch {
      setForgotMsg("Something went wrong. Try again.");
    }
    setForgotLoading(false);
  };

  if (showForgot) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <form onSubmit={handleForgot} className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-sm border border-gray-800">
          <h1 className="text-2xl font-bold text-white mb-2 text-center">Reset Password</h1>
          <p className="text-gray-400 text-sm mb-6 text-center">Enter admin email to receive a reset link.</p>
          {forgotMsg && <p className="text-green-400 text-sm mb-4 text-center">{forgotMsg}</p>}
          <input
            className="w-full mb-4 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Admin email"
            type="email"
            value={forgotEmail}
            onChange={(e) => setForgotEmail(e.target.value)}
          />
          <button
            disabled={forgotLoading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors mb-3"
          >
            {forgotLoading ? "Sending..." : "Send Reset Link"}
          </button>
          <button type="button" onClick={() => setShowForgot(false)} className="w-full text-gray-400 text-sm hover:text-white transition-colors">
            ← Back to Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-sm border border-gray-800">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h1>
        {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}
        <input
          className="w-full mb-6 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button
          disabled={loading}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
        <button type="button" onClick={() => setShowForgot(true)} className="w-full mt-4 text-gray-500 text-sm hover:text-gray-300 transition-colors">
          Forgot password?
        </button>
      </form>
    </div>
  );
}

// ─── Change Password ───
function ChangePassword() {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    try {
      const resp = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword: current, newPassword: newPass, confirmPassword: confirm }),
        credentials: "same-origin",
      });
      const data = await resp.json();
      if (resp.ok) {
        setMessage(data.message);
        setCurrent("");
        setNewPass("");
        setConfirm("");
      } else {
        setError(data.error);
      }
    } catch {
      setError("Network error");
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <h3 className="text-sm font-semibold text-gray-300 mb-4">Change Password</h3>
      <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
        {message && <p className="text-green-400 text-sm">{message}</p>}
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <input
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Current password"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />
        <input
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="New password"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
        />
        <input
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Confirm new password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <p className="text-gray-500 text-xs">Min 8 chars, uppercase, lowercase, and number required.</p>
        <button
          disabled={loading}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
        >
          {loading ? "Updating..." : "Update Password"}
        </button>
      </form>
    </div>
  );
}

// ─── Types ───
interface DayData {
  dimensions: { date: string };
  sum: {
    requests: number;
    pageViews: number;
    bytes: number;
    threats: number;
    countryMap: { clientCountryName: string; requests: number; bytes: number }[];
  };
  uniq: { uniques: number };
}

// ─── Dashboard ───
function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [data, setData] = useState<DayData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [days, setDays] = useState(30);
  const [showSettings, setShowSettings] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const resp = await fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ days }),
        credentials: "same-origin",
      });
      if (resp.status === 401) {
        onLogout();
        return;
      }
      const json = await resp.json();
      if (json.errors?.length) {
        setError(json.errors[0].message);
      } else {
        const groups = json?.data?.viewer?.zones?.[0]?.httpRequests1dGroups || [];
        setData(groups);
      }
    } catch (e: any) {
      setError(e.message);
    }
    setLoading(false);
  }, [days, onLogout]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST", credentials: "same-origin" });
    onLogout();
  };

  // Aggregates
  const totalRequests = data.reduce((s, d) => s + d.sum.requests, 0);
  const totalPageViews = data.reduce((s, d) => s + d.sum.pageViews, 0);
  const totalUniques = data.reduce((s, d) => s + d.uniq.uniques, 0);
  const totalBytes = data.reduce((s, d) => s + d.sum.bytes, 0);
  const totalThreats = data.reduce((s, d) => s + d.sum.threats, 0);

  // Country aggregation
  const countryMap = new Map<string, { requests: number; bytes: number }>();
  data.forEach((d) =>
    d.sum.countryMap.forEach((c) => {
      const prev = countryMap.get(c.clientCountryName) || { requests: 0, bytes: 0 };
      countryMap.set(c.clientCountryName, { requests: prev.requests + c.requests, bytes: prev.bytes + c.bytes });
    })
  );
  const topCountries = [...countryMap.entries()]
    .sort((a, b) => b[1].requests - a[1].requests)
    .slice(0, 15);

  const fmtBytes = (b: number) => {
    if (b > 1e9) return (b / 1e9).toFixed(2) + " GB";
    if (b > 1e6) return (b / 1e6).toFixed(2) + " MB";
    if (b > 1e3) return (b / 1e3).toFixed(1) + " KB";
    return b + " B";
  };

  const fmtNum = (n: number) => n.toLocaleString();

  const maxReq = Math.max(...data.map((d) => d.sum.requests), 1);
  const maxPV = Math.max(...data.map((d) => d.sum.pageViews), 1);
  const maxUniq = Math.max(...data.map((d) => d.uniq.uniques), 1);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Quent Tech Analytics</h1>
          <div className="flex items-center gap-4">
            <select
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm"
            >
              <option value={7}>Last 7 days</option>
              <option value={14}>Last 14 days</option>
              <option value={30}>Last 30 days</option>
              <option value={90}>Last 90 days</option>
            </select>
            <button onClick={fetchData} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors">
              Refresh
            </button>
            <button onClick={() => setShowSettings(!showSettings)} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors">
              {showSettings ? "Dashboard" : "Settings"}
            </button>
            <button onClick={logout} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {showSettings ? (
          <ChangePassword />
        ) : (
          <>
            {loading && <p className="text-gray-400 text-center py-12">Loading analytics...</p>}
            {error && <p className="text-red-400 text-center py-12">Error: {error}</p>}

            {!loading && !error && (
              <>
                {/* KPI Cards */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                  {[
                    { label: "Unique Visitors", value: fmtNum(totalUniques) },
                    { label: "Page Views", value: fmtNum(totalPageViews) },
                    { label: "Requests", value: fmtNum(totalRequests) },
                    { label: "Bandwidth", value: fmtBytes(totalBytes) },
                    { label: "Threats Blocked", value: fmtNum(totalThreats) },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{kpi.label}</p>
                      <p className="text-2xl font-bold">{kpi.value}</p>
                    </div>
                  ))}
                </div>

                {/* Daily Charts */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-gray-300 mb-3">Daily Requests</h3>
                    <div className="flex items-end gap-[2px] h-32">
                      {data.map((d) => (
                        <div key={d.dimensions.date} className="flex-1 flex flex-col justify-end group relative">
                          <div className="bg-purple-500/80 hover:bg-purple-400 rounded-t transition-colors min-h-[2px]" style={{ height: `${(d.sum.requests / maxReq) * 100}%` }} />
                          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                            {d.dimensions.date}: {fmtNum(d.sum.requests)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-gray-300 mb-3">Daily Page Views</h3>
                    <div className="flex items-end gap-[2px] h-32">
                      {data.map((d) => (
                        <div key={d.dimensions.date} className="flex-1 flex flex-col justify-end group relative">
                          <div className="bg-green-500/80 hover:bg-green-400 rounded-t transition-colors min-h-[2px]" style={{ height: `${(d.sum.pageViews / maxPV) * 100}%` }} />
                          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                            {d.dimensions.date}: {fmtNum(d.sum.pageViews)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-gray-300 mb-3">Daily Unique Visitors</h3>
                    <div className="flex items-end gap-[2px] h-32">
                      {data.map((d) => (
                        <div key={d.dimensions.date} className="flex-1 flex flex-col justify-end group relative">
                          <div className="bg-blue-500/80 hover:bg-blue-400 rounded-t transition-colors min-h-[2px]" style={{ height: `${(d.uniq.uniques / maxUniq) * 100}%` }} />
                          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                            {d.dimensions.date}: {fmtNum(d.uniq.uniques)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tables */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-gray-300 mb-3">Top Countries</h3>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-gray-500 text-xs uppercase">
                          <th className="text-left pb-2">Country</th>
                          <th className="text-right pb-2">Requests</th>
                          <th className="text-right pb-2">Bandwidth</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topCountries.map(([country, stats]) => (
                          <tr key={country} className="border-t border-gray-800/50">
                            <td className="py-2 text-gray-300">{country || "Unknown"}</td>
                            <td className="py-2 text-right text-gray-400">{fmtNum(stats.requests)}</td>
                            <td className="py-2 text-right text-gray-400">{fmtBytes(stats.bytes)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 overflow-auto max-h-96">
                    <h3 className="text-sm font-semibold text-gray-300 mb-3">Daily Breakdown</h3>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-gray-500 text-xs uppercase">
                          <th className="text-left pb-2">Date</th>
                          <th className="text-right pb-2">Visitors</th>
                          <th className="text-right pb-2">Views</th>
                          <th className="text-right pb-2">Requests</th>
                          <th className="text-right pb-2">BW</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...data].reverse().map((d) => (
                          <tr key={d.dimensions.date} className="border-t border-gray-800/50">
                            <td className="py-1.5 text-gray-300">{d.dimensions.date}</td>
                            <td className="py-1.5 text-right text-gray-400">{fmtNum(d.uniq.uniques)}</td>
                            <td className="py-1.5 text-right text-gray-400">{fmtNum(d.sum.pageViews)}</td>
                            <td className="py-1.5 text-right text-gray-400">{fmtNum(d.sum.requests)}</td>
                            <td className="py-1.5 text-right text-gray-400">{fmtBytes(d.sum.bytes)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

// ─── Main ───
export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch("/api/auth/session", { credentials: "same-origin" })
      .then((r) => r.json())
      .then((d) => {
        setAuthed(d.authenticated);
        setChecked(true);
      })
      .catch(() => setChecked(true));
  }, []);

  const handleLogout = () => {
    setAuthed(false);
  };

  if (!checked) return <div className="min-h-screen bg-gray-950" />;
  if (!authed) return <LoginPage onLogin={() => setAuthed(true)} />;
  return <Dashboard onLogout={handleLogout} />;
}
