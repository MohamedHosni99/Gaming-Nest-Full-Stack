import { cn } from '@/lib/utils'
import React from 'react'

const MaxWidthWrapper = (
    {
        children, 
        className,
        nopadding,
        customPadding
    }: {
        children:React.ReactNode,
        className?:string,
        nopadding?:boolean,
        customPadding?:string
    }) => {
  return (
    <section 
    className={cn("max-w-[1375px] w-full  px-5 md:px-10 lg:px-20 ", 
        className || "",
        {"py-0": nopadding  && !customPadding  },
        {"py-8": !nopadding  && !customPadding },
        customPadding

    )}>
        {children}
    </section>
  )
}

export default MaxWidthWrapper