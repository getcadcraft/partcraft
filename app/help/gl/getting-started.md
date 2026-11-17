---
title: Primeiros pasos con PartCraft
summary: O que PartCraft fai hoxe, o que necesita o seu navegador e unha primeira peza en dez minutos, desde o esbozo ata o ficheiro gardado.
keywords: primeiros pasos, primeira execución, inicio rápido, introdución, titorial, primeira peza, placa, paramétrico, modelador de pezas
from: 7d43283f
---

PartCraft é a aplicación paramétrica de pezas e conxuntos da familia CadCraft. Debuxa un esbozo 2D, átao con relacións e cotas, convérteo nun sólido con elementos como extrusión, revolución e burato, e cambia calquera número máis tarde: a peza reconstrúese desde o seu historial. Logo as pezas vanse aos conxuntos, onde as unións as colocan e lle permiten comprobar o movemento.

O que fai esta versión:

| Función | Que obtén |
|---|---|
| Esbozos | Liñas, rectángulos, círculos, arcos, puntos e liñas de eixo, con relacións e cotas, e un estado en tempo real: con infradefinido, totalmente definido ou sobredefinido |
| Elementos sólidos | Extrusión, corte, revolución, corte por revolución, buratos simples e con rebaixo, patróns lineais e circulares, espello, redondeos e chafráns en arestas rectas entre caras planas, e cascas e desmoldeos en caras planas. Varridos, lofts e os demais elementos que necesitan un núcleo exacto aínda non están implementados nesta versión: ver [O que aínda non está implementado](topic:not-built-yet) |
| Historial | Edite os números de calquera elemento, supriméo, retroceda, reordene e elimine, con desfacer |
| Conxuntos | Pezas unidas por unións rixidas, de revolución e de corredoiras, unha comprobación de interferencias e unha comprobación de movemento |
| Debuxos | Unha folla A3 con tres vistas, unha isométrica, unha sección, unha vista de detalle, dimensións xerais, datums, marcos de control de elementos e símbolos de acabado superficial, exportados como PDF |
| Ficheiros | Os seus propios ficheiros de peza e conxunto; saída en STL, 3MF, STEP exacto, DXF e PDF |

Todo funciona no seu navegador, no seu ordenador. **Non se envía nada.** Ver [Ficheiros: abrir, gardar e exportar](topic:files) para saber onde van os ficheiros.

## O que necesita

- Un Chrome, Edge, Firefox ou Safari actual con **WebGL** (gráficos 3D) e **WebAssembly** activados. Ámbolos dous están activados por defecto. A xeometría sólida constrúese cun núcleo de malla en WebAssembly que se carga coa aplicación: ver [O núcleo de malla](topic:solid-kernels).
- O máis cómodo é un rato. Un trackpad funciona, e as pantallas táctiles sirven para ver e esbozar de xeito simple: ver [Trackpad, tacto e pantallas pequenas](topic:trackpad-and-touch).
- Unha pantalla de polo menos 1280 píxeles de ancho mostra toda a barra de ferramentas nunha soa fila. As xanelas máis estreitas desprazan a barra de ferramentas de lado; nun teléfono os paneis ábrense como follas desde unha barra inferior.

Máis sobre navegadores: [Navegadores e ordenadores](common:browsers).

:::note
PartCraft funciona no navegador e, no escritorio, dentro de CadCraft Studio. O gardado na nube aínda non está dispoñible: abre as pezas desde o seu ordenador e gárdaas de volta nel como ficheiros.
:::

## Abrir PartCraft

1. Abra PartCraft.
2. Agarde mentres a pantalla diga «Cargando o núcleo sólido…». Isto leva un momento a primeira vez.
3. Ve unha vista 3D baleira con tres planos base, o historial á esquerda («Peza1», despois Plano de alzado, Plano de planta, Plano de perfil) e unha caixa na vista titulada «Comezar unha peza».
4. A etiqueta preto do extremo dereito da barra de estado di «Núcleo de malla»: PartCraft constrúe todas as pezas co núcleo de malla nesta versión, polo que as caras redondas son facetas planas. Pode comezar a modelar de inmediato.

