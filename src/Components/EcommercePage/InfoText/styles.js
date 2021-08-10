import styled from 'styled-components';

export const WrapperText = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

width: 404px;
height: 400px;
padding: 20px 2rem;
margin: 0 9rem;

h2 {
    color: var(--white);
    font-size: 48px;
    margin-bottom: 25px;
    font-weight: normal;
}

span {
    color: #ffffff8f;
    margin-bottom: 25px;
}

button {
    background-color: var(--white);
    color: var(--blue);
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
}
`;
