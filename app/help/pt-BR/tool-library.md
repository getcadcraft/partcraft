---
title: A biblioteca de ferramentas
summary: Salve as ferramentas que você usa no navegador para que toda peça possa tê-las, e mova bibliotecas de ferramentas entre computadores como um arquivo JSON.
keywords: biblioteca de ferramentas, ferramentas, exportar, importar, JSON, salvar ferramentas, número T, fresa de topo, ferramentas da oficina
from: 8b9f2483
---

A guia **Ferramentas** da Fabricação lista as ferramentas da peça. Em **Biblioteca de ferramentas** você pode manter suas próprias ferramentas além de uma peça:

- {{ui:Salvar esta ferramenta}} adiciona a ferramenta selecionada a **Minhas ferramentas salvas**; {{ui:Salvar todas as ferramentas desta peça}} adiciona todas elas. As ferramentas salvas ficam neste navegador e estão disponíveis para toda peça. Uma ferramenta que você já salvou (mesmo tipo, tamanho, dentes e substituições) não é salva de novo.
- {{ui:Adicionar a esta peça}} leva a ferramenta salva escolhida para a peça. Se o número T dela já for usado por outra ferramenta na peça, ela recebe o próximo número livre, e o painel informa isso. {{ui:Remover da minha biblioteca}} a tira da lista salva (não das peças que já a têm).
- {{ui:Exportar ferramentas…}} grava as ferramentas da peça em um arquivo `.json`; {{ui:Importar ferramentas…}} adiciona as ferramentas de um desses arquivos à peça, com as mesmas regras (uma ferramenta que já está lá é ignorada, um número T ocupado é movido). O arquivo guarda tamanhos, dentes, materiais e as substituições de avanço e de velocidade que você digitou; ele não tem IDs. Use-o para levar as ferramentas de uma oficina para outro computador ou para dá-las a um colega.

Se o navegador não conseguir manter a biblioteca (o armazenamento está desligado ou cheio), salvar informa isso, e **Exportar ferramentas** é o caminho para guardar um arquivo. Um arquivo precisa ser uma biblioteca de ferramentas do PartCraft desta versão ou anterior, com no máximo 500 ferramentas de tamanhos válidos; qualquer outra coisa é recusada, com o motivo.

Os valores de velocidade de corte e avanço por dente que vêm com uma ferramenta são valores iniciais; veja [Criar trajetórias e G-code](topic:manufacture).
