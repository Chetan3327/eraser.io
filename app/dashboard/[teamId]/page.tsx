import React from 'react'
import Sidebar from '../components/sidebar'
import prisma from '@/lib/prisma'
import { currentUser } from '@/lib/current-user'
import { redirect } from 'next/navigation'

const page = async ({params}: {params: {teamId: string}}) => {
  const user = await currentUser()
  if(!user){
    return redirect('/login')
  }
  const teams = await prisma.team.findMany({
    where: {
      creatorId: user.id
    }
  })

  const team = await prisma.team.findUnique({
    where: {
      id: params.teamId
    }
  })
  
  return (
    <div>
      <Sidebar teamId={params.teamId} />
      <div className='ml-72'>
        {team?.name}
      </div>
    </div>
  )
}

export default page
