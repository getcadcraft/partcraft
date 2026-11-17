---
title: Solución de problemas
summary: Problemas que pode atopar en PartCraft, desde que a aplicación non arranca ata elementos que fallan, esbozos que non se resolven, ficheiros que non se abren e unións que se comportan mal, co mensaxe que ve e a solución.
keywords: problema, erro, axuda, non funciona, falla, fallando, fallo, bloqueo, en branco, webgl, webassembly, núcleo, non construído, sobredefinido, perfil aberto, non se pode abrir, non pasa nada, dirección incorrecta, lento
from: 7728542c
---

Cando algo non funciona, lea primeiro a **barra de estado** na parte inferior: PartCraft indica alí por que o rexeitou ou que espera despois. Un elemento que falla mostra tamén a súa mensaxe na parte superior do seu panel dereito e cando pasa o punteiro sobre a súa fila no historial.

## A aplicación non arranca

### «Este navegador non pode mostrar 3D (WebGL está desactivado ou non existe), polo que PartCraft non pode executarse aquí.»

**Causa:** o navegador ten os gráficos 3D (WebGL) desactivados, bloqueados ou non admitidos polo controlador gráfico.

**Solución:**

:::chromium
Abra `chrome://settings/system` (ou `edge://settings/system` no Edge) e active «Usar a aceleración gráfica cando estea dispoñible», despois reinicie o navegador. Se xa está activa, comprobe `chrome://gpu` para ver o estado de WebGL, e actualice o controlador gráfico.
:::

:::firefox
Abra `about:support` e mire Gráficos, WebGL. Se está bloqueado, actualice o controlador gráfico. En `about:config`, `webgl.disabled` ten que ser `false`.
:::

:::safari
WebGL está sempre activo no Safari actual. Actualice macOS (o Safari actualízase con el). Se segue fallando, probe Chrome ou Firefox no mesmo Mac para descartar o hardware gráfico.
:::

Os escritorios remotos e algunhas máquinas virtuais non teñen WebGL. Probe no propio ordenador.

### «Non se cargou o núcleo sólido: …»

**Causa:** non se puido descargar ou iniciar o núcleo xeométrico (un programa WebAssembly). Normalmente a conexión caeu mentres cargaba a aplicación, WebAssembly está desactivado por unha política da empresa ou por unha opción de seguridade do navegador, ou o navegador é moi antigo.

**Solución:** recargue a páxina con conexión. Se segue fallando, probe outro navegador actual. En Firefox, `javascript.options.wasm` en `about:config` ten que ser `true`. Sen conexión, a aplicación e o seu núcleo só se cargan se a barra da aplicación dicía **Listo sen conexión** antes de perder a conexión ({{ui:Gardar para usar sen conexión}} con conexión; vexa [Traballar sen conexión](common:offline)).

### O botón sen conexión di «Non se puido gardar» ou «Sen conexión non dispoñible»

**Non se puido gardar**: algúns ficheiros non se descargaron. Prema de novo con conexión para tentalo outra vez; unha conexión lenta ou medida pode precisar un segundo intento. **Sen conexión non dispoñible**: esta xanela do navegador non pode conservar unha copia sen conexión (as xanelas privadas e algúns ordenadores xestionados bloquéano). Use unha xanela normal, ou manteña a pestana aberta.

### PartCraft está sen conexión pero desactualizado

Con conexión, prema en **Listo sen conexión** e escolla {{ui:Gardar de novo (obter a versión máis recente)}}.

### «Barrido: aínda non construído. Precisa un núcleo exacto, …»

A mensaxe completa é «<Nome>: aínda non construído. Precisa un núcleo exacto, que esta versión de PartCraft non ten. Axuda › O que aínda non está construído explica que facer no seu lugar.» Aparece ao escoller Barrido, Unión de perfís, Nervura, unha aba de chapa metálica, un elemento de superficie, Combinar, Mover corpo, Escalar corpo ou Patrón de traxectoria, e para as outras cousas que só fai un núcleo exacto. Nin o navegador nin a peza teñen nada malo: esta versión de PartCraft constrúe todas as pezas co núcleo de malla. Vexa [O que aínda non está construído](topic:not-built-yet) para saber que facer no seu lugar, e [O núcleo de malla](topic:solid-kernels).

### «Cargando o núcleo sólido…» non desaparece

Agarde un pouco nunha conexión lenta: o núcleo e a biblioteca 3D descárganse a primeira vez. Despois recargue. Se a propia páxina mostra un erro, vexa o anterior.

## Non pasa nada cando prema unha tecla

