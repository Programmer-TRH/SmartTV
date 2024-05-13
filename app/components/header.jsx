import Link from 'next/link'
import React from 'react'
import Container from './container'
import Button from './button'
import Image from 'next/image'

export default function Header() {
  return (
    <>
    <header className="bg-backgroundContrast px-6 text-white relative z-20 ">
        <Container className="flex items-center min-h-11">
        <Link href="/"  className='-ml-6 flex items-center px-6 h-[--header-row-height] text-xl'>
          <Image src="/smarttvlogo.png" alt='Smart TV Logo' width={35} height={35} className=' bg-white rounded-xl' />
           <span className='sr-only'> Back to homepage</span> </Link>
        </Container>
     </header>
     <div className='bg-backgroundContrast px-6 text-white sticky z-20 top-0'>
       <Container className="flex justify-between items-center min-h-[--header-row-height]">
       <p className='text-xl font-semibold'>Smart TV </p> 
       <Button size="small">Stream Now</Button>
       </Container>
     </div>
    </>
     
  )
}
