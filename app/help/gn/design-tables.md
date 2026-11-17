---
title: Configuraciones ha tabla de diseño
summary: Mokõi térã heta tamaño ha versión peteĩ parte ombojoaprã configuración-pe, parte archivo-pe ojeguardáva, feature-kuéra peteĩ configuración-pe ojeñeʼẽ térã oheja, peteĩ jepe'a-pe ojerrepuesta, CSV tabla de diseño-gui ojekeha térã ojeguerupa, térã opa línea de comandos-gui ojapo.
keywords: tabla de diseño, configuraciones, configuración, tamaños, familia de partes, csv, planilla, variantes, tabla, familia de partes, suprimir, suprimido, apagar feature, opciones, con o sin, configurador
from: 17249afb
---

**Configuración** ha'e peteĩ parte tamaño: parámetro-kuéra valor nombre-pe. Parte oguarda configuración-kuéra archivo-pe, upévare parte ndive oho. **Tabla de diseño** ha'e mismo, CSV archivo-pe, configuración peteĩ fila.

Configuración **parámetro** oñemoĩ, upévare umi ko'ẽ-pe ajuste ([Drive a part with parameters](topic:parameters)). Configuración oguarda parámetro número-icha; ambue parámetro (`area = w * d` ojapo) hese oho.

## Configuración oguarda

1. {{ui:Parameters}} tab-pe, peteĩ tamaño parte-pe parámetro-kuéra oñemoĩ.
2. **Configurations** ári nombre escribí (por ejemplo `Large`) ha oprimi {{ui:Save current values}} térã {{key:Enter}}.

Configuración pyahu **activa** ohechauka. Upe rire parámetro cambiá, **activa, cambiada desde** ohechauka, parte ndoikóiva upéva.

## Cambiá, actualizá, nombre cambiá, oheja

- {{ui:Apply}} parámetro configuración valor-pe oñemoĩ ha parte ojapo.
- {{ui:Update}} actual valor configuración-pe oñeguarda.
- Nombre cambiá hag̃ua, caja-pe nombre pyahu escribí ha oprimi {{key:Enter}}.
- {{ui:Delete}} configuración oheja. Parámetro valor oguarda.

Peteĩ peteĩ ko'ẽ paso: {{key:Mod+Z}} ojevy. Parámetro nombre cambiáramo, opa configuración oheka pyahu nombre-pe; configuración oheja ramo, ha'e oñeme'ẽ.

## Feature ojehejáva ha ojeprendévo configuración-pe

Configuración oguarda mba'e feature oñembotuicha, upévare peteĩ parte **ndive** ha **ndaipóri** mba'e oguereko: agujero de montaje, chaflán, saliente.

1. Feature oheja: historia-pe ejeapretá, upéi **Properties**-pe {{ui:Suppress}}.
2. Configuración oguarda normal-icha, por ejemplo `No holes`. Upe fila ohechauka mba'e oheja.
3. Feature jevy ojeprende ({{ui:Unsuppress}}) ha ambue configuración oguarda, por ejemplo `With holes`.

Configuración peteĩ feature oheja ramo, configuración aplicá oheja feature-kuéra ha **ambue feature opa ojepren** parámetro valor-ndive peteĩ paso-pe. Feature-kuéra ojehejávo antes configuración oguarda ha'e "todo prendido". {{ui:Update}} feature mba'e ojehecha ko'ẽ-pe valor-ndive oñeguarda.

Parte configuración feature ojehejáva archivo pyahu versión-pe ojeguarda: PartCraft ñandutava oipe'a archivo versión pyahu-gui, ndoikóva.

:::note
CSV tabla de diseño parámetro valor-kuéra ha'e. Tabla configuración-pe ojeikeha ramo valor cambia ha ojeporúva feature-kuéra oheja oñemboguata; línea de comandos `--table` valor-kuéra nomás ojapo.
:::

Parte archivo configuración-kuéra ndive ha mba'e ojeporúva ojeguarda. Parte ojeipe'a valor ojeguardáva-ndive.

## Tabla de diseño ojeikeha térã ojeguerupa

Tabla de diseño CSV archivo: parámetro-kuéra columna ha configuración fila:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

Primer columna `name`, `config` térã `configuration` nombre-pe; ambue columna parte parámetro nombre-pe oĩtava. Celda número, unidad-ndive ojeporu ramo (`8in`). Celda ndaipóri hendaiva parámetro fila-pe ndojapói.

- {{ui:Import CSV}} fila peteĩ peteĩ configuración-pe ojapo. Configuración nombre oñemoĩ ramo oñemoambue. Ojeikeha peteĩ paso.
- {{ui:Export CSV}} configuración-kuéra ojeguerupa. Ndaipóri ramo, actual valor peteĩ fila ojeguerupa, planilla-pe kuatiañe ñepyrũ.

Configuración nombre planilla-pe fórmula-icha ojekuaa (`=`, `+`, `-` ha `@`-gui oñepyrũ) ojeguerupa `'`-ndive.

## Opa tamaño peteĩ jey

{{ui:Variant pack…}} **Configurations** ári opa configuración térã ojeporandu heta, STEP, IFC, DWG ha vista zip-pe peteĩ jey, parámetro tabla ndive: ehecha [Make a variant pack from your configurations](topic:variant-pack).

Línea de comandos herramienta peteĩ archivo ojapo CSV tabla de diseño fila peteĩ peteĩ-pe:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Configuración CSV-pe pe'a ejeguerupa, upéi `--table`-pe upe archivo ome'ẽ. Ehecha [Scripts and the command line](topic:scripts-and-cli). Kuatiañe-pe ojeguardáva parte `configs json …` línea-pe configuración oguarda.
