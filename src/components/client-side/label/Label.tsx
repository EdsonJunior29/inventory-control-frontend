'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
);

/**
 * 1. children?: React.ReactNode
 * Definição: Esta propriedade define o conteúdo interno (filhos) que um componente pode renderizar.
 * Tipo: React.ReactNode permite qualquer tipo de nó renderizável em React (strings, JSX, componentes, etc.).
 *
 * 2. asChild?: boolean
 * Definição: Uma flag (boolean) que indica se o componente deve renderizar seus filhos diretamente como o "elemento principal" em vez de criar um novo elemento DOM.
 * Uso típico: Com bibliotecas como Radix UI, o asChild permite que você substitua o wrapper padrão (como <div> ou <button>) por outro elemento sem perder funcionalidades (como acessibilidade, eventos, etc.).
 */

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'label';
    return (
      <Comp className={cn(labelVariants(), className)} ref={ref} {...props} />
    );
  }
);

Label.displayName = 'Label';
