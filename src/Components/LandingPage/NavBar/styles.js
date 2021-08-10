import styled from "styled-components";

export const Nav = styled.nav`
  height: 5rem;
  width:100%;
  background: linear-gradient(45deg, #d9a973e6, #d9a973c4);

    img{
      margin-left: 200px;
      padding-top: 15px;
      height:65px;
      width:207px;
    }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content:center;
    img {
      margin-left: 0px;
    }
  }
`