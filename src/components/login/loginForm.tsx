"use client"
 
import { signIn } from "next-auth/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    email: z.string().email({message: 'Please enter a valid email'}).trim(),
    password: z.string()
        .min(8, {message: 'Be at least 8 characters long'})
        .regex(/[A-Z]/, {message: 'Contain at least one uppercase letter.'})
        .regex(/[a-z]/, {message: 'Contain at least one lowercase letter.'})
        .regex(/[0-9]/, {message: 'Contain at least one number.'})
        .regex(/[a-zA-Z0-9_]/, {message: 'Contain at least one special character.'}).trim()
        .refine(value => !/123|234|345|456|567|678|789/.test(value), {
            message: 'Does not contain sequential numbers'})
})

export const LoginForm = () =>  {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)

        signIn("credentials", {
            ...values,
            callbackUrl: "/register"
        })
    }

    const {isSubmitting, isValid } = form.formState

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 my-4 flex flex-col items-center">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input 
                                    type="email"
                                    className="w-[350px]"
                                    disabled={isSubmitting}
                                    placeholder="Email" {...field} 
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
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    disabled={isSubmitting}
                                    className="w-[350px]" 
                                    placeholder="Password" {...field} 
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        disabled={!isValid || isSubmitting}
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    );
  }
