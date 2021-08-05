import styled from "styled-components";

export const Container = styled.div`  
  display: flex;
  flex-direction: column;
  background-color: #f2f2fc;

  width: 100%;
  // height: 100vh;
  margin: 0 auto;

  
`;


export const Background = styled.section`
  width: 100%;
  height: 500px;
  display: flex;

  background-color: var(--gold);

`


export const BackgroundServices = styled.section`
  width: 100%;
  height: 700px;
  display: flex;

  background-color:#eadbca;

`

export const ContainerImage = styled.div`
  img{
    height: 500px;
    width: auto;
    filter: 'brightness(0.9)',
  }
`
