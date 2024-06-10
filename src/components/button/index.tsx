import React from "react";
import * as Dsc from "../../styles/dsc";

interface Props {
  onSubmit: (param?: string) => void;
  text: string;
  type: string;
  icon?: string;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ onSubmit, text, type, icon, disabled }) => {
  return (
    <Dsc.ButtonContainer
      type={type}
      onClick={() => {
        onSubmit();
      }}
      disabled={disabled}
    >
      <div className="flex items-center gap-1">
        {text}
        {icon && <span className="material-symbols-outlined">{icon}</span>}
      </div>
    </Dsc.ButtonContainer>
  );
};
export default Button;
