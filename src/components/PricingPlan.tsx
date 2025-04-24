import { easeOut } from 'motion'
import { motion } from 'motion/react'
import { PLANS_CONTENT } from '../constants'

const PricingPlan = () => {

    const childVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    }


    return (
        <section id='pricing'>
            <div className="mx-auto max-w-7xl mt-20 px-4">
                <motion.div className="text-center mb-12 border-t border-neutral-800"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: easeOut }}
                >
                    <h2 className="tracking-tighter text-3xl lg:text-5xl bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 text-transparent bg-clip-text mt-20">
                        {PLANS_CONTENT.sectionTitle}
                    </h2>
                    <p className="mt-4">{PLANS_CONTENT.sectionDescription}</p>
                </motion.div>
                <motion.div className='grid md:grid-cols-3 grid-cols-1 gap-8'
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.5,
                            }
                        }
                    }}
                >
                    {PLANS_CONTENT.plans.map((Plan, index) => (
                        <motion.div key={index}
                            custom={index}
                            variants={childVariant}
                            className={`bg-neutral-950/80 rounded-xl shadow-lg p-8 ${Plan.popular ? "border border-blue-900/80" : "border border-neutral-800"}`}>
                            {Plan.popular && (
                                <div className="text-center mb-4 ">
                                    <span className="bg-blue-600 text-sm text-white py-1 px-3 rounded-full uppercase">
                                        {PLANS_CONTENT.popularBadge}
                                    </span>
                                </div>
                            )}
                            <h3 className="text-lg lg:text-xl tracking-tighter uppercase mb-4 text-white">{Plan.name}</h3>
                            <p className="text-neutral-400 mb-6 ">{Plan.description}</p>
                            <div className="text-2xl lg:text-3xl font-medium mb-6 text-white">{Plan.price}</div>
                            <ul className='text-neutral-400 mb-8 space-y-2'>
                                {Plan.features.map((feature, index) => (
                                    <li key={index} className='flex items-center'>
                                        <span className='inline-block w-2 h-2 mr-2 rounded-full bg-neutral-600'></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className='w-full text-white py-3 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg'>{PLANS_CONTENT.ctaText}</button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default PricingPlan  