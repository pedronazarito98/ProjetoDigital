import styled from "styled-components";

export const CremationContainer = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #48659D;
  height: 600px;

  background: #48659D;
  background: -webkit-linear-gradient(bottom left, #48659D, #CCD4E2);
  background: -moz-linear-gradient(bottom left, #48659D, #CCD4E2);
  background: linear-gradient(to top right, #48659D, #CCD4E2);

  @media(max-width: 1024px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

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
  margin-bottom: 30px;

  @media(max-width: 985px) {
    flex-direction: column;
    height: 100%;
  }
`;