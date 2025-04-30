import React from 'react';
import Filmmakers from '../../assets/Filmmakers.png';
import Cinematography from '../../assets/Cinematography.png';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div>
            <div className='mx-auto w-[1170px] bg-[#1A1B2A66] pt-[158px] pb-[10px]'>

                {/* About Us Section */}
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
                    className='font-Roboto font-bold text-[96px] leading-[101px] text-center text-[#ffff] pb-[141px]'
                >
                    About
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="pt-[50px] md:pt-[100px]">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                                <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">About Us</p>
                            </div>

                            <h2 className="font-Roboto font-extrabold text-3xl md:text-5xl lg:text-[72px] leading-tight lg:leading-[72px] pt-[10px] text-[#fff]">
                                We Are a Team of Passionate Filmmakers
                            </h2>
                            <p className="pt-[20px] md:pt-[30px] font-Roboto font-extrabold text-xl md:text-2xl lg:text-[24px] leading-[30px] text-[#82869A] max-w-[550px]">
                                Dedicated to bringing creative and compelling stories to life on screen
                            </p>
                            <p className="pt-[20px] md:pt-[30px] font-Roboto font-normal text-base lg:text-[16px] leading-[24px] text-[#82869A] max-w-[550px]">
                                Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus in ante
                                in, vehicula facilisis dui. Integer consequat consectetur est id blandit. Proin et magna blandit arcu
                                pellentesque scelerisque sit amet.
                            </p>
                            <button className="py-[17px] px-[20px] font-Roboto text-[14px] bg-[#FF5E3A] rounded-[3px] uppercase mt-[30px] text-[#FFFFFF]">
                                learn more
                            </button>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-white flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            <img
                                src={Filmmakers || "/placeholder.svg"}
                                alt="Filmmakers...."
                                className="w-full max-w-[570px] h-auto lg:h-[700px] object-cover mt-8 lg:mt-0"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Cinematography Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="pt-[50px] md:pt-[100px]"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="flex justify-center">
                            <img
                                src={Cinematography || "/placeholder.svg"}
                                alt="Cinematography............"
                                className="w-full max-w-[560px] h-auto object-cover"
                            />
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                                <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">Our Cinematography</p>
                            </div>
                            <h2 className="font-Roboto text-3xl md:text-5xl lg:text-[72px] leading-tight lg:leading-[72px] font-extrabold text-[#fff] pt-[10px] pb-[20px] md:pb-[30px]">
                                Cinematography and Film Production
                            </h2>
                            <p className="font-Roboto font-extrabold text-xl md:text-2xl lg:text-[24px] leading-[30px] text-[#fff] pb-[20px] md:pb-[30px]">
                                Our video production company is here to help you create stunning images from start to finish.
                            </p>
                            <p className="font-Inter font-normal text-base lg:text-[16px] leading-[24px] text-[#fff] pb-[20px] md:pb-[30px]">
                                Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus in ante
                                in, vehicula facilisis dui. Integer consequat consectetur est id blandit. Proin et magna blandit arcu
                                pellentesque scelerisque sit amet a sapien.{" "}
                            </p>
                            <button className="py-[17px] px-[20px] font-Roboto text-[14px] bg-[#FF5E3A] rounded-[3px] uppercase mt-[30px] text-[#FFFFFF] mb-[50px] md:mb-[100px]">
                                get started
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-[100px] relative"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                        <p className="text-[#FF5E3A] font-Roboto text-sm font-extrabold uppercase">testimonials</p>
                    </div>
                    <h2 className="font-Roboto font-bold text-3xl md:text-5xl lg:text-[72px] text-[#fff]">What People Say?</h2>
                    <h3 className="font-Roboto font-bold text-xl md:text-[24px] text-[#82869A] pb-[20px] md:pb-[30px]">
                        What they say about us?
                    </h3>
                    <p className="font-Roboto font-normal text-base lg:text-[16px] leading-[24px] pb-[30px] text-[#82869A] max-w-[545px]">
                        Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus in ante in,
                        vehicula facilisis dui. Integer consequat consectetur est id.
                    </p>

                    {/* Testimonial Cards */}
                    <div className="relative flex flex-col md:flex-row gap-[30px]">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="bg-white shadow-lg rounded-lg p-6 border border-purple-600 max-w-sm z-10"
                        >
                            <div className="flex items-center mb-4">
                                <span className="text-orange-500 text-lg">★★★★★</span>
                                <span className="text-purple-500 ml-auto"><FaQuoteLeft /></span>
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

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1.4 }}
                            className="bg-white shadow-lg rounded-lg p-6 border border-purple-600 max-w-sm z-10"
                        >
                            <div className="flex items-center mb-4">
                                <span className="text-orange-500 text-lg">★★★★★</span>
                                <span className="text-purple-500 ml-auto"><FaQuoteLeft /></span>
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
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
