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
    }
  })
  if(!team){
    return redirect('/dashboard')
  }
  return (
    <div className='ml-72'>
      <DashboardHeader />
    </div>
  )
}

export default Dashboard
