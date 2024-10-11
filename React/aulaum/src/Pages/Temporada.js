import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import imagem from "../Assets/img2.png"
import Banner from "../components/Banner";

//Css Temporada

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
`;

const Title = styled.h1`
  margin-top: 20px;
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
`

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  align-self: flex-start;
  &:hover {
    background-color: #394c73;
  }
`

function Temporada(){

    const navigate = useNavigate();
    const handleBack = () =>{
        navigate(-1);
    }

    const {id} = useParams();
    const seasonData = {
        1: { title: '1º Temporada', description: 'Descrição da primeira temporada de The Office', img: imagem },
        2: { title: '2º Temporada', description: 'Descrição da segunda temporada de The Office', img: imagem },
        3: { title: '3º Temporada', description: 'Descrição da terceira temporada de The Office', img: imagem },
        4: { title: '4º Temporada', description: 'Descrição da quarta temporada de The Office', img: imagem },
        5: { title: '5º Temporada', description: 'Descrição da quinta temporada de The Office', img: imagem },
        6: { title: '6º Temporada', description: 'Descrição da sexta temporada de The Office', img: imagem },
        7: { title: '7º Temporada', description: 'Descrição da sétima temporada de The Office', img: imagem },
        8: { title: '8º Temporada', description: 'Descrição da oitava temporada de The Office', img: imagem },
        9: { title: '9º Temporada', description: 'Descrição da nona temporada de The Office', img: imagem },
      }

      const temporada = seasonData[id]

    return(
        <div>
            <Header/>
            <Banner/>
            <Container>
                <Image src={temporada.img} alt={temporada.title}/>
                <Title>{temporada.title}</Title>
                <Description>{temporada.description}</Description>
                <Button onClick={handleBack}>Voltar</Button>
            </Container>
            <Footer/>
        </div>
    )
};
export default Temporada;