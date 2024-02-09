import React from "react";
import logo from "./logo.jpg";
function Header(){
    return <div className="header">
        <img className="logo" src={logo} alt="Logo of Aodemarg"></img>
        <h2 className="aodemarg"> AO Demarg <h6 id="small">Putting the sun to work..</h6> </h2>
        
        <div className="rest">
            <h4 id="contents1"> Home </h4>
            <h4 id="contents2"> Contact us </h4>
            <h4 id="contents3"> Purchase </h4>
            <h4 id="contents4"> Solar solutions </h4>
            <h4 id="contents5"> Gallery </h4>
            <h4 id="contents6"> <button className="span">  About us </button> </h4>
        </div>
    </div>
}

export default Header;