import Link from "next/link"
import Image from "next/image"

const NavBar = () => {
  return(
    <div className="h-12 flex justify-between items-center">
      <div className={`h-7 flex items-center px-2 space-x-2 bg-[#D1BB9E] rounded-md`}>
        <Link href={"/"}>home</Link>
        <Link href={"/blog"}>blog</Link>
        {/*<Link href={"/about"}>about</Link>*/}
      </div>
      <Image
        width={35}
        height={35}
        src={""}
        alt={"profile picture"}
        className="bg-slate-600 rounded-full"
        draggable={false}
      />
    </div>
  )
}

export default NavBar