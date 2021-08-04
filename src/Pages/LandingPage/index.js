import { CremationContainer, CarouselContainer, CardContainer } from "./style";
import Woman from "../../Assets/LandingPage/woman.png";
import Carousel from "../../Components/LandingPage/Carousel";
import Button from "../../Components/LandingPage/Button";
import Cards from "../../Components/LandingPage/Cards";

export default function LandingPage() {

    return (
        <>
            {/***********************************************************
            *********************** CREMATION ***************************
            ************************************************************/}
            <CremationContainer>
                <div style={{width: "50%"}}></div>
                <img src={Woman} style={{width: 700, height: "100%"}}/>
            </CremationContainer>

            {/***********************************************************
            *********************** CAROUSEL ***************************
            ************************************************************/}
            <CarouselContainer>
                <Carousel />

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: 50 }}>
                    <Button text="SAIBA MAIS SOBRE CADA PLANO" />
                </div>
            </CarouselContainer>

            {/***********************************************************
            ************************* CARDS ****************************
            ************************************************************/}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 20, padding: 10 }}>
                <div style={{ textAlign: "center" }}>
                    <h1>Se você não tem um plano funerário,<br />quais são as suas opções?</h1>
                    <div style={{ fontSize: 20 }}>
                        Primeiro, você vai ter que arcar com despesas de última hora e também enfrentar muita burocracia.<br />
                        <b>Acompanhe aqui os serviços que estariam disponíveis:</b>
                    </div>
                </div>

                <CardContainer>
                    <Cards />
                </CardContainer>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                    <Button text="DESCUBRA O PLANO IDEAL PARA VOCÊ" />
                </div>
            </div>
        </>
    );
}
