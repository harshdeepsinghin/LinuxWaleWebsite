'use client';

import Link from 'next/link';
import AnimatedTitle from '@/components/AnimatedTitle';
import ExpandableContent from '@/components/ExpandableContent';

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
              <ExpandableContent
                moreContent="Linux is like a restaurant — the kernel is the kitchen where the cooking happens, and the operating system is the dining area where customers order, eat, and enjoy. The kitchen does the heavy work; the dining area makes it usable for people."
              >
                <p>
                  Linux may refer to two things: the Linux operating system, which is a free and open-source Unix-like system, and the Linux kernel, which is the core component responsible for managing hardware resources and providing essential services. The kernel serves as the foundation upon which various operating systems are built, enabling them to function efficiently and interact with the underlying hardware.
                </p>
              </ExpandableContent>
            </div>
          </div>
        </section>

        {/* Section 2: Content Left, Title Right */}
        <section className="content-section right-title">
          <div className="section-container">
            <div className="section-content">
              <ExpandableContent
                moreContent="Linux is like owning your own house instead of renting — you can paint the walls any color, lock the doors as securely as you want, and arrange everything to fit your lifestyle. It’s yours to control, safe from landlords (corporate control). Do whatever you want to do with it."
              >
                <p>
                  Linux offers unparalleled freedom, security, and customization.
                  It&apos;s free from corporate control, highly secure by design, and
                  gives you complete control over your computing experience. With
                  thousands of distributions to choose from, Linux adapts to your
                  needs rather than forcing you to adapt to it. Plus, it&apos;s the
                  backbone of the internet, powering servers, supercomputers, and
                  embedded systems worldwide.
                </p>
              </ExpandableContent>
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
              <ExpandableContent
                moreContent="LinuxWale is like a friendly neighborhood where Linux enthusiasts hang out! Think of it as a WhatsApp group, but way cooler - where beginners can ask 'stupid' questions without being judged, and experts love helping out. We're basically Linux nerds who believe everyone should experience the joy of a computer that actually works for YOU, not against you!"
              >
                <p>
                  LinuxWale is a community passionately dedicated to promoting Open
                  Source Softwares like Linux. Whether you&apos;re a beginner seeking
                  education alongside peers or an experienced who is ready to share
                  his/her experience by helping others and contributing to the
                  community, LinuxWale is your go-to space for embracing the power
                  of FOSS and Linux.
                </p>
              </ExpandableContent>
            </div>
          </div>
        </section>

        {/* Section 4: Content Left, Title Right */}
        <section className="content-section right-title">
          <div className="section-container">
            <div className="section-content">
              <ExpandableContent
                moreContent="Dude, this is as simple as it gets."
              >
                <p>
                  Because we’re more than just a Linux group — we’re a community that supports Linux, open source, and any tech that makes life better. Whether it’s solving Linux quirks, exploring new tools, or sharing knowledge, we’re here to help you grow, learn, and thrive in the world of tech.
                </p>
              </ExpandableContent>
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
      {/* Keyword variations / common misspellings block (hidden for homepage display) */}
      <section aria-label="Common spellings of LinuxWale" aria-hidden="true" style={{
        display: 'none'
      }} data-hidden-for-seo="true">
        <p>
          Brand variations: <span lang="en">LinuxWale, Linux Wale, Linux Wale Official, LinuxWale Official, linuxwaleofficial, linuxwale, Linux Vale, Linux Waale, Linux Vaale, Linux Wala, Linuxwala, Linux-wale, linux wale community</span>
        </p>
        <p>
          Location-based: <span lang="en">Linux wale community India, Linux vale community India, Linux community India, Linux users India, Linux group India, Linux forum India, Linux help India, Linux support India, Linux tutorial India, Linux learning India</span>
        </p>
        <p>
          Community keywords: <span lang="en">Linux community, open source community, FOSS community, Linux enthusiasts, Linux beginners, Linux experts, tech community, programming community, developer community, Linux meetup, Linux group, Linux forum, Linux Discord</span>
        </p>
        <p>
          Technology keywords: <span lang="en">Linux operating system, Linux kernel, Unix-like system, open source software, FOSS, free software, Ubuntu, Fedora, Debian, Linux distribution, Linux distros, kernel management, system administration, Linux security, Linux privacy</span>
        </p>
        <p>
          Learning keywords: <span lang="en">Linux tutorial, Linux learning, Linux education, Linux courses, Linux guide, Linux for beginners, Linux tips, Linux tricks, Linux help, Linux support, Linux questions, how to use Linux, Linux basics, Linux fundamentals, Linux introduction</span>
        </p>
        <p>
          Platform keywords: <span lang="en">linux wale telegram, Linux Wale Discord, Linux Wale YouTube, Linux Wale community chat, Linux Wale forum, Linux Wale WhatsApp, Linux Wale social, Linux Wale official channel</span>
        </p>
        <p>
          Hindi keywords: <span lang="hi">लिनक्स वाले, लिनक्स वेल, लिनक्स कम्युनिटी, लिनक्स समुदाय, ओपन सोर्स, फ्री सॉफ्टवेयर, लिनक्स सीखें, लिनक्स गाइड, लिनक्स ट्यूटोरियल, लिनक्स मदद</span>
        </p>
        <p>
          Related searches: <span lang="en">why Linux, Linux vs Windows, Linux advantages, Linux security, Linux performance, Linux free, why use Linux, Linux community support, open source benefits, FOSS advantages, Linux ecosystem, Linux software, Linux tools</span>
        </p>
        <p>
          Professional keywords: <span lang="en">Linux administration, Linux development, Linux server, Linux system, Linux DevOps, Linux cloud, Linux infrastructure, Linux deployment, Linux automation, Linux scripting, Linux shell, Linux command line</span>
        </p>
      </section>
    </>
  );
}