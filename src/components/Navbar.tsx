'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/" className="logo-link" style={{display:'flex', alignItems:'center', gap:'0.7rem', textDecoration:'none'}}>
            <Image 
              src="/images/LW_B_on_W.webp" 
              alt="LinuxWale Logo" 
              className="nav-logo-img"
              width={35}
              height={35}
            />
            <span className="logo-text">LinuxWale</span>
          </Link>
        </div>
        <ul className="nav-menu">
          <li>
            <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className={`nav-link ${pathname === '/services' ? 'active' : ''}`}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}