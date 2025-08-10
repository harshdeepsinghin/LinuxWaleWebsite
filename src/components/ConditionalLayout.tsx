'use client';

import { usePathname } from 'next/navigation';
import {
  ReactElement,
  ReactNode,
  isValidElement
} from 'react';

interface LayoutProps {
  children: ReactElement;
}

export default function ConditionalLayout({ children }: LayoutProps) {
  const pathname = usePathname();

  // For welcome page, render only the page content without navbar/footer
  if (pathname === '/welcome') {
    if (isValidElement(children)) {
      // Extract the page content from the layout structure
      const childrenArray = (children.props as { children?: ReactNode[] }).children;

      if (Array.isArray(childrenArray)) {
        // Return only the middle element (the page content), skip navbar and footer
        return <>{childrenArray[1]}</>;
      }
    }
    return null;
  }

  // For all other pages, render with navbar and footer
  return children;
}
