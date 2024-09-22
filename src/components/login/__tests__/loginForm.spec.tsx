import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { LoginForm } from '../loginForm';
import { useSearchParams } from 'next/navigation';

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('Render Login Form component', () => {
  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue(null),
    });
  });

  it('should be rendered as the word email', () => {
    render(<LoginForm />);
    const wordEmail = screen.getByLabelText('Email');

    expect(wordEmail).toBeInTheDocument();
  });

  it('should be rendered a placeholder email', () => {
    render(<LoginForm />);
    const wordEmailPlaceholder = screen.getByPlaceholderText('Email');

    expect(wordEmailPlaceholder).toBeInTheDocument();
  });

  it('should be rendered as the word password', () => {
    render(<LoginForm />);
    const wordPassword = screen.getByLabelText('Password');

    expect(wordPassword).toBeInTheDocument();
  });

  it('should be rendered a placeholder password', () => {
    render(<LoginForm />);
    const wordPasswordPlaceholder = screen.getByPlaceholderText('Password');

    expect(wordPasswordPlaceholder).toBeInTheDocument();
  });

  it('should be rendered a button', () => {
    render(<LoginForm />);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    expect(submitButton).toBeInTheDocument();
  });

  it('should enable the submit button when the form is valid', async () => {
    render(<LoginForm />);

    // Verifica se os inputs e o botão estão no documento
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Preenche o e-mail e password com um formato válido
    fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'P@ssw0rd1' } });

    // Aguarda a validação do formulário.
    // Verifica se o botão está habilitado pois, os dados de email e senha estão válidos
    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
  });
});
