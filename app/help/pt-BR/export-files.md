---
title: Exportar para impressão, STEP e DXF
summary: Exporte a peça como STL ou 3MF para impressão 3D, como sólido STEP exato para outros programas de CAD e CAM, e um esboço ou uma face plana como DXF para corte a laser e jato d'água.
keywords: exportar, salvar como, ifc, bim, conjuntos de propriedades, stl, 3mf, impressão 3D, fatiador, step, stp, step exato, b-rep, ap242, ap214, cam, oficina de usinagem, fresamento, dxf, laser, jato d'água, cnc, planificação, perfil, malha, facetado
from: e1de71d5
---

Exportações são cópias em outros formatos. Mantenha também o arquivo `.partcraft.json`: ele é o único arquivo que o PartCraft consegue abrir de novo e editar.

Todas as exportações trabalham na peça na tela, em milímetros. Em uma montagem, STL, 3MF, STEP e Desenho (PDF) exportam a montagem inteira: veja [Lista de peças, vistas explodidas e peças móveis](topic:assembly-bom-explode). Se ainda não houver sólido: "Ainda não há sólido para exportar."

## Para impressão 3D: STL ou 3MF

1. Opcional: para superfícies redondas e lisas, clique em um espaço vazio para não selecionar nada e defina **Curvas** como **Fina (128 por volta)** ou **Muito fina (256 por volta)** no painel direito. STL e 3MF são sempre feitos de triângulos.
2. Escolha {{ui:Exportar}}, depois {{ui:STL, para impressão 3D}} ou {{ui:3MF, para impressão 3D}}.
3. O arquivo é baixado. A barra de status mostra, por exemplo, "Exportado Part1.stl (binário, mm, Z para cima, 1536 triângulos)."

Os dois formatos usam **Z para cima**, como as impressoras e os fatiadores esperam. O espaço próprio do PartCraft é Y para cima, então a exportação gira a peça: o que aponta para cima no PartCraft (perpendicular ao plano Superior) aponta para cima no fatiador, e uma peça esboçada no plano Superior fica deitada na mesa de impressão. Ajuste a orientação final no fatiador, se necessário.

O 3MF é um formato mais novo e menor, que os fatiadores leem com as unidades incluídas. Use STL se algum programa não aceitar 3MF.

Para verificar antes se a peça está fechada, cabe na mesa da sua impressora e se apoia em uma face plana, use {{ui:Exportar}} › {{ui:Verificar para impressão 3D (STL ou 3MF)…}}: veja [Preparar uma peça para impressão 3D](topic:print-3d).

## Para outros programas de CAD: STEP

Escolha {{ui:Exportar}} e depois {{ui:STEP AP242 (sólido exato)}}. Ele grava a peça como um único sólido exato, em milímetros, girado para Z para cima. As faces redondas são gravadas como cilindros, cones, esferas e toros verdadeiros, com círculos verdadeiros nas arestas, para que o outro programa reconheça um furo como furo. Um corpo aberto de um arquivo STEP mantém as faces planas, cilindros, cones, esferas e toros desse arquivo, então também saem exatos. Faces sem essa superfície (a lateral de uma spline, uma rosca modelada, um corpo de uma malha STL, OBJ ou 3MF, uma spline de arquivo STEP, faces varridas e de revolução) continuam como facetas planas no mesmo sólido, e a barra de status informa quantas. A barra de status mostra, por exemplo, "Exportado Flange.step (AP242, sólido exato, mm, Z para cima): 14 faces em suas superfícies verdadeiras (10 cilíndricas, 1 cônica, 0 esféricas, 0 toroidais), 0 curvas de aresta ajustadas." Ele contém apenas o sólido: sem histórico, sem esboços, sem desenho. Se o outro programa ler somente AP214, escolha {{ui:STEP AP214 (sólido exato)}}: o mesmo sólido nesse esquema mais antigo.

O que é exato e o que não é:

- Faces planas, cilindros (furos, saliências, arredondamentos em arestas retas), cones (escareados, conicidades), esferas e toros são exatos, assim como suas arestas retas, circulares e elípticas. A configuração **Curvas** não altera essas faces.
- Onde duas faces redondas se cruzam (um furo atravessando um eixo), a aresta é uma curva suave ajustada às duas superfícies com tolerância de 0.00001 mm; "curvas de aresta ajustadas" conta essas arestas.
- Uma cavidade fechada dentro da peça é gravada como um vazio do sólido. Vários corpos separados são gravados como vários sólidos.
- Uma montagem ainda não é gravada como STEP exato: exporte cada peça.

