---
title: Exportar para impressão, STEP e DXF
summary: Exporte a peça como STL ou 3MF para impressão 3D, como sólido STEP exato para outros programas de CAD e CAM, e um esboço ou uma face plana como DXF para corte a laser e a jato de água.
keywords: exportar, guardar como, ifc, bim, conjuntos de propriedades, stl, 3mf, impressão 3D, fatiador, step, stp, step exato, b-rep, ap242, ap214, cam, oficina mecânica, fresagem, dxf, laser, jato de água, cnc, padrão plano, perfil, malha, facetado
from: e1de71d5
---

As exportações são cópias noutros formatos. Mantenha também o ficheiro `.partcraft.json`: é o único ficheiro que o PartCraft consegue voltar a abrir e editar.

Todas as exportações trabalham sobre a peça no ecrã, em milímetros. Numa montagem, STL, 3MF, STEP e Desenho (PDF) exportam antes a montagem inteira: veja [Lista de peças, vistas explodidas e peças móveis](topic:assembly-bom-explode). Se ainda não existir nenhum sólido: "Ainda não existe nenhum sólido para exportar."

## Para impressão 3D: STL ou 3MF

1. Opcional: para superfícies redondas e suaves, clique num espaço vazio para não ficar nada selecionado e defina **Curvas** como **Fina (128 por volta)** ou **Muito fina (256 por volta)** no painel da direita. STL e 3MF são sempre feitos de triângulos.
2. Escolha {{ui:Exportar}} e depois {{ui:STL, para impressão 3D}} ou {{ui:3MF, para impressão 3D}}.
3. O ficheiro é transferido. A barra de estado indica, por exemplo, "Exportado Part1.stl (binário, mm, Z para cima, 1536 triângulos)."

Os dois formatos são **Z para cima**, como as impressoras e os fatiadores esperam. O mundo do PartCraft é Y para cima, por isso a exportação roda a peça: o que aponta para cima no PartCraft (perpendicular ao plano Topo) aponta para cima no fatiador, e uma peça desenhada no plano Topo fica deitada na mesa. Se necessário, ajuste a orientação final no fatiador.

O 3MF é um formato mais recente e mais pequeno, que os fatiadores leem com as unidades incluídas. Use STL se um programa não aceitar 3MF.

Para verificar primeiro que a peça está fechada, cabe na mesa da impressora e assenta numa face plana, use {{ui:Exportar}} › {{ui:Verificar para impressão 3D (STL ou 3MF)…}}: veja [Preparar uma peça para impressão 3D](topic:print-3d).

## Para outros programas de CAD: STEP

Escolha {{ui:Exportar}} e depois {{ui:STEP AP242 (sólido exato)}}. Grava a peça como um único sólido exato, em milímetros, virado para Z para cima. As faces redondas são gravadas como cilindros, cones, esferas e toros verdadeiros, com círculos verdadeiros nas arestas, para que o outro programa possa reconhecer um furo como furo. Um corpo aberto a partir de um ficheiro STEP mantém as faces planas, cilindros, cones, esferas e toros desse ficheiro, por isso também saem exatos. As faces sem essa superfície (a lateral de uma spline, uma rosca modelada, um corpo vindo de uma malha STL, OBJ ou 3MF, uma spline de um ficheiro STEP, e faces por varrimento ou por revolução) ficam como facetas planas no mesmo sólido, e a barra de estado indica quantas são. Por exemplo, a barra de estado indica "Exportado Flange.step (AP242, sólido exato, mm, Z para cima): 14 faces nas suas superfícies verdadeiras (10 cilíndricas, 1 cónica, 0 esféricas, 0 toroidais), 0 curvas de aresta ajustadas." Contém apenas o sólido: sem histórico, sem esboços, sem desenho. Se o outro programa ler apenas AP214, escolha {{ui:STEP AP214 (sólido exato)}}: o mesmo sólido nesse esquema mais antigo.

O que é exato e o que não é:

- Faces planas, cilindros (furos, saliências, boleados em arestas retas), cones (escareados, conicidades), esferas e toros são exatos, e o mesmo acontece com as suas arestas retas, circulares e elípticas. A definição **Curvas** não os altera.
- Onde duas faces redondas se cruzam (um furo feito atravessando um veio), a aresta é uma curva suave ajustada às duas superfícies com uma tolerância de 0.00001 mm; "curvas de aresta ajustadas" conta-as.
- Uma cavidade fechada dentro da peça é gravada como um vazio do sólido. Vários corpos separados são gravados como vários sólidos.
- Uma montagem ainda não é gravada em STEP exato: exporte cada peça.

