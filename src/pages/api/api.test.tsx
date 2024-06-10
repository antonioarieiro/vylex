import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { addNewItem, getItems, editItem, deleteItem, searchItems } from "./api";

describe("API functions", () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
    process.env.USER_ID = "1";
  });

  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  it("should add a new item successfully", async () => {
    const data = {
      title: "New Item",
      body: "This is a new item",
      userId: process.env.USER_ID
    };

    mock.onPost("https://jsonplaceholder.typicode.com/posts", data).reply(201);

    const result = await addNewItem(data.title, data.body);
    expect(result).toBe(true);
  });

  it("should fail to add a new item", async () => {
    const data = {
      title: "New Item",
      body: "This is a new item",
      userId: process.env.USER_ID
    };

    mock.onPost("https://jsonplaceholder.typicode.com/posts", data).reply(400);

    const result = await addNewItem(data.title, data.body);
    expect(result).toBe(false);
  });

  it("should get items successfully", async () => {
    const items = [
      { id: 1, name: "Item 1", description: "Description 1" },
      { id: 2, name: "Item 2", description: "Description 2" }
    ];

    mock
      .onGet(
        `https://jsonplaceholder.typicode.com/posts?userId=${process.env.USER_ID}`
      )
      .reply(200, items);

    const result = await getItems();
    expect(result).toEqual(items);
  });

  it("should fail to get items", async () => {
    mock
      .onGet(
        `https://jsonplaceholder.typicode.com/posts?userId=${process.env.USER_ID}`
      )
      .reply(400);

    const result = await getItems();
    expect(result).toEqual([]);
  });

  it("should edit an item successfully", async () => {
    const data = {
      id: 1,
      title: "Edited Item",
      body: "This is an edited item",
      userId: 9921845
    };

    mock
      .onPut(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data)
      .reply(200);

    const result = await editItem(data.id, data.title, data.body);
    expect(result).toBe(true);
  });

  it("should fail to edit an item", async () => {
    const data = {
      id: 1,
      title: "Edited Item",
      body: "This is an edited item",
      userId: 9921845
    };

    mock
      .onPut(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data)
      .reply(400);

    const result = await editItem(data.id, data.title, data.body);
    expect(result).toBe(false);
  });

  it("should delete an item successfully", async () => {
    mock.onDelete("https://jsonplaceholder.typicode.com/posts/1").reply(200);

    const result = await deleteItem(1);
    expect(result).toBe(true);
  });

  it("should fail to delete an item", async () => {
    mock.onDelete("https://jsonplaceholder.typicode.com/posts/1").reply(400);

    const result = await deleteItem(1);
    expect(result).toBe(false);
  });

  it("should search items successfully", async () => {
    const searchText = "test";
    const items = [
      { id: 1, name: "Test Item 1", description: "Description 1" },
      { id: 2, name: "Test Item 2", description: "Description 2" }
    ];

    mock
      .onGet(`https://jsonplaceholder.typicode.com/posts?q=${searchText}`)
      .reply(200, items);

    const result = await searchItems(searchText);
    expect(result).toEqual(items);
  });

  it("should fail to search items", async () => {
    const searchText = "test";

    mock
      .onGet(`https://jsonplaceholder.typicode.com/posts?q=${searchText}`)
      .reply(400);

    const result = await searchItems(searchText);
    expect(result).toEqual([]);
  });
});
