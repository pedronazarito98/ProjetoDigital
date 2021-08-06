//Imagens ***************************************************************************
import Woman from "../../Assets/LandingPage/woman.png";
import Logo from "../../Assets/LandingPage/logo.png";
import Facebook from "../../Assets/LandingPage/facebook.png";
import Instagram from "../../Assets/LandingPage/instagram.png";
import Youtube from "../../Assets/LandingPage/youtube.png";
import Linkedin from "../../Assets/LandingPage/linkedin.png";
import OldWoman from "../../Assets/LandingPage/oldWoman.png";
import Ducash from "../../Assets/LandingPage/ducash.png";
import { Button, Checkbox, Form } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';

//Feature ***************************************************************************
import { useMediaQuery } from 'react-responsive'
//Componentes ***********************************************************************
import Carousel from "../../Components/LandingPage/Carousel";
import ButtonPSP from "../../Components/LandingPage/ButtonPSP";
import Cards from "../../Components/LandingPage/Cards";
//Tags Estilizadas ******************************************************************
import {
    Centralize,
    DucashContainer, DucashTextContainer,
    CremationContainer, CremationImageMobileContainer, CremationTextContainer, CremationTextCard, CremationImage,
    CarouselContainer,
    CardSessionContainer, CardContainer,
    FooterContainer,
    BackgroundForm,
    WrapperTitle
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
import { Background, BackgroundServices } from "./style";

import { TextInfo } from "../../Components/LandingPage/TextInfo";
import imgHome from '../../Assets/LandingPage/imagemHome.png';
import { VideoPlayer } from "../../Components/LandingPage/VideoPlayer";
import { SectionServices } from "../../Components/LandingPage/SectionServices";
import { Formulario } from "../../Components/LandingPage/Formulario";

export default function LandingPage() {
    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 1150px)' });

    var settings = {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <>
            <Background>
                <TextInfo />
                
                    <img src={imgHome} alt='' />
                
            </Background>

            <Background>
                <VideoPlayer />
            </Background>

            <BackgroundServices>
                <SectionServices />
            </BackgroundServices>

            <BackgroundForm>
                <WrapperTitle>
                    <span>Você está a um passo de conhecer o seu</span>
                    <h1>Plano <br/>
                        <strong> ideal</strong> 
                    </h1>
                </WrapperTitle>

                <Formulario/>
            </BackgroundForm>
            <DucashContainer>
                <img src={OldWoman} width="381px" height="504px" alt='OldWoman' />
                <DucashTextContainer>

                    <img src={Ducash} alt='Ducash'/>

                    <div>
                        <b>Cliente Grupo Zelo tem benefícios em vida com o Clube de Descontos do Ducash</b> que dá
                        descontos em farmácias, laboratórios, postos de gasolina, clínicas e vários outros
                        parceiros. Para você aproveitar a vida com mais tranquilidade.
                        <br /><br />

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <div><b>+1.500.000</b><br />Clientes<br />Atendidos</div>
                            <div style={{ height: "80px", borderRight: "2px solid #ca8211" }} />
                            <div><b>+2.100.000</b><br />Parceiros</div>
                            <div style={{ height: "80px", borderRight: "2px solid #ca8211" }} />
                            <div><b>+600</b><br />Cidades<br />Atendidas</div>
                        </div>
                    </div>
                </DucashTextContainer>
            </DucashContainer>

            {/***********************************************************
            *********************** CREMATION ***************************
            ************************************************************/}
            {!isTabletOrMobile ?
                <>
                    <Centralize style={{ marginTop: 10 }}>
                        <CremationTextContainer>
                            <h2>{cremationTitle01}<br />{cremationTitle02}</h2><br />
                            <div>
                                <b>{cremationBoldText}</b>
                                {cremationText01}
                                <br /><br />
                                {cremationText02}
                            </div>
                        </CremationTextContainer>
                    </Centralize>

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
                            <h2 style={{ color: "#0D1D86" }}>{cremationTitle01}<br />{cremationTitle02}</h2><br />
                            <div><b>{cremationBoldText}</b>{cremationText01}<br /><br /> {cremationText02}</div>
                        </CremationTextCard>
                        <br />
                        <Centralize style={{ marginTop: 10 }}>
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
                <img src={Logo} alt="Logo do Grupo Zelo" style={{ marginTop: 20 }} />
                <br />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", marginLeft: 2, marginRight: 2, marginBottom: 20 }}>
                    <div style={{ fontSize: 15, color: "white", marginBottom: 20 }}>POLÍTICA DE PRIVACIDADE</div><br /><br />
                    <Centralize>
                        <a href="https://www.instagram.com" style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", width: 50, height: 50, borderRadius: 100, marginLeft: 20 }}>
                            <img src={Instagram} alt="Instagram do Grupo Zelo" style={{ width: 40, height: 40 }} />
                        </a>
                        <a href="https://www.youtube.com" style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", width: 50, height: 50, borderRadius: 100, marginLeft: 10 }}>
                            <img src={Youtube} alt="Youtube do Grupo Zelo" style={{ width: 35, height: 35 }} />
                        </a>
                        <a href="https://www.facebook.com" style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", width: 50, height: 50, borderRadius: 100, marginLeft: 10 }}>
                            <img src={Facebook} alt="Facebook do Grupo Zelo" style={{ width: 35, height: 35 }} />
                        </a>
                        <a href="https://www.linkedin.com" style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", width: 50, height: 50, borderRadius: 100, marginLeft: 10 }}>
                            <img src={Linkedin} alt="Linkedin do Grupo Zelo" style={{ width: 30, height: 30 }} />
                        </a>
                    </Centralize>
                </div>
            </FooterContainer>
        </>
    );
}
