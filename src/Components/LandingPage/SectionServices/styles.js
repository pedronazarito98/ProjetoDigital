import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    width: 100%;
    max-width:1350px;
`

export const ContainerIcones = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    width: 100%;
    max-width: 600px;

    @media (max-width: 954px) {
        margin-top: 30px;
    }
`