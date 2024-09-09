import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { descrypt } from "./lib/session"

// Especificando as rotas publicas e protegidas
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/login', 'signup', '/']

export default async function middleware(req: NextRequest) {

    //Verifique se a rota atual é protegida ou pública
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    // Descriptar a session do cookie
    const cookie = cookies().get('session')?.value
    const session = await descrypt(cookie)

    //Redirect para o login se o usuário não estiver autenticado
    if(isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    //Redirecionar usuário para /dashboard caso esteja autenticado
    if(isPublicRoute && session?.userId && !req.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
    }

    return NextResponse.next()
}

// O Middleware de rotas não deve ser executado em
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  }