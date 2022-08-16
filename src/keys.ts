import styled from "styled-components";

export const Black = styled.button`
  background: black;
  width: 40px;
  height: 130px;
  background: black;
  position: absolute;
  margin: 1px;
  margin-left: -20px;

  :active {
    background: #333;
  }
`;

export const White = styled.button`
  background: white;
  width: 60px;
  height: 200px;
  background: white;
  border: 1px solid black;
  box-shadow: 2px 5px;
  margin: 1px;

  :active {
    background: #eee;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
