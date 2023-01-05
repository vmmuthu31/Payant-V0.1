import React, { useState } from "react";
import MultiStepProgressBar from "./components/MultiStepProgressBar";
import Link from "next/link";
import FirstPayment from "./components/FPayment";
import SecondPayment from "./components/SPayment";
import ThirdPayment from "./components/TPayment";
import LastPayment from "./components/LPayment";

const UserPayment = () => {
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
    "",
    "",
    "",
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
      return <FirstPayment nextStep={nextStep} handleChange={handleChange} />;
    else if (page === 1)
      return <SecondPayment nextStep={nextStep} handleChange={handleChange} />;
    else if (page === 2)
      return <ThirdPayment nextStep={nextStep} handleChange={handleChange} />;
    else return <LastPayment nextStep={nextStep} handleChange={handleChange} />;
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
            {page === pageTitles.length - 1 
              ? "See Transaction"
              : "Next" && page === pageTitles.length - 3 
              ? "Upload"
              : "Next"}
          </button>
              </div>
          </div>
      </div>
      </div>
    </div>
  );
};
export default UserPayment;
