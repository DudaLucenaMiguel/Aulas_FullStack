import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import image1 from '../Assets/01.png'
import image2 from '../Assets/02.png'
import image3 from '../Assets/03.png'
import image4 from '../Assets/04.png'
import image5 from '../Assets/05.png'
import image6 from '../Assets/06.png'
import image7 from '../Assets/07.png'
import image8 from '../Assets/08.png'
import image9 from '../Assets/09.png'

//CSS Bio Content
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Image = styled.img`
  flex-shrink: 0;
  width: 300px;
  height: auto;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.p`
  text-align: justify;
`;

const Title = styled.h2`
  text-align: left;
`;

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

function BioContent(){

    const {id} = useParams();
    const navigate = useNavigate();
    const [character, setCharater] = useState(null);

    useEffect(() => {
        const MockData = [
            { id: '1', nome: 'Dwight Schrute', texto: 'Assistente do gerente regional...', foto: image1 },
            { id: '2', nome: 'Michael Scott', texto: 'Gerente regional da filial...', foto: image2 },
            { id: '3', nome: 'Jim Halpert', texto: 'Um dos vendedores da Dunder Mifflin...', foto: image3 },
            { id: '4', nome: 'Pam Beesly', texto: 'Recepcionista da Dunder Mifflin...', foto: image4 },
            { id: '5', nome: 'Angela Martin', texto: 'Contadora. Rígida e séria...', foto: image5 },
            { id: '6', nome: 'Phyllis Vance', texto: 'Ela é um tipo quieto...', foto: image6 },
            { id: '7', nome: 'Stanley Hudson', texto: 'Funcionário sério...', foto: image7 },
            { id: '8', nome: 'Holly Flax', texto: 'Chega à Dunder Mifflin...', foto: image8 },
            { id: '9', nome: 'Ryan Howard', texto: 'Estagiário e estudante de administração.', foto: image9 },
        ]
        const fetchatCharacter = MockData.find(char => char.id === id);
        setCharater(fetchatCharacter)
    },[id])
    const handleBack = () =>{
        navigate(-1);
    }
    if(!character){
        return<div>Personagem não encontrado</div>
    }

    return(
        <Container>
            <Content>
                <Image src={character.foto} alt={character.nome}/>
                <TextContainer>
                    <Title>{character.nome}</Title>
                    <Text>{character.texto}</Text>
                    <Button onClick={handleBack}>Voltar</Button>
                </TextContainer>
            </Content>
        </Container>
    )
};
export default BioContent;