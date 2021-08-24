import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    color: #fff;
`;


export const Fallback = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    & > span {
        font-size: 30px;
        color: #ccc;
    }
`;
