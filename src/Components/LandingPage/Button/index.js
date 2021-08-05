import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Wrapper } from "./style";

export function Button(props) {
    const { title, onClick } = props;

    return (
        <Wrapper>
            <button type='button' onClick={onClick}>
                {title}
                <IoIosArrowDroprightCircle style={{ color: 'var(--white)', width: 'auto', height: '20px' }} />
            </button>
        </Wrapper>

    )
}