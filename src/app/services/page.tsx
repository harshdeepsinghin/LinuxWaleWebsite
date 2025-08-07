import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LinuxWale - Services',
  description: 'Empowering you with Linux and FOSS solutions. Explore our education, support, and consulting services.',
};

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">Empowering you with Linux and FOSS solutions 🚀</p>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="main-sections">
        {/* Section 1: Education & Training */}
        <section className="content-section left-title">
          <div className="section-container">
            <div className="section-title">
              <h2>Education & Training</h2>
            </div>
            <div className="section-content">
              <p>Comprehensive Linux training programs for beginners to advanced users. Learn everything from basic command line operations to system administration and server management.</p>
              <ul style={{ color: 'var(--text-muted)', marginLeft: '2rem', lineHeight: 1.8 }}>
                <li>Linux Fundamentals</li>
                <li>Command Line Mastery</li>
                <li>System Administration</li>
                <li>Shell Scripting</li>
                <li>Server Management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Technical Support */}
        <section className="content-section right-title">
          <div className="section-container">
            <div className="section-content">
              <p>Get help with your Linux-related challenges. Our community experts are ready to assist you with troubleshooting, configuration, and optimization.</p>
              <ul style={{ color: 'var(--text-muted)', marginLeft: '2rem', lineHeight: 1.8 }}>
                <li>Installation Support</li>
                <li>Hardware Compatibility</li>
                <li>Software Configuration</li>
                <li>Performance Optimization</li>
                <li>Security Hardening</li>
              </ul>
            </div>
            <div className="section-title">
              <h2>Technical Support</h2>
            </div>
          </div>
        </section>

        {/* Section 3: Community Forums */}
        <section className="content-section left-title">
          <div className="section-container">
            <div className="section-title">
              <h2>Community Forums</h2>
            </div>
            <div className="section-content">
              <p>Join our active community discussions, share knowledge, ask questions, and connect with fellow Linux enthusiasts from around the world.</p>
              <ul style={{ color: 'var(--text-muted)', marginLeft: '2rem', lineHeight: 1.8 }}>
                <li>Q&A Forums</li>
                <li>Distribution Reviews</li>
                <li>Hardware Recommendations</li>
                <li>Project Showcases</li>
                <li>News & Updates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Resources & Guides */}
        <section className="content-section right-title">
          <div className="section-container">
            <div className="section-content">
              <p>Access our extensive library of tutorials, guides, and documentation to enhance your Linux knowledge and skills.</p>
              <ul style={{ color: 'var(--text-muted)', marginLeft: '2rem', lineHeight: 1.8 }}>
                <li>Step-by-step Tutorials</li>
                <li>Configuration Guides</li>
                <li>Best Practices</li>
                <li>Troubleshooting Docs</li>
                <li>Video Tutorials</li>
              </ul>
            </div>
            <div className="section-title">
              <h2>Resources & Guides</h2>
            </div>
          </div>
        </section>

        {/* Section 5: Privacy & Security */}
        <section className="content-section left-title">
          <div className="section-container">
            <div className="section-title">
              <h2>Privacy & Security</h2>
            </div>
            <div className="section-content">
              <p>Learn about digital privacy, security best practices, and how to protect yourself in the digital world using Linux and FOSS tools.</p>
              <ul style={{ color: 'var(--text-muted)', marginLeft: '2rem', lineHeight: 1.8 }}>
                <li>Privacy Tools Setup</li>
                <li>Encryption Guides</li>
                <li>Secure Communication</li>
                <li>Anonymous Browsing</li>
                <li>Data Protection</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Consulting */}
        <section className="content-section right-title">
          <div className="section-container">
            <div className="section-content">
              <p>Professional consulting services for businesses and organizations looking to migrate to Linux or implement FOSS solutions.</p>
              <ul style={{ color: 'var(--text-muted)', marginLeft: '2rem', lineHeight: 1.8 }}>
                <li>Migration Planning</li>
                <li>Infrastructure Design</li>
                <li>Cost Analysis</li>
                <li>Training Programs</li>
                <li>Ongoing Support</li>
              </ul>
            </div>
            <div className="section-title">
              <h2>Consulting</h2>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="cta-section">
          <div className="cta-container">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of Linux enthusiasts who have already discovered the power of open-source computing. Whether you&apos;re a complete beginner or an experienced user, we have something for everyone.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
              <Link href="/contact">
                <button className="cta-button">Get Support</button>
              </Link>
              <Link href="/contact">
                <button className="cta-button">Join Community</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}