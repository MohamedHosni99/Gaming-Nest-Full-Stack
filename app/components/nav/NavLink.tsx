"use client"


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactElement } from 'react'

const NavLink = ({navLink}: {navLink: {label: string, link: string, icon: ReactElement<any>}}) => {

    const pathName = usePathname();
    const {label, link, icon} = navLink;
    const isActive = pathName === navLink.link;

  return (
    <Link
    href={link}
    className= {`flex ${isActive? 'text-rose-400': 'text-gray-50'} font-semibold duration-150 my-2 hover:text-rose-400 items-center gap-2 p-2 rounded-md`}
  >
    {React.cloneElement(icon, { className: 'w-5 h-5' })}
    {label}
  </Link>
  )
}

export default NavLink;
