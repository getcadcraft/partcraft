---
title: Ficheiros: abrir, gardar e exportar
summary: Os ficheiros de peza e conxunto que PartCraft abre e garda, cada formato de exportación e o que conserva, onde van os ficheiros e o que cambia sen conexión ou entre navegadores.
keywords: abrir, gardar, exportar, descargar, ficheiro, partcraft.json, ficheiro de conxunto, stl, 3mf, step, dxf, pdf, onde están os meus ficheiros, sen conexión, gardar como
from: e5fbc7e3
---

PartCraft traballa con ficheiros no seu computador. Nunca envía unha peza, e non intervén ningunha conta nin almacenamento na nube. O gardado na nube aínda non está dispoñible.

## O que abre PartCraft

| Ficheiro | Extensión | Como |
|---|---|---|
| Unha peza de PartCraft | `.partcraft.json` | {{ui:Abrir}}, {{key:Mod+O}}, ou soltalo na vista 3D |
| Un conxunto de PartCraft | `.partcraft-asm.json` | Igual: PartCraft recoñece de que tipo é |
| Un sólido STEP | `.step`, `.stp` | Un corpo sólido lido como triángulos: [Abrir un ficheiro STEP e construír sobre el](topic:import-step) |

As mallas STL, OBJ e 3MF tamén se abren como corpos sólidos ([Abrir un STL, OBJ ou 3MF](topic:open-meshes)), e igual os ficheiros `.3dm` ([Abrir un modelo .3dm](topic:open-3dm-files)). Non se poden abrir DXF, IGES nin os ficheiros de pezas propios doutros programas (consulte [O que aínda non se constrúe](topic:not-built-yet)).

Regras ao abrir:

- O nome dun ficheiro de peza ou conxunto debe rematar en `.json`, e o ficheiro debe ter menos de 50 MB.
- Os ficheiros compróbanse antes de mostrar nada. Un ficheiro danado ou editado recházase cun motivo simple, por exemplo "Este non é un ficheiro de PartCraft."
- Un ficheiro gardado cun PartCraft máis novo recházase: "Este ficheiro gardouse cun PartCraft máis novo (versión de ficheiro 3); este lee a versión 2." Os ficheiros máis antigos ábrense.
- Se a peza na pantalla ten cambios sen gardar, PartCraft pregunta primeiro: {{ui:Cancelar}}, {{ui:Descartar cambios}} ou {{ui:Gardar primeiro}}.

## Gardar

{{ui:Gardar}} ou {{key:Mod+S}} garda o que se ve na pantalla:

- Nunha peza: `<part name>.partcraft.json`, o historial completo (esbozos, relacións, cotas, elementos, o punto de retroceso), as notas de sección, detalle e GD&T da folla de debuxo, e o texto completo de calquera sólido STEP importado nunha versión anterior. Os elementos que esta versión non pode construír gárdanse de novo sen cambios. O sólido en si non se almacena; PartCraft reconstrúeo a partir do historial cando se abre o ficheiro.
- Nun conxunto: `<assembly name>.partcraft-asm.json`, con **cada peza dentro**. Un só ficheiro leva todo o conxunto, así que pode envialo só.

Gardar é unha **descarga**. O navegador deixa o ficheiro na súa cartafol de descargas, ou pregunta onde gardalo se o configurou así. Se garda de novo, faise unha nova descarga; o navegador pode chamalo `Part1 (1).partcraft.json` en vez de substituír o anterior. Cambie o nome ou mova os ficheiros en {{pick:mac=Finder|windows=File Explorer|linux=o seu xestor de ficheiros}} como queira.

Os caracteres distintos de letras, díxitos, espazos, `_`, `.` e `-` no nome da peza convértense en `_` no nome do ficheiro.

:::tip
A maioría dos navegadores teñen un axuste para preguntar onde gardar cada descarga. Actívao se quere unha opción "Gardar como" cada vez: en Chrome e Edge está en Descargas nos axustes; en Firefox, en Xeral, Ficheiros e aplicacións; en Safari, en Xeral, Localización de descarga de ficheiros.
:::

Máis sobre onde van as descargas e como manter os ficheiros seguros: [Onde van os seus ficheiros](common:your-files).

## Exportar

O menú {{ui:Exportar}} escribe outros formatos. Cada un é unha descarga, con nome da peza.

| Elemento do menú | Ficheiro | Contido |
|---|---|---|
| {{ui:STL, para impresión 3D}} | `<name>.stl` | STL binario dos triángulos do sólido, en milímetros, **Z cara arriba** |
| {{ui:3MF, para impresión 3D}} | `<name>.3mf` | 3MF co sólido como un único obxecto, en milímetros, **Z cara arriba** |
| {{ui:STEP AP242 (sólido exacto)}} | `<name>.step` | Un sólido exacto, en milímetros, Z cara arriba: as caras redondas como cilindros, cones, esferas e toros verdadeiros. O STEP para usar noutros programas de CAD e CAM |
| {{ui:STEP AP214 (sólido exacto)}} | `<name>.step` | O mesmo sólido exacto no esquema AP214 máis antigo |
| {{ui:STEP (facetado, núcleo de malla)}} | `<name>.step` | Un sólido de caras planas desde a malla: **as superficies redondas son moitas pequenas facetas planas**. En milímetros, nos eixos propios de PartCraft (Y cara arriba). Para un programa que rexeita o ficheiro exacto |
| {{ui:DXF do esbozo ou da cara plana}} | `<name> - <sketch>.dxf` ou `<name> - face.dxf` | DXF R12. Un esbozo: liñas, arcos, círculos e puntos nas coordenadas propias do esbozo, nas capas PROFILE, CONSTRUCTION e POINTS. Unha cara plana seleccionada: os seus contornos como polilíneas pechadas (as arestas redondas como as súas facetas) |
| {{ui:Debuxo (PDF): vistas, sección, detalle, GD&T}} | `<name> - drawing.pdf` | A folla de debuxo A3: tres vistas, isométrica, sección e detalle se se configuran, dimensións totais, símbolos GD&T, cadro de rótulo |

