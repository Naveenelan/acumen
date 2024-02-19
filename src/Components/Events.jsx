import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import "../styles/EventPage.css";
import Modal from "./Model.jsx";

function Events() {
  var contest = [
    {
      name: "PAPER PRESENTATION",
      content:
        "Each team having minimum of 2 member and maximum of 3 members can present a paper on any particular technical or core topic. One registration per team is enough. No need for individual registration of participants. Registration Fee is Rs.200 Per head. Papers related to Embedded, VLSI, Communication and Networking, Signal and Image Processing, Artificial Intelligence andMachine Learning, Website, Mobile App, Biomedical and etc are accepted. Prior registration is required to participate in this event. Abstract should not exceed the limit of 400 words. Maximum of 15 slides and minimum of 10 slides should be there in the PPT. The team will get 5 minutes to present their paper followed by a 2 minutes query session. The work should be original and plagiarism must be avoided. Bring soft copy of PPT in pendrive or have it in mail.",
      session: "FORENOON",
      link: "https://forms.gle/6goyWn5QaNjpZJyj6",
    },
    {
      name: "PROJECT PRESENTATION",
      content:
        "Each team having minimum of 2 member and maximum of 3 members can display their project. One registration per team is enough. No need for individual registration of participants. Registration Fee is Rs.200 per head. Hardware/ Prototype should be displayed on the day of the event. It is mandatory, if failed the team will be disqualified. Prior registration isrequired to participate in this event. Abstract should not exceed the limit of 400 words. PPT about the project is optional.",
      session: "FORENOON",
      link: "https://forms.gle/RqSLtdanzJnMzsv87",
    },
    {
      name: "CODATHON",
      content:
        "Each team having maximum of 2 members can participate. One registration per team is enough. No need for individual registration of participants.Participants must have Hackerrank ID. Consists of various rounds.",
      session: "FORENOON",
      link: "https://forms.gle/uruodJDvq2vVX94k7",
    },
    {
      name: "Track Your Way",
      content:
        "Each team having maximum of 3 members can participate. One registration per team is enough. No need for individual registration of participants.",
      session: "FORENOON",
      link: "https://forms.gle/FEtmFUExZS2PiwSX6",
    },
    {
      name: "Picture yourself",
      content:
        "Each team having maximum of 4 members can participate. One registration per team is enough. No need for individual registration of participants.",
      note: "ONLY THOSE WHO HAVE PARTICIPATED IN TECHNICAL EVENT CAN TAKE PART IN NON TECHNICAL EVENT. Registration Fee is Rs.200 Per head.",
      session: "AFTERNOON",
      link: "https://forms.gle/SDTTcmYBAKf42Fax6",
    },
    {
      name: "RHYTHUM GALA",
      content:
        "Each team having maximum of 3 members can participate. One registration per team is enough. No need for individual registration of participants. Consists of various rounds like enacting to identify the song, find the Tamil song from English lyrics, identify the missed word in a song, identify the song which is played.",
      note: "ONLY THOSE WHO HAVE PARTICIPATED IN TECHNICAL EVENT CAN TAKE PART IN NON TECHNICAL EVENT. Registration Fee is Rs.200 Per head.",
      session: "AFTERNOON",
      link: "https://forms.gle/bELAGnTHtMxxnxGGA",
    },
    {
      name: "FUN TROLL",
      content:
        "Each team having maximum of 3 members can participate. One registration per team is enough. No need for individual registration of participants. Consists of various rounds like enacting to identify the song, find the Tamil song from English lyrics, identify the missed word in a song, identify the song which is played.",
      note: "ONLY THOSE WHO HAVE PARTICIPATED IN TECHNICAL EVENT CAN TAKE PART IN NON TECHNICAL EVENT. Registration Fee is Rs.200 Per head.",
      session: "AFTERNOON",
      link: "https://forms.gle/JJfEjd5Xwoiku9qv5",
    },
    {
      name: "SHERLOCK HOLMES",
      content:
        "Each team having maximum of 3 members can participate. One registration per team is enough. No need for individual registration of participants. Consists of various rounds like enacting to identify the song, find the Tamil song from English lyrics, identify the missed word in a song, identify the song which is played.",
      note: "ONLY THOSE WHO HAVE PARTICIPATED IN TECHNICAL EVENT CAN TAKE PART IN NON TECHNICAL EVENT. Registration Fee is Rs.200 Per head.",
      session: "AFTERNOON",
      link: "https://forms.gle/2PsAKcv9T79icPBh8",
    },
    {
      name: "Battery For EV",
      content: "Registration fees per head Rs.200",
      session: "9.00 am to 4.30 pm",
      link: "https://forms.gle/qCx9N5Y2ZvyUQ6XAA",
    },
    {
      name: "Drone technology",
      content: "Registration fees per head Rs.200",
      session: "9.00 am to 4.30 pm",
      link: "https://forms.gle/ehP7gajs7Rw1iPbN8",
    },
    {
      name: "Smart 5G Antenna",
      content: "Registration fees per head Rs.200",
      session: "9.00 am to 4.30 pm",
      link: "https://forms.gle/RFWnux5zwKPvNboPA",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [Contest, setContest] = useState(1);
  const handleClick = (event) => {
    setIsOpen((current) => !current);
    setContest(Number(event.target.id));
  };
  return (
    <div
      className="flex flex-col justify-between text-center items-center  w-full relative py-[calc(100%*0.05)]"
      id="events"
    >
      <Fade left cascade>
        <div className="flex mar-20">
          <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-[var(--red)]">
            Technical Events
          </h1>
        </div>
      </Fade>
      <Fade top>
        <div className="flex shield-wrap w-full justify-between items-center text-center md:justify-between">
          <div className="shield ">
            <h1 className="p-2 text-[var(--blue)]">Paper Presentaion</h1>
            <button
              className="bg-[#2e2a2a] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button"
              id="0"
              onClick={handleClick}
            >
              Register
            </button>
          </div>
          <div id="2" className="shield">
            <h1 className="p-2 text-[var(--blue)]">Project Presentaion</h1>
            <button
              className="bg-[#2e2a2a] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button"
              id="1"
              onClick={handleClick}
            >
              Register
            </button>
          </div>
          <div id="4" className="shield">
            <h1 className="p-2 text-[var(--blue)]">Codathon</h1>
            <button
              className="bg-[#2e2a2a] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button"
              id="2"
              onClick={handleClick}
            >
              Register
            </button>
          </div>
          <div id="5" className="shield">
            <h1 className="p-2 text-[var(--blue)]">Track Your Way</h1>
            <button
              className="bg-[#2e2a2a] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button"
              id="3"
              onClick={handleClick}
            >
              Register
            </button>
          </div>
        </div>
      </Fade>

      <Fade left cascade>
        <div className="flex mar-20">
          <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-[var(--red)]">
            Non-Technical Events
          </h1>
        </div>
      </Fade>
      <Fade top>
        <div className="flex shield-wrap w-full justify-between items-center text-center md:justify-center">
          <div id="6" className="shield">
            <h1 className="p-2 text-[var(--blue)]">Picture yourself</h1>
            <button
              className="bg-[#2e2a2a] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button"
              id="4"
              onClick={handleClick}
            >
              Register
            </button>
          </div>
          <div id="7" className="shield">
            <h1 className="p-2 text-[var(--blue)]">Rhythm Gala</h1>
            <button
              className="bg-[#2e2a2a] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button"
              id="5"
              onClick={handleClick}
            >
              Register
            </button>
          </div>
          <div id="8" className="shield">
            <h1 className="p-2 text-[var(--blue)]">Fun Troll</h1>
            <button
              className="bg-[#2e2a2a] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button"
              id="6"
              onClick={handleClick}
            >
              Register
            </button>
          </div>
          <div id="9" className="shield">
            <h1 className="p-2 text-[var(--blue)]">Sherlock Holmes</h1>
            <button
              className="bg-[#2e2a2a] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button"
              id="7"
              onClick={handleClick}
            >
              Register
            </button>
          </div>
        </div>
      </Fade>
      <Fade left cascade>
        <div className="flex mar-20">
          <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-[var(--red)]">
            Work Shops
          </h1>
        </div>
      </Fade>
      <Fade top>
        <div className="flex shield-wrap w-full justify-between items-center text-center md:justify-center">
          <div id="1" className="shield">
            <h1 className="p-2 text-[var(--blue)]">Battery For EV</h1>
            <button
              className="bg-[#2e2a2a] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button"
              id="8"
              onClick={handleClick}
            >
              Register
            </button>
          </div>
          <div id="2" className="shield">
            <h1 className="p-2 text-[var(--blue)]">Drone Tech</h1>
            <button
              className="bg-[#2e2a2a] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button"
              id="9"
              onClick={handleClick}
            >
              Register
            </button>
          </div>
          <div id="4" className="shield">
            <h1 className="p-2 text-[var(--blue)]">Smart 5G Antenna</h1>
            <button
              className="bg-[#2e2a2a] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button"
              id="10"
              onClick={handleClick}
            >
              Register
            </button>
          </div>
        </div>
      </Fade>
      <div>
        {isOpen && (
          <Modal
            setIsOpen={setIsOpen}
            handleClick={handleClick}
            Content={contest[Contest]}
          />
        )}
      </div>
    </div>
  );
}

export default Events;
