---
title: Crear traxectorias e G-code (Fabricación)
summary: Prepare o material en bruto e unha orixe de traballo, escolla as ferramentas, engada operacións de cara, cavidade, contorno, taladrado e chaflán seleccionando caras, acabe todo o modelo en 3D (paralela, scallop), simule o material contra o modelo para detectar rascaduras e o tempo de ciclo, e descargue o G-code dun dos tres post-procesadores integrados ou dun que vostede edite.
keywords: paso exacto, step para o taller, coordenadas de traballo, entrega a CAM, paralela, scallop, acabado 3D, acabado, punta esférica, biblioteca de ferramentas, editar post, post personalizado, editor de post, adaptativo, limpeza adaptativa, compromiso constante, trocoidal, hsm, mecanizado a alta velocidade, fabricación, CAM, traxectoria, G-code, NC, CNC, fresado, cavidade, contorno, perfil, cara, taladrado, picotazo, G83, G81, G73, chaflán, material en bruto, desprazamento de orixe, G54, post-procesador, GRBL, LinuxCNC, avances e velocidades, simulación, rascadura, tempo de ciclo
from: f8a03be8
---

O espazo de traballo Fabricación converte a peza en traxectorias e escríbeas como G-code. A maioría das operacións son fresado de **2,5 eixos**: a ferramenta mantense vertical, as paredes córtanse rectas cara abaixo e os fondos son planos. **Desbaste 3D** e **Restos** desbastan pezas curvas en 3D ([Desbaste 3D e mecanizado de restos](topic:rough-3d)); **Paralela** e **Scallop** as acaban ([Acabado 3D](topic:finish-3d)). Nunha máquina con eixos rotativos, calquera operación pode ter unha ferramenta inclinada, e dúas operacións moven os eixos rotativos mentres cortan ([Mecanizado de 4 e 5 eixos](topic:multi-axis)). Hai operacións para torno ([Torneado nun torno](topic:turning)) e para sonda de palpado ([Sondaxe](topic:probing)). Traballa sobre as caras con nome que o kernel de malla dá á peza (vexa [O kernel de malla](topic:solid-kernels)).

Compilación de laboratorio: comprobe cada programa no simulador do propio control e execútea primeiro no aire, por riba do material.

## Preparación

1. Escolla **{{ui:Fabricación}}** no selector de espazos de traballo e logo {{ui:Nova preparación}}.
2. Na lapela **Preparación** escolla:
   - **Eixo da ferramenta (+Z)**: en que sentido aponta a ferramenta cara á peza. O +Y do mundo (o «arriba» de PartCraft) é o predeterminado; entón o X da máquina é o X do mundo e o Y da máquina é −Z do mundo.
   - **Orixe de traballo (G54)**: unha esquina ou o centro do material en bruto, arriba ou abaixo, o centro superior do modelo ou a orixe do modelo.
   - **Material en bruto**: unha caixa ou un cilindro, ben o modelo máis desprazamentos (lados, arriba, abaixo), ben un tamaño fixo.
   - **Material** (fixa os avances e as velocidades de partida), o **post** (control), a velocidade máxima do cabezal da máquina, a velocidade de avance rápido e o tempo de cambio de ferramenta, o refrigerante e o número de programa.

## Ferramentas

A lapela **Ferramentas** garda a biblioteca: fresas planas, de punta esférica e de punta redonda, brocas, fresas de chaflán e fresas de planear, cada unha cun número T, diámetro, número de canles e lonxitude de canle (ademais do raio de esquina, do ángulo da punta ou do chaflán onde aplique).

As miñas ferramentas pódense gardar no navegador e levar de un ordenador a outro como ficheiro: vexa [A biblioteca de ferramentas](topic:tool-library).

A velocidade do cabezal e o avance veñen do material: n = 1000 × velocidade de corte / (π × diámetro), avance = n × canles × espesor de viruta (brocas: n × avance por volta). Os números son valores de partida prudentes, tomados de intervalos publicados e non axustados á súa máquina; escriba a velocidade de corte, o espesor de viruta, as rpm ou o avance do fabricante da ferramenta para substituílos. Cando a velocidade supera o máximo da máquina, mantense nese límite e o avance segue á velocidade, conservando o espesor de viruta.

## Engadir operacións

Cada botón da barra de ferramentas engade unha operación e, cando precisa xeometría, comeza a seleccionar: prema nas caras ou arestas da vista (prema de novo para quitar unha), e logo en {{ui:Selección feita}} ou en {{key:Esc}}.

