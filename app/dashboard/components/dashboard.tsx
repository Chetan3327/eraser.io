import { currentUser } from '@/lib/current-user'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import React from 'react'
import DashboardTable from './dashboard-table'

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
      files: {
        include: {
          author: true
        },
        orderBy: {
          updatedAt: 'desc'
        }
      }
    }
  })
  if(!team){
    return redirect('/dashboard')
  }
  return (
    <div className='lg:ml-72 pt-20'>
      <DashboardTable team={team} />
      {team.files.length === 0 && (
      <div className='text-muted-foreground/50 font-bold pt-12 flex justify-center items-center'>
        Your list is empty
      </div>)}
    </div>
  )
}

export default Dashboard
