'use client';

import { PopoverContent } from '@/components/client-side/popover/PopoverContent';
import { PopoverRoot } from '@/components/client-side/popover/PopoverRoot';
import { PopoverTrigger } from '@/components/client-side/popover/PopoverTrigger';
import React from 'react';

export default function SuppliersPage() {
  const [open, setOpen] = React.useState(false);

  const togglePopover = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <PopoverRoot>
        <PopoverTrigger asChild onClick={togglePopover}>
          <button>Open Popover</button>
        </PopoverTrigger>
        {open && (
          <PopoverContent className="mt-2">
            <div className="p-4">
              <h2 className="text-lg font-semibold">Popover Title</h2>
              <p className="mt-2 text-sm text-gray-600">
                This is the content of the popover. You can put any content
                here.
              </p>
            </div>
          </PopoverContent>
        )}
      </PopoverRoot>
    </>
  );
}
