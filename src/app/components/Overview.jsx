'use client'
import React from 'react'
import { Merriweather, PT_Serif } from "next/font/google";

const merrie = Merriweather({ weight: ["400"], subsets: ["latin"] });
const pt = PT_Serif({ weight: ["400"], subsets: ["latin"] });

const Overview = () => {
  return (
    <div className="mt-16 px-5 py-12 bg-slate-200">
      <div className="flex items-center flex-col justify-center ">
        <p className="bg-zinc-200 border-2 border-slate-400 px-5 py-1 text-xs mb-3 rounded-full">
          Benefits
        </p>
        <h1
          className={`${merrie.className} text-4xl font-semibold text-red-600`}
        >
          Why Choose Us?
        </h1>
      </div>

      <div className="flex flex-row justify-between gap-5 mt-10 mb-2">
        <div className="bg-slate-300 px-5 py-5 rounded-md">
          <h1 className={`${merrie.className} mb-2 text-xl `}>
            Streamlined Recruitment Process
          </h1>
          <p className={`${pt.className}`}>
            Our online recruitment solution revolutionizes the hiring process,
            saving valuable time and effort for hiring managers and HR
            professionals. With our integrated platform, you can effortlessly
            post job listings, manage applications, schedule interviews, and
            collaborate with team members—all in one centralized system
          </p>
        </div>
        <div className="bg-slate-300 px-5 py-5 rounded-md">
          <h1 className={`${merrie.className} mb-2 text-xl `}>
            Enhanced Candidate Quality
          </h1>
          <p className={`${pt.className}`}>
            Our solution goes beyond basic job posting and applicant tracking.
            We provide advanced candidate sourcing and screening tools that help
            you attract high-quality talent
          </p>
        </div>

        <div className="bg-slate-300 px-5 py-5 rounded-md">
          <h1 className={`${merrie.className} mb-2 text-xl `}>
            Data-driven Decision Making
          </h1>
          <p className={`${pt.className}`}>
            Gain valuable insights into your recruitment efforts with our robust
            analytics and reporting features. Our solution provides real-time
            data on recruitment metrics, allowing you to track key performance
            indicators, monitor the effectiveness of your job postings, and
            evaluate the efficiency of your hiring process
          </p>
        </div>
      </div>
    </div>
  );
}

export default Overview