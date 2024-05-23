import { currentUser } from '@/lib/current-user'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import Workspace from './components/workspace'

const page = async ({params}: {params: {fileId: string}}) => {
  const user = await currentUser()
  if(!user){
    return redirect('/login')
  }
  const file = await prisma.file.findUnique({
    where: {
      id: params.fileId
    }
  })
  if(!file){
    return redirect('/dashboard')
  }
  return (
    <Workspace file={file} />
  )
}

export default page
