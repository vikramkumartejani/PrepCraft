import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const footerLinks = [
    {
        category: 'Pages',
        links: [
            { label: 'Home', href: '/' },
            { label: 'Portfolios', href: '/portofolios' },
            { label: 'Services', href: '/services' },
            { label: 'Works', href: '/works' }
        ]
    },
    {
        category: 'Company',
        links: [
            { label: 'Terms Conditions', href: '/terms-conditions' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Cookies', href: '/cookies' },
            { label: 'Careers', href: '/careers' }
        ]
    },
    {
        category: 'Community',
        links: [
            { label: 'Help Center', href: '/help-center' },
            { label: 'Forum', href: '/forum' },
            { label: 'Webinars', href: '/webinars' },
            { label: 'Professionals', href: '/professionals' }
        ]
    }
  ];
  

const Footer = () => {
  return (
    <div className='bg-[#030916] w-full md:px-8 px-4'>
        <div className='max-w-[1200px] w-full mx-auto'>
            {/* Menu Links */}
            <div className='py-10 sm:py-[65px] flex justify-between gap-10 flex-col lg:flex-row'>
                <div className='max-w-[388px] flex flex-col gap-7'>
                    <Image src='/assets/logo.svg' alt='logo' width={179} height={43} />
                    <p className='text-[#A5AAC6] text-sm sm:text-base font-normal'>Lorem ipsum dolor sit amet consectetur. Libero semper lorem vestibulum laoreet vel eget vel purus.</p>
                </div>
                <div className='w-full lg:max-w-[680px] grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-5'>
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h2 className='text-white text-base sm:text-[18px] font-semibold leading-[23.4px] mb-4'>{section.category}</h2>
                            <ul className='text-[#A5AAC6] flex flex-col gap-3 text-sm sm:text-[16px] font-normal text-nowrap'>
                                {section.links.map((link, idx) => (
                                    <li key={idx}>
                                        <Link href={link.href}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter */}
            <div className='border-t border-b border-[#6B6B6B]/50 py-8 sm:py-10 flex md:items-center justify-between gap-6 md:flex-row flex-col'>
                <div>
                    <h2 className='text-white mb-3 sm:mb-4 font-semibold text-lg sm:text-[20px]'>Subscribe to our newsletter</h2>
                    <p className='text-[#A5AAC6] font-normal text-sm sm:text-[16px]'>Lorem ipsum dolor sit amet consectetur. Libero semper lorem </p>
                </div>
                <div className='md:w-[444px] bg-[#091631] flex items-center h-[50px] sm:h-[60px] rounded-xl sm:rounded-[76px]'>
                    <input type='email' className='w-full h-full px-4 sm:px-8 font-normal text-sm text-white outline-none bg-transparent placeholder:text-[#A5AAC6]' placeholder='Enter Your Email' />
                    <button className='w-[163px] px-5 lg:px-9 h-full rounded-r-xl sm:rounded-r-[76px] text-white font-medium text-base sm:text-lg leading-[24.3px]' style={{background: "linear-gradient(28.63deg, #3B6EFF 10.71%, #3DAEFF 86.11%)"}}>Subscribe</button>
                </div>
            </div>

            {/* Rights */}
            <div className='pt-10 pb-10 md:pb-[64px]'>
                <p className='text-[#8C8C8C] text-base sm:text-lg leading-[24px] font-normal text-center'>2023 Company name. All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer