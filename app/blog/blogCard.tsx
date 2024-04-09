import Link from "next/link"

const BlogCard = ({id, title, date, description}: {id: number, title: string, date: string, description: string}) => {
  return (
    <Link href={"/blog/"+String(id)}>
      <div className="rounded-lg w-full bg-[#D1BB9E] px-2 py-1">
        <div className="flex justify-between">
          <p className="text-2xl">{title}</p>
          <p>{date}</p>
        </div>
        <p className="text-gray-100 text-sm text-wrap line-clamp-2 truncate">{description}</p>
      </div>
    </Link>
  )
}

export default BlogCard