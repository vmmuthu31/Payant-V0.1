import React, { useState } from "react";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import LastStep from "./components/LastStep";
import MultiStepProgressBar from "./components/MultiStepProgressBar";
import Link from "next/link";

const UserForm = () => {
  //For manageing state of multi steps Form
  const [page, setPage] = useState(0);

  const [userInput, setUserInput] = useState({
    fullName: "",
    displayname: "",
    workspaceName: "",
    workspaceUrl: "",
    checkboxValue: ""
  });

  //proceed to next step
  const nextStep = () => {
    setPage((currPage) => currPage + 1);
  };

  const pageTitles = [
    "Create Invoice",
    "Add Scope of Work",
    "Review Details",
    ""
  ];
  const pageSubTitiles = [
    "You can always change them later.",
    "You can always create another workspace later",
    "We'll streamline your setup expereince accordingly.",
    "You have completed onboarding, you can start using the Eden"
  ];

  const PageDisplay = () => {
    if (page === 0)
      return <FirstStep nextStep={nextStep} handleChange={handleChange} />;
    else if (page === 1)
      return <SecondStep nextStep={nextStep} handleChange={handleChange} />;
    else if (page === 2)
      return <ThirdStep nextStep={nextStep} handleChange={handleChange} />;
    else return <LastStep nextStep={nextStep} handleChange={handleChange} />;
  };

  //handle field changes
  const handleChange = (input) => (e) => {
    setUserInput({ ...userInput, [input]: e.target.value });
  };

  return (
    <div className="userForm">
      <div style={{ margin: "auto", width: "50%" }}>
        <MultiStepProgressBar step={page} />
      
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl ">
              { pageTitles[page]}
              </p>
              <div className="space-y-4 md:space-y-6" >
                  <div>
                  <div className="userForm-container-body">{PageDisplay()}</div>
                  </div>
                  <button
                  className="btn"
            onClick={() => {
              if (page === pageSubTitiles.length - 1) {
                console.log(userInput);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === pageTitles.length - 2 
              ? "Create Invoice"
              : "Next" && page === pageTitles.length - 1 
              ? "Track Payment"
              : "Next"}
          </button>
              </div>
          </div>
      </div>
      </div>
    </div>
  );
};
export default UserForm;
