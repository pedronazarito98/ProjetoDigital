import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    position: sticky;

    top: 8px;

    width: 300px;
    height: 200px;
    padding: 30px;
    margin-left: 10px;

    background-color:  #F9FBFF;

    @media(max-width: 1224px) {
        width: 800px;
        top: 0px;
        margin-left: 0px;
    }

`;

export const Price = styled.h1`
    color: black;
    font-weight: 800;
`;

