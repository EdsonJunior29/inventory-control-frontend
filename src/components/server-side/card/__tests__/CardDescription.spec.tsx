import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { CardDescription } from '../CardDescription';

describe('CardDescription', () => {
  it('should renders a div element', () => {
    render(<CardDescription>Test</CardDescription>);

    const element = screen.getByText('Test');

    expect(element.tagName).toBe('DIV');
    expect(element).toBeInTheDocument();
  });

  it('should default className', () => {
    render(<CardDescription>Test</CardDescription>);

    const element = screen.getByText('Test');

    expect(element).toHaveClass('text-sm');
    expect(element).toHaveClass('text-muted-foreground');
  });

  it('should merges additional className passed as props', () => {
    render(<CardDescription className="custom-class">Test</CardDescription>);

    const element = screen.getByText('Test');

    expect(element).toHaveClass('custom-class');
  });

  it('should forwards other HTML props like id or dat-*', () => {
    render(
      <CardDescription
        id="test-id"
        data-testid="test-id"
        data-custom="custom-data"
      >
        Test
      </CardDescription>
    );

    const element = screen.getByTestId('test-id');

    expect(element).toHaveAttribute('id', 'test-id');
    expect(element).toHaveAttribute('data-custom', 'custom-data');
  });

  it('should forwards ref to the DOM node', () => {
    const ref = createRef<HTMLDivElement>();
    render(<CardDescription ref={ref}>Test</CardDescription>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current?.textContent).toBe('Test');
  });
});
