---
title: Pezas a partir da física: xeradores
summary: O espazo de traballo Engineer e a función Corpo xerado: escoller un xerador, definir as súas entradas (caudal, presión, temperaturas, material, impresora) e obter unha peza dimensionada con fórmulas de manual, coa súa folla de datos, comprobacións de fabricación e ficheiros para ferramentas de análise. As mesmas entradas dan sempre a mesma peza.
keywords: engineer, xerador, corpo xerado, física, regras, intercambiador de calor, colector, boquilla, retícula, xiroide, folla de datos, entradas, determinista, mesmas entradas mesma peza, comprobacións de fabricación, impresión 3D, cama de po
from: 5a387dc0
---

Un **xerador** é un script que dimensiona unha peza a partir dos seus requisitos e a constrúe. Un xerador de intercambiadores de calor toma o calor que hai que transferir, os dous caudais e as súas temperaturas, a presión e o material; calcula de que tamaño debe ser o núcleo e de que grosor a súa parede, constrúeo, e indícalle os números que usou e de onde saíu cada un. Cambie unha entrada e a peza segue o cambio.

O resultado é un corpo normal na peza: está na lista de elementos, imprímese e exportase. O propio xerador tamén se garda na peza, así que un ficheiro ábrese en calquera computador sen ter instalado o xerador, e **abrir unha peza nunca executa un script**.

## Facer un corpo

1. Escolla o espazo de traballo {{ui:Engineer}} no selector.
2. Escolla un xerador na lista (os que vén con PartCraft, despois os que abriu desde un ficheiro) e prema {{ui:Novo}}.
3. O script execútase. Cando remata, o corpo aparece na vista e o panel mostra as súas entradas, a súa **folla de datos** e as súas **comprobacións**.

Tamén pode engadir un desde Deseño: {{ui:Elementos}} › {{ui:Máis}} › {{ui:Corpo xerado}}.

## Cambialo

Cambie calquera entrada e o corpo vólvese facer pouco despois de deixar de escribir. O panel indica cal das tres situacións é a certa:

- **Ao día**: o corpo coincide co script e coas súas entradas.
- **As entradas cambiaron**: o corpo da peza é das entradas anteriores; vólvese facer, ou prema {{ui:Executar}}.
- **Aínda sen executar** ou **A última execución fallou**: móstrase un erro do script coa súa liña.

{{ui:Parar}} remata unha execución que tarda demasiado. Desfacer retrocede un paso de cada vez: unha execución é un paso, unha entrada é un paso.

## A folla de datos

Cada número que o xerador calculou aparece listado coa súa **unidade** e **de onde vén** (unha ecuación de manual, unha norma, unha folla de datos). Nada é unha constante oculta. A folla forma parte do ficheiro, así que é a mesma no seguinte computador. [Datos de saída](topic:data-out) explica como gardala en JSON ou PDF.

## As comprobacións

Un xerador pode comprobar a súa propia peza contra un proceso de impresión: paredes e separacións máis finas do que o proceso admite, pezas soltas, cavidades que atrapan po ou resina, furos demasiado estreitos para limpalos, e voos que necesitan soporte. Os resultados están no panel e na lista {{ui:Problemas}} (o botón ⚠), e gárdanse coa peza.

As cifras de proceso son as cifras redondas que as guías públicas de deseño dan para o proceso en xeral (FDM, SLA, SLS, metal en cama de po). **Non son a especificación da súa máquina**: substitúaas polas cifras do seu taller antes de fiarse dunha comprobación. A comprobación funciona nunha rede de voxels, así que é precisa ata un voxel: unha parede só se informa cando é máis fina que o límite por máis dun voxel.

## Que inclúe

| Xerador | Que fai |
|---|---|
| Bloque xiroide | Un bloque cheo dunha superficie xiroide, Schwarz P ou diamante: a retícula máis simple |
| Intercambiador de calor xiroide | O núcleo dun intercambiador de dous fluídos, dimensionado a partir da carga polo método da efectividade-NTU, coa súa parede dimensionada pola presión; pode comprobar a caída de presión cun estudo de fluxo nunha célula |
| Colector de distribución | Un cabezal e ramificacións, cada tubo dimensionado polo caudal que leva |
| Viga de retícula graduada | Unha retícula cuxa parede engrosa onde unha optimización topolóxica di que fai falta material |

Todos son primeiras estimacións baseadas en fórmulas de manual. [A biblioteca de enxeñaría](topic:engineering-library) enumera as fórmulas e os seus límites. Execute Simulación, Térmica ou Fluxo sobre o resultado antes de fiarse del.

## Controis de exportación

Os xeradores e as follas de datos de Engineer levan un aviso sobre controis de exportación e sancións. Léao en [Engineer e controis de exportación](topic:engineer-export-notice); tamén está ao pé de cada folla de datos.

## Aínda non creado

- Cabezais, portos e accesorios no núcleo do intercambiador de calor: é só o núcleo.
- Curvas de temperatura para a resistencia dos materiais: os materiais están a temperatura ambiente.
- Perdas en T e reparto do caudal entre saídas no colector.
- Engadir xeradores desde o directorio de complementos cun só clic; abrir un ficheiro engade un a este navegador.
- Xeradores para as outras aplicacións.
