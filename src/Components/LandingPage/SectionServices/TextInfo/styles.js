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
    
    h1{
        font-size: 2rem;
        color: var(--blue);
        font-weight: normal;
        margin-bottom: 10px;
    }
    p {
        margin-bottom: 10px;
        line-height: 20px;
    }

    h2 {
        margin-bottom: 20px;
        font-size: 1.35rem;
        font-weight: 500;
    }

    article{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px;

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
