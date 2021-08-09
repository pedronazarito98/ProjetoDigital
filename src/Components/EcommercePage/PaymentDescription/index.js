import { Title, Banner, Content, Rectangle } from "./style";
import banner from "../../../Assets/EcommercePage/banner.png";

export default function PaymentDescriptionComponent(props) {

    let content = [
        "Você garante a melhor cobertura individual, a partir de uma mensalidade, podendo acrescentar dependentes extras, sejam eles familiares ou não, por um acréscimo de R$ 3 (Até 65 anos) ou R$ 10 (Acima de 65 anos) por pessoa no mês.",
        "Ou seja, se você deseja um plano que comtemple você como titular e poucos dependentes, com ou sem grau de parentesco, essa opção traz um ótimo custo-benefício."
    ];

    let rectangle = [
        "Até 14 dependentes COM ou SEM grau de parentesco",
        "Até 64 anos R$ 3,00 / por mês por pessoa",
        "Apartir de 65 anos R$ 10,00 / por mês por pessoa"
    ];

    return (
        <>
            <Title>Zelo Individual</Title>
            <Banner src={banner} alt="Banner do Zelo Individual" />

            <Content>{content[0]}</Content>
            <Content>{content[1]}</Content>

            <Rectangle>{rectangle[0]}</Rectangle>
            <Rectangle>{rectangle[1]}</Rectangle>
            <Rectangle>{rectangle[2]}</Rectangle>
        </>
    )
}