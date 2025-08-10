'use client';

import { usePathname } from 'next/navigation';
import { ReactElement, ReactNode } from 'react';

interface LayoutProps {
  children: ReactElement;
}

export default function ConditionalLayout({ children }: LayoutProps) {
  const pathname = usePathname();

  // For welcome page, don't render navbar and footer
  if (pathname === '/welcome') {
    // Extract just the page content from the children structure
    const childrenProps = children.props as { children?: ReactNode[] };
    if (childrenProps.children && Array.isArray(childrenProps.children)) {
      // Return only the page content (middle element), skip navbar and footer
      return <>{childrenProps.children[1]}</>;
    }
    // Fallback: return null if structure is unexpected
    return null;
  }

  // For all other pages, render with navbar and footer
  return children;
}
