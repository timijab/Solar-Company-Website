import React from "react";
import SolarPowerOutlinedIcon from '@mui/icons-material/SolarPowerOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
function Photobot(){
    return <div>
        <div className="containered">
            <div className="pone">
                <h3> Solar Investment </h3>
            </div>
            <div className="pone">
                <h3> How we Install </h3>
            </div>
            <div className="pone">
                <h3> Solar Panels Installations </h3>
            </div>
        </div>
        <div className="display">
            <div>
                <SolarPowerOutlinedIcon className="solaricon"/>
            </div>
        
        <div className="displayone">
            <p>
                Discover the potential for sustainable returns and long-term profitability with solar investment, 
                a smart choice for environmentally-conscious investors looking to diversify their portfolio 
                and contribute to a cleaner, brighter future.
            </p>
        </div>
        <div className="displaybutton">
            <button className="buts"> Explore Solutions  <ArrowRightAltOutlinedIcon/> </button>
            <button className="buts"> Learn More <ArrowRightAltOutlinedIcon/> </button>
            <button className="buts"> Request a Quote <ArrowRightAltOutlinedIcon/> </button>
        </div>
        <div className="direction">
            <p> Follow <ArrowRightAltOutlinedIcon/></p>
        </div>
        
        </div>
        <img className="blue" src="../images/wallpaperflare.jpg"></img>
    </div>
}

export default Photobot;