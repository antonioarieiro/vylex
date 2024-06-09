import React from "react";
import * as Dsc from "../../styles/dsc";

interface Props {
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
  label: string;
  icon?: string;
}

const DscInput: React.FC<Props> = ({
  placeholder,
  value,
  label,
  onChange,
  icon
}) => {
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <Dsc.inputLabel htmlFor="input-text">{label}</Dsc.inputLabel>

      <div className="relative flex items-center gap-2 w-full">
        <Dsc.InputContainer
          id="input-text"
          placeholder={placeholder}
          onChange={(e: any) => onChange(e.target.value)}
        />
        {icon && (
          <span className="material-symbols-outlined absolute right-1">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};

export default DscInput;
