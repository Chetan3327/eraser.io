import { getServerSession } from "next-auth"
import React from "react"
import {authOptions} from '@/lib/authOptions'
import { redirect } from "next/navigation"
import Logo from "@/components/logo"

export default async function AuthLayout({children}: {children: React.ReactNode}){
    const session = await getServerSession(authOptions)
    if(session){
        redirect('/dashboard')
    }
    return (
        <div className="flex justify-center items-center pt-[10rem]">
            <div className="absolute flex items-center space-x-2 top-20 left-20">
                <Logo />
                <h3 className="font-bold text-3xl">eraser</h3>
            </div>
            {children}
        </div>
    )
}