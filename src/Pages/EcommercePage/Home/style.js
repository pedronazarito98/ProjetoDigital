import styled from 'styled-components';

export const Header = styled.header`
    position: relative;
    height: 100vh;
    max-height: 550px;
    background-image: linear-gradient(var(--blue), var(--blue));
    display: flex;
    h1{
        color: var(--white);
        text-align: center;
        margin:50px;
        font-size: 2.5rem;
    }
    svg {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 10vh;
        /* set height to pixels if you want angle to change with screen width */
      }

`;

export const ContainerInfo = styled.div`
    width:100%;
    max-width: 600px;

    margin: 0 4rem;
    padding-top:40px;
`;

export const ContainerImg = styled.div`
      img{
          height:500px;
          position: absolute;
      }
`;

export const SectionCard = styled.section`
    width: 100%;
    max-width: 1200px;
    height:100%;

    margin: 0 auto;
    padding: 25px ;

    display: flex;
    justify-content:center;
    flex-wrap: wrap;
`;

export const SectionViewVideo = styled.section`
margin-bottom:100px;
margin-top:75px;
`;

export const TitleSectionCards = styled.h1`
text-align: center;
margin:50px;
font-size: 2.5rem;
`;

export const SectionInfoPlanos = styled.section`
    margin-bottom:100px;
    margin-top:75px;

`;