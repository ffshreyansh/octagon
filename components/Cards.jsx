import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import Chart from './Chart';

const Cards = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false, 
        rootMargin: '-50px 0px', 
    });

    // Animate the div when it comes into view
    React.useEffect(() => {
        if (inView) {
            controls.start({ y: 0, opacity: 1 });
        } else {
            controls.start({ y: 50, opacity: 0 });
        }
    }, [controls, inView]);



    return (<>
        <motion.div className='w-full lg:w-1/3 flex flex-col h-fit bg-rd border-red-200 border rounded-xl' ref={ref}>
            <div className='overflow-hidden relative min-h-56 bg-rd py-8 rounded-t-xl [mask-image:_linear-gradient(to_bottom,transparent_0,_black_-500px,_black_calc(100%-50px),transparent_100%)]' ref={ref}>
                <motion.div className='w-4/5 h-52 border-grn border flex flex-col gap-4 bg-white absolute -right-12 p-6 cursor-grab' draggable='true'
                    animate={controls}
                    initial={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='flex items-center gap-10 w-full'>
                        <div className='flex items-center gap-5'>
                            <span className='flex items-center justify-center bg-neon w-8 h-8 rounded-lg' >
                                <img src="/ghosB.svg" width={10} height={10} alt="" />
                            </span>
                            <span className='flex items-center justify-center bg-neon w-20 text-sm font-medium h-8 rounded-lg' >
                                Primary
                            </span>

                        </div>
                        <span className='rounded-full h-8 w-20 border-gray-400 font-medium border flex items-center justify-center text-sm'>Gray</span>
                    </div>
                    <div className='flex items-center gap-5 w-full'>
                        <div className='flex items-center gap-5'>
                            <span className='flex items-center justify-center bg-black w-8 h-8 rounded-lg' >
                                <img src="/ghostW.svg" width={10} height={10} alt="" />
                            </span>
                            <span className='flex items-center justify-center bg-black text-white w-24 text-sm font-medium h-8 rounded-lg' >
                                Secondary
                            </span>

                        </div>
                        <span className='rounded-full h-8 w-24 bg-yellow-300 font-medium flex items-center justify-center text-sm'>Yellow</span>
                    </div>

                    <div className='flex items-center gap-8 w-full'>
                        <div className='flex items-center gap-5'>
                            <span className='flex items-center justify-center border-black border w-8 h-8 rounded-lg' >
                                <img src="/ghosB.svg" width={10} height={10} alt="" />
                            </span>
                            <span className='flex items-center justify-center border-black border w-20 text-sm font-medium h-8 rounded-lg' >
                                Outline
                            </span>

                        </div>
                        <span className='rounded-full h-8 w-24  font-medium bg-red-300 flex items-center justify-center text-sm'>Dawn</span>
                    </div>
                    <div className='flex items-center gap-10 w-full'>
                        <div className='flex items-center gap-5'>
                            <span className='flex items-center justify-center w-8 h-8 rounded-lg' >
                                <img src="/ghosB.svg" width={10} height={10} alt="" />
                            </span>
                            <span className='flex items-center justify-center  w-20 text-sm font-medium h-8 rounded-lg' >
                                Primary
                            </span>

                        </div>
                        <span className='rounded-full h-8 w-20 bg-purple-500 font-medium border flex items-center justify-center text-sm'>Pink</span>
                    </div>
                </motion.div>
                <img src="https://img.icons8.com/material-rounded/24/000000/blue-pointer.png" width={30} className='absolute rotate-90 left-10 top-20 z-10' alt="" />

                <motion.div className='absolute left-14 top-16 w-12 h-full bg-white flex flex-col items-center gap-4 py-3 px-2'
                    animate={controls}
                    initial={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span className='bg-gray-100 w-full h-7  rounded-md  flex items-center justify-center'>
                        {/* <img src="/arw.svg" width={12} alt="" /> */}
                        <img width="18 " height="18" src="https://img.icons8.com/material-outlined/24/blue-pointer.png" alt="blue-pointer" />
                    </span>
                    <span className='w-full h-7  rounded-md  flex items-center justify-center'>
                        <img width="20" height="20" src="https://img.icons8.com/fluency-systems-regular/48/fantasy--v1.png" alt="fantasy--v1" />
                    </span>
                    <span className=' w-full h-7  rounded-md  flex items-center justify-center'>
                        <img width="20" height="20" src="https://img.icons8.com/material-rounded/24/crop.png" alt="crop" />
                    </span>

                </motion.div>
            </div>
            <div className='p-8 flex flex-col gap-4'>
                <p className='text-2xl font-medium'>Expertise in Specialized B2B Design</p>
                <p className='text-md'>Elevate your B2B brand with specialized design expertise, enhancing industry presence.</p>
            </div>
        </motion.div >
        {/* grey */}
        <motion.div className='w-full lg:w-1/3 flex flex-col h-fit bg-gry border-gray-300 border pt-8 rounded-xl overflow-hidden' ref={ref}>
            <div className='overflow-hidden relative h-48 bg-gry  rounded-t-xl [mask-image:_linear-gradient(to_bottom,transparent_0,_black_-500px,_black_calc(100%-50px),transparent_100%)]'>
                <Chart />
                <motion.div className='bg-white border border-gray-300 top-10 left-24  absolute shadow-md rounded-md w-1/2 h-1/2 z-20 p-4'
                animate={controls}
                initial={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                >
                        <p className='text-xs font-medium'>Oct 5 2023</p>
                        <div className='flex items-center justify-between mt-2 text-xs'>
                            <div className='flex items-center gap-1 text-xs'>
                                <span className='w-3 h-3 bg-gray-400 rounded-full'></span>
                                Unique Visitors
                            </div>
                            <span className="font-medium">9,706</span>
                        </div>
                        <div className='flex items-center justify-between mt-1 text-xs'>
                            <div className='flex items-center gap-1 text-xs'>
                                <span className='w-3 h-3 bg-gray-400 rounded-full'></span>
                                Total Pageviews
                            </div>
                            <span className="font-medium">6,816</span>
                        </div>
                </motion.div>
            </div>

            <div className='p-8 flex flex-col gap-4'>
                    <p className='text-2xl font-medium'>Expertise in Specialized B2B Design</p>
                    <p className='text-md'>Elevate your B2B brand with specialized design expertise, enhancing industry presence.</p>
                </div>
        </motion.div>

        {/* GREEEN */}


        <motion.div className='w-full lg:w-1/3 flex flex-col lg:flex-row h-fit bg-hBg border-green-100 border p-8 rounded-xl overflow-hidden'>

        </motion.div>
    </>
    )
}

export default Cards