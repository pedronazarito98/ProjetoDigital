import styled from "styled-components";

export const ContainerText = styled.div`
    display: flex;
    width: 500px;
    height: 500px;
    
    // padding: 5px 2rem;
    margin: 34px 10px 0px 212px;

    flex-direction: column;
    align-items: flex-start;
    align-content:flex-start;
    justify-content:flex-start;

    color: var(--textColor);
    
    h1{
        font-size: 1.5rem;
        color: var(--blue);
        font-weight: bold;
        margin-bottom: 10px;
    }
    p {
        margin-bottom: 10px;
        line-height: 20px;
        font-size: 1rem;
    }

    h2 {
        margin-bottom: 20px;
        font-size: 1rem;
        font-weight: 500;
    }

    article{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 15px;

        svg{
            height: 75px;
            width: 135px;
            border-radius:50px;
            padding: 10px;
            border: 3px solid var(--gold);
            margin-right: 10px;
            color: var(--blue);
        }
    }
`
