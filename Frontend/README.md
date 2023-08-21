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
