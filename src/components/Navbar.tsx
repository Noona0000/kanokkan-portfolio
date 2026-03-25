'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-yellow-600">
          🎨 PORTFOLIO
        </Link>
        
        <ul className="flex gap-6 flex-wrap justify-center">
          <li>
            <Link
              href="/"
              className={`${
                isActive('/')
                  ? 'text-yellow-600 border-b-2 border-yellow-600'
                  : 'text-gray-700 hover:text-yellow-600'
              } font-semibold transition`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                isActive('/about')
                  ? 'text-yellow-600 border-b-2 border-yellow-600'
                  : 'text-gray-700 hover:text-yellow-600'
              } font-semibold transition`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/education"
              className={`${
                isActive('/education')
                  ? 'text-yellow-600 border-b-2 border-yellow-600'
                  : 'text-gray-700 hover:text-yellow-600'
              } font-semibold transition`}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className={`${
                isActive('/skills')
                  ? 'text-yellow-600 border-b-2 border-yellow-600'
                  : 'text-gray-700 hover:text-yellow-600'
              } font-semibold transition`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`${
                isActive('/projects')
                  ? 'text-yellow-600 border-b-2 border-yellow-600'
                  : 'text-gray-700 hover:text-yellow-600'
              } font-semibold transition`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                isActive('/contact')
                  ? 'text-yellow-600 border-b-2 border-yellow-600'
                  : 'text-gray-700 hover:text-yellow-600'
              } font-semibold transition`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
