import { IoIosArrowDroprightCircle } from "react-icons/io";
import { ContainerImg, Wrapper } from "./style";

import Arrow from "../../../Assets/LandingPage/arrow.png";

export function Button(props) {
    const { title, onClick } = props;

    return (
        <Wrapper>
            <button type='button' onClick={onClick}>
                {title}
                
                <ContainerImg>
                    <img src={Arrow} alt='logo' />
                </ContainerImg>
            </button>
        </Wrapper>

    )
}