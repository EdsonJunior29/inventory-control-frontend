import { render, screen } from '@testing-library/react';
import { Label } from '../Label';
import React from 'react';

describe('LabelComponent', () => {
  it('should renders a label element', () => {
    render(<Label>Test</Label>);

    const labelElement = screen.getByText('Test');

    expect(labelElement.tagName).toBe('LABEL');
    expect(labelElement).toBeInTheDocument();
  });

  it('shuld default className', () => {
    render(<Label>Test</Label>);

    const labelElement = screen.getByText('Test');
    screen.debug(labelElement);

    expect(labelElement).toHaveClass('text-sm');
    expect(labelElement).toHaveClass('font-medium');
    expect(labelElement).toHaveClass('leading-none');
    expect(labelElement).toHaveClass('peer-disabled:cursor-not-allowed');
    expect(labelElement).toHaveClass('peer-disabled:opacity-70');
  });

  it('should merges additional className passed as props', () => {
    render(<Label className="custom-class">Test</Label>);

    const labelElement = screen.getByText('Test');

    expect(labelElement).toHaveClass('custom-class');
  });

  /**
   * OBS: Quando o asChild é true, o componente Label não renderiza um elemento <label> padrão,
   * mas sim o elemento que você passar como filho.
   * No nosso caso ele renderizou como um span, mas poderia ser qualquer outro elemento.
   * O Slot é um componente do Radix UI que permite que você passe um elemento como filho e o renderize como o elemento principal.
   */
  it('should asChild prop renders a span element', () => {
    render(
      <Label asChild>
        <span>Test</span>
      </Label>
    );

    const labelElement = screen.getByText('Test');

    expect(labelElement.tagName).toBe('SPAN');
    expect(labelElement).toBeInTheDocument();
  });

  it('should asChild prop merges additional className passed as props', () => {
    render(
      <Label asChild className="custom-class">
        <span>Test</span>
      </Label>
    );

    const labelElement = screen.getByText('Test');

    expect(labelElement.tagName).toBe('SPAN');
    expect(labelElement).toHaveClass('custom-class');
  });

  it('should forwards other HTML props like id or dat-*', () => {
    render(
      <Label id="test-id" data-testid="test-id">
        Test
      </Label>
    );

    const labelElement = screen.getByText('Test');

    expect(labelElement).toHaveAttribute('id', 'test-id');
    expect(labelElement).toHaveAttribute('data-testid', 'test-id');
  });

  it('should forwards ref to the DOM node', () => {
    const ref = React.createRef<HTMLLabelElement>();
    render(<Label ref={ref}>Test</Label>);

    const labelElement = screen.getByText('Test');

    expect(ref.current).toBe(labelElement);
  });
});
