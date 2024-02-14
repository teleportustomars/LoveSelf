import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Single = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CalendarChoice = () => {
    return (
      <div>
        <h2>Choose Your Date</h2>
        <Calendar value={selectDate} onChange={setSelectDate} />
        <button onClick={handleNext}>Continue</button>
      </div>
    );
  };

  const BasicInfoForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
  
    return (
      <section id="infoFormParent">
        <div id="chosenDate">Your Chosen Date: {selectDate.toLocaleDateString()}</div>
        <h2>Your Info</h2>
        <form id="infoForm">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Phone:</label>
          <input
            type="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </form>
        <button onClick={handleBack}>Back</button>
      </section>
    );
  };

  return (
    <section id="calHolder">
      {currentStep === 1 && <CalendarChoice />}
      {currentStep === 2 && <BasicInfoForm />}
    </section>
  );
};

export default Single;
