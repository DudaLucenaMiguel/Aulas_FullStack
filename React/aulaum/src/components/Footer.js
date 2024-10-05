import styled from "styled-components";

const FooterContainer = styled.footer `
    background-color: #333;
    padding: 40px;
    color: #fff;
    text-align: center;
`

function Footer(){
    return(
        <FooterContainer>
            <p>Dunder Mifflin Paper Company - 2024</p>
        </FooterContainer>
    );
}
export default Footer;