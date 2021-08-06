import styled from "styled-components";

export const Nav = styled.nav`

  height: 5rem;

  padding: 0 14.5rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color:var(--gold);
    

    img{
      padding-top: 15px;
      height:65px;
        width:207px;
    }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content:center;

    img{
      height:50px;
    }
    

  }
`