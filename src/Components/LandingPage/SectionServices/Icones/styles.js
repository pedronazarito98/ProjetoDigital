import styled from "styled-components";


export const Wrapper = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    background: var(--blue);
    border-radius: 50%;

    padding: 10px;
    margin: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 50px 70px rgb(98 79 125 / 12%);
    &:hover{
        box-shadow: 2px 5px 12px 0 rgb(88 88 88 / 30%)
    }

    span{
        color: var(--white);
        font-size: 0.9rem;
        text-align: center;
        margin-top: 15px;
    }
`;

export const Icon = styled.div`
    position: absolute;
    width: 75px;
    height: 75px;
    background:var(--gold);
    border-radius: 50%;
    transform: translate(0px, -67px);
    
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        height:30px;
        width:30px;
        color: var(--black);
    }
`;
