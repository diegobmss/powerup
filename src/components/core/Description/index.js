import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Description = ({ children }) => <S.Description>{children}</S.Description>;

Description.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Description;
