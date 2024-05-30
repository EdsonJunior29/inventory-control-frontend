export default function Login() {
    return (
        <>
            <div className="h-svh flex justify-center items-center">
                <div className="bg-cyan-400 p-4 rounded-lg shadow-lg max-w-md w-full flex flex-col items-center">
                    <div className="text-amber-100 text-2xl mb-4">Login</div>
                    
                    <form className="flex flex-col items-center">
                        <div className="flex flex-col">
                            <label htmlFor="email" className='text-amber-100'>Email:</label>
                            <input
                                className="border border-black rounded-sm px-1 py-1"
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className='text-amber-100'>Senha:</label>
                            <input
                                className="border border-black rounded-sm px-1 py-1"
                                type="password"
                                id="password"
                                name="password"
                                required
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="bg-slate-800 text-white rounded-full px-8 py-3 mt-4 text-lg"
                        >
                            ENVIAR
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}