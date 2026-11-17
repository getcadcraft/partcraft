---
title: Escribí ha ejecutá kuatiañe (Script espacio)
summary: Script espacio paso paso: escribí CraftScript térã Lua kuatiañe, ejecutá F5-gui, consola ojeporandu, resultado variable-pe ojeguarda hag̃ua hoi kuatiañe-pe, malla, campo ha gráfico ohechauka, corrida ojemongeta ha kuatiañe parte-ndive ojeguarda.
keywords: script, scripting, script mientras modelás, desprender, segunda pantalla, segundo monitor, param, params, parámetros en scripts, CraftScript, Lua, código, programa, editor, consola, REPL, línea de comandos, ejecutar, F5, ejecutar selección, detener, variables, workspace, gráfico, campo, malla, leyenda, subpantalla, análisis, automatización, matriz, numérico
from: d0003e89
---

**Vista previa.** Scripting ojepyta PartCraft 0.3-pe ha vista previa ha'e: ñe'ẽ, biblioteca ha kuatiañe ojeguarra ramo ojemudáta; ko'ápe ejapo kuatiañe ojeporu peteĩ ajuste después. Ehai ha'e mba'épa ojeipe'a.

Script espacio oporu nde cálculo parte ryepýpe: mbovy suma, análisis entero, térã [biblioteca de análisis](topic:craftscript-library) kuatiañe-kuéra. Kuatiañe ojapo **CraftScript** (matriz ñe'ẽ MATLAB-icha, ehecha [El lenguaje CraftScript](topic:craftscript-language)), térã **Lua** (ehecha [Kuatiañe Lua-pe](topic:craftscript-lua)) térã **Python** (ehecha [Kuatiañe Python-pe](topic:craftscript-python)).

Ejeporá **Script** **Workspace** caja toolbar-pe izquierda. Parte ndojejapóiva. Pantalla derecha oiko script panel (ancho ojehasa ordinario-gui; ejapyhy borde-gui térã oipe'a segunda pantalla-pe {{ui:⋯}} menú rupi, ehecha [Arrange the panels](common:arrange-panels)).

## Script ojapo modelado mboyve

Ndaikói Design espacio-gui oho script ojapo hag̃ua. Design-pe, pantalla derecha {{ui:Script}} tab-pe oĩ mismo editor, consola, variable ha biblioteca, mismo kuatiañe-kuéra. Feature árbol ha vista ojapo ojapóva: ejeapretá feature selección-pe, dos veces sketch-pe edición-pe, vista rotá, upéi {{ui:Script}} tab-pe jevy ha oprimi {{key:F5}}.

Mba'e kuatiañe **ohechauka** (malla, campo, gráfico, tabla) ndojedibuja modelo ári Design-pe: consola ohechauka, ha Script espacio-pe opa ohechauka oúva ojehecha.

{{ui:Pop out}}, {{ui:Run}} ári, opa panel peteĩ ventana propia-pe oipe'a, por ejemplo segunda pantalla-pe, upévare editor ha vista entera hendápe. {{ui:Put back}} oinstala jevy. Ehecha [Arrange the panels](common:arrange-panels).

## Ñepyrũ kuatiañe ejecutá

1. Escribí editor-pe, por ejemplo:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Oprimi {{key:F5}} (térã {{ui:Run}}). Editor ári consola ohechauka kuatiañe ohechaukava, ha "Done in … s". Gráfico ohechauka **subpantallas** 3D vista ruguýpe.
3. Línea semicolon-na'ỹ valor ohechauka, MATLAB-icha: `a = 3` ohechauka `a = 3`; `a = 3;` ndohechaukai mba'eve.
4. Peteĩ kuatiañe parte ejecutá hag̃ua, líneas ejeporaha ha oprimi {{key:Mod+Enter}} ({{ui:Selection}}). Ndaipóri selección, cursor oĩva línea ejecutáta.
5. Consola ruguýpe (`>>` rire) línea peteĩ kuatiañe ejecutá {{key:Enter}} oprimíramo. {{key:Up}} ha {{key:Down}} oheja jevy umi línea.

## Buscar, plegar ha completar

- **Buscar ha reemplazar.** Oprimi {{key:Mod+F}} (térã {{key:Mod+H}} reemplazo-pe). Código ryepýpe barra oipe'a: escribí buscá; coincidencia oñemoĩ, cantidad ohechauka nde rembiapo. Caja ryepýpe botón: mayúscula-minúscula (**Aa**), palabra entera (**W**) ha expresión regular (**.\***; reemplazo-pe `$1` oñemoĩ primer grupo-pe). {{ui:Replace}} actual coincidencia ojerrepuesta, {{ui:All}} opa coincidencia peteĩ paso-pe {{key:Mod+Z}}-pe.
- **Plegado.** Ejeapretá ▾ línea número ári, térã oprimi {{key:Mod+Shift+[}} cursor `function`, `if`, `for`, `while`, `switch` térã `try` línea-pe (Lua: `function`, `do`, `if`, `repeat`), inner líneas ojepe'a; línea ohechauka cuánto. ▸ térã {{key:Mod+Shift+]}} ojeaprí jevy. Plegado ojepe'a ñomi líneas: Run, Save, copia ha línea número opa oñembohasa.
- **Completar.** Escribí dos letra nombre-pe, térã oprimi {{key:Mod+Space}}: lista ohechauka nde variable, ñe'ẽ función (argumentos-ndive), palabra clave ha kuatiañe-pe ojeporúva nombre. Flecha-gui ejeporá ha oprimi {{key:Enter}} térã {{key:Tab}}.

## Mba'e ojerreveháramo

- Error ohechauka mba'épa ojaperíva ha línea: línea editor-pe pytã-gui marcada, consola **Line n** ojevy línea-pe.
- Loop ndoipeʼaiva: oprimi {{ui:Stop}} (toolbar térã panel). Kuatiañe oñemoĩ enseguida; variable oguereko corrida mboyve valor.
- Opa corrida oguereko paso-presupuesto (2 mil millón paso ndakotyvoháre; cambiá **Run options** panel-pe). Corrida ojepasa rire mensaje-pe oñemoĩ.

## Variable kuatiañe-gui kuatiañe-pe ojeguerupa

Opa variable script-pe nivel superior ojapo oñemoĩ **Variables** tab-pe (nombre, tipo, tamaño, mboyve ha tuichave valor) ha oikóta hoi kuatiañe-pe, ñe'ẽ ojeporúvo. Upéicha peteĩ kuatiañe malla, ambue solve, mbohapy gráfico ojapo.

- Variable ojeapretá ohechauka: malla, campo ha modelo 3D vista-pe, arreglo tabla-pe (vector-pe línea gráfico, matriz-pe color mapa) subpantalla-pe.
- {{ui:Save as JSON}}, {{ui:Save as CSV}} (número tabla) ha {{ui:Save as HDF5}} oñeikẽ; {{ui:Delete}} oheja; {{ui:Clear all}} workspace opa oipe'a.
- Marcá **Save the variables with the part** parte archivo-pe ojeguarda hag̃ua (32 MB peve; tuichaveve oĩ kóa visita-pe). Upe parte ojeipe'a rire panel ojeporandu ojeikeha hag̃ua.

## Malla, campo ha gráfico

- `show(m)` malla ohechauka; `show(f)` campo color leyenda-ndive. **Shown** lista vista ryepýpe ohenduka: ({{ui:eye}}) térã oheja cada mba'e, parte ohechauka térã ojepe'a. Leyenda izquierda-pe rango ejeporakuaa (**From**, **to**) térã {{ui:Auto}}; vector térã tensión campo-pe mba'e componente ohechauka ejeporaha.
- `show(f, 'deform', u, 'scale', 50)` malla desplazamiento campo `u`-gui movido ohechauka, 50 jey tuichaite (`scale` ndaipóri, modelo tamaño 8 % aproximado).
- Malla ejeapretá: nodo mbohapy, elemento ha campo valor subpantalla-pe ohechauka (**Picked**).
- `plot`, `imagesc` ha `table` gráfico línea, matriz color mapa térã tabla subpantalla-pe. Mismo `'id'` (térã nombre) gráfico ojapo ojepyhýva ojemoambue, upévare loop peteĩ convergencia gráfico ojeacuatiámo; `'append', true` curva ojepyta. {{ui:Clear}} subpantalla oipe'a; flecha oplegá.
- Dos térã heta gráfico-pe, {{ui:Side by side}} opa peteĩ jey ohechauka (pyahúvagui seis); tabla térã imagen tab-pe ejeapretá, upe peteĩ ohechauka.
- Peteĩ peteĩ gráfico oguereko {{ui:PNG}}, {{ui:SVG}} ha {{ui:CSV}} abajo. PNG ha SVG blanco fondo-pe, papel color-pe, tema ndojeporúvo (PNG 1600 × 1000 píxel; SVG borrosidad ndaipóri); CSV número opa digito-ndive: x columna ha curva-kuéra columna, curva x compartido ojapo mboyve, térã punto-gui fila curva nombre-ndive.
- {{key:F}} térã {{ui:Fit}} vista ojustá ohechauka ojeporúvape.

## Archivo

- {{ui:Open}} Script grupo-pe (térã archivo vista-pe térã panel-pe mbojoa): `.craft`, `.lua` ha `.py` archivo kuatiañe pyahu-pe oipe'a (ndojapói); datos archivo (STL, OBJ, CSV, JSON, NPY, HDF5) variable-pe archivo nombre ruguýpe kargado.
- {{ui:Save}} Script grupo-pe kuatiañe archivo-pe ojeguerupa.
- {{ui:New}} Script grupo-pe (térã tab-kuéra ári {{ui:+}}) ambue kuatiañe oñepyrũ. Tab-pe mokõi jey ojeaprieta nombre pyahu-pe ojapo hag̃ua; {{ui:×}} oheja (oñeme'ẽ mboyve).

## Parte parámetro ojeporu

Kuatiañe oheka parte parámetro ([Drive a part with parameters](topic:parameters)) nombre-gui:

```
w = param('width');     % peteĩ parámetro valor, mm-pe (térã grado, térã número chiquito)
p = params();           % opa, estructura-pe: p.width, p.height
```

Lua ha Python-pe ha'e `cs.param('width')` ha `cs.params()`. Kuatiañe oheka añónte parámetro: cambiá {{ui:Parameters}} tab-pe. Kuatiañe tab ruguýpe línea oheka parámetro `param('…')`-gui, ha ndaguerekóiva ohechauka; {{ui:Parameters}} tab kuatiañe opa parámetro ruguýpe ohechauka. Kuatiañe ojapo corrida mboyve nombre, por ejemplo `param(name)`, ndojehechaukai.

## Kuatiañe parte-pe oñeguarda

Tab-pe opa kuatiañe parte-pe oñeguarda, upéicha File grupo-pe **{{ui:Save}}** ha'e ojeguarda ha cambio ojepe'a oikoveha. Parte ojeipe'a **kuatiañe ndojecórri**: consola ohechauka cuánto oguereko, ha oñecorre Run oprimíramo. Ambue parte kuatiañe ikatu mba'e oguereko: ehechakuaa ojecorréva. Kuatiañe ojecorre ko'ẽ-pe, red ndaipóri, ha sitio ndojaikói.

## Ojeporúva

- [El lenguaje CraftScript](topic:craftscript-language)
- [Kuatiañe Lua-pe](topic:craftscript-lua)
- [Kuatiañe Python-pe](topic:craftscript-python)
- [La biblioteca de análisis](topic:craftscript-library)
- [Ejapo análisis propio](topic:craftscript-own-analysis)
