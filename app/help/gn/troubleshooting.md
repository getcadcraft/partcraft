---
title: Problemas ha solución
summary: Problemas PartCraft-pe ikatu ojuhu, app ndoñepyrũi-gui funciones ndojapói, bocetos ndoresolvéiva, archivos ndojehendúiva ha uniones ndojapóiva, mensaje ehecha ha solución ndive.
keywords: problema, error, ayuda, no funciona, falla, fallando, cuelgue, en blanco, webgl, webassembly, núcleo, no hecho, sobredefinido, perfil abierto, no se puede abrir, no pasa nada, dirección incorrecta, lento
from: 7728542c
---

Mba'e ndojapói jave, **barra de estado** ehecha primero: PartCraft ombo'e mba'éichapa ndojapói térã mba'épa upe rire oha. Función vai ojapo ome'ẽ mensaje panel derecho-pe ha historia-pe fila ryépe.

## La app no arranca

### "Este navegador no puede mostrar 3D (WebGL está apagado o falta), así que PartCraft no puede correr aquí."

**Causa:** navegador 3D gráficos (WebGL) apagado, bloqueado térã controlador ndoguerekói.

**Solución:**

:::chromium
Abri `chrome://settings/system` (térã `edge://settings/system` Edge-pe) ha eiporavo "Usar la aceleración por gráficos cuando esté disponible", upe navegador jey eñepyrũ. Oĩ jave, `chrome://gpu` ehecha WebGL estado, controlador ñemoambue.
:::

:::firefox
Abri `about:support` ha ehecha Gráficos, WebGL. Bloqueado jave, controlador ñemoambue. `about:config`-pe `webgl.disabled` `false` oikotevẽ.
:::

:::safari
WebGL Safari actual-pe opa mboyve oĩ. macOS ñemoambue (Safari upénte ojehechakuaa). Ndojapóiva jave, Chrome térã Firefox same Mac-pe ojapo, gráficos hardware ndojavoi hag'ue.
:::

Escritorio remoto ha virtual máquina heta ndoguerekói WebGL. Computadora-pe ojapo.

### "El núcleo sólido no se cargó: …"

**Causa:** geometría núcleo (WebAssembly programa) ndojehupytýiva térã ndoñepyrũi. Por lo común conexión carga jave oñembyai, WebAssembly política térã navegador seguridad-gui apagado, térã navegador tuicha yvate.

**Solución:** conexión-pe página ñemboguejy. Ndojapóiva jave, ambue navegador actual. Firefox-pe `about:config`-pe `javascript.options.wasm` `true` oikotevẽ. Conexión ndoguerekói jave, app ha núcleo oñeñandu jave barra "Listo sin conexión" ohechauka mboyve (conexión-pe {{ui:Guardar para usar sin conexión}}; ver [Trabajar sin conexión](common:offline)).

### El botón sin conexión dice "No se pudo guardar" térã "Sin conexión no disponible"

**No se pudo guardar**: archivo heta ndojehupytýi. Conexión-pe jey eme'ẽ; conexión lenta térã medida jave mbohapy jey ikatu. **Sin conexión no disponible**: navegador ventana copia sin conexión ndojapói (ventana privada ha administrada computadora heta ndojapói). Ventana normal ojeporu, térã pestaña ñandu.

### PartCraft sin conexión pero desactualizado

Conexión-pe **Listo sin conexión** eme'ẽ ha eiporavo {{ui:Guardar otra vez (obtener la versión más nueva)}}.

### "Barrido: todavía no hecho. Necesita un núcleo exacto, …"

Mensaje completo: "<Nombre>: todavía no hecho. Necesita un núcleo exacto, que esta versión de PartCraft no tiene. Ayuda › Lo que todavía no está hecho ojapo mba'éichapa." Ehecha Barrido, Loft, Nervio, planchuela de chapa, superficie función, Combinar, Mover cuerpo, Escalar cuerpo térã Patrón de trayectoria eiporavo jave, ambue núcleo exacto ojapovakuéra jave. Navegador térã pieza-pe ndaipóri problema: PartCraft ko versión-pe núcleo de malla-pe pieza opa ojapo. Ver [Lo que todavía no está hecho](topic:not-built-yet) ha [El núcleo de malla](topic:solid-kernels).

### "Cargando el núcleo sólido…" ndojeguejýi

