import React from "react";
import styled from "styled-components";

const Main = () => {

    const MainSection = styled.section`
        width:100%;
        height:800px; 
        background:url("../images/main_bg.jpg") no-repeat 0 0 / cover;
    `;

    return (
        <main id="main">
            <div className="main">
                <MainSection>
                </MainSection>
            </div>
        </main>
    );
}

export default Main;