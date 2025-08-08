'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedTitle() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const letterTimersRef = useRef<NodeJS.Timeout[]>([]);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const fonts = [
      'Press Start 2P',
      'Fira Code',
      'Fira Mono',
      'JetBrains Mono',
      'Source Code Pro',
      'Ubuntu Mono'
    ];

    const colors = ['#00ff00', '#ffffff', '#64b5f6', '#77befc', '#ccc', '#aaa'];

    const startAnimation = () => {
      if (isAnimatingRef.current || !titleRef.current) return;
      
      isAnimatingRef.current = true;
      const originalText = 'LinuxWale';
      const letters = originalText.split('');
      
      // Initialize each letter with its own container with fixed dimensions
      titleRef.current.innerHTML = letters.map((letter, index) => {
        if (letter === ' ') return '<span class="letter-space"> </span>';
        return `<span class="letter-block" id="letter-${index}" style="font-family: 'Press Start 2P', 'Fira Code'; color: var(--accent-green); display: inline-block; width: 1em; text-align: center;">${letter}</span>`;
      }).join('');

      // Start individual timers for each letter
      letters.forEach((letter, index) => {
        if (letter === ' ') return;
        
        const animateLetter = () => {
          const letterElement = document.getElementById(`letter-${index}`);
          if (!letterElement) return;
          
          // 20% chance for each letter to change (reduced frequency)
          if (Math.random() < 0.2) {
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            letterElement.style.fontFamily = `'${randomFont}', monospace`;
            letterElement.style.color = randomColor;
            letterElement.style.textShadow = `0 0 5px ${randomColor}`;
          } else {
            // Reset to original style
            letterElement.style.fontFamily = "'Press Start 2P', 'Fira Code'";
            letterElement.style.color = 'var(--accent-green)';
            letterElement.style.textShadow = 'var(--glow-green)';
          }
          
          // Slower, more consistent speed (500ms)
          const uniformSpeed = 500;
          letterTimersRef.current[index] = setTimeout(animateLetter, uniformSpeed);
        };
        
        // Start each letter with a small random initial delay
        const initialDelay = Math.random() * 50;
        setTimeout(animateLetter, initialDelay);
      });
    };

    // Start animation immediately
    startAnimation();

    // Cleanup function
    return () => {
      letterTimersRef.current.forEach(timer => {
        if (timer) clearTimeout(timer);
      });
      letterTimersRef.current = [];
      isAnimatingRef.current = false;
    };
  }, []);

  return (
    <h1 
      ref={titleRef}
      id="animated-title" 
      className="hero-title"
      style={{
        fontFamily: "'Press Start 2P', 'Fira Code'",
        color: 'var(--accent-green)',
        textShadow: 'var(--glow-green-strong)',
        marginBottom: '2rem',
        letterSpacing: '0.1em'
      }}
    >
      LinuxWale
    </h1>
  );
}