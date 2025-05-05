"use client"

import { ReactElement } from "react"
import ButtonSvg from "../ButtonSvg"
import Spinner from "./Spinner"
import Link from "next/link"


const ButtonGame = ({ 
    className, 
    onClick, 
    link, 
    text,
    icon,
    disabled = false
} : { 
    className?:string,
    onClick?:()=> void, 
    link?:string, 
    text?:string ,
    icon?: ReactElement,
    disabled?: boolean
}) => {
  return (
    <button 
        disabled={disabled}
        onClick={ () => {onClick && onClick()}}
        className={`${className || ""} relative px-6  min-w-[100px] flex-initial gap-2 py-2 text-center m-auto text-white hover:text-rose-400 duration-150 cursor-pointer`}>
        {ButtonSvg(false)}
        <span className=" relative"> {disabled ? <Spinner/> : link ? <Link href={link}>{text}</Link> : text}</span>
        {icon && icon}
    </button>
  )
}

export default ButtonGame