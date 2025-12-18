'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Home Link */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/images/authorly.png"
              alt="Authorly"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6">
            <Link
              href="/students"
              className={`font-medium transition-colors ${
                isActive('/students')
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              For Students
            </Link>
            <Link
              href="/institutions"
              className={`font-medium transition-colors ${
                isActive('/institutions')
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              For Institutions
            </Link>
            <Link
              href="/ai-detectors-are-flawed"
              className={`font-medium transition-colors ${
                isActive('/ai-detectors-are-flawed')
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              AI Detectors Legal Risk
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
