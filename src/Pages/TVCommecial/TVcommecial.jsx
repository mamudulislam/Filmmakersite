import React from 'react'
import { motion } from "framer-motion"
import Captinamerica from '../../assets/Captinamerica.png'
import Filmmakers from '../../assets/Filmmakers.png'
import Cinematography from '../../assets/Cinematography.png'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const fadeItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

const TVcommecial = () => {
    return (
        <div className='mx-auto w-full max-w-[1170px] bg-[#1A1B2A66] pt-[158px] pb-[10px]'>
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeItem}
            >
                <div className="flex items-center gap-2 mb-4 justify-center">
                    <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                    <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">TV Commercial</p>
                </div>
                <motion.h2
                    className='font-Roboto font-bold text-[48px] md:text-[72px] lg:text-[96px] leading-[101px] text-center text-white pb-[141px]'
                    variants={fadeItem}
                >
                    TV Commercial
                </motion.h2>
            </motion.div>

            {/* Image Section */}
            <motion.div
                className='pb-[100px]'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <img src={Captinamerica} alt="Captain America" className='w-full h-[auto] max-h-[658px] object-cover' />
            </motion.div>

            {/* Text + Filmmaker Image Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                <motion.div
                    className="pt-[50px] md:pt-[100px]"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeItem}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                        <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">Keep it concise</p>
                    </div>

                    <h2 className="font-Roboto font-extrabold text-3xl md:text-5xl lg:text-[72px] leading-tight lg:leading-[72px] pt-[10px] text-white">
                        TV Commercials are Typically Short, so it's Important
                    </h2>
                    <p className="pt-[20px] md:pt-[30px] font-Roboto font-extrabold text-xl md:text-2xl lg:text-[24px] leading-[30px] text-[#82869A] max-w-[550px]">
                        Focus on the most important details about your portfolio and convey them clearly.
                    </p>
                    <p className="pt-[20px] md:pt-[30px] font-Roboto font-normal text-base lg:text-[16px] leading-[24px] text-[#82869A] max-w-[550px]">
                        Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis dui.
                    </p>
                </motion.div>

                <motion.div
                    className="text-white flex justify-center lg:justify-end"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeItem}
                >
                    <img
                        src={Filmmakers}
                        alt="Filmmakers"
                        className="w-full max-w-[570px] h-auto lg:h-[700px] object-cover mt-8 lg:mt-0"
                    />
                </motion.div>
            </div>

            {/* Cinematography Section */}
            <motion.div
                className="pt-[50px] md:pt-[100px]"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                    <div className="flex justify-center">
                        <img
                            src={Cinematography}
                            alt="Cinematography"
                            className="w-full max-w-[560px] h-auto object-cover"
                        />
                    </div>
                    <motion.div variants={fadeItem}>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                            <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">Visually</p>
                        </div>
                        <h2 className="font-Roboto text-3xl md:text-5xl lg:text-[72px] font-extrabold text-white pt-[10px] pb-[30px]">
                            Make it Visually Appealing
                        </h2>
                        <p className="font-Roboto font-extrabold text-xl md:text-2xl text-white pb-[30px]">
                            Your commercial should be visually appealing and engaging.
                        </p>
                        <p className="font-Inter font-normal text-base lg:text-[16px] text-white">
                            Aenean purus nunc, cursus in ante in, vehicula facilisis dui. Integer consequat consectetur est id blandit.
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className="mt-[100px]"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeItem}
            >
                <div className="mb-[100px] relative">
                    <img
                        src="https://www.essex.ac.uk/-/media/images/departments/lifts/film-studies/lifts,-film-studies---clapper-board-for-film-800-x-452.jpg"
                        alt=""
                        className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                    />
                    <div className="p-6 md:p-[50px] bg-[#11121E] w-[90%] md:w-[95%] lg:w-[1070px] mx-auto -mt-10 md:-mt-20 relative z-10 rounded-[3px]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                                    <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">Audience</p>
                                </div>
                                <h2 className="font-Roboto text-3xl md:text-5xl lg:text-[72px] text-white font-extrabold leading-tight">
                                    Tailor the Message to Your Target Audience
                                </h2>
                            </div>
                            <div>
                                <p className="font-Roboto font-extrabold text-xl md:text-2xl text-white pb-5">
                                    Consider who your target audience is and tailor your message accordingly.
                                </p>
                                <p className="font-Inter text-[#82869A] font-normal text-base">
                                    Aenean purus nunc, cursus in ante in, vehicula facilisis dui. Integer consequat consectetur est id blandit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Latest Works */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeItem}
            >
                <div className="flex items-center gap-2 mb-4 px-4">
                    <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                    <p className="text-[#FF5E3A] font-Roboto text-sm font-extrabold uppercase">works</p>
                </div>
                <h3 className="font-Roboto font-extrabold text-3xl md:text-5xl lg:text-[72px] text-white pb-5 px-4">
                    Check Out Our Latest Works
                </h3>
                <p className="font-Inter font-normal text-base text-[#82869A] pb-[50px] px-4">
                    Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien
                </p>
            </motion.div>

            {/* Work Cards */}
            <motion.div
                className="min-h-0 md:min-h-screen p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
            >
                {[{
                    title: "TV Commercial",
                    description: "Proin et magna blandit arcu pellentesque scelerisque sit amet.",
                    image: Cinematography
                },
                {
                    title: "Indie Movie",
                    description: "Proin et magna blandit arcu pellentesque scelerisque sit amet.",
                    image: Cinematography
                },
                {
                    title: "Documentary",
                    description: "Proin et magna blandit arcu pellentesque scelerisque sit amet.",
                    image: Cinematography
                },
                {
                    title: "Company Profile",
                    description: "Proin et magna blandit arcu pellentesque scelerisque sit amet.",
                    image: Cinematography
                }].map((card, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-700 rounded-lg shadow-lg p-6 border border-purple-600 transition-transform hover:scale-105"
                        variants={fadeItem}
                        whileHover={{ scale: 1.03 }}
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-xl font-bold text-white">{card.title}</h2>
                        <p className="text-gray-300">{card.description}</p>
                        <span className="block mt-2 text-gray-500">2023</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default TVcommecial
