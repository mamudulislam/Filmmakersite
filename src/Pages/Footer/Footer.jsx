import React, { useState } from 'react';
import Logo from "../../assets/Logo.png";
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { LuInstagram } from 'react-icons/lu';
import { IoLogoYoutube } from 'react-icons/io5';

const Footer = () => {
    const [email, setEmail] = useState('');

    return (
        <div className='mx-auto w-full max-w-[1170px] bg-[#11121E] px-4'>
            {/* Subscribe Section */}
            <div className='grid grid-cols-1 md:grid-cols-3 max-w-[1170px] mx-auto px-4 py-12 gap-6'>
                <div className="flex justify-center md:justify-start items-center">
                    <h3 className='font-Roboto font-bold text-3xl text-white'>Subscribe</h3>
                </div>
                <div className="flex items-center">
                    <p className='font-Inter text-base text-[#82869A]'>
                        Proin magna blandit arcu pellentesque scelerisque sit amet sapien purus nunc cursus ante in vehicula facilisis Integer conse
                    </p>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                    <div className="flex w-full max-w-md">
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 border border-purple-500 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-white text-white bg-transparent"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-orange-600 text-white rounded-r-md px-4 hover:bg-orange-500"
                        >
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-b border-[#989AA94D] mt-5 w-full"></div>

            {/* Main Footer Content */}
            <div className='pt-10 pb-12'>
                <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-between">
                    {/* Logo and Description */}
                    <div className="flex flex-col max-w-[300px]">
                        <img src={Logo} alt="logo" className='w-[120px] md:w-[170px] h-auto object-contain' />
                        <p className="mt-2 text-[#82869A] font-Inter font-normal text-[16px] leading-[24px]">
                            Proin et magna blandit arcu pellentes sceleri sit amet a sapien. Aenean purus nunc cursus in ante in, vehicula facilisis
                        </p>
                    </div>

                    {/* Keep in Touch */}
                    <div className="flex flex-col max-w-[263px]">
                        <h2 className="text-[#FFFFFF] font-Roboto font-bold text-[20px]">Keep in touch</h2>
                        <div className="mt-2">
                            <p className='text-[#82869A] font-Inter font-normal text-[16px] leading-[24px]'>
                                768 Market St, San Francisco, CA 64015, United States
                            </p>
                            <p className='text-[#82869A] font-Inter font-normal text-[16px] leading-[24px]'>
                                info@filmina.com
                            </p>
                            <p className='text-[#82869A] font-Inter font-normal text-[16px] leading-[24px]'>
                                (+021) 345 678 910
                            </p>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col">
                        <h2 className="text-[#FFFFFF] font-Roboto font-bold text-[20px]">Services</h2>
                        <ul className="mt-2 space-y-1">
                            <li className='text-[#82869A] text-[16px] leading-[24px] font-Inter'>Movie production</li>
                            <li className='text-[#82869A] text-[16px] leading-[24px] font-Inter'>Movie directing</li>
                            <li className='text-[#82869A] text-[16px] leading-[24px] font-Inter'>Movie directing</li>
                            <li className='text-[#82869A] text-[16px] leading-[24px] font-Inter'>High quality work</li>
                            <li className='text-[#82869A] text-[16px] leading-[24px] font-Inter'>Sound effect</li>
                            <li className='text-[#82869A] text-[16px] leading-[24px] font-Inter'>Live streaming</li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col">
                        <h2 className="text-[#FFFFFF] font-Roboto font-bold text-[20px]">Quick links</h2>
                        <ul className="mt-2 space-y-1">
                            <li className='text-[#82869A] text-[16px] leading-[24px] font-Inter'>About</li>
                            <li className='text-[#82869A] text-[16px] leading-[24px] font-Inter'>Services</li>
                            <li className='text-[#82869A] text-[16px] leading-[24px] font-Inter'>Works</li>
                            <li className='text-[#82869A] text-[16px] leading-[24px] font-Inter'>Blog</li>
                            <li className='text-[#82869A] text-[16px] leading-[24px] font-Inter'>Testimonials</li>
                        </ul>
                    </div>

                    {/* Supports */}
                    <div className="flex flex-col">
                        <h2 className="text-[#FFFFFF] font-Roboto font-bold text-[20px]">Supports</h2>
                        <ul className="mt-2 space-y-1">
                            <li className='text-[#82869A] text-[16px] leading-[24px] font-Inter'>Help center</li>
                            <li className='text-[#82869A] text-[16px] leading-[24px] font-Inter'>Disclaimer</li>
                            <li className='text-[#82869A] text-[16px] leading-[24px] font-Inter'>FAQs</li>
                            <li className='text-[#82869A] text-[16px] leading-[24px] font-Inter'>Contact</li>
                            <li className='text-[#82869A] text-[16px] leading-[24px] font-Inter'>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Divider */}
            <div className="border-b border-[#989AA94D] mt-5 w-full"></div>

            {/* Copyright & Social Icons */}
            <div className="py-6">
                <div className='flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left'>
                    <p className='font-Inter text-[#82869A] font-normal text-[16px] leading-[24px]'>
                        © 2023 Filmina. Designed by ThemeWarrior
                    </p>
                    <div className='flex gap-[30px] text-[#82869A] justify-center md:justify-start'>
                        <FaFacebookF />
                        <FaTwitter />
                        <LuInstagram />
                        <IoLogoYoutube />
                        <FaLinkedin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
