'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function WelcomeRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Only check on client side
    if (typeof window !== 'undefined') {
      const hasVisited = localStorage.getItem('linuxwale_has_visited');
      
      // If this is the first visit and user is not already on welcome page
      if (!hasVisited && pathname !== '/welcome') {
        // Mark as visited but not completed
        localStorage.setItem('linuxwale_has_visited', 'true');
        router.push('/welcome');
      }
      // Allow users to access welcome page even after completion
      // Only redirect on first visit, not on subsequent manual visits
    }
  }, [router, pathname]);

  return null; // This component doesn't render anything
}