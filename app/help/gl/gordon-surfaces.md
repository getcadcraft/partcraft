---
title: Superficies a través dunha rede de curvas (superficie de Gordon)
summary: Crear unha soa superficie suave a través dunha rede de curvas de perfil e guía debuxadas en esbozos ou tomadas de arestas do modelo, pechala nun sólido cando os perfís son pechados, e o que é exacto, o que se axusta e as mensaxes cando unha rede non encaixa.
keywords: tanxente, g1, tanxencia, continuidade tanxente, plano de simetría, superficie de Gordon, rede de curvas, superficie de contorno, superficie en rede, perfís, guías, curvas guía, loft con guías, carrís guía, revestimento, transfinita, coons, superficie B-spline, forma libre
from: ada3cb8b
---

:::note
**Aínda non implementado nesta versión.** A superficie de Gordon necesita un núcleo xeométrico exacto, que esta versión de PartCraft non ten: constrúe todas as pezas co núcleo de malla. [O que aínda non está implementado](topic:not-built-yet) explica que facer no seu lugar. O resto desta páxina describe como funciona co núcleo exacto.
:::

Unha **superficie de Gordon** é unha soa superficie que pasa por cada curva dunha rede: un conxunto de **perfís** que van nunha dirección e un conxunto de **guías** que van na outra, cruzándose como os fíos dunha rede. É como se modela un casco, un guardabarros ou unha asa a partir de poucas curvas de sección que controla directamente. Necesita o **núcleo exacto** (ver [O núcleo de malla](topic:solid-kernels)).

## Debuxar a rede

1. Debuxe os **perfís**: dúas ou máis curvas que van lado a lado, por exemplo seccións en planos paralelos. Funcionan liñas, arcos, círculos e splines, e unha cadea de curvas unidas extremo con extremo conta como unha soa curva.
2. Debuxe as **guías**: dúas ou máis curvas que atravesan os perfís. Cada guía debe cruzar cada perfil unha vez, e cada perfil cada guía unha vez.
3. Faga que as curvas se atopen de verdade. Debuxe o esbozo dunha guía de xeito que a súa curva pase polos puntos dos perfís (encaixe nos puntos proxectados, ou escriba as coordenadas). A rede acepta fendas ata a **Tolerancia** (0,01 mm como inicio).

Un esbozo pode conter varias curvas: cada cadea separada nel é unha curva propia. Así, pode debuxar todas as guías nun só esbozo no plano superior, por exemplo.

## Facer a superficie

1. Escolla {{ui:Máis}} no grupo Elementos, logo {{ui:Superficie de Gordon}}.
2. PartCraft toma os esbozos que aínda ninguén usa: os que están en planos paralelos ao primeiro convértense en **perfís**, os demais en **guías**. Revise a lista da dereita e defina cada esbozo como **Perfís**, **Guías** ou **Sen usar**.
3. Para usar arestas da peza, prema **Seleccionar arestas como perfís** (ou **como guías**), prema as arestas na vista e logo prema Esc.

O resultado é un **corpo de superficie**. {{ui:Engrosar}} convérteo nun sólido, {{ui:Coser}} cóseo a outras superficies, e {{ui:Recortar superficie}} córtao.

### Pechala nun sólido

Cando os perfís son curvas pechadas (círculos, splines pechadas, cadeas pechadas) e o primeiro e o último perfil quedan planos cada un nun plano, marque **Pechar nun sólido**. Os extremos cúbrense con caras planas e a forma pechada únese, córtase, intersécase ou convértese nun corpo novo como calquera outro elemento. Así se fai un loft que segue curvas guía. O mesmo funciona con guías pechadas.

## Tanxente a un plano ao longo dunha aresta

Unha superficie de Gordon pasa polas súas curvas, pero por si soa non coincide coa pendente do que encontra. Para que saia dunha aresta **tanxente** a un plano (G1), como un plano de simetría, de xeito que a copia espellada se una sen vinco, ou unha cara plana da que crece:

