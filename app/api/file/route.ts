import { currentUser } from "@/lib/current-user";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(req: Request){
  try {
    const user = await currentUser()
    if(!user){
      return new NextResponse("Unauthorized", {status: 401})
    }

    const {teamId} = await req.json()
    const file = await prisma.file.create({
      data: {
        teamId: teamId,
        authorId: user.id
      }
    })
    return NextResponse.json(file, {status: 201})
  } catch (error) {
    console.log(error)
    return NextResponse.json({message: 'Error creating file'}, {status: 500})
  }
}