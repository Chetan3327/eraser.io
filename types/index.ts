import { File, Team, User } from "@prisma/client"

export type TeamWithFiles = Team & {
  files: File[]
}

export type TeamWithFilesWithAuthor = Team & {
  files: File[] & {
    author: User
  }
}
