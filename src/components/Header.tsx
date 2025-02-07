// components/Header.tsx
"use client";
import Image from "next/image";

import Link from "next/link";

export function Header() {
  return (
    <header className="bg-background border-b border-border py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold">
            <Image
                className="dak:invert"
                src="/snapture_logo.svg"
                alt="Next.js logo"
                width={104}
                height={32}
                priority
            />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/projects"
                className="text-base hover:underline focus:underline"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/reports"
                className="text-base hover:underline focus:underline"
              >
                Reports
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
