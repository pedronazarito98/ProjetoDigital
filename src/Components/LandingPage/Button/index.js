import { Container, Image } from "./style";
import Arrow from "../../../Assets/LandingPage/arrow.png";

export default function Button(props) {
    return (
        <Container>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", width: "85%" }}>
                <b>{props.text}</b>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#7bad33", width: 30, height: 30, borderRadius: 50 }}>
                <Image src={Arrow} />
            </div>
        </Container>
    );
}