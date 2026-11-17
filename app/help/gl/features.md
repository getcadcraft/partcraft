---
title: Elementos e as súas opcións
summary: Cada elemento da barra de ferramentas coas súas opcións, valores predeterminados e límites, desde extruír ata redondeo, casca e sólidos STEP importados, as accións que comparten todos os elementos e os axustes da peza.
keywords: elementos, aínda non construído, extruír, cortar, revolución, corte de revolución, orificio, rebaixo, patrón lineal, patrón circular, espello, redondeo, chaflán, casca, importar, opcións, predeterminados, axustes, resolución, curvas, facetas, suprimir, retroceder
from: ab3a598e
---

Os elementos aparecen no historial na orde en que se crearon e reconstrúense de arriba abaixo. Cada un recibe o nome do seu tipo cun número: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft constrúe todos os elementos co núcleo de malla. Redondeo e Chaflán funcionan sobre arestas rectas entre dúas caras planas, e Casca abre caras planas. Os sólidos importados precisan un núcleo exacto, que esta versión non ten: aínda non se constrúen, e a súa sección máis abaixo describe como os conserva unha peza feita nunha versión anterior. Consulte [O núcleo de malla](topic:solid-kernels) e [O que aínda non se constrúe](topic:not-built-yet).

## Esbozo

| Axuste | Notas |
|---|---|
| Plano | Plano Alzado, Superior ou Dereito, ou unha cara plana. Móstrase, non se cambia: para mover un esbozo, cree un novo |
| Estado | Totalmente definido, Sen definir completamente (cos graos de liberdade), Sobredefinido ou Baleiro |
| Xeometría, Relacións | Cantas curvas, puntos e relacións hai |
| Cotas de control | Cada cota do esbozo, editable |

Botóns: {{ui:Editar esbozo}}, {{ui:Exportar como DXF}}.

## Extruír e Cortar

{{ui:Extruír}} e {{ui:Cortar}} crean o mesmo elemento, comezando con axustes diferentes.

| Axuste | Opcións | Extruír comeza en | Cortar comeza en |
|---|---|---|---|
| Operación | Protuberancia (engade material), Cortar (elimina material), Intersección (conserva a superposición), Corpo novo (aínda non se constrúe nesta versión) | Protuberancia | Cortar |
| Fin | Cego (unha profundidade), Plano medio (en ambos sentidos), Atravesar todo | Cego | Atravesar todo |
| Profundidade (mm) | Maior que 0, ata 1 000 000 | 10 | 10 |
| Inverter dirección | Desactivado / activado | Desactivado | Desactivado |

- Perfil: cada bucle pechado de liñas sólidas, círculos e arcos do esbozo. Os bucles dentro doutros bucles son orificios.
- Atravesar todo só funciona para cortes. Atravesa toda a peza no lado escollido.
- Un corte entra no material, afastándose do lado exterior do plano do esbozo; Inverter dirección cámbiao.

## Revolución e corte de revolución

| Axuste | Opcións | Predeterminado |
|---|---|---|
| Operación | Protuberancia, Cortar | Protuberancia ({{ui:Revolución}}), Cortar ({{ui:Máis}} › {{ui:Corte de revolución}}) |
| Ángulo (°) | Maior que 0, ata 360 | 360 |
| Eixe | A primeira liña de eixe, calquera liña ou liña de eixe do esbozo, ou un elemento de eixe situado no plano do esbozo | Primeira liña de eixe |

- O perfil debe quedar a un lado do eixe. Pode tocalo.
- O eixe dunha revolución pode usarse nos patróns circulares e nas uniones do conxunto.

## Orificio

| Axuste | Opcións | Predeterminado |
|---|---|---|
| Tipo | Simple, Rebaixo | Simple |
| Diámetro (mm) | Maior que 0 | 6 |
| Atravesar todo | Activado / desactivado | Activado |
| Profundidade (mm) | Cando Atravesar todo está desactivado | 10 |
| Diámetro do rebaixo ⌀ | Máis ancho que o orificio | 11 |
| Profundidade do rebaixo | Menos profundo que un orificio cego | 6 |
| Inverter dirección | Desactivado / activado | Desactivado |

