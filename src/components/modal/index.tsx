import React from "react";
import * as Dsc from "../../styles/dsc";
import Button from "../button";
import TitleH1 from "../typograph/Title";

interface Props {
  open: boolean;
  title: string;
  onSave: () => void;
  onCancel: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({
  open,
  title,
  onSave,
  onCancel,
  children
}) => {
  return (
    <Dsc.ModalContainer>
      <Dsc.ModalOverlayContainer></Dsc.ModalOverlayContainer>

      <Dsc.ModalBody>
        <div className="flex items-center w-full justify-between">
          <TitleH1 text={title} />
          <button onClick={onCancel}>
            <span className="material-symbols-outlined">cancel</span>
          </button>
        </div>
        {children}
        <div className="w-full flex gap-4 justify-end items-end">
          <Button text="Cancelar" type="subtle" onSubmit={onCancel} />
          <Button text="Salvar" type="normal" onSubmit={onSave} />
        </div>
      </Dsc.ModalBody>
    </Dsc.ModalContainer>
  );
};

export default Modal;
