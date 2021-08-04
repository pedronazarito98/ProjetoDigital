import { Container } from "./style";
import Carousel from "../../Components/LandingPage/Carousel";
import Button from "../../Components/LandingPage/Button";

export default function EmployeesSection() {

    return (
        <Container>
            <Carousel />

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: 50 }}>
                <Button text="SAIBA MAIS SOBRE CADA PLANO" />
            </div>
        </Container>
    );
}