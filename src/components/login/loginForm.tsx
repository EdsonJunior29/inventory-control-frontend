'use client';

import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearchParams } from 'next/navigation';

const formSchema = z.object({
  email: z
    .string()
    .email({ message: 'Por favor, insira um e-mail válido' })
    .trim(),
  password: z
    .string()
    .min(8, { message: 'Sua senha deve ter pelo menos 8 caracteres' })
    .trim()
    .refine((value) => !/123|234|345|456|567|678|789/.test(value), {
      message: 'Não pode conter números sequenciais',
    }),
});

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    signIn('credentials', {
      ...values,
      callbackUrl: '/register',
    });
  }

  const { isSubmitting } = form.formState;

  return (
    <div className="flex justify-center items-center bg-cyan-500 rounded-2xl w-[500px] h-[300px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 my-4 flex flex-col items-center"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="w-[350px]"
                    disabled={isSubmitting}
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    disabled={isSubmitting}
                    className="w-[350px]"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error === 'CredentialsSignin' && (
            <div className="text-red-600">
              <p>Error ao validar o usuário.</p>
              Verifique seu e-mail e senha e tente novamente.
            </div>
          )}
          <Button
            disabled={isSubmitting}
            type="submit"
            className="hover:bg-orange-900"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};
