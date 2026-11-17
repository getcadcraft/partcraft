---
title: Camps magnètics en 2-D (tutorial)
summary: Calculeu el camp magnètic d'un electroimant o d'un imant permanent amb la biblioteca d'anàlisi: executeu els exemples, llegiu la densitat de flux, el camp a l'entreferro, la inductància i la força d'atracció, canvieu el disseny i construïu el vostre propi model de bobines, imants i ferro.
keywords: magnètic, magnetostàtica, camp magnètic, densitat de flux, tesla, electroimant, solenoide, bobina, ampers-espira, nucli de ferro, entreferro, permeabilitat, inductància, força magnètica, reluctància, circuit magnètic, potencial vector, electromagnetisme, fem, motor, actuador, transformador, magnetostatic2d, imant permanent, neodimi, ndfeb, ferrita, remanència, punt de treball, retorn, fuga, culata de tancament
from: 215f6601
---

La biblioteca d'anàlisi de PartCraft pot calcular el camp magnètic de bobines i de ferro en 2-D: una secció transversal d'una cosa llarga i igual al llarg de la seva longitud, com un electroimant, un nucli de transformador, una barra conductora o la secció transversal d'un motor. Aquest tutorial executa l'exemple d'electroimant de la biblioteca, llegeix el que n'indica, el canvia, mostra com modelar la vostra pròpia forma i, després, afegeix un imant permanent.

Fa servir l'espai de treball Script i la [biblioteca d'anàlisi](topic:craftscript-library). No cal conèixer el llenguatge CraftScript per seguir-lo; l'exemple explica què fa cada línia.

## Què es modela

Un nucli de ferro en forma de C, de 100 × 80 mm per fora i 20 mm de gruix, amb un entreferro d'aire de 2 mm a la cama dreta. Una bobina de 100 espires que porta 10 A (1000 ampers-espira) s'enrotlla al voltant de la cama esquerra. Tot és llarg en la direcció que surt cap a fora de la pantalla, així que les respostes són **per metre de profunditat**: multipliqueu pel fons real per a un imant real.

La funció `magnetostatic2d` de la biblioteca resol el potencial vector magnètic en una quadrícula de quadrats d'1 mm dins d'una caixa d'aire al voltant de l'imant, i després calcula a partir d'ell la densitat de flux **B** (en tesla).

## Executa l'exemple

1. Trieu **Script** a la casella **Espai de treball**, a l'esquerra de la barra d'eines.
2. Obriu la pestanya **Biblioteca** del tauler de scripts, i després **Exemples** › **Electroimant: camp, entreferro, inductància**.
3. Feu clic a {{ui:Obre (només lectura)}} i després premeu {{key:F5}}.

En un segon o dos el llenç mostra la densitat de flux, i la consola imprimeix:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

El gràfic sota el llenç és la densitat de flux vertical B_y al llarg de la línia central del nucli, d'esquerra a dreta: uns −0.55 T a la cama esquerra (el flux hi baixa), gairebé res a la finestra, i +0.55 T a la cama dreta i a través de l'entreferro (el flux hi torna a pujar). El mateix flux passa pel ferro i per l'entreferro, així que les dues cames i l'entreferro mostren gairebé el mateix valor.

## Llegeix els resultats

- **El camp a l'entreferro** és 0.543 T. Un càlcul a mà tracta el nucli com un sol circuit magnètic, B = μ0 N I / (g + l / μr), on g és l'entreferro, l la longitud del camí pel ferro i μr la permeabilitat relativa del ferro; dóna 0.552 T. El camp és una mica més baix que el càlcul a mà perquè el flux s'obre al voltant de l'entreferro (efecte de vora) i una part del flux pren una drecera curta a través de la finestra (fuita). Amb un entreferro més petit o una quadrícula més fina, els dos valors s'acosten.
- **La inductància** de la bobina de 100 espires és 0.154 H per metre de profunditat, a partir de l'energia emmagatzemada al camp. La fórmula del circuit en dóna menys (0.110 H/m), perquè només compta el flux que passa per l'entreferro, i no el flux que s'hi escapa.
- **La força d'atracció** que tanca l'entreferro és B² w / (2 μ0) per a una cara de l'entreferro d'amplada w: uns 2300 N per metre, o 117 N per a un imant de 50 mm de profunditat.
- **El pic** de 1.97 T es troba als cantons interiors de la finestra, on el flux gira bruscament. El model tracta el ferro com a lineal; l'acer elèctric real se satura cap a 1.5 a 2 T, així que tracteu els valors per sobre d'això com un avís, no com una resposta.

:::note
Les proves pròpies de la biblioteca executen aquest exemple i comproven el camp de l'entreferro amb la fórmula del circuit magnètic a cada canvi de PartCraft. El mètode, les seves referències i les altres comprovacions (un solenoide llarg, un solenoide amb nucli de ferro) són a la capçalera de `magnetostatic2d`: feu-hi clic a la biblioteca.
:::

## Canvia el disseny

1. Feu clic a {{ui:Fes una còpia}} sobre l'script de només lectura. La còpia es desa amb la vostra peça.
2. Canvieu un valor a la part superior i torneu a premer {{key:F5}}. Proveu:
   - `g = 0.001;` — la meitat de l'entreferro: el camp de l'entreferro gairebé es duplica, i la força d'atracció també (va amb B²).
   - `mur = 200;` — un nucli pitjor: més dels ampers-espira es gasten al ferro.
   - `N = 200;` — el doble d'espires: el doble de camp, quatre vegades la inductància.
   - `h = 0.0005;` — una quadrícula més fina: respostes més properes, unes quatre vegades més temps.

