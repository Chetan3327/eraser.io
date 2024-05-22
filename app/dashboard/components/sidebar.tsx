import prisma from '@/lib/prisma'
import React from 'react'
import SidebarHeader from './sidebar-header'
import { currentUser } from '@/lib/current-user'
import { redirect } from 'next/navigation'


const Sidebar = async ({teamId}: {teamId: string}) => {
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
      id: teamId
    }
  })
  
  return (
    <div className='fixed left-0 top-0 border-r h-full w-72 p-3'>
      <SidebarHeader teams={teams} />  
    </div>
  )
}

export default Sidebar
