import React, { useState } from "react";
import BreadCrumb from "@/components/breadCrumb";
import Button from "@/components/button";
import DscInput from "@/components/Input";
import DscTextArea from "@/components/textArea";
import TitleH2 from "@/components/typograph/Subtitle";
import {
  CardContainer,
  CardContainerBody,
  CardContainerFooter
} from "@/styles/dsc";
import { addNewItem } from "../api/api";
import Toast from "@/components/toast";
import { useRouter } from "next/router";
const path = [
  { name: "Home", link: "#" },
  { name: "Registrar item", link: "#" }
];

const AddNewItem: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [toast, showToast] = useState(false);
  const router = useRouter();
  const handleChangeName = (e: string) => {
    setName(e);
  };

  const handleChangeDescription = (e: string) => {
    setDescription(e);
  };

  const handleSubmit = async () => {
    const success = await addNewItem(name, description);
    console.log("success", success);

    if (success) {
      showToast(true);
      setName("");
      setDescription("");
      setTimeout(() => {
        showToast(false);
        router.push("/items");
      }, 1000);
    }

    return true;
  };

  return (
    <div className="flex flex-col gap-4">
      {toast && <Toast />}

      <BreadCrumb path={path} />
      <CardContainer>
        <TitleH2 text="Registrar novo item" />
        <CardContainerBody>
          <DscInput
            value={name}
            onChange={handleChangeName}
            placeholder="Nome do item"
            label="Nome"
          />
          <DscTextArea
            value={description}
            onChange={handleChangeDescription}
            placeholder="Descrição"
            label="Descrição"
          />
        </CardContainerBody>
        <CardContainerFooter>
          <Button
            text="Registrar"
            type="normal"
            onSubmit={handleSubmit}
            disabled={!name || !description}
          />
        </CardContainerFooter>
      </CardContainer>
    </div>
  );
};

export default AddNewItem;
