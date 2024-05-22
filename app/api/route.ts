import { NextResponse } from "next/server"

export async function GET(req: Request){
  try {
    return NextResponse.json({message: 'Live!'}) 
  } catch (error) {
    return NextResponse.json({message: 'Internal server error'}, {status: 500})
  }
}