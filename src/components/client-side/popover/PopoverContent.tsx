import React from 'react';

interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  PopoverContentProps
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`absolute z-50 w-64 rounded-md border bg-popover p-4 shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});
PopoverContent.displayName = 'PopoverContent';