Conexión lenta jave mbovy jajapo: núcleo ha 3D biblioteca primera jey oñemboja. Upe rire ñemboguejy. Página error ohechauka jave, upe ehecha.

## Nada pasa cuando apretás una tecla

- Cuadro panel-pe cursor oĩ jave tecla ndojapói. Vista 3D clic térã {{key:Esc}} ojeporu (térã {{key:Tab}} oguenohẽ).
- Teclas de flecha ha {{key:Plus}}/{{key:Minus}} vista ojejoaju ha zoom ojapo vista clic rire.
- Diálogo ojeporã: upe primero ome'ẽ.
- Boceto-pe, {{key:F}} Redondeo herramienta, ndaha'éi Ajustar. {{ui:Ajustar}} botón ojeporu.

## Un botón de herramienta está en gris

- Función botones boceto ojeporã jave gris. Boceto primero oguenohẽ.
- Boceto herramientas boceto-pe añoite ojapo.
- {{ui:Deshacer}} ha {{ui:Rehacer}} gris oĩ jave ndaipóri deshacer térã rehacer.
- {{ui:Ensamblaje}} sólido ndoguerekói pieza ndojeporiva. {{ui:Unión}} ensamblaje-pe mokõi pieza ojeporiva. {{ui:Editar pieza}} pieza ojeporã selección.
- {{ui:STEP AP242 (sólido exacto)}} ha {{ui:STEP AP214 (sólido exacto)}} gris ensamblaje-pe: pieza peteĩ peteĩ exporta. Ambue programa exacto archivo ndoguerohuiva: {{ui:STEP AP214 (sólido exacto)}} eiporavo, upe rire {{ui:STEP (facetado, núcleo de malla)}}, ha {{ui:Ayuda}} › {{ui:Informar un problema}} rupi jaikuaa.
- {{ui:Barrido}}, {{ui:Loft}} ha núcleo exacto ojeporiva funciones ndojapói gris: clickeable, tooltip "todavía no hecho (necesita un núcleo exacto)" ohechauka, clic barra de estado-pe ohechauka. Ver [Lo que todavía no está hecho](topic:not-built-yet).
- {{ui:Plano}} pieza sólido ojeporiva, boceto abierto jave gris.
- {{ui:Exportar}} ensamblaje-pe gris: ensamblaje ndojapói exportar ko'ẽ. Cerrá térã pieza ñemoambue exportar hag'ue.

## Problemas de boceto

### El boceto no me deja agregar una relación

"No hay relación que encaje con esta selección. Seleccioná uno o dos elementos (Shift+clic agrega)." Relación ambue selección ojeporã. Ver [Relaciones y cotas de boceto](topic:sketch-relations) mba'éichapa cada una.

### "Sobredefinido: … no pueden cumplirse todas. Deshacé, o borrá una de ellas."

**Causa:** relación térã cota ndo'avevéi ambue oĩva-gui. Boceto ndojeambuéi.

**Solución:** {{key:Mod+Z}}, térã panel derecho lista-pe peteĩ rojo elemento Eliminar ojapo.

### "Sobredefinido: … ya está implícito. Borralo."

**Causa:** relación ndoguerekói ambue ojejoavy (ejemplo Paralelo rectángulo mokõi lado, térã cota ojejoavy). Build ko-pe driven cota ndoĩ.

**Solución:** borrá. Función oñemoĩ advertencia ndive.

### "Esos elementos no pueden acotarse juntos."

Punto ha círculo clic. Círculo centro punto-pe cota ojapo.

### "Un redondeo necesita una esquina donde se encuentran exactamente dos líneas." / "Ese radio es demasiado grande para estas líneas."

Dos línea sólida esquina punto exacto clic. Línea mbovy oguerekóva-gui mbovy radio.

### La geometría vuelve atrás cuando la arrastro

Arrastre relación térã cota ojoavy, PartCraft upe ojapo. Azul (sub-definida) geometría ojeheja.

### "Este boceto no puede abrirse: Necesita Extrude2, que está fallando."

Boceto función cara-pe, ndojapói función-pe. Función primero ojapo, térã desuprimí, térã historia ojeheja.

## Problemas de función

