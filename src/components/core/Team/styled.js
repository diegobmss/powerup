import styled from "styled-components";

export const Team = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;

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

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Item = styled.li`
  margin-bottom: 15px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  border-radius: 50%;
  max-width: 100px;
  height: 100%;
  border: 5px solid var(--color-white-1);
  margin-right: 15px;
`;

export const Name = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: var(--color-white-1);
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const Email = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: bold;
  color: var(--color-white-1);
  margin-top: 0px;
  margin-bottom: 0px;
`;
