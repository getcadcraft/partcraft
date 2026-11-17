---
title: A biblioteca de ferramentas
summary: Guarde no navegador as ferramentas que usa para que todas as peças as possam ter, e mova bibliotecas de ferramentas entre computadores como um ficheiro JSON.
keywords: biblioteca de ferramentas, ferramentas, exportar, importar, JSON, guardar ferramentas, número T, fresa de topo, ferramentas de oficina
from: 8b9f2483
---

O separador **Ferramentas** do Fabrico lista as ferramentas da peça. Em **Biblioteca de ferramentas** pode guardar as suas próprias ferramentas para além de uma peça:

- {{ui:Guardar esta ferramenta}} acrescenta a ferramenta selecionada a **As minhas ferramentas guardadas**; {{ui:Guardar todas as ferramentas desta peça}} acrescenta todas. As minhas ferramentas guardadas ficam neste navegador e estão disponíveis para todas as peças. Uma ferramenta já guardada (mesmo tipo, tamanho, número de gumes e substituições) não é guardada duas vezes.
- {{ui:Adicionar a esta peça}} coloca na peça a ferramenta guardada escolhida. Se o seu número T já for usado por outra ferramenta da peça, recebe o próximo número livre e o painel indica-o. {{ui:Remover da minha biblioteca}} retira-a da lista guardada (não das peças que já a têm).
- {{ui:Exportar ferramentas…}} escreve as ferramentas da peça como um ficheiro `.json`; {{ui:Importar ferramentas…}} acrescenta à peça as ferramentas de um desses ficheiros, com as mesmas regras (uma ferramenta já lá existente é ignorada, um número T ocupado é deslocado). O ficheiro contém tamanhos, gumes, materiais e as substituições de avanço e velocidade que escreveu; não tem identificadores. Use-o para levar as ferramentas de uma oficina para outro computador ou para as dar a um colega.

Se o navegador não conseguir manter a biblioteca (o armazenamento está desligado ou cheio), guardar indica-o e **Exportar ferramentas** é a forma de manter um ficheiro. Um ficheiro tem de ser uma biblioteca de ferramentas do PartCraft desta versão ou de uma anterior, com no máximo 500 ferramentas de tamanhos válidos; qualquer outra coisa é recusada com o motivo.

As velocidades de corte e os avanços por dente que vêm com uma ferramenta são valores de partida; ver [Criar percursos da ferramenta e G-code](topic:manufacture).
