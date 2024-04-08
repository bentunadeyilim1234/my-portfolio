import NavBar from "@/components/navbar"
import Link from "next/link"

const Index = () => {
  return (
    <div className="flex flex-col px-4 space-y-6">
      <NavBar/>
      <div>
        <p className="text-gray-700 text-2xl">blog</p>
      </div>
    </div>
  )
}

export default Index