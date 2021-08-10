import styled from 'styled-components';

export const ContainerCard = styled.div`
    width: 100%;
    max-width:255px;
    height:371px;
    background-color: #cccff9;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    margin: 5px;

    &:hover {
        box-shadow:2px 5px 12px 0 rgb(88 88 88 / 30%);
    }
`;

export const ContainerImage = styled.div`
    margin-bottom: 20px;
    img{
        margin-left: 10px;
    }
`;

export const CardContent = styled.div`
    text-align: center;
    padding: 10px;
    
    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 0.2px;
        color: var(--blue);

        margin-bottom: 15px;
    }

    span {
        font-weight: 400;
        font-size:14px;
        color: var(--black);
    }
`;