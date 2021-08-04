import { useState } from "react";
import Carousel from "react-multi-carousel";
import { Image, Card } from "./style";
import "react-multi-carousel/lib/styles.css";
import mark from "../../../Assets/LandingPage/mark.jpg";
import { employees } from "../../../Services/api";
import { responsive } from "../../../Mocks/LandingPage/mock";

export default function EmployeesSection() {
    const [currentCard, setCurrentCard] = useState(1);

    function CustomRightArrow({ onClick, ...rest }) {
        return (
            <button
                onClick={() => onClick()}
                aria-label="Go to next slide"
                className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
            />
        );
    }

    function CustomLeftArrow({ onClick }) {

        return (
            <button
                onClick={() => onClick()}
                aria-label="Go to previous slide"
                className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
            >
            </button>
        );
    }

    function generateCards() {
        let componentArray = [];

        employees.forEach((employee, index) => {
            componentArray.push(
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", width: "100%", height: "400px" }}>
                    <Card increase={index === currentCard ? true : false}>
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
                setCurrentCard(currentSlide - employees.length - 1);
                console.log(currentSlide - employees.length);
            }}
            infinite
            arrows
            responsive={responsive}
            autoPlay
            swipeable
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {generateCards()}
        </Carousel>
    );
}