'use client'

import { useFormState, useFormStatus } from "react-dom"
import { signup } from "../actions/auth"

export function SignupForm() {
    const [state, action] = useFormState(signup, undefined)

    function SubmitButton() {
        const { pending } = useFormStatus()

        console.log(pending);

        return (
            <button disabled={pending} type="submit">
                Sign Up
            </button>
        )
    }

    return (
        <form action={action}>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email"  placeholder="Email"/>
            </div>
            {state?.errors?.email && <p>{state.errors.email}</p>}
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
            </div>
            {state?.errors?.password && (
                <div>
                    <p>Password must:</p>
                    <ul>
                        {state.errors.password.map((error) => (
                            <li key={error}>- {error}</li>
                        ))}
                    </ul>
                </div>
            )}
            <SubmitButton />
        </form>
    )
}