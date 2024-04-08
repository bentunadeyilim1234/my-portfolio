import NavBar from "@/components/navbar"
import Link from "next/link"

const BlogEntry = () => {
  return (
    <div className="flex flex-col px-4 space-y-6 text-gray-700">
      <NavBar/>
      <div className="flex flex-col">
        <div className="flex flex-row items-end space-x-2">
          <p className="text-2xl">Hello World!</p>
          <Link href={"/blog"}>(go back)</Link>
        </div>
        <p className="text-sm">12.05.2024 12:35</p>
      </div>
      <p>testing</p>
    </div>
  )
}

export default BlogEntry