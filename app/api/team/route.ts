import { currentUser } from "@/lib/current-user";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request){
  try {
    const user = await currentUser()
    if(!user){
      return new NextResponse("Unauthorized", {status: 401})
    }

    const {name} = await req.json()
    const team = await prisma.team.create({
      data: {
        name: name,
        creatorId: user.id
      }
    })
    return NextResponse.json(team, {status: 201})
  } catch (error) {
    return NextResponse.json({message: 'Error creating user'}, {status: 500})
  }
}