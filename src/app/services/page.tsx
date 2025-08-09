import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LinuxWale - Services',
  description: 'Linux installation, dual boot setup, and tech support services. Why windows, when we have doors?',
};

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">LinuxWale</h1>
          <p className="page-subtitle">Why windows, when we have doors?</p>
        </div>
      </section>

      {/* Green Line Separator */}
      <div className="hero-separator"></div>

      {/* Main Content Sections */}
      <main className="main-sections">
        {/* Service 1: Linux Installation */}
        <section className="content-section left-title">
          <div className="section-container">
            <div className="section-title">
              <h2>🐧 Linux Installation</h2>
            </div>
            <div className="section-content">
              <p>Install your favorite Linux distro — Ubuntu, Arch, Debian & more.</p>

              <div className="service-pricing">
                <div className="price-section">
                  <span className="price-label">💰 Price:</span>
                  <span className="price-value">₹500</span>
                  <span className="student-offer">🎓 Student Offer: ₹350</span>
                </div>
              </div>

              <div className="service-includes">
                <h4>🛠️ What's Included:</h4>
                <ul>
                  <li>Full Linux OS installation</li>
                  <li>Partition setup</li>
                  <li>Driver support (Wi-Fi, audio, graphics)</li>
                  <li>🔧 1 Week Free Support for installation-related issues</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Dual Boot Setup */}
        <section className="content-section right-title">
          <div className="section-container">
            <div className="section-content">
              <p>Enjoy the flexibility of running both Linux and Windows on the same machine.</p>

              <div className="service-pricing">
                <div className="price-section">
                  <span className="price-label">💰 Price:</span>
                  <span className="price-value">₹700</span>
                  <span className="student-offer">🎓 Student Offer: ₹500</span>
                </div>
              </div>

              <div className="service-includes">
                <h4>🛠️ What's Included:</h4>
                <ul>
                  <li>Safe disk partitioning</li>
                  <li>GRUB / bootloader configuration</li>
                  <li>Driver compatibility check</li>
                  <li>Windows-Linux conflict prevention</li>
                  <li>🔧 1 Week Free Support for dual boot-related issues</li>
                </ul>
              </div>
            </div>
            <div className="section-title">
              <h2>💻 Dual Boot Setup<br />(Linux + Windows)</h2>
            </div>
          </div>
        </section>

        {/* Bonus Section */}
        <section className="content-section left-title">
          <div className="section-container">
            <div className="section-title">
              <h2>BONUS POINT</h2>
            </div>
            <div className="section-content">
              <div className="bonus-offer">
                <p className="free-price">🆓 Price: <strong>FREE</strong></p>
                <p>If you'd like to do it yourself, we'll guide you step-by-step!</p>

                <div className="educational-message">
                  <p>🎯 <strong>Our main aim is to educate people!</strong></p>
                  <p>We believe in empowering you with knowledge rather than just providing services. Stay curious, ask questions, and learn the 'why' behind every step. The best way to truly understand Linux is to get your hands dirty and explore it yourself.</p>
                  <p>💡 <em>Remember: Every expert was once a beginner who never gave up learning!</em></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="content-section right-title">
          <div className="section-container">
            <div className="section-content">
              <div className="additional-support">
                <h4>🚀 Beyond Installation Services</h4>
                <p>Got any other Linux query or tech-related question? We're up for challenges! If we don't know something, we'll solve it together by learning and exploring.</p>
                <p>Whether it's:</p>
                <ul>
                  <li>🔧 System troubleshooting</li>
                  <li>⚙️ Software configuration</li>
                  <li>🛡️ Security hardening</li>
                  <li>📚 Learning new technologies</li>
                  <li>🤝 Community collaboration</li>
                </ul>
                <p><strong>We learn, we grow, we solve together!</strong></p>
              </div>
            </div>
            <div className="section-title">
              <h2>Tech Support & Learning</h2>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="cta-section">
          <div className="cta-container">
            <h2>Ready to Switch to Linux?</h2>
            <p>Join the Linux revolution and experience true computing freedom. Contact us to get started with your Linux journey!</p>
            <Link href="/contact">
              <button className="cta-button">Get Started</button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}