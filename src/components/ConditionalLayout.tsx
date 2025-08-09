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

  if (pathname === '/welcome') {
    if (isValidElement(children)) {
      // Explicitly type the props so TS knows `children` exists
      const innerChildren = (children.props as { children?: ReactNode | ReactNode[] })
        ?.children;

      if (Array.isArray(innerChildren)) {
        return <>{innerChildren[1] ?? null}</>;
      }

      return <>{innerChildren ?? null}</>;
    }

    return null;
  }

  return children;
}
