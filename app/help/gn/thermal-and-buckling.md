---
title: Calor, tensión térmica ha pandeo
summary: Ejuhu temperaturas pieza-pe temperatura fija, flujo de calor, potencia de calor, convección ha radiación rupi (estable térã tiempo rupi), ojapo tensión estudio temperatura jeity ndive, ha mbohapy carga pieza mbovy oñemboguejy pandeo; mba'épa ikatu ha mba'épa ndaikatúi ehecha.
keywords: térmico, transferencia de calor, calor, temperatura, conducción, convección, coeficiente de película, radiación, emisividad, flujo de calor, potencia de calor, generación de calor, disipador, transitorio, tiempo, enfriamiento, calentamiento, Crank-Nicolson, Euler implícito, balance de calor, tensión térmica, tensión térmica en el tiempo, tensión transitoria, temple, choque térmico, historia de tensión, peor momento, dilatación térmica, coeficiente de dilatación, pandeo, pandeo de Euler, factor de carga, carga crítica, columna, esbelto, autovalor
from: 1a1b7545
---

Estos estudios oĩ Simulación espacio-pe, tensión estática ha frecuencias naturales ndive (ver [Verificar tensión y deflexión](topic:simulation)). Eiporavo panel **Tipo** cuadro-pe. Ojeporu malla cubitos ha material lista peteĩ; material biblioteca-pe conductividad térmica, calor específico ha coeficiente de dilatación oguerekova (tabla valores, **Propiedades** rupi ohechauka).

## Térmico: ¿mamo oho calor?

1. Eiporavo **Térmico (transferencia de calor)** **Tipo**-pe.
2. Emoĩ condiciones térmicas panel **Agregar** lista-gui, upe rire clic cara rehe (apoyos ha cargas-icha):
   - **Temperatura fija**: cara peteĩ temperatura rehe oñemoĩ, °C-pe.
   - **Flujo de calor**: W/m² cara-pe oike (negativo, oguenohẽ). Cara área verdadera rehe ojapo, cubitos escalón ojapo-pe avei.
   - **Potencia de calor**: W-pe total, caras área rehe ojoaju. Ojeporu calentador térã chip potencia ikuaaháicha.
   - **Convección**: aire térã líquido temperatura rehe calor oipe'a h W/(m²·K) rupi. Típico h: aire quieto 5–10, ventilador 25–100, agua 500–10,000. PartCraft ndojapói h: estudio-pe fluido ndoĩ.
   - **Radiación**: cara temperatura rehe entorno-pe irradia, emisividad 0 ha 1 ryépe. **Linealizada** (radiación temperatura rehe oiko coeficiente ramo, upe rire estable peve ojejoavy) ha entorno-pe añoite oho: caras ndojoapýi calor.
3. **Generación de calor** (W/m³) pieza mboyve calienta, por ejemplo resistiva pieza.
4. Eme'ẽ **Resolver**. Pieza temperatura rehe ojapo color; **Flujo de calor** **Mostrar**-pe eiporavo ehecha mávapa calor oho. Pieza rehe apunta jajuhu ambue.

Calor estable oikotevẽ tenonde oho hag'ue: mbovy temperatura fija, convección térã radiación. Pieza calor añoite oguerovia ndaiporiri estable; transitoria ojapo.

