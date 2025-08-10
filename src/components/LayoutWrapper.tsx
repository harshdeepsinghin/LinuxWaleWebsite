'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface LayoutWrapperProps {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();

  if (pathname === '/welcome') {
    // For welcome page, render only the page content (last child)
    if (Array.isArray(children)) {
      // Find the page content (children prop) and render it
      return <>{children[children.length - 2]}</>;
    }
    return <>{children}</>;
  }

  // For all other pages, render everything except the duplicate children
  if (Array.isArray(children)) {
    return <>{children.slice(0, -1)}</>;
  }

  return <>{children}</>;
}