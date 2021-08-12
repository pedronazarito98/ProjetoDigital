import { useState } from "react";
import Carousel from "react-multi-carousel";
import { Image, Card, EmployeeDescription } from "./style";
import "react-multi-carousel/lib/styles.css";
import { responsive, employees } from "../../../Mocks/LandingPage/mock";

export default function EmployeesSection() {
    const [currentCard, setCurrentCard] = useState(employees.length - 1);

    function generateCards() {
        let componentArray = [];

        employees.forEach((employee, index) => {
            let justify = "center";
            let increase = false;

            if (currentCard === 0 && index === 1) { justify = "flex-end"; increase = false; }
            if (currentCard === 0 && index === 2) { justify = "center"; increase = true; }
            if (currentCard === 0 && index === 3) { justify = "flex-start"; increase = false; }

            if (currentCard === 1 && index === 2) { justify = "flex-end"; increase = false; }
            if (currentCard === 1 && index === 3) { justify = "center"; increase = true; }
            if (currentCard === 1 && index === 0) { justify = "flex-start"; increase = false; }

            if (currentCard === 2 && index === 3) { justify = "flex-end"; increase = false; }
            if (currentCard === 2 && index === 0) { justify = "center"; increase = true; }
            if (currentCard === 2 && index === 1) { justify = "flex-start"; increase = false; }

            if (currentCard === 3 && index === 0) { justify = "flex-end"; increase = false; }
            if (currentCard === 3 && index === 1) { justify = "center"; increase = true; }
            if (currentCard === 3 && index === 2) { justify = "flex-start"; increase = false; }

            //=====================================================================================

            componentArray.push(
                <div style={{ display: "flex", alignItems: "center", justifyContent: justify, width: "100%", height: "400px" }}>
                    <Card increase={increase}>
                        <Image src={employee.img} alt="Texto Alternativo" />
                        <h3 style={{ color: "#45536b" }}>{employee.name}</h3>
                        <EmployeeDescription>
                            {employee.description}
                        </EmployeeDescription>
                    </Card>
                </div>
            )
        });

        return componentArray;
    }

    return (
        <Carousel
            beforeChange={(nextSlide, { currentSlide, onMove }) => {
                setCurrentCard(currentSlide - employees.length);
                generateCards();
            }}
            infinite
            responsive={responsive}
            autoPlay
            swipeable
            autoPlaySpeed={10000}
            removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {generateCards()}
        </Carousel>
    );
}
