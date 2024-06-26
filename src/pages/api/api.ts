//api.ts

import axios from "axios";

interface Item {
  id: number;
  name: string;
  description: string;
}

export async function addNewItem(
  title: string,
  body: string
): Promise<boolean> {
  try {
    const data = {
      title: title,
      body: body,
      userId: process.env.USER_ID
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

export async function getItems(): Promise<Item[]> {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${process.env.USER_ID}`
    );

    if (response.status !== 200) {
      throw new Error("Erro ao buscar itens");
    }

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    return [];
  }
}

export async function editItem(
  id: number,
  title: string,
  body: string
): Promise<boolean> {
  try {
    const data = {
      id: id,
      title: title,
      body: body,
      userId: 9921845
    };
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      data
    );

    if (response.status !== 200) {
      throw new Error("Erro ao editar item");
    }

    console.log("Item editado com sucesso!");
    return true;
  } catch (error) {
    console.error("Erro ao editar item:", error);
    return false;
  }
}

export async function deleteItem(id: number): Promise<boolean> {
  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (response.status !== 200) {
      throw new Error("Erro ao deletar item");
    }

    console.log("Item deletado com sucesso!");
    return true;
  } catch (error) {
    console.error("Erro ao deletar item:", error);
    return false;
  }
}

export async function searchItems(searchText: string): Promise<Item[]> {
  try {
    const response = await axios.get<Item[]>(
      `https://jsonplaceholder.typicode.com/posts?q=${searchText}`
    );

    if (response.status !== 200) {
      throw new Error("Erro ao buscar itens");
    }

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    return [];
  }
}