// import React, {useState} from "react";
import "../styles/officemembers.css";

function About() {
  return (
    <>
      <div className="cards">
        <h1 className="relative text-[var(--red)] font-semibold text-2xl">
          Staff Coordinators
        </h1>
        <br />
        <div className="cardrow">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/HOD.jpg")} />
                <div className="absolute text-black paraname">
                  Dr.N.Kasthuri
                </div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Head Of The Department</h1>
                <h1 className="text-center post">ECE</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/arul.jpg")} />
                <div className="absolute text-black paraname">
                  Dr.A.Arulmurugan
                </div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Assistant Professor(SI.G)</h1>
                <h1 className="text-center post">ECE</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/chandru.jpg")} />
                <div className="absolute text-black paraname">
                  Mr.A.Chandrasekaran
                </div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Assistant Professor</h1>
                <h1 className="text-center post">ECE</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="cardrow">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/jude.jpg")} />
                <div className="absolute text-black paraname">
                  Dr . M . Joseph Auxilius Jude
                </div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Associate professor</h1>
                <h1 className="text-center post">ECE</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/vennila.jpg")} />
                <div className="absolute text-black paraname">
                  Mrs . A . Vennila
                </div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Assistant Professor</h1>
                <h1 className="text-center post">ECE</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/ramya.jpg")} />
                <div className="absolute text-black paraname">
                  Mrs . A .Ramyea
                </div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Assistant Professor</h1>
                <h1 className="text-center post">ECE</h1>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h1 className="relative font-semibold text-2xl text-[var(--red)]">
          ECEA and IETE Members
        </h1>
        <br />
        <div className="cardrow">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front ">
                <img
                  src={require("../assets/office_barriers/Sabari U P.jpg")}
                />
                <div className="absolute text-[var(--blue)] paraname">
                  Sabari U P
                </div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Secretary</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/Kaveya P.jpg")} />
                <div className="absolute text-black paraname">Kaveya P</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Chairman</h1>
                <h1 className="text-center post">IETE</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="cardrow">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/maheswari.jpg")} />
                <div className="absolute text-black paraname">Maheswari V</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Additional Secretary</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front ">
                <img src={require("../assets/office_barriers/prasanna.jpg")} />
                <div className="absolute text-black paraname">Prasanna G</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Vice Chairman</h1>
                <h1 className="text-center post">IETE</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/Harini R.jpg")} />
                <div className="absolute text-black paraname">Harini R</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Treasurer</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/gokuld.jpg")} />
                <div className="absolute text-black paraname">Gokul D</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Additional Secretary</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="cardrow">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={require("../assets/office_barriers/NanthakumaranS.jpg")}
                />
                <div className="absolute text-black paraname">
                  Nanthakumarn S
                </div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Additonal Secretary</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/sowmika.jpg")} />
                <div className="absolute text-black paraname">Sowmika S</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Additional Secretary</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/ks ooty.jpg")} />
                <div className="absolute text-black paraname">
                  Kavyashree V N
                </div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Joint Secretary</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="cardrow">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/cibi.jpeg")} />
                <div className="absolute text-black paraname">
                  Cibi Krishna V
                </div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Joint Secretary</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/Sowmitha.jpg")} />
                <div className="absolute text-black paraname">Sowmitha K</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Executive Member</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={require("../assets/office_barriers/AravindanA.jpg")}
                />
                <div className="absolute text-black paraname">Aravindan A</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Executive Member</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/jinisha.jpg")} />
                <div className="absolute text-black paraname">Jinisha M</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Executive Member</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="cardrow">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/NIKITA N.jpg")} />
                <div className="absolute text-black paraname">Nikita N</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Executive Member</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/deena.jpg")} />
                <div className="absolute text-black paraname">
                  Deena Sherin S
                </div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Executive Member</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/mani.jpg")} />
                <div className="absolute text-black paraname">Manikandan T</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Executi ve Member</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={require("../assets/office_barriers/SAKTHIMURUGAN R.jpg")}
                />
                <div className="absolute text-black paraname">
                  SakthiMurugan R
                </div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Executive Member</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/jeevagan.jpg")} />
                <div className="absolute text-black paraname">Jeevagan N</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Executive Member</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="cardrow">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={require("../assets/office_barriers/BOOBATHI RAJA K.M.jpg")}
                />
                <div className="absolute text-black paraname">
                  Boobathi Raja K M
                </div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Office Bearers</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={require("../assets/office_barriers/MALAVIKA V.jpg")}
                />
                <div className="absolute text-black paraname">Malavika V</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Office Bearers</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={require("../assets/office_barriers/PRETHIKAA D.jpeg")}
                />
                <div className="absolute text-black paraname">Prethikaa D</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Office Bearers</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={require("../assets/office_barriers/YOGESH T N.jpeg")}
                />
                <div className="absolute text-black paraname">Yogesh T N</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Office Bearers</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="cardrow">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/elangoo.jpg")} />
                <div className="absolute text-black paraname">Elango S</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Office Bearers</h1>
                <h1 className="text-center post">IETE</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/janani.jpg")} />
                <div className="absolute text-black paraname">Janani R</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Office Bearers</h1>
                <h1 className="text-center post">IETE</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={require("../assets/office_barriers/SHRI SUDHAN B.jpg")}
                />
                <div className="absolute text-black paraname">SriSudhan B</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Office Bearers</h1>
                <h1 className="text-center post">IETE</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="cardrow">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={require("../assets/office_barriers/SUBHIKSHA S.jpg")}
                />
                <div className="absolute text-black paraname">Subhiksha S</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Office Bearers</h1>
                <h1 className="text-center post">IETE</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/vi.jpg")} />
                <div className="absolute text-black paraname">
                  Vijayashika K M
                </div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Executive Member</h1>
                <h1 className="text-center post">IETE</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/AkshayaRS.jpg")} />
                <div className="absolute text-black paraname">Akshaya R S</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Additional Secretary</h1>
                <h1 className="text-center post">IETE</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={require("../assets/office_barriers/Nisaanth P.jpg")}
                />
                <div className="absolute text-black paraname">Nisaanth P</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Additonal Secretary</h1>
                <h1 className="text-center post">IETE</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="cardrow">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/nijithra.jpg")} />
                <div className="absolute text-black paraname">Nijithra G K</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Executive Member</h1>
                <h1 className="text-center post">IETE</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={require("../assets/office_barriers/Jeevanatham.jpg")}
                />
                <div className="absolute text-black paraname">
                  Jeevanantham N
                </div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Secretary</h1>
                <h1 className="text-center post">IETE</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/developers/naveen.jpg")} />
                <div className="absolute text-black paraname">
                  Naveen Bharathi P
                </div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Joint Secretary</h1>
                <h1 className="text-center post">IETE</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={require("../assets/office_barriers/BhoovithaS.jpg")}
                />
                <div className="absolute text-black paraname">Bhoovitha S</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Joint Secretary</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="cardrow">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={require("../assets/office_barriers/VENKATESH G.jpg")}
                />
                <div className="absolute text-black paraname">
                  Gnanavenkatesh G
                </div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Executive Member</h1>
                <h1 className="text-center post">IETE</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={require("../assets/office_barriers/RagunathRS.jpg")}
                />
                <div className="absolute text-black paraname">Ragunath R S</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Executive Member</h1>
                <h1 className="text-center post">IETE</h1>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={require("../assets/office_barriers/SaravanakumarP.jpg")}
                />
                <div className="absolute text-black paraname">
                  Saravanakumar P
                </div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Executive Member</h1>
                <h1 className="text-center post">ECEA</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={require("../assets/office_barriers/ANANYA K S.jpg")}
                />
                <div className="absolute text-black paraname">Ananya K S</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Executive Member</h1>
                <h1 className="text-center post">IETE</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="cardrow">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={require("../assets/office_barriers/SRI YAALINI M.jpg")}
                />
                <div className="absolute text-black paraname">Sri Yaalini</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Treasurer</h1>
                <h1 className="text-center post">IETE</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require("../assets/office_barriers/KAVIYA V.jpg")} />
                <div className="absolute text-black paraname">kaviya V</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Executive Member</h1>
                <h1 className="text-center post">IETE</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={require("../assets/office_barriers/MYTHILI R S.jpg")}
                />
                <div className="absolute text-black paraname">Mythili R S</div>
              </div>
              <div class="flip-card-back">
                <h1 className="post text-center">Executive Member</h1>
                <h1 className="text-center post">IETE</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
