// Components ****************************************************
import Navbar from "../../../Components/EcommercePage/Navbar";
// Sections ******************************************************
import CenterSection from "./Sections/CenterSection";
import RightSection from "./Sections/RightSection";
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