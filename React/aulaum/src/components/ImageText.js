import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
margin-bottom: 100px;
margin-top: 20px;

`
const ImageContainer = styled.main`
width: 200px;
height: 300px;
margin: 0 10px;
img{
    height: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
}
`
const Text = styled.p`
text-align: center;
`


function ImageText({images}){
const navigate = useNavigate()

    return(
    <Container>
        {images.map((image, index) => (
            <ImageContainer key = {index}>
                <img src = {image.src} alt={image.alt}/>
                <Text>{image.text}</Text>
                <button onClick={() => navigate(`/temporada/${image.id}`)} >Saiba Mais</button>
            </ImageContainer>
        ))}
    </Container>
    )
}
export default ImageText