'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AnimatedPenguin() {
  const [showPopup, setShowPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();

  const handlePenguinClick = () => {
    if (showPopup) {
      // Start closing animation
      setIsClosing(true);
      setTimeout(() => {
        setShowPopup(false);
        setIsClosing(false);
      }, 300); // Match animation duration
    } else {
      // Open popup
      setShowPopup(true);
    }
  };

  return (
    <div className="penguin-container">
      <div
        className="penguin clickable-penguin"
        onClick={handlePenguinClick}
        title="Click me for contact options!"
      >
        {/* Penguin body */}
        <div className="penguin-body">
          {/* Head */}
          <div className="penguin-head">
            <div className="penguin-eye penguin-eye-left"></div>
            <div className="penguin-eye penguin-eye-right"></div>
            <div className="penguin-beak"></div>
          </div>

          {/* Body */}
          <div className="penguin-torso">
            <div className="penguin-belly"></div>
          </div>

          {/* Wings */}
          <div className="penguin-wing penguin-wing-left"></div>
          <div className="penguin-wing penguin-wing-right"></div>

          {/* Feet */}
          <div className="penguin-foot penguin-foot-left"></div>
          <div className="penguin-foot penguin-foot-right"></div>
        </div>
      </div>

      {/* Contact Popup */}
      {showPopup && (
        <div
          className={`penguin-popup ${isClosing ? 'popup-closing' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="popup-content">
            <a
              href="https://t.me/linuxwale.in"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon telegram-icon"
              title="Contact via Telegram"
              onClick={(e) => {
                e.stopPropagation();
                window.open('https://t.me/linuxwale', '_blank');
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
              </svg>
            </a>

            <a
              href="mailto:help@linuxwale.in"
              className="contact-icon email-icon"
              title="Send Email"
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = 'mailto:help@linuxwale.in';
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>

            <button
              className="contact-icon terminal-icon"
              title="Open LinuxWale Terminal"
              onClick={(e) => {
                e.stopPropagation();
                router.push('/welcome');
              }}
            >
              <span className="terminal-symbol">&gt;_</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}