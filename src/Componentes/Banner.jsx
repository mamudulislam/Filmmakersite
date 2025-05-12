import React from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
    return (
        <div className="mx-auto w-full max-w-screen-xl bg-[#1A1B2A66] px-6 pt-20 md:pt-[158px]">
            <motion.p
                className="font-Roboto uppercase font-extrabold text-sm text-[#FF5E3A] mb-2 md:mb-[10px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                One scene at a time - the movie maker director.
            </motion.p>

            <motion.h1
                className="font-Roboto font-extrabold text-4xl leading-tight tracking-tight text-white mb-6 md:text-[96px] md:leading-[101px] md:tracking-[-1px] md:mb-[30px] md:w-[770px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                Behind Every Great Film is a Visionary.
            </motion.h1>

            <motion.p
                className="text-white font-Source text-base leading-relaxed md:text-[20px] md:leading-[30px] md:w-[530px] mb-6 md:mb-[30px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                Crafting unforgettable stories bringing their creative vision to life on the big screen - the movie maker director
            </motion.p>

            <motion.div
                className="text-white flex flex-col sm:flex-row gap-4 pb-20 md:pb-[247px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            >
                <motion.button
                    className="py-4 px-5 font-Roboto text-sm bg-[#FF5E3A] rounded uppercase"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.5 }}
                >
                    Get started
                </motion.button>
                <motion.button
                    className="py-4 px-5 font-Roboto text-sm uppercase border border-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.7 }}
                >
                    View our works
                </motion.button>
            </motion.div>
        </div>
    )
}

export default Banner
