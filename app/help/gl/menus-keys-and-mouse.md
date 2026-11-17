---
title: Menús, teclas e rato
summary: Escolla un estilo de menú que coincida coa forma en que xa traballa, dálle a calquera comando a súa propia tecla, mova os comandos entre as lapelas da cinta e fixe o que fan a roda e cada botón do rato na vista 3D.
keywords: estilo de menú, menús, cinta, barra de ferramentas, árbore de características, atallos de teclado, teclas de acceso rápido, teclas, personalizar, cambiar tecla, asignar, rato, roda, invertir, sentido do zoom, botón central, orbitar, desprazar, exportar, importar, cambio, familiar
from: 8445b06c
---

Os comandos de PartCraft son os mesmos por onde se chegue a eles. Un **estilo de menú** só decide onde se sitúan na pantalla, como se chaman alí e que teclas os executan. Escóllao en {{ui:Settings}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menus, keys and mouse}}; o cambio é inmediato, e este navegador lémbrao.

## Os dous estilos

| Estilo | O que obtén |
|---|---|
| {{ui:PartCraft}} | A barra de ferramentas propia de PartCraft: o selector de espazos de traballo, Ficheiro, Esbozo, Elementos, Debuxo, Montaxe, Editar e Vista. Teclas {{key:S}} esbozo, {{key:F}} encaixar, {{key:M}} medir, {{key:X}} vista de sección. O punto de partida. |
| {{ui:Feature tree}} | Unha cinta disposta como a dos programas de CAD mecánico baseado en elementos: un menú {{ui:File}} (con todas as exportacións), botóns rápidos, e as lapelas {{ui:Features}}, {{ui:Sketch}}, {{ui:Surfaces}}, {{ui:Evaluate}}, {{ui:Drawing}}, {{ui:Assembly}}, {{ui:Studies}} (os espazos de traballo e as súas ferramentas), {{ui:Illustrate}} (as ferramentas manuais do espazo Ilustración; as súas ferramentas pasan primeiro a Ilustración) e {{ui:View}}. {{ui:Features}} comeza con {{ui:Sketch}}, xa que unha peza comeza cun esbozo. Teclas extra: {{key:E}} extrusión, {{key:H}} burato, e {{key:V}} seguido dunha letra para unha vista: {{key:V}} {{key:F}} fronte, {{key:V}} {{key:B}} atrás, {{key:V}} {{key:T}} superior, {{key:V}} {{key:O}} inferior, {{key:V}} {{key:R}} dereita, {{key:V}} {{key:L}} esquerda, {{key:V}} {{key:I}} isométrica, {{key:V}} {{key:N}} normal a. Na vista 3D o botón central orbita, {{key:Shift}} e o botón central desprazan, o botón dereito desprazta e o botón esquerdo só escolle. |

Todos os estilos conservan {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} e {{key:Mod+A}}.

Unha ferramenta doutro espazo de traballo cambia primeiro a ese espazo; unha ferramenta de Deseño escollida noutro espazo volve primeiro a Deseño. As ferramentas de esbozo esperan por un esbozo, as de debuxo pola folla de debuxo, as de montaxe por unha montaxe: a barra de estado indica o que hai que facer primeiro.

:::tip
Dentro dun esbozo, na folla de debuxo, nunha montaxe e nos outros espazos de traballo, as letras manteñen o seu propio significado alí ({{key:L}} liña, {{key:R}} rectángulo, {{key:J}} unión …) en todos os estilos. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as frechas manteñen sempre o seu. Unha tecla da disposición propia de PartCraft que o seu estilo asignou a outro comando non fai nada, e a barra de estado indica onde foi o seu comando.
:::

## Facelo a súa maneira

1. Escolla o estilo máis próximo ao que quere, despois faga clic en {{ui:Customize…}}.
2. En {{ui:Keys and menus}}, busque un comando (o cadro de busca axuda). {{ui:Add a key}} e prema a tecla, ou dúas teclas seguidas. Faga clic nunha tecla para quitala.
3. Coa cinta, {{ui:Where it sits}} move o comando a outra lapela e panel, ao menú {{ui:File}}, ou a {{ui:Keys only}}.
4. En {{ui:Mouse}}, fixe a roda, os botóns que desprazan un esbozo, e o que fai cada botón na vista 3D.
5. Dálle un nome e faga clic en {{ui:Save}}.

Gardar un estilo integrado crea a súa propia copia ("A miña árbore de características"); o integrado nunca cambia. Unha tecla asignada a dous comandos, ou unha que impediría escribir unha tecla de dúas letras, aparece en vermello e hai que corrixila antes de poder gardar.

## Rato

- **Roda do rato**: {{ui:Scroll up zooms in}} (o punto de partida) ou {{ui:Scroll up zooms out}}, e a velocidade. Un pellizco no panel táctil sempre fai zoom no sentido en que se moven os dedos.
- **Desprazar o esbozo con**: o botón central, o botón dereito, ou ambos. Un clic dereito nun esbozo segue terminando o paso da ferramenta.
- **Arrastrar na vista 3D**: {{ui:Each view's own}} mantén a configuración de PartCraft ({{ui:Settings}} › {{ui:PartCraft}}: o esquerdo orbita, ou o central orbita). Ou fixe cada botón para orbitar, desprazar, facer zoom ou nada; {{key:Shift}} co botón de orbitar desprazta. Un clic sen arrastrar segue escollendo.

## Lévao con vostede

{{ui:Export}} garda o estilo en uso nun pequeno ficheiro `.ccinput.json`; {{ui:Import…}} engade un, desde outro ordenador ou dun compañeiro. Un ficheiro importado só pode apuntar aos comandos propios de PartCraft: o resto do ficheiro déixase fóra e conta na barra de estado. {{ui:Delete this style}} elimina un dos seus.

:::note
Estes axustes quedan neste navegador. {{ui:Use this style in every app}} debaixo das tarxetas de estilo fai que cada aplicación se abra no seu estilo equivalente (a súa propia barra, ou unha cinta), cos cambios que fixo en cada unha. Escoller outro estilo nunha aplicación cambia só esa aplicación.
:::

Relacionado: [Teclas e rato](topic:keyboard) · [Configuración de PartCraft](topic:settings) · [Vindo doutro modelador paramétrico](topic:coming-from)
