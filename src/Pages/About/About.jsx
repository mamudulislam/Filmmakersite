import React from 'react';
import Filmmakers from '../../assets/Filmmakers.png';
import Cinematography from '../../assets/Cinematography.png';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="bg-[#1A1B2A66] pt-[100px] pb-10 px-4">
            <div className="max-w-[1170px] mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex items-center gap-2 mb-4 justify-center"
                >
                    <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                    <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">About Us</p>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-Roboto font-bold text-4xl md:text-6xl lg:text-[96px] text-center text-white pb-20"
                >
                    About
                </motion.h2>

                {/* About Us Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="pt-0 md:pt-10"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                            <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">About Us</p>
                        </div>
                        <h2 className="text-white font-Roboto font-extrabold text-3xl md:text-5xl lg:text-[72px] leading-tight">
                            We Are a Team of Passionate Filmmakers
                        </h2>
                        <p className="text-[#82869A] font-Roboto text-lg md:text-xl pt-4 max-w-[550px]">
                            Dedicated to bringing creative and compelling stories to life on screen
                        </p>
                        <p className="text-[#82869A] font-Roboto text-base leading-relaxed pt-4 max-w-[550px]">
                            Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus in ante
                            in, vehicula facilisis dui. Integer consequat consectetur est id blandit.
                        </p>
                        <button className="bg-[#FF5E3A] text-white uppercase font-Roboto text-sm py-4 px-6 rounded mt-6">
                            Learn More
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <img
                            src={Filmmakers}
                            alt="Filmmakers"
                            className="w-full max-w-[570px] h-auto object-cover"
                        />
                    </motion.div>
                </div>

                {/* Cinematography Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="pt-16"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div className="flex justify-center">
                            <img
                                src={Cinematography}
                                alt="Cinematography"
                                className="w-full max-w-[560px] h-auto object-cover"
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                                <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">Our Cinematography</p>
                            </div>
                            <h2 className="text-white font-Roboto font-extrabold text-3xl md:text-5xl lg:text-[72px] leading-tight pb-4">
                                Cinematography and Film Production
                            </h2>
                            <p className="text-white font-Roboto font-extrabold text-xl pb-4">
                                Our video production company is here to help you create stunning images from start to finish.
                            </p>
                            <p className="text-white font-Inter text-base leading-relaxed">
                                Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus in ante
                                in, vehicula facilisis dui. Integer consequat consectetur est id blandit.
                            </p>
                            <button className="bg-[#FF5E3A] text-white uppercase font-Roboto text-sm py-4 px-6 rounded mt-6">
                                Get Started
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-24"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                        <p className="text-[#FF5E3A] font-Roboto text-sm font-extrabold uppercase">Testimonials</p>
                    </div>
                    <h2 className="text-white font-Roboto font-bold text-3xl md:text-5xl lg:text-[72px]">
                        What People Say?
                    </h2>
                    <h3 className="text-[#82869A] font-Roboto font-bold text-lg md:text-2xl mb-6">
                        What they say about us?
                    </h3>
                    <p className="text-[#82869A] font-Roboto text-base leading-relaxed max-w-[545px]">
                        Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus in ante in,
                        vehicula facilisis dui. Integer consequat consectetur est id.
                    </p>

                    {/* Testimonial Cards */}
                    <div className="flex flex-col md:flex-row gap-6 mt-10">
                        {[1, 2].map((_, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 1.2 + index * 0.2 }}
                                className="bg-white shadow-lg rounded-lg p-6 border border-purple-600 max-w-sm"
                            >
                                <div className="flex items-center mb-4">
                                    <span className="text-orange-500 text-lg">★★★★★</span>
                                    <FaQuoteLeft className="text-purple-500 ml-auto" />
                                </div>
                                <h2 className="text-xl font-bold mb-2">I Really Like the Idea of the Movies</h2>
                                <p className="text-gray-600 mb-4">
                                    Proin magna blandit arcu pellentesque scelerisque sit amet sapien purus nunc cursus antein vehicula
                                    facilisis Integer conse tetur est id.
                                </p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                                    <div>
                                        <p className="text-gray-800 font-semibold">JOHN WILLIAMS</p>
                                        <p className="text-sm text-orange-500">BUSINESS</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
