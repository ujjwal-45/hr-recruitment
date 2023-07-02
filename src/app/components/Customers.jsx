'use client'
import React from 'react'

const Customers = () => {
  return (
    <div className="bg-zinc-800 rounded-lg flex justify-between gap-6 text-zinc-100 px-5 py-10">
      <h1 className="ml-10 text-2xl text-zinc-300">Trusted By</h1>
      <img
        src="/ibm.png"
        alt="ibm logo"
        className="w-16 h-12 bg-white object-cover rounded-lg"
      />
      <img
        src="/amazon.png"
        alt="ibm logo"
        className="w-16 h-12 bg-white object-cover rounded-lg"
      />
      <img
        src="/facebook.png"
        alt="ibm logo"
        className="w-18 h-12 bg-white object-cover rounded-lg"
      />
      <img
        src="/google.png"
        alt="ibm logo"
        className="w-18 h-12 bg-white object-cover rounded-lg"
      />
    </div>
  );
}

export default Customers