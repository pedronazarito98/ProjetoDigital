import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 58%;
    padding-left: 50px;
    padding-top: 30px;
    padding-right: 100px;

    height: 1000px;

    background-color: #F9FBFF;
`;

export const Title = styled.h2`
    color: var(--blue);

    margin-bottom: 15px;
`;

export const Banner = styled.img`
    width: 634px;
    height: 188px;
`;

export const Content = styled.div`
    color: var(--blue);

    margin-top: 15px;
`;

export const Rectangle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 30px;
    border-radius: 5px;
    margin-top: 15px;
    padding: 10px;

    background-color: #DFEFFD;
`;