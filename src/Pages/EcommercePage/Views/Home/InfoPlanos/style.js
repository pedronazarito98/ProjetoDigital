import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    justify-content: space-evenly;



`;

export const WrapperImg = styled.div`
    img{
        border-radius: 100px;
    }
`;

export const WrapperContent = styled.div`
    color: var(--blue);

    width: 100%;
    max-width:500px;
    margin-top: 45px;

    h1{
        font-weight: bold;
        margin-bottom:30px;
    }

    h3{
        margin-bottom:30px;
        font-weight: 500;
    }

    p{
        margin-bottom:30px;
        font-size: 1.1rem;
    }

`;