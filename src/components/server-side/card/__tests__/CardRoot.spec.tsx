import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { CardRoot } from '../CardRoot';

describe('CardRoot', () => {
  it('should renders a div element', () => {
    render(<CardRoot>Test</CardRoot>);

    const element = screen.getByText('Test');

    expect(element.tagName).toBe('DIV');
    expect(element).toBeInTheDocument();
  });

  it('should default className', () => {
    render(<CardRoot>Test</CardRoot>);

    const element = screen.getByText('Test');

    expect(element).toHaveClass('rounded-xl');
    expect(element).toHaveClass('border');
    expect(element).toHaveClass('bg-card');
    expect(element).toHaveClass('text-card-foreground');
    expect(element).toHaveClass('shadow');
  });

  it('should merges additional className passed as props', () => {
    render(<CardRoot className="custom-class">Test</CardRoot>);

    const element = screen.getByText('Test');

    expect(element).toHaveClass('custom-class');
  });

  it('should forwards other HTML props like id or dat-*', () => {
    render(
      <CardRoot id="test-id" data-testid="test-id" data-custom="custom-data">
        Test
      </CardRoot>
    );

    const element = screen.getByTestId('test-id');

    expect(element).toHaveAttribute('id', 'test-id');
    expect(element).toHaveAttribute('data-custom', 'custom-data');
  });

  it('should forwards ref to the DOM node', () => {
    const ref = createRef<HTMLDivElement>();
    render(<CardRoot ref={ref}>Test</CardRoot>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current?.textContent).toBe('Test');
  });
});
