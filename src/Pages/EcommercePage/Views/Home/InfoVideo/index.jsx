
import { ButtonAction } from "../../../../../Components/EcommercePage/Button/styles";
import { ContainerInfoVideo, ContainerVideo, SectionVideo, TitleInfo, WrapperCard, WrapperCardColor } from "./style";


export function InfoVideo() {
    return (
        <>
            <WrapperCard>
                <TitleInfo>
                    <h1>Conte com a melhor e maior assistência
                        funerária do Brasil.</h1>
                </TitleInfo>

                <WrapperCardColor>
                    <li> <strong>+ 2 milhões </strong> de associados</li>
                    <li> <strong>Cobertura </strong> Nacional</li>
                    <li> <strong>+ 150 </strong> unidades própias</li>
                </WrapperCardColor>
            </WrapperCard>


            <SectionVideo>
                <ContainerVideo>
                    <iframe
                        width="539"
                        height="315"
                        src="https://www.youtube.com/embed/JGvGOQrERnI"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media;
                        gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </ContainerVideo>

                <ContainerInfoVideo>
                    <h2>Nosso papel é zelar
                        por você e a todos que ama.</h2>
                    <ButtonAction primary>Conheça nossos planos</ButtonAction>
                </ContainerInfoVideo>
            </SectionVideo>
        </>



    )
}