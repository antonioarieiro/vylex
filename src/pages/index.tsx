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

interface Item {
  id: number;
  name: string;
  description: string;
}
export default function Home() {
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [initialItems, setInitialItems] = React.useState<Item[]>([]);
  const [selectedData, setSelectedData] = React.useState<Item>({} as Item);
  const router = useRouter();

  const handleEdit = (id: number) => {
    return () => {
      console.log(id);
    };
  };

  const handleDelete = (item: Item) => {
    return () => {
      setOpenEditModal(true);
      setSelectedData(item);
    };
  };

  const handleSaveDelete = () => {
    setOpenEditModal(false);
    console.log("asa", selectedData);
    let filter = initialItems.filter((val: Item) => val.id !== selectedData.id);
    console.log("filter", filter);
    setInitialItems(filter);
  };

  const handleChangeModalDelete = () => {
    setOpenEditModal(false);
  };

  const addNewItem = () => {
    return () => {
      router.push("/new-item");
    };
  };

  React.useEffect(() => {
    setInitialItems(items);
  }, []);

  return (
    <>
      <div className="flex items-center gap-4 w-full justify-end mb-4">
        <Button
          text="Adcionar item"
          type="normal"
          icon="add"
          onSubmit={addNewItem()}
        />
      </div>
      {openEditModal && selectedData && (
        <Modal
          title="Delete item"
          open={openEditModal}
          onSave={handleSaveDelete}
          onCancel={handleChangeModalDelete}
        >
          <div>
            Se você excluir este item, perderá todas as alterações realizadas.
          </div>
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
                  onSubmit={handleEdit(val.id)}
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