1. Seleccione o elemento de Gordon. Baixo **Tanxente a**, escolla un plano en {{ui:Engadir un plano…}} (Alzado, Planta, Perfil ou un plano de referencia), ou seleccione unha cara plana na vista e prema {{ui:Engadir a cara plana elixida}}.
2. PartCraft atopa a curva de contorno da rede que está nese plano, e a superficie sae dela tanxente ao plano.

Se un plano contén dúas curvas de contorno (un chan baixo ambos os extremos), engádao dúas veces: cada copia toma a seguinte. Ata catro planos, un por aresta.

O informe indica ao longo de que curva fixo cada plano tanxente e o ángulo máis pronunciado que a superficie tiña con ese plano antes. As guías que xa saen desa curva tanxentes ao plano séguense exactamente. As guías que se afastan dela dóbranse nunha banda estreita preto da aresta, e a cifra «segue cada curva dentro de» do informe indica canto: debuxe as guías que saen da aresta planas para un axuste exacto.

## Que é exacto e que se axusta

O panel indica cal destes casos se aplica e canto se separa a superficie das súas curvas.

- **Exacto**: cando cada curva é polinómica (liñas, splines e cadeas delas) e as guías cruzan todos os perfís cos mesmos parámetros, a superficie é exactamente a superficie de Gordon desas curvas. Unha rede de curvas iso cortadas dunha superficie bicúbica devolve esa superficie, e catro liñas rectas dan un parche plano ou retorcido (bilineal).
- **Axustado**: os arcos, círculos e arestas da peza non son polinómicos, e as curvas que se cruzan con parámetros distintos deben re-temporizarse para que os cruzamentos coincidan. Esas curvas axústanse con B-splines cúbicas dentro dunha dezmillonésima parte do tamaño da rede (uns 0,00001 mm para unha peza de 100 mm). Un parche cilíndrico feito de arcos e liñas mantense dentro de 0,00001 mm do cilindro real.

Entre as curvas, a superficie é o que dá o método: os perfís mesturados a través, máis as guías mesturadas a través, menos a mestura dos seus puntos de cruzamento. É suave en todas partes excepto onde unha curva ten un canto vivo. Onde dúas superficies de Gordon comparten unha curva de contorno, únense aresta con aresta (G0), non tanxentes.

## Cando unha rede non encaixa

| Mensaxe | Que facer |
|---|---|
| «… non se encontran: pasan a 0,4 mm de distancia» | Faga que ese perfil e esa guía se crucen, ou aumente a Tolerancia |
| «… encóntrase … 2 veces» | Unha guía só pode cruzar cada perfil unha vez: divida unha curva en bucle, ou use menos perfís |
| «… nunha orde diferente» ou «dobrase sobre si mesma» | Dúas guías cruzanse entre si (ou dous perfís). As familias deben ir lado a lado |
| «polo menos dous perfís e dúas guías» | Engada curvas, ou defina máis esbozos como Perfís ou Guías |
| «mestura curvas abertas e pechadas» | Faga que todos os perfís sexan abertos ou todos pechados (o mesmo para as guías) |
| «Un extremo … non está plano, así que non se pode pechar» | Debuxe o primeiro e o último perfil pechado cada un nun plano, ou deixe Pechar nun sólido desmarcado |

## Límites

- Unha cara B-spline por rede: sen tanxencia G1 nin G2 coas superficies veciñas.
- A costura dunha rede pechada, na primeira guía, únese aresta con aresta pero non tanxente.
- O elemento Loft en si non ten carrís guía; use en cambio unha superficie de Gordon pechada nun sólido.
- As curvas moi sinuosas, ou cruzamentos moi desigualmente espazados nunha curva en comparación coa outra, poden necesitar demasiados puntos para axustarse; o elemento así o indica.
