'use client';

import Link from 'next/link';
import AnimatedTitle from '@/components/AnimatedTitle';

export default function Home() {
  return (
    <>
      {/* Hero Section with Animated Title */}
      <section className="hero-section">
        <div className="hero-content">
          <AnimatedTitle />
          <p className="hero-subtitle">Why windows, when we have doors?</p>
          <p className="scroll-indicator">Scroll down to explore more ↓</p>
        </div>
      </section>

      {/* Green Line Separator */}
      <div className="hero-separator"></div>

      {/* Main Content Sections - Discord Style Layout */}
      <main className="main-sections">
        {/* Section 1: Title Left, Content Right */}
        <section className="content-section left-title">
          <div className="section-container">
            <div className="section-title">
              <h2>What is Linux?</h2>
            </div>
            <div className="section-content">
              <p>
                Linux operating system is a free and open-source Unix-like
                operating system. The Linux kernel, on the other hand, is the core
                part of the Linux operating system responsible for managing
                hardware resources and providing essential services that serves as
                the foundation for various operating systems.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Content Left, Title Right */}
        <section className="content-section right-title">
          <div className="section-container">
            <div className="section-content">
              <p>
                Linux offers unparalleled freedom, security, and customization.
                It&apos;s free from corporate control, highly secure by design, and
                gives you complete control over your computing experience. With
                thousands of distributions to choose from, Linux adapts to your
                needs rather than forcing you to adapt to it. Plus, it&apos;s the
                backbone of the internet, powering servers, supercomputers, and
                embedded systems worldwide.
              </p>
            </div>
            <div className="section-title">
              <h2>Why Linux?</h2>
            </div>
          </div>
        </section>

        {/* Section 3: Title Left, Content Right */}
        <section className="content-section left-title">
          <div className="section-container">
            <div className="section-title">
              <h2>What is LinuxWale?</h2>
            </div>
            <div className="section-content">
              <p>
                LinuxWale is a community passionately dedicated to promoting Open
                Source Softwares like Linux. Whether you&apos;re a beginner seeking
                education alongside peers or an experienced who is ready to share
                his/her experience by helping others and contributing to the
                community, LinuxWale is your go-to space for embracing the power
                of FOSS and Linux.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Content Left, Title Right */}
        <section className="content-section right-title">
          <div className="section-container">
            <div className="section-content">
              <p>
                We are a Linux Community that supports and encourages Linux, Open
                Source Projects as well as Any Kind Tech that adds value to our
                people. We try to help our people in any kind of problems related
                to tech (especially Linux).
              </p>
              <p>
                Welcome to LinuxWale – where the magic of Linux unfolds! Immerse
                yourself in the captivating world of the most exquisite operating
                system of all time – LINUX. As a passionate community, we not only
                embrace the beauty of Linux but also champion Open Source Projects
                and any transformative tech that elevates our community. At
                LinuxWale, we&apos;re not just enthusiasts; we&apos;re a vibrant hub
                dedicated to supporting and empowering individuals facing any tech
                challenge, with a special focus on the mesmerizing realm of Linux.
                Join us, and let&apos;s navigate the limitless possibilities of tech
                together!
              </p>
            </div>
            <div className="section-title">
              <h2>Why LinuxWale?</h2>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="cta-section">
          <div className="cta-container">
            <h2>Join the Revolution</h2>
            <p>
              Be a LinuxWala to explore the digital, raise awareness about digital
              privacy and advocate for FOSS.
            </p>
            <Link href="/contact">
              <button className="cta-button">
                Join LinuxWale
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}