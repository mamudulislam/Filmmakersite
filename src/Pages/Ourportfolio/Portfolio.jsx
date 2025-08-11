import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const portfolioItems = new Array(20).fill(null).map((_, index) => ({
        id: index + 1,
        title: `Project ${index + 1}`,
        description: 'Proin et magna blandit arcu pellentesque scelerisque sit amet.',
        year: '2023',
        image: 'https://ca-times.brightspotcdn.com/dims4/default/ee72bf0/2147483647/strip/false/crop/3000x2000+0+0/resize/1486x991!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F74%2Fa6%2Fe87f0359453fb95ff85a286837e8%2Fla-et-marvel-is-doing-just-fine-for-now-but-even-its-fans-are-at-a-tipping-point.jpg'
    }));

    const itemsPerPage = 6;
    const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = portfolioItems.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className='bg-[#1A1B2A66] py-16'>
            <div className="mx-auto max-w-screen-xl px-16">
                {/* Portfolio Header */}
                <div className="flex items-center gap-2 mb-4 justify-center">
                    <div className="w-8 h-[2px] bg-[#FF5E3A]"></div>
                    <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">Our Portfolio</p>
                </div>
                <motion.h2
                    className='font-Roboto font-bold text-[72px] leading-[80px] text-center text-white'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Our Portfolio
                </motion.h2>

                {/* Works Section */}
                <div className="flex flex-col items-center mb-12">
                    <h3 className="font-Roboto font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white mb-4">
                        Check Out Our Latest Works
                    </h3>
                    <p className="font-Inter font-normal text-base sm:text-lg text-[#82869A] max-w-[780px] text-center pb-6">
                        Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien aenean.
                    </p>
                </div>

                {/* Portfolio items grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentItems.map((item) => (
                        <motion.div
                            key={item.id}
                            className="bg-gray-700 rounded-lg shadow-lg p-4 flex flex-col hover:scale-105 transition-transform"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-56 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h2>
                            <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                            <span className="block text-gray-500">{item.year}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-12">
                    <motion.button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-6 py-3 text-white bg-[#FF5E3A] rounded-l-lg disabled:bg-gray-500"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Previous
                    </motion.button>
                    <motion.span
                        className="px-4 py-3 text-white bg-[#1A1B2A66]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {currentPage} / {totalPages}
                    </motion.span>
                    <motion.button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-6 py-3 text-white bg-[#FF5E3A] rounded-r-lg disabled:bg-gray-500"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Next
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
