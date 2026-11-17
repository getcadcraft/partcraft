---
title: Facer traxectorias e G-code (Fabricación)
summary: Prepare o material en bruto e a orixe de traballo, escolla as ferramentas, engada operacións de cara, cavidade, contorno, taladrado e chaflán escollendo caras, remate a peza enteira en 3D (paralela, scallop), simule o material en bruto contra o modelo para rebaixes e tempo de ciclo, e descargue o G-code dun dos tres post-procesadores integrados ou dun que edite vostede.
keywords: step exacto, step para o taller, coordenadas de traballo, paso a CAM, paralela, scallop, acabado 3D, acabado, punta esférica, biblioteca de ferramentas, editar post, post personalizado, editor de post, adaptativo, desbaste adaptativo, enganche constante, trocoidal, hsm, mecanizado a alta velocidade, fabricación, CAM, traxectoria, G-code, NC, CNC, fresadora, fresado, cavidade, contorno, perfil, refrendado, taladrado, picado, G83, G81, G73, chaflán, material en bruto, desprazamento de orixe, G54, post-procesador, GRBL, LinuxCNC, avances e velocidades, simulación, rebaixe, tempo de ciclo
from: beeb29aa
---

O espazo de traballo Fabricación converte a peza en traxectorias para unha máquina de fresado de 3 eixos e escríbeas como G-code. A maioría das operacións son de **2,5 eixos**: a ferramenta queda vertical, as paredes córtanse rectas cara abaixo e os fondos planos. **Paralela** e **Scallop** rematan superficies curvas en 3D (ver [Acabado 3D](topic:finish-3d)); a ferramenta segue vertical (tres eixos, sen inclinación). Traballa sobre as caras con nome que o núcleo de malla dá á peza (ver [O núcleo de malla](topic:solid-kernels)).

Versión de laboratorio: comprobe cada programa no simulador do seu propio control, e execútea primeiro no aire, por riba do material en bruto.

## Configurar

1. Escolla **Fabricación** no selector de espazos de traballo, despois {{ui:New setup}}.
2. Na lapela **Preparación** escolla:
   - **Eixo da ferramenta (+Z)**: en que sentido apunta a ferramenta cara á peza. Por defecto é Y do mundo (arriba en PartCraft); o X da máquina é então o X do mundo, e o Y da máquina é −Z do mundo.
   - **Orixe de traballo (G54)**: unha esquina ou o centro do material en bruto, a parte superior ou inferior, o centro superior do modelo, ou a orixe do modelo.
   - **Material en bruto**: unha caixa ou un cilindro, ou o modelo máis desprazamentos (lados, parte superior, parte inferior) ou un tamaño fixo.
   - **Material** (fixa os avances e velocidades iniciais), o **Post-procesador** (control), a velocidade máxima do fuso da máquina, a velocidade de avance rápido e o tempo de cambio de ferramenta, a refrixeración e o número de programa.

## Ferramentas

A lapela **Ferramentas** garda a biblioteca: fresas de punta plana, esférica e de radio de esquina, brocas, fresas de chaflán e fresas de cara, cada unha cun número T, diámetro, estrías e lonxitude de estría (máis radio de esquina, ángulo de punta ou de chaflán onde aplique).

As miñas ferramentas pódense gardar no navegador e levalas entre ordenadores como ficheiro: ver [A biblioteca de ferramentas](topic:tool-library).

A velocidade do fuso e o avance veñen do material: n = 1000 × velocidade de corte / (π × diámetro), avance = n × estrías × carga de viruta (brocas: n × avance por volta). Os números son valores iniciais prudentes tirados de intervalos publicados, non axustados á súa máquina; escriba a velocidade de corte, a carga de viruta, as rpm ou o avance do fabricante da ferramenta para substituílos. Cando a velocidade pasa do máximo da máquina, mantense aí e o avance segue a velocidade, conservando a carga de viruta.

## Engadir operacións

Cada botón da barra engade unha operación e, cando precisa xeometría, comeza a escoller: faga clic en caras ou arestas na vista (faga clic de novo para quitar unha), despois {{ui:Done picking}} ou {{key:Esc}}.

