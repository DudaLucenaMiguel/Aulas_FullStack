import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
gap: 20px;
max-width: 1000px;
margin: 0 auto;
padding: 10px;
`
const ImageCard = styled.main`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 30px;
width: calc(33.33% - 20px);
`

const StyledImage = styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
border: 5px solid #007dff;
object-fit: cover;
margin-bottom: 10px;
`
const SubTitle = styled.h2`
text-align: center;
color: #007bff;
margin: 0 0 5px 0;
`
const Description = styled.p`
text-align: justify;
margin-bottom: 10px;
flex: 1;
`
const MainTitle = styled.h1`
text-align: center;
margin: 40px 0;
`

function PersonagemCard({characters}){
    return(
        <div>
            <MainTitle>Personagens</MainTitle>
            <Container>
            {characters.map((character, index) => (
                <ImageCard img={index}>
                    <StyledImage src={character.src} alt={character.alt}/>
                    <SubTitle>{character.title}</SubTitle>
                    <Description>{character.description}</Description>
                    <button>Saiba Mais</button>
                </ImageCard>
            ))}
            </Container>
        </div>
    )
}
export default PersonagemCard