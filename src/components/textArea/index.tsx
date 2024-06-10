import React from "react";
import * as Dsc from "../../styles/dsc";

interface Props {
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
  label: string;
}

const DscTextArea: React.FC<Props> = ({
  placeholder,
  value,
  label,
  onChange
}) => {
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <Dsc.inputLabel htmlFor="input-text">{label}</Dsc.inputLabel>

      <div className="relative flex items-center gap-2  w-full">
        <Dsc.TextAreaContainer
          id="input-text"
          value={value}
          placeholder={placeholder}
          onChange={(e: any) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DscTextArea;
