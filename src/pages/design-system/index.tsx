import React from "react";
import { Inter } from "next/font/google";
import Button from "@/components/button";
import DscInput from "@/components/Input";
import DscTextArea from "@/components/textArea";
import TitleH1 from "@/components/typograph/Title";
import TitleH2 from "@/components/typograph/Subtitle";
import DefaultText from "@/components/typograph/DefaultText";
import {
  CardContainer,
  CardContainerFooter,
  CardContainerBody
} from "@/styles/dsc";
import BreadCrumb from "@/components/breadCrumb";
import Modal from "@/components/modal";

const inter = Inter({ subsets: ["latin"] });
const path = [
  { name: "Home", link: "#" },
  { name: "Design System", link: "#" }
];

export default function DesignSystem() {
  const [open, setOpen] = React.useState(false);

  const handleChange = (e: any) => {
    console.log("e", e);
  };

  const handleSubmit = () => {};

  const openModal = () => {
    console.log("asa");
    setOpen(!open);
  };

  return (
    <div className="w-full h-[100vh] flex items-center flex-col justify-center gap-2">
      {open && (
        <Modal
          title="Modal"
          open={open}
          onSave={openModal}
          onCancel={openModal}
        >
          <div>corpo do children do modal</div>
        </Modal>
      )}
      <div className="flex flex-col  gap-4 ">
        <BreadCrumb path={path}></BreadCrumb>
        <div className="flex items-start gap-4">
          <Button text="Open Modal" type="normal" onSubmit={openModal} />
        </div>
        <div className="w-full flex gap-4 items-center">
          <TitleH1 text="title" />
          <TitleH2 text="sub title" />
          <DefaultText text="default text" />
        </div>
        <div className="flex items-start gap-4">
          <Button
            text="Btn comum"
            type="normal"
            icon="home"
            onSubmit={handleSubmit}
          />
          <Button text="Btn Alerta" type="alert" onSubmit={handleSubmit} />
          <Button
            text="Btn Sutil"
            type="subtle"
            icon="add"
            onSubmit={handleSubmit}
          />
        </div>

        <div className="flex items-start gap-4">
          <DscInput
            onChange={handleChange}
            placeholder="Search"
            label="input"
          />

          <DscInput
            onChange={handleChange}
            placeholder="Search"
            label="input icon"
            icon="search"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <DscTextArea
            onChange={handleChange}
            placeholder="Search"
            label="Text area"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <CardContainer>
            <TitleH2 text="Titulo do card" />
            <CardContainerBody>
              <DefaultText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
              <DscInput
                onChange={handleChange}
                placeholder="Search"
                label="input"
              />
            </CardContainerBody>
            <CardContainerFooter>
              <Button text="Cancelar" type="subtle" onSubmit={handleSubmit} />
              <Button
                text="Salvar"
                type="normal"
                icon="save"
                onSubmit={handleSubmit}
              />
            </CardContainerFooter>
          </CardContainer>
        </div>
      </div>
    </div>
  );
}