| Mensaje | Causa | Solución |
|---|---|---|
| "Hacé un boceto primero: elegí un plano, Boceto, dibujá un perfil cerrado, Salir." | Boceto curvas ndoguerekói, ni eiporavo | Boceto ojapo, térã historia-pe boceto eiporavo |
| "El boceto no tiene perfil cerrado para extruir." (térã "para revolucionar") | Líneas sólidas bucle cerrado ndoguerekói | Ñandu cerrá; construcción líneas {{key:Q}} rupi sólida-pe |
| "El perfil está abierto: un extremo en (x, y) no está unido a nada." | Punto ojeguerekóva ñandu | Boceto abri, extremo vecino-pe arrastra ojoaju |
| "El perfil se bifurca en (x, y): más de dos extremos se encuentran ahí." | Mbohapy térã más línea punto peteĩ-pe | Línea de más borra, térã construcción-pe ojapo |
| "Un bucle cerrado necesita al menos tres lados o una curva." | Mokõi línea ida ha vuelta | Bucle jey dibuja |
| "Atravesar todo es para cortes. Usá una profundidad para un macizo." | Macizo Atravesar todo-pe | Fin Ciego térã Plano medio-pe emoĩ |
| "No hay nada que cortar de ese lado del boceto. Probá la otra dirección." | Corte material-gui ojerete | Invertir dirección marcá |
| "Todavía no hay nada que cortar." / "Todavía no hay nada que taladrar." | Función mboyve sólido ndoĩ | Macizo primero ojapo, térã función ojeheja |
| "Dibujá una línea de centro (una línea de construcción) en el boceto para revolucionar alrededor." | Eje ndoguerekói revolución | Línea de centro ojapo, térã Eje-pe línea eiporavo |
| "El perfil cruza el eje. Mantenelo de un lado de la línea de centro." | Perfil eje ambue pyanguépe | Perfil mitad jey dibuja |
| "Poné puntos de boceto donde van los agujeros (herramienta Punto), después hacé el agujero." | Boceto punto suelto ndoĩ | Punto {{key:P}} ndive ojapo |
| "El avellanado tiene que ser más ancho que el agujero." | Avellanado ⌀ Diámetro-gui mbovy | Avellanado tuichave ojapo |
| "El avellanado tiene que ser menos profundo que el agujero." | Avellanado agujero ciego-gui hondo | Mbovy hondo, térã agujero hondo |
| "Elegí las funciones a copiar." | Patrón térã espejo nada marcado | Funciones a copiar-pe marcá |
| "Extrude2 no tiene sólido para copiar." | Función copiada omboguejýi térã apagada | Ñemboguejy térã desuprimí |
| "Necesita Sketch3, que está fallando." | Función ndojapói | Función nombrada ñemboguejy |
| "La cara donde se apoya ya no existe (Extrude1 no está construida)." | Boceto cara ndoiko | Función ñemboguejy, térã boceto borra ha jey dibuja |
| "No queda nada de la pieza después de esto." | Corte material opa ojejoavy | Corte tamaño ha dirección ehecha |
| "El núcleo sólido no pudo construir esto (…)." térã "El núcleo sólido no pudo combinar esto con el cuerpo." | Núcleo geometría ndoguerohuiva | Deshacé, térã tamaño mbovy cambia; caras exactamente tocándose ikatu ojapo |
| "Barrido: todavía no hecho. Necesita un núcleo exacto, que esta versión de PartCraft no tiene." (Loft, Nervio ha ambue avei) | Versión anterior función; núcleo exacto añoite ojapo. Historia-pe oĩ ha cambio ndoguerekói salvada | Desuprimí térã borrá; ver [Lo que todavía no está hecho](topic:not-built-yet) |
| "Un redondeo de 5 mm no entra aquí (…)." / "Un chaflán de 2 mm …" | Tamaño cara borde-gui tuicha térã esquina ndojapói | Tamaño mbovy, térã función arista mbovy |
| "Redondeo: en esta versión solo aristas rectas entre dos caras planas (el núcleo de malla las construye). Redondeá o biselá las aristas curvas en el boceto." (Chaflán avei) | Arista redonda (agujero borde), térã cara curva | {{ui:Seleccionar aristas}} ha borrá; boceto esquina redondea térã biselá |
| "Un redondeo cuyo radio cambia a lo largo de la arista: todavía no hecho (necesita un núcleo exacto). Dale un solo radio." | **Radio variable** marcada | Desmarcá ha radio peteĩ |
| "Redondeo por el núcleo de malla: donde se encuentran aristas redondeadas se biselan a inglete, no se mezclan." (⚠ advertencia) | Aristas elegidas esquina-pe; redondeo ojoaju pliegue filoso | Ndaipóri ñemboguejy: pieza ojapo. Pliegue tuicha jave arista mbovy redondea |
| "Una arista que redondea desapareció: la arista entre Extrude1 y Cut2." | Cambio anterior arista omboguejy | {{ui:Seleccionar aristas}}, arista pytã borrá, pyahu eiporavo |
| "Elegí las aristas en la vista, después agregalas." | Redondeo térã chaflán aristas ndoguerekói | {{ui:Seleccionar aristas}} |
| "Elegí las caras a quitar (abiertas), después vaciá." | Vaciado cara abierta ndoguerekói | {{ui:Seleccionar caras}} |
| "El vaciado no pudo hacerse con este espesor (…)." | Pared parte delgada modelo térã redondeo radio-gui tuicha | Pared mbovy, térã redondeo tuicha |
| "Vaciado: en esta versión solo abre caras planas (el núcleo de malla lo construye)." | Abierta cara curva | {{ui:Seleccionar caras}} ha borrá; cara plana añoite abri |
| "Desmoldeo: ko versión-pe caras planas añoite (núcleo de malla ojapo)." | Desmoldeo cara cilindro, cono térã libre | Borrá; cara plana añoite desmoldeá |
| "Una cara que abre desapareció (…)." | Cambio anterior cara omboguejy | {{ui:Seleccionar caras}} jey |
| "Fillet1 cambia las aristas o paredes del cuerpo; no puede copiarse. …" | Patrón térã espejo redondeo, chaflán térã vaciado copia | Desmarcá; corte patrón primero, upe redondeo |
| "Hay una cara sobre la que solo un núcleo exacto puede encontrar: todavía no hecho en esta versión." | Núcleo malla cara ndojuhúi, versión anterior-pe ojapova | Plano base térã extrude plano cara-pe boceto ojapo, cota ndive ubica |
| "Usa una cara o arista del sólido, que solo un núcleo exacto puede encontrar: todavía no hecho en esta versión." | Plano, eje térã punto referencia sólido cara térã arista-pe | Plano base, boceto punto térã coordenada-gui ojapo |
| "Extruir hasta una cara, la siguiente cara o un vértice: todavía no hecho (necesita un núcleo exacto)." / "Un ahusado: todavía no hecho (necesita un núcleo exacto)." | Fin condición térã ahusado núcleo exacto-pe | Medido Ciego térã Plano medio profundidad ojeporu; Ahusado 0-pe emoĩ |