- Un orificio en cada punto solto do esbozo (puntos creados coa ferramenta Punto). O panel indica cantos hai.
- Os orificios perfóranse en perpendicular ao plano do esbozo, dentro do material.
- O eixe de cada orificio pode usarse nas uniones do conxunto ("Hole1, hole 2").

## Patrón lineal

| Axuste | Opcións | Predeterminado |
|---|---|---|
| Elementos a copiar | Calquera elemento sólido por riba del | O elemento seleccionado; se non, o último elemento sólido |
| Dirección | Eixo X, eixo Y, eixo Z; unha liña dun esbozo anterior; o eixe dunha revolución; unha aresta seleccionada | Eixo X (ou a aresta seleccionada ao engadilo) |
| Separación (mm) | Calquera número | 20 |
| Número | De 1 a 1000, incluído o orixinal | 3 |
| Inverter dirección | Desactivado / activado | Desactivado |

## Patrón circular

| Axuste | Opcións | Predeterminado |
|---|---|---|
| Elementos a copiar | Igual que en Lineal | Igual que en Lineal |
| Eixe | Igual que Dirección enriba | O eixe da última revolución; se non, o eixo Y (ou a aresta seleccionada) |
| Ángulo (°) | Maior que 0, ata 360. 360 reparte as copias igualmente en todo o redor; menos repártaas polo ángulo | 360 |
| Número | De 1 a 1000, incluído o orixinal | 6 |
| Inverter dirección | Desactivado / activado | Desactivado |

## Espello

| Axuste | Opcións | Predeterminado |
|---|---|---|
| Espello | O corpo completo (tal como está construído ata agora), ou os elementos escollidos | O elemento seleccionado; se non, o corpo completo |
| Plano de espello | Plano Alzado, Superior ou Dereito; unha cara plana | Plano Dereito, ou a cara plana seleccionada ao engadilo |

## Redondeo e Chaflán

Nesta versión o núcleo de malla constrúeos sobre arestas rectas entre dúas caras planas (esquinas exteriores ou interiores), cun só raio. Unha aresta redonda indica: "Redondeo: nesta versión só arestas rectas entre dúas caras planas (constrúeas o núcleo de malla). Redondee ou bisele as arestas curvas no esbozo." Onde as arestas redondeadas se atopan nunha esquina, fanse en inglete, e o elemento avisa: "Redondeo co núcleo de malla: onde se atopan as arestas redondeadas, fanse en inglete, non se mesturan." Funcionan todos os tipos de chaflán (distancia igual, dúas distancias, distancia e ángulo, con **Inverter lados**). Consulte [Redondear, biselar e ocar](topic:fillet-chamfer-shell).

| Axuste | Opcións | Predeterminado |
|---|---|---|
| Raio (mm) (Redondeo) | Maior que 0 | 2 |
| Distancia (mm) (Chaflán) | Maior que 0, a mesma nas dúas caras | 1 |
| Arestas | As arestas seleccionadas, cada unha listada polas dúas caras que une ("Extrude1 end face × Extrude1 side"), con **Quitar** | As arestas seleccionadas ao engadilo |

- Seleccione as arestas antes de escoller o botón ({{key:Shift}}+clic para varias), ou escóllao sen seleccionar nada e prema as arestas despois.
- {{ui:Seleccionar arestas}} (ou faga dobre clic no elemento) cambia as arestas.
- As arestas consérvanse polas dúas caras que unen, así que sobreviven aos cambios de tamaño anteriores no historial.

## Casca

O núcleo de malla constrúeo. Só se poden abrir caras planas ("Casca: nesta versión só abre caras planas (constrúeo o núcleo de malla)."); as paredes de distintos grosores aínda non se constrúen. Consulte [Redondear, biselar e ocar](topic:fillet-chamfer-shell).

| Axuste | Opcións | Predeterminado |
|---|---|---|
| Parede (mm) | Maior que 0 | 2 |
| As paredes crecen cara a fóra (as caras quedan dentro) | Desactivado: as paredes van cara a dentro. Activado: as paredes van cara a fóra | Desactivado |
| Caras abertas | As caras eliminadas, polo menos unha, con **Quitar** | As caras seleccionadas ao engadilo |

{{ui:Seleccionar caras}} cambia as caras abertas.

