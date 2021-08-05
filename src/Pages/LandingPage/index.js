import { Background, Container, ContainerImage } from "./style";
import Carousel from "../../Components/LandingPage/Carousel";
import {Button} from "../../Components/LandingPage/Button";
import { TextInfo } from "../../Components/LandingPage/TextInfo";
import imgHome from '../../Assets/LandingPage/imagemHome.png';

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


            {/* <Carousel /> */}

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: 50 }}>
                <Button title="saiba mais sobre cada plano" />
            </div>
        </Container>

        /***********************************************************  
        ************************* CARDS ****************************
        ************************************************************/
    );
}
