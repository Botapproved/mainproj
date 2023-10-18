"use client"
import React, { useState, useEffect } from 'react';
import  "./main.css"

const Recover = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState({
    Category: "",
    Date: "",
    District: "",
    Usage: "",
    Reason: "",
    Quit: "",
    Challenges: "",
    UseGroup: "",
    Law: "",
    
    OtherInfo: "",
    Captcha: "",
    Acknowledgement: false,
  });

  const formCategories = [
    "Drug Usage Details",
    "More About You",
    "Preview and Submit",
  ];

  const districtSelect = document.getElementById("district");
    const policeStationSelect = document.getElementById("police-station");

   
    const policeStations = {
        "Thiruvananthapuram": [
            "Thiruvananthapuram Central",
            "Neyyattinkara",
            "Kattakkada",
            "Attingal",
            "Varkala",
            "Chirayinkeezhu"
        ],
        "Kollam": [
            "Kollam",
            "Chathannoor",
            "Karunagappally",
            "Punalur",
            "Kottarakkara"
        ],
        "Pathanamthitta": [
            "Pathanamthitta",
            "Thiruvalla",
            "Adoor",
            "Ranni",
            "Konni"
        ],
        "Alappuzha": [
            "Alappuzha",
            "Chengannur",
            "Kayamkulam"
        ],
        "Kottayam": [
            "Kottayam",
            "Pala",
            "Kanjirappally",
            "Vaikom",
            "Changanassery"
        ],
        "Idukki": [
            "Idukki",
            "Thodupuzha",
            "Munnar"
        ],
        "Ernakulam": [
            "Kochi",
            "Perumbavoor",
            "Aluva",
            "Kothamangalam",
            "North Paravur",
            "Mattancherry"
        ],
        "Thrissur": [
            "Thrissur City",
            "Kodungallur",
            "Chalakudy",
            "Irinjalakuda",
            "Guruvayur"
        ],
        "Palakkad": [
            "Palakkad",
            "Chittur",
            "Ottapalam",
            "Alathur"
        ],
        "Malappuram": [
            "Malappuram",
            "Perinthalmanna",
            "Manjeri",
            "Ponnani",
            "Tirur"
        ],
        "Kozhikode": [
            "Kozhikode",
            "Vadakara",
            "Thamarassery",
            "Feroke",
            "Koyilandy"
        ],
        "Wayanad": [
            "Kalpetta",
            "Sulthan Bathery",
            "Mananthavady"
        ],
        "Kannur": [
            "Kannur City",
            "Thalassery",
            "Kannur Rural",
            "Iritty",
            "Payyannur"
        ],
        "Kasaragod": [
            "Kasaragod",
            "Kanhangad"
        ]
    };

  

  
 
  const nextPrev = (step) => {
    const newStep = currentStep + step;
    if (newStep >= 0 && newStep < formCategories.length) {
      setCurrentStep(newStep);
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container flex justify-center items-center h-full">
        <div className="w-full lg:w-7/12 xl:w-8/12">
          <div className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" data-wow-delay=".15s">
            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Register & Recover anonymously
            </h2>
            <p className="mb-12 text-base font-medium text-body-color">
              
            </p>
            <div className="form-header flex gap-3 mb-4 text-xs text-center">
              {formCategories.map((stepLabel, index) => (
                <span
                  key={index}
                  className={`stepIndicator flex-1 pb-8 relative ${index === currentStep ? "active" : (index < currentStep ? "finish" : "")}`}
                >
                  {stepLabel}
                </span>
              ))}
            </div>
            <form action="" method="POST">
              <input type="hidden" name="_next" value="http://localhost:3000" />
              {formCategories.map((stepLabel, index) => (
                currentStep === index && (
                  <div key={index} className="mb-8">
                    {stepLabel === 'Drug Usage Details' && (
                      <>
                        <label htmlFor="Category" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          What drug type do you use?
                        </label>
                        <select
                          name="Category"
                          id="Category"
                          value={formValues.Category}
                          onChange={handleInputChange}
                          required
                          className="w-full mb-3 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        >
                          <option value="" disabled selected>--Select Category--</option>
                          <option>Cocaine</option>
                          <option>Heroin</option>
                          <option>Methamphetamine/MDMA</option>
                          <option>Marijuana</option>
                          <option>Prescription Drugs</option>
                        </select>
                        
                        <label htmlFor="Date" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          When did you first start using drugs?
                        </label>
                        <input
                          type="date"
                          name="Date"
                          id="Date"
                          value={formValues.Date}
                          onChange={handleInputChange}
                          required
                          className="w-full mb-3 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                        
                       <label htmlFor="District" className="mb-3 block text-sm font-medium text-dark dark:text-white">
  District *
</label>
<select
  name="District"
  id="District"
  value={formValues.District}
  onChange={handleInputChange}
  required
  className="w-full rounded-md mb-3 border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
>
  <option value="" disabled>--Select District--</option>
  <option value="Alappuzha">Alappuzha</option>
                    <option value="Ernakulam">Ernakulam</option>
                    <option value="Idukki">Idukki</option>
                    <option value="Kannur">Kannur</option>
                    <option value="Kasaragod">Kasaragod</option>
                    <option value="Kollam">Kollam</option>
                    <option value="Kottayam">Kottayam</option>
                    <option value="Kozhikode">Kozhikode</option>
                    <option value="Malappuram">Malappuram</option>
                    <option value="Palakkad">Palakkad</option>
                    <option value="Pathanamthitta">Pathanamthitta</option>
                    <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                    <option value="Thrissur">Thrissur</option>
                    <option value="Wayanad">Wayanad</option>
                </select>


<label htmlFor="Usage" className="mb-3 block text-sm font-medium text-dark dark:text-white">
  How often do you use drugs a day?
</label>
<select
  name="Usage"
  id="Usage"
  value={formValues.Usage}
  onChange={handleInputChange}
  required
  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
>
  <option value="" selected>--Select Usage Details--</option>
  <option>Once</option>
  <option>Twice</option>
  <option>Thrice</option>
  <option>More than 4 times</option>
</select>

                      </>
                    )}
                    
                    {stepLabel === 'More About You' && (
                      <>
                        <label htmlFor="Reason" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          What was the reason for you to start using drugs?
                        </label>
                        <input
                          type="text"
                          name="Reason"
                          id="Reason"
                          value={formValues.Reason}
                          onChange={handleInputChange}
                          className="w-full mb-3 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                        
                        <label htmlFor="Quit" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          Have you ever tried to quit using drugs before?
                        </label>
                        <select
                          name="Quit"
                          id="Quit"
                          value={formValues.Quit}
                          onChange={handleInputChange}
                          className="w-full mb-3 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        >
                          <option value="" selected>--Select an Option--</option>
                          <option>Yes</option>
                          <option>No</option>
                        
                          
                        </select>
                        
                        <label htmlFor="Challenges" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          What were the challenges you faced when trying to quit drugs in the past?
                        </label>
                        <input
                          type="text"
                          name="Challenges"
                          id="Challenges"
                          value={formValues.Challenges}
                          onChange={handleInputChange}
                          className="w-full mb-3 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                        
                        <label htmlFor="UseGroup" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          Do you use drugs alone or with others?
                        </label>
                        <select name="UseGroup"
                          id="UseGroup"
                          value={formValues.UseGroup}
                          onChange={handleInputChange}
                          className="w-full mb-3 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp">
                           <option value="">Select an option</option>
                                            <option>Alone</option>
                                            <option>With others</option>
                        </select>
                        
                        <label htmlFor="Law" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          Have you ever been in trouble with the law due to drug use?
                        </label>
                        <select
                          name="Law"
                          id="Law"
                          value={formValues.Law}
                          onChange={handleInputChange}
                          className="w-full mb-3 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        >
                          <option value="" selected>--Select an Option--</option>
                          <option>Yes</option>
                          <option>No</option>
                        
                          
                        </select>
                        
                        
                        <label htmlFor="OtherInfo" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          Other info
                        </label>
                        <textarea
                          name="OtherInfo"
                          id="OtherInfo"
                          value={formValues.OtherInfo}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full mb-3 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </>
                    )}
                    
                    {stepLabel === 'Preview and Submit' && (
                        <>
     <div className="mb-3 block text-sm font-medium text-dark dark:text-white">Details Filled</div>
    <pre className="rounded-md mb-3 border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp">
      
    <div className="mb-2">Category: {formValues.Category || 'Not provided'}</div>
    <div className="mb-2">Date: {formValues.Date || 'Not provided'}</div>
    <div className="mb-2">District: {formValues.District || 'Not provided'}</div>
    <div className="mb-2">How often do you use drugs a day?: {formValues.Usage || 'Not provided'}</div>
    <div className="mb-2">What was the reason for you to start using drugs?: {formValues.Reason || 'Not provided'}</div>
    <div className="mb-2">Have you ever tried to quit using drugs before?: {formValues.Quit || 'Not provided'}</div>
    <div className="mb-2">What were the challenges you faced when trying to quit drugs in the past?: {formValues.Challenges || 'Not provided'}</div>
    <div className="mb-2">Do you use drugs alone or with others?: {formValues.UseGroup || 'Not provided'}</div>
    <div className="mb-2">Have you ever been in trouble with the law due to drug use?: {formValues.Law || 'Not provided'}</div>
    <div className="mb-2">Other Info: {formValues.OtherInfo || 'Not provided'}</div>
  
   
    </pre>
                        
                        <label htmlFor="Captcha" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          Captcha *
                        </label>
                        <input
                          type="text"
                          name="Captcha"
                          id="Captcha"
                          value={formValues.Captcha}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                        
                        <label className="flex mt-3 items-center mb-3 block text-sm font-medium text-dark dark:text-white">
                          <input
                            type="checkbox"
                            name="Acknowledgement"
                            id="Acknowledgement"
                            checked={formValues.Acknowledgement}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          I acknowledge that providing false information could make me liable to penal action under Indian laws.
                        </label>
                      </>
                    )}
                  </div>
                )
              ))}
              <input type="hidden" name="_captcha" value="false" />
              <div className="w-full px-4">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={() => nextPrev(-1)}
                    className="rounded-md dark:bg-[#242B51] text-gray-600 px-3 py-1 rounded-md mr-2"
                  >
                    Previous
                  </button>
                )}
                {currentStep == 3 ? (
                <button
                 type="submit"
                  className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                >
                Submit Ticket
                </button>
) : (
  <button
    type="button"
    onClick={() => nextPrev(1)}
    className="rounded-md bg-primary text-white px-3 py-1 rounded-md"
  >
    Next
  </button>
)}

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recover;