Se a vista indica que o navegador non pode mostrar 3D, ou que o núcleo non se cargou, ver [Resolución de problemas](topic:troubleshooting#the-app-does-not-start).

## A súa primeira peza: unha placa cun burato

Fará unha placa de 60 × 40 mm, de 10 mm de grosor, cun burato pasante de 6 mm. As unidades son milímetros.

### Esbozar o contorno

1. Prema **Plano de alzado** no historial da esquerda. O plano realzase na vista.
2. Escolla {{ui:Esbozo}} na barra de ferramentas, ou prema {{key:S}}. A vista xírase para mirar directamente ao plano, e a ferramenta Liña queda activa.
3. Prema {{key:R}} para a ferramenta Rectángulo.
4. Mova o punteiro sobre a orixe (o pequeno círculo vermello con cruz). Un pequeno cadrado indica que encaixa. Prema.
5. Mova cara arriba e cara á dereita e prema de novo. Ten un rectángulo. As súas liñas son azuis: azul significa que aínda poden moverse.

### Dar-lle tamaños

1. Prema {{key:D}} para a ferramenta Cota.
2. Prema a liña superior, logo prema un pouco por enriba. Abrese unha caixa numérica coa lonxitude actual.
3. Escriba `60` e prema {{key:Enter}}. O rectángulo cambia a 60 mm de ancho.
4. Prema a liña esquerda, logo prema un pouco á esquerda dela. Escriba `40` e prema {{key:Enter}}.

A etiqueta na parte superior esquerda da vista di agora **Totalmente definido** e as liñas pasan a tinta (negro no tema Papel, claro no tema Modelo). Todos os puntos e tamaños quedan fixos.

:::tip
Se comezou o rectángulo lonxe da orixe, a etiqueta segue dicindo «Infradefinido · 2 graos de liberdade». Prema {{key:S}} para Seleccionar, prema un canto, {{key:Shift}}+clic na orixe, e logo escolla {{ui:• Coincidente}} no panel da dereita.
:::

### Extruílo

1. Escolla {{ui:Saír}} na barra de ferramentas, ou prema {{key:Esc}} ata que o esbozo se peche (normalmente dúas veces).
2. Escolla {{ui:Extruír}}. Aparece un sólido de 10 mm. «Extrusión1» engádese ao historial, con «Esbozo1» sangrado debaixo.
3. O panel da dereita mostra os axustes da extrusión. Para cambiar o grosor, escriba un número novo en **Profundidade (mm)** e prema {{key:Enter}} ou {{key:Tab}}. A peza reconstrúese de inmediato.

### Engadir o burato

1. Prema a cara plana grande na fronte da placa (o extremo da extrusión). Toda a cara realzase e o panel da dereita di **Cara**.
2. Escolla {{ui:Esbozo sobre esta cara}} no panel da dereita.
3. Prema {{key:P}} para a ferramenta Punto e prema preto do centro da cara.
4. Escolla {{ui:Saír}}.
5. Escolla {{ui:Burato}}. Un burato de 6 mm atravesa a placa. Cambie o **Diámetro (mm)** no panel da dereita se o desexa.

A caixa **Peza** na parte inferior esquerda mostra agora un volume, unha superficie, o tamaño (60 × 40 × 10 mm) e «Buratos pasantes: 1».

### Gardar

1. Prema {{key:Mod+S}} ou escolla {{ui:Gardar}}.
2. O seu navegador descarga `Part1.partcraft.json` na súa carpeta de descargas. O ficheiro contén todo o historial: ábrao de novo con {{ui:Abrir}} para seguir editando.

Para cambiar o nome da peza primeiro, prema un espazo baleiro na vista para que non se seleccione nada e escriba un **Nome** novo no panel da dereita.

## Onde seguir

- [Debuxe o seu primeiro esbozo](topic:sketch-basics) e [Defina totalmente un esbozo](topic:relations-dimensions) explican o esbozador en detalle.
- [Cambie unha peza a través do seu historial](topic:edit-history) mostra como editar o que construíu.
- [Redondear, biselar e ocar](topic:fillet-chamfer-shell) e [Faga un debuxo](topic:drawing-pdf) rematan a peza. [O que aínda non está implementado](topic:not-built-yet) enumera o que esta versión non fai, como varridos e lofts.
- [Vén doutro modelador paramétrico](topic:coming-from) enumera os hábitos que aquí funcionan de xeito distinto.
- [Teclas e rato](topic:keyboard) é a lista completa de atallos.
- [Usar esta axuda](common:help).
