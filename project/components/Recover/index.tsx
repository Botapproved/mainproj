"use client"
import React, { useState, useEffect } from 'react';
import  "./main.css"

const Recover = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState({
    Category: "",
    Date: "",
    District: "",
    PoliceStation: "",
    SuspectName: "",
    SuspectInfoType: "",
    SelectedOptionDetails: "",
    SuspectPhoto: "",
    MapLink: "",
    OtherInfo: "",
    Captcha: "",
    Acknowledgement: false,
  });

  const formCategories = [
    "Complaint and Incident Details",
    "Suspect Details",
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

  // Function to populate police station options based on selected district
  const populatePoliceStations = () => {
    const selectedDistrict = formValues.District;
    const stations = policeStations[selectedDistrict] || [];
    setFormValues({ ...formValues, PoliceStation: "" }); // Clear current options
    setPoliceStationOptions(stations);
  }

  useEffect(() => {
    populatePoliceStations();
  }, [formValues.District]);

  const setPoliceStationOptions = (stations) => {
    const policeStationSelect = document.getElementById("PoliceStation");
    if (policeStationSelect) {
      policeStationSelect.innerHTML = "<option value='' selected>--Select Police Station--</option>";
      stations.forEach((station) => {
        const option = document.createElement("option");
        option.value = station;
        option.text = station;
        policeStationSelect.appendChild(option);
      });
    }
  }
 
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
              Report anonymously
            </h2>
            <p className="mb-12 text-base font-medium text-body-color">
              Admins will look into your tip-off and allot an incentive based on the report relevance
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
                    {stepLabel === 'Complaint and Incident Details' && (
                      <>
                        <label htmlFor="Category" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          Category *
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
                          <option>Smuggling</option>
                          <option>Posession</option>
                          <option>Buying / Selling</option>
                          <option>Production / Manufacture</option>
                        </select>
                        
                        <label htmlFor="Date" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          Date *
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
  {Object.keys(policeStations).map((district) => (
    <option key={district} value={district}>
      {district}
    </option>
  ))}
</select>

<label htmlFor="PoliceStation" className="mb-3 block text-sm font-medium text-dark dark:text-white">
  Police Station *
</label>
<select
  name="PoliceStation"
  id="PoliceStation"
  value={formValues.PoliceStation}
  onChange={handleInputChange}
  required
  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
>
  <option value="" selected>--Select Police Station--</option>
  {formValues.District &&
    policeStations[formValues.District].map((station) => (
      <option key={station} value={station}>
        {station}
      </option>
    ))}
</select>

                      </>
                    )}
                    
                    {stepLabel === 'Suspect Details' && (
                      <>
                        <label htmlFor="SuspectName" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          Suspect name
                        </label>
                        <input
                          type="text"
                          name="SuspectName"
                          id="SuspectName"
                          value={formValues.SuspectName}
                          onChange={handleInputChange}
                          className="w-full mb-3 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                        
                        <label htmlFor="SuspectInfoType" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          Suspect information type
                        </label>
                        <select
                          name="SuspectInfoType"
                          id="SuspectInfoType"
                          value={formValues.SuspectInfoType}
                          onChange={handleInputChange}
                          className="w-full mb-3 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        >
                          <option value="" selected>--Select type--</option>
                          <option>Bank account</option>
                          <option>Phone number</option>
                          <option>Email ID</option>
                          
                        </select>
                        
                        <label htmlFor="SelectedOptionDetails" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          Selected option details
                        </label>
                        <input
                          type="text"
                          name="SelectedOptionDetails"
                          id="SelectedOptionDetails"
                          value={formValues.SelectedOptionDetails}
                          onChange={handleInputChange}
                          className="w-full mb-3 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                        
                        <label htmlFor="SuspectPhoto" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          Suspect photo
                        </label>
                        <input
                          type="file"
                          name="SuspectPhoto"
                          id="SuspectPhoto"
                          accept="image/*"
                          onChange={handleInputChange}
                          className="w-full mb-3 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                        
                        <label htmlFor="MapLink" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                          Map link
                        </label>
                        <input
                          type="text"
                          name="MapLink"
                          id="MapLink"
                          value={formValues.MapLink}
                          onChange={handleInputChange}
                          className="w-full mb-3 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                        
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
    <div className="mb-2">Police Station: {formValues.PoliceStation || 'Not provided'}</div>
    <div className="mb-2">Suspect Name: {formValues.SuspectName || 'Not provided'}</div>
    <div className="mb-2">Suspect Info Type: {formValues.SuspectInfoType || 'Not provided'}</div>
    <div className="mb-2">Suspect Data : {formValues.SelectedOptionDetails || 'Not provided'}</div>
    <div className="mb-2">Other Info: {formValues.OtherInfo || 'Not provided'}</div>
    <div className="mb-2">Map: {formValues.MapLink || 'Not provided'}</div>
    <div className="mb-2">Photo: {formValues.SuspectPhoto ? 'Image uploaded' : 'No image uploaded'}</div>
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