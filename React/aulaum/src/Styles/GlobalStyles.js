import {createGlobalStyle} from "styled-components"
import BG from "../Assets/BG.png"


const GlobalStyles = createGlobalStyle`
body{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    color: #333;
    background: url("${BG}");
}
button{
display: block;
margin: 0 auto;
padding: 10px 20px;
border: none;
background-color: #007bff;
color: #fff;
border-radius: 5px;
cursor: pointer;
    &:hover{
        background-color: #394c73;
    } 
}
`
export default GlobalStyles;