import styled from "styled-components";

export const DoYouLike = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: var(--color-white-1);
  margin-top: 0px;
  margin-bottom: 0px;

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
