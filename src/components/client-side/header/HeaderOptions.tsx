'use client';

import { Button } from '@/components/ui/button';
import useHeaderOptions from './hooks/useHeaderOptions';

export const HeaderOptions = () => {
  function redirectToHome(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();
    window.location.href = '/';
  }

  function redirectToAboutUs(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();
    window.location.href = '/about-us';
  }

  const { options } = useHeaderOptions();
  return (
    <div className="flex items-center place-content-between">
      <Button
        variant="link"
        onClick={redirectToHome}
        className="text-white ml-16"
      >
        Home
      </Button>
      <div>
        <Button variant="link" onClick={redirectToAboutUs}>
          About us
        </Button>
        {options.map((option, index) => (
          <Button key={index} variant="link" className="mr-4 cursor-pointer">
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

HeaderOptions.displayName = 'HeaderOptions';
