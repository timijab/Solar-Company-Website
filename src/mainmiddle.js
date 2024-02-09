import React from "react";
import GoSolar from "./go solar.png";

function Main(){

    return <div className="division">
        <div className="gocontainer">
            <img className="gosolar" src={GoSolar} alt="go solar logo"></img>
        </div>
        <div className="logowriteup">
            <h3 className="power"> Best Way to Power your World! </h3>
        </div>
        <div className="line"> <hr></hr> </div>
        <div>
            <h4 id="solarmarket"> Explore our range of solar products and services designed to meet your energy needs and Join the renewable energy revolution with AO Demarg.</h4>
        </div>

    </div>
}

export default Main;