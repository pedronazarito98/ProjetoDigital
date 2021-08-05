import styled from 'styled-components';

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      
    }
    
  }
  a {
    display: inline-block;
        position: relative;
        padding: 0 0.5rem;
        // height: 5rem;
        // line-height: 5rem;
        color: var(--blue);
  
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
  svg {
    height:30px;
    width:auto;
}
`;