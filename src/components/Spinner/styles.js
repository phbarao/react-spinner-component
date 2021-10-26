import styled, { css, keyframes } from "styled-components";

const rotateSpinner = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  ${({ speed, timing }) =>
    css`
      svg {
        animation: ${rotateSpinner} ${speed} ${timing} infinite;
      }
    `}
`;
