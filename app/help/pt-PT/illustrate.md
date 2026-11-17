---
title: Iniciar um manual em Ilustrar
summary: A área de trabalho Ilustrar cria manuais a partir do seu projeto: vistas, desenhos a traço explodidos com balões e uma lista de peças, instruções passo a passo, animações e um ficheiro 3D interativo. Um manual é um ficheiro próprio.
keywords: ilustrar, manual, ilustração técnica, documentação, vista explodida, lista de peças, instruções, partcraft-manual
from: e447e0ab
---

**Ilustrar** é a área de trabalho para os documentos de que as pessoas precisam em torno de um projeto: vistas explodidas com balões e uma lista de peças, ilustrações a traço para manuais, instruções passo a passo, animações e um ficheiro 3D que um cliente pode abrir sem CAD. Escolha {{ui:Ilustrar}} no seletor {{ui:Área de trabalho}}, no início da barra de ferramentas.

Um **manual** é um ficheiro próprio (`<name>.partcraft-manual.json`). Guarda uma cópia da forma de cada peça, da árvore do produto e das propriedades das peças, e uma ligação à origem, para que se possa trabalhar no manual enquanto o projeto avança. Quando o projeto muda, [Atualizar a partir do projeto](topic:illustrate-update) traz as alterações.

## Criar um

Clique em {{ui:Novo}} no grupo {{ui:Manual}} e, em seguida:

- {{ui:A partir da peça aberta}}: a peça aberta no Design.
- {{ui:A partir da montagem aberta}}: aparece em vez desta quando há uma montagem aberta; as suas peças, as respetivas posições, números de peça, materiais e vistas explodidas vêm com ela.
- {{ui:A partir de um ficheiro de montagem…}}: um `.partcraft-asm.json` guardado; o PartCraft cria primeiro as suas peças.
- {{ui:A partir de outro ficheiro…}}: glTF (.glb, .gltf), OBJ, STL ou 3MF. A árvore e os nomes do ficheiro são mantidos, e as cópias de uma mesma peça (a mesma forma colocada duas vezes) passam a ser uma só peça com uma quantidade. Os ficheiros STL e OBJ não indicam a sua unidade, por isso a unidade é pedida. Os ficheiros STL são lidos com Z para cima; os glTF e 3MF indicam o seu próprio.

Enquanto um manual está aberto, o Ilustrar mostra a cópia própria do manual das peças; a peça ou montagem aberta no Design fica oculta até se voltar ao Design.

## Guardar e abrir

{{ui:Guardar}} no grupo {{ui:Manual}} (ou {{key:Mod+S}}) guarda o manual; {{ui:Abrir}} abre um. Cada alteração no Ilustrar é um passo do próprio histórico do manual: {{ui:Anular}} e {{ui:Refazer}} atuam sobre o manual enquanto o Ilustrar estiver aberto.

## Ainda não implementado

- Os ficheiros STEP ainda não abrem em {{ui:A partir de outro ficheiro…}}. Em vez disso, abra o STEP no Design (entra como corpo sólido: ver [Abrir um ficheiro STEP](topic:import-step)) e inicie o manual com {{ui:A partir da peça aberta}}, ou guarde-o em glTF, 3MF, OBJ ou STL.
- O ModelCraft e o BimCraft ainda não conseguem entregar um modelo diretamente ao Ilustrar: guarde-o como glTF (.glb) e use {{ui:A partir de outro ficheiro…}}.

Seguinte: [Vistas e aspetos](topic:illustrate-views).
