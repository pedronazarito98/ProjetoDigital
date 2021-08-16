import styled from 'styled-components';

export const Button = styled.button`
    
    background-color: ${props => props.primary ? 'var(--blue)' : 'var(--white)'};
    color: ${props => props.primary ? 'var(--white)' : 'var(--blue)'};
    font-weight: bold;
    border: none;
    border-radius: 5px;

    height: 50px;
    width: 320px;

    padding: 15px;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.8)
    }

`;