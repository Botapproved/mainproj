"use client"
import React, { useState } from 'react';
import "./main.css"

const MultiStageForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [emailClassName, setEmailClassName] = useState('w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200');
  const [passwordClassName, setPasswordClassName] = useState('w-full px-4 py-3 bg-dark rounded-md text-gray-700 font-medium');
  const [inputClass, setInputClass] = useState({fullname:'w-full px-4 py-3 bg-dark rounded-md text-gray-700 font-medium'})

  const steps = [
    "Account Setup",
    "Social Profiles",
    "Personal Details"
  ];

  const nextPrev = (step) => {
    const newStep = currentStep + step;
    if (newStep >= 0 && newStep < steps.length) {
      setCurrentStep(newStep);
    }
  };

  return (
    <>
      {/* <h1 className="text-lg font-light text-gray-700 leading-tight text-center mt-12 mb-5">
        
      </h1> */}
      <form
        id="signUpForm"
        className="p-12 shadow-md rounded-2xl bg-black mx-auto border-solid border-2 border-gray-100 mb-8"
        action="#!"
      >
        <div className="form-header flex gap-3 mb-4 text-xs text-center">
          {steps.map((step, index) => (
            <span
              key={index}
              className={`stepIndicator flex-1 pb-8 relative ${
                index === currentStep ? "active" : ""
              }`}
            >
              {step}
            </span>
          ))}
        </div>

        <div className="step" style={{ display: currentStep === 0 ? "block" : "none" }}>
          <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">
            Create your account
          </p>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className=" w-full px-4 py-3 bg-dark rounded-md text-gray-700 font-medium "
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className={passwordClassName}
              onInput={(e) => setPasswordClassName('w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200')}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password"
              className="w-full px-4 py-3 bg-dark rounded-md text-gray-700 font-medium"
              onInput={(e) => e.target.class = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200'}
            />
          </div>
        </div>

                <div className="step" style={{ display: currentStep === 1 ? "block" : "none" }}>
          <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">
            Your presence on the social network
          </p>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Linked In"
              name="linkedin"
              className="w-full px-4 py-3 bg-dark rounded-md text-gray-700 font-medium"
              onInput={(e) =>
                (e.target.className = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200')
              }
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Twitter"
              name="twitter"
              className="w-full px-4 py-3 bg-dark rounded-md text-gray-700 font-medium"
              onInput={(e) =>
                (e.target.className = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200')
              }
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Facebook"
              name="facebook"
              className="w-full px-4 py-3 bg-dark rounded-md text-gray-700 font-medium"
              onInput={(e) =>
                (e.target.className = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200')
              }
            />
          </div>
        </div>

        <div className="step" style={{ display: currentStep === 2 ? "block" : "none" }}>
          <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">We will never sell it</p>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Full name"
              name="fullname"
              className={inputClass.fullname}
              onInput={(e) =>
                setInputClass(prev => ({...prev, fullname: 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200'}))
              }
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Mobile"
              name="mobile"
              className="w-full px-4 py-3 bg-dark rounded-md text-gray-700 font-medium"
              onInput={(e) =>
                (e.target.className = 'w-full px-4 py-3 bg-dark rounded-md text-gray-700 font-medium')
              }
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Address"
              name="address"
              className="w-full px-4 py-3 bg-dark rounded-md text-gray-700 font-medium"
              onInput={(e) =>
                (e.target.className = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200')
              }
            />
          </div>
        </div>

        
        <div className="form-footer flex gap-3">
          <button
            type="button"
            id="prevBtn"
            className="flex-1 focus:outline-none border border-gray-300 py-2 px-5 rounded-lg shadow-sm text-center text-gray-700 bg-dark hover:bg-gray-100 text-lg"
            onClick={() => nextPrev(-1)}
          >
            Previous
          </button>
          <button
            type="button"
            id="nextBtn"
            className="flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-indigo-600 hover:bg-indigo-700 text-lg"
            onClick={() => nextPrev(1)}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default MultiStageForm;