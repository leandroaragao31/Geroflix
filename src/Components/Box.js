import styled from "styled-components";

const Box = styled.div`
  display: flex;
  width: 80%;
  height:60vh;
  flex-flow:column wrap;
  align-items: center;
  justify-content: space-evenly;
  border: 1.9px dashed;
  cursor: pointer;
  transition: 1s ease-in;
  &:hover {
    background-color: #eedd82;
  }
`;

export default Box;

//
