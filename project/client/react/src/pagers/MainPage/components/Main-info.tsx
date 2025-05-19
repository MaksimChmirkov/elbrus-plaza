import React from "react";
import Info from "./Info";
import Info2 from "./Info2";


const MainInfo: React.FC = () => {
    return(
        <div className="main-info">           
            <Info />
            <Info2 />
        </div>
    );
};

export default MainInfo;