import { render, screen } from '@testing-library/react';
import { PopoverContent } from '../PopoverContent';
import React from 'react';

describe('PopoverContentComponent', () => {
  it('should renders a div element', () => {
    render(<PopoverContent>Test</PopoverContent>);

    const popoverContentElement = screen.getByText('Test');

    expect(popoverContentElement.tagName).toBe('DIV');
  });

  it('should renders a div element with default className', () => {
    render(<PopoverContent>Test</PopoverContent>);

    const popoverContentElement = screen.getByText('Test');

    expect(popoverContentElement).toHaveClass('absolute');
    expect(popoverContentElement).toHaveClass('z-50');
    expect(popoverContentElement).toHaveClass('w-64');
    expect(popoverContentElement).toHaveClass('rounded-md');
    expect(popoverContentElement).toHaveClass('border');
    expect(popoverContentElement).toHaveClass('bg-popover');
    expect(popoverContentElement).toHaveClass('p-4');
    expect(popoverContentElement).toHaveClass('shadow-lg');
  });

  it('should merges additional className passed as props', () => {
    render(<PopoverContent className="custom-class">Test</PopoverContent>);

    const popoverContentElement = screen.getByText('Test');

    expect(popoverContentElement).toHaveClass('custom-class');
  });

  it('should forwards other HTML props like id or dat-*', () => {
    render(
      <PopoverContent id="test-id" data-testid="test-id">
        Test
      </PopoverContent>
    );

    const popoverContentElement = screen.getByText('Test');

    expect(popoverContentElement).toHaveAttribute('id', 'test-id');
    expect(popoverContentElement).toHaveAttribute('data-testid', 'test-id');
  });

  it('should forwards ref to the DOM node', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<PopoverContent ref={ref}>Test</PopoverContent>);

    const popoverContentElement = screen.getByText('Test');

    expect(ref.current).toBe(popoverContentElement);
  });
});
