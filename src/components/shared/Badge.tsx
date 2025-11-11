import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'urgent' | 'limited' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  icon,
  className = '',
  animate = false
}) => {
  const baseClasses = 'inline-flex items-center gap-2 font-bold rounded-lg border';
  
  const variantClasses = {
    default: 'bg-gray-50 text-gray-700 border-gray-200',
    urgent: 'portafolio-urgency-badge bg-red-50 text-red-700 border-red-200',
    limited: 'final-cta-badge bg-orange-50 text-orange-700 border-orange-200',
    success: 'bg-green-50 text-green-700 border-green-200',
    warning: 'bg-yellow-50 text-yellow-700 border-yellow-200'
  };

  const sizeClasses = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1.5 text-sm',
    large: 'px-4 py-2 text-base'
  };

  const animationClasses = animate ? 'animate-pulse' : '';

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${animationClasses} ${className}`;

  return (
    <div className={combinedClasses}>
      {icon && <span className="badge-icon">{icon}</span>}
      {children}
    </div>
  );
};

export default Badge;
