import styled from "styled-components";

export const Container = styled.div`  
  display: flex;
  flex-direction: column;
  background-color: #f2f2fc;

  padding-top: 50px;
  padding-left: 180px;
  padding-right: 170px;

  @media(max-width: 1024px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;
