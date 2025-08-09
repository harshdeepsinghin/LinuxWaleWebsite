'use client';

import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';

export default function ConditionalLayout({
  children,
}: {
  children: ReactElement;
}) {
  const pathname = usePathname();

  // On welcome page, only show the page content (children[1])
  if (pathname === '/welcome') {
    const childrenArray = (children.props as any).children;
    return childrenArray[1]; // Return only the {children} part, skip Navbar and Footer
  }

  return children;
}