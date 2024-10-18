import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ImageText from "../components/ImageText";
import Imagem from "../Assets/img2.png";
import React, {useEffect, useState} from "react";

function Home(){
    const allSeason=[
        {id: 1, src:  Imagem, alt: "Descrição da Imagem 1", text: "1º temporada"}, 
        {id: 2, src:  Imagem, alt: "Descrição da Imagem 2", text: "2º temporada"}, 
        {id: 3, src:  Imagem, alt: "Descrição da Imagem 3", text: "3º temporada"}, 
        {id: 4, src:  Imagem, alt: "Descrição da Imagem 4", text: "4º temporada"},
        {id: 5, src:  Imagem, alt: "Descrição da Imagem 5", text: "5º temporada"},
        {id: 6, src:  Imagem, alt: "Descrição da Imagem 6", text: "6º temporada"},
        {id: 7, src:  Imagem, alt: "Descrição da Imagem 7", text: "7º temporada"},
        {id: 8, src:  Imagem, alt: "Descrição da Imagem 8", text: "8º temporada"},
        {id: 9, src:  Imagem, alt: "Descrição da Imagem 9", text: "9º temporada"},
    ]

    const [HighLighterSeason, setHighLighterSeason] = useState(allSeason.slice(0,3))
    useEffect(() => {
        const rotateSeason = () => {
            setHighLighterSeason((prevSeason) => {
              const currentIndex = allSeason.findIndex((s) => s.id === prevSeason[0].id)
              const nextIndex = (currentIndex + 3) % allSeason.length
              return allSeason.slice(nextIndex, nextIndex + 3)
            })
        }
        const interval = setInterval(rotateSeason, 3000)
        return() => clearInterval(interval)
    }, [allSeason])

    return(
    <div>
        <Header/>
        <Banner/>
        <ImageText images = {HighLighterSeason}/>
        <Footer/>
    </div>
    );
}
export default Home;
