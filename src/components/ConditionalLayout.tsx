'use client';

import { usePathname } from 'next/navigation';
import { ReactElement, ReactNode } from 'react';

interface LayoutProps {
  children: ReactElement;
  pageContent: ReactNode;
}

export default function ConditionalLayout({ children, pageContent }: LayoutProps) {
  const pathname = usePathname();

  // For welcome page, render only the page content without navbar/footer
  if (pathname === '/welcome') {
    return <>{pageContent}</>;
  }

  // For all other pages, render with navbar and footer
  return children;
}
