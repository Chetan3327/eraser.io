"use client"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

const JoinOrCreateTeamModal = () => {
  const router = useRouter()
  const {isOpen, onClose, onOpen, type, data} = useModal()
  const [isLoading, setIsLoading] = useState(false)
  const isModalOpen = isOpen && type === 'joinOrCreateTeam'

  const createTeam = () => {
    router.push('/team/create')
    onClose()
  }
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
            <DialogTitle className="text-2xl text-center font-bold">Join Team</DialogTitle>
            <DialogDescription className="text-center text-zinc-500">
              You have no available teams. <Button onClick={() => createTeam()} variant='link' className="text-blue-500 outline-none">Create a new one</Button>
            </DialogDescription>
        </DialogHeader>
        <DialogFooter className="px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <Button variant='outline' disabled={isLoading} onClick={onClose}>Cancel</Button>
            <Button variant='primary' disabled={true}>Join Team</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default JoinOrCreateTeamModal