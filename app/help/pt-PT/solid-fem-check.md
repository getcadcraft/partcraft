---
title: FEM sólido: uma verificação de tensão de uma peça
summary: Ativar o suplemento Solid FEM, malhar uma peça, escolher faces fixas e uma carga na vista 3D, resolver e ler o deslocamento e a tensão de von Mises no modelo.
keywords: solid fem, elementos finitos, fea, tensão, von mises, deslocamento, face fixa, carga, pressão, gravidade, frequência natural, forma modal, malha, suplemento
from: 8b7e6ba2
---

## Objetivo

Verificar uma peça sólida sob uma carga: onde se desloca e onde a tensão é mais elevada. O estudo é linear e elástico, pelo que serve de apoio à verificação; o seu engenheiro revê os resultados.

## Passos

1. Escolher {{ui:Definições}} › {{ui:Suplementos}} e ativar {{ui:Solid FEM}} (fica desligado até o ativar). Abrir o separador {{ui:Solid FEM}} no painel da direita.
2. Em {{ui:Material}}, escolher um, ou {{ui:Personalizado}} e escrever o coeficiente de Poisson, a massa volúmica e a tensão de cedência.
3. Premir {{ui:Adicionar faces fixas}}, clicar nas faces que ficam presas na vista 3D e depois premir {{ui:Concluir escolha}}.
4. Adicionar uma carga com {{ui:Adicionar força}}, {{ui:Adicionar pressão}} ou {{ui:Adicionar gravidade}} e escolher as suas faces do mesmo modo.
5. Premir {{ui:Malhar a peça}}, depois {{ui:Resolver}}. Escolher primeiro {{ui:Frequências naturais}} em {{ui:Estudo}} se quiser frequências.
6. Ler {{ui:Resultados}} e {{ui:Avisos}}, depois premir {{ui:Mostrar no modelo}} para desenhar a tensão de von Mises, o deslocamento ou uma forma modal; {{ui:Remover o gráfico}} retira-o.

## Notas

- A página resolve até um número fixo de elementos; a linha de estado indica quando o tamanho dos elementos é demasiado fino.
- A tensão nas faces fixas, nos pontos de carga e nos cantos vivos aumenta à medida que a malha é refinada. Refinar e comparar antes de confiar num pico.
- Cada alteração corresponde a um passo de anulação, e as definições são guardadas no ficheiro da peça.
- Para estudos de cedência e de contacto, ver [Verificar tensão e deformação](topic:simulation).
