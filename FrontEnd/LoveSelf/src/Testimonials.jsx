import { useState, useEffect } from "react";

const Testimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const TempTestomonials = [
    {
      name: "Jill Briggs",
      text: "I've been using this meditation service for a few months now and I'm really enjoying it. It's helped me to relax and focus on the important things in life.",
    },
    {
      name: "John Smith",
      text: "This meditation service has been a great help to me. I'm able to take some time out of my day to relax and clear my mind, which helps me stay focused and productive.",
    },
    {
      name: "Josh W.",
      text: "I've been using this meditation service for a few weeks now and I'm already seeing the benefits. It's helping me to reduce stress and anxiety, and I'm sleeping better too.",
    },
    {
      name: "Sara K.",
      text: "I've been using this meditation service for a few months now and I'm really impressed with the results. I'm feeling more relaxed and focused, and I'm able to handle stressful situations better.",
    },
    {
      name: "Tom H.",
      text: "I've been using this meditation service for a few weeks now and I'm already noticing the positive effects. I'm feeling calmer and more in control of my emotions, and I'm sleeping better too.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((testimonialIndex + 1) % TempTestomonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonialIndex]);

  return (
    <div
      id="testimonials"
      className=""
      key={TempTestomonials[testimonialIndex].name}
    >
      <h2 id="tTitle">
        <hr />
        Why Meditate with LoveSelf?{" "}
      </h2>
      <p id="tText">
        {TempTestomonials[testimonialIndex].text}
        <br /><br />
        {TempTestomonials[testimonialIndex].name}
      </p>
    </div>
  );
};

export default Testimonials;