- As teclas non funcionan mentres o cursor está nunha caixa dun panel. Prema na vista 3D ou prema {{key:Esc}} despois de escribir (ou {{key:Tab}} para saír).
- As teclas de frecha e {{key:Plus}}/{{key:Minus}} xiran e fan zoom na vista só despois de premer nela.
- Hai un diálogo aberto: responda primeiro a el.
- Nun esbozo, {{key:F}} é a ferramenta Redondeo, non Axustar. Use o botón {{ui:Axustar}}.

## Un botón da barra de ferramentas aparece en gris

- Os botóns de elementos aparecen en gris mentres hai un esbozo aberto. Peche primeiro o esbozo.
- As ferramentas de esbozo só funcionan dentro dun esbozo.
- {{ui:Desfacer}} e {{ui:Refacer}} aparecen en gris cando non hai nada que desfacer ou refacer.
- {{ui:Montaxe}} precisa unha peza cun sólido. {{ui:Unión}} precisa dúas pezas no conxunto. {{ui:Editar peza}} precisa unha peza seleccionada.
- {{ui:STEP AP242 (sólido exacto)}} e {{ui:STEP AP214 (sólido exacto)}} aparecen en gris nun conxunto: exporte cada peza. Outro programa rexeita o ficheiro exacto: probe {{ui:STEP AP214 (sólido exacto)}}, despois {{ui:STEP (facetado, núcleo de malla)}}, e cóntenos a través de {{ui:Axuda}} › {{ui:Informar dun problema}}.
- {{ui:Barrido}}, {{ui:Unión de perfís}} e os outros elementos que precisan un núcleo exacto non aparecen en gris: seguen sendo clicables, as súas indicacións rematan en «aínda non construído (precisa un núcleo exacto)», e ao premer un deles a barra de estado di iso. Vexa [O que aínda non está construído](topic:not-built-yet).
- {{ui:Debuxo}} precisa unha peza cun sólido, e aparece en gris mentres hai un esbozo aberto.
- Os elementos de {{ui:Exportar}} aparecen en gris nun conxunto: os conxuntos aínda non se poden exportar. Péchee, ou edite unha peza, para exportar.

## Problemas de esbozo

### O esbozo non me deixa engadir unha relación

«Ningunha relación encaixa nesta selección. Seleccione un ou dous elementos (Shift+clic engade).» A relación precisa unha selección distinta. Vexa [Relacións e cotas de esbozo](topic:sketch-relations) para saber o que precisa cada unha.

### «Sobredefinido: … non se poden cumprir todos. Desfaga, ou elimine un deles.»

**Causa:** a nova relación ou cota contradí as que xa hai. O esbozo non se moveu.

**Solución:** {{key:Mod+Z}}, ou elimine un dos elementos en vermello da lista do panel dereito (escolla **Eliminar** ao seu lado).

### «Sobredefinido: … xa está implícito. Elimíneo.»

**Causa:** a relación non achega nada: outras xa a impoñen (por exemplo Paralelas en dous lados dun rectángulo, ou unha cota que xa está fixada). Nesta versión non hai cotas dirixidas.

**Solución:** elimínea. O elemento constrúese igualmente, con aviso.

### «Eses elementos non se poden acotar xuntos.»

Ter premido, por exemplo, nun punto e nun círculo. Acote ao punto central do círculo.

### «Un redondeo precisa unha esquina onde se encontran exactamente dúas liñas.» / «Ese raio é demasiado grande para estas liñas.»

Prema exactamente no punto de esquina de dúas liñas sólidas. Use un raio menor que o que permite a liña máis curta.

### A xeometría volve atrás cando a arrastro

O arrastre romparía unha relación ou unha cota, así que PartCraft a devolve ao seu sitio. Só pode moverse a xeometría azul (subdefinida).

### «Este esbozo non se pode abrir: precisa Extrude2, que está fallando.»

O esbozo está nunha cara dun elemento que non está construído. Corrixa antes ese elemento, ou reactive o elemento, ou avance no historial.

## Problemas de elementos

