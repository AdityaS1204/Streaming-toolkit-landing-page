import { BRAND_LOGOS, HERO_CONTENT } from "../constants"
import heroImg from '../assets/hero.jpg'
import { motion } from 'motion/react'

const HeroSection = () => {


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    }
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, Transition: { duration: 0.6 } },
    }
    const fadeInUp = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="pt-28 md:pt-36">
            <div className="max-w-7xl mx-auto px-4 flex-col flex items-center text-center">
                <motion.div
                    variants={fadeInUp}
                    className="text-sm mb-8 rounded-full border px-3 py-2 shadow-2xs shadow-amber-50 border-neutral-800">
                    {HERO_CONTENT.badgeText}
                </motion.div>
                <motion.h1
                    variants={fadeInUp}
                    className="text-5xl lg:text-8xl tracking-tighter text-white">
                    {HERO_CONTENT.mainHeading.split('\n').map((text, index) => (
                        <span
                            key={index}>
                            {text}
                            <br />
                        </span>
                    ))}</motion.h1>
                <motion.p
                    variants={fadeInUp}
                    className="max-w-xl mt-6 text-neutral-400">
                    {HERO_CONTENT.subHeading}
                </motion.p>
                <motion.div
                    variants={fadeInUp}
                    className="mt-6 space-x-4">
                    <a href="#" className="inline-block bg-blue-600 text-white hover:bg-blue-500 font-medium px-6 py-4 rounded-lg">{HERO_CONTENT.callToAction.primary}</a>
                    <a href="#" className="inline-block border border-gray-500 hover:border-gray-700 text-white  font-medium px-6 py-4 rounded-lg">{HERO_CONTENT.callToAction.secondary}</a>
                </motion.div>

                <motion.div
                    variants={fadeIn}
                    className="py-10">
                    <p className="text-neutral-400 text-center mb-8">{HERO_CONTENT.trustedByText}</p>
                    <motion.div
                        variants={fadeIn}
                        className="flex flex-wrap justify-center gap-8 ">
                        {BRAND_LOGOS.map((logo, index) => (
                            <img key={index} src={logo.src} alt={logo.alt} className="h-10" />
                        ))}
                    </motion.div>
                </motion.div>
                <motion.div className="mt-12 bg-blue-900 p-3 rounded-4xl">
                    <img src={heroImg} alt="streamerzz saas interface" className="w-full h-auto border border-neutral-400 rounded-3xl" />
                </motion.div>
            </div>
        </motion.section>
    )
}

export default HeroSection