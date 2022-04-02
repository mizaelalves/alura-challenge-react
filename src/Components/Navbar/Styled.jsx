import styled from "styled-components";

export const Container = styled.div`
 display: flex;
  position: relative;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  margin-left: 200px;
  margin-right: 200px;
  padding-top:10px;

`;

export const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  width: 90px;
  height: 30px;
  color: #202020;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 8px 10px 8px;
  height: 30px;
  &:hover{
    background-color: #8DCE97;
  }
`;
