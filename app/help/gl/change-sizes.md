---
title: Cambiar medidas sen abrir o esbozo
summary: Controle unha peza cos números do panel dereito: cotas de esbozo, profundidades, cantidades e ángulos; como planificar unha peza para que os números correctos a controlen, e onde toman o relevo os parámetros e as ecuacións.
keywords: parámetros, cotas de control, intención de deseño, cambiar medida, ecuacións, variables globais, táboa de deseño, configuracións, redimensionar, modificar cota
from: c2ae1a32
---

Cada medida dunha peza de PartCraft é un número que se pode cambiar despois: as cotas dos seus esbozos e os axustes dos seus elementos. Non precisa abrir un esbozo para cambiar as súas cotas.

## Cambiar unha cota de esbozo desde o panel

1. Prema un elemento do historial, por exemplo « Extrude1 ».
2. Baixo os axustes propios da extrusión, **Cotas do esbozo (Sketch1)** lista cada cota do seu esbozo: « Distancia », « Diámetro », « Ángulo (°) » e así por diante.
3. Escriba un valor novo nunha caixa e prema {{key:Enter}} ou {{key:Tab}}.

O esbozo se resolve co valor novo e a peza enteira se reconstrúe. Ao seleccionar o propio esbozo mostrase a mesma lista como **Cotas de control**.

Un raio ou un diámetro teñen que ser maiores que cero, e un ángulo está entre 0 e 180 graos; a barra de estado o indica se non é así.

:::tip
Que caixa é cal? As caixas se listan na orde en que se fixeron as cotas. Se non está seguro, abra o esbozo (faga dobre clic nel), faga dobre clic na cota do lenzo e cámbiea aí.
:::

## Escriba o número principal directamente

Seleccione un elemento do historial (ou engádao sen máis) e escriba un número: vai á caixa principal do elemento, a que máis cambia (a **Profundidade** dunha extrusión, o **Ángulo** dunha revolución, o **Diámetro** dun burato, a **Cantidade** dun patrón, o **Raio** dun redondeo, o espesor de parede dunha casca). Prema {{key:Enter}} para fixalo, ou {{key:Esc}} para manter o anterior. Ao engadir unha extrusión, a barra de estado di: « Extrude1 engadido. Cambie os seus números á dereita, ou escriba agora un número para a súa profundidade. »

## Cambiar o número no historial

Cada fila do historial mostra o número principal xunto ao seu nome: « Extrude1 25 mm », « Hole1 Ø6.6 thru », « Fillet1 R2 », « LPattern1 4 × 20 mm ». Faga dobre clic no número (ou seleccione a fila e prema {{key:F2}}) e abrirase unha caixa aí mesmo. Escriba o valor novo e prema {{key:Enter}}; {{key:Esc}} mantén o anterior. Funciona exactamente como a caixa do elemento á dereita: os mesmos límites, `=` para escribir unha ecuación como `=width/2`, e un paso para desfacer.

Nunha extrusión, un burato ou un patrón, un dobre clic en calquera parte da fila abre a caixa. Nun redondeo, chaflán, casca, desmoldeo ou rosca, un dobre clic no nome segue indo a escoller as súas arestas ou caras, así que faga dobre clic no propio número. Os esbozos non teñen número na fila: un dobre clic abre o esbozo.

## Arrastrar na vista

Seleccione unha extrusión no historial (ou prema nela na vista e logo na súa fila) e unha frecha laranxa aparece na súa cara final, coa profundidade nunha caixa ao lado. Arrastre a frecha: a peza sigue o arrastre e, ao soltar, o novo valor de profundidade queda fixado como un paso ({{key:Mod+Z}} o devolve). Prema {{key:Esc}} mentres arrastra para volver ao punto de partida. A profundidade se move en pasos de a décima parte do seu tamaño: 1 mm nunha extrusión de 25 mm, 0,1 mm nunha de 3 mm.

Unha revolución recibe unha frecha curva no extremo do seu xiro: arrástrea arredor do eixo para cambiar o ángulo, en graos enteiros de 1° a 360°.

Ou faga clic na caixa ao lado da frecha, escriba un valor (ou `=` e unha ecuación) e prema {{key:Enter}}. Non hai frecha nunha extrusión que vaia **Ata o final** ou ata unha cara, nin nun valor que controle unha ecuación: cámbieos á dereita.

## Os números que controlan unha peza

| Onde | Que se pode cambiar |
|---|---|
| Esbozo | Todas as cotas: lonxitudes, distancias, raios, diámetros, ángulos |
| Extruír e Cortar | Profundidade, condición de fin, dirección, saínte ou corte |
| Revolución e corte de revolución | Ángulo, eixo, saínte ou corte |
| Burato | Diámetro, profundidade, ata o final, diámetro e profundidade do avellanado |
| Redondeo, Chaflán, Casca | Raio, distancia, espesor de parede e dirección, e que arestas ou caras |
| Lineal e Circular | Cantidade, espazamento ou ángulo, dirección ou eixo |
| Peza | Curvas (canto de fino se facetan as formas redondas) |
| Debuxo | Onde corta a sección, o tamaño e a escala do detalle, valores de GD&T |

## Planificar a peza para que os números correctos a controlen

Os números que dá son os que pode cambiar. Algúns hábitos fan que os cambios posteriores se comporten ben:

- **Cote o que importa para o traballo.** Se un burato ten que estar a 15 mm dunha aresta, acóteo desde esa aresta, non desde a orixe.
- **Defina por completo os esbozos.** Así un cambio move só o que debe (vexa [Definir por completo un esbozo](topic:relations-dimensions)).
- **Use relacións para a intención.** Igual en dous buratos significa que un diámetro controla os dous. En formas simétricas, poña a orixe na liña de centro, ou use Punto medio.
- **Debuxe sobre caras feitas por elementos.** Un esbozo sobre a cara final dunha extrusión móvese cando cambia a profundidade.
- **Use patróns en vez de copiar.** Un burato patrón oito veces ten un só diámetro que cambiar.

## Máis alá dos números soltos

- **Un número que controla varios:** use parámetros e ecuacións: [Controlar unha peza con parámetros](topic:parameters).
- **Varios tamaños dunha peza:** garde cada un como unha [configuración](topic:design-tables); gárdanse no ficheiro da peza.
- **Aritmética nunha caixa de número:** escriba `=40/2` ou `=width / 2`. Así se fai unha ecuación; vexa [Ecuacións en dobre sentido](topic:equations-two-way).
- **Unidades en polgadas:** a peza mostra milímetros. Nunha caixa de número con `=`, ou nun parámetro, `2in` convértese en 50,8.

Vexa [O que aínda non está construído](topic:not-built-yet).
