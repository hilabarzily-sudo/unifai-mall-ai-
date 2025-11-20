import React, { forwardRef } from 'react';

/**
 * Input Component - Styled form input
 */
const Input = forwardRef(({
  label,
  error,
  hint,
  icon,
  type = 'text',
  fullWidth = false,
  disabled = false,
  className = '',
  ...props
}, ref) => {
  const baseStyles = 'px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed';
  
  const defaultStyles = error
    ? 'border-red-300 focus:ring-red-500'
    : 'border-gray-300 hover:border-gray-400';
  
  const widthStyle = fullWidth ? 'w-full' : '';
  
  const combinedClassName = `${baseStyles} ${defaultStyles} ${widthStyle} ${icon ? 'pl-12' : ''} ${className}`;

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        
        <input
          ref={ref}
          type={type}
          disabled={disabled}
          className={combinedClassName}
          {...props}
        />
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      
      {hint && !error && (
        <p className="mt-1 text-sm text-gray-500">{hint}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;

