import { Container, Price } from "./style";
import Zelo from "../../../Assets/EcommercePage/zelo.png";

export default function PaymentCardComponent(props) {

    let text = "+ R$ 60,00 de taxa de inscrição , no primeiro mês.";
    let text02 = "No cartão ou no boleto.";

    return (
        <Container>
            <img src={Zelo} width="50px" height="50px" style={{ marginLeft: -60, marginTop: 40 }} />

            <div style={{marginTop: -90}}>
                <Price>R$ 29,90 /MÊS</Price>
                <br />{text}<br /><br />{text02}
            </div>
        </Container>
    );
}