| Mensaxe | Causa | Solución |
|---|---|---|
| «Cree primeiro un esbozo: escolla un plano, Esbozo, debuxe un perfil pechado, Saír.» | Non hai ningún esbozo sen usar con curvas, e non hai ningún seleccionado | Debuxe un esbozo, ou seleccione no historial o esbozo que quere usar |
| «O esbozo non ten un perfil pechado para extruír.» (ou «para xirar») | Non hai ningún lazo pechado de liñas sólidas | Peche os ocos; volva converter as liñas de construción en normais con {{key:Q}} |
| «O perfil está aberto: un extremo en (x, y) non está unido a nada.» | Un oco nese punto | Abra o esbozo e arrastre o extremo sobre o seu veciño para que encaixe |
| «O perfil bifurca en (x, y): alí se encontran máis de dous extremos.» | Tres ou máis liñas se encontran nun punto | Elimine a liña sobrante, ou convértaa en construción |
| «Un lazo pechado precisa polo menos tres lados ou unha curva.» | Dúas liñas de ida e volta | Debuxe de novo o lazo |
| «Atravesar todo é para cortes. Use unha profundidade para un saínte.» | Un saínte configurado en Atravesar todo | Estableza Fin en Cego ou Plano medio |
| «Non hai nada que cortar nese lado do esbozo. Probe a outra dirección.» | O corte apunta lonxe do material | Marque Inverter dirección |
| «Aínda non hai nada que cortar.» / «Aínda non hai nada que furar.» | Non hai sólido antes deste elemento | Cree antes un saínte, ou baixe o elemento no historial |
| «Debuxe unha liña de centro (unha liña de construción) no esbozo para xirar arredor dela.» | Xirar sen eixe | Engada unha liña de centro, ou escolla unha liña en Eixe |
| «O perfil cruza o eixe. Manteñao a un lado da liña de centro.» | O perfil está a ambos os lados do eixe | Debuxe de novo a metade do perfil |
| «Coloque puntos de esbozo onde van os furos (ferramenta Punto), despois faga o furo.» | Non hai puntos soltos no esbozo | Engada puntos con {{key:P}} |
| «O rebaixo ten que ser máis ancho có furo.» | O Ø do rebaixo non é maior có Diámetro | Faga o rebaixo máis ancho |
| «O rebaixo ten que ser menos profundo có furo.» | O rebaixo é máis profundo có furo cego | Faga o rebaixo menos profundo, ou o furo máis profundo |
| «Escolla os elementos que copiar.» | Un patrón ou espello sen nada marcado | Marque un elemento en Elementos que copiar |
| «Extrude2 non ten sólido que copiar.» | O elemento copiado falla ou está desactivado | Corrixa ou reactive o elemento |
| «Precisa Sketch3, que está fallando.» | Un elemento do que depende non está construído | Corrixa o elemento que se nomea |
| «Desapareceu a cara na que está (Extrude1 non está construído).» | A cara do esbozo xa non existe | Corrixa ese elemento, ou elimine o esbozo e debuxe de novo |
| «Despois disto non queda nada da peza.» | Un corte eliminou todo o material | Revise o tamaño e a dirección do corte |
| «O núcleo sólido non puido construír isto (…).» ou «O núcleo sólido non puido combinar isto co corpo.» | O núcleo rexeitou a xeometría | Desfaga, ou cambie un pouco os tamaños; as caras que se tocan exactamente poden causalo |
| «Barrido: aínda non construído. Precisa un núcleo exacto, que esta versión de PartCraft non ten.» (tamén Unión de perfís, Nervura e os outros) | Un elemento feito nunha versión anterior que só un núcleo exacto pode construír. Permanece no historial e gárdase sen cambios | Desactive ou elimine o elemento; vexa [O que aínda non está construído](topic:not-built-yet) para saber que facer no seu lugar |
| «Un redondeo de 5 mm non cabe aquí (…).» / «Un chafrán de 2 mm …» | O tamaño é demasiado grande para unha cara xunto á aresta, ou a esquina non se pode mesturar | Tamaño menor, ou menos arestas por elemento |
| «Redondeo: nesta versión só arestas rectas entre dúas caras planas (o núcleo de malla as constrúe). Redondee ou chafrane as arestas curvas no esbozo.» (tamén Chafrán) | Unha aresta seleccionada é redonda, como o bordo dun furo, ou está nunha cara curva | {{ui:Seleccionar arestas}} e elimínea; redondee ou chafrane esa esquina no esbozo |
| «Un redondeo cuxo raio cambia ao longo da aresta: aínda non construído (precisa un núcleo exacto). Dea un só raio.» | **Raio variable** está marcado | Desmarque e indique un só raio |
| «Redondeo co núcleo de malla: onde se encontran as arestas redondeadas, son ingletadas, non mesturadas.» (⚠, un aviso) | As arestas seleccionadas se encontran nunha esquina; os redondeos xúntanse alí nunha aresta viva | Non hai nada que arranxar: a peza está construída. Redondee menos arestas se a aresta viva importa |
| «Desapareceu unha aresta que redondea: a aresta entre Extrude1 e Cut2.» | Un cambio anterior eliminou a aresta | {{ui:Seleccionar arestas}}, elimine a aresta en vermello e seleccione a nova |
| «Seleccione as arestas na vista, despois engádaas.» | O redondeo ou chafrán non ten arestas | {{ui:Seleccionar arestas}} |
| «Seleccione as caras que eliminar (abrir), despois faga a cuncha.» | A cuncha non ten caras abertas | {{ui:Seleccionar caras}} |
| «A cuncha non se pode facer con este grosor (…).» | A parede é máis grosa có fino da peza ou có raio dun redondeo | Unha parede máis fina, ou redondeos maiores |
| «Cuncha: nesta versión só abre caras planas (o núcleo de malla a constrúe).» | Unha cara aberta é curva | {{ui:Seleccionar caras}} e elimínea; abra só caras planas |
| «Desmoldeo: nesta versión só caras planas (o núcleo de malla o constrúe).» | Unha cara desmoldeada é un cilindro, un cono ou unha cara libre | Elimínea; desmolde só caras planas |
| «Desapareceu unha cara que abre (…).» | Un cambio anterior eliminou a cara | {{ui:Seleccionar caras}} de novo |
| «Fillet1 cambia as arestas ou as paredes do corpo; non se pode copiar. …» | Un patrón ou espello copia un redondeo, un chafrán ou unha cuncha | Desmarque; faga primeiro os patróns dos cortes, despois o redondeo |
| «Está nunha cara que só un núcleo exacto pode atopar: aínda non construído nesta versión.» | Un esbozo nunha cara que o núcleo de malla non pode atopar, como unha feita nunha versión anterior | Debuxe nun plano base ou nunha cara plana dunha extrusión, e sitúeo con cotas |
| «Usa unha cara ou aresta do sólido, que só un núcleo exacto pode atopar: aínda non construído nesta versión.» | Un plano, eixo ou punto de referencia sobre unha cara ou aresta do sólido | Fágao a partir de planos base, puntos de esbozo ou coordenadas |
| «Extruír ata unha cara, a seguinte cara ou un vértice: aínda non construído (precisa un núcleo exacto).» / «Unha conicidade: aínda non construída (precisa un núcleo exacto).» | Unha condición final ou conicidade que só un núcleo exacto constrúe | Use unha profundidade Cega ou Plano medio que medirá; deixe a Conicidade en 0 |