## Problemas al elegir

- "Esa cara es curva. Elegí una cara plana o un plano para dibujar." Boceto cara plana oikotevẽ. Plano base-pe boceto ojapo, cota ndive ubica.
- Cara "Fija donde se eligió": boceto arista-gui ndojapói (ejemplo patrón copia cara), upévare pieza ojeambue jave boceto oikéva.
- Arista ojuhu malpía: zoom ojapo. Puntero arista rehe jave, arista cara-gui mboyve porã.

## Problemas de archivos

| Mensaje | Ejapo |
|---|---|
| 'PartCraft .partcraft.json archivo-pe ojapo, CadCraft macro SolidWorks-gui exporta (.cadcraft-sw.json) ha STEP archivo-pe. "bracket.igs" upéva ndaha'éi.' | Umi archivo rehe ojehecha (STL, OBJ, 3MF malla ha `.3dm` avei) |
| '"part.stp" STEP archivo ndaha'éi (ISO-10303-21 ndoñepyrũi).' | Archivo STEP texto ndaha'éi |
| "Ese archivo STEP es demasiado grande (más de 60 MB) para importarlo aquí." | Origen-pe mbovy ojapo |
| "Ese archivo es demasiado grande para ser una pieza de PartCraft." — tuya salvada pieza | Versión anterior STEP sólido tuicha pieza archivo 50 MB-gui tuichave. Copia anterior ojeporu, ndaguereko |
| "Ese archivo es demasiado grande para ser una pieza de PartCraft." | Archivo 50 MB-gui tuicha; PartCraft archivo ndaha'éi |
| "Este no es un archivo de PartCraft (no es JSON)." / "Este no es un archivo de PartCraft." | Archivo omboguejy térã ambue programa |
| "Este archivo lo guardó un PartCraft más nuevo (versión de archivo …); esta lee la versión …" | PartCraft pyahúpe abri |
| "Extrude2: la profundidad es incorrecta." (térã ambue valor) | Archivo mano-pe ojemoambue térã omboguejy. Copia anterior ojeporu |
| Ensamblaje-pe insertar "Part1.partcraft.json no tiene sólido para insertar." | Pieza archivo sólido ndoguerekói. Abrí, sólido ojapo, salva, ha jey insertá |