| Operación | Selección | Que fai |
|---|---|---|
| {{ui:Cara}} | nada | Pasadas en ziguezague sobre todo o material en bruto, máis aló das súas arestas, ata o alto do modelo |
| {{ui:Cavidade}} | unha cara plana de fondo, un burato redondo ou unha cadea pechada de arestas | Limpa a rexión en pasadas de desprazamento de dentro cara a fóra, en cada paso de profundidade; as illas (caras que se erguen dentro do fondo) quedan sen cortar; un fondo aberto por todo o contorno (sen nada máis alto fóra del) límpase ata a aresta do material en bruto |
| {{ui:Adaptativo}} | o mesmo que Cavidade | Limpa a mesma rexión en pasadas que cortan cada unha un ancho fixo (**Compromiso**, unha fracción do diámetro), de xeito que a fresa nunca toma unha ranura de ancho completo, nin sequera nas esquinas; entra por hélice e acaba as paredes en cada nivel. Os cortes estreitos permiten un paso de profundidade maior e un avance máis alto |
| {{ui:Contorno}} | unha cara plana (o seu contorno), unha cara redonda ou arestas | Segue o contorno desprazado polo raio da ferramenta, por fóra ou por dentro, con arcos de entrada e saída e pestanas opcionais |
| {{ui:Taladrado}} | buratos (prema na parede dun burato ou no seu bordo) | Fura cada burato cun ciclo fixo: picotazo (G83), taladrado (G81) ou rotura de viruta (G73); ou dea un diámetro para furar todos os buratos dese tamaño |
| {{ui:Chaflán}} | o contorno dunha cara ou as súas arestas | Pasa unha fresa de chaflán ao longo da aresta para que corte o ancho que estableza |
| {{ui:Paralela}} | nada (todo o modelo) | Acabado 3D en liñas paralelas a calquera ángulo, seguindo a superficie cunha fresa de punta esférica, redonda ou plana. Vexa [Acabado 3D](topic:finish-3d) |
| {{ui:Scallop}} | nada (todo o modelo) | Acabado 3D en pasadas separadas unha distancia fixa sobre a superficie, de xeito que a cresta entre elas teña a altura que pida |

Seleccione unha operación da lista para cambiar a súa ferramenta, alturas (seguridade, retirada, altura de avance, arriba, abaixo), profundidade de paso, paso lateral, material a deixar, pasada de acabado, entrada (hélice, rampa ou mergullo), fresado en concordancia, pestanas ou ciclo. {{ui:Subir}} e {{ui:Baixar}} reordenan, {{ui:Suprimir}} a deixa fóra e {{ui:Eliminar}} a quita. Todo entra no historial de desfacer e gárdase no ficheiro da peza.

O paso lateral dunha cavidade é como máximo a metade do diámetro da ferramenta, así que cada punto do seu fondo está a menos dun raio da ferramenta dunha pasada. As esquinas interiores conservan o raio da ferramenta.

**Limpeza adaptativa** mantén o compromiso da fresa preto dun valor fixo. Un compromiso de 0,15 do diámetro é un ángulo de compromiso de uns 46°: o arco da aresta da fresa dentro do material. Unha cavidade desprazada, en cambio, corta ancho completo na primeira pasada e dá máis voltas en cada esquina interior. Entre pasadas a ferramenta mantense baixada onde se move por aire cortado, e sobe e baixa en aire cortado noutros lugares. As pasadas calcúlanse sobre unha rede fina sobre a rexión (celas de aproximadamente unha doceava parte do raio da ferramenta), así que o compromiso pode superar en case unha cela o valor fixado; as paredes acábanse con exactitude. Unha rexión aberta e grande dá un programa longo con moitos movementos curtos.

## Simular

As traxectorias refanse despois de cada cambio (tamén as da peza). {{ui:Simular}} amosa ademais o material que queda despois de todo o programa. O panel amosa:

- **Tempo de ciclo**: os movementos de avance á súa velocidade, os rápidos como liñas rectas á velocidade de avance rápido da preparación, máis o tempo de cambio de ferramenta. As máquinas reais aceleran, así que tardan máis.
- **Rascaduras**: sitios onde a ferramenta baixou máis de 0,02 mm por debaixo da superficie da peza. As marcas vermellas amosaas na vista.
- **Material que queda na peza**.

O material é un mapa de alturas do alto (un mapa Z), así que non pode amosar socavados. Arrastre a **Reprodución** para mover a ferramenta ao longo do programa. Na vista, os movementos de avance son sólidos e os rápidos son de trazos, cunha cor por operación.