Cada execució substitueix el llenç. Les variables que crea l'script (com `Bgap`, `L`, `F`) es mantenen a la llista **Variables** per als vostres propis càlculs.

## Modela la vostra pròpia forma

L'exemple construeix tot a partir de tres llistes, un valor per quadrat de la quadrícula, que podeu fer per a qualsevol forma dibuixada amb línies rectes seguint la quadrícula:

- **On és el ferro:** `iron` és true per als quadrats dins del nucli. L'exemple el construeix a partir de rectangles: `frame & ~window & ~gap` vol dir "al marc, no a la finestra, no a l'entreferro".
- **La permeabilitat:** `1 + (mur - 1) * iron` és 1 a l'aire i `mur` al ferro. Doneu a diversos materials els seus propis valors de la mateixa manera.
- **El corrent:** `J` és la densitat de corrent en ampers per metre quadrat, positiva cap a fora de la pantalla, i negativa cap a dins. Una bobina té dos costats amb signes oposats; l'exemple calcula `J0` perquè un costat porti N I.

Després, `r = magnetostatic2d(m, permeability, J)` el resol. `r.B` és la densitat de flux a cada quadrat (dues columnes, x i y), `r.Bmag` la seva mida, `r.energy` l'energia emmagatzemada per metre. `plot(x, y)` dibuixa una línia.

La biblioteca treballa en metres i la vista en mil·límetres, així que un camp mostrat tal qual es dibuixaria mil vegades més petit. L'exemple el mostra sobre una còpia de la quadrícula en mil·límetres (`mm = quadGrid(…)`, després `show(field(mm, …))`): copieu aquestes dues línies.

Per defecte, la vora de la caixa reté el camp: cap flux no en surt. Feu la caixa com a mínim dues o tres vegades més gran que l'imant perquè això no comprimeixi el camp. Per a un imant simètric podeu modelar-ne la meitat: la capçalera de `magnetostatic2d` indica quina condició de vora cal utilitzar en una línia de simetria.

## Imants permanents

El segon exemple, **Exemples** › **Imant permanent en un nucli de ferro: punt de treball, fuga, força d'atracció**, és el mateix nucli sense la bobina i amb una llesca de 10 mm de la cama esquerra substituïda per un imant, imantat cap amunt. Executeu-lo amb {{key:F5}}. Imprimeix:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **El punt de treball.** Un imant es descriu per la seva **remanència** Br (el camp que conserva quan el ferro el curtcircuita: uns 1.2 T per a un imant de NdFeB sinteritzat, 0.4 T per a la ferrita) i per la seva permeabilitat de retorn (uns 1.05 i 1.1). En obrir un entreferro, el fa baixar per la seva recta de retorn: aquí fins a 1.04 T, amb H apuntant contra B dins seu.
- **Fuga.** El càlcul a mà sense fuga dóna 0.97 T a l'entreferro; el model dóna 0.68 T. Un imant impulsa el seu flux amb una empenta forta sobre una longitud curta, de manera que una part molt gran torna directament a través de la finestra en lloc de passar per l'entreferro. El factor de fuga n'indica la mesura: 1.53 aquí. Poseu `g = 0;` per a una culata de tancament: llavors l'imant treballa a menys d'un mig per cent del càlcul a mà.
- **Imants al vostre propi model.** Doneu a `magnetostatic2d` els imants com a `struct('Br', Br)`, on `Br` té una fila per quadrat de la quadrícula amb la remanència al llarg de x i y en tesla (zero fora dels imants), i doneu als quadrats d'imant la seva permeabilitat de retorn a la llista de permeabilitats:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T upward in the squares where mag is true
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Per a un imant imantat amb un angle, poseu `Br·cos(angle)` i `Br·sin(angle)` a les dues columnes; per a un anell imantat cap enfora, calculeu la direcció de cada quadrat a partir de la seva posició. `r.H` dóna la intensitat de camp H a cada quadrat.

El model manté un imant sobre la seva recta de retorn, per molt que se'l forci. Un imant real forçat més enllà del seu genoll (per un entreferro gran, una bobina forta o la calor) perd part de la seva força per sempre; compareu el punt de treball amb la corba del fabricant per al grau i la temperatura.

Les proves de la biblioteca comproven els imants amb dos resultats a mà: un imant rodó a l'aire lliure (a dins, B = Br / (1 + μr)) i un imant tancat per una culata de ferro (el circuit magnètic), tots dos dins d'un 1 %.

## Què no fa encara

- **Saturació.** El ferro és lineal: el doble de corrent, el doble de camp, sense límit.
- **Desmagnetització.** Els imants es mantenen sobre la seva recta de retorn (vegeu més amunt).
- **Corrents parasites** i **pèrdues** (pèrdues de ferro, pèrdues de coure).
- **Parts mòbils i parell.** No hi ha rotor que giri dins d'un estator, ni parell en funció de l'angle.
- **Formes rodones.** La quadrícula és de quadrats iguals, així que els contorns corbs surten escalonats.
- **3-D.** Tot és una secció transversal d'una cosa llarga.

El disseny de motors (un rotor que gira, parell i pèrdues en 2-D) s'està estudiant per a una versió posterior. Vegeu [Encara no implementat](topic:not-built-yet).
