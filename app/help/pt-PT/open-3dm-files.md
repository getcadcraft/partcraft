---
title: Abrir um modelo .3dm como corpo sólido
summary: Traga as malhas, polisuperfícies e blocos de um ficheiro .3dm para a PartCraft como um só corpo sólido que pode cortar, acrescentar e sobre o qual pode esboçar; de onde vêm os triângulos e o que fica de fora.
keywords: 3dm, nurbs, polissuperfície, brep, superfícies, malha de renderização, extrusão, blocos, importar, malha para sólido, unidades, corpo importado
from: 8ae9571b
---

A PartCraft abre ficheiros `.3dm` como **corpos sólidos**, da mesma forma que abre uma [malha STL, OBJ ou 3MF](topic:open-meshes). O corpo funciona como qualquer outro sólido: pode cortá-lo, acrescentar-lhe material, furá-lo, fazer matrizes e esboçar nas suas faces planas. Não tem histórico próprio.

## Abrir o ficheiro

1. Escolha {{ui:Abrir}} ou prima {{key:Mod+O}}, e escolha o ficheiro `.3dm`. Ou largue-o na vista 3D.
2. A PartCraft lê-o e mostra o que encontrou: quantos objetos com faces entram, quantas faces vieram das malhas guardadas no ficheiro e quantas a PartCraft converteu em triângulos, cada reparação, e se o resultado **fecha**.
3. Verifique as **Unidades no ficheiro** (o ficheiro indica as suas próprias; uma unidade que a PartCraft não lista, como jardas, é convertida para milímetros) e o **Para cima no ficheiro**.
4. Escolha {{ui:Abrir como corpo}}, ou **Usar para** e {{ui:Acrescentar a esta peça}} quando a peça já tiver operações.

## De onde vêm os triângulos

A PartCraft constrói corpos a partir de triângulos nesta versão, pelo que cada superfície do ficheiro se torna pequenas faces planas. Para cada face de uma polissuperfície (e cada extrusão), usa a **malha de renderização guardada no ficheiro** quando existe; caso contrário, **converte-a ela própria em triângulos** (planos, superfícies NURBS, superfícies de revolução, curvas extrudidas e extrusões, aparadas pelas suas arestas). As faces de uma polissuperfície partilham os pontos das suas arestas, pelo que uma polissuperfície fechada entra fechada. Uma face de um tipo de superfície que a PartCraft ainda não lê fica de fora, e o diálogo indica quantas são e de que tipo; o resultado normalmente não fecha.

## Tudo o que está no ficheiro torna-se um só corpo

Cada malha, polissuperfície e extrusão visível, e cada colocação de um bloco, entra num **único** corpo, onde o ficheiro o coloca. Objetos ocultos, ou num layer desligado, ficam de fora. Quando o ficheiro contém vários sólidos separados, o corpo tem várias peças: abra cada um a partir do seu próprio ficheiro se os quiser como corpos separados.

## O que fica de fora (e é indicado)

Curvas, pontos, nuvens de pontos, texto, cotas, tramas e luzes ficam de fora: um corpo recebe apenas faces. Ficam também de fora os objetos SubD (converta-os em malhas ou polissuperfícies no programa que criou o ficheiro, primeiro), os blocos ligados a partir de outros ficheiros, e as cores, layers e nomes (os corpos da PartCraft não têm nomes próprios aqui).

## Quando não fecha

Polissuperfícies e superfícies abertas (uma única superfície aparada, ou uma forma com uma face em falta) não têm interior, pelo que não podem ser um sólido. O diálogo indica quantas aberturas restam e não acrescenta nada. Una ou feche a forma no programa que a criou, guarde e volte a abri-la. Ver [Quando uma malha não fecha](topic:open-meshes#when-a-mesh-does-not-close).
