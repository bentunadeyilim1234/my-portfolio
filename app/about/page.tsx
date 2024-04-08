import NavBar from "@/components/navbar"

const Index = () => {
  return (
    <div className="flex flex-col px-4 space-y-6">
      <NavBar/>
      <div className="">
        <p className="text-gray-700 text-2xl">about me</p>
        <p className="text-gray-700 mt-1">I’m a junior software engineer at Turkey. I want to work at Google soon.</p>
      </div>
      <div>
        <p className="text-gray-700 text-2xl">my knowledge about programming</p>
        <p className="text-gray-700 mt-1">I know Python, React, Rust and Luau. I’m currently working on developing websites with Next.JS</p>
      </div>
    </div>
  )
}

export default Index