import { easeOut } from 'motion'
import { motion } from 'motion/react'
import { TESTIMONIALS_CONTENT } from '../constants'

const Testimonials = () => {
    const Testimonialsvariant = {
        hidden: { opacity: 0, y: 50 },
        visible: (i:number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: i * 0.2,
                ease: "easeOut"
            }
        })
    }
    return (
        <section id='testimonial'>
            <div className="max-w-7xl mx-auto mt-20 px-4">
                <motion.div
                    className='border-t border-neutral-600 mb-12 text-center'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: easeOut }}>
                    <h2 className='text-3xl lg:text-5xl bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent text-center mt-20 tracking-tighter'>{TESTIMONIALS_CONTENT.sectionTitle}</h2>
                    <p className="mt-4">{TESTIMONIALS_CONTENT.sectionDescription}</p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                            }
                        }
                    }}
                    className='grid grid-cols-1 md:grid-cols-3 gap-8'
                >
                    {TESTIMONIALS_CONTENT.reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={Testimonialsvariant}
                            className='flex flex-col items-center justify-center border rounded-2xl border-neutral-900 bg-neutral-900/50 p-10 overflow-hidden '>
                            <p className='mb-4 text-neutral-200'>{review.review}</p>
                            <div className="flex items-center mt-4">
                                <img src={review.image} alt={`photo ${index}`} className='h-12 w-12 rounded-full mr-4' />
                                <div>
                                <p className='font-bold text-sm text-white'>{review.name}</p>
                                <p className='font-bold text-sm text-neutral-500'>{review.title}</p>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials