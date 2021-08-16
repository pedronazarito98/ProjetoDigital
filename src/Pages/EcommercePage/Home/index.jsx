import { InfoText } from "../../../Components/EcommercePage/InfoText";
import { Navbar } from "../../../Components/EcommercePage/Navbar";
import { ContainerImg, Header, SectionCard, SectionInfoPlanos, SectionViewVideo, TitleSectionCards } from "./style";
import imgHome from '../../../Assets/EcommercePage/imgHome.png';
import { Card } from "../../../Components/EcommercePage/Card";
import { DadosCard } from "../../../Mocks/EcommercePage/DataCards";
import { InfoVideo } from "../Views/Home/InfoVideo";
import { InfoPlanos } from "../Views/Home/InfoPlanos";



export function HomeEcommerce() {
    return (
        <>
            <Navbar />

            <Header>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="#ecedf8" points="0,100 100,0 100,100" />
                </svg>

                <InfoText />

                <ContainerImg>
                    <img src={imgHome} alt='imagem banner' />
                </ContainerImg>
            </Header>


            <TitleSectionCards>Qual a importância de um plano funerário?</TitleSectionCards>
            <SectionCard>
                {DadosCard.map((props) =>
                    <Card
                        icon={props.imagem}
                        title={props.title}
                        content={props.content}
                    />

                )}
            </SectionCard>

            <SectionViewVideo>

                <InfoVideo />
            </SectionViewVideo>

            <SectionInfoPlanos>
                <InfoPlanos/>
            </SectionInfoPlanos>



        </>
    )
}