| Operación | Escoller | Que fai |
|---|---|---|
| {{ui:Face}} | nada | Pasadas en zig-zag sobre todo o material en bruto, máis aló das súas arestas, ata a parte superior do modelo |
| {{ui:Pocket}} | unha cara plana de fondo, un burato redondo, ou unha cadea pechada de arestas | Limpa a rexión con pasadas de desprazamento de dentro cara a fóra, en cada descenso; as illas (caras que se erguen dentro do fondo) quedan; un fondo aberto por todo o contorno (nada máis alto fóra del) límpase ata a aresta do material en bruto |
| {{ui:Adaptive}} | o mesmo que Cavidade | Limpa a mesma rexión en pasadas que cortan cada unha unha anchura fixa (**Enganche**, unha fracción do diámetro), así que a fresa nunca toma unha ranura de anchura completa, nin nas esquinas; entra por unha hélice e acaba as paredes en cada nivel. Os cortes estreitos permiten un descenso máis profundo e un avance maior |
| {{ui:Contour}} | unha cara plana (o seu contorno), unha cara redonda, ou arestas | Segue o contorno desprazado polo radio da ferramenta, por fóra ou por dentro, con arcos de entrada e saída e lapelas opcionais |
| {{ui:Drill}} | buratos (faga clic na parede ou no bordo dun burato) | Taladra cada burato cun ciclo fixo: picado (G83), taladrado (G81) ou rotura de viruta (G73); ou indique un diámetro para taladrar todos os buratos desa medida |
| {{ui:Chamfer}} | o contorno ou as arestas dunha cara | Fai correr unha fresa de chaflán pola aresta para que corte a anchura que fixe |
| {{ui:Parallel}} | nada (o modelo enteiro) | Acabado 3D en liñas paralelas a calquera ángulo, seguindo a superficie cunha fresa de punta esférica, de radio de esquina ou plana. Ver [Acabado 3D](topic:finish-3d) |
| {{ui:Scallop}} | nada (o modelo enteiro) | Acabado 3D en pasadas separadas unha distancia fixa sobre a superficie, de xeito que a crista entre elas teña a altura que pida |

Seleccione unha operación na lista para cambiar a súa ferramenta, alturas (seguridade, retracción, altura de avance, superior, inferior), profundidade por pasada, paso lateral, sobremedida, pasada de acabado, entrada (hélice, rampa ou picado), fresado en concordancia, lapelas ou ciclo. {{ui:Up}} e {{ui:Down}} reordenan, {{ui:Suppress}} a deixa fóra, {{ui:Delete}} a elimina. Todo está no historial de desfacer e gárdase no ficheiro da peza.

O paso lateral dunha cavidade é como máximo a metade do diámetro da ferramenta, así que cada punto do seu fondo queda a un radio de ferramenta dunha pasada. As esquinas interiores conservan o radio da ferramenta.

**O desbaste adaptativo** mantén o enganche da fresa preto dun valor. Un enganche de 0,15 do diámetro é un ángulo de enganche de preto de 46°: o arco da aresta da fresa no material. Unha cavidade desprazada, en cambio, corta a anchura completa na súa primeira pasada e dá volta máis en cada esquina interior. Entre pasadas a ferramenta mantense baixada cando se move por aire cortado, e sobe e baixa no aire cortado noutros lugares. As pasadas calcúlanse nunha cuadrícula fina sobre a rexión (celas de preto dun doceavo do radio da ferramenta), así que o enganche pode ser ata unha cela máis ancho do fixado; as paredes acábanse exactamente. Unha rexión aberta e grande fai un programa longo con moitos movementos curtos.

## Simular

As traxectorias fanse de novo despois de cada cambio (tamén as da peza). {{ui:Simulate}} mostra ademais o material en bruto que queda despois de todo o programa. O panel mostra:

- **Tempo de ciclo**: os movementos de avance a súa velocidade, os rápidos como liñas rectas á velocidade de avance rápido da preparación, máis o tempo de cambio de ferramenta. As máquinas reais aceleran, así que tardan máis.
- **Sobrecortes**: lugares onde a ferramenta foi máis de 0,02 mm por baixo da superficie da peza. Marcas vermellas mostran os sobrecortes na vista.
- **Material que queda na peza**.

O material en bruto é un mapa de alturas da parte superior (un mapa Z), así que non pode mostrar contrasulcos. Arrastre **Reprodución** para mover a ferramenta ao longo do programa. Na vista, os movementos de avance son continuos e os rápidos son de trazos, cunha cor por operación.

