import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>LinuxWale</h3>
          <p>We love penguins 🐧</p>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        {/* <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><Link href="#">Documentation</Link></li>
            <li><Link href="#">Tutorials</Link></li>
            <li><Link href="#">Support</Link></li>
          </ul>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 LinuxWale. Embracing the power of FOSS.</p>
      </div>
    </footer>
  );
}