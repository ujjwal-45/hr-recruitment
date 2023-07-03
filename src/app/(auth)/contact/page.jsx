
import React from 'react'
import { Merriweather, PT_Serif } from "next/font/google";

const merrie = Merriweather({ weight: ["400"], subsets: ["latin"] });
const pt = PT_Serif({ weight: ["400"], subsets: ["latin"] });




const page = () => {
  return (
    <body className="antialiased bg-gray-200">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-row space-y-6 space-x-2 bg-slate-400 w-full max-w-5xl p-12 rounded-xl shadow-lg">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1
                className={`${merrie.className} font-extrabold mb-2 text-5xl tracking-wide `}
              >
                Contact Us
              </h1>
              <p className={`${pt.className}`}>
                By choosing our company, you&apos;ll benefit from a streamlined
                recruitment process, enhanced candidate quality, and data-driven
                decision making.
              </p>
            </div>
            <div className="flex flex-col space-y-8">
              <div className="inline-flex space-x-2 items-center">
                <img src="/call.svg" alt="call icon" className="h-8 w-8" />
                <span>+(123) 456 789</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <img src="/mail.svg" alt="call icon" className="h-8 w-8" />
                <span>hrscontact@gmail.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <img src="/location.svg" alt="call icon" className="h-8 w-8" />
                <span>Kormangla, Bengaluru</span>
              </div>
            </div>
            <div className="flex gap-5">
              <img src="/linkedin.svg" alt="linkedin" className="h-8 w-8" />
              <img src="/instagram.svg" alt="linkedin" className="h-8 w-8" />
              <img src="/twitter.svg" alt="linkedin" className="h-8 w-8" />
            </div>
          </div>

          <div>
            <div className="bg-zinc-100 rounded-xl shadow-lg p-8 text-slate-600 w-96">
              <form action="" className="flex flex-col space-y-4">
                <div>
                  <label for="text" className={`${pt.className} text-sm`}>
                    Your Name
                  </label>

                  <div>
                    <input
                      type="text"
                      placeholder="your name"
                      className="ring-1 ring-slate-200 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-slate-400"
                    />
                  </div>
                </div>
                <div>
                  <label for="text" className={`${pt.className} text-sm`}>
                    Email Address
                  </label>

                  <div>
                    <input
                      type="email"
                      placeholder="enter your email"
                      className="ring-1 ring-slate-200 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label for="text" className={`${pt.className} text-sm`}>
                    Company
                  </label>

                  <div>
                    <input
                      type="text"
                      placeholder="company name"
                      className="ring-1 ring-slate-200 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label for="" className={`${pt.className} text-sm`}>
                    Your Message
                  </label>

                  <div>
                    <input
                      type="text"
                      placeholder="....."
                      rows="4"
                      className="ring-1 ring-slate-200 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-slate-400"
                    />
                  </div>
                </div>
                <button className='inline-block self-start bg-zinc-900 text-zinc-100 px-7 py-2 mt-2 rounded-full'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default page