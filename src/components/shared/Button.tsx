import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'urgent' | 'massive';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  disabled = false,
  icon,
  className = '',
  target,
  rel
}) => {
  const baseClasses = 'portafolio-cta-button inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'primary bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'secondary bg-transparent border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 focus:ring-gray-500',
    urgent: 'urgent primary bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 animate-pulse',
    massive: 'massive primary bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 text-lg py-4 px-8'
  };

  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  const buttonContent = (
    <>
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={target}
          rel={rel}
          onClick={disabled ? (e) => e.preventDefault() : undefined}
        >
          {buttonContent}
        </a>
      );
    } else {
      return (
        <Link href={href} className={combinedClasses}>
          {buttonContent}
        </Link>
      );
    }
  }

  return (
    <button
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {buttonContent}
    </button>
  );
};

export default Button;
