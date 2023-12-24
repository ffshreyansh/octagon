'use client'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


const HomePage = () => {
    const [ref, inView] = useInView({
        triggerOnce: false, // Trigger only once
        rootMargin: '-300px 0px', // Adjust this value based on your requirement
    });
    console.log('inView', inView);
    return (
        <div className=' w-full bg-hBg rounded-t-3xl' >
            <nav className='flex items-center justify-between px-36 gap-2 py-7'>
                <span className=' font-serif flex items-center gap-1 text-xl font-bold'>
                    <img src="/lg.svg" width={24} height={24} alt="logo" />
                    Octagon
                </span>
                <div className='flex items-center justify-between text-sm w-2/5'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>Services</Link>
                    <Link href={'/'}>Our Work</Link>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Blog</Link>
                    <Link href={'/'} className='bg-black w-36 h-8 text-white flex items-center justify-center rounded-lg'>Remix-Template</Link>

                </div>
            </nav>
            <section className='w-full p-20 overflow-x-hidden flex flex-col justify-center' >
                <div className='w-1/2 mx-auto flex flex-col items-center gap-5 relative'>
                    <img src="/star-01.svg" width={18} height={18} className='absolute bottom-0 -right-20' alt="" />
                    <img src="/star-02.svg" width={30} height={30} className='absolute top-0 rotate-45 -right-4' alt="" />
                    <img src="/star-03.svg" width={28} height={28} className='absolute -left-10 bottom-20' alt="" />
                    <p className='border font-medium border-black rounded-full px-3 py-2 text-xs w-fit mx-auto'>Powered by Shreyansh Kr.</p>
                    <h1 className='text-5xl text-center font-bold  w-full leading-snug'>Elevating Your Brand with Innovative Design</h1>
                    <p className=' w-4/5 text-center mx-auto text-lg'>At Octagon, we blend artistry and strategy to create designs that not only captivate but also elevate.</p>
                    <div className='flex items-center justify-center  gap-2 w-1/2 mx-auto'>
                        <Link href={'/contact'} className='bg-black w-1/2 rounded-xl text-white flex items-center justify-center h-12'>Schedule a Call</Link>
                        <Link href={'/contact'} className='border border-black w-1/3 flex items-center justify-center h-12 rounded-xl'>Our Work</Link>
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
                <div class="w-full inline-flex flex-nowrap">
                    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                        <li>
                            <img src="/lg.svg" alt="Facebook" />
                        </li>
                        <li>
                            <img src="/vercel.svg" alt="Disney" />
                        </li>
                        <li>
                            <img src="/next.svg" alt="Airbnb" />
                        </li>
                        <li>
                            <img src="/lg.svg" alt="Facebook" />
                        </li>
                        <li>
                            <img src="/vercel.svg" alt="Disney" />
                        </li>
                        <li>
                            <img src="/next.svg" alt="Airbnb" />
                        </li>
                        <li>
                            <img src="/lg.svg" alt="Facebook" />
                        </li>
                        <li>
                            <img src="/vercel.svg" alt="Disney" />
                        </li>
                        <li>
                            <img src="/next.svg" alt="Airbnb" />
                        </li>


                    </ul>
                    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    <li>
                            <img src="/lg.svg" alt="Facebook" />
                        </li>
                        <li>
                            <img src="/vercel.svg" alt="Disney" />
                        </li>
                        <li>
                            <img src="/next.svg" alt="Airbnb" />
                        </li>
                        <li>
                            <img src="/lg.svg" alt="Facebook" />
                        </li>
                        <li>
                            <img src="/vercel.svg" alt="Disney" />
                        </li>
                        <li>
                            <img src="/next.svg" alt="Airbnb" />
                        </li>
                        <li>
                            <img src="/lg.svg" alt="Facebook" />
                        </li>
                        <li>
                            <img src="/vercel.svg" alt="Disney" />
                        </li>
                        <li>
                            <img src="/next.svg" alt="Airbnb" />
                        </li>

                    </ul>
                </div>
            </section>
        </div>
    )
}

export default HomePage