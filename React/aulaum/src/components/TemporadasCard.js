import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//TemporadasCard

const Container = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #394c73;
  }
`


function TemporadasCard({seasons}){

    const navigate = useNavigate();

    return(
        <Container>
            {seasons.map((seasons) => (
                <Card key={seasons.id}>
                    <Image src={seasons.img} alt={seasons.title}/>
                    <Content>
                        <Title>{seasons.title}</Title>
                        <Description>{seasons.description}</Description>
                        <Button onClick={() => navigate(`/temporada/${seasons.id}`)}>Saiba Mais</Button>
                    </Content>
                </Card>
            ))}
        </Container>
    )
}
export default TemporadasCard