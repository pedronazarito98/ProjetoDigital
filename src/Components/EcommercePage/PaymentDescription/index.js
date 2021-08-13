import { Title, Banner, Content, Rectangle } from "./style";
import { title, banner, content, rectangle } from "../../../Mocks/EcommercePage/Plan";

export default function PaymentDescriptionComponent(props) {

    function getContent() {
        let array = [];

        content.forEach(hit => {
            array.push(<Content>{hit}</Content>);
        });

        return array;
    }

    function getTags() {
        let array = [];

        rectangle.forEach(hit => {
            array.push(<Rectangle>{hit}</Rectangle>);
        });

        return array;
    }

    return (
        <>
            <Title>{title}</Title>
            <Banner src={banner} alt="Banner do Zelo Individual" />

            {getContent()}
            {getTags()}
        </>
    )
}