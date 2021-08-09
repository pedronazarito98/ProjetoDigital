//Imagens ***************************************************************************
import Lottie from 'react-lottie';
import upIcon from '../../Assets/LandingPage/up.json';
import Woman from "../../Assets/LandingPage/woman.png";
import Logo from "../../Assets/LandingPage/logo.png";
import Facebook from "../../Assets/LandingPage/facebook.png";
import Instagram from "../../Assets/LandingPage/instagram.png";
import Youtube from "../../Assets/LandingPage/youtube.png";
import Linkedin from "../../Assets/LandingPage/linkedin.png";
import OldWoman from "../../Assets/LandingPage/oldWoman.png";
import Ducash from "../../Assets/LandingPage/ducash.png";
import imgHome from '../../Assets/LandingPage/imagemHome.png';
//Feature ***************************************************************************
import { useMediaQuery } from 'react-responsive'
//Componentes ***********************************************************************
import Carousel from "../../Components/LandingPage/Carousel";
import Cards from "../../Components/LandingPage/Cards";
import { VideoPlayer } from "../../Components/LandingPage/VideoPlayer";
import { SectionServices } from "../../Components/LandingPage/SectionServices";
import { Formulario } from "../../Components/LandingPage/Formulario";
import { TextInfo } from "../../Components/LandingPage/TextInfo";
import { Button } from '../../Components/LandingPage/Button';
import { NavBar } from '../../Components/LandingPage/NavBar';

//Tags Estilizadas ******************************************************************
import {
    Centralize,
    DucashContainer, DucashTextContainer, DucashIMG,
    CremationContainer, CremationImageMobileContainer, CremationTextContainer, CremationTextCard, CremationImage,
    CarouselContainer,
    CardSessionContainer, CardContainer,
    FooterContainer,
    BackgroundForm,
    WrapperTitle,
    Background, BackgroundServices
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

const defaultUpIcon = {
    loop: true,
    autoplay: true,
    animationData: upIcon,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export default function LandingPage() {
    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 1150px)' });

    return (
        <>
    <NavBar/>
            <Background id="start">
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
                    <h1>Plano <br />
                        <strong> ideal</strong>
                    </h1>
                </WrapperTitle>

                <Formulario />
            </BackgroundForm>

            {/***********************************************************
            ************************* DUCASH ****************************
            ************************************************************/}
            <DucashContainer>
                <DucashIMG src={OldWoman} alt='OldWoman' />

                <DucashTextContainer>
                    <img src={Ducash} alt='Ducash' />

                    <div>
                        <b>Cliente Grupo Zelo tem benefícios em vida com o Clube de Descontos do Ducash</b> que dá
                        descontos em farmácias, laboratórios, postos de gasolina, clínicas e vários outros
                        parceiros. Para você aproveitar a vida com mais tranquilidade.
                        <br /><br />

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <div><b>+1.500.000</b><br />Clientes<br />Atendidos</div>
                            <div style={{ height: "60px", borderRight: "2px solid #ca8211" }} />
                            <div><b>+2.100.000</b><br />Parceiros</div>
                            <div style={{ height: "60px", borderRight: "2px solid #ca8211" }} />
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
                            <h2 style={{ color: "var(--textColor)" }}>{cremationTitle01}<br />{cremationTitle02}</h2><br />
                            <div><b>{cremationBoldText}</b>{cremationText01}<br /><br /> {cremationText02}</div>
                        </CremationTextCard>
                        <br />
                        
                        <Button title='Descubra o plano ideal pra você'/>
                        
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
                <Button title='Descubra o plano ideal pra você'/>
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

                    <Button title='Descubra o plano ideal pra você'/>
            </CardSessionContainer>

            {/***********************************************************
            ************************* FOOTER ****************************
            ************************************************************/}
            <FooterContainer>
                <img src={Logo} alt="Logo do Grupo Zelo" style={{ marginTop: 20 }} />
                <br />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", marginLeft: 2, marginRight: 2, marginBottom: 20 }}>
                    <div style={{ fontSize: 15, color: "white", marginBottom: 0 }}>POLÍTICA DE PRIVACIDADE</div><br /><br />
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
                        <a href="#start">
                            <Lottie
                                options={defaultUpIcon}
                                height={80}
                                width={80}
                                style={{ marginLeft: 10 }}
                                isClickToPauseDisabled
                            />
                        </a>
                    </Centralize>
                </div>
            </FooterContainer>
        </>
    );
}