Foi verificado ao ler os ficheiros de novo no OpenCascade, que indica sólidos válidos com volumes calculados à mão. Ainda não foi aberto em todos os programas de CAD ou CAM. Se algum recusar um ficheiro, {{ui:STEP (facetado, kernel de malha)}} grava a mesma forma como faces planas (nos eixos do próprio PartCraft, Y para cima), e comunique-o através de {{ui:Ajuda}} › {{ui:Comunicar um problema}}.

Para maquinação, a área de trabalho Manufacture também grava o sólido exato nas coordenadas de trabalho dessa preparação: veja [Criar percursos de ferramenta e G-code](topic:manufacture#exact-step-for-the-shop).

## Para programas BIM: IFC com todas as propriedades

Escolha {{ui:Exportar}} e depois {{ui:IFC 4 (com todas as propriedades)}}. Grava a peça como elemento IFC 4 para modelos de edifícios e instalações, com a sua forma como triângulos (Z para cima, milímetros), e com o que o PartCraft sabe sobre ela, como conjuntos de propriedades:

| Conjunto de propriedades | Contém |
|---|---|
| **PartCraft_Part** | Nome, material e a sua massa volúmica, a configuração ativa, quantos corpos; numa montagem, também o número da peça e a descrição |
| **PartCraft_Parameters** | Cada parâmetro da peça com o seu valor; a expressão de uma fórmula e uma nota ficam na descrição da propriedade |
| **PartCraft_TitleBlock** | Os campos da legenda do desenho que preencheu (título, número do desenho, revisão, empresa, desenhado, verificado e aprovado por, data, acabamento, tolerância geral) e o formato da folha |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volume, área de superfície, massa (com um material) e as dimensões globais |

O material fica associado como material IFC, e o número do desenho é a etiqueta do elemento. Numa montagem, cada peça é gravada uma vez como tipo com as suas propriedades, e cada cópia fica colocada onde a montagem a põe, com os seus próprios valores em **PartCraft_Instance**: o seu nome, o número do item na lista de peças e se é a peça fixa ao solo.

## Para perfis de laser, jato de água ou CNC: DXF

Dois tipos de DXF, ambos na versão R12, que todos os programas de CAD e CAM abrem:

### Um esboço

1. Selecione o esboço no histórico (ou tenha-o aberto).
2. Escolha {{ui:Exportar}} e depois {{ui:DXF do esboço ou da face plana}}. (O painel da direita do esboço tem também {{ui:Exportar como DXF}}.)

Obtém `<part> - <sketch>.dxf` nas coordenadas do próprio esboço: linhas, arcos e círculos verdadeiros na camada **PROFILE**, geometria de construção na **CONSTRUCTION**, pontos soltos na **POINTS**.

### Uma face plana do sólido

1. Clique numa face plana na vista (por exemplo, a face superior de uma placa com furos).
2. Escolha {{ui:Exportar face como DXF}} no painel da direita, ou {{ui:Exportar}} e depois {{ui:DXF do esboço ou da face plana}}.

Obtém `<part> - face.dxf`: o contorno da face e cada furo nela. Um furo redondo (um círculo completo onde um cilindro encontra a face: um furo perfurado, ou um furo de um ficheiro STEP aberto) é escrito como círculo verdadeiro, com o próprio centro e raio do furo. Todos os outros contornos são polilinhas fechadas, e as suas arestas redondas (cantos de boleado, rasgos, arcos) são as suas facetas; por isso defina primeiro **Curvas** como Fina se a ferramenta de corte as seguir de perto. A barra de estado indica quantos contornos existem, quantos são círculos verdadeiros e a área da face.

Se não estiver selecionado nem um esboço nem uma face plana: "Abra ou selecione um esboço, ou escolha uma face plana, para exportar DXF."

## Um desenho

O desenho em PDF tem o seu próprio passo a passo: [Criar uma folha de desenho](topic:drawing-pdf).

## Formatos não disponíveis

glTF, OBJ, IGES e Parasolid não são exportados nesta versão. O DWG só é gerado pelo pacote de variantes, como folha de desenho: veja [Criar um pacote de variantes a partir das suas configurações](topic:variant-pack). Veja [Formatos de ficheiro](topic:file-formats).
