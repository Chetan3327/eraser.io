import { currentUser } from "@/lib/current-user";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req:Request, {params}: {params: {fileId: string}}){
  try {
    const user = await currentUser()
    if(!user){
      return new NextResponse("Unauthorized", {status: 401})
    }

    const {name} = await req.json()
    const file = await prisma.file.update({
      where: {
        id: params.fileId
      },
      data: {
        name
      }      
    })
    return NextResponse.json(file, {status: 200})
  } catch (error) {
    console.log('[fileId PUT]')
    return NextResponse.json({message: 'Error updateing file'}, {status: 500})
  }
}