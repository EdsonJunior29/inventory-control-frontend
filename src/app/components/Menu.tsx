import Link from 'next/link';
import Logo from './Logo';

export default function Menu() {
    return (
        <>
            <div className='flex justify-between items-center w-full bg-black h-16'>
                <div>
                    <Logo />
                </div>
                <div>
                    <ul className='flex mr-4'>
                        <li className='text-white pr-2'><Link href="/login">Login</Link></li>
                        <li className='text-white pr-2'><Link href="/register">Cadastro</Link></li>
                        <li className='text-white pr-2'><Link href="/supplier">Fornecedores</Link></li>
                        <li className='text-white pr-2'><Link href="/product">Produtos</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};