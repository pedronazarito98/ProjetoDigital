import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height:${props => props.increase ? 375 : 350}px;
  width: ${props => props.increase ? 100 : 90}%;
  border-radius: 10px;
  background-color: #f2f2fc;
  padding: 10px;

  border-style:solid;
  border-width: 1px;
  border-color: #e3e3ff;

  transition: 0.25s;

  &:hover{
    height: 375px;
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