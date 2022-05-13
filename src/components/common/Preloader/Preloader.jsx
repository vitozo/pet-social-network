import preloader from "../../../assets/images/Preloader.svg";
import React from "react";


const Preloader = (props) => {
    return (
        <div>
            <img src={preloader} alt='preloader'/>
        </div>
    )
};

export default Preloader;