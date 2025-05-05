import Link from 'next/link';
import React from 'react'

const Logo = () => {
  return (
    <Link className= "my-2 font-semibold text-lg md:text-2xl lg:text-3xl flex gap-2" href={"/"}>
        <h1 className='text-rose-500'>Gaming</h1>
        <span>Nest</span>
    </Link>
  )
}

export default Logo;