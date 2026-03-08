"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, BookOpen, ScanEye } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 flex justify-between h-16 items-center">

        <Link href="/" className="flex items-center gap-3 group">
          <Shield className="w-6 h-6 text-primary" />
          <span className="font-semibold">Defensa Digital</span>
        </Link>

        <nav className="flex items-center gap-4">

          <Link
            href="/"
            className={pathname === "/" ? "text-primary" : "text-gray-500"}
          >
            Inicio
          </Link>

          <Link
            href="/guide"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isActive("/guide")
                    ? " text-primary"
                    : " text-gray-500"
                }`}
          >
            Guías
            <BookOpen className="w-4 h-4" />
          </Link>

          <Link
            href="/simulator"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isActive("/simulator")
                    ? " text-primary"
                    : " text-gray-500"
                }`}
          >
            Huella digital
            <ScanEye className="w-4 h-4" />
          </Link>

        </nav>
      </div>
    </header>
  );
}