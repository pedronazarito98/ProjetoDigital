import { CardContent, ContainerCard, ContainerImage } from "./style";


export function Card(props) {
    const {icon, title, content} = props;
    return(
        <>
            <ContainerCard>
                <ContainerImage>
                    <img src={icon} alt={icon} />
                </ContainerImage>

                <CardContent>
                    <h2>{title}</h2>
                    <span>{content}</span>
                </CardContent>
            </ContainerCard>
        </>
    )
}