'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../utils/motion'

const Information = () => {
  return (
    <section className="py-6 px-12 relative z-10 bg-zinc-300">
      <div className=" z-0" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex-col"
      >
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 0.8)}
          className="mt-[8px]  flex-col  
        text-[40px] text-start ml-16 text-zinc-900"
        >
          Ignite your{" "}
          <span className="text-red-500  ">organisational success</span>
          <p>by harnessing the power of our</p>
          <p>advanced hiring recruitment solutions.</p>
        </motion.p>
      </motion.div>

          <div className=" basis-1/3  flex flex-col items-end">
              
        <p className="flex flex-col items-end w-[35%] text-xl">
          Streamline your hiring process with our cutting-edge online
          recruitment solution, designed to make life easier for hiring managers
          and HR professionals.
        </p>
        <p className="flex flex-col items-end w-[35%] mt-6 ">
          Discover a pool of talented candidates effortlessly, using our
          advanced search and filtering capabilities. Say goodbye to sifting
          through stacks of resumes and hello to finding the ideal candidate in
          no time.
        </p>
        {/* <div className='flex ml-6'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className=" ml-6"
          >
            <button className="bg-zinc-700 text-zinc-100 px-3 py-3 rounded-full ">
              Learn More
            </button>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
}

export default Information