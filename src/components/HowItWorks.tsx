import { motion } from "motion/react"
import { HOW_IT_WORKS_CONTENT } from "../constants"
// import { delay, stagger } from "motion"


const HowItWorks = () => {
  const stepVariant = {
    hidden: { opacity: 0,y:50 },
    visible:(i:number)=>({
      opacity:1,
      y:0,
      transition: {
        delay: i * 0.2,
        duration:0.6,
        ease: "easeOut",
      }
    })
  }



  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={
            {
              opacity: 0, y: -20,
            }
          }
          animate={
            { opacity: 1, y: 0 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 border-t border-neutral-800">
          <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
            {HOW_IT_WORKS_CONTENT.sectionTitle}
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mt-4">
            {HOW_IT_WORKS_CONTENT.sectionDescription}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{
            staggerChildern: 0.2
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
            <motion.div
            custom={index}
            variants={stepVariant}
            key={index} className="bg-neutral-900 rounded-xl flex flex-col justify-between p-6 shadow-lg  ">
              <div className="">
                <h3 className="font-semibold text-xl mb-4 ">{step.title}</h3>
                <p className="text-neutral-400 mb-4">{step.description}</p>
              </div>
              <div className="flex justify-center">
                <img src={step.imageSrc} alt={step.imageAlt} className="rounded-lg" />
              </div>
              {step.users && (
                <div className="flex justify-between items-center mt-4">
                  <div className="flex -space-x-2">
                    {step.users.map((user, userIndex) => (
                      <img key={userIndex} src={user} alt={`person ${userIndex + 1}`} className="h-8 w-8 rounded-full hover:scale-125 duration-150 transition-all ease-in border-2 border-black" />
                    ))}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-500 py-2 px-4 rounded-lg text-white">Connect</button>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks