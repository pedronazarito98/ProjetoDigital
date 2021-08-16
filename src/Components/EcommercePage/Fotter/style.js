import styled from "styled-components";

export const Fotter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    width: 100%;
    height: 500px;

    background-color: var(--blue);
`;

export const CallCenter = styled.div`
   display: flex; 
   flex-direction: column; 
   align-items: flex-start; 
   justify-content: center; 
   flex-wrap: wrap;
   
   width: 300px;
   height: 400px;

   color: white;
`;

export const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    color: white;

    margin-bottom: 15px;
`;