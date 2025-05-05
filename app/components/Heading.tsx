import React from 'react'

const Heading = ({ text, className }:{ text: string, className?: string }) => {
  return (
    <h1 className={`${className} text-2xl lg:text-4xl text-white font-semibold capitalize`}>{text}</h1>
  )
}

export default Heading;