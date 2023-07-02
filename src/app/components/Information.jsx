'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../utils/motion'

const Information = () => {
  return (
    <section className="z-10 px-6 py-12 bg-zinc-400">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex lg:flex-row flex-col lg:w-[80%] w-[100%]"
      >
        <img src="/hr_2_image.jpg" alt="hr image" className="w-[60%] h-[60%] rounded-xl" />

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <h1 className="text-3xl px-5 font-semibold">
            Ignite your <span className='text-red-500 '>organizational success</span> by harnessing the
            power of our advanced hiring recruitment solutions
          </h1>
          <p className="px-5 py-5">
            Experience a seamless and efficient hiring process that will take
            your team to new heights. Your HR professionals and hiring managers
            will thank you for the game-changing capabilities that make finding
            top talent effortless.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Information