:::note
{{ui:STEP AP242 (sólido exacto)}} escribe orificios, protuberancias, redondeos, cones, esferas e toros nas súas superficies verdadeiras, para que outro programa poida seleccionar un orificio como cilindro; **Curvas** non o cambia. Os lados en spline, as roscas modeladas e as mallas importadas non teñen superficie exacta e quedan como facetas planas no mesmo sólido; a barra de estado indica cantas son. {{ui:STEP (facetado, núcleo de malla)}} escribe todas as caras redondas como facetas.
:::

- As exportacións son da peza que se ve na pantalla. Exportar está desactivado nun conxunto; aínda non hai exportación de conxuntos.
- STL, 3MF, o STEP facetado e o DXF de cara están sempre formados por facetas. O axuste **Curvas** (no panel dereito, sen nada seleccionado) determina a súa finura, de 32 a 256 facetas por volta. Escolla Fina ou Moi fina antes de exportar STL ou 3MF para unha impresión suave.
- O debuxo PDF usa a tipografía Helvetica integrada do lector. Os caracteres que non pode mostrar imprímense como "?".

Paso a paso: [Exportar para impresión, STEP e DXF](topic:export-files) e [Facer unha folla de debuxo](topic:drawing-pdf).

## Traballo sen gardar

- PartCraft garda unha copia de recuperación da peza ou conxunto aberto neste navegador pouco despois de cada cambio, así que unha caída ou unha lapela pechada non o perden: a próxima vez que abra PartCraft preguntará "¿Recuperar o seu traballo?". Non é un gardado: garde nun ficheiro para conservar o traballo. Consulte [Recuperar traballo sen gardar](common:recover).
- Se tenta pechar a lapela ou recargar con cambios sen gardar, o navegador pregunta "¿Saír do sitio?". É o cadro propio do navegador; PartCraft non pode cambiar o seu texto.
- {{ui:Novo}}, {{ui:Abrir}} e pechar un conxunto preguntan antes de descartar os cambios sen gardar.

## En liña e sen conexión

Todo ocorre no seu computador: o núcleo de malla (un programa WebAssembly) descárgase coa aplicación e constrúe a xeometría localmente, e os ficheiros lense e escríbense no seu disco. Nunca se envían datos da peza pola rede. Consulte [O núcleo de malla](topic:solid-kernels).

Para traballar sen ningunha conexión, garde PartCraft para uso sen conexión mentres está en liña: escolla {{ui:Gardar para usar sen conexión}} na barra da aplicación e espere mentres conta ("Gardando 40 de 212") ata que indique **Preparado para uso sen conexión**. A copia gardada inclúe a biblioteca 3D e o núcleo de malla, así que despois modelar, gardar, todas as exportacións e os debuxos funcionan sen conexión. Se indica **Non se puido gardar**, prema para tentalo de novo en liña; **Sen conexión non dispoñible** significa que esta ventá do navegador non pode conservar unha copia (ventás privadas e algúns computadores xestionados). Con a copia gardada, ao premer **Preparado para uso sen conexión** ofrécense {{ui:Gardar de novo (obter a versión máis recente)}} e {{ui:Quitar a copia sen conexión}}. Detalles: [Traballar sen conexión](common:offline).

:::online
Está en liña. Aínda sen gardar para uso sen conexión, cando PartCraft cargou e a etiqueta da barra de estado indica "Núcleo de malla", pode seguir traballando se a conexión cae. Só non recargue a páxina ata que volva estar en liña.
:::

:::offline
Está sen conexión. Se PartCraft xa está aberto, siga traballando; gardar e exportar seguen funcionando. Se a barra da aplicación indica **Preparado para uso sen conexión**, PartCraft ábrese tamén desde cero sen conexión; se non, non recargue esta lapela.
:::

## Diferenzas entre navegadores

- **Descargas.** Cada navegador ten a súa propia cartafol de descargas e o seu propio xeito de preguntar. Se un navegador pregunta se este sitio pode descargar ficheiros, permíteo, ou gardar e exportar non poderán funcionar.
- **Arrastrar e soltar** un ficheiro sobre a vista funciona en Chrome, Edge, Firefox e Safari.
- **Ficheiros desde un teléfono ou tableta.** En iPhone e iPad, Abrir mostra a app Files; os ficheiros gardados van a Files, Downloads. En Android van á cartafol Descargas.

Non hai diferenza no que conteñen os ficheiros entre navegadores ou sistemas operativos.
