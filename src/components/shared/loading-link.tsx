'use client';

import Link from 'next/link';
import { useNavigationLoading } from '@/hooks/useNavigationLoading';
import { MouseEvent, ReactNode } from 'react';

interface LoadingLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  replace?: boolean;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  [key: string]: any;
}

const LoadingLink = ({ 
  href, 
  children, 
  className, 
  replace = false, 
  onClick,
  ...props 
}: LoadingLinkProps) => {
  const { navigateWithLoading } = useNavigationLoading();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Permitir navegación normal si se presiona Ctrl/Cmd o click medio
    if (e.ctrlKey || e.metaKey || e.button === 1) {
      return;
    }

    // Ejecutar onClick personalizado si existe
    if (onClick) {
      onClick(e);
      if (e.defaultPrevented) {
        return;
      }
    }

    // Prevenir navegación normal y usar nuestra navegación con loading
    e.preventDefault();
    navigateWithLoading(href, { replace });
  };

  return (
    <Link 
      href={href} 
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LoadingLink;
