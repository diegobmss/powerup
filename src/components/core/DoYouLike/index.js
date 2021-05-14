import React from "react";
import Typewriter from "typewriter-effect";

import * as S from "./styled";

const DoYouLike = () => (
  <S.DoYouLike>
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .changeDelay(75)
          .typeString("Está curtindo nosso PowerUp?")
          .start();
      }}
    />
    
  </S.DoYouLike>
);

export default DoYouLike;
