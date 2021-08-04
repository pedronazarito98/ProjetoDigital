import Carousel from "react-multi-carousel";
import { Image, Card } from "./style";
import "react-multi-carousel/lib/styles.css";
import mark from "../../../Assets/LandingPage/mark.jpg";
import { employees } from "../../../Services/api";
import { responsive } from "../../../Mocks/LandingPage/mock";

export default function EmployeesSection() {

    function generateCards() {
        let componentArray = [];

        employees.forEach(employee => {
            componentArray.push(
                <Card>
                    <Image src={mark} alt="Texto Alternativo" />
                    <h3>{employee.name}</h3>
                    <div style={{ textAlign: "center", padding: 10 }}>
                        {employee.description}
                    </div>
                </Card>
            )
        });

        return componentArray;
    }

    return (
        <Carousel
            arrows
            infinite
            responsive={responsive}
            autoPlay
            swipeable
        >
            {generateCards()}
        </Carousel>
    );
}