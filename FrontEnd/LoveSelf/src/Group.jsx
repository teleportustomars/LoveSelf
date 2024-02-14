import {useEffect, useState} from "react";

const Group = () => {

  const [selecedPackage, setSelectedPackage] = useState(null);

  const choices = [
    {
      id: 1,
      name: "Ackowledging your inner angel",
      description: "We all have angels inside us, as well as all around us. We all have a lot of questions, but we all have a lot of answers.",
      dates: ["10/01/2024", "11/02/2024", "12/03/2024", "01/04/2024", "02/05/2024", "03/06/2024"],
    },
    {
      id:2,
      name: "Staying in the moment when the world is moving",
      description: "We all have moments when we find ourselves in slow motion, while the world around us speeds by. Let's learn to accept being slow together.",
      dates: ["10/07/2024", "11/08/2024", "12/09/2024", "01/10/2024", "02/11/2024", "03/12/2024"],
    },
    {
      id: 3,
      name: "Finding Your Inner Strength",
      description: "We all have moments when we feel weak and vulnerable. Let's learn to find our inner strength and courage together.",
      dates: ["10/13/2024", "11/14/2024", "12/15/2024", "01/16/2024", "02/17/2024", "03/18/2024"],
    },
    {
      id: 4,
      name: "Exploring Your Creative Side",
      description: "We all have creative sides that need to be explored. Let's learn to express our creativity together.",
      dates: ["10/19/2024", "11/20/2024", "12/21/2024", "01/22/2024", "02/23/2024", "03/24/2024"],
    },
    {
      id: 5,
      name: "Living with Gratitude",
      description: "We all have moments when we forget to be grateful for what we have. Let's learn to live with gratitude together.",
      dates: ["10/25/2024", "11/26/2024", "12/27/2024", "01/28/2024", "02/29/2024", "03/30/2024"],
    },
  ];

  useEffect(() => {
    console.log(selecedPackage);
  }, [selecedPackage]);

    const Menu = () => {

      return (
        <div id="choicesParent">
          {choices.map(choice => (
            <div id="groupChoiceParent" key={choice.id}>
              <div id="groupChoiceTitle">
                <h3 id="h3Names">{choice.name}</h3>
                <h3 id="h3Dates">Course Dates</h3>
                
              </div>
              <div id="groupChoiceContent">
                <div id="groupLeftHalf">
                  <p id="groupChoiceDescription">{choice.description}</p>
                  <button
                    onClick={() => setSelectedPackage(choice)}
                  >
                    Select
                  </button>
                </div>
                <ul id="groupChoiceDates">
                  {choice.dates.map(date => (
                    <li key={date}>{date}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      );
    };

  return (<div>
    <Menu />
  </div>);
};

export default Group;
