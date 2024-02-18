import React, { useState } from "react"
import poster from '../assets/poster.png'
import { Zoom } from "react-awesome-reveal"

function AboutUs() {
    return (
        <div>
            <Zoom bottom>
                <div className="mx-auto " style={{ width: "calc(100%*0.8)", marginTop: "150px" }}>
                    <img src={poster} alt="poster" />
                </div>
            </Zoom>
        </div>
    )
}

export default AboutUs
