'use client'
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";
import { Merriweather, PT_Serif } from "next/font/google";

const merrie = Merriweather({ weight: ["400"], subsets: ["latin"] });
const pt = PT_Serif({ weight: ["400"], subsets: ["latin"] });


function CandidateSearch() {
  const [location, setLocation] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    
  };

  return (
    <div>
      <Navbar />
      <div
        className={`${merrie.className} font-bold text-4xl flex flex-col items-center px-5 py-8`}
      >
        <h1>
          {" "}
          <span className="text-red-500">Search Candidates </span> based on
          their role and location
        </h1>
      </div>
      <div className="flex flex-row items-center justify-between p-12 space-x-4 ">
        <button
          onClick={handleSearch}
          className={`${pt.className} text semibold bg-zinc-800 px-4 py-2 rounded-full text-white `}
        >
          Search Candidates
        </button>
        <div>
          <label htmlFor="location"></label>
          <select
            name="location"
            className="bg-slate-200 w-full px-8 py-4 rounded-md"
          >
            <option value="rigatoni">Bengaluru</option>
            <option value="dave">Hyderabad</option>
            <option value="pumpernickel">Delhi</option>
            <option value="reeses">Mumbai</option>
            <option value="rigatoni">Pune</option>
            <option value="dave">Chennai</option>
            <option value="pumpernickel">Noida</option>
            <option value="reeses">Gurgaon</option>
          </select>
          {/* <input
            type="text"
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
            className="bg-slate-200 w-full px-5 py-3 rounded-md"
          /> */}
        </div>
        <div>
          <label htmlFor="jobRole"></label>
          <select
            name="jobRole"
            className="bg-slate-200 w-full px-8 py-4 rounded-md"
          >
            <option value="rigatoni">Software Developer</option>
            <option value="dave">Tech Lead</option>
            <option value="pumpernickel">Product Manager</option>
            <option value="reeses">Data Analyst</option>
            <option value="rigatoni">ML Engineer</option>
            <option value="dave">Technical Writer</option>
            <option value="pumpernickel">FullStack Developer</option>
            <option value="reeses">Marketing Head</option>
          </select>
          {/* <input
            type="text"
            id="jobRole"
            value={jobRole}
            placeholder="Job Role"
            onChange={(e) => setJobRole(e.target.value)}
            className="bg-slate-200 w-full px-5 py-3 rounded-full"
          /> */}
        </div>

        <div className="flex flex-col px-10 py-8 bg-slate-300 rounded-md mx-w-5xl ml-5">
          <h2 className="text-5xl font-bold">3 Candidates</h2>
          <hr className="border-1 border-zinc-800"></hr>
          <ul>
            {searchResults.map((candidate) => (
              <li key={candidate.id}>
                <h3>{candidate.name} Rohit Prayag</h3>
                <p>Job Title: {candidate.jobTitle}</p>
                <p>Location: {candidate.location}</p>
                {/* Additional candidate information */}
              </li>
            ))}
            <div className="mt-5 flex bg-slate-200 px-3 py-2 rounded-lg">
              <li>
                <h3 className="text-red-500">Rohit Prayag (SDE 2)</h3>
                <h4>Bengaluru</h4>
                <p>
                  More than 3+ experience in software developmemnt. Expertise in
                  java, spring,docker, AWS.
                </p>
              </li>
            </div>
            <div className="mt-5 flex bg-slate-200 px-3 py-2 rounded-lg">
              <li>
                <h3 className="text-red-500">Rohit Prayag (SDE 2)</h3>
                <h4>Bengaluru</h4>
                <p>
                  More than 3+ experience in software developmemnt. Expertise in
                  java, spring,docker, AWS.
                </p>
              </li>
            </div>
            <div className="mt-5 flex bg-slate-200 px-3 py-2 rounded-lg">
              <li>
                <h3 className="text-red-500">Rohit Prayag (SDE 2)</h3>
                <h4>Bengaluru</h4>
                <p>
                  More than 3+ experience in software developmemnt. Expertise in
                  java, spring,docker, AWS.
                </p>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CandidateSearch;
