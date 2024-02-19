import React from "react";
import "./Model.css";
import { Fade } from "react-awesome-reveal";

const Modal = ({ setIsOpen, handleClick, Content }) => {
  console.log(Content);
  return (
    <Fade top>
      <div
        className="model-head flex items-center justify-center "
        style={{ display: setIsOpen ? "flex" : "none" }}
      >
        <div className="flex flex-col dialog-box p-[10px]">
          <h1 className="sm:text-4xl text-xl font-bold p-[10px] text-[var(--red)]">
            {Content.name}
          </h1>
          <p className="p-[10px] text-white">{Content.content}</p>
          <p className="p-[10px] text-white">{Content.note}</p>
          <p className="sm:text-[22px] text-[23px] font-bold text-[var(--red)] text-start">
            Date: <span className="text-[var(--blue)]">16.03.2024</span>
          </p>
          <p className="sm:text-[22px] text-[23px] font-bold text-[var(--red)] text-start">
            Session:{" "}
            <span className="text-[var(--blue)]">{Content.session}</span>
          </p>
          <p className="sm:text-[22px] text-[23px] font-bold text-[var(--red)] text-start">
            Gpay Number:{" "}
            <span className="text-[var(--blue)]">
              9894821278 - Nanthakkumaran S{" "}
            </span>
          </p>
          <p className="py-2 font-bold  text-2xl text-[var(--red)] text-start">
            Any Doubts:
          </p>
          <p className="text-[var(--blue)] text-start">
            P . Naveen Bharathi - 9488042479{" "}
          </p>
          <p className="text-[var(--blue)] text-start">
            R . Harini - 7708921542{" "}
          </p>
          <div className="flex justify-center mt-8">
            <a
              href={Content.link}
              className="flex-1 p-[10px] mx-20 reg-btn font-bold text-black"
            >
              Register
            </a>
            <button
              className="flex-1 p-[10px] mx-20 cls-btn font-bold text-white"
              onClick={handleClick}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Modal;
