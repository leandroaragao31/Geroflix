import styled from "styled-components";

const Box = styled.div`
  display: flex;
  width: 80vw;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 2px solid;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background-color: #eedd82;
  }
`;

export default Box;

//