Tabla ohechauka temperatura mínima ha máxima ha mávapa oĩ, mayor flujo de calor, ha **balance de calor**: cada condición-gui calor oike térã oguenohẽ (temperatura fija oikotevẽva térã oipe'avaʼekue ohechauka), calor generado, oike ha oguenohẽ totales, ha **desbalance**. Desbalance ikatu iporã mbovy calor oike-gui; heta jave resultado ndojeroviaiva.

### En el tiempo (transitorio)

Eiporavo **Transitorio** ha eme'ẽ **Temperatura inicial** (pieza entera upépe oñepyrũ), **Intervalo de tiempo** ha **Pasos de tiempo** mbohapy. **Euler implícito** iñemonde'a; **Crank–Nicolson** iporãve pasos igual, pero cambio brusco upe rire ondulaha. Ojapo rire, **Tiempo** deslizador rupi ehecha temperaturas momento momento-pe (color escala peteĩ ndojeambuéi). Balance de calor upéi incluye calor almacenado.

## Tensión térmica: ¿mba'épa temperatura cambio pieza-pe ojapo?

Estudio **Tensión estática** (térã **Pandeo**), fija **Carga térmica**:

- **Cambio uniforme de temperatura**: pieza entera ohero térã oipe'a (negativo número-pe) kelvin cantidad-pe.
- **Temperaturas por condiciones térmicas**: condiciones térmicas mismo estudio-pe agrega; temperaturas estables malla igual-pe peteĩ jey resuelve, upe rire pieza α·(T − **temperatura libre de tensión**) rupi tuichaiterei.
- **Temperaturas en el tiempo (corrida transitoria)**: condiciones térmicas agrega, upe rire **Temperatura inicial**, **Intervalo de tiempo**, **Pasos de tiempo** ha **Avance temporal** eme'ẽ, transitorio térmico igual. Temperaturas tiempo rehe malla igual-pe resuelve (cubos térã tetraedros), ha estática resolución momento temperatura rehe tensión momento-pe ome'ẽ. **Tensión en**:
  - **El peor momento** (inicio): **Resoluciones de tensión** momentos corrida rehe mboyve oñemoĩ, inicio avei (21 ndaipóri eambue jave, mbohapy 51). Resultados momento mayor von Mises tensión-pe oñepyrũ; tabla oñemboguéi, mbovy gráfico pico tensión tiempo-gui ohechauka, **Tiempo** deslizador momento tensión ohecha (escala peor momento-pe).
  - **Un tiempo elegido**: peteĩ momento, **Tiempo (s)** ndive oúva paso de tiempo. Pandeo estudio tiempo elegido siempre (corrida fin, ndaeambue jave).

Pieza temple térã brusco calentada tensión heta oguerohory cuanto interior ha superficie ojoavy: heta jave inicio-pe. Temperatura mantenida instante primero-gui oiko, cambio brusco ramo, upévare inicio tensión elemento tamaño rehe oikói (mbovy elemento cambio ohecha). Ojapo "muy alta" ramo, deslizador próximos momentos ehecha malla resuelve. Tensión casi estática: inercia ndaipóri, cambio brusco vibración ndaipóri.

Pieza libre oñemboja ndaipóri tensión térmica: mbovy oñemoĩ ojotopa hag'ue (ejemplo tres caras sin fricción ángulo recto). Mbohapy pared ryépe oñepreso: acero barra 50 K pared rígida ryépe ohero, 117 MPa aproximado. Cargas térmicas iñemoĩ, upévare reacciones mecánicas cargas ndive ojoavy.

## Pandeo: ¿mamo pieza esbelta oñemotĩ?

1. Eiporavo **Pandeo (lineal)** **Tipo**-pe, ha agrega apoyos ha cargas estática estudio-icha.
2. Fija **Factores de carga a buscar** (mávapa pandeo modo).
3. Eme'ẽ **Resolver**. Modo peteĩ peteĩ tiene **factor de carga**: carga multiplicador pieza ideal pandea. Factor 3 jave, cargas mbohapy ndive; **factor de carga 1-gui mboyve jave, pandea eaplica carga-pe**. Tabla ome'ẽ carga total factor peteĩ peteĩ. Forma modo ohechauka mo'ã pandea (tamaño mba'eve ndaiporiri).

**El pandeo lineal sobrestima la carga de pandeo real.** Pieza perfecta supone: recta, tensión residual ndaipóri, elástica. Pieza real imperfecciones mbovy oguerekó ha oñemotĩ ikatu; cáscara pared delgada valor lineal fracción-pe pandea. Margen tuichave ojapo, cáscara delgada factor 3 térã mbovýgui advertencia-pe ehecha.

## Qué tan confiable es

PartCraft solvers ko fórmulas mbo'e-gui ojehechakuaa: barra temperaturas mokõi ryépe (exacto), aleta de enfriamiento (0.3 K ryépe), losa calentada ipópe (exacto), cubo enfriamiento tiempo rehe (0.1 % ryépe Crank–Nicolson ndive), barra brusco calentada peteĩ extremo, barra libre calentada (sin tensión, ΔL = αLΔT), barra apretada paredes ryépe (σ = −EαΔT), placa temple tiempo rehe serie clásica ndive (cubos 1 % ryépe, tetraedros 2.1 % placa centro-pe; superficie 0.5 %), corrida larga último momento tensión térmica estable ndive (millonésima ryépe), y columnas de Euler (fijo–libre 1 %, articulado–articulado 1.5 % ryépe). Eñeno:

- **Material valores tetéva.** Conductividad, calor específico ha dilatación temperatura ndive ndojoapýi ko'ápe; cientos grados-pe 10–30 % ojoavy ikatu. Rigidez avei ndojoavy.
- **Tensión en el tiempo casi estática ha elástica**: momento peteĩ peteĩ estática resolución (inercia ndaipóri), fluencia ndaipóri, upévare temple superficie fluencia ojapo jave tensión fluencia-gui mboyve ohechauka.
- **Coeficientes de convección nde aporte**, aire térã agua flujo-gui ndojapói.
- **Resistencia de contacto ndaipóri**: pieza peteĩ sólido.
- **Pandeo lineal añoite**: imperfecciones ndaipóri, fluencia ndaipóri, pandeo rire comportamiento ndaipóri.
- Cubo escalón ha tuicha rincón interior tensiones térmicas ha ambue tensiones ndive ojapo (ver [Verificar tensión y deflexión](topic:simulation)).
- Ko laboratorio versión: pieza mbovy ambue lugar-pe ehecha.

## Relacionado

- [Verificar tensión y deflexión (Simulación)](topic:simulation)
- [Lo todavía ndojapóiva](topic:not-built-yet)
