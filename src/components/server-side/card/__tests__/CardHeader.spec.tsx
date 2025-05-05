import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { CardHeader } from '../CardHeader';

describe('CardHeader', () => {
  it('should renders a div element', () => {
    render(<CardHeader>Test</CardHeader>);

    const element = screen.getByText('Test');

    expect(element.tagName).toBe('DIV');
    expect(element).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<CardHeader>Test</CardHeader>);

    const element = screen.getByText('Test');

    expect(element).toHaveClass('flex');
    expect(element).toHaveClass('flex-col');
    expect(element).toHaveClass('space-y-1.5');
    expect(element).toHaveClass('p-6');
  });

  it('should merges additional className passed as props', () => {
    render(<CardHeader className="custom-class">Test</CardHeader>);

    const element = screen.getByText('Test');

    expect(element).toHaveClass('custom-class');
  });

  it('should forwards other HTML props like id or dat-*', () => {
    render(
      <CardHeader id="test-id" data-testid="test-id" data-custom="custom-data">
        Test
      </CardHeader>
    );

    const element = screen.getByTestId('test-id');

    expect(element).toHaveAttribute('id', 'test-id');
    expect(element).toHaveAttribute('data-custom', 'custom-data');
  });

  it('should forwards ref to the DOM node', () => {
    const ref = createRef<HTMLDivElement>();
    render(<CardHeader ref={ref}>Test</CardHeader>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current?.textContent).toBe('Test');
  });
});
