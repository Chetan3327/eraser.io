import { currentUser } from '@/lib/current-user'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'

const page = async () => {
  const user = await currentUser()
  if(!user){
    return redirect('/login')
  }
  const teams = await prisma.team.findMany({
    where: {
      creatorId: user.id
    }
  })
  if(teams.length === 0){
    return redirect('/team/create')
  }
  return redirect(`/dashboard/${teams[0].id}`)
}

export default page