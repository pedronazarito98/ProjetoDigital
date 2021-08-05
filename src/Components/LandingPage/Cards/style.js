import styled from "styled-components";

export const Card = styled.div`
  background-color: #f2f2fc;
  width: 250px;
  height: 200px;
  border-radius: 20px;
  padding: 10px; 
  margin-left: 50px;

  @media(max-width: 985px) {
    flex-direction: column;
    margin-top: 50px;
    margin-left: 0px;
  }
`;

export const Image = styled.img`
  margin-top: -46px;
  margin-left: -20px; 
`;

export const Text = styled.div`
  width: 100%;
  text-align: justify;
  font-size: 17px;
  margin-top: 12px;
`;