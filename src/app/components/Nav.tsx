"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/community", label: "Community" },
  { href: "/unchain-journey", label: "Unchain Journey" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="relative">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5/50 backdrop-blur px-1 py-1 shadow-sm">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={
                "px-4 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 " +
                (isActive
                  ? "bg-white text-black"
                  : "text-white/80 hover:text-white hover:bg-white/10")
              }
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}


