"use client"
import Image from 'next/image'

const Logo = () => {
  return (
    <Image src={'/eraser.svg'} className='cursor-pointer inline' width={50} height={50} alt='logo' />
  )
}

export default Logo
