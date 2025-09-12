import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-slate-900 dark:text-white">
          ← Back to Home
        </Link>
      </div>
    </nav>
  );
}