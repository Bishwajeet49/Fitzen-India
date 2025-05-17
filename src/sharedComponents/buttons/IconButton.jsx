import React from 'react';

/**
 * IconButton component for buttons with icons
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - Icon element to display
 * @param {string} [props.position='left'] - Position of the icon (left, right, only)
 * @param {boolean} [props.rounded=false] - Whether to use a fully rounded button
 * @param {string} [props.variant='primary'] - Button variant (primary, secondary, outline, text)
 * @param {string} [props.size='md'] - Button size (sm, md, lg)
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @param {React.ReactNode} [props.children] - Button content
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.type='button'] - Button type (button, submit, reset)
 */
const IconButton = ({
  icon,
  position = 'left',
  rounded = false,
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  className = '',
  onClick,
  type = 'button',
  ...rest
}) => {
  // Base classes for all buttons
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Border radius classes
  const radiusClasses = rounded 
    ? 'rounded-full' 
    : (position === 'only' ? 'rounded-full' : 'rounded-md');
  
  // Variant-specific classes
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    text: 'bg-transparent text-blue-600 hover:bg-gray-100 hover:text-blue-700 focus:ring-blue-500'
  };
  
  // Size-specific classes
  const sizeClasses = {
    sm: position === 'only' ? 'p-1.5 text-sm' : 'px-3 py-1.5 text-sm',
    md: position === 'only' ? 'p-2 text-base' : 'px-4 py-2 text-base',
    lg: position === 'only' ? 'p-2.5 text-lg' : 'px-5 py-2.5 text-lg'
  };
  
  // Disabled classes
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${radiusClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  // Icon rendering with appropriate spacing
  const renderContent = () => {
    if (position === 'only') {
      return icon;
    } else if (position === 'left') {
      return (
        <>
          <span className="mr-2">{icon}</span>
          {children}
        </>
      );
    } else if (position === 'right') {
      return (
        <>
          {children}
          <span className="ml-2">{icon}</span>
        </>
      );
    }
  };
  
  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {renderContent()}
    </button>
  );
};

export default IconButton; 