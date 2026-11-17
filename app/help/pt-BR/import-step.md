---
title: Abra um arquivo STEP e construa sobre ele
summary: Traga um modelo STEP de um fornecedor ou de outro programa CAD para o PartCraft como corpo sólido, como uma peça nova ou adicionado à peça atual, defina qual é o lado de cima e acrescente esboços e recursos a ele.
keywords: step, stp, importar, abrir step, ap203, ap214, ap242, modelo de fornecedor, sólido simples, sólido importado, eixo para cima, z para cima, y para cima, triângulos, facetado, montagem step
from: ca0eca5f
---

O PartCraft abre arquivos STEP (`.step` ou `.stp`, AP203, AP214 e AP242) como **corpos sólidos** nos quais você pode fazer esboços, cortar, furar e combinar com os seus próprios recursos. O corpo não tem histórico próprio: você não consegue alterar as dimensões com que foi feito, apenas adicionar a ele ou cortar dele.

Esta versão constrói todas as peças com o núcleo de malha, então um arquivo STEP é **lido como triângulos**: faces planas continuam planas, e faces curvas (cilindros, cones, esferas, toros, superfícies B-spline) viram muitas pequenas faces planas. O volume fica a uma fração de um por cento do valor exato. Manter as faces curvas exatamente exige um núcleo exato, que não está nesta versão.

## Abrir um arquivo STEP

1. Escolha {{ui:Abrir}} ou pressione {{key:Mod+O}} e selecione o arquivo `.step` ou `.stp`. Ou solte-o na vista 3D.
2. O PartCraft lê o arquivo e mostra o que encontrou, por exemplo: "Arquivo AP214: 1 sólido, 10 faces, lido como triângulos." Abaixo ficam a contagem de triângulos, qualquer coisa que tenha precisado deixar de fora ou unir, e se o resultado fecha.
3. Confira **Para cima no arquivo**. Um arquivo STEP informa a própria unidade (milímetros, polegadas, metros…); o PartCraft converte para milímetros, então **Unidades no arquivo** mostra Milímetros, "o arquivo informa isso". **Tamanho aqui** mostra o tamanho que terá.
4. Escolha {{ui:Abrir como corpo}} para uma peça vazia, ou {{ui:Adicionar a esta peça}} / {{ui:Nova peça}} quando a peça já tiver recursos. Ao adicionar, o PartCraft pergunta o que fazer com **Usar para**: adicionar, cortar ou manter apenas a sobreposição.

Um recurso **Imported1** aparece no histórico, e a barra de status diz, por exemplo, "plate.step é um corpo sólido: 57995.937 mm³, 6 faces planas para esboço."

## Um STEP de montagem

Uma montagem entra como **um só corpo**, com cada peça onde o arquivo a coloca ("3 peças posicionadas no arquivo entram onde estão"). Uma peça usada duas vezes entra duas vezes. Os nomes das peças e a árvore da montagem não são mantidos.

## Definir qual é o lado de cima

A maioria dos programas CAD usa Z para cima; o PartCraft usa Y para cima. Por padrão, o PartCraft gira o arquivo para que o seu Z aponte para cima aqui. Se a peça chegar deitada de lado, selecione **Imported1** e defina **Para cima no arquivo** como **Y para cima**. **Unidades no arquivo** e **Usar para** também podem ser alterados ali; cada alteração é um passo de desfazer.

## Construir sobre ele

- Clique em uma face plana do corpo e escolha {{ui:Esboço nesta face}}. As faces planas do modelo STEP mantêm o seu lugar quando o corpo é reconstruído.
- Adicione cortes, furos, saliências, matrizes e espelhamentos como em qualquer peça.
- Confira o tamanho na caixa **Peça**: volume, área de superfície, tamanho.

Arredondamentos, chanfros e cascas precisam do núcleo exato, como em qualquer peça desta versão ([O núcleo de malha](topic:solid-kernels)).

## Onde fica guardado

Os triângulos são guardados **dentro** do arquivo `.partcraft.json`, então o arquivo da peça é autocontido: você não precisa mais do arquivo STEP.

## Mensagens

| Mensagem | O que significa |
|---|---|
| '"part.stp" não é um arquivo STEP (não começa com ISO-10303-21).' | O arquivo não é texto STEP simples. Peça ao remetente um arquivo STEP AP203, AP214 ou AP242 |
| "O arquivo STEP não pôde ser lido: a sua seção de dados está ausente ou danificada." | O arquivo está cortado ou danificado. Copie-o novamente |
| "O arquivo STEP não contém nenhum corpo sólido ou de superfície: não há nada para importar." | O arquivo contém apenas desenhos, pontos ou dados. Peça um sólido |
| "Esse arquivo STEP é grande demais (acima de 60 MB) para importar aqui." e os outros limites do leitor (entradas, faces, triângulos) | Simplifique o modelo na origem, ou envie as peças uma a uma |
| "… linhas danificadas no arquivo foram ignoradas." | Algumas linhas não puderam ser lidas; o restante foi importado. Confira o corpo |
| "… faces não puderam ser transformadas em triângulos e foram deixadas de fora." | Essas faces deixam furos, que o PartCraft tenta preencher; se o corpo não fechar, ele não é adicionado |
| "… faces de um tipo que não é lido (…) foram ignoradas." | Um tipo de superfície raro. Peça o modelo com superfícies simples ou B-spline |
| "Não fecha …" | As faces não formam um sólido fechado (um modelo de superfície, ou faces deixadas de fora). O PartCraft mostra as aberturas e não adiciona nada |

## Limites

- Faces curvas são desenhadas e medidas como facetas planas, como em todas as peças desta versão. O PartCraft mantém com o corpo as faces planas, cilindros, cones, esferas e toros do próprio arquivo, então {{ui:Exportar}} › {{ui:STEP AP242 (sólido exato)}} os grava de volta como superfícies verdadeiras, furos como furos, junto com os recursos que você adicionar. Faces que o arquivo define como splines, varreduras ou superfícies de revolução continuam facetas na exportação. Uma peça salva antes da versão 0.9.1 não tem superfícies guardadas: abra o arquivo STEP novamente para obtê-las.
- {{ui:Exportar}} › {{ui:DXF do esboço ou da face plana}} com uma face plana escolhida grava um furo redondo do arquivo como círculo verdadeiro.
- Cores, nomes de corpos, estrutura de montagem e PMI (tolerâncias do arquivo) não são lidos.
- Além de STEP, o PartCraft abre malhas STL, OBJ e 3MF ([Abrir um STL, OBJ ou 3MF](topic:open-meshes)) e modelos `.3dm` ([Abrir um modelo .3dm](topic:open-3dm-files)) como corpos sólidos. IGES e arquivos nativos de outros programas não são suportados.
- Uma peça com um sólido STEP importado por uma versão que tinha o núcleo exato mantém o texto STEP; esta versão ignora esse recurso ("não implementado"). Abra o arquivo STEP novamente para trazê-lo como triângulos.
