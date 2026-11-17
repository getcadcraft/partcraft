---
title: Solid FEM: verificação de tensão de uma peça
summary: Ative o complemento Solid FEM, gere a malha de uma peça, escolha faces fixas e uma carga na vista 3D, resolva e leia o deslocamento e a tensão de von Mises no modelo.
keywords: solid fem, elementos finitos, fea, tensão, von mises, deslocamento, face fixa, carga, pressão, gravidade, frequência natural, forma modal, malha, complemento
from: 8b7e6ba2
---

## O que você vai fazer

Verificar uma peça sólida sob carga: onde ela se move e onde a tensão é maior. O estudo é linear e elástico, então é um auxiliar de verificação; seu engenheiro revisa os resultados.

## Passos

1. Escolha {{ui:Configurações}} › {{ui:Complementos}} e ative {{ui:Solid FEM}} (ele fica desligado até você fazer isso). Abra a guia {{ui:Solid FEM}} no painel direito.
2. Em {{ui:Material}}, escolha um, ou {{ui:Personalizado}} e digite o coeficiente de Poisson, a densidade e a tensão de escoamento.
3. Pressione {{ui:Adicionar faces fixas}}, clique nas faces que estão presas na vista 3D e depois pressione {{ui:Concluir seleção}}.
4. Adicione uma carga com {{ui:Adicionar força}}, {{ui:Adicionar pressão}} ou {{ui:Adicionar gravidade}} e escolha as faces dela do mesmo modo.
5. Pressione {{ui:Gerar malha da peça}} e depois {{ui:Resolver}}. Escolha {{ui:Frequências naturais}} em {{ui:Estudo}} antes, se quiser frequências.
6. Leia {{ui:Resultados}} e {{ui:Avisos}}, depois pressione {{ui:Mostrar no modelo}} para desenhar a tensão de von Mises, o deslocamento ou uma forma modal; {{ui:Remover o gráfico}} o tira.

## Notas

- A página resolve até um número fixo de elementos; a linha de status avisa quando o tamanho do seu elemento está fino demais.
- A tensão em faces fixas, pontos de carga e cantos vivos cresce conforme a malha é refinada. Refine e compare antes de confiar em um pico.
- Cada mudança é um passo de desfazer, e as configurações são salvas no arquivo da peça.
- Para estudos de escoamento e de contato, veja [Verificar tensão e deslocamento](topic:simulation).
