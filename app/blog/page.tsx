import NavBar from "@/components/navbar"
import BlogCard from "./blogCard"

const Blog = () => {
  return (
    <div className="flex flex-col px-4 pt-6 space-y-6">
      <NavBar/>
      <p className="text-gray-700 text-2xl">blog</p>
      <div className="flex flex-col space-y-3 text-white">
        <BlogCard
          id={0}
          title={"Hello World!"}
          date={"3 days ago"}
          description={"testing"}
        />
      </div>
    </div>
  )
}

export default Blog