import React from 'react'

const OurServices = () => {
  return (
    <section className='px-2 lg:px-40 py-20 bg-white w-full '>
                <div className='w-full lg:w-2/3 px-0 lg:px-10  mx-auto flex flex-col gap-6'>
                    <p className='border font-medium border-gray-300 rounded-full flex items-center gap-2 px-3 py-2 text-sm w-fit mx-auto'>
                        <img src="/star-01.svg" width={16} className='grayscale' alt="" />
                        Our Services
                    </p>
                    <h3 className='text-4xl lg:text-5xl font-semibold text-center leading-normal lg:leading-snug'>Expert Services That Define Our Excellence.</h3>
                    <p className='text-md lg:text-lg mx-auto text-gray-600 w-full lg:w-3/4 text-center px-0 lg:px-10'>From creative design to technical solutions, our services define industry excellence.</p>
                </div>
                <div className='flex w-full items-center justify-between gap-10'>
                    <div className='w-1/2 p-10 flex flex-col gap-2'>
                        <div className='flex items-start bg-gry border border-gray-200 p-8 rounded-xl gap-3'>
                        <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/download-2.png" alt="download-2"/>
                            <div className='flex flex-col items-start gap-2'>
                                <span className='font-medium text-xl'>Framer Development</span>
                                <p className='text-md font-normal text-gray-500'>Crafting digital excellence, one line of code at a time. Join us in the journey of Framer Development.</p>
                            </div>
                        </div>
                        <div className='flex items-start  p-8 rounded-xl gap-3'>
                        <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/download-2.png" alt="download-2"/>
                            <div className='flex flex-col items-start gap-2'>
                                <span className='font-medium text-xl'>Framer Development</span>
                                <p className='text-md font-normal text-gray-500'>Crafting digital excellence, one line of code at a time. Join us in the journey of Framer Development.</p>
                            </div>
                        </div>
                        <div className='flex items-start  p-8 rounded-xl gap-3'>
                        <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/download-2.png" alt="download-2"/>
                            <div className='flex flex-col items-start gap-2'>
                                <span className='font-medium text-xl'>Framer Development</span>
                                <p className='text-md font-normal text-gray-500'>Crafting digital excellence, one line of code at a time. Join us in the journey of Framer Development.</p>
                            </div>
                        </div> 
                    </div>
                    
                    <div className='w-1/2'>

                    </div>
                </div>
            </section>
  )
}

export default OurServices