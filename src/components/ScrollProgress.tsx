'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  // Don't render on welcome page
  if (pathname === '/welcome') {
    return null;
  }

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div 
      className="scroll-progress"
      style={{ '--scroll-progress': `${scrollProgress}%` } as React.CSSProperties}
    />
  );
}