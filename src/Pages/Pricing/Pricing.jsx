import React from 'react';
import { motion } from "framer-motion";
import jhonewhick from '../../assets/jhonewhick.png';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import Rightsid from "../../assets/Rightsid.png"

const fadeItem = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const Pricing = () => {
    const plans = [
        {
            title: "Basic",
            price: "$1,200",
            per: "per project",
            features: [
                { label: "Pre-production", value: "LIMITED" },
                { label: "Production", value: "LIMITED" },
                { label: "Post-production", value: "–" },
                { label: "Crew Members", value: "1" },
                { label: "Equipment", value: "–" },
                { label: "Delivery Time", value: "2-4 WEEKS" },
                { label: "Revisions", value: "1" },
            ],
            button: "SELECT PLAN",
            highlighted: false,
        },
        {
            title: "Pro",
            price: "$5,000",
            per: "per project",
            features: [
                { label: "Pre-production", value: "FULL" },
                { label: "Production", value: "FULL" },
                { label: "Post-production", value: "FULL" },
                { label: "Crew Members", value: "4+" },
                { label: "Equipment", value: "FULL" },
                { label: "Delivery Time", value: "1-2 WEEKS" },
                { label: "Revisions", value: "2-3" },
            ],
            button: "SELECT PLAN",
            highlighted: true,
            recommended: true,
        },
        {
            title: "Enterprise",
            price: "Custom Quote",
            per: "",
            features: [
                { label: "Pre-production", value: "FULL + CUSTOMIZED" },
                { label: "Production", value: "FULL + CUSTOMIZED" },
                { label: "Post-production", value: "FULL + CUSTOMIZED" },
                { label: "Crew Members", value: "CUSTOMIZED" },
                { label: "Equipment", value: "CUSTOMIZED" },
                { label: "Delivery Time", value: "CUSTOMIZED" },
                { label: "Revisions", value: "CUSTOMIZED" },
            ],
            button: "CUSTOM QUOTE",
            highlighted: false,
        },
    ];

    const faqs = [
        {
            question: "What is film production?",
            answer: "Lorem ipsum dolor sit amet consectetur iquam lectus sollicitudin faucibus acides quam nausa fraddunt venenuis."
        },
        {
            question: "Who is involved in film production?",
            answer: "Film production typically involves directors, producers, cinematographers, actors, editors, sound designers, and many other crew members."
        },
        {
            question: "How long does it take to produce a film?",
            answer: "Production timelines vary greatly depending on the project. Short films might take weeks, while major feature films can take years."
        },
        {
            question: "What is pre-production?",
            answer: "Pre-production is the planning phase where scripts are finalized, locations are scouted, and budgets are set."
        },
        {
            question: "What is production?",
            answer: "Production refers to the principal photography phase where the film is actually shot, with actors performing scenes."
        }
    ];

    const [openQuestion, setOpenQuestion] = React.useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
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
                    <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">Pricing</p>
                </div>
                <motion.h2
                    className='font-Roboto font-bold text-[48px] md:text-[96px] leading-tight text-center text-white pb-[80px] md:pb-[141px]'
                    variants={fadeItem}
                >
                    Pricing
                </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                    className="pt-[50px] md:pt-[100px]"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeItem}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                        <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">pricing</p>
                    </div>

                    <h2 className="font-Roboto font-extrabold text-3xl md:text-5xl lg:text-[72px] leading-tight lg:leading-[72px] pt-[10px] text-white">
                        Choose Your Plans
                    </h2>
                    <p className="pt-[20px] md:pt-[30px] font-Roboto font-normal text-base lg:text-[16px] leading-[24px] text-[#82869A] max-w-[550px] pb-[50px]">
                        Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien aenean
                    </p>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full pb-[94px]">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.04 }}
                        className={`rounded-xl border transition-all duration-500 ease-in-out transform ${plan.highlighted
                            ? "bg-[#FF5C39] text-white shadow-2xl"
                            : "bg-[#1F2235] text-white hover:shadow-xl hover:border-gray-500"
                            } p-6 relative group`}
                    >
                        {plan.recommended && (
                            <span className="absolute top-4 right-4 text-xs bg-white text-black font-bold px-2 py-1 rounded">
                                RECOMMENDED
                            </span>
                        )}
                        <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
                        <p className="text-sm text-gray-400 mb-4">the production company charges a fixed</p>
                        <div className="text-3xl font-bold mb-1">{plan.price}</div>
                        {plan.per && <p className="text-xs uppercase text-gray-400 mb-6">{plan.per}</p>}

                        <button
                            className={`w-full py-2 mt-2 rounded-lg font-semibold transition-all duration-300 ease-in-out ${plan.highlighted
                                ? "bg-white text-[#FF5C39] hover:bg-gray-200"
                                : "bg-gray-700 text-white hover:bg-gray-600"
                                }`}
                        >
                            {plan.button}
                        </button>

                        <ul className="mt-6 space-y-2 text-sm">
                            {plan.features.map((feature, i) => (
                                <li
                                    key={i}
                                    className="flex justify-between border-t border-gray-600 pt-2 transition-all duration-300 group-hover:text-gray-100"
                                >
                                    <span>{feature.label}</span>
                                    <span className="font-bold">{feature.value}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            <div className="relative w-full h-[300px] md:h-[400px] b-[100px]">
                <img src={jhonewhick || "/placeholder.svg"} alt="Image description" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center p-6 md:p-12">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-[2px] bg-white"></div>
                        <p className="text-white font-roboto text-sm font-extrabold uppercase">collaborating</p>
                    </div>
                    <motion.h2
                        className="text-white font-Roboto font-bold text-3xl md:text-5xl lg:text-[72px] leading-tight lg:leading-[72px] max-w-[729px] mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        We Love Collaborating With Other Creatives
                    </motion.h2>
                    <motion.button
                        className="py-[17px] px-[20px] font-Roboto text-[14px] bg-[#FF5E3A] rounded-[3px] uppercase text-[#FFFFFF]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Let's Collaborate
                    </motion.button>
                </div>
            </div>

            <div className="pt-[50px] md:pt-[105px]">
                <div className="flex items-center justify-center gap-2 mb-4 pb-[10px]">
                    <div className="w-10 h-[2px] bg-[#FF5E3A]"></div>
                    <p className="text-[#FF5E3A] font-roboto text-sm font-extrabold uppercase">faq</p>
                </div>

                <motion.h2
                    className="text-center font-Roboto font-bold text-3xl md:text-5xl lg:text-[72px] text-[#ffff]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Pricing FAQs
                </motion.h2>

                <motion.p
                    className="text-center text-[#82869A] font-normal text-base lg:text-[16px] font-Inter pb-[30px] md:pb-[50px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien aenean
                </motion.p>
            </div>









            <motion.div
                className="flex flex-col md:flex-row gap-10 items-start bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl mb-[100px]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Left Side - Accordion */}
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                        Film Production FAQ
                    </h2>
                    <Accordion type="single" collapsible className="w-full space-y-3">
                        {[
                            {
                                value: "item-1",
                                question: "What is film production?",
                                answer: "Film production is the process of creating a film, from idea development to distribution..."
                            },
                            {
                                value: "item-2",
                                question: "Who is involved in film production?",
                                answer: "Directors, producers, writers, actors, camera operators, and more all play a part in making a film."
                            },
                            {
                                value: "item-3",
                                question: "How long does it take to produce a film?",
                                answer: "It varies by project but can range from a few months to several years."
                            },
                            {
                                value: "item-4",
                                question: "What is pre-production?",
                                answer: "Pre-production includes planning, casting, location scouting, script revisions, and scheduling."
                            },
                            {
                                value: "item-5",
                                question: "What is production?",
                                answer: "Production is the phase where the film is actually shot with the cast and crew on set."
                            }
                        ].map(({ value, question, answer }, index) => (
                            <motion.div
                                key={value}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <AccordionItem value={value}>
                                    <AccordionTrigger className="text-left py-4 font-semibold text-gray-800 hover:bg-gray-100 transition-all duration-200 px-5 rounded-lg shadow-sm">
                                        {question}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-4 px-5 text-gray-600 bg-white rounded-md shadow-inner">
                                        {answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>

                {/* Right Side - Image */}
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                        <img
                            src={Rightsid}
                            alt="Film production process"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </motion.div>
            </motion.div>





        </div>
    );
};

export default Pricing;
