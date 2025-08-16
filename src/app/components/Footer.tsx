export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-sm text-white/60">
        © {new Date().getFullYear()} Underwraps.id. All rights reserved.
      </div>
    </footer>
  );
}


