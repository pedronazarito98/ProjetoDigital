import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  width: 350px;
  height: 220px;
  border-radius: 20px;
  padding: 20px; 
  margin: 20px;
`;

export const Image = styled.img`
  margin-top: -60px;
  margin-left: -30px; 
`;

export const Title = styled.h3`
  margin-top: -18.5%;
  margin-left: 35px;
  color: #101c85;

  @media(max-width: 360px) {
    margin-top: -21%;
  }
`;

export const Text = styled.div`
  width: 100%;
  text-align: justify;
  line-height: 25px;
  font-size: 1rem;
  margin-top: 20px;
`;
