import styled from "styled-components";

export const ContainerText = styled.div`
    display: flex;
    width: 100%;
    max-width: 500px;


    
    padding: 10px;

    flex-direction: column;
    align-items: flex-start;
    align-content:flex-start;
    justify-content:flex-start;

    color: var(--textColor);
    
    h1{
        font-size: 1.5rem;
        color: var(--textColor);
        font-weight: bold;
        margin-bottom: 10px;
    }
    p {
        margin-bottom: 10px;
        line-height: 20px;
        font-size: 0.9rem;
        color: var(--textColor);
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

        span{
            font-size: 0.9rem;
        }

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
    @media(max-width:996px) {
        max-width: 100%;
  
        text-align: center;
        
        align-items: center;
        justify-content: center;
  
        p{
            text-align: center;
        }
    }

   
`;
