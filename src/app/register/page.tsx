import Button from '@/components/button'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import React from 'react'

export default async function RegisterPage () {
  const session = await getServerSession()

  if(!session) {
    redirect('/')
  }

  return (
    <>
      <h2>Olá, { session?.user?.name }</h2>
      <div>Register page</div>
      <Button></Button>
    </>
    
  )
}

