import styled from "styled-components";

export const Loader = styled.div`
        border: 6px solid grey;
  border-top: 6px grey solid;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  animation: spin 2s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  border: 6px solid lightgrey; 
  border-top: 6px solid grey;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite; 

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;