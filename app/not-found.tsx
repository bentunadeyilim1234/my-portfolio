"use client"

import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter()
  const GoBack = () => {
    router.back()
  }
  return (
    <div className="flex flex-col h-full text-gray-700 items-center justify-center space-y-3">
      <p className="text-3xl text-center">uh oh, we could not find this page</p>
      <button onClick={GoBack}>go back</button>
    </div>
  )
}

export default NotFound