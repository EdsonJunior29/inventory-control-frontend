import { SignupFormSchema, FormState } from "../lib/definitions";
import { createSession, deleteSession } from "../lib/session";

export async function signup(state: FormState, formData: FormData){
    // Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if(!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    }

    const payload = {
        email: formData.get('email'),
        password: formData.get('password'),
    };

    try {
        const response = await fetch('http://localhost/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        const data = await response.json();

        if(!response.ok) {
            return {
                message: 'An error occurred while user validated.',
            }
        }

        //Criando a session(cookie)
        await createSession('15', 'dnednefbyrbfybebfyer');
        // redirect('/Home')

       
        console.log('Response data:', data);
        return;
    } catch (error) {
        //enviar para a tela de erro ou voltar para o login
    }
}

export async function logout() {
        deleteSession()
        //redirect('/login')
}