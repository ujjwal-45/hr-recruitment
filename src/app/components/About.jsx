'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { slideIn, staggerContainer, textVariant } from '@/app/utils/motion'
import {  Merriweather } from 'next/font/google'



const merrie = Merriweather({weight:['400'] ,subsets: ['latin']})

const About = () => {
  return (
    <section className=" py-12 bg-slate-200 pl-6 ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full mx-auto flex flex-col"
      >
        <div className="flex justify-start items-start flex-col relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className={`${merrie.className} text-red-600 font-bold ml-9 text-[64px]` }
          >
            Unlock your hiring Potential
          </motion.h1>

          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row ml-8 justify-center items-center"
          >
            <h1 className={`${merrie.className} text-[54px] flex-col text-zinc-700 font-semibold mb-10`}>
              Streamline Recruitment for Managers and
              HR Professionals!
            </h1>
            
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.1, 1)}
          className="relative w-full pb-20 hero-gradient rounded-tl-[140px]"
        >
          <div
            className="relative w-full h-[140px] mt-4 mb-8
        rounded-tl-[140px] z-[0] -top-[30px]"
          >
            <img
              src="/hr_1_image.jpg"
              alt="image_1"
              className="w-full h-[350px] object-cover rounded-tl-[140px] z-0 relative"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About