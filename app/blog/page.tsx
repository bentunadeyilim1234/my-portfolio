import NavBar from "@/components/navbar"
import Link from "next/link"

const Blog = () => {
  return (
    <div className="flex flex-col px-4 space-y-6">
      <NavBar/>
      <p className="text-gray-700 text-2xl">blog</p>
      <div className="space-y-3 text-white">
        <Link href={"/blog/0"}>
          <div className="rounded-lg w-full bg-[#D1BB9E] px-2 py-1">
            <div className="flex justify-between">
              <p className="text-2xl">Hello World!</p>
              <p>3 days ago</p>
            </div>
            <p className="text-gray-100 text-sm text-wrap line-clamp-2 truncate">testing</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Blog