"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { styles } from "@/data/styles";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          👔 Men&apos;s Style
        </Link>

        <button
          className="menu-btn"
          aria-label="Mở menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {styles.map((st) => {
            const href = `/style/${st.slug}`;
            return (
              <li key={st.slug}>
                <Link
                  href={href}
                  className={pathname === href ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {st.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
