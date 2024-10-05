import styled from "styled-components";
import BuildingImage from "../Assets/building.png"

const BannerContainer = styled.div`
background: url("${BuildingImage}");
height: 300px;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`
const BannerText = styled.p`
font-size: 48px;
font-weight: bold;
`
function Banner(){
    return(
        <BannerContainer>
            <BannerText>Dunder Mifflin Paper Company</BannerText>
        </BannerContainer>
    )
};
export default Banner;