import { currentUser } from '@/lib/current-user'
import { redirect } from 'next/navigation'
import Dashboard from '../components/dashboard'
import Sidebar from '../components/sidebar'
import DashboardHeader from '../components/dashboard-header'

const page = async ({params}: {params: {teamId: string}}) => {
  const user = await currentUser()
  if(!user){
    return redirect('/login')
  }
  if(!params.teamId){
    return redirect('/dashboard')
  }
  return (
    <>
      <aside className='hidden lg:flex'>
        <Sidebar teamId={params.teamId} />
      </aside>
      <DashboardHeader teamId={params.teamId} />
      <Dashboard teamId={params.teamId} />
    </>
  )
}

export default page
