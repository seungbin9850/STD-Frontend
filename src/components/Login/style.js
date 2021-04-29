import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`;

export const LoginSection = styled.div`
  width: 700px;
`;

export const LoginInput = styled.input`
  width: 676px;
  height: 50px;
  border: 2px solid #45e36a;
  margin-top: 100px;
  font-size: 25px;
  outline: none;
  padding: 3px 10px;
  display: block;
`;

export const LoginButton = styled.button`
  width: 700px;
  height: 60px;
  color: white;
  background-color: #45e36a;
  border: none;
  margin-top: 100px;
  font-size: 30px;
  :focus {
    cursor: pointer;
  }
`;
