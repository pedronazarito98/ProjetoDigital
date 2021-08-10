// Components ****************************************************
import { Navbar } from "../../../Components/EcommercePage/Navbar";
// Sections ******************************************************
import CenterSection from "../Views/Payment/CenterSection";
import RightSection from "../Views/Payment/RightSection";
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