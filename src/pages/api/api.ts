//api.ts

import axios from "axios";

export async function addNewItem(
  title: string,
  body: string
): Promise<boolean> {
  try {
    const data = {
      title: title,
      body: body,
      userId: 1
    };
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );

    if (response.status !== 201) {
      throw new Error("Erro ao criar novo item");
    }

    console.log("Novo item criado com sucesso!");
    return true;
  } catch (error) {
    console.error("Erro ao criar novo item:", error);
    return false;
  }
}
