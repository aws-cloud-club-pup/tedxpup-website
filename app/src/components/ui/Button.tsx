import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  children: React.ReactNode;
  href?: string;
}

const Button = ({ variant = 'default', children, className = '', href, ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-[10px] p-[10px] rounded-[10px] font-sans text-lg transition-all duration-300";
  
  const variants = {
    default: "bg-tedx-red text-[#d3d3d3] hover:bg-[#FF4F31] active:bg-[#A4161A] shadow-lg shadow-[#F02806]/20",
    outline: "border border-white/20 text-[#d3d3d3] hover:border-[#F02806] hover:bg-[#F02806]/10",
    ghost: "text-[#d3d3d3] hover:text-white"
  };

  if (href) {
    return (
      <a 
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
