---
title: Ficheiros: abrir, gardar e exportar
summary: Os ficheiros de peza e de conxunto que PartCraft abre e garda, cada formato de exportación e o que conserva, onde van os ficheiros e o que cambia sen conexión ou entre navegadores.
keywords: abrir, gardar, exportar, descargar, ficheiro, partcraft.json, ficheiro de conxunto, stl, 3mf, step, dxf, pdf, onde están os meus ficheiros, sen conexión, gardar como
from: c15c2c48
---

PartCraft traballa con ficheiros no seu ordenador. Nunca envía unha peza, e non hai conta nin almacenamento en nube. O gardado en nube aínda non está dispoñible.

## Que abre PartCraft

| Ficheiro | Extensión | Como |
|---|---|---|
| Unha peza de PartCraft | `.partcraft.json` | {{ui:Abrir}}, {{key:Mod+O}}, ou soltalo na vista 3D |
| Un conxunto de PartCraft | `.partcraft-asm.json` | Igual: PartCraft recoñece de que tipo é |
| Un sólido STEP | `.step`, `.stp` | Un corpo sólido lido como triángulos: [Abrir un ficheiro STEP e construír sobre el](topic:import-step) |

As mallas STL, OBJ e 3MF tamén se abren como corpos sólidos ([Abrir un STL, OBJ ou 3MF](topic:open-meshes)), e tamén os ficheiros `.3dm` ([Abrir un modelo .3dm](topic:open-3dm-files)). Non se poden abrir os ficheiros DXF, IGES nin os ficheiros de pezas propios doutros programas (ver [Que aínda non está construído](topic:not-built-yet)).

Regras ao abrir:

- O nome dun ficheiro de peza ou de conxunto debe terminar en `.json`, e o ficheiro debe ter menos de 50 MB.
- Os ficheiros compróbanse antes de mostrar nada. Un ficheiro danado ou editado recházase cun motivo claro, por exemplo: "Este non é un ficheiro de PartCraft."
- Recházase un ficheiro gardado cunha versión máis nova de PartCraft: "Este ficheiro gardouse cunha versión máis nova de PartCraft (versión de ficheiro 3); esta lee a versión 2." Ábrense os ficheiros máis antigos.
- Se a peza da pantalla ten cambios sen gardar, PartCraft pregunta antes: {{ui:Cancelar}}, {{ui:Descartar cambios}} ou {{ui:Gardar primeiro}}.

## Gardar

{{ui:Gardar}} ou {{key:Mod+S}} garda o que hai na pantalla:

- Nunha peza: `<nome da peza>.partcraft.json`, o historial completo (esbozos, relacións, cotas, elementos, a posición de retroceso), a sección, o detalle e as notas GD&T da folla de debuxo, e o texto completo de calquera sólido STEP importado nunha versión anterior. Os elementos que esta versión non pode construír gárdanse sen cambios. O propio sólido non se garda; PartCraft reconstrúeo a partir do historial cando se abre o ficheiro.
- Nun conxunto: `<nome do conxunto>.partcraft-asm.json`, con **todas as pezas que contén**. Un só ficheiro leva o conxunto completo, así que pode envialo só.

Gardar é unha **descarga**. O navegador pon o ficheiro na súa cartafol de descargas, ou pregunta onde gardalo se o configurou así. Gardar de novo crea unha nova descarga; o navegador pode chamala `Part1 (1).partcraft.json` en lugar de substituír a anterior. Cambie o nome ou mova os ficheiros en {{pick:mac=Finder|windows=Explorador de ficheiros|linux=o xestor de ficheiros}} como queira.

Os caracteres que non sexan letras, números, espazos, `_`, `.` e `-` no nome da peza convértense en `_` no nome do ficheiro.

:::tip
A maioría dos navegadores teñen unha opción para preguntar onde gardar cada descarga. Actívea se quere unha elección de "Gardar como" cada vez: en Chrome e Edge está en Descargas, na configuración; en Firefox, en Xeral, Ficheiros e aplicacións; en Safari, en Xeral, Ubicación de descarga de ficheiros.
:::

Máis información sobre onde van as descargas e como manter os ficheiros seguros: [Onde van os seus ficheiros](common:your-files).

## Exportar

O menú {{ui:Exportar}} escribe outros formatos. Cada un é unha descarga, co nome da peza.

| Elemento do menú | Ficheiro | Que contén |
|---|---|---|
| {{ui:STL, para impresión 3D}} | `<name>.stl` | STL binario dos triángulos do sólido, en milímetros, **Z cara arriba** |
| {{ui:3MF, para impresión 3D}} | `<name>.3mf` | 3MF co sólido como un único obxecto, en milímetros, **Z cara arriba** |
| {{ui:STEP AP242 (sólido exacto)}} | `<name>.step` | Aínda non construído nesta versión (en gris): necesita un núcleo exacto |
| {{ui:STEP AP214 (sólido exacto)}} | `<name>.step` | Aínda non construído nesta versión (en gris) |
| {{ui:STEP (facetado, núcleo de malla)}} | `<name>.step` | Un sólido feito de caras planas a partir da malla: **as superficies redondas son moitas facetas planas pequenas**. En milímetros, cos eixos propios de PartCraft (Y cara arriba). É o STEP que se debe usar con outros programas CAD nesta versión |
| {{ui:DXF do esbozo ou da cara plana}} | `<name> - <sketch>.dxf` ou `<name> - face.dxf` | DXF R12. Un esbozo: liñas, arcos, círculos e puntos nas coordenadas propias do esbozo, en capas PROFILE, CONSTRUCTION e POINTS. Unha cara plana elixida: os seus contornos como polilíneas pechadas (as arestas redondas como as súas facetas) |
| {{ui:Debuxo (PDF): vistas, sección, detalle, GD&T}} | `<name> - drawing.pdf` | A folla de debuxo A3: tres vistas, unha isométrica, unha sección e un detalle se están definidos, medidas xerais, símbolos GD&T e cadro de rótulo |

