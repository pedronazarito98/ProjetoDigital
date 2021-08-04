import { CarouselContainer, CardContainer } from "./style";
import Carousel from "../../Components/LandingPage/Carousel";
import Button from "../../Components/LandingPage/Button";
import Cards from "../../Components/LandingPage/Cards";

export default function LandingPage() {

    return (
        <>
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
            <CardContainer>
                <Cards />
            </CardContainer>
        </>
    );
}
