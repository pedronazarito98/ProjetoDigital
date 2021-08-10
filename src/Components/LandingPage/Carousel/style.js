import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;
  background-color: #e1e3f5;
  padding: 10px;

  border-style:solid;
  border-width: 1px;
  border-color: #ccd1ff;

  transition: 0.25s;

  @media(min-width: 1150px) {
    height:${props => props.increase ? 400 : 390}px;
    width: ${props => props.increase ? 100 : 90}%;
  }

  &:hover{
    height: 400px;
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
`;