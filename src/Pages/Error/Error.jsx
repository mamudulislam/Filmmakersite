import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ErrorPage = () => {
    return (
        <motion.div
            className="max-w-[1170px] mx-auto min-h-screen flex items-center justify-center bg-[#1A1B2A] text-white px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="text-center max-w-[600px] w-full"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="text-6xl font-bold sm:text-7xl md:text-8xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    404
                </motion.h1>
                <motion.p
                    className="text-xl mt-4 sm:text-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Oops! The page you're looking for doesn't exist.
                </motion.p>
                <motion.p
                    className="mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Go back to the{' '}
                    <Link to="/" className="text-[#FF5E3A] font-bold hover:underline">
                        Home Page
                    </Link>
                    .
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default ErrorPage;
