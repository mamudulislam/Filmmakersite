import { motion } from "framer-motion";
import Filmmakers from "../assets/Filmmakers.png"
import Vector1 from "../assets/Vector1.png"
import Vector2 from "../assets/Vector2.png"
import Vector3 from "../assets/Vector3.png"
import Vector4 from "../assets/Vector4.png"
import Vector5 from "../assets/Vector5.png"
import Vector6 from "../assets/Vector6.png"
import Cinematography from "../assets/Cinematography.png"
import { FaQuoteLeft } from "react-icons/fa"
import jhonewhick from "../assets/jhonewhick.png"


const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } }
};

const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

const Aboutus = () => {
    const cards = [
        {
            title: "Movie Production",
            description: "Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.",
            image:
                "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
            title: "Movie Production",
            description: "Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.",
            image:
                "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
            title: "Movie Production",
            description: "Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.",
            image:
                "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
            title: "Movie Production",
            description: "Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.",
            image:
                "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
            title: "Movie Production",
            description: "Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.",
            image:
                "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
            title: "Movie Production",
            description: "Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.",
            image:
                "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
    ]

    return (
        <div className="container mx-auto px-4 md:px-6 lg:max-w-[1170px] bg-[#141851bc] pb-[100px]">
            <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                initial="hidden"
                animate="show"
                variants={container}
            >
                <motion.div className="pt-[50px] md:pt-[100px]" variants={slideInFromLeft}>
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
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="py-[17px] px-[20px] font-Roboto text-[14px] bg-[#FF5E3A] rounded-[3px] uppercase mt-[30px] text-[#FFFFFF]"
                    >
                        learn more
                    </motion.button>
                    <div className="pb-[50px] md:pb-[94px]"></div>
                </motion.div>
                <motion.div className="text-white flex justify-center lg:justify-end" variants={slideInFromRight}>
                    <div className="relative">
                        <img
                            src={Filmmakers || "/placeholder.svg"}
                            alt="Filmmakers...."
                            className="w-full max-w-[570px] h-auto lg:h-[700px] object-cover mt-8 lg:mt-0"
                        />
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="flex flex-col items-center justify-center text-center pb-[30px] md:pb-[56px]"
                initial="hidden"
                animate="show"
                variants={fadeIn}
            >
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                    <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">partners</p>
                </div>
                <h2 className="font-Roboto text-3xl md:text-[45px] leading-tight md:leading-[50px] tracking-[-1px] text-[#fff]">
                    Trusted by the Best Brands
                </h2>
            </motion.div>
            <motion.div
                className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center justify-items-center pb-[50px] md:pb-[100px]"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {[Vector1, Vector2, Vector3, Vector4, Vector5, Vector6].map((vector, index) => (
                    <motion.img
                        key={index}
                        src={vector || "/placeholder.svg"}
                        alt="Vector....."
                        className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
                        variants={item}
                        whileHover={{ scale: 1.1 }}
                    />
                ))}
            </motion.div>

            <div>
                <motion.div
                    className="mb-[50px] md:mb-[100px] relative"
                    initial="hidden"
                    animate="show"
                    variants={scaleUp}
                >
                    <img
                        src="https://www.essex.ac.uk/-/media/images/departments/lifts/film-studies/lifts,-film-studies---clapper-board-for-film-800-x-452.jpg"
                        alt=""
                        className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                    />
                    <motion.div
                        className="p-6 md:p-[50px] bg-[#11121E] w-[90%] md:w-[95%] lg:w-[1070px] mx-auto -mt-10 md:-mt-20 relative z-10 rounded-[3px]"
                        whileHover={{ y: -5 }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                                    <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">About Us</p>
                                </div>
                                <h2 className="font-Roboto text-3xl md:text-5xl lg:text-[72px] text-[#fff] font-extrabold leading-tight lg:leading-[72px]">
                                    Meet the Our Video Directors
                                </h2>
                            </div>
                            <div>
                                <p className="font-Roboto font-extrabold text-xl md:text-2xl lg:text-[24px] leading-[30px] text-[#fff] pb-5">
                                    Our team is made up of experienced and talented filmmakers who share a common goal
                                </p>
                                <p className="font-Inter text-[#82869A] font-normal text-base lg:text-[16px] leading-[24px]">
                                    Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc cursus in
                                    ante in.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="pt-[50px] md:pt-[100px]"
                initial="hidden"
                animate="show"
                variants={container}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div className="flex justify-center" variants={slideInFromLeft}>
                        <img
                            src={Cinematography || "/placeholder.svg"}
                            alt="Cinematography............"
                            className="w-full max-w-[560px] h-auto object-cover"
                        />
                    </motion.div>
                    <motion.div className="mt-8 lg:mt-0" variants={slideInFromRight}>
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
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="py-[17px] px-[20px] font-Roboto text-[14px] bg-[#FF5E3A] rounded-[3px] uppercase mt-[30px] text-[#FFFFFF] mb-[50px] md:mb-[100px]"
                        >
                            get started
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-5"
                initial="hidden"
                animate="show"
                variants={container}
            >
                <motion.div variants={item}>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                        <p className="text-[#FF5E3A] font-Roboto text-sm font-extrabold uppercase">works</p>
                    </div>
                    <h3 className="font-Roboto font-extrabold text-3xl md:text-5xl lg:text-[72px] leading-tight lg:leading-[72px] text-[#ffff] max-w-[784px] pb-5">
                        Check Out Our Latest Works
                    </h3>
                    <p className="font-Inter font-normal text-base lg:text-[16px] leading-[24px] text-[#82869A] pb-[30px] md:pb-[50px]">
                        Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien aenean
                    </p>
                </motion.div>
                <motion.div
                    className="flex justify-start lg:justify-center items-center"
                    variants={item}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="py-4 px-[20px] font-Roboto text-[14px] bg-[#FF5E3A] rounded-[3px] uppercase mt-[0px] lg:mt-[30px] text-[#FFFFFF] mb-[50px] md:mb-[100px]"
                    >
                        View all works
                    </motion.button>
                </motion.div>
            </motion.div>

            <motion.div
                className="min-h-0 md:min-h-screen p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
                initial="hidden"
                animate="show"
                variants={container}
            >
                {[
                    {
                        title: "TV Commercial",
                        description: "Proin et magna blandit arcu pellentesque scelerisque sit amet.",
                        image: "https://ca-times.brightspotcdn.com/dims4/default/ee72bf0/2147483647/strip/false/crop/3000x2000+0+0/resize/1486x991!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F74%2Fa6%2Fe87f0359453fb95ff85a286837e8%2Fla-et-marvel-is-doing-just-fine-for-now-but-even-its-fans-are-at-a-tipping-point.jpg"
                    },
                    {
                        title: "Indie Movie",
                        description: "Proin et magna blandit arcu pellentesque scelerisque sit amet.",
                        image: "https://ca-times.brightspotcdn.com/dims4/default/ee72bf0/2147483647/strip/false/crop/3000x2000+0+0/resize/1486x991!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F74%2Fa6%2Fe87f0359453fb95ff85a286837e8%2Fla-et-marvel-is-doing-just-fine-for-now-but-even-its-fans-are-at-a-tipping-point.jpg"
                    },
                    {
                        title: "Documentary",
                        description: "Proin et magna blandit arcu pellentesque scelerisque sit amet.",
                        image: "https://ca-times.brightspotcdn.com/dims4/default/ee72bf0/2147483647/strip/false/crop/3000x2000+0+0/resize/1486x991!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F74%2Fa6%2Fe87f0359453fb95ff85a286837e8%2Fla-et-marvel-is-doing-just-fine-for-now-but-even-its-fans-are-at-a-tipping-point.jpg"
                    },
                    {
                        title: "Company Profile",
                        description: "Proin et magna blandit arcu pellentesque scelerisque sit amet.",
                        image: "https://ca-times.brightspotcdn.com/dims4/default/ee72bf0/2147483647/strip/false/crop/3000x2000+0+0/resize/1486x991!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F74%2Fa6%2Fe87f0359453fb95ff85a286837e8%2Fla-et-marvel-is-doing-just-fine-for-now-but-even-its-fans-are-at-a-tipping-point.jpg"
                    }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-700 rounded-lg shadow-lg p-6 border border-purple-600 transition-transform transform hover:scale-105"
                        variants={item}
                        whileHover={{ scale: 1.03 }}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-xl font-bold text-white">{item.title}</h2>
                        <p className="text-gray-300">{item.description}</p>
                        <span className="block mt-2 text-gray-500">2023</span>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="pt-[50px] md:pt-[105px]"
                initial="hidden"
                animate="show"
                variants={fadeIn}
            >
                <div className="flex items-center justify-center gap-2 mb-4 pb-[10px]">
                    <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                    <p className="text-[#FF5E3A] font-Roboto text-sm font-extrabold uppercase">services</p>
                </div>
                <h2 className="text-center font-Roboto font-bold text-3xl md:text-5xl lg:text-[72px] text-[#ffff]">
                    Our Services
                </h2>
                <p className="text-center text-[#82869A] font-normal text-base lg:text-[16px] font-Inter pb-[30px] md:pb-[50px]">
                    Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien aenean
                </p>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-[50px] md:pb-[100px]"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="relative h-[400px] w-full bg-gray-100 bg-cover bg-center mx-auto"
                            style={{ backgroundImage: `url('${card.image}')` }}
                            variants={item}
                            whileHover={{ y: -10 }}
                        >
                            <div className="absolute top-[227.77px] left-[20px] flex gap-[10px]">
                                <img
                                    src={card.image || "/placeholder.svg"}
                                    alt="Circle"
                                    className="w-[50px] h-[50px] rounded-full object-cover"
                                />
                            </div>

                            <div className="absolute top-[300px] left-[20px]">
                                <h1 className="font-Roboto font-bold text-[28px] leading-[36px] tracking-[0px] text-white">
                                    {card.title}
                                </h1>

                                <p className="font-Inter font-normal text-[16px] leading-[24px] tracking-[0%] mt-2 text-white">
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                className="mt-[100px] relative"
                initial="hidden"
                animate="show"
                variants={fadeIn}
            >
                {/* Heading */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                    <p className="text-[#FF5E3A] font-Roboto text-sm font-extrabold uppercase">testimonials</p>
                </div>
                <h2 className="font-Roboto font-bold text-3xl md:text-5xl lg:text-[72px] text-[#fff]">What People Says?</h2>
                <h3 className="font-Roboto font-bold text-xl md:text-[24px] text-[#82869A] pb-[20px] md:pb-[30px]">
                    What they say about us?
                </h3>
                <p className="font-Roboto font-normal text-base lg:text-[16px] leading-[24px] pb-[30px] text-[#82869A] max-w-[545px]">
                    Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus in ante in,
                    vehicula facilisis dui. Integer consequat consectetur est id.
                </p>

                {/* Card container */}
                <div className="relative flex flex-col md:flex-row gap-[30px]">
                    {/* Card 1 */}
                    <motion.div
                        className="bg-white shadow-lg rounded-lg p-6 border border-purple-600 max-w-sm z-10"
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
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
                        className="bg-white shadow-lg rounded-lg p-6 border border-purple-600 max-w-sm z-10 relative"
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
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

                    {/* Overlapping Image */}
                    <motion.div
                        className="hidden lg:block absolute left-[652px] top-[-335px] z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1496458590512-56d2688442b1?w=600&auto=format&fit=crop&q=60"
                            alt="Overlapping"
                            className="w-[470px] h-[618px] object-cover rounded"
                        />
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-[50px] md:pb-[94px]"
                initial="hidden"
                animate="show"
                variants={container}
            >
                <motion.div variants={item}>
                    <div className="flex items-center gap-2 mb-4 pt-[50px] md:pt-[100px]">
                        <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                        <p className="text-[#FF5E3A] font-Roboto text-sm font-extrabold uppercase">blog</p>
                    </div>
                    <h2 className="max-w-[286px] font-Roboto font-bold text-3xl md:text-5xl lg:text-[72px] leading-tight lg:leading-[72px] text-[#fff] pb-[20px] md:pb-[30px]">
                        Our Latest Blog
                    </h2>
                    <p className="font-Inter font-normal text-base lg:text-[16px] leading-[24px] text-[#82869A] max-w-[286px]">
                        Proin et magna blandit arcu pellentes scelerisque sit amet a sapien. Aenean purus nunc cursus in ante
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="py-[17px] px-[20px] font-Roboto text-[14px] bg-[#FF5E3A] rounded-[3px] uppercase mt-[30px] text-[#FFFFFF]"
                    >
                        view all
                    </motion.button>
                </motion.div>

                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="pt-[50px] md:pt-[100px]"
                        variants={item}
                        whileHover={{ y: -5 }}
                    >
                        <img
                            src="https://i.ytimg.com/vi/rImiLiwi7UA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAFyXkvU3V1ugn3cnfgWZP2ltWTbw"
                            alt="jhon whick"
                            className="w-full max-w-[258px] h-auto aspect-square object-cover pb-[20px]"
                        />
                        <h2 className="max-w-[258px] font-Roboto font-bold text-xl md:text-[24px] leading-[30px] text-[#fff]">
                            John Wick Chapter 4 Packs A Fast And Furious Punch
                        </h2>
                        <p className="font-Inter font-normal text-base lg:text-[16px] leading-[24px] text-[#82869A]">
                            March 27, 2023 No Comments
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="relative w-full h-[300px] md:h-[400px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <img src={jhonewhick || "/placeholder.svg"} alt="Image description" className="w-full h-full object-cover" />
                <motion.div
                    className="absolute inset-0 bg-black/50 flex flex-col justify-center p-6 md:p-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-[2px] bg-white"></div>
                        <p className="text-white font-roboto text-sm font-extrabold uppercase">collaborating</p>
                    </div>
                    <h2 className="text-white font-Roboto font-bold text-3xl md:text-5xl lg:text-[72px] leading-tight lg:leading-[72px] max-w-[729px] mb-6">
                        We Love Collaborating With Other Creatives
                    </h2>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="py-[17px] px-[20px] font-Roboto text-[14px] bg-[#FF5E3A] rounded-[3px] uppercase text-[#FFFFFF]"
                    >
                        let's collaborate
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Aboutus