// Components ****************************************************
import { Navbar } from "../../../Components/EcommercePage/Navbar";
// Sections ******************************************************
import CenterSection from "../Views/Plan/CenterSection";
import RightSection from "../Views/Plan/RightSection";
import Fotter from "../../../Components/EcommercePage/Fotter";
// Styles ********************************************************
import { Container } from "./style";
//****************************************************************

export default function PaymentPage(props) {
    return (
        <>
            {/*<Navbar />*/}
            <Container>
                <CenterSection />
                <RightSection />
                <Fotter />
            </Container>
        </>
    )
}