import { currentUser } from '@/lib/current-user'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async ({params}: {params: {fileId: string}}) => {
  const user = await currentUser()
  if(!user){
    return redirect('/dashboard')
  }
  const file = await prisma.file.findUnique({
    where: {
      id: params.fileId
    }
  })
  console.log(file)
  return (
    <div>
      {params.fileId}
    </div>
  )
}

export default page
