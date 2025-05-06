import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { CardContent } from '../CardContent';

describe('CardContent', () => {
  it('should renders a div element', () => {
    render(<CardContent>Test</CardContent>);

    const element = screen.getByText('Test');

    expect(element.tagName).toBe('DIV');
    expect(element).toBeInTheDocument();
  });

  it('should default className', () => {
    render(<CardContent>Test</CardContent>);

    const element = screen.getByText('Test');

    expect(element).toHaveClass('p-6');
    expect(element).toHaveClass('pt-0');
  });

  it('should merges additional className passed as props', () => {
    render(<CardContent className="custom-class">Test</CardContent>);

    const element = screen.getByText('Test');

    expect(element).toHaveClass('custom-class');
  });

  it('should forwards other HTML props like id or dat-*', () => {
    render(
      <CardContent id="test-id" data-testid="test-id" data-custom="custom-data">
        Test
      </CardContent>
    );

    const element = screen.getByTestId('test-id');

    expect(element).toHaveAttribute('id', 'test-id');
    expect(element).toHaveAttribute('data-testid', 'test-id');
    expect(element).toHaveAttribute('data-custom', 'custom-data');
  });

  it('should forwards ref to the DOM node', () => {
    const ref = createRef<HTMLDivElement>();
    render(<CardContent ref={ref}>Test</CardContent>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current?.textContent).toBe('Test');
  });
});
