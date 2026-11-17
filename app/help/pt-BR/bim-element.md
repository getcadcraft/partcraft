---
title: Projetar um elemento do BimCraft e salvá-lo de volta
summary: Uma peça enviada do BimCraft abre com o edifício ao redor, em cinza e somente leitura. Altere-a e depois salve-a de volta para que o BimCraft possa aceitar a nova forma.
keywords: bimcraft, bim, elemento, enviar, salvar de volta, link, edifício, contexto, vizinhos, suporte, ifc, aceitar
from: 0978fe53
---

## O que você vai fazer

Trabalhar em uma peça que veio de um modelo do BimCraft, no lugar dela no edifício, e enviar a nova forma de volta.

## Passos

1. No BimCraft, selecione um elemento e escolha {{ui:Vínculos da peça}} › {{ui:Enviar para o PartCraft}}. O PartCraft o abre como uma nova peça. A barra de status informa que ele é um elemento do BIM.
2. Os elementos ao redor (a até 3 m) são desenhados em cinza. Eles estão ali para servir de referência no projeto. Você não pode selecioná-los nem alterá-los, e eles não são salvos no arquivo da peça.
3. Altere a peça como qualquer outra: corte, adicione, fure, espelhe. A origem e os eixos são os do próprio elemento, então a peça volta ao lugar onde estava.
4. Escolha {{ui:Arquivo}} › {{ui:Exportar}} › {{ui:Salvar de volta no BimCraft}}. A barra de status informa qual revisão você enviou.
5. No BimCraft, o elemento aparece como alterado até que a pessoa de lá o aceite.

## O que você deve ver

- A peça mantém o vínculo no arquivo. Se você a abrir depois, a barra de status ainda informa que é um elemento do BIM. O edifício cinza volta enquanto o navegador ainda tiver o pacote com que a peça foi enviada.
- Salvar de novo envia a revisão 2, 3 e assim por diante. O BimCraft mantém a mais recente.

## Vale saber

- A forma volta como malha, em milímetros, nos eixos do próprio elemento. Os recursos permanecem no PartCraft.
- {{ui:Salvar de volta no BimCraft}} não faz nada para uma peça que não veio do BimCraft.
- Uma peça sem sólido ainda não tem nada para enviar.
- Os dois aplicativos devem estar abertos no mesmo navegador: nada é enviado ao servidor; as duas páginas passam o elemento entre si.
