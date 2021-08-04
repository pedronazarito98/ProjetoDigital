import styled from "styled-components";

export const CarouselContainer = styled.div`  
  display: flex;
  flex-direction: column;
  background-color: #f2f2fc;

  padding-top: 50px;
  padding-left: 200px;
  padding-right: 200px;

  @media(max-width: 1024px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-Direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;

  @media(max-width: 985px) {
    flex-direction: column;
    height: 100%;
  }
`;