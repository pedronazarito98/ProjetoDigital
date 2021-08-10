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
        padding: 10px;

        background-color: var(--green);
        border: none;
        border-radius: 50px;
        
        color: var(--white);
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.8rem;

        display: flex;
        align-items: center;
        justify-content: space-around;
        
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }

        @media (max-width: 320px) {
            font-size: 0.8rem;
            width: 300px;
        }

    }

   

    
`

export const ContainerImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(123 173 51 / 60%);
    width:30px;
    height:30px;
    border-radius: 50px;

    img {
        height:15px !important; 
        width:15px ;
    }
`
