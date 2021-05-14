import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Title = ({ children }) => <S.Title>{children}</S.Title>;

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
