import styled from 'styled-components';

export const FormContainer = styled.div`
    max-width: 80%;
    margin: 200px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
` 

export const ContactCard = styled.div`
    border-radius: 12px;
    margin: 20px;
    padding: 20px;
    background-color: #aaaaaa;
    display: flex;
    flex-direction: column;

    .formulario {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 300px;
    }
`