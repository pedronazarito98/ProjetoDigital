import styled from "styled-components";

export const Centralize = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

/*************************************************************************************
************************************ CREMAÇÃO ****************************************
*************************************************************************************/
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

export const CremationMobileContainer = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const CremationImageMobileContainer = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 300px;

  background: #FFFFFF;
  background: -webkit-radial-gradient(top right, #FFFFFF, #48669D);
  background: -moz-radial-gradient(top right, #FFFFFF, #48669D);
  background: radial-gradient(to bottom left, #FFFFFF, #48669D);

  @media(max-width: 1150px) {
    height: 450px;
  }

  @media(max-width: 565px) {
    height: 350px;
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

  @media(max-width: 1150px) {
    text-align: center;
    height: 30%;
    padding-top: 1%;
    padding-bottom: 5%;
    padding-left:  5%;
    padding-right:  5%;
  }
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
      width: 350px;
    }
`;

/*************************************************************************************
************************************ CAROUSEL ****************************************
*************************************************************************************/
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

/*************************************************************************************
*************************************** CARDS ****************************************
*************************************************************************************/
export const CardSessionContainer = styled.div`
  display: flex;
  flex-Direction: column;
  align-items: center;
  justify-content: center;

  color:#45536b;

  margin-top: 20px;
  padding: 10px;
  margin-bottom: 50px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-Direction: row;
  align-items: center;
  justify-content: center;

  background-color: white;

  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;

  color:#45536b;

  @media(max-width: 985px) {
    flex-direction: column;
    height: 100%;
  }
`;

/*************************************************************************************
*************************************** FOOTER ***************************************
*************************************************************************************/
export const FooterContainer = styled.div`
  display: flex;
  flex-Direction: row;
  align-items: center;
  justify-content: space-around;

  background-color: #203F89;
  height: 200px;

  @media(max-width: 985px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

/*************************************************************************************
*************************************** OTHERS ***************************************
*************************************************************************************/
export const Background = styled.section`
  width: 100%;
  height: 500px;
  display: flex;

  background-color: var(--gold);

`;

export const BackgroundServices = styled.section`
  width: 100%;
  height: 700px;
  display: flex;

  background-color:#eadbca;
`;

export const ContainerImage = styled.div`
  img{
    height: 500px;
    width: auto;
    filter: 'brightness(0.9)';
  }
`;
