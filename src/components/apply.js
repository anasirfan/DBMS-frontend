import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const Apply = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const handleApply = () => {
    if (isLoggedIn) {
      // Handle the form submission for applying for a job
      // ...
      console.log('Application submitted');
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      

     
        {showModal && (
          <div className={`fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50 ${showModal ? '' : 'hidden'}`}>
          <div className="bg-white p-6 flex flex-col rounded shadow-lg">
           
            <button className="relative -top-6 -right-72 justify-end text-gray-600" onClick={handleCloseModal}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-xl font-bold mb-4">Login or Sign Up</h2>
            <p className="mb-4">Please login or sign up to apply for a job.</p>
            <div className="flex justify-center">
              <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                Login
              </Link>
              <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        )}
    

    <form className="container mx-auto px-4 mt-8">
  <h2 className="text-3xl font-bold mb-4">Job Application</h2>
  <div className="mb-4">
    <label htmlFor="fullName" className="block text-lg font-medium mb-2">
      Candidate Name
    </label>
    <input
      type="text"
      id="fullName"
      className="w-1/2 px-4 py-2 border rounded"
      required
    />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-lg font-medium mb-2">
      Candidate Email
    </label>
    <input
      type="email"
      id="email"
      className="w-1/2 px-4 py-2 border rounded"
      required
    />
  </div>
  <div className="mb-4">
    <label htmlFor="position" className="block text-lg font-medium mb-2">
      Position
    </label>
    <select
      id="position"
      className="w-1/2 px-4 py-2 border rounded"
      required
    >
      <option value="">Select Position</option>
      
      <option value="Front End">Front End</option>
      <option value="Backend">Backend</option>
      <option value="SQA">SQA</option>
      <option value="Software Engineer">Software Engineer</option>
      
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="education" className="block text-lg font-medium mb-2">
      Education
    </label>
    <input
      type="text"
      id="education"
      className="w-1/2 px-4 py-2 border rounded"
      required
    />
  </div>
  <div className="mb-4">
    <label htmlFor="experience" className="block text-lg font-medium mb-2">
      Experience
    </label>
    <input
      type="text"
      id="experience"
      className="w-1/2 px-4 py-2 border rounded"
      required
    />
  </div>
  <div className="mb-4">
    <label htmlFor="type" className="block text-lg font-medium mb-2">
      Type
    </label>
    <div className="flex items-center">
      <input type="radio" id="partTime" name="type" className="mr-2" />
      <label htmlFor="partTime" className="mr-4">
        Part-time
      </label>
      <input type="radio" id="fullTime" name="type" className="mr-2" />
      <label htmlFor="fullTime">Full-time</label>
    </div>
  </div>
  <div className="flex justify-center">
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={handleApply}
    >
      Apply
    </button>
  </div>
</form>

    </div>
  );
};

export default Apply;
