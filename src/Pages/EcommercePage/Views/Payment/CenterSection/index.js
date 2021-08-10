import { Container } from "./style";

import PaymentDescription from "../../../../../Components/EcommercePage/PaymentDescription";
import PaymentForm from "../../../../../Components/EcommercePage/PaymentForm";

export default function CenterSection(props) {

    return (
        <Container>
            <PaymentDescription />
            <PaymentForm />
        </Container>
    )
}