**Mi archivo guardado no está donde esperaba.** Salvar descarga: navegador descarga carpeta-pe mirá, térã navegador barra-gui descargas lista ehecha. Ver [Dónde van tus archivos](common:your-files).

**Pieza abri, ensamblaje pantalla-pe ojehecha.** Pieza ensamblaje atrás cargó. {{ui:Cerrar}} eiporavo ensamblaje cerrá, pieza ehecha. Pieza archivo abri mboyve ensamblaje cerrá.

## Problemas de plano

| Mensaje | Ejapo |
|---|---|
| "Construí un sólido primero, después hacé su plano." | Pieza primero ojapo |
| "No hay lugar en la hoja para: detalle. Hacé el detalle más chico o quitá una vista." | **Radio de detalle** térã **Escala de detalle** mbovy, térã sección ojejoavy |
| "Un detalle se toma de la vista frontal, superior, derecha o de sección." | Vistas ndive clic |
| "Hacé clic en una de las vistas." | Clic papel mbovy-pe |
| "La posición necesita al menos una referencia de datum." ha ambue marco mensajes | Panel ombo'e datum ojapo, térã característica ambue eiporavo |
| "No se pudieron hacer las vistas del plano: …" | Último cambio deshacé. Ojejavy jave, salva, ñemboguejy ha pieza abri |

## Problemas de ensamblaje

| Mensaje | Ejapo |
|---|---|
| "Construí un sólido primero, después ponelo en un ensamblaje." | Pieza sólido ndoguerekói |
| "Insertá primero una segunda pieza (Agregar copia, Insertar, o Editar › Duplicar)." | Unión mokõi pieza oikotevẽ |
| "Elegí una cara en una pieza distinta." | Unión cara mokõi pieza ambue-pe oĩ |
| "Esa cara es curva. Elegí una cara plana …" | Uniones cara plana-gui; upe **Centrar en** agujero térã revolución eje-pe emoĩ |
| "Bracket2 no está unida a la pieza fija, así que se queda donde se la puso." | Unión pieza emoĩva-pe ojoaju |
| "Revolute3 cierra un lazo que no puede cerrarse: está 2.000 mm fuera. Revisá las caras, desplazamientos y límites de las uniones del lazo." | Piezas opa ndojoaju: largos, unión cara, desplazamiento (cara-cara apilado piezas profundidad igual) ha límites revisa; térã unión peteĩ lazo-gui borrá |
| "La cara que usa esta unión ya no está en Bracket." / "El eje que usa esta unión ya no está en Bracket." | Pieza ojemoambue. Unión borrá ha jey ojapo |
| "El eje corre a lo largo de la cara, así que no puede fijar el centro de la unión." | Cara cruza eje eiporavo, térã "El origen propio de la cara" |
| "Un ensamblaje conserva al menos una pieza. Cerralo en su lugar." | {{ui:Cerrar}} ojeporu |

**Piezas ojoaju, ndoporãi lugar-pe.** Unión mokõi costado **Centrar en** agujero térã revolución eje-pe emoĩ, upe **Ángulo (°)** ha **Desplazamiento (mm)** ajusta.

## Va lento

- Modelado jave **Curvas** Normal térã Grueso-pe emoĩ; exportar mboyve Fino-pe.
- Patrón heta copia (cientos) cambio cada jave rehacer ojapo. Patrón ojejoavy otra función ojapo jave.
- Colisión ha movimiento verificación pieza par opa compara; ensamblaje tuicha jave mbovy.
- Ambue pestaña tuicha cerrá. PartCraft computadora procesador ha gráficos ojeporu.

## Todavía trabado

Archivo salva primero ({{key:Mod+S}}), upe página ñemboguejy ha abri. Función omboguejýi jave, select, mensaje ehecha ha {{key:Mod+Z}} última porã estado peve eiporavo.
