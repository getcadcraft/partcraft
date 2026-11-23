---
title: Comprobar este marco
summary: Tome as pezas de aceiro dunha estrutura soldada (unha bancada, un soporte, un bastidor de tubos e perfís), poña o equipo sobre os seus pés e os apoios no chan, e vexa canto se usa cada peza e cada soldadura segundo AISC 360-16 ou EN 1993. Unha axuda ata que un enxeñeiro a revise.
keywords: marco, estrutura soldada, bancada, bancada de bomba, elemento estrutural, soldadura, soldaduras, comprobar, AISC 360, EN 1993, aproveitamento, utilización, apoio, equipo, carga, perfil hueco, HSS, RHS, CHS, enxeñeiro
from: 032e34ee
---

{{ui:Comprobar este marco}} toma as pezas rectas de aceiro dunha estrutura soldada, constrúe un marco con elas, resólveo baixo o peso do aceiro e do equipo que lle poña, e proba cada peza e cada soldadura onde se xuntan as pezas. Unha execución, unha táboa.

:::warning
É **unha axuda ata que un enxeñeiro a revise**. Non é un selo, e un aprobado non é un deseño. Usa as liñas centrais das pezas tal como se debuxaron, trata cada xunta como soldada en todo o perímetro da sección, toma a perna do cordón da parede da sección (ata 8 mm) salvo que a fixe, e non comproba parafusos, placas, placas base, anclaxes, apoio, cortadura de bloque, fatiga nin elevación.
:::

## Executalo

1. Debuxe as pezas con {{ui:Elemento estrutural}} (as seccións veñen da táboa de seccións).
2. Abra {{ui:Vistas}} › {{ui:Comprobar este marco}}. Diga onde se apoia o marco (un **apoio** en cada pé: articulado, empotrado ou de rodillo; {{ui:Apoios articulados nos pés}} pon un en cada extremo de pezas máis baixo) e o que descansa sobre el (**equipo**: masa, centro de gravidade, os puntos onde se atornilla ao chan, e un empuxe horizontal opcional).
3. Escolla a norma: **ASCE 7 + AISC 360-16** ou **EN 1990 + EN 1993**. Fixe a calidade do aceiro e, para AISC, a resistencia do metal de achega (482,6 MPa é E70).
4. Prema en {{ui:Comprobar}}. {{ui:Gardar o informe como CSV}} escribe todas as táboas, coa liña de non revisado primeiro.

O marco lese en milímetros co eixo vertical da peza cara arriba. Os puntos de apoio e de equipo escríbense como x y z no mesmo marco, sendo z a altura.

Un extremo de pezas que cae no medio doutra pezas divídea alí, do mesmo xeito que un pé ou un punto de atornillado sobre a liña dunha pezas. Un peso compártese entre os puntos de atornillado como un corpo ríxido; un centro de gravidade fóra dos pés, ou unha forza de elevación nun pé, dise sempre, nunca se oculta.

## Que obtén

- O elemento máis usado e se algo falla. Os elementos que a comprobación non pode xulgar (unha sección que non está na táboa, un aceiro sen factor na norma) contanse e nómbranse, nunca se contan como aprobados.
- Unha fila por pieza e por grupo de soldaduras: canto se usa, a comprobación que manda e a súa cláusula, e a combinación de cargas que a rixe.
- As mesmas táboas no informe.

## Que se comproba

Seccións ocas (RHS, SHS, CHS, tubo) e perfís en I para tracción, compresión, flexión, cortadura e a súa interacción; cordóns de ángulo e de penetración completa polo método vectorial elástico. Paredes compactas só en flexión para seccións ocas; as paredes esbeltas dise que non se comprobaron. Algunhas constantes escribíronse a partir das normas e aínda non se compararon cunha copia impresa; o informe lista cada fonte.

Vexa [Bastidores de perfís de aceiro](topic:structural-members) para debuxar as pezas e a súa lista de corte.
