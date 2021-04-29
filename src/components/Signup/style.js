import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`;

export const SignupSection = styled.div`
  width: 700px;
`;

export const SignupInput = styled.input`
  width: 676px;
  height: 60px;
  border: 2px solid #45e36a;
  margin-bottom: 100px;
  font-size: 25px;
  outline: none;
  padding: 3px 10px;
`;

export const SignupButton = styled.button`
  width: 700px;
  height: 60px;
  color: white;
  background-color: #45e36a;
  border: none;
  margin-bottom: 20px;
  font-size: 30px;
  :focus {
    cursor: pointer;
  }
  font-family: "NanumGothicBold";
`;

export const MoveTextContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 20px;
`;

export const MoveText = styled(Link)`
  text-decoration: none;
  outline: none;
  color: black;
`;
