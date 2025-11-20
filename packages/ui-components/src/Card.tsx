import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'solid' | 'outline' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
}

/**
 * Card Component - Glassmorphism styled card
 */
export function Card({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  onClick,
  className = '',
  ...props
}: CardProps) {
  const baseStyles = 'rounded-2xl border transition-all duration-200';
  
  const variantStyles = {
    default: 'bg-white/40 backdrop-blur-xl border-white/20 shadow-lg',
    solid: 'bg-white border-gray-200 shadow-md',
    outline: 'bg-transparent border-gray-300',
    glass: 'bg-white/60 backdrop-blur-2xl border-white/30 shadow-2xl',
  };
  
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  };
  
  const hoverStyles = hover ? 'hover:scale-[1.02] hover:shadow-xl cursor-pointer' : '';
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${className}`;

  return (
    <div
      onClick={onClick}
      className={combinedClassName}
      {...props}
    >
      {children}
    </div>
  );
}

