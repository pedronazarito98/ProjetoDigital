import styled from "styled-components";

export const Centralize = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

/*************************************************************************************
************************************ DUCASH ******************************************
*************************************************************************************/
export const DucashContainer = styled.div`  
  display: flex; 
  flex-wrap: wrap-reverse; 
  align-items: center; 
  justify-content: center; 
  height: 505px; 
  width: 100%; 
  background-color: #edc243;

  padding-left: 49px;
  padding-right: 49px;

  @media(max-width: 896px) {
    height: 820px; 
    align-items: stretch; 

  }
`;

export const DucashTextContainer = styled.div`  
  width: 25%;
  text-align: justify;
  color: #101c84;
  margin-left: 50px;

  @media(max-width: 1340px) {
    width: 45%;
  }

  @media(max-width: 768px) {
    width: 100%;
    margin-left: 0px; 
  }
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
  color:#45536b;
  letter-spacing: 0.5px;
  padding-top: 2%;
  
  height: 100%;
  width: 50%;

  h2 {
    color: var(--textColor);
  }

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
    width: 345px;
`;

export const CremationImage = styled.img`
    width: 700px;
    height: 100%;

    @media(max-width: 1150px) {
      width: 500px;
    }

    @media(max-width: 565px) {
      width: 300px;
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

  border-bottom-left-radius: 15%;
  border-bottom-right-radius: 15%;

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
	flex-wrap: wrap;

  background-color: white;

  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;

  color:#45536b;
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
  height: 250px;

  @media(max-width: 985px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

/*************************************************************************************
*************************************** Formulário ***************************************
*************************************************************************************/

export const WrapperTitle = styled.div`
  // background: red;
  width: 100%;
  max-width:210px;
  height:100%;
  padding: 10px;

  span{
    color: var(--gold);
    font-size:17px;
    line-height:34px;
  }

  h1{

    font-size:54px;

    color: var(--gold);
    font-weight: normal;
    text-transform: uppercase;
    line-height: 3.5rem;
  }
` 

/*************************************************************************************
*************************************** OTHERS ***************************************
*************************************************************************************/
export const Background = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  background: -webkit-radial-gradient(top right,#d9a973ba,var(--gold));
  img{
    height: 500px;
    width: auto;
    filter: brightness(0.9);

  }

  @media (max-width: 500px) {
    img {
      height: 350px;  
    }
  }

  @media(max-width:350px) {
    img {
      height: 250px
    }
  }

`;

export const BackgroundForm = styled.section`
width: 100%;
height: 100%;
display: flex;
padding: 30px;
flex-wrap: wrap;
align-items: center;
justify-content: center;

background-color: var(--blue);
`;

export const BackgroundServices = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content:space-evenly;
  padding: 30px;

  background-color:#eadbca;

  @media(max-width:954px ){
    flex-direction: column;
    padding: 10px;
  }
`;

