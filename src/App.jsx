import React, { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop";

const AVATARS = [
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
];

function GoogleIcon(props) {
  return (
    <svg viewBox="0 0 48 48" width="18" height="18" {...props}>
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="m6.3 14.7 6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6 29.6 4 24 4c-7.4 0-13.8 4.1-17.1 10.1z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.5 0 10.4-1.9 14.3-5.1l-6.6-5.4C29.7 35.4 27 36 24 36c-5.3 0-9.6-3.4-11.3-8.1l-6.5 5C9.9 39.6 16.4 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.5l6.6 5.4C41.4 35.9 44 30.5 44 24c0-1.3-.1-2.7-.4-3.5z"
      />
    </svg>
  );
}

function AppleIcon(props) {
  return (
    <svg viewBox="0 0 384 512" width="16" height="16" fill="currentColor" {...props}>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 0 184.8 0 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 37 59 127.6 107.2 126.1 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-83.1 102.6-120.2-65.2-30.7-57.7-90-57.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    fullName: "Amélie Laurent",
    email: "amélielaurent7622@gmail.com",
    password: "",
  });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Submitted! Check the console for form data.");
  };

  const days = [
    { label: "Sun", date: 22 },
    { label: "Mon", date: 23 },
    { label: "Tue", date: 24 },
    { label: "Wed", date: 25 },
    { label: "Thu", date: 26 },
    { label: "Fri", date: 27 },
    { label: "Sat", date: 28 },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-300 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_1.2fr] bg-gradient-to-br from-slate-50 to-neutral-100 rounded-[2rem] shadow-2xl overflow-hidden">
        {/* ---------------- LEFT: FORM ---------------- */}
        <div className="flex flex-col justify-between px-10 py-10 md:px-14 md:py-12">
          <div>
            <span className="inline-block rounded-full border border-neutral-300 px-5 py-2 text-sm text-neutral-700">
              Crextio
            </span>

            <div className="mt-16">
              <h1 className="text-4xl font-medium text-neutral-900">
                Create an account
              </h1>
              <p className="mt-2 text-neutral-500">
                Sign up and get 30 day free trial
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={handleChange("fullName")}
                  className="w-full rounded-xl bg-neutral-100/80 px-4 py-3.5 text-neutral-800 outline-none focus:bg-white focus:ring-2 focus:ring-amber-300 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full rounded-xl bg-neutral-100/80 px-4 py-3.5 text-neutral-800 outline-none focus:bg-white focus:ring-2 focus:ring-amber-300 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange("password")}
                    placeholder="••••••••••••••••"
                    className="w-full rounded-xl bg-neutral-100/80 px-4 py-3.5 pr-11 text-neutral-800 outline-none focus:bg-white focus:ring-2 focus:ring-amber-300 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-b from-amber-300 to-amber-400 py-3.5 font-medium text-neutral-900 shadow-sm hover:brightness-105 active:brightness-95 transition"
              >
                Submit
              </button>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl border border-neutral-300 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition"
                >
                  <AppleIcon /> Apple
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl border border-neutral-300 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition"
                >
                  <GoogleIcon /> Google
                </button>
              </div>
            </form>
          </div>

          <div className="mt-10 flex items-center justify-between text-sm text-neutral-500">
            <span>
              Have any account?{" "}
              <a href="#" className="underline text-neutral-800">
                Sign in
              </a>
            </span>
            <a href="#" className="underline">
              Terms &amp; Conditions
            </a>
          </div>
        </div>

        {/* ---------------- RIGHT: IMAGE PANEL ---------------- */}
        <div className="relative hidden md:block m-3 rounded-[1.75rem] overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt="Team collaborating around a laptop"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

          {/* close button */}
          <button
            type="button"
            className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow hover:bg-white transition"
            aria-label="Close"
          >
            <X size={18} className="text-neutral-700" />
          </button>

          {/* top meeting cards */}
          <div className="absolute top-8 left-8 space-y-2">
            <div className="rounded-xl bg-amber-300/95 px-4 py-3 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-neutral-900">
                  Task Review With Team
                </p>
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-900/70" />
              </div>
              <p className="text-xs text-neutral-800/80 mt-0.5">
                09:30am–10:00am
              </p>
            </div>
            <div className="rounded-xl bg-neutral-900/80 px-4 py-3 shadow-lg backdrop-blur-sm ml-6">
              <div className="flex items-center gap-2">
              <p className="text-xs text-white/90">9:30am-10:00am</p>
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              </div>
            </div>
          </div>

          {/* stacked avatars */}
          <div className="absolute right-10 top-[42%] flex flex-col items-end gap-1">
            <div className="flex -space-x-3">
              {AVATARS.slice(0, 2).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-11 w-11 rounded-full ring-2 ring-white object-cover"
                />
              ))}
            </div>
            <img
              src={AVATARS[2]}
              alt=""
              className="h-11 w-11 rounded-full ring-2 ring-white object-cover -mt-2"
            />
          </div>

          {/* calendar strip */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-32 w-[85%] rounded-2xl bg-white/15 backdrop-blur-md px-5 py-4 flex justify-between text-white">
            {days.map((d) => (
              <div key={d.date} className="flex flex-col items-center gap-1">
                <span className="text-xs text-white/70">{d.label}</span>
                <span className="text-lg font-medium">{d.date}</span>
              </div>
            ))}
          </div>

          {/* daily meeting card */}
          <div className="absolute left-8 bottom-8 w-64 rounded-xl bg-white px-4 py-3 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-neutral-900">
                Daily Meeting
              </p>
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            </div>
            <p className="text-xs text-neutral-500 mt-0.5">12:00pm–01:00pm</p>
            <div className="flex -space-x-2 mt-2">
              {AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-6 w-6 rounded-full ring-2 ring-white object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
