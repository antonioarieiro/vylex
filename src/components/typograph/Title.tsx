import React from "react";
import * as Dsc from "../../styles/dsc";

interface Props {
  text: string;
}

const TitleH1: React.FC<Props> = ({ text }) => {
  return <Dsc.Title>{text}</Dsc.Title>;
};

export default TitleH1;
