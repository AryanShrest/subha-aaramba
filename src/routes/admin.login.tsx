import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, Droplets } from "lucide-react";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [
      { title: "Admin Login | Clean Tank Nepal" },
      { name: "description", content: "Admin login for Clean Tank Nepal service management" },
    ],
  }),
  component: AdminLogin,
});

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simple authentication - check against hardcoded credentials
    const ADMIN_USERNAME = "netra";
    const ADMIN_PASSWORD = "bahadur";

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Store session in localStorage (client-side only)
      if (typeof window !== "undefined") {
        localStorage.setItem("adminAuth", JSON.stringify({
          isLoggedIn: true,
          username: username,
          loginTime: new Date().toISOString(),
        }));
        navigate({ to: "/admin" });
      }
    } else {
      setError("Invalid username or password");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--brand-deep)] to-[var(--brand)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[var(--brand)] text-white shadow-lg">
              <Droplets size={28} />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-extrabold text-center mb-2 text-foreground">Admin Portal</h1>
          <p className="text-center text-muted-foreground text-sm mb-8">शुभ आरम्भ Cleaning Service</p>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive text-destructive rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading || !username || !password}
              className="w-full mt-6 bg-[var(--brand)] text-white font-semibold py-2 rounded-lg transition hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Lock size={18} />
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
            <p>For authorized admins only</p>
          </div>
        </div>
      </div>
    </div>
  );
}
