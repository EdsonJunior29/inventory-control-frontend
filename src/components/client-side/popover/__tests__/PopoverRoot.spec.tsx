import { render, screen } from '@testing-library/react';
import { PopoverRoot } from '../PopoverRoot';
import React from 'react';

describe('PopoverRootComponent', () => {
  it('should renders a div element', () => {
    render(<PopoverRoot>Test</PopoverRoot>);

    const popoverRootElement = screen.getByText('Test');

    expect(popoverRootElement.tagName).toBe('DIV');
  });

  it('should renders a div element with default className', () => {
    render(<PopoverRoot>Test</PopoverRoot>);

    const popoverRootElement = screen.getByText('Test');

    expect(popoverRootElement).toHaveClass('absolute');
    expect(popoverRootElement).toHaveClass('z-50');
    expect(popoverRootElement).toHaveClass('w-72');
    expect(popoverRootElement).toHaveClass('rounded-md');
    expect(popoverRootElement).toHaveClass('border');
    expect(popoverRootElement).toHaveClass('bg-popover');
    expect(popoverRootElement).toHaveClass('p-4');
    expect(popoverRootElement).toHaveClass('shadow-lg');
  });

  it('should merges additional className passed as props', () => {
    render(<PopoverRoot className="custom-class">Test</PopoverRoot>);

    const popoverRootElement = screen.getByText('Test');

    expect(popoverRootElement).toHaveClass('custom-class');
  });

  it('should forwards other HTML props like id or dat-*', () => {
    render(
      <PopoverRoot id="test-id" data-testid="test-id">
        Test
      </PopoverRoot>
    );

    const popoverRootElement = screen.getByText('Test');

    expect(popoverRootElement).toHaveAttribute('id', 'test-id');
    expect(popoverRootElement).toHaveAttribute('data-testid', 'test-id');
  });

  it('should forwards ref to the DOM node', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<PopoverRoot ref={ref}>Test</PopoverRoot>);

    const popoverRootElement = screen.getByText('Test');

    expect(ref.current).toBe(popoverRootElement);
  });
});
