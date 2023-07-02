import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-zinc-100 text-zinc-800 py-5 px-5">
      <div className="flex justify-between mx-auto gap-16">
        {/*First Column */}
        <div className="basis-2/3 mt-4 ml-6 mr-2">
          <img src="/logo.svg" alt="logo" className="h-12 w-12" />
          <h4 className="flex flex-col text-normal ">
            Unlock Your Hiring Potential: Streamline Recruitment for Managers
            and HR Professionals!
          </h4>
          <hr className="border-1" />
          <div className="flex flex-col justify-between mt-3">
            <h4 className="text-2xl text-red-600">Join our newsletter</h4>
            <h4 className="text-2xl text-zinc-600 px-1">to stay upto date</h4>
            <div className="flex flex-col items-start">
              <input
                className="mt-3 py-2 px-3 rounded-lg border-2"
                placeholder="Enter your email"
              ></input>
              <button className="px-5 bg-zinc-900 text-zinc-300 mt-2 py-2 rounded-lg hover:text-red-500">
                Subscribe
              </button>

              <p className="mt-5">
                © 2023 Hiring Recruitment Solutions. All rights reserved
              </p>
              <div className="flex items-center justify-between gap-6 mt-5">
                <p className="hover:text-red-500">Terms And Conditions</p>
                <p className="hover:text-red-500">Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex basis-1/4 justify-between gap-3 mt-16 mr-12">
          <div className="flex flex-col gap-3">
            <h5 className="text-zinc-500">Services</h5>
            <hr className="border-1" />
            <h5 className="hover:text-red-500">Job Posting & Distribution</h5>
            <h5 className="hover:text-red-500">
              Applicant Tracking System (ATS)
            </h5>
            <h5 className="hover:text-red-500">
              Candidate Sourcing And Screening
            </h5>
            <h5 className="hover:text-red-500">Interview Assesment Tools</h5>
            <h5 className="hover:text-red-500">Employer Branding</h5>
            <h5 className="hover:text-red-500">Support & Training</h5>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-zinc-500">Company</h5>
            <hr className="border-1" />
            <h5 className="hover:text-red-500">About</h5>
            <h5 className="hover:text-red-500">Pricing</h5>
            <h5 className="hover:text-red-500">Customer</h5>
            <h5 className="hover:text-red-500">Contact</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer