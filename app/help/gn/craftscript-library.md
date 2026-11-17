---
title: Biblioteca de análisis
summary: Biblioteca de kuatiañe análisis legibles ojeporáva espacio Script-pe: mba'épa oĩ cada grupo-pe, función read-only-pe ojehecháva, encabezado método, referencia ha control, copia propia ojapo ha mba'éichapa copia ojejuka función biblioteca.
keywords: biblioteca, craftlib, análisis, electroimán, estático, modal, térmico, optimización de topología, top88, SIMP, electromagnetismo, electrostática, magnetostática, fluido, lattice Boltzmann, LBM, malla, voxel, tetraedros, referencias, control, verificación, copia, sombra
from: bf993859
---

La biblioteca de análisis ha'e kuatiañe-kuéra ojeporáva función ojehecha hag̃ua de arriba hasta abajo: mba'éichapa ojapo matriz de rigidez, mba'época oñemoĩ condiciones de contorno, mba'e solver ojapo, mba'éichapa ojejuhu resultado. Nada oĩ ocultado caja negra-pe; hetave ñemoĩha dato-kuéra ko'ẽ ha'e ojeapo ko'ẽ dentro (matriz de elemento, solver disperso, mallado) ojepyta incorporada.

## Ñepyrũ ejemplo rupi

El grupo **Examples** oguereko cinco kuatiañe pyahu ojeporáva biblioteca punta-gui punta-peve. Ejeaprieta peteĩ, oprimi {{ui:Open (read-only)}}, upéi {{key:F5}}: cada peteĩ oipe'a vista, ohechauka resultado lienzo-pe ha gráfico subpantalla-pe.

| Ejemplo | Mba'épa ohechauka |
|---|---|
| Cantilever stress | Barra de acero 100 × 10 × 10 mm 100 N punta carga-pe: tensión von Mises barra deformada-pe, ha desplazamiento de punta teoría de viga-pe ojerure en cuatro tamaño de elemento (gráfico) |
| MBB beam topology | Optimización clásica de topología 60 × 20: diseño ojeformáva, compliance ohecha ipukuháva, diseño final (94 iteración, compliance 203.19) |
| Capacitor field | Dos placa 4 mm ancho, 1 mm mboyve: potencial ha campo, capacitancia fringing-pe ideal valor ha fórmula de Palmer-pe |
| Channel flow | Flujo Lattice Boltzmann poste canal-pe: campo de velocidad ha historia de convergencia |
| Electromagnet | Núcleo de hierro forma C air gap ha bobina-pe: densidad de flujo, campo en gap fórmula de circuito magnético-pe, inductancia ha atracción. Ojehecha [Magnetic fields in 2-D](topic:magnetic-fields-2d) |
| Permanent magnet | Mismo núcleo imán permanente-pe bobina ndaipóri: punto de trabajo imán, campo en gap, mba'e flujo ohuguýva, atracción. [Magnetic fields in 2-D](topic:magnetic-fields-2d#permanent-magnets)-pe |

## Grupo-kuéra

| Grupo | Función-kuéra | Mba'épa ohaʼe |
|---|---|---|
| Meshing | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Caja ha cilindro hexaedro-pe; cubo térã tetraedro cualquier modelo-pe (part, body, STL kargado); volumen de elemento ha calidad; nodo plano térã cara-pe ojeporavo |
| Static stress | `static_voxel`, `static_tet` | Tensión estática lineal cubo-pe térã 10 nodo tetraedro-pe: desplazamiento, tensión, von Mises, reacción |
| Frames | `frame3d` | Marco 3D viga, columna ha arriostramiento-kuéra rupi método de rigidez directa: liberación de extremo, apoyo ha resorte, carga miembro-pe; desplazamiento, reacción, fuerza de extremo. DetailCraft ha BimCraft-pe {{ui:Export as CraftScript}} ojapo modelo entero hag̃ua. Análisis-pe ojeporáva, ndaha'éi chequeo de código |
| Vibration | `modal_tet` | Frecuencia natural ha forma de modo |
| Heat | `heat_steady`, `heat_transient`, `heat_system` | Conducción estable ha transitoria temperatura fija, entrada de calor, generación, flujo ha convección-pe |
| Topology optimization | `top88`, `top99`, `topopt3d` | Código 2-D 88 ha 99 línea publicado, ha mismo método 3-D cubo-pe |
| Electromagnetics | `poisson2d`, `magnetostatic2d` | Electrostática 2-D (potencial, campo, capacitancia, carga) ha magnetostática (potencial vectorial, densidad de flujo, imanes permanentes) |
| Fluid flow | `lbm2d`, `lbm3d` | Flujo Lattice Boltzmann: 2-D kuatiañe-pe ojehecha, 3-D PartCraft-pe ijyvy kernel-pe |

