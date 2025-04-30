import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ErrorPage = () => {
    return (
        <motion.div
            className="mx-auto w-[1170px] min-h-screen flex items-center justify-center bg-[#1A1B2A] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="text-center"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="text-6xl font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    404
                </motion.h1>
                <motion.p
                    className="text-xl mt-4"
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
                    <Link to="/" className="text-[#FF5E3A] font-bold">
                        Home Page
                    </Link>
                    .
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default ErrorPage;
