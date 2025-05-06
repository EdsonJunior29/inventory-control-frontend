import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { CardFooter } from '../CardFooter';

describe('CardHeader', () => {
  it('should renders a div element', () => {
    render(<CardFooter>Test</CardFooter>);

    const element = screen.getByText('Test');

    expect(element.tagName).toBe('DIV');
    expect(element).toBeInTheDocument();
  });

  it('should default className', () => {
    render(<CardFooter>Test</CardFooter>);

    const element = screen.getByText('Test');

    expect(element).toHaveClass('flex');
    expect(element).toHaveClass('items-center');
    expect(element).toHaveClass('p-6');
    expect(element).toHaveClass('pt-0');
  });

  it('should merges additional className passed as props', () => {
    render(<CardFooter className="custom-class">Test</CardFooter>);

    const element = screen.getByText('Test');

    expect(element).toHaveClass('custom-class');
  });

  it('should forwards other HTML props like id or dat-*', () => {
    render(
      <CardFooter id="test-id" data-testid="test-id" data-custom="custom-data">
        Test
      </CardFooter>
    );

    const element = screen.getByTestId('test-id');

    expect(element).toHaveAttribute('id', 'test-id');
    expect(element).toHaveAttribute('data-custom', 'custom-data');
  });

  it('should forwards ref to the DOM node', () => {
    const ref = createRef<HTMLDivElement>();
    render(<CardFooter ref={ref}>Test</CardFooter>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current?.textContent).toBe('Test');
  });
});
