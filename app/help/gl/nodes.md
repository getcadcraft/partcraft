---
title: Nodos: construír un modelo conectando
summary: Conecte números en puntos, puntos en curvas e curvas en superficies. Cambie un número e todo o que depende del reconstrúese. Cada nodo tamén é unha liña de CraftScript, e o grafo gárdase no ficheiro.
keywords: nodos, editor de nodos, programación visual, paramétrico, grafo, cables, portos, forma libre, nurbs, unión de perfís, extrusión, revolución, círculo, curva, superficie, serie, rango, aleatorio, lista, script, craftscript, grasshopper
from: 3a4625de
---

O editor de **Nodos** constrúe xeometría conectando caixas. Cada caixa (un nodo) fai un traballo pequeno: crear un número, un punto, un círculo, unha unión de perfís. Conecte o resultado dun co enlace do seguinte, e o modelo segue os cambios cando cambia un número ao inicio.

Ábrao desde a lista do espazo de traballo: {{ui:Nodos}}. Abre a xanela do editor. Unha peza que xa ten un grafo mostrao ao abrir o espazo de traballo. É unha xanela sobre a vista 3D: arrastre a barra do título para movela e a súa esquina para cambiar o tamaño.

## Conexión

1. Escolla un nodo da lista da esquerda (escriba na caixa de busca para filtrar; <kbd>Enter</kbd> engade a primeira coincidencia). Aparece no centro do lenzo.
2. Arrastre desde un punto redondo de **saída**, á dereita dun nodo, ata un punto redondo de **entrada**, á esquerda doutro. O punto vólvese verde cando encaixa e vermello cando non; sitúe o cursor sobre el para ver o motivo.
3. Unha entrada sen nada conectado mostra unha caixa para un valor escrito. Escriba un número e prema <kbd>Tab</kbd>: o resultado reconstrúese.
4. O círculo pequeno na barra do título dun nodo é o seu **ollo**. Un nodo con ollo activado debúxase na vista 3D: como liñas para as curvas, sombreado para as superficies, puntos para os puntos.

Arrastre un nodo pola barra do título. Arrastre o fondo para desprazar, e a roda para facer zoom. <kbd>Delete</kbd> elimina o nodo seleccionado. {{ui:Ordenar}} dispón os nodos en columnas, {{ui:Axustar}} trae todos á vista, e {{ui:Desfacer}} e {{ui:Refacer}} percorren as súas edicións.

## Tipos e unidades

Os portos teñen tipo: número, sí/non, punto, vector, curva, superficie, malla, sólido, ou «xeometría» para calquera deles. Un punto pode alimentar unha entrada de vector e viceversa. Os números levan unidade: unha **lonxitude** está en milímetros e un **ángulo** en graos. Unha lonxitude non pode alimentar un ángulo, e unha lonxitude por outra lonxitude (unha superficie) recházase, así que un cable mal feito detense ao crealo.

Un punto cadrado é unha **lista**. Cando unha lista chega a unha entrada de valor único, o nodo execútase unha vez por cada elemento e o seu resultado convértese en lista. A lista máis curta repite o seu último elemento. Por exemplo, unha **Serie** de alturas conectada a **Mover** fai unha pila de copias.

## Sólidos e operacións booleanas como nodos

O grupo **Sólidos** crea corpos pechados coas mesmas superficies exactas que o panel de Superficies: **Sólido caixa**, **Sólido cilindro** e **Sólido esfera** (tamaños en mm), **Unión**, **Restar** e **Interseccion** (o segundo sólido tómase do primeiro; a tolerancia é a distancia máxima que poden separarse das superficies exactas os triángulos do motor de sólidos), **Redondeo entre caras** (as caras polo seu número no sólido, 1 para a primeira; un raio e, se é maior que 0, un raio no extremo), **Volume do sólido** (mm³) e **Sólido a malla** (para ver ou fixar a malla). Un sólido ten o seu propio tipo de porto: un punto ou un número non se poden conectar a unha entrada de sólido, e o punto queda vermello. Os nodos de operacións booleanas e de redondeo usan o motor de sólidos do propio programa, cargado a primeira vez que se abre o editor.

## Erros

Un nodo que non pode facer o seu traballo di por que, baixo o seu nome e en vermello («O raio debe ser maior que cero.»), e os nodos seguintes agardan. A mesma mensaxe aparece como Problema no panel de Problemas, para que poida atopala desde alí.

## Cada nodo é unha liña de script

Prema {{ui:Script}} para ver o grafo como CraftScript: unha liña por nodo, como `n3 = nd_circle(n2, n1, [0 0 1]);`. Edite o texto e prema {{ui:Facer o grafo a partir deste script}} para volvelo converter en grafo. As mesmas funcións `nd_` funcionan nun CraftScript de PartCraft, así que un grafo pode executarse, repetirse ou probarse alí. Os números aleatorios levan sempre unha **semente**, polo que o mesmo grafo dá o mesmo resultado en todos os ordenadores.

## Gardado co ficheiro

O grafo gárdase no ficheiro da peza (non no historial, así que o Desfacer do editor é propio). Os nodos crean curvas, superficies e mallas xunto ao sólido: non cambian os elementos da peza.
