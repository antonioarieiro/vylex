import React from "react";
import * as Dsc from "../../styles/dsc";

interface Props {
  text: string;
}

const DefaultText: React.FC<Props> = ({ text }) => {
  return <Dsc.DefaulText>{text}</Dsc.DefaulText>;
};

export default DefaultText;
