---
title: El núcleo de malla
summary: Esta versión de PartCraft ojapo pieza peteĩteĩ mesh kernel ndive navegadór-pe oñemba'apóva. Mba'épa ha'e redondo cara, volumen ha archivo, mba'éichapa ehecha oñemba'apo ha mba'e herramienta oikotevẽ kernel exacto.
keywords: núcleo, malla, variedad, exacto, b-rep, facetado, curvas, opencascade, occt, redondeo necesita exacto, no construido, sin conexión, webassembly
from: f931645c
---

Geometry kernel ha'e motor oñemoambue historia sólido-pe. Ko versión PartCraft-pe oguereko: **mesh kernel** (manifold-3d). Kompiutadór-pe pequeño WebAssembly programa rupi oñemba'apo ha aplicación oñepyrũ mbovy momento rire ojeporaka. Pieza nada ndojehasavaʼekue ojehaʼõ.

| | Mesh kernel |
|---|---|
| Formas redondas | Caras planas. **Curvas** pieza panel-pe ohechauka mba'éichapa fino |
| Volúmenes y áreas | Sólido facetado rehe, redondo piezas-pe peteĩ mbyky |
| Bocetos, extrude, corte, revolve, agujeros, patrones, espejo, planos de referencia | Ndio |
| Redondeo y chaflán | Línea recta bordes plano caras-pe; redondeo ojoaporã ojeporaka mitred |
| Carcasa y borrador | Carcasa caras planas ábrese (espesor pared exacto); Draft caras planas inclina |
| Exportaciones | STL, 3MF, STEP (exacto: cara redonda verdadera superficie-pe; térã facetado), plano PDF ha DXF |
| Vistas de dibujo | Facetas-gui ojapo, sección vistas incluido |
| Caras y bordes | Ojerechazaha ha mba'éichagua oikuaa (plano, cilindro, cono, esfera, toro; recta, círculo), boceto-gui: Simulation, Generative ha Manufacture espacio de trabajo, Measure, selección ha tabla de agujeros oiporu |

Barra de estado derecho punta chip **Mesh kernel** ohechauka pieza oñemboguejýva.

## Mba'e oikotevẽ kernel exacto

Kernel exacto (B-rep) verdadero círculos, cilindros ha conos ohasa, ha redondeo liso cualquier borde-pe, barridos, lofts, superficies, chapa metálica, nervios, varios cuerpos ha STEP importación curvas caras exacto oñemboguejýva oñemoĩ upe-pe. (STEP exacto exportación ndoikotevẽi: mesh kernel boceto-gui cada cara verdadera superficie ikuaa, exportación upéva oñeme'ẽ.) PartCraft laboratorio versiones OpenCascade oiporu upe ko'ẽ. Su licencia (LGPL) ko versión-pe ndojeikói, cada aplicación Apache-2.0 ha biblioteca permisivas, upévare ndaincluíri. Ndaipóri fecha.

Ko'ã peve, ko funciones **Not built yet** ohechauka eiporu jave: barra de estado razón ohechauka, ha botón tooltip "not built yet (needs an exact kernel)" ohupytýva. [Ndaiporiva ko'ágã](topic:not-built-yet) oñemombe'u peteĩteĩ mba'e ojapo ojeporakuaáva.

Ko'ã mbaʼe earlier build-pe oñemoĩ pieza ojapo jave, oñeñongatu. Ojehechaukáva "not built" historia-pe oĩ (hover peteĩ razón), ambue pieza oñemboguejy, guardá oñemoĩ ndoñemoambuéi.

## Caras redondas y Curvas

Mesh kernel círculo polígono-pe ojapo. **Curvas** pieza panel-pe ohechauka peteĩ círculo lado mbohapy; más lado, más porã ohechauka ha medida verdadera ojeporakuaa, pero más tiempo ojapo. Volúmenes, áreas ha distancias {{ui:Measure}} rupi facetado sólido rehe: agujero o boss-pe mbyky, redondo forma-gui.

## En línea y sin conexión

Mesh kernel aplicación descarga ryepýpe. Sin conexión oñemba'apo jave, guardá PartCraft sin conexión ojeporaka ndaipórire: eiporu {{ui:Save for offline}} app barra-pe ha ojeporaka **Offline ready**. Mba'éichapa: [Trabajar sin conexión](common:offline).