## Problemas de selección

- «Esa cara é curva. Seleccione unha cara plana ou un plano para debuxar o esbozo.» Os esbozos precisan unha cara plana. Debuxe nun plano base e sitúe o esbozo con cotas.
- Unha cara di «Fixa onde se seleccionou»: non se creou a partir dunha aresta de esbozo (por exemplo, unha cara dunha copia de patrón), así que un esbozo nela mantense no seu sitio cando cambia a peza.
- As arestas custan de tocar: faga zoom. Unha aresta gaña á cara do seu lado cando o punteiro está exactamente sobre ela.

## Problemas de ficheiros

| Mensaxe | Solución |
|---|---|
| «PartCraft abre os seus propios ficheiros .partcraft.json, as exportacións da macro CadCraft para SolidWorks (.cadcraft-sw.json) e os ficheiros STEP. "bracket.igs" non é nada disto.» | Só se recoñecen eses ficheiros (e as mallas STL, OBJ e 3MF e os ficheiros `.3dm`) |
| «"part.stp" non é un ficheiro STEP (non empeza por ISO-10303-21).» | O ficheiro non é texto STEP |
| «Ese ficheiro STEP é demasiado grande (máis de 60 MB) para importalo aquí.» | Simplifíqueo na orixe |
| «Ese ficheiro é demasiado grande para ser unha peza de PartCraft.» na súa propia peza gardada | Un sólido STEP grande importado nunha versión anterior fixo que o ficheiro da peza superase 50 MB. Use unha copia anterior sen el |
| «Ese ficheiro é demasiado grande para ser unha peza de PartCraft.» | O ficheiro supera 50 MB; non é un ficheiro de PartCraft |
| «Este non é un ficheiro de PartCraft (non é JSON).» / «Este non é un ficheiro de PartCraft.» | O ficheiro está danado ou é doutro programa |
| «Este ficheiro gardouse cun PartCraft máis novo (versión de ficheiro …); esta le a versión …» | Ábraa no PartCraft máis novo |
| «Extrude2: a profundidade é incorrecta.» (ou outro valor) | O ficheiro editouse a man ou está danado. Use unha copia anterior |
| Inserir nun conxunto di «Part1.partcraft.json non ten sólido que inserir.» | O ficheiro da peza non ten sólido. Ábrao, constrúa un sólido, gárdeo e insira de novo |

