import { cn } from '@/utils/cn'
import React from 'react'

export default function Button({children, className,size="medium"}) {

    const sizeClassNames = {
        small: "text-xs px-2 py-1",
        medium: "text-sm px-5 py-3",
        large: "text-base px-8 py-4"
    }

  return (
    <button className={cn("text-textBlack rounded-full bg-white", className, sizeClassNames[size])}>{children}</button>
  )
}
