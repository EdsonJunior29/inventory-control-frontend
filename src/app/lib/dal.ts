import 'server-only'

import { cookies } from "next/headers"
import { descrypt } from "./session"
import { NextResponse } from "next/server"
import {cache} from 'react';

export const verifySession = cache(async () => {
    const cookie = cookies().get('session')?.value
    const session = await descrypt(cookie)

    if(!session?.userId) {
        return NextResponse.redirect(new URL('/login'))
    }

    return { isAuth: true, userId: session.userId }
})