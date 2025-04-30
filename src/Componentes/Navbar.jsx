import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { IoLogoYoutube, IoMailSharp } from "react-icons/io5";
import { FaPhone } from 'react-icons/fa6';
import Logo from "../assets/Logo.png";

const Navbar = () => {
    const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

    return (
        <div className='mx-auto w-[1170px] bg-[#1A1B2A66] pt-5'>
            <nav>
                <div className='grid grid-cols-3 items-center'>
                    <div className='flex gap-[30px] text-white'>
                        <FaFacebookF />
                        <FaTwitter />
                        <LuInstagram />
                        <IoLogoYoutube />
                        <FaLinkedin />
                    </div>
                    <div className='w-[170px]'>
                        <img src={Logo} alt="Logo..." />
                    </div>
                    <div>
                        <div className='flex gap-[30px]'>
                            <p className='flex items-center gap-3 text-white font-Roboto font-extrabold text-[14px] uppercase'>
                                <FaPhone />(+021) 345 678 910
                            </p>
                            <p className='flex items-center gap-3 text-white font-Roboto font-extrabold text-[14px] uppercase'>
                                <IoMailSharp />info@filmina.com
                            </p>
                        </div>
                    </div>
                </div>

                <div className='border border-b-1 mt-[20px] w-[1170px] text-[#989AA94D] mb-[20px]'></div>

                <div>
                    <ul className='relative flex items-center justify-center space-x-[60px] font-Roboto text-white font-semibold uppercase text-[14px] cursor-pointer'>
                        <li className='hover:text-[#FF5E3A] duration-150'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='hover:text-[#FF5E3A] duration-150'>
                            <Link to="/about">About</Link>
                        </li>
                        <li className='hover:text-[#FF5E3A] duration-150'>
                            <Link to="/services">Services</Link>
                        </li>
                        <li className='hover:text-[#FF5E3A] duration-150'>
                            <Link to="/portfolio">Works</Link>
                        </li>

                        {/* Dropdown */}
                        <li
                            className='relative hover:text-[#FF5E3A] duration-150'
                            onMouseEnter={() => setPagesDropdownOpen(true)}
                            onMouseLeave={() => setPagesDropdownOpen(false)}
                        >
                            <span>Pages</span>
                            {pagesDropdownOpen && (
                                <ul className='absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[200px] bg-[#1A1B2A] text-white text-sm rounded-md shadow-lg z-20'>
                                    <li className='px-4 py-2 hover:bg-[#FF5E3A] hover:text-black transition-colors duration-150'>
                                        <Link to="/testimonials">Testimonials</Link>
                                    </li>
                                    <li className='px-4 py-2 hover:bg-[#FF5E3A] hover:text-black transition-colors duration-150'>
                                        <Link to="/pricing">Pricing</Link>
                                    </li>
                                    <li className='px-4 py-2 hover:bg-[#FF5E3A] hover:text-black transition-colors duration-150'>
                                        <Link to="/team">Our Team</Link>
                                    </li>
                                    <li className='px-4 py-2 hover:bg-[#FF5E3A] hover:text-black transition-colors duration-150'>
                                        <Link to="/faq">FAQ</Link>
                                    </li>
                                    <li className='px-4 py-2 hover:bg-[#FF5E3A] hover:text-black transition-colors duration-150'>
                                        <Link to="/404">404</Link>
                                    </li>
                                    <li className='px-4 py-2 hover:bg-[#FF5E3A] hover:text-black transition-colors duration-150'>
                                        <Link to="/coming-soon">Coming Soon</Link>
                                    </li>
                                    <li className='px-4 py-2 hover:bg-[#FF5E3A] hover:text-black transition-colors duration-150'>
                                        <Link to="/popup-banner">Popup Banner</Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className='hover:text-[#FF5E3A] duration-150'>
                            <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
