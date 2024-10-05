import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ImageText from "../components/ImageText";
import Imagem1 from "../Assets/img2.png";
import Imagem2 from "../Assets/img2.png";
import Imagem3 from "../Assets/img2.png";
import Imagem4 from "../Assets/img2.png";


function Home(){
    return(
    <div>
        <Header/>
        <Banner/>
        <ImageText 
            images={[
                {src:  Imagem1, alt: "Descrição da Imagem1", text: "1º temporada"}, 
                {src:  Imagem2, alt: "Descrição da Imagem2", text: "2º temporada"}, 
                {src:  Imagem3, alt: "Descrição da Imagem3", text: "3º temporada"}, 
                {src:  Imagem4, alt: "Descrição da Imagem4", text: "4º temporada"}
            ]}
        />
        <Footer/>
    </div>
    );
}
export default Home;
