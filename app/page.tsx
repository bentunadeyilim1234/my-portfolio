import NavBar from "@/components/navbar"
import Image from "next/image"
import Link from "next/link"

const Index = () => {
  return (
    <div className="flex flex-col px-4 space-y-6">
      <NavBar/>
      <div>
        <p className="text-gray-700 text-2xl">hi, I’m Ali 👋</p>
        <p className="text-gray-700 mt-1">I'm a junior software engineer at Turkey. I want to work at Google soon.</p>
      </div>
      <div>
        <p className="text-gray-700 text-2xl">some of my projects</p>
        <p className="text-gray-700 mt-1">Here are some project that I've made</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Link href={"#"} className="flex items-center justify-center rounded-md flex-col">
          <div className="items-left w-full">
            <Image
              src={"/"}
              alt={"Thumbnail"}
              width={188}
              height={106}
              className="aspect-video bg-slate-200 rounded-lg"
              draggable={false}
            />
          </div>
          <p className="w-full text-left text-black pt-1 truncate">My Portfolio</p>
        </Link>
      </div>
    </div>
  )
}

export default Index