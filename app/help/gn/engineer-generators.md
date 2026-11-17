---
title: Piezas de física: generadores
summary: Ingeniería espacio de trabajo ha Cuerpo generado elemento: generador eiporavo, entradas emoĩ (flujo, presión, temperaturas, material, impresora), ha pieza ojapo tamaño fórmulas de libro, hoja de datos, verificación de fabricación ha archivo análisis herramientas-pe. Mismas entradas siempre pieza mismo ome'ẽ.
keywords: ingeniería, generador, cuerpo generado, física, reglas, intercambiador de calor, colector, boquilla, retícula, giroide, hoja de datos, entradas, determinista, mismas entradas misma pieza, verificación de fabricación, impresión 3d, lecho de polvo
from: 5a387dc0
---

**Generador** ha'e script pieza tamaño ojapo tu requerimiento rupi ha ojapo. Intercambiador de calor generador: calor movido, dos flujo ha temperaturas, presión, material ojeikuaa; núcleo tamaño ha pared espesor ojekuaa, ojapo, ha número ojeporu ha mba'éichapa ojekuaa ohechauka. Entrada ojemoambue jave pieza oñemoambue.

Resultado cuerpo normal pieza-pe: elemento lista-pe oĩ, imprimí, exportá. Generador pieza-pe avei oñongatu, archivo oñeikuaa ambue computadora-pe generador ndojejapóiva, **pieza abrir ndojejapói script**.

## Peteĩ cuerpo ojapo

1. Cambio-pe {{ui:Ingeniería}} espacio de trabajo eiporavo.
2. Lista-pe generador eiporavo (PartCraft ojeporu oikoséva, upéi archivo-gui ojeabrí kuéra) ha {{ui:Nuevo}} eklikea.
3. Script ojejapo. Oñemoĩ jave cuerpo vista-pe, panel entradas, **hoja de datos** ha **verificación** ohechauka.

Diseño-gui avei oike: {{ui:Elementos}} › {{ui:Más}} › {{ui:Cuerpo generado}}.

## Ojemoambue

Entrada cambio jave cuerpo mboyve ojapo'ỹ ndejejoko'ỹ rire. Panel mbohapy oiko mba'e ohechauka:

- **Al día**: cuerpo script ha entradas ndive ojoguaicha.
- **Entradas cambiaron**: cuerpo pieza-pe pasado entradas gui; ojapo ojerovia, térã **Ejecutar** eiporavo.
- **Todavía no ejecutado** térã **La última ejecución falló**: script error línea ndive ohechauka.

{{ui:Detener}} ojeda hasa demasiado tiempo ejecución. Deshacer peteĩ paso: ejecución peteĩ paso, entrada peteĩ paso.

## Hoja de datos

Generador ojekuaa número opa ohechauka **unidad** ha **mbaʼéichapa ojekuaa** (fórmula de libro, norma, hoja de datos). Nada constante oculto. Hoja archivo-pe, upévare ambue computadora-pe ojoguaicha. [Datos de salida](topic:data-out)-pe mba'éichapa JSON térã PDF-pe ojapo.

## Verificaciones

Generador pieza ojehai ha imprimi proceso ndive: pared ha abertura proceso ojeikuaa mboyve ñembyasy, pieza suelta, cavidad polvo térã resina ojeikuaa, agujero ojeikuaa ndojepe'avoi, ha voladizo soporte oikotevẽ. Hallazgos panel-pe ha **Problemas** lista-pe (⚠ botón) oĩ, archivo-pe avei guardado.

Proceso cifra ojeikuaa public guía redondeado ojeikuaa FDM, SLA, SLS, metal lecho de polvo. **Ndaha'éi máquina especificación**: ojeporu mboyve tu taller cifra ojapo verificación. Verificación voxel red rehe, upévare casi un voxel exacto: pared anunciado solo voxel límite mboyve ñembyasy.

## Mba'e ojeikuaa

| Generador | Mba'e ojapo |
|---|---|
| Bloque giroide | Giroide, Schwarz P térã diamante hoja rehe bloque: retícula sencilla |
| Intercambiador de calor giroide | Dos fluido intercambiador núcleo, carga ohechauka efectividad-NTU método, pared presión rehe; un celda flujo estudio presión caída ojeikuaa |
| Colector de distribución | Cabezal ha ramal, cada tubo flujo ohejava tamaño |
| Viga retícula graduada | Retícula pared hasy ohaiva material oikotevẽva topología optimización rehe |

Opa ko'ã primera estimación fórmula libro rehe. [Biblioteca de ingeniería](topic:engineering-library)-pe fórmula ha límites. Resultado simulación, térmica térã flujo ojapo antes confiar.

## Control de exportación

Ingeniería generador ha hoja de datos control exportación ha sanciones aviso oguereko. [Ingeniería y control de exportación](topic:engineer-export-notice)-pe ehecha; hoja de datos mboyve avei oĩ.

## Ndaipóri ojapo

- Intercambiador núcleo conexiones, puertos ha accesorios: núcleo solo.
- Resistencia material temperatura curvas: materiales temperatura ambiente.
- Te pérdidas ha salida flujo compartido colector-pe.
- Directorio complemento generador clic ojeagrega; archivo abrir ko navegador-pe peteĩ agrega.
- Otra aplicación generador.
