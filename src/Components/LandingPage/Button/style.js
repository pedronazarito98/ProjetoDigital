import styled from "styled-components";



export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button{
        width: 100%;
        max-width:400px;
    height: 40px;
    background-color: var(--green);
    padding: 10px;
    border: none;
    border-radius: 50px;

    color: var(--white);
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-around;
    

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9)
    }
    }

    img{
        height: 15px;
        width: 15px;

    }
`
