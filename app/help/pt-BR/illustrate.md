---
title: Comece um manual no Ilustrar
summary: O ambiente Ilustrar faz manuais a partir do seu projeto: vistas, desenhos explodidos em line art com balões e uma lista de peças, instruções passo a passo, animações e um arquivo 3D que um cliente pode abrir sem CAD. Um manual é um arquivo próprio.
keywords: ilustrar, manual, ilustração técnica, documentação, vista explodida, lista de peças, instruções, partcraft-manual
from: e447e0ab
---

**Ilustrar** é o ambiente para os documentos de que as pessoas precisam em torno de um projeto: vistas explodidas com balões e uma lista de peças, ilustrações em line art para manuais, instruções passo a passo, animações e um arquivo 3D que um cliente pode abrir sem CAD. Escolha {{ui:Ilustrar}} no seletor {{ui:Ambiente}} no início da barra de ferramentas.

Um **manual** é um arquivo próprio (`<name>.partcraft-manual.json`). Ele guarda uma cópia da forma de cada peça, a árvore de produtos e as propriedades das peças, além de um link de volta para a origem, para que você possa trabalhar no manual enquanto o projeto segue em andamento. Quando o projeto muda, [Atualizar a partir do projeto](topic:illustrate-update) traz as alterações.

## Iniciar um

Clique em {{ui:Novo}} no grupo {{ui:Manual}}, depois:

- {{ui:A partir da peça aberta}}: a peça aberta no Projeto.
- {{ui:A partir da montagem aberta}}: aparece no lugar quando uma montagem está aberta; as suas peças, posições, números de peça, materiais e vistas explodidas vêm junto.
- {{ui:A partir de um arquivo de montagem…}}: um `.partcraft-asm.json` salvo; o PartCraft cria as peças primeiro.
- {{ui:A partir de outro arquivo…}}: glTF (.glb, .gltf), OBJ, STL ou 3MF. A árvore e os nomes do arquivo são mantidos, e cópias de uma mesma peça (a mesma forma colocada duas vezes) viram uma só peça com quantidade. Arquivos STL e OBJ não informam a sua unidade, então ela é perguntada. Arquivos STL são lidos com Z para cima; glTF e 3MF informam o seu próprio.

Enquanto um manual está aberto, o Ilustrar mostra a cópia própria do manual das peças; a peça ou montagem aberta no Projeto fica oculta até você voltar ao Projeto.

## Salvar e abrir

{{ui:Salvar}} no grupo {{ui:Manual}} (ou {{key:Mod+S}}) salva o manual; {{ui:Abrir}} abre um. Cada alteração no Ilustrar é um passo do histórico próprio do manual: {{ui:Desfazer}} e {{ui:Refazer}} atuam sobre o manual enquanto o Ilustrar estiver aberto.

## Ainda não implementado

- Arquivos STEP ainda não abrem em {{ui:A partir de outro arquivo…}}. Abra o STEP no Projeto (ele entra como corpo sólido: veja [Abrir um arquivo STEP](topic:import-step)) e comece o manual com {{ui:A partir da peça aberta}}, ou salve-o como glTF, 3MF, OBJ ou STL.
- ModelCraft e BimCraft ainda não podem enviar um modelo diretamente ao Ilustrar: salve-o como glTF (.glb) e use {{ui:A partir de outro arquivo…}}.

Próximo: [Vistas e aparências](topic:illustrate-views).
