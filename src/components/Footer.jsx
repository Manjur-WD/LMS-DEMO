import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"

const Footer = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    return (
        <>
            <footer className='relative left-0 bottom-0 h-[10vh] flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 py-5 sm:px-20'>
                <section className="text-lg">
                    Copyright {year} | All rights reserved
                </section>
                <section className='flex items-center justify-center gap-5 text-2xl text-white'>
                    <a href="#" className='hover:text-yellow-500 transition-all duration-500'>
                        <BsFacebook />
                    </a>
                    <a href="#" 
                    className='hover:text-yellow-500 transition-all duration-500'>
                        <BsInstagram />
                    </a>
                    <a href="#" className='hover:text-yellow-500 transition-all duration-500'>
                        <BsLinkedin />
                    </a>
                    <a href="#" className='hover:text-yellow-500 transition-all duration-500'>
                        <BsTwitter />
                    </a>

                </section>
            </footer>
        </>
    )
}

export default Footer
