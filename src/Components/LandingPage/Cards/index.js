import { Card, Image, Text } from "./style";
import { plans } from "../../../Services/api";
import title from "../../../Assets/LandingPage/title.png";

export default function Cards() {

    function GenerateCards() {
        let componentArray = [];

        plans.forEach(plan => {
            componentArray.push(
                <Card>
                    <Image src={title} alt={plan.title} />
                    <Image src={plan.img} alt={plan.title} style={{ marginLeft: -239, marginBottom: 23}}/>

                    <h3 style={{ marginTop: -58, marginLeft: 35, color: "#101c85" }}>{plan.title}</h3>

                    <Text>
                        {plan.text}
                    </Text>
                </Card>
            )
        });

        return componentArray;
    }

    return GenerateCards();
}