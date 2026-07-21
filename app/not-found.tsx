export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#020617] text-center">
      <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="mt-4 text-xl text-slate-300">Page not found</p>
      <a href="/" className="mt-8 inline-flex items-center rounded-full bg-gradient-to-r from-brand-500 to-accent-400 px-6 py-3 text-white">
        Back to Home
      </a>
    </div>
  );
}
