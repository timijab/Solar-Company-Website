import React from "react";
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from './logo-removebg.png'

const date = new Date();
let year = date.getFullYear();

function Footer(){
    return <div className="footer">
        <div className="containerer">
            <div className="row">
                <p id="capture">
                    1000 Homes, Factories and Counting....
                </p>
            </div>
            <div className="row">
                <p>
                    Across homes, offices, and factories, 
                    we have successfully installed solar solutions for over 1000 satisfied clients and counting. 
                    Our commitment to providing reliable and sustainable energy solutions has empowered countless individuals and businesses to embrace clean, 
                    renewable energy sources. 
                </p>
                <button className="team"> Meet Our Team </button>
            </div>
        </div>
        
        {/* <img className="nasa" src="../images/nasa.jpg" alt="The globe"></img> */}
        <div className="logow">
            <img className="logo" src={Logo} alt="Logo of Aodemarg"></img>
            <h3> AO Demarg </h3>
        </div>

        <div className="footercontainer">
            <div className="footerrow">
                <h4> Projects </h4>
            </div>
            <div className="footerrow">
                <h4> Solutions </h4>
            </div>
            <div className="footerrow">
                <h4> Contact </h4>
            </div>
            <div id="news" className="footerrow">
                <h4> News </h4>
            </div>
        </div>
        <hr className="linetwo"></hr>
        <div className="courtesy">
            <div className="courtesyone">
                <h4> 
                    © {year} </h4>
            </div>
            <div className="courtesytwo">
                <YouTubeIcon className="it"/><FacebookIcon className="it"/><XIcon className="it"/><InstagramIcon className="it"/><LinkedInIcon className="it"/>
            </div>
        </div>
    </div>

}

export default Footer;