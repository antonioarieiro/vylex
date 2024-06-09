import React from "react";
import * as Dsc from "../../styles/dsc";

interface Props {
  text: string;
}

const TitleH2: React.FC<Props> = ({ text }) => {
  return <Dsc.SubTitle>{text}</Dsc.SubTitle>;
};

export default TitleH2;
