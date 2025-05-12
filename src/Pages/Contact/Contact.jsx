import React, { useState } from 'react';
import { motion } from "framer-motion";
import jhonewhick from "../../assets/jhonewhick.png";

const fadeItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
        } else {
            alert("Message sent!");
            // Here you would handle the form submission logic (e.g., sending data to a server)
        }
    };

    return (
        <div className='mx-auto max-w-[1170px] w-full bg-[#1A1B2A66] pt-[158px] pb-[10px] px-4'>
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeItem}
            >
                <div className="flex items-center gap-2 mb-4 justify-center">
                    <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                    <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">Contact</p>
                </div>
                <motion.h2
                    className='font-Roboto font-bold text-[48px] md:text-[96px] leading-tight text-center text-white pb-[80px] md:pb-[141px]'
                    variants={fadeItem}
                >
                    Contact
                </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left side content */}
                <motion.div
                    className="pt-[50px] md:pt-[100px]"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeItem}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                        <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">contact</p>
                    </div>

                    <h2 className="font-Roboto font-extrabold text-3xl md:text-5xl lg:text-[72px] leading-tight lg:leading-[72px] pt-[10px] text-white">
                        Get In Touch
                    </h2>
                    <p className="pt-[20px] md:pt-[30px] font-Roboto font-normal text-base lg:text-[16px] leading-[24px] text-[#82869A] max-w-[550px] pb-[50px]">
                        For more information, contact us at <span className='font-bold text-white'>info@filmina.com</span>
                    </p>
                    <h3 className="font-Roboto font-extrabold text-3xl md:text-5xl lg:text-[72px] leading-tight lg:leading-[72px] pt-[10px] pb-[10px] text-white">
                        Keep in touch
                    </h3>

                    <p className='font-Source font-normal text-[20px] leading-[30px] text-[#82869A]'>768 Market Street San Francisco, CA 64015, United States</p>
                    <div className='flex gap-[50px] pb-[30px]'>
                        <p className='font-Source font-normal text-[20px] leading-[30px] text-[#82869A]'>info@filmina.com</p>
                        <p className='font-Source font-normal text-[20px] leading-[30px] text-[#82869A]'>(+021) 345 678 910</p>
                    </div>
                    <img src={jhonewhick} alt="Jhone E. Wick illustration" className='w-full max-w-[550px] h-auto' />
                </motion.div>

                {/* Right side form with updated design */}
                <motion.div
                    className="pt-[50px] md:pt-[100px]"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeItem}
                >
                    <h3 className="font-Roboto font-extrabold text-3xl md:text-5xl lg:text-[72px] leading-tight lg:leading-[72px] pt-[10px] pb-[30px] text-white">
                        Send us message
                    </h3>
                    <p className="font-Roboto font-normal text-base lg:text-[16px] leading-[24px] text-[#82869A] max-w-[550px] pb-[30px]">
                        Proin et magna blandit arcu pellentesque scelerisque sit amet a
                    </p>

                    {/* Updated form design */}
                    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-md max-w-[500px] mx-auto">
                        <div>
                            <label className="block text-[#4A4A4A] text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#1A1B2A] placeholder-gray-400 focus:outline-none focus:border-[#FF5E3A] transition-all"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label className="block text-[#4A4A4A] text-sm font-medium mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#1A1B2A] placeholder-gray-400 focus:outline-none focus:border-[#FF5E3A] transition-all"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-[#4A4A4A] text-sm font-medium mb-1">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#1A1B2A] placeholder-gray-400 focus:outline-none focus:border-[#FF5E3A] transition-all"
                                placeholder="Subject"
                            />
                        </div>

                        <div>
                            <label className="block text-[#4A4A4A] text-sm font-medium mb-1">Message</label>
                            <textarea
                                rows="5"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#1A1B2A] placeholder-gray-400 focus:outline-none focus:border-[#FF5E3A] transition-all"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#FF5E3A] text-white font-semibold text-base py-3 rounded-md hover:bg-opacity-90 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
