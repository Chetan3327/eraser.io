import { File, Team } from "@prisma/client"

export type TeamWithFiles = Team & {
  files: File[]
}