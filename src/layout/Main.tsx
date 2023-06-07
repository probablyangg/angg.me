import { type ReactNode } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full justify-between p-5 [&>*]:border-b-2">
    <Link href={"/"} className="pb-2">
        angg
    </Link>
  </div>
  )
}

const Main = ({ children, title }:{ children: ReactNode, title?: string }) => {
  const { pathname } = useRouter();
  const displayNavbar = pathname !== "/";
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900 text-white">
      {displayNavbar && <Navbar />}
      <div className="flex-1 mt-12 min-w-[65ch]">
        <div className="text-[2rem] font-semibold px-12">
          {title}
        </div>
        <div className="px-24 pb-24">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Main;