import styled from 'styled-components';

export const WrapperForm = styled.form`
    width: 100%;
    max-width:700px;

    input {
    
    width: 100%;
    padding: 0 1rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    margin:10px;

    border: 1px solid #6c757d85;


    font-weight: 400;
    font-size: 1rem;
    margin-top: 1rem;

    color: #000;

    box-shadow: 2px 2px 4px 0px #0000006e;

    &::placeholder{
        color: var(--textColor);
        text-align: left;
    }
    }

    select {
    width: 100%;
    padding: 0 1rem;
    height: 2.5rem;
    border-radius: 0.25rem;

    border: 1px solid #6c757d85;

    font-weight: 400;
    font-size: 1rem;
    margin:10px;
    margin-top: 1rem;

    color: var(--textColor);

    box-shadow: 2px 2px 4px 0px #0000006e;
    }

`;

export const FieldContainer = styled.div`
    display: flex;
    
    @media (max-width: 375px) {
        flex-direction: column;
    }
`