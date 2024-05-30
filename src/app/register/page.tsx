'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function Register() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      profileName: ''
  });
  
  const handleChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  
  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Formulário enviado com sucesso!', formData);
};
  return (
    <>
        <div className="h-svh flex justify-center items-center">
            <div className="bg-cyan-400 p-4 rounded-lg shadow-lg max-w-md w-full flex flex-col items-center">
                <div className="text-amber-100 text-2xl mb-4">Cadastro</div>
                
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <div className="flex flex-col">
                        <label htmlFor="name" className='text-amber-100'>Nome:</label>
                        <input
                            className="border border-black rounded-sm px-1 py-1"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className='text-amber-100'>Email:</label>
                        <input
                            className="border border-black rounded-sm px-1 py-1"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
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
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="passwordConfirmation" className='text-amber-100'>Confirme sua senha:</label>
                        <input
                            className="border border-black rounded-sm px-2 py-1"
                            type="password"
                            id="passwordConfirmation"
                            name="passwordConfirmation"
                            value={formData.passwordConfirmation}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="profileName" className='text-amber-100'>Perfil:</label>
                        <input
                            className="border border-black rounded-sm px-2 py-1"
                            type="text"
                            id="profileName"
                            name="profileName"
                            value={formData.profileName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="bg-slate-800 text-white rounded-full px-8 py-3 mt-4 text-lg"
                        disabled={isLoading}
                    >
                        {isLoading && <span>Aguarde....</span>}
                        {!isLoading && <span>ENVIAR....</span>}
                    </button>
                </form>
            </div>
        </div>
    </>
  );
}