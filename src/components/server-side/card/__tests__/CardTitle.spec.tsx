import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { CardTitle } from '../CardTitle';

describe('CardTitle', () => {
  it('should renders a div element', () => {
    render(<CardTitle>Test</CardTitle>);

    const element = screen.getByText('Test');

    expect(element.tagName).toBe('DIV');
    expect(element).toBeInTheDocument();
  });

  it('should default className', () => {
    render(<CardTitle>Test</CardTitle>);

    const element = screen.getByText('Test');

    expect(element).toHaveClass('font-semibold');
    expect(element).toHaveClass('leading-none');
    expect(element).toHaveClass('tracking-tight');
  });

  it('should merges additional className passed as props', () => {
    render(<CardTitle className="custom-class">Test</CardTitle>);

    const element = screen.getByText('Test');

    expect(element).toHaveClass('custom-class');
  });

  it('should forwards other HTML props like id or dat-*', () => {
    render(
      <CardTitle id="test-id" data-testid="test-id" data-custom="custom-data">
        Test
      </CardTitle>
    );

    const element = screen.getByTestId('test-id');

    expect(element).toHaveAttribute('id', 'test-id');
    expect(element).toHaveAttribute('data-testid', 'test-id');
    expect(element).toHaveAttribute('data-custom', 'custom-data');
  });

  it('should forwards ref to the DOM node', () => {
    const ref = createRef<HTMLDivElement>();
    render(<CardTitle ref={ref}>Test</CardTitle>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current?.textContent).toBe('Test');
  });
});
