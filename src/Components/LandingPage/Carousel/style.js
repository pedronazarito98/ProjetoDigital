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
    height:${props => props.increase ? 400 : 350}px;
    width: ${props => props.increase ? 80 : 70}%;
  }

  &:hover{
    height: 400px;
    width: 80%;
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const EmployeeDescription = styled.div`
  text-align: center; 
  padding: 10; 
  margin-top: 10; 
  font-size: 1rem; 
  line-height: 25px; 
  color: #45536b;
  overflow: hidden;
  text-overflow: ellipsis;
`;