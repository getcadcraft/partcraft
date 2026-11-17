---
title: Nodes: crear un model connectant-los
summary: Connecteu números en punts, punts en corbes i corbes en superfícies. Si canvieu un número, tot el que en depèn es torna a construir. Cada node és també una línia de CraftScript, i el graf es desa al fitxer.
keywords: nodes, editor de nodes, programació visual, paramètric, graf, cables, ports, forma lliure, freeform, nurbs, loft, extrusió, revolució, cercle, corba, superfície, sèrie, rang, aleatori, llista, script, craftscript, grasshopper
from: 3a4625de
---

L'**editor de Nodes** construeix geometria connectant caixes entre si. Cada caixa (un node) fa una feina petita: fa un número, un punt, un cercle, un loft. Connecteu el resultat d'un a l'entrada del següent, i el model segueix els canvis quan canvieu un número a l'inici.

Obriu-lo des de la llista d'espais de treball: {{ui:Nodes}}. S'obre la finestra de l'editor. Una peça que ja té un graf el mostra quan obriu l'espai de treball. És una finestra sobre la vista 3D: arrossegueu-ne la barra de títol per moure-la i arrossegueu-ne la cantonada per canviar-ne la mida.

## Connexió

1. Trieu un node de la llista de l'esquerra (escriviu a la caixa de cerca per reduir-la; <kbd>Enter</kbd> afegeix la primera coincidència). Apareix al mig del llenç.
2. Arrossegueu des del punt de **sortida** rodó a la dreta d'un node fins al punt d'**entrada** rodó a l'esquerra d'un altre. El punt es torna verd quan encaixa i vermell quan no; assenyaleu-lo per veure'n el motiu.
3. Una entrada sense res connectat mostra una caixa per a un valor escrit. Escriviu un número i premeu <kbd>Tab</kbd>: el resultat es torna a construir.
4. El cercle petit de la barra de títol d'un node és el seu **ull**. Un node amb l'ull activat es dibuixa a la vista 3D: com a línies per a les corbes, ombrejat per a les superfícies i punts per als punts.

Arrossegueu un node per la seva barra de títol. Arrossegueu el fons per desplaçar-vos i gireu la roda per fer zoom. <kbd>Delete</kbd> suprimeix el node seleccionat. {{ui:Ordena}} col·loca els nodes en columnes, {{ui:Ajusta}} les porta totes a la vista, i {{ui:Desfés}} i {{ui:Refés}} recorren les vostres edicions.

## Tipus i unitats

Els ports tenen un tipus: nombre, sí/no, punt, vector, corba, superfície, malla, sòlid, o "geometria" per a qualsevol d'aquests. Un punt pot alimentar una entrada de vector i a la inversa. Els nombres porten una unitat: una **longitud** és en mil·límetres i un **angle** és en graus. Una longitud no pot alimentar un angle, i una longitud per una longitud (una àrea) es rebutja, de manera que un cable incorrecte s'atura en el moment de fer-lo.

Un punt quadrat és una **llista**. Quan una llista arriba a una entrada d'un sol valor, el node s'executa un cop per a cada element, i el seu resultat és una llista. La llista més curta repeteix el seu últim element. Per exemple, una **Sèrie** d'alçades connectada a **Mou** fa una pila de còpies.

## Sòlids i booleanes com a nodes

El grup **Sòlids** crea cossos tancats amb les mateixes superfícies exactes que el tauler de Superfícies: **Sòlid caixa**, **Sòlid cilindre** i **Sòlid esfera** (mides en mm), **Unió**, **Resta** i **Intersecció** (el segon sòlid es pren del primer; la tolerància és la distància màxima que poden tenir els triangles del motor de sòlids respecte de les superfícies exactes), **Arrodoniment entre cares** (les cares pel seu número dins del sòlid, 1 per a la primera; un radi i, si és superior a 0, un radi al final), **Volum del sòlid** (mm³) i **Sòlid a malla** (per veure'l o fixar-lo). Un sòlid té el seu propi tipus de port: no es pot connectar un punt ni un número a una entrada de sòlid, i el punt es queda vermell. Els nodes de booleanes i d'arrodoniment fan servir el motor de sòlids propi del programa, que es carrega la primera vegada que s'obre l'editor.

## Errors

Un node que no pot fer la seva feina n'indica el motiu sota el nom, en vermell ("El radi ha de ser superior a zero."), i els nodes que hi van després esperen. El mateix missatge és un problema al tauler Problemes, de manera que hi podeu anar des d'allà.

## Cada node és una línia de script

Premeu {{ui:Script}} per veure el graf com a CraftScript: una línia per node, com ara `n3 = nd_circle(n2, n1, [0 0 1]);`. Editeu el text i premeu {{ui:Crea el graf a partir d'aquest script}} per tornar-lo a convertir en graf. Les mateixes funcions `nd_` funcionen en un CraftScript a PartCraft, de manera que el graf es pot executar, repetir en bucle o provar-lo allà. Els nombres aleatoris sempre prenen una **llavor**, de manera que el mateix graf dóna el mateix resultat a tots els ordinadors.

## Desat amb el fitxer

El graf es desa al fitxer de la peça (no a l'historial, de manera que el Desfés de l'editor és el seu propi). Els nodes fan corbes, superfícies i malles al costat del sòlid: no canvien les operacions de la peça.
