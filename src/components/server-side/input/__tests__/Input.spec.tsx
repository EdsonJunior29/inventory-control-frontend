import { render, screen } from '@testing-library/react';
import { Input } from '../Input';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('InputComponent', () => {
  //Renderização básica
  it('should renders a input element', () => {
    render(<Input placeholder="Teste input" />);

    const input = screen.getByPlaceholderText('Teste input');

    expect(input).toBeInTheDocument();
  });

  //Adicionar a ação de incluir informações no input(Usuário digitou a informação)
  it('should accepts a value and allows user typing', async () => {
    render(<Input placeholder="Test input" />);

    const input = screen.getByPlaceholderText('Test input');
    await userEvent.type(input, 'test@example.com');

    expect(input).toHaveValue('test@example.com');
  });

  //Utilizando a className
  it('should applies custom className', () => {
    render(<Input placeholder="test" className="custom-className" />);

    const input = screen.getByPlaceholderText('test');

    expect(input).toHaveClass('custom-className');
  });

  //Utilizando a ref
  it('should forwards the ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('INPUT');
  });

  //Utilizando o type(Messe exemplo passamos o data-testid via props)
  it('sets the type attribute correctly', () => {
    render(<Input data-testid="password-input" type="password" />);

    const input = screen.getByTestId('password-input');

    expect(input).toHaveAttribute('type', 'password');
  });
});
