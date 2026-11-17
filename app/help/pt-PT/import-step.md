---
title: Abrir um ficheiro STEP e construir sobre ele
summary: Trazer um modelo STEP de um fornecedor ou de outro programa CAD para o PartCraft como corpo sólido, como nova peça ou acrescentado à peça atual, definir qual é o sentido para cima, e acrescentar esboços e operações.
keywords: step, stp, importar, abrir step, ap203, ap214, ap242, modelo de fornecedor, sólido sem histórico, sólido importado, eixo para cima, z para cima, y para cima, triângulos, facetado, STEP de montagem
from: ca0eca5f
---

O PartCraft abre ficheiros STEP (`.step` ou `.stp`, AP203, AP214 e AP242) como **corpos sólidos** sobre os quais pode fazer esboços, cortar, furar e combinar com as suas próprias operações. O corpo não tem histórico próprio: não é possível alterar as dimensões com que foi feito, apenas acrescentar-lhe material ou cortar-lhe material.

Esta versão constrói todas as peças com o núcleo de malha, por isso um ficheiro STEP é **lido como triângulos**: as faces planas mantêm-se planas, e as faces curvas (cilindros, cones, esferas, toros, superfícies B-spline) passam a ser muitas faces planas pequenas. O seu volume fica a uma fração de um por cento do valor exato. Manter as faces curvas com exatidão exige um núcleo exato, que não está nesta versão.

## Abrir um ficheiro STEP

1. Escolha {{ui:Abrir}} ou prima {{key:Mod+O}} e selecione o ficheiro `.step` ou `.stp`. Ou arraste-o para a vista 3D.
2. O PartCraft lê o ficheiro e mostra o que encontrou, por exemplo: "ficheiro AP214: 1 sólido, 10 faces, lido como triângulos." Em baixo estão o número de triângulos, os eventuais elementos deixados de fora ou juntos, e se o resultado fica fechado.
3. Verifique **Para cima no ficheiro**. Um ficheiro STEP indica a sua própria unidade (milímetros, polegadas, metros…); o PartCraft converte-a para milímetros, por isso **Unidades no ficheiro** mostra Milímetros, "o ficheiro assim o indica". **Tamanho aqui** mostra o tamanho que terá.
4. Escolha {{ui:Abrir como corpo}} para uma peça vazia, ou {{ui:Acrescentar a esta peça}} / {{ui:Nova peça}} quando a peça já tem operações. Ao acrescentar, pergunta-se o que **Usar para** deve fazer: adicionar, cortar ou manter apenas a sobreposição.

Aparece uma operação **Imported1** no histórico, e a barra de estado diz, por exemplo, "plate.step é um corpo sólido: 57995.937 mm³, 6 faces planas onde esboçar."

## Um STEP de montagem

Uma montagem entra como **um só corpo**, com cada peça onde o ficheiro a coloca ("3 peças colocadas no ficheiro entram onde estão"). Uma peça usada duas vezes entra duas vezes. Os nomes das peças e a árvore da montagem não são mantidos.

## Definir o sentido para cima

A maioria dos programas CAD usa Z para cima; o PartCraft usa Y para cima. Por predefinição, o PartCraft roda o ficheiro para que o seu Z aponte para cima aqui. Se a peça chegar deitada de lado, selecione **Imported1** e defina **Para cima no ficheiro** como **Y para cima**. **Unidades no ficheiro** e **Usar para** também podem ser alterados aí; cada alteração é um passo de anulação.

## Construir sobre ele

- Clique numa face plana do corpo e escolha {{ui:Esboço nesta face}}. As faces planas do modelo STEP mantêm a sua posição quando o corpo é reconstruído.
- Acrescente cortes, furos, saliências, matrizes e espelhos como em qualquer peça.
- Verifique o tamanho na caixa **Peça**: volume, área de superfície, tamanho.

Boleados, chanfres e cascas exigem o núcleo exato, como em qualquer peça nesta versão ([O núcleo de malha](topic:solid-kernels)).

## Onde fica guardado

Os triângulos ficam guardados **dentro** do ficheiro `.partcraft.json`; o ficheiro da peça é autónomo: já não é preciso o ficheiro STEP.

## Mensagens

| Mensagem | O que significa |
|---|---|
| '"part.stp" não é um ficheiro STEP (não começa por ISO-10303-21).' | O ficheiro não é texto STEP simples. Peça ao remetente um ficheiro STEP AP203, AP214 ou AP242 |
| "Não foi possível ler o ficheiro STEP: a sua secção de dados está em falta ou danificada." | O ficheiro está cortado ou danificado. Copie-o de novo |
| "O ficheiro STEP não tem nenhum corpo sólido nem de superfície: não há nada para importar." | O ficheiro só tem desenhos, pontos ou dados. Peça um sólido |
| "Esse ficheiro STEP é grande demais (mais de 60 MB) para importar aqui." e os outros limites do leitor (entradas, faces, triângulos) | Simplifique o modelo na origem, ou envie as peças uma a uma |
| "… linhas danificadas no ficheiro foram ignoradas." | Algumas linhas não puderam ser lidas; o resto entrou. Verifique o corpo |
| "… faces não puderam ser convertidas em triângulos e foram deixadas de fora." | Essas faces deixam falhas, que o PartCraft tenta preencher; se o corpo não fechar, não é acrescentado |
| "… faces de um tipo que não é lido (…) foram ignoradas." | Um tipo de superfície raro. Peça o modelo com superfícies simples ou B-spline |
| "Não fecha …" | As faces não formam um sólido fechado (um modelo de superfície, ou faces em falta). O PartCraft mostra as aberturas e não acrescenta nada |

## Limites

- As faces curvas são desenhadas e medidas como facetas planas, como em todas as peças que esta versão constrói. O PartCraft mantém com o corpo as faces planas, cilindros, cones, esferas e toros do próprio ficheiro, por isso {{ui:Exportar}} › {{ui:STEP AP242 (sólido exato)}} escreve-os de volta como superfícies verdadeiras, furos como furos, juntamente com as operações que acrescentar. As faces que o ficheiro indica como splines, varrimentos ou superfícies de revolução mantêm-se como facetas na exportação. Uma peça guardada antes da versão 0.9.1 não tem superfícies guardadas: abra de novo o ficheiro STEP para as obter.
- {{ui:Exportar}} › {{ui:DXF do esboço ou da face plana}} com uma face plana escolhida escreve um furo redondo do ficheiro como círculo verdadeiro.
- Cores, nomes dos corpos, estrutura da montagem e PMI (tolerâncias do ficheiro) não são lidos.
- Além de STEP, o PartCraft abre malhas STL, OBJ e 3MF ([Abrir um STL, OBJ ou 3MF](topic:open-meshes)) e ficheiros `.3dm` ([Abrir um modelo .3dm](topic:open-3dm-files)) como corpos sólidos. Os ficheiros IGES e os ficheiros nativos de outros programas não são suportados.
- Uma peça com um sólido STEP importado por uma versão com o núcleo exato mantém o texto STEP; esta versão ignora essa operação (ainda não implementado). Abra de novo o ficheiro STEP para o trazer como triângulos.
