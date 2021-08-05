import styled from "styled-components";

export const CremationContainer = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #48659D;
  height: 600px;

  background: #FFFFFF;
  background: -webkit-radial-gradient(top right, #FFFFFF, #48669D);
  background: -moz-radial-gradient(top right, #FFFFFF, #48669D);
  background: radial-gradient(to bottom left, #FFFFFF, #48669D);

  @media(max-width: 1150px) {
    flex-direction: column;
    height: 400px;
  }

  @media(max-width: 565px) {
    flex-direction: column;
    height: 300px;
  }
`;

export const CremationTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  text-align: justify;

  padding-top: 10%;

  height: 100%;
  width: 50%;
`;

export const CremationTextCard = styled.div`
    margin-bottom: 20px;
    width: 345px;
`;

export const CremationImage = styled.img`
    width: 700px;
    height: 100%;

    @media(max-width: 1150px) {
      width: 500px;
    }

    @media(max-width: 565px) {
      width: 320px;
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
  margin-bottom: 50px;

  @media(max-width: 985px) {
    flex-direction: column;
    height: 100%;
  }
`;