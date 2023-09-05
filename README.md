# ProAllCool
<img src="https://i.imgur.com/t0nRtf6.png" alt="ProAllCool Logo" style="display: block; margin: 0 auto;">


O projeto ***ProAllCool*** simula uma *agência de turismo*, onde o possível cliente deve contatar a empresa para receber mais informações sobre determianda excursão ou dúvida. Para isso ele precisa fornecer alguns contatos para que a empresa entre em contato com ele para sanar quaisquer questionamentos. Assim ele fornece o Lead (demonstração de interece há algum serviço/produto) para à empresa.

## Pontos importantes do projeto
Além do real objetivo de conseguir vender um serviço/produto e obter o Lead, o projeto ***ProAllCool*** conta recursos interativos para o proprietário, podendo ser facilmente adepatado para outros negócios, como por exemplo uma página de pré-vendas. Conta com um sistema de login para que o proprietário possa gerenciar os dados do serviço/produto ofertado, podendo, criar, editar e excluir os produtos/serviços(para excluir é necessário excluir todos os Leads relacionado ao serviço/produto*), e verificar os Leads na própria aplicação desde que ele esteja logado. Também já foi pensado para ter imagem e modais padrão caso eles não estejam codificados na aplicação assim podendo reduzir custos na contratação de um Dev para desenvolver alguma pequena e simples tela.

## Stacks que serão utilizadas no Projeto

***Front-end:*** React, Node, Icones do FontAwesome, Axios, TailwindCSS.

***Back-end:*** Node, Express, Axios, JWT.

## Instalando e iniciando o Projeto
Clone o projeto: 
```js
   git clone https://github.com/DouglasSuzukiDS/ProAllCool.git
```

Entre na pasta em dois Terminais:
```js
   cd ProAllCool
```

Em um dos Terminais, entre na pasta **Frontend**.
```js
   cd Frontend
```

No outro Terminal, entre na pasta **Backend**.
```js
   cd Backend
```

Instale as dependências nas pastas do projeto, pasta **Frontend** e pasta **Backend**.
```js
   yarn | npm install
```

OBS¹: Caso nunca nunca teha instalado o **Nodemon**, é necessário instala-lo para que ele monitore o servidor (**Backend**).
```js
   yarn add --global nodemon | npm install -g nodemon
```

OBS²: Caso nunca nunca teha instalado o **ts-node**, é necessário instala-lo para que ele consiga entender o (**Backend**).
```js
   yarn add --global ts-node | npm install -g ts-node
```
<br/>

# Criando o Banco de Dados (utilizei o MySQL)
*Seguindo a forma que foi feito com o MySQL Workbench*
```sql
   CREATE DATABASE excursions; /* => Criação do Banco de Dados no Sistema. */

   USE excursions; /* => Selecionar o BD para usar. */
```

## Criando a Tabela de usuários Admnistrativos
```sql
   CREATE TABLE users (
      idUser INT PRIMARY KEY AUTO_INCREMENT,
      nameUser VARCHAR(50) NOT NULL,
      loginUser VARCHAR(50) NOT NULL,
      passwordUser VARCHAR(255) NOT NULL
   );
```

### Crie o usuário Administrador
```sql
   INSERT INTO users (nameUser, loginUser, passwordUser) VALUES ('Admin', 'admin', 'admin');
```

OBS³: Caso não consiga logar, é por conta que o sistema possui um sistema de hash de senhas e a senha compada deve estar nos padrões paraque o Bcrypt possa descriptografa-la.
```sql
   INSERT INTO users (nameUser, loginUser, passwordUser) VALUES ('Admin', 'admin', '$2b$10$WxnYuoEf9tO/jow4vFbHsu9u.xRj8mBdNtEfrCsWHXO..EVncS8X');
```

Caso não consiga, no basta Backend/database contem o arquivo das API's utilizadas no projeto, ele se chama ***Excursions - API.json*** . Basta importa-lo em um software para teste de API como o Postman ou Insomnia.

## Criando a Tabela de Excursões
```sql
   CREATE TABLE excursions (
      idExc INT PRIMARY KEY AUTO_INCREMENT,
      thumbnail VARCHAR(50) DEFAULT "DefaultImage",
      titleExc VARCHAR(255) NOT NULL,
      prevValueExc VARCHAR(20) NOT NULL,
      currentValueExc VARCHAR(20) NOT NULL,
      descriptionExc MEDIUMTEXT NOT NULL,
      dateExc VARCHAR(20) NOT NULL,
      returnExc VARCHAR(20) NOT NULL,
      activeExc BOOLEAN DEFAULT true,
      openModal VARCHAR(100) NOT NULL
   );
```

