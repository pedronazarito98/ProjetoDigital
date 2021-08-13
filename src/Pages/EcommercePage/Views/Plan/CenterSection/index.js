import { Container } from "./style";

import PaymentDescription from "../../../../../Components/EcommercePage/PaymentDescription";
import PaymentForm from "../../../../../Components/EcommercePage/PaymentForm";
import TopicsInformation from "../../../../../Components/EcommercePage/TopicsInformation";
import InformativeTexts from "../../../../../Components/EcommercePage/InformativeTexts";
import PaymentComments from "../../../../../Components/EcommercePage/PaymentComments";

export default function CenterSection(props) {

    return (
        <Container>
            <PaymentDescription />
            <PaymentForm />
            <TopicsInformation />
            <InformativeTexts />
            <PaymentComments />
        </Container>
    )
}