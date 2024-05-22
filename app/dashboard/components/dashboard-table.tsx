"use client"
import { ActionTooltip } from '@/components/action-tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { format } from 'date-fns'
import { MoreHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';

export type TeamWithFiles = {
  id: string;
  name: string;
  files: {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    author: {
      id: string;
      name: string | null;
      email: string | null;
      emailVerified: Date | null;
      password: string | null;
      image: string | null;
      createdAt: Date;
      updatedAt: Date;
    };
  }[];
};

const date_format = "d MMM yyyy, HH:mm"


const DashboardTable = ({team}: {team: TeamWithFiles}) => {
  const router = useRouter()
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>NAME</TableHead>
          <TableHead>CREATED</TableHead>
          <TableHead>EDITED</TableHead>
          <TableHead>AUTHOR</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {team.files.map((file) => (
          <TableRow onClick={() => router.push(`/workspace/${file.id}`)} className='cursor-pointer' key={file.id}>
            <TableCell>{file.name}</TableCell>
            <TableCell>{format(new Date(file.createdAt), date_format)}</TableCell>
            <TableCell>{format(new Date(file.updatedAt), date_format)}</TableCell>
            <TableCell>
              <ActionTooltip side='bottom' label={file.author.name || ""}>
                <Avatar>
                  <AvatarImage src={file.author.image || ""} />
                  <AvatarFallback>{file.author.name}</AvatarFallback>
                </Avatar>
              </ActionTooltip>
            </TableCell>
            <TableCell>
              <MoreHorizontal />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default DashboardTable
