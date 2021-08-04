import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  height: 350px;
  width: 200px;
  border-radius: 10px;
  margin: 10px;
  background-color: #f2f2fc;
  padding: 10px;

  border-style:solid;
  border-width: 1px;
  border-color: #e3e3ff;

  transition: 0.25s;

  margin-left: 47px;

  &:hover{
    height: 360px;
    width: 210px;
    margin-left: 45px;
    margin-top:0px;
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 200px;
  margin-top: 20px;
`;