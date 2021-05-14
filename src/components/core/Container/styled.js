import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: calc(100% - 30px);

  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (min-width: 576px) {
    max-width: calc(100% - 30px);
  }

  @media screen and (min-width: 768px) {
    max-width: 720px;
  }

  @media screen and (min-width: 992px) {
    max-width: 960px;
  }

  @media screen and (min-width: 1182px) {
    max-width: 1122px;
  } ;
`;
