import React from "react";
import { useLocation } from "react-router-dom";

const About = ({ locationData }) => {
    const location = useLocation();
    const locationFunc = () => locationData(location.pathname);

    return (
        <div>
            <h1>라우터ㅓㅓㅓ</h1>
            <button onClick={locationFunc}>Brint Location</button>
        </div>
    );
}

export default About;