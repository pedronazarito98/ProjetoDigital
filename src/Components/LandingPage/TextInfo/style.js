import styled from "styled-components";

export const ContainerText = styled.div`
    display: flex;
    width: 500px;
    height: 500px;
    
    padding: 20px 2rem;
    margin: 34px 10px 0px 212px;

    flex-direction: column;
    align-items: flex-start;
    align-content:flex-start;
    justify-content:flex-start;

    color: var(--textColor);
    
    h1{
        font-size: 1.5rem;
        color: var(--blue);
        font-weight: normal;
        margin-bottom: 10px;
    }
    p {
        margin-bottom: 10px;
        line-height: 20px;
        font-size:0.9rem;
    }

    h2 {
        margin-bottom: 20px;
        font-size: 1.2rem;
        font-weight: bold;
    }
`
