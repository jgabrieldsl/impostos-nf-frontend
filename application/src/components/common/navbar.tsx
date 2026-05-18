import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-slate-100 py-4 px-6 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-white">Impostos NF</span>
          <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono">v1.0.0</span>
        </div>
        
        <ul className="flex items-center flex-wrap gap-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Dashboard (NF)
            </Link>
          </li>
          <li>
            <Link href="/icms" className="hover:text-white transition-colors">
              ICMS
            </Link>
          </li>
          <li>
            <Link href="/ipi" className="hover:text-white transition-colors">
              IPI
            </Link>
          </li>
          <li>
            <Link href="/pis-cofins" className="hover:text-white transition-colors">
              PIS/COFINS
            </Link>
          </li>
          <li>
            <Link href="/help" className="hover:text-white transition-colors">
              Ajuda
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="hover:text-white transition-colors">
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
