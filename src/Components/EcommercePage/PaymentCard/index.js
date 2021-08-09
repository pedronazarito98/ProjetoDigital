import { Container, Price } from "./style";

export default function PaymentCardComponent(props) {

    let text = "+ R$ 60,00 de taxa de inscrição , no primeiro mês.";
    let text02 = "No cartão ou no boleto.";

    return (
        <Container>
            <Price>R$ 29,90 /MÊS</Price>
            <br/>{text}<br/><br/>{text02}
        </Container>
    )
}