## Criando a Tabela de Possíveis Clientes
```sql
   CREATE TABLE possibleClient (
      idPosClient INT PRIMARY KEY AUTO_INCREMENT,
      idExc INT,
      nameExc VARCHAR(50) NOT NULL,
      namePosClient VARCHAR(50) NOT NULL,
      emailPosClient VARCHAR(50) NOT NULL,
      telPosClient VARCHAR(50) NOT NULL,
      instaPosClient VARCHAR(50),
      contactedPosClient BOOLEAN DEFAULT false
   );

   ALTER TABLE possibleClient ADD FOREIGN KEY (idExc) REFERENCES excursions (idExc);
```

<br>

# Variáveis de Ambiente
Como normas em qualquer lugar onde se contem senhas, a proteção deles devem ser protegidas pelo menos minimamente. Para isso no projeto usamos variáveis de ambiente. Onde as senhas devem ser mantidas em um arquivo .env. As váriaveis são as seguintes:
```js
   DB_HOST = 'Onde a aplicação está rodando' (por hora em 'localhost').

   DB_USER = 'USUÁRIO' (usuário para acesso ao Banco de Dados, no meu caso 'root').

   DB_PASSWORD = 'Sua senha do Bando de Dados'

   DB_DATABASE = 'Excursions' (nome do banco que você criou).

   SECRET = 'Sua chave criptografica'.
```
<br>

# Iniciando o Projeto
Depois de instalados as dependências nas pastas Frontend e Backend inicie os servidores nas suas respectivas pastas.

Na pasta **Frontend**:
```js
   yarn vite | npm vite
```

Na pasta **Backend**:
```js
   yarn run server | npm run server
```
<br>

# Rotas do Projeto
Rotas utilizadas em toda a aplicação.

# Rotas no Frontend:
Rota | Função
-----|-------
**/**   | *Página inicial do projeto*
**/secret** | *Página secreta especificamente para fazer o login no sistema.*
**/anything*** | *Qualquer outra rota diferente dessas informadas, será mostrado o componente de Erro.*
<br>

# Rotas no Backend:

## Gerenciamento de Usuários
Metodo | Rota | Função
------ | ---- | ------ 
**GET** | **/users** | *Lista todos os Usuários.*
**GET** | **/user/:id** | *Busca o usuário pelo seu ID.*
**POST** | **/login** | *Faz o login no sistema.*
**POST** | **/user** | *Faz o registro de um novo admnistrador.*
**PUT** | **/user/:id** | *Busca o usuário pelo ID para fazer a edição dos dados.*
**DELETE** | **/user/:id** | *Deleta o colaborador pelo seu ID.*

## Rotas utilizadas para o gerenciamento de Excursões

Método | Rota | Função
------ | ---- | ------ 
**GET** | **/excursions** | *Lista todos as Excursões.*
**GET** | **/excursion/:id** | *Busca a Excursão pelo seu ID.*
**POST** | **/excursion/:id** | *Faz o registro de uma nova excursão.*
**PUT** | **/excursion/:id** | *Busca a escursão pelo ID para fazer a edição das informações.*
**DELETE** | **/excursion/:id** | *Deleta a Excursão pelo seu ID.*
**DELETE** | **AllExcursions** | *Deleta todas as Excursões*

## Gerenciamento de Possíveis Clientes
Metodo | Rota | Função
------ | ---- | ------ 
**GET** | **/clients** | *Lista todos os possíveis clientes.*
**GET** | **/client/:id** | *Busca o posível cliente pelo seu ID.*
**POST** | **/client** | *Faz o registro de um novo possível cliente.*
**PUT** | **/client/:id** | *Busca o possível client pelo ID para fazer a edição dos dados.*
**DELETE** | **/client/:id** | *Deleta o possível client pelo seu ID.*
<br>

# Tipografia, Estilização & Cores
## Tipografia
Foi escolhida a fonte Roboto para a aplicação, onde ela é *Open source e monospacing.*

