import { Title, Content, Line} from "./style";

export default function PaymentDescriptionComponent(props) {

    return (
        <>
            <Title>Complemente seu plano</Title>
            <Content>
                Cremação
                <Line />
                Idade do Titular
                <Line />
                Cadastrar Dependentes
                <Line />
            </Content>
        </>
    )
}