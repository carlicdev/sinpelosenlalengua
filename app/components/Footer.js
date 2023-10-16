import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import {FOOTER_LINKS} from '../constants'

const Footer = () => {
  return (
    <div className='w-full bg-white py-5 mt-20'>
        <div className='max-w-7xl w-full mx-auto'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 lg:w-1/4'>
                    <Link href='/'>
                        <Logo />
                    </Link>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-2'>
                    {FOOTER_LINKS.map((link) => (
                        <Link href={link.url} key={link.id} className='text-gray-600 text-lg'>
                            {link.link}
                        </Link>
                    ))}
                </div>
                <div className='w-full md:w-1/2 lg:w-1/4'></div>
                <div className='w-full md:w-1/2 lg:w-1/4'></div>
            </div>
        </div>
    </div>
  )
}

export default Footer