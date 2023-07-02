import React from 'react'

const Services = () => {
  return (
    <section className="px-5 py-12 z-10 relative h-[650px]">
      <div className="mx-auto grid grid-cols-2 grid-rows-3 gap-6">
        <div className=" lg:w-[80%] relative ">
          
          <div className="col-span-1 row-span-3">
            <button className="bg-zinc-200 text-zinc-900 text-xs rounded-full py-1 px-5 ml-8 mb-5 border-slate-400 border-2">
            Services
          </button>
            <h4 className="uppercase text-[18px] text-red-600">
              {" "}
              <span className="px-3">◉ </span> Job Posting and Distribution
            </h4>
            <p className="px-10 mt-4 mb-3 ">
              Our company offers a platform where hiring managers and HR
              professionals can post job listings and distribute them to various
              job boards, social media platforms, and professional networks.
            </p>

            <h4 className="uppercase text-[18px] text-red-600">
              {" "}
              <span className="px-3">◉ </span> Analytics and Reporting
            </h4>
            <p className="px-10 mt-4 mb-3">
              Providing data and analytics on recruitment metrics and
              performance can help users make data-driven decisions and optimize
              their hiring strategies.
            </p>

            <h4 className="uppercase text-[18px] text-red-600">
              {" "}
              <span className="px-3">◉ </span> Interview and Assesment Tools
            </h4>
            <p className="px-10 mt-4 mb-3">
              Our company offers interview scheduling tools, video interviewing
              platforms, and assessment tests to streamline the interview and
              evaluation process.
            </p>

            <h4 className="uppercase text-[18px] text-red-600">
              {" "}
              <span className="px-3">◉ </span> support and training
            </h4>
            <p className="px-10 mt-4 mb-3">
              Offering customer support, training resources, and onboarding
              assistance to ensure clients can effectively utilize the platform
              and maximize its benefits.
            </p>
            <button className='text-zinc-100 bg-zinc-700 px-5 py-2 rounded-full ml-5 mt-3'>Learn More</button>
          </div>
        </div>
        <div className="col-span-1 row-span-3 mt-5 ">
          <img
            src="/hr_3_image.jpg"
            alt="hr image"
            className="w-[100%] h-[30%] rounded-t-[80px] rounded-b-[80px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Services