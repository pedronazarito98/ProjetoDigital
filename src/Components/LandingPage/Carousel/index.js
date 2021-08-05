import { useState } from "react";
import Carousel from "react-multi-carousel";
import { Image, Card } from "./style";
import "react-multi-carousel/lib/styles.css";
import mark from "../../../Assets/LandingPage/mark.jpg";
import { employees } from "../../../Services/api";
import { responsive } from "../../../Mocks/LandingPage/mock";

export default function EmployeesSection() {
    const [currentCard, setCurrentCard] = useState(0);

    function generateCards() {
        let componentArray = [];

        employees.forEach((employee, index) => {
            componentArray.push(
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "400px"}}>
                    <Card increase={index - 1 === currentCard ? true : false}>
                        <Image src={mark} alt="Texto Alternativo" />
                        <h3>{employee.name}</h3>
                        <div style={{ textAlign: "center", padding: 10 }}>
                            {employee.description}
                        </div>
                    </Card>
                </div>
            )
        });

        return componentArray;
    }

    return (
        <Carousel
            beforeChange={(nextSlide, { currentSlide, onMove }) => {
                setCurrentCard(nextSlide - employees.length);
                console.log(nextSlide - employees.length);
            }}
            infinite
            arrows
            responsive={responsive}
            autoPlay
            swipeable
            removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {generateCards()}
        </Carousel>
    );
}