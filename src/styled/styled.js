import styled from "styled-components";

export const Input = styled.input`
    width:100%;
    padding: 10px;
    border: 2px solid #898989;
    border-radius: 8px; 
    min-height:50px;

    &:focus {
        border: 2px solid #FFA54F;
        outline: none;
    }
`;

export const ButtonLogin = styled.button`
    color: white;
    background-color: #00aff0;
    width: 100%;
    padding: 10px;
    border-radius: 8px; 

    &:hover {
        background-color: #3399ff;
    }
`;

export const LinkDirect = styled.a`
    display:block;
    color: black;
    font-size:16px;
    text-align:center;

    &:hover {
        color: #DF0029;
        transition: all 300ms ease-in-out; 
    }
`;

export const FormLogin = styled.form`
    max-width: 500px;
    background-color: white;
    border-radius:8px;
    padding: 40px 30px;
    height: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    gap: 20px;
`;
export const Div1 = styled.div`
    position: relative;
    display: flex;
    background-color: #FFE4E1;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

`;

export const Title1 = styled.h1`
    color: #8B3A3A;
    font-size: 32px;
    font-weight:bold;
    letter-spacing: normal;
    text-align: center;
    text-transform: capitalize;
`;

export const TextError = styled.p`
    text-align:left;
    color: red;
    font-size: 12px;
`;

export const SwitchLanguage = styled.button`
    position: absolute;
    background: #FF4500;
    color: white; 
    font-size: 14px;
    text-align:center; 
    padding: 8px;
    border-radius: 10px;
    top: 10px;
    right: 10px;
`;