**O meu ficheiro gardado non está onde esperaba.** Gardar é unha descarga: busque no cartafol de descargas do navegador, ou abra a lista de descargas desde a barra de ferramentas do navegador. Vexa [Onde van os seus ficheiros](common:your-files).

**Abrín unha peza pero o conxunto segue na pantalla.** A peza cargouse detrás do conxunto. Escolla {{ui:Pechar}} para pechar o conxunto e ver a peza. Peche os conxuntos antes de abrir ficheiros de pezas.

## Problemas de debuxo

| Mensaxe | Causa | Solución |
|---|---|---|
| «Constrúa primeiro un sólido, despois faga o seu debuxo.» | A peza aínda non ten sólido | Constrúa antes a peza |
| «Non hai espazo na folla para: detalle. Faga o detalle máis pequeno ou elimine unha vista.» | O **Raio do detalle** ou a **Escala do detalle** son demasiado grandes | Use un **Raio do detalle** ou unha **Escala do detalle** máis pequenos, ou elimine a sección |
| «Un detalle tómase da vista frontal, superior, dereita ou de sección.» | Prema nunha desas vistas | Prema nunha desas vistas |
| «Prema nunha das vistas.» | O clic foi sobre papel baleiro | Prema nunha das vistas |
| «Posición precisa polo menos unha referencia de datum.» e outras mensaxes de marco | Falta un datum, ou a característica non admite ese marco | Estableza os datums que pide o panel, ou escolla outra característica |
| «Non se puideron facer as vistas do debuxo: …» | Un cambio recente deixou o debuxo nun estado incorrecto | Desfaga o último cambio. Se segue pasando, garde, recargue e reabra a peza |

## Problemas de conxunto

| Mensaxe | Causa | Solución |
|---|---|---|
| «Constrúa primeiro un sólido, despois engádao a un conxunto.» | A peza aínda non ten sólido | Constrúa antes un sólido |
| «Insira primeiro unha segunda peza (Engadir copia, Inserir, ou Editar › Duplicar).» | Unha unión precisa dúas pezas | Insira unha segunda peza |
| «Seleccione unha cara doutra peza.» | As dúas caras dunha unión teñen que estar en pezas distintas | Seleccione a segunda cara noutra peza |
| «Esa cara é curva. Seleccione unha cara plana …» | As uniones comezan en caras planas | Use despois **Centrar en** para un furo ou un eixe de xiro |
| «Bracket2 non está unida á peza fixa, así que queda onde se puxo.» | A peza non está unida á peza fixa | Engada unha unión desde ela a unha peza que estea colocada |
| «Revolute3 pecha un bucle que non pode pechar: está desviado 2,000 mm. Comprobe as caras, os desprazamentos e os límites das uniones do bucle.» | As pezas non se poden encontrar todas: falla a lonxitude, as caras que usa cada unión, os desprazamentos (as pezas apiladas cara a cara deben coincidir en profundidade) ou os límites | Comprobe eses datos, ou elimine unha unión do bucle |
| «Desapareceu de Bracket a cara que usa esta unión.» / «Desapareceu de Bracket o eixe que usa esta unión.» | A peza editouse | Elimine a unión e fágaa de novo |
| «O eixe corre ao longo da cara, así que non pode fixar o centro da unión.» | O eixe non cruza a cara | Escolla un eixo que cruce a cara, ou «A orixe propia da cara» |
| «Un conxunto conserva polo menos unha peza. Péchao en troca.» | Non se pode quitar a última peza | Use {{ui:Pechar}} |

**As pezas están unidas pero no lugar equivocado.** Estableza **Centrar en** para os dous lados da unión nos furos ou eixes de xiro que deberían aliñarse, despois axuste o **Ángulo (°)** e o **Desprazamento (mm)**.

## Vai lento

- Estableza **Curvas** en Normal ou Groso mentres modela; cambie a Fino antes de exportar.
- Os patróns con moitas copias (centos de copias) tardan en recalcularse en cada cambio. Desactive o patrón mentres traballa noutros elementos.
- A comprobación de interferencias e a de movemento comparan cada par de pezas; os conxuntos grandes tardan máis.
- Peche outras pestanas pesadas. PartCraft funciona co procesador e os gráficos do seu propio ordenador.

## Segue sen solución

Primeiro, garde o ficheiro ({{key:Mod+S}}), despois recargue a páxina e ábraa de novo. Se un elemento segue fallando, selecciónello, lea a súa mensaxe e probe {{key:Mod+Z}} para volver ao último estado correcto.
