import React, { useState } from "react";
import singleMed from "./assets/singleMed2.png";
import groupMed from "./assets/groupMed.png";
import { Link, Outlet } from "react-router-dom";

const Services = () => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
  };

  return (
    <div id="services1" className="pageContent">
      <div id="choicesIntro">
        <h1>How would you like to meditate?</h1>
        <div style={{marginTop: "2%"}}><i>LoveSelf offers one-on-one meditations, as well as lateral group courses.</i></div>
        <div id="serviceButtons">
          <Link
            className={`svcBtn ${selectedChoice === "individual" ? "selected" : ""}`}
            id="indiv"
            to="/services/single"
            onClick={() => handleChoiceClick("individual")}
          >
            <div>Individual</div>
            <img src={singleMed} />

          </Link>
          <div id="separator"></div>
          <Link
            className={`svcBtn ${selectedChoice === "group" ? "selected" : ""}`}
            id="group"
            to="/services/group"
            onClick={() => handleChoiceClick("group")}
          >
            <div>Group</div>
            <img src={groupMed} />
          </Link>
        </div>
      </div>
      <div id="choiceOutlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Services;
