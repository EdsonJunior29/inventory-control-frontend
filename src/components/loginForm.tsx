'use client'

export default function LoginForm() {

    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        console.log(formData.get('email'))
        console.log(formData.get('password'))

        const inputData = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        console.log(inputData)
    }

    return (
        <>
            <form onSubmit={login} className="bg-zinc-300 p-12 rounded-lg w-96 max-w-full flex justify-center gap-2 flex-col">
                <div className="flex justify-center items-center">
                    <h2 className="font-bold text-xl mb-3">Faça seu Login</h2>
                </div>
                <input id="email-login" type="email" name="email" placeholder="Digite seu e-mail" className="w-full"/>
                <input id="password-login" type="password" name="password" placeholder="Digite sua senha" className="w-full"/>
                <button className="bg-orange-400 text-black rounded-sm w-full" type="submit">Login</button>
            </form>
        </>
        
    );
  }
