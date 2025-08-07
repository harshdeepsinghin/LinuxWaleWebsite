import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LinuxWale - About',
  description: 'Discover our journey in the world of FOSS. Learn about LinuxWale\'s mission, vision, and values.',
};

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">About LinuxWale</h1>
          <p className="page-subtitle">
            Discover our journey in the world of FOSS 🐧
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="main-sections">
        {/* Section 1: Our Mission */}
        <section className="content-section left-title">
          <div className="section-container">
            <div className="section-title">
              <h2>Our Mission</h2>
            </div>
            <div className="section-content">
              <p>
                LinuxWale is dedicated to fostering a vibrant community around
                Linux and Open Source Software. We believe in the power of
                collaboration, knowledge sharing, and the freedom that comes with
                open-source technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Naming */}
        <section className="content-section right-title">
          <div className="section-container">
            <div className="section-content">
              <p>
                It&apos;s a portmanteau which contains two words &quot;Linux&quot; and &quot;Wale&quot;.
                Where, &quot;Linux&quot; is an open source operating system, whereas, &quot;Wale
                (वाले)&quot; translates to &quot;people&quot; or &quot;of&quot; in English which is often
                used as a suffix to indicate association with a particular group
                or characteristic.
              </p>
            </div>
            <div className="section-title">
              <h2>Naming</h2>
            </div>
          </div>
        </section>

        {/* Section 3: Our Vision */}
        <section className="content-section left-title">
          <div className="section-container">
            <div className="section-title">
              <h2>Our Vision</h2>
            </div>
            <div className="section-content">
              <p>
                To create a world where everyone has access to free, secure, and
                powerful computing solutions. We envision a future where Linux and
                FOSS are the primary choices for individuals, businesses, and
                organizations worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: What We Do */}
        <section className="content-section right-title">
          <div className="section-container">
            <div className="section-content">
              <ul
                style={{
                  color: 'var(--text-muted)',
                  marginLeft: '2rem',
                  lineHeight: 1.8,
                }}
              >
                <li>Provide educational resources for Linux beginners</li>
                <li>Support experienced users with advanced tutorials</li>
                <li>Foster community discussions and knowledge sharing</li>
                <li>Advocate for digital privacy and security</li>
                <li>Promote FOSS adoption in various sectors</li>
                <li>Organize workshops and community events</li>
              </ul>
            </div>
            <div className="section-title">
              <h2>What We Do</h2>
            </div>
          </div>
        </section>

        {/* Section 5: Our Values */}
        <section className="content-section left-title">
          <div className="section-container">
            <div className="section-title">
              <h2>Our Values</h2>
            </div>
            <div className="section-content">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                <div className="value-card">
                  <h3>Freedom</h3>
                  <p>
                    We believe in the freedom to use, modify, and distribute
                    software.
                  </p>
                </div>
                <div className="value-card">
                  <h3>Community</h3>
                  <p>Together we learn, grow, and build amazing things.</p>
                </div>
                <div className="value-card">
                  <h3>Innovation</h3>
                  <p>
                    Open source drives innovation and technological advancement.
                  </p>
                </div>
                <div className="value-card">
                  <h3>Privacy</h3>
                  <p>Your data belongs to you, not to corporations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Join Our Community */}
        <section className="content-section right-title">
          <div className="section-container">
            <div className="section-content">
              <p>
                Whether you&apos;re taking your first steps into Linux or you&apos;re a
                seasoned system administrator, LinuxWale welcomes you. Our
                community thrives on diversity of experience and the shared
                passion for open-source technology.
              </p>
              <p>
                Connect with like-minded individuals, share your knowledge, ask
                questions, and be part of the movement that&apos;s shaping the future
                of computing.
              </p>
            </div>
            <div className="section-title">
              <h2>Join Our Community</h2>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="cta-section">
          <div className="cta-container">
            <h2>Ready to Join?</h2>
            <p>
              Become part of the LinuxWale community and start your open-source
              journey today.
            </p>
            <Link href="/contact">
              <button className="cta-button">
                Get Started
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}