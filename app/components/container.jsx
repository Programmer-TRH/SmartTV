import { cn } from '@/utils/cn'
import React from 'react'

export default function Container({children,className}) {
  return <div className={cn("mx-auto max-w-[1200px] px-6", className)}>{children}</div>
}
