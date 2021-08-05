import { Background, BackgroundServices, Container, ContainerImage } from "./style";

import { TextInfo } from "../../Components/LandingPage/TextInfo";
import imgHome from '../../Assets/LandingPage/imagemHome.png';
import { VideoPlayer } from "../../Components/LandingPage/VideoPlayer";
import { SectionServices } from "../../Components/LandingPage/SectionServices";

export default function LandingPage() {

    return (
        /***********************************************************  
        *********************** CAROUSEL ***************************
        ************************************************************/
        <Container>

            <Background>
                <TextInfo/>
                <ContainerImage>
                    <img src={imgHome} alt=''/>
                </ContainerImage>
            </Background>

            <Background>
                <VideoPlayer/>
            </Background>

            <BackgroundServices>
                <SectionServices/>
            </BackgroundServices>


            {/* <Carousel /> */}

            {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: 50 }}>
                <Button title="saiba mais sobre cada plano" />
            </div> */}
        </Container>

        /***********************************************************  
        ************************* CARDS ****************************
        ************************************************************/
    );
}
