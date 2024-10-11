import styled from "styled-components";
import React from "react";
import BioContent from "../components/BioContent";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Bio(){
    return(
        <div>
            <Header/>
            <Banner/>
            <BioContent/>
            <Footer/>
        </div>
    )
};
export default Bio;