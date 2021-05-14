import React from "react";
import PropTypes from "prop-types";

import Container from "../../components/core/Container";
import Description from "../../components/core/Description";
import Team from "../../components/core/Team";
import Title from "../../components/core/Title";
import DoYouLike from "../../components/core/DoYouLike";

import * as S from "./styled";

const PowerUp = ({ team }) => {
  return (
    <S.Page>
      <Container>
        <Title>PowerUp</Title>
        <Description>Benefícios de uma aplicação SSR utilizando Next.JS</Description>

        <Team team={team} />

        <DoYouLike />
      </Container>
    </S.Page>
  );
};

PowerUp.propTypes = {
  team: PropTypes.string.isRequired,
};

export default PowerUp;
