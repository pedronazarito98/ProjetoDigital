//Imagens ***************************************************************************
import Woman from "../../Assets/LandingPage/woman.png";
import Logo from "../../Assets/LandingPage/logo.png";
import Facebook from "../../Assets/LandingPage/facebook.png";
import Instagram from "../../Assets/LandingPage/instagram.png";
import Youtube from "../../Assets/LandingPage/youtube.png";
//Feature ***************************************************************************
import { useMediaQuery } from 'react-responsive'
//Componentes ***********************************************************************
import Carousel from "../../Components/LandingPage/Carousel";
import { Button } from "../../Components/LandingPage/Button";
import ButtonPSP from "../../Components/LandingPage/ButtonPSP";
import Cards from "../../Components/LandingPage/Cards";
//Tags Estilizadas ******************************************************************
import {
    Centralize,
    CremationContainer, CremationMobileContainer, CremationImageMobileContainer, CremationTextContainer, CremationTextCard, CremationImage,
    CarouselContainer,
    CardSessionContainer, CardContainer,
    FooterContainer
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
import { Background, BackgroundServices, ContainerImage } from "./style";

import { TextInfo } from "../../Components/LandingPage/TextInfo";
import imgHome from '../../Assets/LandingPage/imagemHome.png';
import { VideoPlayer } from "../../Components/LandingPage/VideoPlayer";
import { SectionServices } from "../../Components/LandingPage/SectionServices";

export default function LandingPage() {
    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 1150px)' })

    return (
        <>
            <Background>
                <TextInfo />
                <ContainerImage>
                    <img src={imgHome} alt='' />
                </ContainerImage>
            </Background>

            <Background>
                <VideoPlayer />
            </Background>

            <BackgroundServices>
                <SectionServices />
            </BackgroundServices>
            {/***********************************************************
            *********************** CREMATION ***************************
            ************************************************************/}
            {!isTabletOrMobile ?
                <>
                    <CremationMobileContainer>
                        <CremationTextContainer>
                            <CremationTextCard>
                                <h2>{cremationTitle01}<br />{cremationTitle02}</h2><br />
                                <div>
                                    <b>{cremationBoldText}</b>
                                    {cremationText01}
                                    <br /><br />
                                    {cremationText02}
                                </div>
                            </CremationTextCard>
                        </CremationTextContainer>
                    </CremationMobileContainer>

                    <CremationImageMobileContainer>
                        <CremationImage src={Woman} />
                    </CremationImageMobileContainer>
                </>
                : <div />
            }

            {isTabletOrMobile ?
                <CremationContainer>
                    <CremationTextContainer>
                        <CremationTextCard>
                            <h2>{cremationTitle01}<br />{cremationTitle02}</h2><br />
                            <div><b>{cremationBoldText}</b>{cremationText01}<br /><br /> {cremationText02}</div>
                        </CremationTextCard>

                        <Centralize style={{ marginTop: 10}}>
                            <ButtonPSP text="DESCUBRA O PLANO IDEAL PARA VOCÊ" />
                        </Centralize>
                    </CremationTextContainer>

                    <CremationImage src={Woman} />
                </CremationContainer>
                : <div />
            }

            {/***********************************************************
            *********************** CAROUSEL ***************************
            ************************************************************/}
            <CarouselContainer>
                <Carousel />

                <Centralize style={{ marginTop: 30, marginBottom: 50 }}>
                    <ButtonPSP text="SAIBA MAIS SOBRE CADA PLANO" />
                </Centralize>
            </CarouselContainer>

            {/***********************************************************
            ************************* CARDS ****************************
            ************************************************************/}
            <CardSessionContainer>
                <div style={{ textAlign: "center" }}>
                    <h2>Se você não tem um plano funerário,<br />quais são as suas opções?</h2>
                    <div style={{ fontSize: 17, marginTop: 10 }}>
                        Primeiro, você vai ter que arcar com despesas de última hora e também enfrentar muita burocracia.<br />
                        <b>Acompanhe aqui os serviços que estariam disponíveis:</b>
                    </div>
                </div>

                <CardContainer>
                    <Cards />
                </CardContainer>

                <Centralize>
                    <ButtonPSP text="DESCUBRA O PLANO IDEAL PARA VOCÊ" />
                </Centralize>
            </CardSessionContainer>

            {/***********************************************************
            ************************* FOOTER ****************************
            ************************************************************/}
            <FooterContainer>
                <img src={Logo} alt="Logo do Grupo Zelo" />
                <br />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginLeft: 2, marginRight: 2 }}>
                    <div style={{ fontSize: 15, color: "white" }}>POLÍTICA DE PRIVACIDADE</div>
                    <a href="https://www.instagram.com" style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", width: 50, height: 50, borderRadius: 100, marginLeft: 20 }}>
                        <img src={Instagram} alt="Logo do Grupo Zelo" style={{ width: 40, height: 40 }} />
                    </a>
                    <a href="https://www.youtube.com" style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", width: 50, height: 50, borderRadius: 100, marginLeft: 10 }}>
                        <img src={Youtube} alt="Logo do Grupo Zelo" style={{ width: 35, height: 35 }} />
                    </a>
                    <a href="https://www.facebook.com" style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", width: 50, height: 50, borderRadius: 100, marginLeft: 10 }}>
                        <img src={Facebook} alt="Logo do Grupo Zelo" style={{ width: 35, height: 35 }} />
                    </a>
                </div>
            </FooterContainer>
        </>
    );
}
