---
title: Barrido, unión de perfís e desmoldeo
summary: Faga un barrido dun perfil pechado ao longo dunha traxectoria de curvas de esbozo ou de arestas do modelo, unha unión de perfís por seccións en planos distintos e engada desmoldeo ás caras; con as opcións, os resultados exactos e as mensaxes.
keywords: barrido, saínte por barrido, corte por barrido, tubo, traxectoria, unión de perfís, saínte por unión, mesturar seccións, reglado, desmoldeo, ángulo de desmoldeo, caras con conicidade, plano neutro, dirección de extracción, moldeo
from: 9d637981
---

:::note
**Nesta versión** o barrido e a unión de perfís aínda non están construídos: precisan un núcleo xeométrico exacto, que esta versión de PartCraft non ten. [O que aínda non está construído](topic:not-built-yet) explica que facer no seu lugar; as seccións Barrido e Unión de perfís describen como funcionan cun núcleo exacto. **O desmoldeo funciona** en caras planas: o núcleo de malla o constrúe, co mesmo resultado que daría un núcleo exacto.
:::

As tres están no menú {{ui:Máis}} do grupo Elementos (vexa [O núcleo de malla](topic:solid-kernels)). Cada unha pode unir material, cortalo, conservar só a superposición (**Intersección**) ou crear un **Corpo novo** (barrido e unión de perfís: **Operación** no panel).

## Barrido

Un barrido move un perfil pechado ao longo dunha traxectoria: tubos, asas, moles de arame, guías.

1. Debuxe a **traxectoria** nun só esbozo: liñas e arcos unidos extremo con extremo (ou use arestas do modelo, máis abaixo).
2. Debuxe o **perfil** noutro esbozo cuxo plano pase por un extremo da traxectoria, por exemplo un círculo no plano superior ao inicio dunha traxectoria debuxada no plano frontal.
3. Seleccione o esbozo do perfil, escolla {{ui:Máis}} e despois {{ui:Barrido}}. O esbozo distinto máis recente pasa a ser a traxectoria.

No panel:

| Opción | Función |
|---|---|
| **Traxectoria** | Marque os esbozos que forman a traxectoria (varios esbozos únense extremo con extremo nunha soa traxectoria 3D); **Seleccionar arestas do modelo** engade arestas da peza |
| **Orientación** | Seguir a traxectoria (predeterminado), Frenet, Fixa (as seccións quedan paralelas ao perfil), Manter unha dirección, Ao longo dunha curva guía |
| **Escala final** | O perfil crece ou decrece linealmente ata este tamaño no extremo (1 = constante) |

As esquinas vivas da traxectoria levan inglete. Un círculo de raio 5 barrido ao longo dunha liña de 100 mm é un cilindro de exactamente 2500π mm³; ao longo dun cuarto de arco de raio 50, un cuarto de toro de 625π² mm³.

## Unión de perfís

Unha unión de perfís mestura dúas ou máis seccións en planos distintos.

1. Debuxe cada sección no seu propio esbozo (un único lazo pechado en cada un), sobre planos base, planos de referencia (vexa [Planos, eixos e puntos de referencia](topic:reference-geometry)) ou caras.
2. Escolla {{ui:Máis}} e despois {{ui:Unión de perfís}}. Cada esbozo de un só lazo sen usar pasa a ser unha sección, pola orde do historial.

No panel lístanse as seccións por orde (**Subir** reordena, **Quitar** elimina unha); **Engadir un esbozo** engade outra, e **Seleccionar unha cara** engade unha cara plana da peza. **Reglado** fai caras planas entre seccións en lugar dunha mestura suave. Entre dous cadrados, o resultado é o mesmo tronco de pirámide (un cadrado de 40 mm a un cadrado de 20 mm en 30 mm: exactamente 28000 mm³).

As seccións con distinto número de lados (un cadrado a un triángulo) emparéllaas OpenCascade, que pode torcer as caras laterais; o elemento avísao. Debuxe as seccións co mesmo número de lados, partindo de esquinas correspondentes, para obter o resultado máis limpo.

### Curvas guía

As curvas guía son curvas que os lados da unión deben seguir desde a primeira sección ata a última, para un abultamento, unha cintura ou un ensanchamento que vostede debuxe.

1. Debuxe dúas ou máis guías: curvas abertas (liñas, arcos, splines) que vaian desde a primeira sección ata a última e crucen cada sección unha vez. Un esbozo pode conter varias guías: cada cadea separada é unha guía propia. Debuxe a guía de xeito que toque de verdade cada sección: encaixe os seus extremos nos puntos das seccións.
2. No panel Unión de perfís, baixo **Curvas guía**, marque os esbozos que as conteñen, ou prema {{ui:Seleccionar arestas do modelo como guías}} e prema nas arestas da peza ({{key:Esc}} remata).

Con guías, a unión é unha superficie Gordon que pasa polas seccións e polas guías (vexa [Superficies a través dunha rede de curvas](topic:gordon-surfaces)), tapada plana nos dous extremos para formar un sólido. O panel indica con que precisión as segue. Entón cada sección ten que ser un esbozo (un punto ou unha cara non poden recibir unha guía), e **Reglado** non se aplica. Unha guía que non toca unha sección por máis de 0,01 mm recházase, co espazo indicado.

Comprobado: dous círculos (de 20 mm e 10 mm de diámetro, separados 40 mm) con catro guías rectas dan o volume do tronco de cono cun erro inferior a 0,000002 %; arcos que se abomban 5 mm dan un barril que segue cada guía cun erro inferior a 0,00001 mm.

## Desmoldeo

O desmoldeo inclina as caras para que unha peza saia do molde.

1. Escolla {{ui:Máis}} e despois {{ui:Desmoldeo}} (ou prema con {{key:Shift}} nas caras antes). Sen nada seleccionado, está en modo de selección: prema en cada cara para inclinala e despois en {{ui:Feito}}.
2. Estableza o **Ángulo (°)**, o **Plano neutro** (onde as caras conservan o seu tamaño) e a **Dirección de extracción** (por defecto, a normal do plano neutro).

Un ángulo positivo inclina a cara cara ao interior na dirección de extracción e quita material; un negativo engade. O plano neutro comeza como o plano Superior. Nesta versión só se poden desmoldear caras planas: un cilindro, un cono ou unha cara libre mostran a mensaxe «Desmoldeo: nesta versión só caras planas (o núcleo de malla o constrúe).». Os catro lados dun bloque de 100 × 100 × 50 desmoldeado 5° pola súa base convértense nun tronco de pirámide de exactamente h/3·(a² + b² + ab), con b = a − 2h·tan 5°.

## Mensaxes

| Mensaxe | Que facer |
|---|---|
| «O plano do perfil ten que pasar por un extremo da traxectoria …» | Mova o esbozo do perfil ao inicio (ou ao final) da traxectoria |
| «A traxectoria ten un oco: as súas curvas non se unen extremo con extremo …» | Una as curvas da traxectoria; en esbozos separados os seus extremos deben coincidir exactamente |
| «Unha sección de unión precisa exactamente un lazo pechado» | Divida o esbozo ou elimine o lazo sobrante |
| «… non se pode desmoldear respecto deste plano neutro …» | A cara é paralela ao plano neutro ou non o corta |
| «Desmoldeo: nesta versión só caras planas (o núcleo de malla o constrúe).» | Unha cara seleccionada é curva. Elimínea; desmolde só caras planas |

:::note
Aínda non construído: barridos con torsión, barridos de parede fina e de superficie, curvas guía e tanxencia nos extremos da unión, e desmoldeo en cilindros, conos e caras libres.
:::
