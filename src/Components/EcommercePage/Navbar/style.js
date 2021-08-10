import styled from "styled-components";

export const Container = styled.header`
   height: 5rem;
`;

export const NavBar = styled.div`
width: 100%;
   
height: 5rem;
margin: 0 auto;
padding: 0 2rem;

display: flex;
align-items: center;
justify-content: center;
background: var(--blue);

img {
    background: red;
}
nav {
  margin-left: 5rem;
  height: 5rem;

  a {
    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    height: 5rem;
    line-height: 5rem;
    color: var(--white);

    transition: color 0.2s;

    & + a {
      margin-left: 2rem;
    }

    &:hover {
      color: #ffffff80;
    }

    &:active {
      color: var(--white);
      font-weight: bold;
    }

    &.active::after {
      content: "";
      height: 3px;
      border-radius: 3px 3px 0 0;
      width: 100%;
      position: absolute;
      bottom: 1px;
      left: 0;
      background: var(--yellow-500);
    }
  }
  button {
    margin-left: 1rem;
    border: 1px solid var(--white);
    border-radius:5px;
    height:50px;
    width:162px;
    background: var(--blue);
    padding: 5px;
    color: var(--white);
    
    transition: 0.5s;
  
    &:hover{
      background: var(--white);
      color: var(--blue);
      border: 2px solid var(--blue)
    }
  }
`