Con **Mostrar o material simulado** activado, o material en bruto colorease fronte ao modelo, cela a cela: **verde** onde está sobre o modelo (dentro de 0,02 mm), **vermello** onde a ferramenta entrou no modelo, e onde queda material sobre o modelo **amarelo** para unha pel fina, **laranxa** para máis, esvaecéndose ata o **gris** do material sen cortar a 1 mm ou máis. As cores refanse con cada cambio, desde o mesmo mapa de alturas que os números do panel, así que o verde e o vermello concordan coa liña de Sobrecortes. Un chaflán corta o modelo a propósito e mostra vermello ao longo da súa aresta.

## Post-procesar o G-code

Escolla o control en **Post-procesador** e prema {{ui:Download G-code}} (ou {{ui:Post}} na barra):

| Control | Ficheiro | Notas |
|---|---|---|
| ISO estilo Fanuc | .nc | %, número O, números de liña, T M6 con G43 H, ciclos fixos |
| GRBL | .nc | Sen cambiador de ferramentas nin ciclos fixos: un cambio de ferramenta pon unha pausa con M0, e o taladrado escríbese como movementos simples |
| LinuxCNC | .ngc | T M6 con G43 H, ciclos fixos, M2 |
| Propio | calquera | Un post que escribiu ou cambiou vostede: {{ui:Edit post…}}, {{ui:New post…}}, {{ui:Import post file…}} |

Cada ficheiro comeza con comentarios sobre o programa, o material en bruto, o desprazamento de orixe e as ferramentas. As coordenadas están en milímetros con 3 decimais. {{ui:Toolpath CSV}} e {{ui:Toolpath JSON}} exportan os propios movementos.

**Comprobe a saída no simulador propio da máquina antes de cortar, e execútea primeiro no aire, por riba do material en bruto.** Os tres post-procesadores integrados son puntos de partida que seguen o comportamento documentado dos controis; non se probaron en ningunha máquina concreta. Un post que cambie é responsabilidade súa probalo. Como escribir un: [Post-procesadores](topic:post-processors).

## STEP exacto para o taller

Debaixo dos botóns de G-code na lapela **Operacións**, {{ui:Exact STEP (work coordinates)}} descarga `<part>-work.step`: a peza como sólido exacto (cilindros verdadeiros para buratos e saíntes, círculos verdadeiros para as súas arestas) coa orixe no punto de orixe de traballo desta preparación e Z ao longo do eixo da ferramenta. Esas son as coordenadas que usa o G-code, así que o programa CAM ou o comprobador do taller aliña o modelo co programa sen movelo. O ficheiro contén só a peza, non o material en bruto nin as traxectorias.

{{ui:Export}} › {{ui:STEP AP242 (exact solid)}} escribe o mesmo sólido na posición propia da peza (Z cara arriba): ver [Exportar para impresión, STEP e DXF](topic:export-files#for-other-cad-programs-step).

## Límites

- As cavidades, contornos, taladrados e chafláns son de 2,5 eixos. As caras curvas poden rematarse en 3D ([paralela e scallop](topic:finish-3d)) pero non desbastarse en 3D (un cono déixase en escalóns ata que o remate), e non hai mecanizado de restos. O desbaste adaptativo é 2D (fondos planos).
- Só tres eixos: sen inclinación, sen torneado, sen inspección.
- Os portaferramentas e os vástagos non se comproban por colisións; aparece un aviso cando un corte é máis fondo que a lonxitude da estría.
- Os avances e as velocidades son valores iniciais. Un post é texto que pode editar, pero só decide como se escriben os movementos; non pode cambiar a traxectoria, engadir eixos nin coñecer a súa máquina ([Post-procesadores](topic:post-processors) lista o que non pode facer).

## Enviar o programa a unha máquina

En CadCraft Studio de escritorio, con unha máquina configurada en Studio, **Enviar a unha máquina…** aparece xunto a **Download G-code** e sube o mesmo programa á máquina da súa rede. Nunca se inicia desde PartCraft: arránquea na máquina cando estea claro. Nun navegador o botón non se mostra (unha páxina web non pode chegar a unha máquina da súa rede): descargue o programa.
