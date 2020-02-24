import styled from 'styled-components';

export const Container = styled.form`
    text-align: center;
`;

export const Kana = styled.p`
    font-size: 4.5rem;
`;

export const Text = styled.p`
    color: #ADADAD;
    font-size: 1.375rem;
    margin-top: 16px;
`;

export const KanaInput = styled.input`
    padding: 4px;
    border: none;
    background: white;
    border-bottom: 2px solid #BC002D; 
    font-size: 1.375rem;
    text-align: center;
`;

export const Answer = styled.div`
    margin-top: 16px;
    span {
        color: ${props => props.correct ? '#299434' : '#BC002D'};
    }
`;