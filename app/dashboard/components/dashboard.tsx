import { currentUser } from '@/lib/current-user'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import React from 'react'
import DashboardHeader from './dashboard-header'

const Dashboard = async ({teamId}: {teamId: string}) => {
  const user = await currentUser()
  if(!user){
    return redirect('/login')
  }
  const team = await prisma.team.findUnique({
    where: {
      id: teamId
    },
    include: {
      files: true
    }
  })
  if(!team){
    return redirect('/dashboard')
  }
  return (
    <div className='ml-72 mt-14'>
      {team.files.length === 0 && (<p className='text-muted-foreground'>Your list is empty</p>)}

      <pre>{JSON.stringify(team.files, null, 2)}</pre>
    </div>
  )
}

export default Dashboard
