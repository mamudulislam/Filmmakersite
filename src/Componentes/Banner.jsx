import React from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
    return (
        <div className='mx-auto w-[1170px] bg-[#1A1B2A66] pt-[158px]'>
            <motion.p
                className='font-Roboto uppercase font-extrabold text-[14px] text-[#FF5E3A] mb-[10px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                One scene at a time - the movie maker director.
            </motion.p>

            <motion.h1
                className='font-Roboto font-extrabold text-[96px] leading-[101px] tracking-[-1px] text-[#FFFFFF] w-[770px] mb-[30px]'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                Behind Every Great Film is a Visionary.
            </motion.h1>

            <motion.p
                className='text-[#FFFFFF] font-Source font-normal w-[530px] text-[20px] leading-[30px] mb-[30px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                Crafting unforgettable stories bringing their creative vision to life on the big screen - the movie maker director
            </motion.p>

            <motion.div
                className='text-[#fff] items-center pb-[247px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            >
                <motion.button
                    className='py-[17px] px-[20px] font-Roboto text-[14px] bg-[#FF5E3A] rounded-[3px] uppercase'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.5 }}
                >
                    Get started
                </motion.button>
                <motion.button
                    className='py-[17px] px-[20px] font-Roboto text-[14px] uppercase'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.7 }}
                >
                    view our works
                </motion.button>
            </motion.div>
        </div>
    )
}

export default Banner