Ela pode ser baixada/importada no Google:
- [**Font Roboto**](https://fonts.google.com/specimen/Roboto)

## Estilização
A apicação foi feita utilizando a Biblioteca TailwindCSS:
- [**TailwindCSS**](https://tailwindcss.com)

## Cores
Cores utilizadas na aplicação.

**Cor** | **Nome da Variável** | **Hexadecimal** | **RGB**
------- | -------------------- | --------------- | ------- | 
![Dark](https://i.imgur.com/1XdDtLz.png) | ***Dark*** | ***#202225*** | ***32, 34, 37***
![Light](https://i.imgur.com/uvDmOHb.png) | ***Light*** | ***#C1C7E0*** | ***193, 199, 224***
![Gray 600](https://i.imgur.com/OJNe1oZ.png) | ***Gray-600*** | ***#4B5563*** | ***215, 14, 34***
![Purple 600](https://i.imgur.com/QLwnOFx.png) | ***Purple-600*** | ***#9333EA*** | ***147, 51, 234***
![Sky 600](https://i.imgur.com/YBNn2kK.png) | ***Sky-600*** | ***#0284C7*** | ***2, 132, 199***
![Yellow 600](https://i.imgur.com/nlVYXh8.png) | ***Yellow-600*** | ***#CABA04*** | ***202, 138, 4***
![Blue 600](https://i.imgur.com/EftzF14.png) | ***Blue-600*** | ***#2563EB*** | ***37, 99, 235***
![Blue 300](https://i.imgur.com/vhDa1AV.png) | ***Blue-300*** | ***#93C5FD*** | ***149, 197, 253***
![Indigo 600](https://i.imgur.com/hAmPm6C.png) | ***Indigo-600*** | ***#4F46E5*** | ***89, 70, 229***
![Indigo 300](https://i.imgur.com/R9InKzA.png) | ***Indigo-300*** | ***#A5B4FC*** | ***165, 180, 252***
![Red 600](https://i.imgur.com/sLYq2xA.png) | ***Red-600*** | ***#DC2626*** | ***220, 38, 38***
![Red 300](https://i.imgur.com/QdZVfkT.png) | ***Red-300*** | ***#FCA5A5*** | ***252, 165, 165***
![Cyan 600](https://i.imgur.com/Jzuy4hA.png) | ***Cyan-600*** | ***#0B91B2*** | ***8, 145, 178***
![Cyan 300](https://i.imgur.com/5a8vqNE.png) | ***Cyan-300*** | ***#67E8F9*** | ***103, 232, 249***

*Anotações*

Para uma nova excursão é necessário seguir algumas etapas para que o modal funcione perfeitamente:
OBS: Onde se encontrar **-** REMOVA ELE!

**01)** Crie o Component Modal na pasta Modal;

**02)** No Component *App.tsx*: Crie o state para exibição do modal com essa estrutura: *const [show-NameModal-Modal, set-NameModal-Modal] = useState(false)*;

**03)** No Component *App.tsx*: Na *switch* na função 'showModal', em qualquer um dos case antes do default, coloque o case do novo modal:
``` js
    case 'NameModal':
      set-NameModal-Modal!(!show-NameModal-Modal)
      break
```

**04)**  No Component *App.tsx*: No return do component, dentro da tag section, coloque o seguinte comando para exibir ou não o novo Modal:
``` js 
   {show-NameModal-Modal && <NameModal close={closeModal} />}
```
**05)** No Component *App.tsx*: Dentro do componente ***Excursions***, passe o state do novo modal como Prop. Siga como a estrutura, e salve a modificação com **CTRL + S**:
``` js
   show-NameModal-Modal={show-NameModal-Modal}
   set-NameModal-Modal={set-NameModal-Modal}
```  

**05)** Feito isso é necessário inserir a Prop no Type. Para isso deve-se ir dentro da pasta **types** no arquivo **Props.ts** e no final, colocar o que a Prop é, e salve a modificação com **CTRL + S**. **NÃO MEXA NA ESTRUTURA APÓS O ?:**:
``` js    
   show-NameModal-Modal?: boolean
   set-NameModal-Modal?: Dispatch<SetStateAction<boolean>>
```

**06)** Após as etapas, basta pegar a imagem de Thumb da excurção e inserirdentro da pasta **assets/images**;

**07)** Nomeia a imagem seguindo o padrão já definido, NomeExcursao01;

**08)** Agora vamos para o Component **ExcursionItem.tsx**. Nele já devemos importar a imagem thumb da nova excursão:

``` js
   import NomeExcursao01 from '../assets/images/NomeExcursao01.png'
```

**09)** No **switch** da função **showThumbnail**, em qualquer um dos case antes do default, coloque a case com o nome da thumb:

``` js
   case 'NomeExcursao01': 
      return NomeExcursao01
```
**10)** Salve as modificações no arquivo com **CTRL + S**.

**11)** Realizando essas etapas, a thumb e o modal dela devem funcionar, caso não funcione entra com os valores default que garante que qualquer excursão tenha uma thumb e um modal de exibição. Caso os dados estejam errados basta logar no sistema e fazer edição de qualquer dado, se atentando nos passos acima pois os nomes das impostações e configurações são essenciais para o funcionamento correto.