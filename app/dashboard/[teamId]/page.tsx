import { currentUser } from '@/lib/current-user'
import { redirect } from 'next/navigation'
import Dashboard from '../components/dashboard'
import Sidebar from '../components/sidebar'

const page = async ({params}: {params: {teamId: string}}) => {
  const user = await currentUser()
  if(!user){
    return redirect('/login')
  }
  if(!params.teamId){
    return redirect('/dashboard')
  }
  return (
    <div>
      <Sidebar teamId={params.teamId} />
      <Dashboard teamId={params.teamId} />
    </div>
  )
}

export default page
