import styled from 'styled-components';

export const Container = styled.form`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
    padding: 8px 0;
    background: #232b38;
`;

export const Input = styled.input`
	padding: 12px;
	width: 300px;
    border-radius: 4px;
    border: 1px solid #2f3540;
    color: #7d8188;
    font-size: 16px;
    transition: 300ms;
    background: #191f27;
    outline: 0;

    &:focus {
        border-color: #0af;
        box-shadow: 0px 0px 1px 2px #00aaff7a;
    }
`;
