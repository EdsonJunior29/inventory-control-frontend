import { render, screen } from '@testing-library/react';
import { PopoverTrigger } from '../PopoverTrigger';
import React from 'react';

describe('PopoverTriggerComponent', () => {
  it('should renders a button element', () => {
    render(<PopoverTrigger>Test</PopoverTrigger>);

    const popoverTriggerElement = screen.getByText('Test');

    expect(popoverTriggerElement.tagName).toBe('BUTTON');
  });

  it('should renders a button element with default className', () => {
    render(<PopoverTrigger>Test</PopoverTrigger>);

    const popoverTriggerElement = screen.getByText('Test');

    expect(popoverTriggerElement).toHaveClass(
      'flex h-10 w-full items-center justify-between rounded-md border bg-popover p-4 text-sm font-medium text-popover-foreground hover:bg-popover/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
    );
  });

  it('should merges additional className passed as props', () => {
    render(<PopoverTrigger className="custom-class">Test</PopoverTrigger>);

    const popoverTriggerElement = screen.getByText('Test');

    expect(popoverTriggerElement).toHaveClass('custom-class');
  });

  it('should asChild prop renders a button element', () => {
    render(<PopoverTrigger asChild>Test</PopoverTrigger>);

    const popoverTriggerElement = screen.getByText('Test');

    expect(popoverTriggerElement.tagName).toBe('SPAN');
    expect(popoverTriggerElement).toBeInTheDocument();
  });

  it('should forwards other HTML props like id or dat-*', () => {
    render(
      <PopoverTrigger id="test-id" data-testid="test-id">
        Test
      </PopoverTrigger>
    );

    const popoverTriggerElement = screen.getByText('Test');

    expect(popoverTriggerElement).toHaveAttribute('id', 'test-id');
    expect(popoverTriggerElement).toHaveAttribute('data-testid', 'test-id');
  });

  it('should forwards ref to the DOM node', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<PopoverTrigger ref={ref}>Test</PopoverTrigger>);

    const popoverTriggerElement = screen.getByText('Test');

    expect(ref.current).toBe(popoverTriggerElement);
  });

  it('should click event works', () => {
    const handleClick = jest.fn();
    render(<PopoverTrigger onClick={handleClick}>Test</PopoverTrigger>);

    const popoverTriggerElement = screen.getByText('Test');
    popoverTriggerElement.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
