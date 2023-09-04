# ProAllCool
![ProAllCool](https://i.imgur.com/t0nRtf6.png)


O projeto ***ProAllCool*** simula uma *agência de turismo*, onde o possível cliente deve contatar a empresa para receber mais informações sobre determianda excursão ou dúvida. Para isso ele precisa fornecer alguns contatos para que a empresa entre em contato com ele para sanar quaisquer questionamentos. Assim ele fornece o Lead (demonstração de interece há algum serviço/produto) para à empresa.

## Pontos importantes do projeto
Além do real objetivo de conseguir vender um serviço/produto e obter o Lead, o projeto ***ProAllCool*** conta recursos interativos para o proprietário, podendo ser facilmente adepatado para outros negócios, como por exemplo uma página de pré-vendas. Conta com um sistema de login para que o proprietário possa gerenciar os dados do serviço/produto ofertado, podendo, criar, editar e excluir os produtos/serviços(para excluir é necessário excluir todos os Leads relacionado ao serviço/produto*), e verificar os Leads na própria aplicação desde que ele esteja logado. Também já foi pensado para ter imagem e modais padrão caso eles não estejam codificados na aplicação assim podendo reduzir custos na contratação de um Dev para desenvolver alguma pequena e simples tela.

## Stacks que serão utilizadas no Projeto

***Front-end:*** React, Node, Icones do FontAwesome, Axios, TailwindCSS.

***Back-end:*** Node, Express, Axios, JWT.

### Cores
Cores utilizadas na aplicação.

**Cor** | **Nome da Variável** | **Hexadecimal** | **RGB**
------- | ------- | ---------- | --------------- | 
![Light](https://i.imgur.com/uvDmOHb.png) | ***Light*** | ***#C1C7E0*** | ***193, 199, 224***
![Dark](https://i.imgur.com/1XdDtLz.png) | ***Dark*** | ***#202225*** | ***32, 34, 37***
![Blue 600](https://i.imgur.com/EftzF14.png) | ***Blue-600*** | ***#2563EB*** | ***37, 99, 235***
![Blue 300](https://i.imgur.com/vhDa1AV.png) | ***Blue-300*** | ***#93C5FD*** | ***149, 197, 253***
![Indigo 600](https://i.imgur.com/hAmPm6C.png) | ***Indigo-600*** | ***#4F46E5*** | ***89, 70, 229***
![Indigo 300](https://i.imgur.com/R9InKzA.png) | ***Indigo-300*** | ***#A5B4FC*** | ***165, 180, 252***
![Red 600](https://i.imgur.com/sLYq2xA.png) | ***Red-600*** | ***#DC2626*** | ***220, 38, 38***
![Red 300](https://i.imgur.com/QdZVfkT.png) | ***Red-300*** | ***#FCA5A5*** | ***252, 165, 165***
![Cyan 600](https://i.imgur.com/Jzuy4hA.png) | ***Cyan-600*** | ***#0B91B2*** | ***8, 145, 178***
![Cyan 300](https://i.imgur.com/5a8vqNE.png) | ***Cyan-300*** | ***#67E8F9*** | ***103, 232, 249***
![Purple 600](https://i.imgur.com/QLwnOFx.png) | ***Purple-600*** | ***#9333EA*** | ***147, 51, 234***
![Yellow 600](https://i.imgur.com/nlVYXh8.png) | ***Yellow-600*** | ***#CABA04*** | ***202, 138, 4***
![Sky 600](https://i.imgur.com/YBNn2kK.png) | ***Sky-600*** | ***#0284C7*** | ***2, 132, 199***
![Gray 600](https://i.imgur.com/OJNe1oZ.png) | ***Gray-600*** | ***#4B5563*** | ***215, 14, 34***

*Anotações*

Para uma nova excursção é necessário seguir algumas etapas para que o modal funcione perfeitamente:
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
