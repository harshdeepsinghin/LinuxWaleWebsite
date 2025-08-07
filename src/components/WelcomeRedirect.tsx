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
      // If user has visited before and is on welcome page, redirect to home
      else if (hasVisited && pathname === '/welcome') {
        const hasCompleted = localStorage.getItem('linuxwale_welcome_completed');
        if (hasCompleted) {
          router.push('/');
        }
      }
    }
  }, [router, pathname]);

  return null; // This component doesn't render anything
}