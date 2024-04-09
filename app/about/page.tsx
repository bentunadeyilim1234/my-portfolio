import NavBar from "@/components/navbar"

const About = () => {
  return (
    <div className="flex flex-col px-4 pt-6 space-y-6 text-gray-700">
      <NavBar/>
      <div className="space-y-1">
        <p className="text-2xl">about me</p>
        <p>I’m a junior software engineer at Turkey. I want to work at Google soon</p>
      </div>
      <div className="space-y-1">
        <p className="text-2xl">my knowledge about programming</p>
        <p>I know Python, React, Rust and Luau. I’m currently working on developing websites with Next.JS</p>
      </div>
      <div className="space-y-1">
        <p className="text-2xl">how did i start?</p>
        <p>I started programming with python back in 2018</p>
      </div>
    </div>
  )
}

export default About