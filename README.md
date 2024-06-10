
Preview https://vylex-antonios-projects-66022abd.vercel.app/

## Configurações de Ambiente
Para utilizar de maneira eficaz a API e poder monitorar as chamadas (GET, POST, UPDATE, DELETE), é necessário configurar o arquivo de ambiente (.env) com a chave de acesso.
<br/>
Testes de api e paginas em app.dev

## Métodos da API
### addNewItem(title: string, body: string): Promise<boolean>
- Descrição: Adiciona um novo item na API.
- Parâmetros:
  - `title` (string): Título do novo item.
  - `body` (string): Corpo/descrição do novo item.
- Retorna:
  - `Promise<boolean>`: Indica se o item foi adicionado com sucesso.

### getItems(): Promise<Item[]>
- Descrição: Retorna todos os itens da API.
- Retorna:
  - `Promise<Item[]>`: Array contendo todos os itens da API.

### editItem(id: number, title: string, body: string): Promise<boolean>
- Descrição: Edita um item existente na API.
- Parâmetros:
  - `id` (number): ID do item a ser editado.
  - `title` (string): Novo título do item.
  - `body` (string): Novo corpo/descrição do item.
- Retorna:
  - `Promise<boolean>`: Indica se o item foi editado com sucesso.

### deleteItem(id: number): Promise<boolean>
- Descrição: Deleta um item existente na API.
- Parâmetros:
  - `id` (number): ID do item a ser deletado.
- Retorna:
  - `Promise<boolean>`: Indica se o item foi deletado com sucesso.

### searchItems(searchText: string): Promise<Item[]>
- Descrição: Busca itens na API com base em um texto de busca.
- Parâmetros:
  - `searchText` (string): Texto a ser usado como critério de busca.
- Retorna:
  - `Promise<Item[]>`: Array contendo os itens encontrados na busca.

## Considerações sobre a busca
A busca por itens na API deve ser eficiente e evitar chamadas desnecessárias. Para isso, é importante utilizar debounce, que é uma técnica que limita a frequência com que uma função é executada, garantindo que ela só seja chamada após um intervalo de tempo definido, após a última vez que foi invocada. Isso é especialmente útil em casos como a busca em tempo real, onde queremos evitar que a API seja chamada a cada letra digitada pelo usuário, o que poderia sobrecarregar o servidor com chamadas desnecessárias.

