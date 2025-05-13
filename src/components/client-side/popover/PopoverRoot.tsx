import React from 'react';

interface PopoverRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const PopoverRoot = React.forwardRef<HTMLDivElement, PopoverRootProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`absolute z-50 w-72 rounded-md border bg-popover p-4 shadow-lg ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PopoverRoot.displayName = 'PopoverRoot';
