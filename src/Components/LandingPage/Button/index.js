import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Wrapper } from "./style";

import Arrow from "../../../Assets/LandingPage/arrow.png";

export function Button(props) {
    const { title, onClick } = props;

    return (
        <Wrapper>
            <button type='button' onClick={onClick}>
                {title}
                
                <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    backgroundColor: "rgb(123 173 51 / 60%)", 
                    width: 30,
                     height: 30, 
                     borderRadius: 50 }}>

               <img src={Arrow} alt='logo' />
                </div>
            </button>
        </Wrapper>

    )
}