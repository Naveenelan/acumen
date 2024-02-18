import React, { useState } from "react";
import "../styles/dev.css";
import * as Icon from "react-bootstrap-icons";

function Developers() {
  return (
    <div className="max-w-[1240px] mx-auto relative gap-2">
      <div className="secondrow">
        <div class="card">
          <div class="img">
            <img src={require("../assets/developers/naveen.jpg")} />
          </div>
          <div class="infos">
            <div class="name">
              <h2>Naveen Periasamy</h2>
              <h4>Developer & Designer</h4>
            </div>
            <div className="socialmedia">
              <a
                target="_blank"
                href="https://instagram.com/_naveen_bharathi?igshid=ZDdkNTZiNTM="
              >
                <Icon.Instagram
                  aria-hidden="true"
                  id="instagram"
                ></Icon.Instagram>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/naveen-bharathi-739423235/"
              >
                <Icon.Linkedin id="linkedin"></Icon.Linkedin>
              </a>
              <a
                target="_blank"
                href="https://twitter.com/Naveen03972024?t=ExzdyO-x4lUD9IdKhpon8A&s=08"
              >
                <Icon.Twitter id="twitter"></Icon.Twitter>
              </a>
              <a target="_blank" href="https://github.com/Naveenelan">
                <Icon.Github id="github"></Icon.Github>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="firstrow">
        <div class="card">
          <div class="img">
            <img src={require("../assets/developers/sujit.jpg")} />
          </div>
          <div class="infos">
            <div class="name">
              <h2>Sujit Balasubramian</h2>
              <h4>Web Developer</h4>
            </div>
            <div className="socialmedia">
              <a
                target="_blank"
                href="https://instagram.com/sujit_balasubramanian"
              >
                <Icon.Instagram
                  aria-hidden="true"
                  id="instagram"
                ></Icon.Instagram>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/sujit-balasubramanian"
              >
                <Icon.Linkedin id="linkedin"></Icon.Linkedin>
              </a>
              <a target="_blank" href="https://twitter.com/Sujitatmachine">
                <Icon.Twitter id="twitter"></Icon.Twitter>
              </a>
              <a target="_blank" href="https://github.com/sujitbalasubramanian">
                <Icon.Github id="github"></Icon.Github>
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="img">
            <img src={require("../assets/developers/veenas.jpg")} />
          </div>
          <div class="infos">
            <div class="name">
              <h2>Veenas Kumar</h2>
              <h4>Web Developer</h4>
            </div>
            <div className="socialmedia">
              <a
                target="_blank"
                href="https://instagram.com/_self_master_?igshid=ZDdkNTZiNTM="
              >
                <Icon.Instagram
                  aria-hidden="true"
                  id="instagram"
                ></Icon.Instagram>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/veenas-kumar-54491a216/"
              >
                <Icon.Linkedin id="linkedin"></Icon.Linkedin>
              </a>
              <a target="_blank" href="https://twitter.com/veenaskumar">
                <Icon.Twitter id="twitter"></Icon.Twitter>
              </a>
              <a target="_blank" href="https://github.com/veenaskumar">
                <Icon.Github id="github"></Icon.Github>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developers;
