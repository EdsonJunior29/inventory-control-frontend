import { render, screen } from '@testing-library/react';
import { LoginForm } from '../loginForm';

describe('Render Login Form component', () => {
  it('should be rendered as the word email', () => {
    render(<LoginForm />);
    screen.getByLabelText('Email');
  });

  it('should be rendered a placeholder email', () => {
    render(<LoginForm />);
    screen.getByPlaceholderText('Email');
  });

  it('should be rendered as the word password', () => {
    render(<LoginForm />);
    screen.getByLabelText('Password');
  });

  it('should be rendered a placeholder password', () => {
    render(<LoginForm />);
    screen.getByPlaceholderText('Password');
  });
});
