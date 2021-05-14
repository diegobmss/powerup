import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Team = ({ team }) => (
  <S.Team>
    <S.List>
      {team.map((me, i) => (
        <S.Item key={i}>
          <S.Flex>
            <S.Image src={me.avatar} alt={me.name} />
            <div>
              <S.Name>{me.name}</S.Name>
              <S.Email>{me.email}</S.Email>
            </div>
          </S.Flex>
        </S.Item>
      ))}
    </S.List>
  </S.Team>
);

Team.propTypes = {
  team: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};

export default Team;
