import Button from "@/components/button";
import DefaultText from "@/components/typograph/DefaultText";

import TitleH2 from "@/components/typograph/Subtitle";
import {
  ListContainer,
  CardContainer,
  CardContainerBody,
  CardContainerFooter
} from "@/styles/dsc";
import { items } from "../utils/initialData";
import Modal from "@/components/modal";
import React from "react";
import { useRouter } from "next/router";
import DscInput from "@/components/Input";
import DscTextArea from "@/components/textArea";
import Toast from "@/components/toast";
import { deleteItem, editItem } from "./api/api";

interface Item {
  id: number;
  name: string;
  description: string;
}
export default function Home() {
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [initialItems, setInitialItems] = React.useState<Item[]>([]);
  const [selectedData, setSelectedData] = React.useState<Item>({} as Item);
  const [toast, showToast] = React.useState(false);
  const router = useRouter();

  const handleEdit = (item: Item) => {
    return () => {
      setSelectedData(item);
      setOpenEditModal(true);
    };
  };

  const handleDelete = (item: Item) => {
    return () => {
      setOpenDeleteModal(true);
      setSelectedData(item);
    };
  };

  const handleSaveDelete = async () => {
    setOpenDeleteModal(false);
    await deleteItem(selectedData.id);
    let filter = initialItems.filter((val: Item) => val.id !== selectedData.id);
    setInitialItems(filter);
  };

  const handleSaveEdit = () => {
    setOpenEditModal(false);
  };

  const handleChangeModalDelete = () => {
    setOpenDeleteModal(false);
  };

  const handleChangeModalEdit = async () => {
    const { id, name, description } = selectedData;
    const success = await editItem(id, name, description);
    if (success) {
      showToast(true);
      setSelectedData({});
      setTimeout(() => {
        showToast(false);
      }, 1000);
    }

    setInitialItems((prevInitialItems) =>
      prevInitialItems.map((item) =>
        item.id === selectedData.id ? selectedData : item
      )
    );
    setOpenEditModal(false);
  };

  const addNewItem = () => {
    return () => {
      router.push("/new-item");
    };
  };

  const handleChangeName = (newName: string) => {
    setSelectedData((prevSelectedData) => ({
      ...prevSelectedData,
      name: newName
    }));
  };

  const handleChangeDescription = (newDescription: string) => {
    setSelectedData((prevSelectedData) => ({
      ...prevSelectedData,
      description: newDescription
    }));
  };

  React.useEffect(() => {
    setInitialItems(items);
  }, []);

  return (
    <>
      {toast && <Toast />}
      <div className="flex items-center gap-4 w-full justify-end mb-4">
        <Button
          text="Adcionar item"
          type="normal"
          icon="add"
          onSubmit={addNewItem()}
        />
      </div>
      {openDeleteModal && selectedData && (
        <Modal
          title="Delete item"
          open={openDeleteModal}
          onSave={handleSaveDelete}
          type="alert"
          onCancel={handleChangeModalDelete}
        >
          <div>
            Se você excluir este item, perderá todas as alterações realizadas.
          </div>
        </Modal>
      )}

      {openEditModal && selectedData && (
        <Modal
          title="Delete item"
          open={openEditModal}
          onSave={handleChangeModalEdit}
          onCancel={handleSaveEdit}
        >
          <CardContainerBody>
            <DscInput
              value={selectedData.name}
              onChange={handleChangeName}
              placeholder="Nome do item"
              label="Nome"
            />
            <DscTextArea
              value={selectedData.description}
              onChange={handleChangeDescription}
              placeholder="Descrição"
              label="Descrição"
            />
          </CardContainerBody>
        </Modal>
      )}
      {initialItems && initialItems.length ? (
        <ListContainer>
          {initialItems.map((val: Item) => (
            <CardContainer key={val.id}>
              <TitleH2 text={val.name} />
              <CardContainerBody>
                <DefaultText text={val.description} />
              </CardContainerBody>
              <CardContainerFooter>
                <Button
                  text="Delete"
                  type="subtle"
                  onSubmit={handleDelete(val)}
                />
                <Button
                  text="Editar"
                  type="normal"
                  icon="edit"
                  onSubmit={handleEdit(val)}
                />
              </CardContainerFooter>
            </CardContainer>
          ))}
        </ListContainer>
      ) : (
        <div className="flex items-center gap-4 w-full justify-center">
          <TitleH2 text="Sem items na listagem" />
        </div>
      )}
    </>
  );
}
