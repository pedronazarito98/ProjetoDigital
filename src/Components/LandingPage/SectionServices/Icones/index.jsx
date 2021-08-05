import { Wrapper, Icon } from "./styles";


export function Icones(props) {
    const { icons, text } = props;
    return (
        <Wrapper>
            <Icon>
                {icons}
            </Icon>
            <span>
                {text}
            </span>
        </Wrapper>
    )
}