:::note
{{ui:STEP AP242 (sólido exacto)}} e {{ui:STEP AP214 (sólido exacto)}} aínda non están construídos nesta versión: use {{ui:STEP (facetado, núcleo de malla)}}. Ten a forma e o volume correctos, pero cada cara redonda son moitas caras planas, así que outros programas non poden seleccionar un burato como cilindro. Estableza antes **Curvas** máis fina se isto lle importa.
:::

- As exportacións son da peza da pantalla. Exportar está desactivado nun conxunto; aínda non hai exportación de conxuntos.
- STL, 3MF, o STEP facetado e o DXF de cara son sempre de facetas. O axuste **Curvas** (no panel dereito sen nada seleccionado) fixa a finura, de 32 a 256 facetas por volta. Escolla Fina ou Moi fina antes de exportar STL ou 3MF para unha impresión lisa.
- O debuxo PDF usa a tipografía Helvetica integrada do lector. Os caracteres que non pode mostrar imprímense como "?".

Paso a paso: [Exportar para impresión, STEP e DXF](topic:export-files) e [Facer unha folla de debuxo](topic:drawing-pdf).

## Traballo sen gardar

- PartCraft garda nesta navegador unha copia de recuperación da peza ou do conxunto aberto un momento despois de cada cambio, para que un fallo ou unha lapela pechada non o perda: a próxima vez que abra PartCraft preguntará "Recuperar o traballo?". Non é un gardado: garde nun ficheiro para conservar o seu traballo. Ver [Recuperar traballo sen gardar](common:recover).
- Se tenta pechar a lapela ou recargar con cambios sen gardar, o navegador pregunta "Saír do sitio?". Esa é a caixa propia do navegador; PartCraft non pode cambiar o seu texto.
- {{ui:Novo}}, {{ui:Abrir}} e pechar un conxunto preguntan antes de descartar os cambios sen gardar.

## En liña e sen conexión

Todo ocorre no seu ordenador: o núcleo de malla (un programa WebAssembly) descárgase coa aplicación e constrúe a xeometría localmente, e os ficheiros lense e escríbense no seu disco. Nunca se envían datos da peza pola rede. Ver [O núcleo de malla](topic:solid-kernels).

Para traballar sen ningunha conexión, garde PartCraft para uso sen conexión mentres está en liña: escolla {{ui:Gardar para usar sen conexión}} na barra da aplicación e espere mentres conta ("Gardando 40 de 212") ata que diga **Preparado para uso sen conexión**. A copia gardada inclúe a biblioteca 3D e o núcleo de malla, así que despois modelar, gardar, todas as exportacións e os debuxos funcionan sen conexión. Se diz **Non se puido gardar**, prema para tentalo de novo en liña; **Uso sen conexión non dispoñible** significa que esta xanela do navegador non pode conservar unha copia (xanelas privadas e algúns ordenadores xestionados). Coa copia gardada, ao premer **Preparado para uso sen conexión** ofrécense {{ui:Gardar de novo (obter a versión máis recente)}} e {{ui:Quitar a copia sen conexión}}. Detalles: [Traballar sen conexión](common:offline).

:::online
Está en liña. Mesmo sen gardar para uso sen conexión, cando PartCraft se cargou e a etiqueta da barra de estado di "Núcleo de malla", pode seguir traballando se cae a conexión. Só non recargue a páxina ata que volva estar en liña.
:::

:::offline
Está sen conexión. Se PartCraft xa está aberto, siga traballando; gardar e exportar seguen funcionando. Se a barra da aplicación di **Preparado para uso sen conexión**, PartCraft ábrese tamén desde cero sen conexión; se non, non recargue esta lapela.
:::

## Diferenzas entre navegadores

- **Descargas.** Cada navegador ten a súa propia cartafol de descargas e a súa propia forma de preguntar. Se un navegador pregunta se este sitio pode descargar ficheiros, permíttao, ou gardar e exportar non poderán funcionar.
- **Arrastrar e soltar** un ficheiro sobre a vista funciona en Chrome, Edge, Firefox e Safari.
- **Ficheiros desde un teléfono ou tableta.** En iPhone e iPad, Abrir mostra a aplicación Ficheiros; os ficheiros gardados van a Ficheiros, Descargas. En Android van á cartafol Descargas.

Non hai diferenza no que conteñen os ficheiros entre navegadores ou sistemas operativos.
