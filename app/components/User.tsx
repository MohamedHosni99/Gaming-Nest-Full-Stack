import Image from 'next/image'
import React from 'react'

const User = ({user} : {user:{name: string, avatar: {secure_url: string}} }) => {
  return (
    <div className=' flex items-center gap-3'>
        <div className='cursor-pointer w-14 h-14 relative rounded-full overflow-hidden'>
            <Image fill src={user.avatar.secure_url} alt={user.name} className='object-cover'/>
        </div>
        <h1 className='text-base text-white'>{user.name}</h1>
    </div>
  )
}

export default User