import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: #8cc539;
    color: white;

    width: 400px;
    height: 45px;
    border-radius: 20px;
    
    transition: 0.25s;
    margin-left: 20px;
    margin-right: 20px;

    &:hover{
        background-color: #7bad33; 
    }
`;

export const Image = styled.img``;