Cada función encabezado oĩha argumento exacto. Unidad ha'e PartCraft estudio-kuéra-pe, encabezado ndojehechaukáiva ambue: milímetro, newton, megapascal, tonelada por milímetro cúbico densidad-pe, vatio ha kelvin calor-pe. Funciones electromagnéticas ha lattice Boltzmann ojeporaha unidad consistente ndive; encabezado ohechauka mba'éichapa.

## Mba'éichapa oñemoñe biblioteca

Cada función encabezado opa **check**: peteĩ caso chiquito ojekuaáva respuesta. Tests de PartCraft ohechaukakuaa opa umi, ha PartCraft-pe oguereko estudio mismo tarea-pe, kuatiañe respuesta oñemoñepytyvõ upe estudio-ndive mismo mallado-pe:

- cantilever desplazamiento punta teoría de viga-ndive (0,2 % cubo-pe, 0,05 % tetraedro-pe), ha **Simulation** espacio solver-kuéra-ndive mismo mallado-pe (mismo heta dígito-peve);
- cantilever frecuencia primera teoría de viga-ndive (0,24 % menor, viga corta-pe ojeexpera) ha **Simulation** solver modal-ndive;
- calor: pared plana calentada exacta-pe, cuerpo chiquito ojepuhávo fórmula lumped-capacity-pe, temperatura de losa ipukúva teoría-pe;
- optimización de topología: `top88` ohechakuaa papel de 94 iteración ha compliance 203.1925 (218.8032 density filter-ndive); `topopt3d` ojuhu compliance mismo espacio **Generative**-ndive ajuste mismo-pe;
- capacitancia de capacitor ha campo de solenoide largo textbook valor-ndive, campo de gap electroimán fórmula de circuito magnético-ndive, imanes permanentes imán redondo aire-pe ha imán cerrado hierro keeper-ndive;
- flujo de canal perfil parabólico exacto-ndive.

## Ojehecha función

1. Ejeapretá **Library** tab script panel-pe.
2. Ejeapretá función. Encabezado ohechauka: mba'épa ojapo, método, unidad, suposición ha límite, **referencias** (libro térã papel, ecuación número-ndive) ha **check** — caso chiquito ojekuaáva respuesta PartCraft test-kuéra ojapo.
3. {{ui:Open (read-only)}} oipe'a kuatiañe entero tab-pe trazo punteado-ndive. Ojapo ha ojapo parte ndaikatúi ojaiko, pero ndaikatúi ojaiko.

## Ojapo peteĩ propio

Ejeapretá {{ui:Make a copy}} (térã **Make a copy to edit** read-only tab-pe). Copia ha'e kuatiañe ko parte-pe mismo nombre-ndive, upévare ojeguarda parte-ndive, ha **cada llamada a esa función ojepuráta copia**; editor ohechauka upe. Copia nombre pyahu-pe mbohéi ambue ha'e oñeguerekóvo ambue ja.

## Ojeporu peteĩ

Llama función biblioteca cualquier kuatiañe-pe ipa'ũ nombre-ndive, función incorporada-icha:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Resultado oúva valor-pe workspace-pe; gráfico ha campo ohechaukáva oĩ vista ha subpantalla-pe.

Análisis estático parte abierta-pe, por ejemplo, mbohasa peteĩ líneas:

```
v = voxel_mesh(part(), 2);                   % cubo 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % ko'ẽ apytépe
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N tuichaite
r = static_voxel(v, 210000, 0.3, bc);       % acero
```

`r` oguereko desplazamiento, tensión ha reacción; tensión von Mises oñemoñe parte deformada-pe. Parte curva-pe ojeporu `tet_mesh` ha `static_tet`, ha'eva ikatu cara entera mbohetava ha mbotyryvo (`face_nodes`).

:::note
Biblioteca función-kuéra oñehai CraftScript-pe, ha Lua kuatiañe oñeporu `cs` rupi incorporada función-kuéra-icha: `cs.static_tet(t, 200000, 0.3, bc)` (ehecha [Lua scripts](topic:craftscript-lua)). Cada función peteĩ material ha peteĩ carga caso-pe solve; encabezado ohechauka mba'e ndoikói.
:::
