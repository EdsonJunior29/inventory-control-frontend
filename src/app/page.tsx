import { LoginForm } from '@/components/login/loginForm';
import Image from 'next/image';
import backgroundImage from '../../public/image/ControledeEstoque.jpg';

export default function Home() {
  return (
    <section className="h-screen">
      <Image
        src={backgroundImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="-z-10"
      />
      <div className="h-screen flex justify-end items-center px-5 mr-11">
        <LoginForm />
      </div>
    </section>
  );
}
