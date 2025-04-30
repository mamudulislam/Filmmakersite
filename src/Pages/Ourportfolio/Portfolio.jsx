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
        <div>
            <div className='mx-auto w-[1170px] bg-[#1A1B2A66] pt-[100px]'>
                <div className="flex items-center gap-2 mb-4 justify-center">
                    <div className="w-8 h-[2px] bg-[#FF5E3A]"></div>
                    <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">Our Portfolio</p>
                </div>
                <motion.h2
                    className='font-Roboto font-bold text-[72px] leading-[80px] text-center text-[#ffff] pb-[50px]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Our Portfolio
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-[2px] bg-[#FF5E3A]"></div>
                            <p className="text-[#FF5E3A] font-Roboto text-sm font-extrabold uppercase">Works</p>
                        </div>
                        <h3 className="font-Roboto font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight lg:leading-[72px] text-[#ffff] max-w-[784px] pb-3">
                            Check Out Our Latest Works
                        </h3>
                        <p className="font-Inter font-normal text-sm sm:text-base text-[#82869A] pb-[30px] md:pb-[50px]">
                            Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien aenean
                        </p>
                    </div>
                </div>

                {/* Portfolio items */}
                <div className="min-h-0 md:min-h-screen p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentItems.map((item) => (
                        <motion.div
                            key={item.id}
                            className="bg-gray-700 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 max-w-xs h-[380px] flex flex-col"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex-1">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-[200px] object-cover rounded-lg mb-4"
                                />
                            </div>
                            <div className="flex flex-col justify-between h-full">
                                <h2 className="text-lg sm:text-xl font-bold text-white">{item.title}</h2>
                                <p className="text-gray-300 text-sm">{item.description}</p>
                                <span className="block mt-2 text-gray-500">{item.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-8">
                    <motion.button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 text-white bg-[#FF5E3A] rounded-l-lg disabled:bg-gray-500"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Previous
                    </motion.button>
                    <motion.span
                        className="px-4 py-2 text-white bg-[#1A1B2A66]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {currentPage} / {totalPages}
                    </motion.span>
                    <motion.button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 text-white bg-[#FF5E3A] rounded-r-lg disabled:bg-gray-500"
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
