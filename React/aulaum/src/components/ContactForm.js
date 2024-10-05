import styled from "styled-components";
import { Link } from "react-router-dom";
import ImageRight from "../Assets/img2.png"

const ContactContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
//padding: 50px 20px;
max-width: 1000px;
margin: 0 auto;
`
const FormContainer = styled.section`
flex: 3;
text-align: center;
`
const Form = styled.form`
padding-top: 20px;

`
const Input = styled.input`
display: block;
width: 100%;
padding: 15px;
margin-bottom: 20px;
border: 1px solid #ccc;
border-radius: 4px;
`
const SearchInput = styled(Input)`
width: 50%;
margin: 0 auto 20px auto;
`
const Button = styled.button`

`
const ImageContainer = styled.figure`
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}
`
const MainTitle = styled.h1`
text-align: center;
margin: 20px 0 0 0;
`

function ContactForm(){
    return(
    <div>
    <MainTitle>Contanto</MainTitle>
    <ContactContainer>
        <FormContainer>
            <Form>
                <SearchInput type="text" placeholder="Nome"/>
                <SearchInput type="email" placeholder="e-mail"/>
                <SearchInput type="text" placeholder="Celular"/>
                <SearchInput type="text" placeholder="Assunto"/>
                <SearchInput type="text-area" placeholder="Mensagem"/>
                <Button type ="submit">Enviar</Button>
            </Form>
        </FormContainer>
        <ImageContainer>
                <img src={ImageRight} alt="ImageDescritiva"/>
        </ImageContainer>
    </ContactContainer>
    </div>
    );
}
export default ContactForm;