Ele foi verificado relendo os arquivos no OpenCascade, que informa sólidos válidos com os volumes calculados à mão. Ainda não foi aberto em todos os programas de CAD ou CAM; se algum recusar um arquivo, {{ui:STEP (facetado, kernel de malha)}} grava a mesma forma com faces planas (nos eixos próprios do PartCraft, Y para cima). Avise-nos por {{ui:Ajuda}} › {{ui:Relatar um problema}}.

Para usinagem, a área de trabalho Manufatura também grava o sólido exato nas coordenadas de trabalho da preparação: veja [Criar trajetórias da ferramenta e G-code](topic:manufacture#exact-step-for-the-shop).

## Para programas BIM: IFC com todas as propriedades

Escolha {{ui:Exportar}} e depois {{ui:IFC 4 (com todas as propriedades)}}. Ele grava a peça como um elemento IFC 4 para modelos de edificações e de plantas industriais, com a forma em triângulos (Z para cima, milímetros) e com o que o PartCraft sabe sobre ela, como conjuntos de propriedades:

| Conjunto de propriedades | Contém |
|---|---|
| **PartCraft_Part** | Nome, material e sua densidade, a configuração ativa, quantos corpos; em uma montagem, também o número e a descrição da peça |
| **PartCraft_Parameters** | Cada parâmetro da peça com seu valor; a expressão de uma fórmula e uma nota ficam na descrição da propriedade |
| **PartCraft_TitleBlock** | Os campos da legenda do desenho que você preencheu (título, número do desenho, revisão, empresa, desenhado, verificado e aprovado por, data, acabamento, tolerância geral) e o tamanho da folha |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volume, área de superfície, massa (com um material) e as dimensões gerais |

O material é anexado como material IFC, e o número do desenho é a etiqueta do elemento. Em uma montagem, cada peça é gravada uma vez como um tipo que contém suas propriedades, e cada cópia é posicionada onde a montagem a coloca, com seus próprios valores em **PartCraft_Instance**: o nome, o número do item na lista de materiais e se é a peça fixa ao solo.

## Para perfis de laser, jato d'água ou CNC: DXF

Dois tipos de DXF, ambos na versão R12, que todo programa de CAD e CAM abre:

### Um esboço

1. Selecione o esboço no histórico (ou deixe-o aberto).
2. Escolha {{ui:Exportar}}, depois {{ui:DXF do esboço ou da face plana}}. (O painel direito do esboço também tem {{ui:Exportar como DXF}}.)

Você obtém `<peça> - <esboço>.dxf` nas coordenadas do próprio esboço: linhas, arcos e círculos verdadeiros na camada **PROFILE**, geometria de construção na **CONSTRUCTION**, pontos soltos na **POINTS**.

### Uma face plana do sólido

1. Clique em uma face plana na vista (por exemplo, o topo de uma chapa com furos).
2. Escolha {{ui:Exportar face como DXF}} no painel direito, ou {{ui:Exportar}}, depois {{ui:DXF do esboço ou da face plana}}.

Você obtém `<peça> - face.dxf`: o contorno da face e cada furo nela. Um furo redondo (um círculo inteiro onde um cilindro encontra a face: um furo perfurado, ou um furo de um arquivo STEP aberto) é gravado como círculo verdadeiro, com o centro e o raio do próprio furo. Todo outro contorno é uma polilinha fechada, e suas arestas redondas (cantos arredondados, rasgos, arcos) são suas facetas; por isso, defina **Curvas** como Fina antes, se a ferramenta de corte for seguir essas arestas de perto. A barra de status informa quantos contornos há, quantos deles são círculos verdadeiros e a área da face.

Se nem um esboço nem uma face plana estiverem selecionados: "Abra ou selecione um esboço, ou escolha uma face plana, para exportar DXF."

## Um desenho

O desenho em PDF tem seu próprio passo a passo: [Criar uma folha de desenho](topic:drawing-pdf).

## Formatos indisponíveis

glTF, OBJ, IGES e Parasolid não são exportados nesta versão. O DWG é gravado somente pelo pacote de variantes, como folha de desenho: veja [Criar um pacote de variantes a partir das suas configurações](topic:variant-pack). Veja [Formatos de arquivo](topic:file-formats).
