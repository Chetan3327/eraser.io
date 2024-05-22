"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()
  return (
    <Image src={'/eraser.svg'} onClick={() => router.push('/')} className='cursor-pointer inline' width={50} height={50} alt='logo' />
  )
}

export default Logo
