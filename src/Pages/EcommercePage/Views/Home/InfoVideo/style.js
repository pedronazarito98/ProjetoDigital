import styled from "styled-components";

export const WrapperCard = styled.section`
    display: flex;
    align-items:center;
    margin: 0 auto;

    height: 175px;
    width: 100%;
    max-width:890px;

    border-radius:5px;
    box-shadow:2px -2px 15px -1px rgb(88 88 88 / 30%);

    &:hover{
        box-shadow:2px 5px 12px 0 rgb(88 88 88 / 30%);
    }
`;

export const WrapperCardColor = styled.ul`
display: flex;
align-items:center;
justify-content:center;

height:175px;
background-color: var(--gold);
border-radius:0px 5px 5px 0px;
strong{
    font-weight:bold;
    font-size:1.563rem;

}
 li{
    list-style: none;
    color: var(--blue);
    font-size:1rem;
    padding:1.563rem;
    text-align:center;
    border-right: 2px solid var(--blue);
    text-align:left;
}
li:last-child{
    border-right:none;
}
`;

export const TitleInfo = styled.div`
    width:465px;
    height:175px;
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    padding: 25px;
    h1{
        color: var(--blue);
        font-size:1.563rem;
        text-align:left;
        
    }
`;

export const SectionVideo = styled.section`
    display: flex;
    width: 100%;
    max-width:890px;
    margin: 5rem auto;
`;

export const ContainerVideo = styled.div`
    width: 566px;
    height: 358px;
`;

export const ContainerInfoVideo = styled.div`
width: 479px;
height: 250px;

display: flex;
flex-direction: column;
justify-content:center;

padding: 25px;
margin-top: 30px;
background:var(--gold);
box-shadow:2px -2px 15px -1px rgb(88 88 88 / 30%);

h2{
    margin-bottom: 1.563rem;
    text-align: center;
    color: var(--blue);
}

button {
    
    background: var(--blue);
    color: var(--white);
}
`;