import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SkeletonCustom = ({circle} : {circle?:boolean}) => {
  return (
    <div className="flex flex-col space-y-3">
        { circle && <Skeleton className="h-[125px] w-[250px] rounded-xl" />}
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
    </div>
  )
}

export default SkeletonCustom