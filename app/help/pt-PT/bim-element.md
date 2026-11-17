---
title: Desenhar um elemento do BimCraft e guardá-lo de volta
summary: Uma peça enviada do BimCraft abre com o edifício à sua volta, a cinzento e só de leitura. Altere-a e depois guarde-a de volta para que o BimCraft possa aceitar a nova forma.
keywords: bimcraft, bim, elemento, enviar, guardar de volta, ligação, edifício, contexto, vizinhos, apoio, suporte, ifc, aceitar
from: 0978fe53
---

## O que vai fazer

Trabalhe numa peça que veio de um modelo do BimCraft, no seu lugar no edifício, e envie a nova forma de volta.

## Passos

1. No BimCraft, escolha um elemento e escolha {{ui:Ligações de peça}} › {{ui:Enviar para PartCraft}}. O PartCraft abre-o como uma nova peça. A barra de estado indica que é um elemento BIM.
2. Os elementos à volta (a menos de 3 m) são desenhados a cinzento. Servem de referência ao desenho. Não os pode escolher nem alterar, e não são guardados no ficheiro da peça.
3. Altere a peça como qualquer outra: cortar, acrescentar, furar, espelhar. A origem e os eixos são os do próprio elemento, por isso a peça volta ao sítio onde estava.
4. Escolha {{ui:Ficheiro}} › {{ui:Exportar}} › {{ui:Guardar de volta no BimCraft}}. A barra de estado indica a revisão que enviou.
5. No BimCraft, o elemento aparece como alterado até a pessoa responsável o aceitar.

## O que deve ver

- A peça mantém a ligação no ficheiro. Se a abrir mais tarde, a barra de estado continua a indicar que é um elemento BIM. O edifício a cinzento volta enquanto o navegador ainda tiver o pacote com que foi enviado.
- Voltar a guardar envia a revisão 2, 3 e assim por diante. O BimCraft mantém a mais recente.

## Bom saber

- A forma volta como malha, em milímetros, nos eixos do próprio elemento. As operações ficam no PartCraft.
- {{ui:Guardar de volta no BimCraft}} não faz nada para uma peça que não veio do BimCraft.
- Uma peça sem sólido ainda não tem nada para enviar.
- Ambas as aplicações têm de estar abertas no mesmo navegador: nada é carregado, as duas páginas passam o elemento entre si.
