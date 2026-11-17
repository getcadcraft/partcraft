---
title: Calor, tensión térmica e pandeo
summary: Atope as temperaturas dunha peza a partir de temperaturas fixas, fluxo de calor, potencia térmica, convección e radiación (en réxime estable ou ao longo do tempo), cargue un estudo de tensión cunha subida de temperatura e atope a carga á que unha peza esbelta pandea, con indicación do que pode e non pode dicir cada método.
keywords: térmico, transferencia de calor, calor, temperatura, condución, convección, coeficiente de película, radiación, emisividade, fluxo de calor, potencia térmica, xeración de calor, sumidoiro de calor, transitorio, tempo, arrefriamento, quecemento, Crank-Nicolson, Euler implícito, balance de calor, tensión térmica, tensión térmica ao longo do tempo, tensión térmica transitoria, temple, choque térmico, historial de tensión, peor momento, dilatación térmica, coeficiente de dilatación, pandeo, pandeo de Euler, factor de carga, carga crítica, columna, esbelta, autovalor
from: 1a1b7545
---

Estes estudos atópanse no espazo de traballo Simulación, xunto á tensión estática e ás frecuencias naturais (vexa [Comprobar tensión e deformación](topic:simulation)). Escóllaos na caixa **Tipo** do panel. Usan a mesma malla de cubos pequenos e a mesma lista de materiais; todo material da biblioteca ten unha condutividade térmica, un calor específico e un coeficiente de dilatación (valores típicos de manuais, que se mostran en **Propiedades**).

## Térmico: onde vai o calor?

1. Escolla **Térmico (transferencia de calor)** como **Tipo**.
2. Engada condicións térmicas desde a lista **Engadir** do panel e despois prema nas súas caras (como nos apoios e nas cargas):
   - **Temperatura fixa**: a cara mantense a unha temperatura, en °C.
   - **Fluxo de calor**: W/m² que entran na cara (en negativo, saen). Actúa sobre a área real da cara, mesmo onde os cubos forman escaleiras.
   - **Potencia térmica**: un total en vatios, repartido polas caras seleccionadas segundo a área. Úseo para un calefactor ou un chip de potencia coñecida.
   - **Convección**: o aire ou un líquido a unha temperatura levan o calor lonxe a h W/(m²·K). Valores típicos de h: aire en repouso 5–10, un ventilador 25–100, auga 500–10 000. PartCraft non calcula h: neste estudo non hai fluxo de fluídos.
   - **Radiación**: a cara irradia cara ao contorno a unha temperatura, cunha emisividade de 0 a 1. Está **linearizada** (a radiación escríbese como un coeficiente que depende da temperatura e recalcúlase ata estabilizarse) e vai só ao contorno: as caras non intercambian calor entre elas.
3. **Xeración de calor** (W/m³) quenta toda a peza desde dentro, por exemplo unha peza resistiva.
4. Prema **Resolver**. A peza colorease pola temperatura; escolla **Fluxo de calor** en **Mostrar** para ver por onde flúe o calor. Sinale a peza para ler ambos os valores.

O fluxo de calor en réxime estable necesita un lugar por onde saír: polo menos unha temperatura fixa, convección ou radiación. Unha peza que só recibe calor non ten réxime estable; en lugar diso, faga un estudo transitorio.

A táboa indica a temperatura mínima e máxima e onde están, o maior fluxo de calor, e o **balance de calor**: o calor que entra ou sae de cada condición (unha temperatura fixa conta o que debe achegar ou absorber), o calor xerado, os totais de entrada e saída e o **desequilibrio**. O desequilibrio debe ser unha fracción mínima do calor que entra; un desequilibrio grande significa que non se pode confiar no resultado.

### Ao longo do tempo (transitorio)

Marque **Transitorio** e indique unha **Temperatura inicial** (toda a peza comeza nela), un **Intervalo de tempo** e un número de **Pasos de tempo**. **Euler implícito** é robusto; **Crank–Nicolson** é máis preciso para os mesmos pasos, pero pode ondular despois dun cambio brusco. Despois de resolver, arrastre o control de **Tempo** para ver as temperaturas en cada momento (a escala de cores mantense igual para todos). O balance de calor inclúe entón o calor almacenado.

## Tensión térmica: que fai unha variación de temperatura na peza?

Nun estudo de **Tensión estática** (ou **Pandeo**), estableza a **Carga térmica**:

- **Variación uniforme de temperatura**: toda a peza se quenta (ou arrefría, con un número negativo) eses kelvin.
- **Temperaturas a partir de condicións térmicas**: engada condicións térmicas ao mesmo estudo; primeiro resólvense as temperaturas estables sobre a mesma malla, despois a peza dilátase α·(T − a **temperatura sen tensión**).
- **Temperaturas ao longo do tempo (cálculo transitorio)**: engada condicións térmicas e despois indique a **Temperatura inicial**, o **Intervalo de tempo**, os **Pasos de tempo** e o **Avance temporal**, como nun estudo térmico transitorio. As temperaturas resólvense ao longo do tempo sobre a mesma malla (cubos ou tetraedros), e unha resolución estática sobre as temperaturas de cada momento dá a tensión dese momento. **Tensión en**:
  - **O peor momento** (o inicio): **Resolver tensións** calcula momentos repartidos de xeito uniforme ao longo do cálculo, incluído o inicio (21 por defecto, 51 como máximo). Os resultados ábrense no momento de maior tensión de von Mises; a táboa indícao, un pequeno gráfico mostra a tensión máxima en función do tempo, e o control de **Tempo** mostra a tensión en cada momento calculado (a escala de cores é a do peor momento).
  - **Un tempo escollido**: un único momento, o paso de tempo máis próximo ao **Tempo (s)** que indique. Un estudo de pandeo usa sempre un tempo escollido (o final do cálculo, salvo que indique outro).

Unha peza temperada (mergullada de quente en frío) ou quentada de súpeto sofre máxima tensión mentres o interior e a superficie difiren máis: a miúdo xusto ao inicio. Unha temperatura mantida aplícase desde o primeiro instante, como un cambio brusco, polo que a tensión no mesmo inicio depende do tamaño do elemento (só uns poucos elementos notan o cambio). Léaa como «moi alta» e mire os seguintes momentos do control para ver os valores que a malla resolve. A tensión é cuasiestática: sen inercia e sen vibración pola variación brusca.

Unha peza que pode crecer libremente non ten tensión térmica: suxeítea só o necesario para que non se mova (por exemplo, tres caras sen fricción en ángulo recto). Suxeita entre dous muros queda comprimida: unha barra de aceiro quentada 50 K entre muros rígidos soporta uns 117 MPa. As cargas térmicas equilíbranse por si mesmas, polo que as reaccións seguen equilibrando só as cargas mecánicas.

## Pandeo: cando cede unha peza esbelta?

1. Escolla **Pandeo (lineal)** como **Tipo** e engada apoios e cargas como nun estudo estático.
2. Estableza os **Factores de carga a calcular** (cantos modos de pandeo).
3. Prema **Resolver**. Cada modo ten un **factor de carga**: o múltiplo das súas cargas co que a peza ideal pandea. Un factor de carga de 3 significa tres veces as súas cargas; **un factor de carga inferior a 1 significa que pandea coas cargas aplicadas**. A táboa tamén indica a carga total en cada factor. A forma do modo mostra como pandea (o seu tamaño non significa nada).

**O pandeo lineal sobrestima a carga real de pandeo.** Supón unha peza perfecta: perfectamente recta, sen tensión residual e elástica. As pezas reais teñen pequenas imperfeccións e poden ceder antes, e as cunchas de parede fina poden pandear cunha fracción do valor lineal. Use un marxe xeneroso e trate un factor de carga preto de 3 ou inferior nunha cuncha fina como un aviso.

## Ata onde confiar nel

PartCraft compara estes resolutores con fórmulas manuais: unha barra entre dúas temperaturas (exacta), unha aleta de arrefriamento (con 0,3 K), unha placa que se quenta a si mesma (exacta), un cubo que se arrefría ao longo do tempo (con 0,1 % con Crank–Nicolson), unha barra quentada de súpeto por un extremo, unha barra libre quentada (sen tensión, ΔL = αLΔT), unha barra suxeita entre muros (σ = −EαΔT), unha placa temperada ao longo do tempo fronte á solución clásica en serie (con 1 % en cubos, 2,1 % en tetraedros no centro da placa; 0,5 % na súa superficie), o último momento dun cálculo longo fronte á tensión térmica estable (igual ata a millonésima) e as columnas de Euler (con 1 % fixa–libre, 1,5 % articulada–articulada). Teña en conta:

- **Valores de material constantes.** Aquí a condutividade, o calor específico e a dilatación non cambian coa temperatura; a varios centenares de graos poden cambiar un 10–30 %. A rixidez tampouco cambia.
- **A tensión ao longo do tempo é cuasiestática e elástica**: cada momento é un cálculo estático (sen inercia) e non hai fluencia, así que un temple que faría ceder a superficie mostra en cambio unha tensión por riba do límite de fluencia.
- **Os coeficientes de convección son un dato de entrada**, non se calculan a partir dun fluxo de aire ou de auga.
- **Sen resistencia de contacto**: a peza é un só sólido.
- **Só pandeo lineal**: sen imperfeccións, sen fluencia e sen comportamento despois do pandeo.
- A escaleira dos cubos e as esquinas interiores vivas afectan as tensións térmicas do mesmo xeito que as outras tensións (vexa [Comprobar tensión e deformación](topic:simulation)).
- Esta é unha versión de laboratorio: comprobe por outro medio as pezas importantes.

## Relacionado

- [Comprobar tensión e deformación (Simulación)](topic:simulation)
- [O que aínda non está construído](topic:not-built-yet)
