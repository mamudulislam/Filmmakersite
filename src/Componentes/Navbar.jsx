import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedin, FaPhone } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { IoLogoYoutube, IoMailSharp } from "react-icons/io5";
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Logo from "../assets/Logo.png";

const Navbar = () => {
    const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className='bg-[#1A1B2A66] pt-5 px-4 md:px-0'>
            {/* Top Bar */}
            <div className='max-w-[1170px] mx-auto'>
                <div className='hidden md:grid grid-cols-3 items-center'>
                    <div className='flex gap-5 text-white'>
                        <FaFacebookF />
                        <FaTwitter />
                        <LuInstagram />
                        <IoLogoYoutube />
                        <FaLinkedin />
                    </div>
                    <div className='w-[170px] mx-auto'>
                        <img src={Logo} alt="Logo..." />
                    </div>
                    <div className='flex gap-5 justify-end text-white text-[14px] uppercase font-extrabold font-Roboto'>
                        <p className='flex items-center gap-2'>
                            <FaPhone />(+021) 345 678 910
                        </p>
                        <p className='flex items-center gap-2'>
                            <IoMailSharp />info@filmina.com
                        </p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className='hidden md:block border-b border-[#989AA94D] my-5 max-w-[1170px] mx-auto'></div>

            {/* Main Navigation */}
            <div className='max-w-[1170px] mx-auto'>
                <div className='flex justify-between items-center md:hidden'>
                    <img src={Logo} alt="Logo" className='w-[120px]' />
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='text-white text-2xl'>
                        {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </div>

                <ul className={`${mobileMenuOpen ? 'block' : 'hidden'
                    } md:flex items-center justify-center md:space-x-[60px] space-y-4 md:space-y-0 mt-4 md:mt-0 font-Roboto text-white font-semibold uppercase text-[14px]`}>
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
                        <Link to="/Works">Works</Link>
                    </li>

                    {/* Dropdown */}
                    <li
                        className='relative hover:text-[#FF5E3A] duration-150'
                        onMouseEnter={() => setPagesDropdownOpen(true)}
                        onMouseLeave={() => setPagesDropdownOpen(false)}
                    >
                        <span className='cursor-pointer'>Pages</span>
                        {(pagesDropdownOpen || mobileMenuOpen) && (
                            <ul className='md:absolute md:top-full md:left-1/2 md:-translate-x-1/2 mt-2 md:w-[200px] bg-[#1A1B2A] text-white text-sm rounded-md shadow-lg z-20'>
                                {["testimonials", "pricing", "team", "faq", "404", "coming-soon", "popup-banner"].map((page) => (
                                    <li key={page} className='px-4 py-2 hover:bg-[#FF5E3A] hover:text-black transition-colors duration-150'>
                                        <Link to={`/${page}`}>{page.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li className='hover:text-[#FF5E3A] duration-150'>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
