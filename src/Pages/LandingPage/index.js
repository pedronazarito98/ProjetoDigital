//Imagens ***************************************************************************
import Woman from "../../Assets/LandingPage/woman.png";
//Feature ***************************************************************************
import { useMediaQuery } from 'react-responsive'
//Componentes ***********************************************************************
import Carousel from "../../Components/LandingPage/Carousel";
import Button from "../../Components/LandingPage/Button";
import Cards from "../../Components/LandingPage/Cards";
//Tags Estilizadas ******************************************************************
import {
    CremationContainer, CremationTextContainer, CremationTextCard, CremationImage,
    CarouselContainer,
    CardContainer
} from "./style";
//Mocks *****************************************************************************
import {
    cremationTitle01,
    cremationTitle02,
    cremationBoldText,
    cremationText01,
    cremationText02
} from "../../Mocks/LandingPage/mock.js";
//***********************************************************************************

export default function LandingPage() {
    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 1150px)' })

    return (
        <>
            {/***********************************************************
            *********************** CREMATION ***************************
            ************************************************************/}
            <CremationContainer>

                {isTabletOrMobile ?
                    <CremationTextContainer>
                        <CremationTextCard>
                            <h2>{cremationTitle01}<br />{cremationTitle02}</h2>
                            <div><b>{cremationBoldText}</b>{cremationText01}<br /><br /> {cremationText02}</div>
                        </CremationTextCard>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Button text="SAIBA MAIS SOBRE CADA PLANO" />
                        </div>
                    </CremationTextContainer>
                    : <div />
                }

                <CremationImage src={Woman} />
            </CremationContainer>

            {/***********************************************************
            *********************** CAROUSEL ***************************
            ************************************************************/}
            <CarouselContainer>
                <Carousel />

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: 50, marginBottom: 50 }}>
                    <Button text="SAIBA MAIS SOBRE CADA PLANO" />
                </div>
            </CarouselContainer>

            {/***********************************************************
            ************************* CARDS ****************************
            ************************************************************/}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 20, padding: 10, marginBottom: 50 }}>
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
