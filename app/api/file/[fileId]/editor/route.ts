import { currentUser } from "@/lib/current-user";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req:Request, {params}: {params: {fileId: string}}){
  try {
    const user = await currentUser()
    if(!user){
      return new NextResponse("Unauthorized", {status: 401})
    }

    const {editorData} = await req.json()
    const file = await prisma.file.update({
      where: {
        id: params.fileId
      },
      data: {
        document: editorData
      }      
    })
    return NextResponse.json(file, {status: 200})
  } catch (error) {
    console.log('[fileId/canvas PUT]')
    return NextResponse.json({message: 'error saving canvas data'}, {status: 500})
  }
}