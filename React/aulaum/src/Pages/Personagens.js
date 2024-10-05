import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import PersonagensCard from "../components/PersonagensCard";
import image1 from "../Assets/01.png";
import image2 from "../Assets/02.png";
import image3 from "../Assets/03.png";
import image4 from "../Assets/04.png";
import image5 from "../Assets/05.png";
import image6 from "../Assets/06.png";
import image7 from "../Assets/07.png";
import image8 from "../Assets/08.png";
import image9 from "../Assets/09.png";


function Personagens(){
    return(
    <div>
        <Header/>
        <Banner/>
        <PersonagensCard 
        characters={[
            { src: image1, alt: 'Dwight Schrute', title: "Dwight Schrute", description: "Assistente do gerente regional, , é um premiado vendedor e voluntário reserva do xerife de Lackawanna." },
            { src: image2, alt: 'Michael Scott', title: "Michael Scott", description: "Gerente regional da filial de Scranton da Dunder Mifflin Paper Company" },
            { src: image3, alt: 'Jim Halpert', title: "Jim Halpert", description: "Um dos vendedores da Dunder Mifflin, tem uma forte amizade marcada por uma tensão romântica, com a recepcionista Pam." },
            { src: image4, alt: 'Pam Beesly', title: "Pam Beesly", description: "Recepcionista da Dunder Mifflin, começa a série como noiva do entregador Roy." },
            { src: image5, alt: 'Angela Martin', title: "Angela Martin", description: "Contadora. Rígida e séria, vive sozinha e tem mania por gatos." },
            { src: image6, alt: 'Phyllis Vance', title: "Phyllis Vance", description: "Ela é um tipo quieto, mas amigável, que adora conversa de garotas e fofoca." },
            { src: image7, alt: 'Stanley Hudson', title: "Stanley Hudson", description: "Ele é retratado como um funcionário sério, perpetuamente mal-humorado e descontente." },
            { src: image8, alt: 'Holly Flax', title: "Holly Flax", description: "Chega a Dunder Mifflin para servir como substituta de Toby Flenderson , o anterior representante de RH da filial de Scranton." },
            { src: image9, alt: 'Ryan Howard', title: "Ryan Howard", description: "Estagiário e estudante de administração." },
          ]}
        />
        <Footer/>
    </div>
    );
}
export default Personagens;
