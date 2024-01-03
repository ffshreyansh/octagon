'use client'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Vercel from '../public/vercel.svg'
import Insta from '../public/insta.svg'
import LinkedIn from '../public/linkedin.svg'
// import Peer from '../public/peer.svg'
import Upword from '../public/upwork.svg'
import X from '../public/x.svg'
import Next from '../public/next.svg'
import Image from 'next/image';
import Cards from './Cards';
import OurServices from './OurServices';


const HomePage = () => {
    const [ref, inView] = useInView({
        triggerOnce: false, // Trigger only once
        rootMargin: '-300px 0px', // Adjust this value based on your requirement
    });

    const logos = [
        { src: Upword, alt: 'Facebook' },
        { src: Insta, alt: 'Airbnb' },
        { src: LinkedIn, alt: 'Apple' },
        { src: X, alt: 'Samsung' },
        { src: Insta, alt: 'Airbnb' },
        { src: LinkedIn, alt: 'Apple' },
        { src: X, alt: 'Samsung' },
        { src: Insta, alt: 'Airbnb' },
        { src: LinkedIn, alt: 'Apple' },
        { src: X, alt: 'Samsung' },
        { src: Upword, alt: 'Facebook' },
        { src: Insta, alt: 'Airbnb' },
        { src: LinkedIn, alt: 'Apple' },
        { src: X, alt: 'Samsung' },
        { src: Insta, alt: 'Airbnb' },
        { src: LinkedIn, alt: 'Apple' },
        { src: X, alt: 'Samsung' },
        { src: Insta, alt: 'Airbnb' },
        { src: LinkedIn, alt: 'Apple' },
        { src: X, alt: 'Samsung' },
    ]

    console.log('inView', inView);
    return (
        <div className=' w-full bg-hBg rounded-t-xl lg:rounded-t-3xl' >
            <nav className='flex items-center justify-between px-2 lg:px-36 gap-2 py-4 lg:py-7'>
                <span className=' font-serif flex items-center gap-1 text-xl font-bold'>
                    <img src="/lg.svg" width={24} height={24} alt="logo" />
                    Octagon
                </span>
                <div className='hidden lg:flex items-center justify-between text-sm w-2/5'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>Services</Link>
                    <Link href={'/'}>Our Work</Link>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Blog</Link>
                    <Link href={'/'} className='bg-black w-36 h-8 text-white flex items-center justify-center rounded-lg'>Remix-Template</Link>

                </div>
            </nav>
            <section className='w-full p-2 lg:p-20 border-b-grn border overflow-x-hidden flex flex-col justify-center' >
                <div className='w-full lg:w-1/2 py-10 lg:py-0 mx-auto flex flex-col items-center gap-5 relative'>
                    <img src="/star-01.svg" width={18} height={18} className='absolute hidden lg:inline bottom-0 -right-20' alt="" />
                    <img src="/star-02.svg" width={30} height={30} className='absolute hidden lg:inline top-0 rotate-45 -right-4' alt="" />
                    <img src="/star-03.svg" width={28} height={28} className='absolute hidden lg:inline -left-10 bottom-20' alt="" />
                    <p className='border font-medium border-black rounded-full px-3 py-2 text-xs w-fit mx-auto'>Powered by Shreyansh Kr.</p>
                    <h1 className=' text-3xl lg:text-5xl text-center font-bold  w-full leading-snug'>Elevating Your Brand with Innovative Design</h1>
                    <p className='w-full lg:w-4/5 text-center mx-auto text-md lg:text-lg'>At Octagon, we blend artistry and strategy to create designs that not only captivate but also elevate.</p>
                    <div className='flex flex-col lg:flex-row items-center justify-center  gap-2 w-full lg:w-1/2 mx-auto'>
                        <Link href={'/contact'} className='bg-black w-full lg:w-1/2 rounded-xl text-white flex items-center justify-center h-12'>Schedule a Call</Link>
                        <Link href={'/contact'} className='border border-black w-full lg:w-1/3 flex items-center justify-center h-12 rounded-xl'>Our Work</Link>
                    </div>
                </div>
                <div className=' gg transition-all' ref={ref}>
                    <div className='rounded-2xl'>
                        <img
                            src="https://images.pexels.com/photos/10549030/pexels-photo-10549030.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Placeholder"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className='rounded-2xl'>
                        <img
                            src="https://images.pexels.com/photos/3054240/pexels-photo-3054240.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Placeholder"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <motion.div
                        className={`hg transition-all rounded-2xl`}
                        animate={{ width: inView ? '100%' : '20%' }}
                    >
                        <video src="/meet.mp4" loop className='w-full h-full object-cover rounded-2xl' autoPlay='true' muted="true"></video>
                    </motion.div>

                    <div className='rounded-2xl'>
                        <img
                            src="https://images.pexels.com/photos/5236135/pexels-photo-5236135.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Placeholder"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className='rounded-2xl'>
                        <img
                            src="https://images.pexels.com/photos/11445273/pexels-photo-11445273.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Placeholder"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
                <div className="w-full py-10 lg:py-0 opacity-65 grayscale inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {logos.map((logo, index) => (
                            <li key={index} >
                                <Image src={logo.src} width={36} alt={logo.alt} />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        {logos.map((logo, index) => (
                            <li key={index}>
                                <Image src={logo.src} width={36} alt={logo.alt} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className='px-2 lg:px-40 py-20 bg-white w-full '>
                <div className='w-full lg:w-3/4 mx-auto flex flex-col gap-6'>
                    <p className='border font-medium border-gray-300 rounded-full flex items-center gap-2 px-3 py-2 text-sm w-fit mx-auto'>
                        <img src="/star-01.svg" width={16} className='grayscale' alt="" />
                        Benefits
                    </p>
                    <h3 className='text-4xl lg:text-5xl font-semibold text-center'>Discover Why We Stand Out</h3>
                    <p className='text-md lg:text-lg mx-auto text-gray-600 w-full lg:w-3/4 text-center'>Web design involves creating and designing websites, including layout, content, and user experience.</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-10 w-full mt-6'>
                   <Cards/>
                </div>
            </section>
            <OurServices/>
        </div>
    )
}

export default HomePage