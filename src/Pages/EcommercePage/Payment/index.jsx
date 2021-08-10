// Components ****************************************************
import { Navbar } from "../../../Components/EcommercePage/Navbar";
// Sections ******************************************************
import CenterSection from "../../../Views/EcommercePage/Payment/CenterSection";
import RightSection from "../../../Views/EcommercePage/Payment/RightSection";
// Styles ********************************************************
import { Container } from "./style";
//****************************************************************

export default function PaymentPage(props) {
    return (
        <>
            <Navbar />

            <Container>
                <CenterSection />
                <RightSection />
            </Container>
        </>
    )
}