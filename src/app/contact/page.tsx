// Converted to a server component to allow page-level metadata export.

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact LinuxWale',
  description: 'Contact LinuxWale (Linux Wale / Linux Vale) – join our Telegram community or email us for Linux help, FOSS support & collaboration.',
  alternates: { canonical: 'https://linuxwale.in/contact/' },
  openGraph: {
    title: 'Contact LinuxWale',
    description: 'Join LinuxWale – community for Linux, FOSS & privacy. Connect via Telegram or email.',
    url: 'https://linuxwale.in/contact/',
    type: 'website'
  },
  twitter: {
    title: 'Contact LinuxWale',
    description: 'LinuxWale (Linux Wale) contact – community help & collaboration.'
  }
};

// import { useState } from 'react';

// Note: metadata is handled in layout.tsx for client components

export default function Contact() {
  // const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // const toggleFAQ = (index: number) => {
  //   setOpenFAQ(openFAQ === index ? null : index);
  // };

  // const faqs = [
  //   {
  //     question: "How can I contribute to LinuxWale?",
  //     answer: "You can contribute by sharing knowledge in our forums, creating tutorials, helping other community members, or contributing to our open-source projects on GitHub. We welcome all forms of contribution!"
  //   },
  //   {
  //     question: "Is LinuxWale free to join?",
  //     answer: "Yes! LinuxWale is completely free to join. We believe in the open-source philosophy and want to make Linux education accessible to everyone. There are no membership fees or hidden costs."
  //   },
  //   {
  //     question: "Do you offer professional services?",
  //     answer: "Yes, we offer consulting services for businesses looking to migrate to Linux or implement FOSS solutions. Our services include migration planning, infrastructure design, training programs, and ongoing support. Contact us for more details."
  //   },
  //   {
  //     question: "What Linux distributions do you support?",
  //     answer: "We support all major Linux distributions including Ubuntu, Debian, Fedora, CentOS, Arch Linux, openSUSE, and many others. Our community has expertise across the entire Linux ecosystem."
  //   },
  //   {
  //     question: "How do I get started with Linux?",
  //     answer: "Start by choosing a beginner-friendly distribution like Ubuntu or Linux Mint. You can try them in a virtual machine first, then dual-boot with your current OS. Join our community for guidance and check out our educational resources."
  //   }
  // ];

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">Connect with the LinuxWale community 📡</p>
        </div>
      </section>

      {/* Green Line Separator */}
      <div className="hero-separator"></div>

      {/* Main Contact Content - Simple Structure */}
      <main className="contact-main">
        <div className="contact-simple-container">
          {/* Community Channels */}
          <section className="contact-section">
            <h2>Community Channels</h2>
            <div className="contact-methods">
              <div className="contact-method">
                <h3>Telegram Group</h3>
                <p>Connect with us on Telegram for quick updates, announcements, and community discussions.</p>
                <a href="https://t.me/linuxwale" className="contact-link">Join Telegram</a>
              </div>
              <div className="contact-method">
                <h3>Email Us</h3>
                <p>Got a question? Drop us an email anytime.</p>
                <a href="mailto:help@linuxwale.in" className="contact-link">Send a mail</a>
              </div>

            </div>
          </section>

          {/* Social Media */}
          {/* <section className="contact-section">
            <h2>Social Media</h2>
            <div className="social-methods">
              <div className="social-method">
                <h3>Twitter</h3>
                <p>Follow us for the latest Linux news and updates</p>
                <a href="#" className="contact-link">Follow on Twitter</a>
              </div>

              <div className="social-method">
                <h3>YouTube</h3>
                <p>Subscribe for tutorials and community content</p>
                <a href="#" className="contact-link">Subscribe on YouTube</a>
              </div>

              <div className="social-method">
                <h3>LinkedIn</h3>
                <p>Connect with us professionally</p>
                <a href="#" className="contact-link">Connect on LinkedIn</a>
              </div>

              <div className="social-method">
                <h3>GitHub</h3>
                <p>Contribute to our open-source projects</p>
                <a href="#" className="contact-link">Visit our GitHub</a>
              </div>
            </div>
          </section> */}
        </div>

        {/* FAQ Section with Collapsible Items */}
        {/* <section className="faq-section">
          <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${openFAQ === index ? 'active' : ''}`}>
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">{openFAQ === index ? '−' : '+'}</span>
                  </button>
                  <div
                    className="faq-answer"
                    style={{
                      maxHeight: openFAQ === index ? '200px' : '0',
                    }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}