"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const NavBar = () => {
  return(
    <div className="flex justify-between items-center text-white">
      <div className={`flex items-center px-2 space-x-2 py-1 bg-[#D1BB9E] rounded-lg`}>
        <Link href={"/"}>home</Link>
        <Link href={"/blog"}>blog</Link>
        {/*<Link href={"/about"}>about</Link>*/}
      </div>
      {/*<Image
        width={35}
        height={35}
        src={signedIn?"/":"/"}
        alt={"profile picture"}
        className="bg-slate-600 rounded-full"
        draggable={false}
      />*/}
    </div>
  )
}

export default NavBar