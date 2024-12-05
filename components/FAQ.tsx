'use client'
import Image from 'next/image'
import React,{useState} from 'react'

interface FAQItem {
    question: string
    answer: string
  }

const faqs: FAQItem[] = [
    {
      question: "How Much Do My Content Creation Services Cost?",
      answer: "At Video N SEO, my number one priority is your bottom line. All my services are priced to provide you with an excellent ROI and come with a 100% satisfaction guarantee. I provide affordable SEO services with maximum value for service-based businesses."
    },
    {
      question: "Can You Guarantee To Get Me To The First Page On Google?",
      answer: "While no one can guarantee first page rankings due to Google's ever-evolving algorithms, I implement proven SEO strategies and best practices to significantly improve your search engine visibility and rankings."
    },
    {
      question: "Can You Guarantee To Get Me To The First Page On Google?",
      answer: "While no one can guarantee first page rankings due to Google's ever-evolving algorithms, I implement proven SEO strategies and best practices to significantly improve your search engine visibility and rankings."
    },
    {
      question: "Can You Guarantee To Get Me To The First Page On Google?",
      answer: "While no one can guarantee first page rankings due to Google's ever-evolving algorithms, I implement proven SEO strategies and best practices to significantly improve your search engine visibility and rankings."
    }
  ]
  

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    return ( 
    <div id='faq' className='bg-[#030916]'>
        <div className='w-full pt-[50px] md:pt-[224px] md:px-8 px-4' style={{backgroundImage:"url('/assets/faq.svg')", backgroundRepeat:'no-repeat', backgroundSize:'contain'}}>
            <div className='max-w-[1180px] mx-auto w-full'>
                <h4 className='text-center text-[#2D91FD] text-lg md:text-[20px] md:leading-[32px] font-semibold'>FAQs</h4>
                <h1 className='text-white text-center text-[26px] md:text-[48px] md:leading-[74px] font-semibold'>Frequently Asked Questions</h1>
                <div className="mt-8 md:mt-10 flex flex-col gap-4 text-white">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className={`rounded-xl md:rounded-[24px] px-5 md:px-10 overflow-hidden cursor-pointer transition-colors duration-300  
                            ${openIndex === index ? 'bg-[#0E1A33]' : 'bg-[#0E1A33] '}`}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                            <div className="flex justify-between items-center gap-4 my-[18px]">
                                <h3 className="text-sm md:text-lg font-bold md:leading-[46.5px]">{faq.question}</h3>
                                <span className={`text-2xl leading-none transition-transform duration-300 mt-0.5
                                    ${openIndex === index ? 'transform rotate-180 text-[#2D91FD]' : ''}`}>
                                    {openIndex === index ? <Image src='/assets/close.svg' alt='close' width={28} height={28} /> : <Image src='/assets/open.svg' alt='open' width={28} height={28} />}
                                </span>
                            </div>
                            <div 
                                className={`transition-all duration-300 ease-in-out overflow-hidden
                                ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className=" text-[#A5AAC6] text-sm md:leading-[33.44px] font-normal py-[19px] border-t border-[#FFFFFF1F]">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className='mt-[30px] md:mt-[52px] w-[300px] md:w-[374px] mx-auto rounded-[90px] bg-[#3D79FB] h-[50px] md:h-[65px] flex items-center'>
                        <Image src='/assets/btn-arrow.svg' alt='btn-arrow' width={45} height={45} className='ml-2.5 w-[35px] h-[35px] md:w-[45px] md:h-[45px] ' />
                        <h2 className='text-[#F8FAFB] font-semibold text-sm md:text-lg leading-[27px] w-full'>Still have questions? Reach us!</h2>
                </button>
            </div>
        </div>

        <div className='relative mt-20'>
            <Image src='/assets/faq-bottom.svg' alt='faq-bottom' width={1915} height={229} className='w-full' />
            <Image src='/assets/element.svg' alt='element' width={186} height={183} className='w-[80px] h-[80px] md:w-[186px] md:h-[183px] absolute bottom-0 right-2 md:right-[174px]' />
        </div>
    </div>
  )
}

export default FAQ