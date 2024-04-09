import NavBar from "@/components/navbar"
import Image from "next/image"
import Link from "next/link"

const projectData = [
  {
    title: 'My Portfolio',
    thumbnail: '/portfolio.png',
    repository: 'https://github.com/bentunadeyilim1234/my-portfolio',
  },
  {
    title: 'ServerJars Python Wrapper',
    thumbnail: '/serverjars.png',
    repository: 'https://github.com/bentunadeyilim1234/ServerJars-Wrapper-Python',
  },
  {
    title: 'audio2mp4',
    thumbnail: '/audio2mp4.png',
    repository: 'https://github.com/bentunadeyilim1234/audio2mp4-discord',
  },
]

const Index = () => {
  return (
    <div className="flex flex-col px-4 pt-6 space-y-6 text-gray-700">
      <NavBar/>
      <div className="space-y-1">
        <p className="text-2xl">hi, I’m Ali 👋</p>
        <p>I’m a junior software engineer at Turkey. I want to work at Google soon.</p>
      </div>
      <p className="text-2xl">some of my projects</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 items-start">
        {projectData.map(({ title, thumbnail, repository }, index) => (
          <Link key={index} href={repository} target="_blank" className="flex flex-col">
            <div className="flex flex-col items-center justify-center w-full space-y-1">
              <Image
                src={thumbnail}
                alt={"Thumbnail"}
                width={188}
                height={106}
                className="aspect-video bg-slate-200 rounded-lg shadow-lg"
                draggable={false}
              />
              <p className="text-center truncate line-clamp-2 text-wrap">{title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Index