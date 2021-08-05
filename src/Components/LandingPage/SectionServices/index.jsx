
import { DataIcons } from "../../../Mocks/LandingPage/mock";
import { Icones } from "./Icones";
import { Container, ContainerIcones } from "./styles";
import { TextService } from "./TextInfo";



export function SectionServices() {
    return (
        <>
            <Container>

                <TextService />

                <ContainerIcones>

                    {DataIcons.map((props) =>

                        <Icones
                            icons={props.icon}
                            text={props.content}
                        />
                    )}
                </ContainerIcones>
            </Container>
        </>
    )
}