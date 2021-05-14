import styled from "styled-components";

export const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 28px;
  color: var(--color-white-1);
  margin-top: 0px;
  max-width: 500px;

  animation: fadein 2s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