Con **Amosar o material simulado** activado, o material pinta-se fronte ao modelo, cela a cela: **verde** onde está sobre o modelo (a 0,02 mm), **vermello** onde a ferramenta cortou o modelo, e onde queda material sobre el **amarelo** para unha capa fina, **laranxa** para máis, desvanecendo ata o **gris** do material sen cortar a 1 mm ou máis. As cores refanse con cada cambio, a partir do mesmo mapa de alturas que os números do panel, así que o verde e o vermello coinciden coa liña de Rascaduras. Un chaflán corta o modelo a propósito e amosa vermello ao longo da súa aresta.

## Post-procesar o G-code

Escolla o control en **Post** e prema en {{ui:Descargar G-code}} (ou en {{ui:Post}} da barra de ferramentas):

| Control | Ficheiro | Notas |
|---|---|---|
| ISO estilo Fanuc | .nc | %, número O, números de liña, T M6 con G43 H, ciclos fixos |
| GRBL | .nc | Sen cambiador de ferramenta nin ciclos fixos: un cambio de ferramenta para con M0, e o taladrado escríbese como movementos simples |
| LinuxCNC | .ngc | T M6 con G43 H, ciclos fixos, M2 |
| Torno tipo Fanuc | .nc | Para programas de torno: X como diámetro, avance por volta, G96 baixo un límite G50, roscado con G32 |
| Torno LinuxCNC | .ngc | Para programas de torno: diámetros con G7, G95, G96, roscado con G33; non escribe ningún movemento de referencia |
| O seu propio | calquera | Un post que vostede escribiu ou cambiou: {{ui:Editar post-procesador…}}, {{ui:Novo post-procesador…}}, {{ui:Importar ficheiro de post-procesador…}} |

Cada ficheiro comeza con comentarios sobre o programa, o material, o desprazamento de orixe e as ferramentas. As coordenadas están en milímetros con 3 decimais. {{ui:Traxectorias CSV}} e {{ui:Traxectorias JSON}} exportan os movementos en si.

**Comprobe a saída no simulador da súa máquina antes de cortar, e execútea primeiro no aire, por riba do material.** Os tres post integrados son puntos de partida que seguen o comportamento documentado dos controis; non foron probados en ningunha máquina concreta. Un post que vostede cambie é cousa súa probalo. Para escribir un, vexa [Post-procesadores editables](topic:post-processors).

## STEP exacto para o taller

Debaixo dos botóns de G-code da lapela **Operacións**, {{ui:STEP exacto (coordenadas de traballo)}} descarga `<part>-work.step`: a peza como sólido exacto (cilindros verdadeiros para os buratos e saíntes, círculos verdadeiros para os seus bordos), coa orixe na orixe de traballo desta preparación e Z ao longo do eixe da ferramenta. Son as coordenadas que usa o G-code, así que o programa CAM ou o verificador do taller aliña o modelo co programa sen movelo. O ficheiro contén só a peza, non o material nin as traxectorias.

{{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} escribe o mesmo sólido na posición propia da peza (Z cara arriba): vexa [Exportar para impresión, STEP e DXF](topic:export-files#for-other-cad-programs-step).

## Límites

- As cavidades, os contornos, o taladrado e os chafláns son de 2,5 eixos. As pezas curvas desbástanse e acábanse en 3D polas súas propias operacións ([Desbaste 3D e mecanizado de restos](topic:rough-3d), [Acabado 3D](topic:finish-3d)). A limpeza adaptativa é 2D (fondos planos).
- As ferramentas inclinadas, o acabado de 5 eixos e de 4º eixo, o torneado e a sondaxe existen, cada un cos seus límites, e **ningún deles foi executado nunha máquina**: vexa [Mecanizado de 4 e 5 eixos](topic:multi-axis), [Torneado nun torno](topic:turning) e [Sondaxe](topic:probing).
- Os portaferramentas e os vástagos non se comprobán por colisións; aparece un aviso cando un corte é máis profundo que a lonxitude de canle.
- Os avances e as velocidades son valores de partida. Un post é texto que se pode editar, pero só decide como se escriben os movementos: non pode cambiar a traxectoria, engadir eixos nin coñecer a súa máquina ([Post-procesadores editables](topic:post-processors) lista o que non pode facer).

## Enviar o programa a unha máquina

No CadCraft Studio de escritorio, cunha máquina configurada en Studio, **Enviar a unha máquina…** aparece xunto a {{ui:Descargar G-code}} e envía o mesmo programa á máquina da súa rede. Nunca se inicia desde PartCraft: inícieo na propia máquina cando estea claro. Nun navegador o botón non se amosa (unha páxina web non chega a unha máquina da súa rede): descargue o programa.
