"use client"
import JoinOrCreateTeamModal from "@/components/modals/join-or-create-team-modal"
import { useEffect, useState } from "react"

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted){
    return null
  }
  return (
    <JoinOrCreateTeamModal />)
}