## Sólido importado

Créase ao abrir un ficheiro STEP, STL, OBJ ou 3MF: un corpo sólido de triángulos sen historial propio ([Abrir un ficheiro STEP](topic:import-step), [Abrir un STL, OBJ ou 3MF](topic:open-meshes)). Mostra o ficheiro de orixe e o que a importación reparou; **Unidades no ficheiro**, **Arriba no ficheiro** e **Usar para** seguen sendo editables. Un sólido STEP importado por unha versión anterior que tiña o núcleo exacto permanece no historial marcado como non construído; abra de novo o ficheiro STEP para traelo como triángulos.

| Axuste | Opcións | Predeterminado |
|---|---|---|
| Arriba no ficheiro | Z cara arriba (a maioría de CAD), Y cara arriba | Z cara arriba |

Os patróns e os espellos poden copiar un sólido importado, pero non un redondeo, un chaflán ou unha casca.

## O que ten cada elemento

Na parte inferior do panel de cada elemento:

| Botón | Función |
|---|---|
| {{ui:Suprimir}} / {{ui:Reactivar}} | Desactívao ou actívao. Os elementos que o precisan non se constrúen mentres está desactivado |
| {{ui:Retroceder ata aquí}} | Constrúe só os elementos por riba deste. Os novos elementos engádense na barra de retroceso |
| {{ui:Subir}} / {{ui:Baixar}} | Reordena, cando nada do que usa quedaría por debaixo del. En caso contrario aparece en gris, co motivo |
| {{ui:Eliminar}} | Elimínao e, despois de preguntar, todos os elementos que o usan |
| Nome | Cámbiello de nome (ata 60 caracteres) |

Os elementos con esbozo tamén listan as **Cotas do esbozo**, editables no lugar.

## Estados no historial

| Estado | Móstrase como | Significado |
|---|---|---|
| Construído | Normal | Todo correcto |
| Aviso | ⚠ | Construído, con algo que revisar: "Sobredefinido: 1 relación non é necesaria." ou "Despois disto non queda nada da peza." |
| Erro | ⚠ erro, en vermello | Non se puido construír; a mensaxe indica o motivo |
| Non construído | ⚠ non construído | Precisa un elemento que fallou, está suprimido ou retrocedido, ou precisa un núcleo exacto, que esta versión non ten ("Varrido: aínda non se constrúe. …") |
| Suprimido | desactivado | Desactivado |
| Retrocedido | en gris, debaixo da barra de retroceso | Non se constrúe ata que avance de novo |

## Axustes da peza

Prema un espazo baleiro para non seleccionar nada. O panel dereito mostra a **Peza**:

- **Nome**: o nome da peza, usado para os nomes de ficheiro e o cadro de rótulo do debuxo (ata 120 caracteres).
- **Curvas**: vexa máis abaixo.

### Resolución das curvas

O núcleo de malla constrúe o propio sólido a partir de facetas planas, así que a vista, STL, 3MF, o STEP facetado, o volume e as vistas do debuxo seguen todos **Curvas**: cantas facetas por volta completa.

| Axuste | Facetas por volta | Volume dunha forma redonda |
|---|---|---|
| Grosa (32 por volta) | 32 | Preto de 0,64 % por baixo do valor real |
| Normal (64 por volta) | 64 | Preto de 0,16 % por baixo (o predeterminado) |
| Fina (128 por volta) | 128 | Preto de 0,04 % por baixo |
| Moi fina (256 por volta) | 256 | Preto de 0,01 % por baixo |

As curvas máis finas dan exportacións e vistas máis suaves, e reconstrucións máis lentas. O axuste gárdase no ficheiro da peza.

## Aínda non construído

Os redondeos de radio variable, os redondeos e chafláns en arestas redondas, as cascas que abren caras curvas, o desmoldeo en caras curvas, varrido, loft, nervura, sólidos STEP con caras curvas exactas, corpos novos, conicidades, "ata" unha cara ou un vértice, e as referencias nas caras e arestas do sólido precisan un núcleo exacto, que esta versión non ten. Tampouco se constrúen os orificios roscados e avellanados. Consulte [O que aínda non se constrúe](topic:not-built-yet).
