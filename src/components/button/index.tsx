import React from "react";
import * as Dsc from "../../styles/dsc";

interface Props {
  onSubmit: (param?: string) => void;
  text: string;
  type: string;
  icon?: string;
}

const Button: React.FC<Props> = ({ onSubmit, text, type, icon }) => {
  return (
    <Dsc.ButtonContainer
      type={type}
      onClick={() => {
        onSubmit();
      }}
    >
      <div className="flex items-center gap-1">
        {text}
        {icon && <span className="material-symbols-outlined">{icon}</span>}
      </div>
    </Dsc.ButtonContainer>
  );
};
export default Button;
