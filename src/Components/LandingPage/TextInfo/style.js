import styled from "styled-components";

export const ContainerText = styled.div`
    display: flex;
    width: 100%;
    max-width: 500px;
    
    padding: 2rem;

    flex-direction: column;

    color: var(--textColor);
    
    h1{
        font-weight: normal;
        margin-bottom: 10px;
    }
    
    p {
        margin-bottom: 10px;
        line-height: 20px;
        font-size:0.9rem;

        text-align: justify;
    }

    h2 {
        margin-bottom: 20px;
        font-size: 1.2rem;
        font-weight: bold;
    }

  @media(max-width:996px) {
      max-width: 100%;

      text-align: center;
      
      align-items: center;
      justify-content: center;

      p{
          text-align: center;
      }
      
      
    //   background-color: red;
  }

`;
