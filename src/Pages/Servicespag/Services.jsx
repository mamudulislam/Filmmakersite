import React from 'react';
import { motion } from 'framer-motion';
import jhonewhick from "../../assets/jhonewhick.png";

const Services = () => {
    const cards = [
        {
            title: "Movie Production",
            description: "Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.",
            image: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
            title: "Movie Production",
            description: "Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.",
            image: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
            title: "Movie Production",
            description: "Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.",
            image: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
            title: "Movie Production",
            description: "Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.",
            image: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
            title: "Movie Production",
            description: "Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.",
            image: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
            title: "Movie Production",
            description: "Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.",
            image: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
    ];

    return (
        <div>
            <div className='mx-auto w-full max-w-[1170px] px-4 sm:px-6 lg:px-8 bg-[#1A1B2A66] pt-[120px] md:pt-[158px] pb-10'>
                <div className="flex items-center gap-2 mb-4 justify-center">
                    <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                    <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">Our Services</p>
                </div>

                <motion.h2
                    className='font-Roboto font-bold text-[36px] sm:text-[64px] md:text-[96px] leading-tight text-center text-white pb-[60px] md:pb-[141px]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Our Services
                </motion.h2>

                <div className="pt-[50px] md:pt-[105px]">
                    <div className="flex items-center justify-center gap-2 mb-4 pb-[10px]">
                        <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                        <p className="text-[#FF5E3A] font-Roboto text-sm font-extrabold uppercase">services</p>
                    </div>

                    <motion.h2
                        className="text-center font-Roboto font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[72px] text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Our Services
                    </motion.h2>

                    <motion.p
                        className="text-center text-[#82869A] font-normal text-base lg:text-[16px] font-Inter pb-[30px] md:pb-[50px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien aenean
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-[50px] md:pb-[100px]">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full bg-gray-100 bg-cover bg-center mx-auto rounded overflow-hidden"
                                style={{ backgroundImage: `url('${card.image}')` }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                            >
                                <div className="absolute top-[160px] sm:top-[190px] md:top-[227.77px] left-5 flex gap-[10px]">
                                    <img
                                        src={card.image || "/placeholder.svg"}
                                        alt="Circle"
                                        className="w-[50px] h-[50px] rounded-full object-cover"
                                    />
                                </div>

                                <div className="absolute top-[220px] sm:top-[250px] md:top-[300px] left-5">
                                    <motion.h1
                                        className="font-Roboto font-bold text-[20px] sm:text-[24px] md:text-[28px] leading-[36px] text-white"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                    >
                                        {card.title}
                                    </motion.h1>

                                    <motion.p
                                        className="font-Inter font-normal text-sm md:text-base leading-[24px] mt-2 text-white"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.7 }}
                                    >
                                        {card.description}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded overflow-hidden">
                    <img
                        src={jhonewhick || "/placeholder.svg"}
                        alt="Image description"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center p-6 md:p-12">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-[2px] bg-white"></div>
                            <p className="text-white font-roboto text-sm font-extrabold uppercase">collaborating</p>
                        </div>
                        <motion.h2
                            className="text-white font-Roboto font-bold text-xl sm:text-3xl md:text-5xl lg:text-[64px] leading-tight max-w-[729px] mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            We Love Collaborating With Other Creatives
                        </motion.h2>
                        <motion.button
                            className="py-3 px-6 text-sm sm:text-base font-Roboto bg-[#FF5E3A] rounded-[3px] uppercase text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            Let's Collaborate
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
