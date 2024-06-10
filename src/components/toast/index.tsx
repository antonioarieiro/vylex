import React from "react";
import * as Dsc from "../../styles/dsc";
import TitleH2 from "../typograph/Subtitle";
const Toast: React.FC = () => {
  return (
    <Dsc.ToastContainer>
      <span className="material-symbols-outlined">check</span>
      <TitleH2 text="Alterações realizadas com sucesso" />
    </Dsc.ToastContainer>
  );
};

export default Toast;
