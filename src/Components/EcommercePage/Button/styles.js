import styled from 'styled-components';

export const ButtonAction = styled.a`
    
    background-color:${props => props.primary ? 'var(--blue)' : 'var(--white)'};
    color: ${props => props.primary ? 'var(--white)' : 'var(--blue)'};
    font-weight: 500;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    text-align: center;

    height: 50px;
    width: 320px;

    cursor: pointer;

    padding: 15px;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.8)
    }

`;