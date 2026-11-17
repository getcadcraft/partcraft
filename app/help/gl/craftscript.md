---
title: Escribir e executar scripts (espazo de traballo Script)
summary: O espazo de traballo Script paso a paso: escribir un script de CraftScript ou Lua, executalo con F5, ler a consola, gardar resultados nas variables para o seguinte script, amosar mallas, campos e trazados, parar unha execución e gardar scripts coa peza.
keywords: script, scripting, script mentres se modela, separar, segunda pantalla, segundo monitor, param, params, parámetros en scripts, CraftScript, Lua, código, programa, editor, consola, REPL, liña de comandos, executar, F5, executar selección, parar, variables, espazo de traballo, trazado, campo, malla, lenda, subpantalla, análise, automatización, matriz, numérico
from: d0003e89
---

**Versión preliminar.** A creación de scripts é nova en PartCraft 0.3 e é unha versión preliminar: a linguaxe, a biblioteca e o modo de gardar os scripts poden cambiar, e os scripts escritos agora poden necesitar pequenas modificacións máis adiante. Díganos o que falla.

O espazo de traballo Script executa os seus propios cálculos xunto á peza: sumas pequenas, análises completas ou os scripts da [biblioteca de análise](topic:craftscript-library). Os scripts escríbense en **CraftScript** (unha linguaxe matricial moi parecida a MATLAB, ver [A linguaxe CraftScript](topic:craftscript-language)) ou en **Lua** (ver [Scripts en Lua](topic:craftscript-lua)) ou en **Python** (ver [Scripts en Python](topic:craftscript-python)).

Escolla **Script** na caixa **Espazo de traballo** á esquerda da barra de ferramentas. A peza non cambia. O panel dereito convértese no panel de scripts (máis ancho do habitual; arrastre a súa beira para cambialo, ou léveo a unha segunda pantalla co seu menú {{ui:⋯}}, ver [Organizar os paneis](common:arrange-panels)).

## Script mentres modela

Non ten que saír do espazo de traballo Deseño para escribir un script. En Deseño, a lapela {{ui:Script}} do panel dereito contén o mesmo editor, consola, variables e biblioteca, cos mesmos scripts. A árbore de características e a vista seguen funcionando: prema unha característica para seleccionala, faga dobre clic nun esbozo para editalo, xire a vista, e despois volva á lapela {{ui:Script}} e prema {{key:F5}}.

O que un script **amosa** (mallas, campos, trazados, táboas) non se debuxa sobre o seu modelo en Deseño: a consola informao, e o espazo de traballo Script ten todo cando cambia a el.

{{ui:Separar}}, xunto a {{ui:Executar}}, move todo o panel a unha xanela propia, por exemplo nunha segunda pantalla, para que o editor e a vista completa queden lado a lado. {{ui:Devolver}} volve acoplalo. Ver [Organizar os paneis](common:arrange-panels).

## Execute o seu primeiro script

1. Escriba no editor, por exemplo:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'Unha sinusoide')
   disp(max(y))
   ```

2. Prema {{key:F5}} (ou {{ui:Executar}}). A consola debaixo do editor mostra o que imprimiu o script e «Feito en … s». O trazado aparece nas **subpantallas** ao longo da parte inferior da vista 3D.
3. Unha liña sen punto e coma imprime o seu valor, como en MATLAB: `a = 3` imprime `a = 3`; `a = 3;` non imprime nada.
4. Para executar só unha parte dun script, seleccione as liñas e prema {{key:Mod+Enter}} ({{ui:Selección}}). Sen nada seleccionado, executa a liña onde está o cursor.
5. A liña da parte inferior da consola (despois de `>>`) executa unha instrución ao premer {{key:Enter}}. {{key:Up}} e {{key:Down}} traen de volta as liñas anteriores.

## Buscar, pregar e completar

- **Buscar e substituír.** Prema {{key:Mod+F}} (ou {{key:Mod+H}} para substituír tamén). Ábrese unha barra enriba do código: escriba o que buscar; as coincidencias iluminanse e o contador indica onde está. Os botóns xunto á caixa distinguen entre maiúsculas e minúsculas (**Aa**), buscan só palabras completas (**W**) e usan unha expresión regular (**.\***; no substituto, `$1` repón o que coincidiu co primeiro grupo). {{ui:Substituír}} substitúe a coincidencia actual, {{ui:Todas}} substitúe todas as coincidencias como un só paso de {{key:Mod+Z}}.
- **Pregamento.** Prema o ▾ xunto a un número de liña, ou prema {{key:Mod+Shift+[}} co cursor nunha liña `function`, `if`, `for`, `while`, `switch` ou `try` (en Lua: `function`, `do`, `if`, `repeat`), para ocultar as súas liñas interiores; a liña indica cantas son. ▸ ou {{key:Mod+Shift+]}} volve abrila. O pregamento só oculta liñas: Executar, Gardar, copiar e os números de liña seguen contando todas, e escribir nunha liña pregada abre primeiro esa liña.
- **Completados.** Escriba dúas letras dun nome, ou prema {{key:Mod+Space}}: unha lista mostra as variables que ten, as funcións da linguaxe (cos seus argumentos), as palabras clave e os nomes xa presentes no script. Escolla coas flechas e prema {{key:Enter}} ou {{key:Tab}}.

## Cando algo falla

- Un erro indica o problema e a súa liña: a liña márcase en vermello no editor, e **Liña n** na consola leva ata alí.
- Un bucle que non acaba: prema {{ui:Parar}} (barra de ferramentas ou panel). O script para de inmediato; as variables conservan os valores que tiñan antes desa execución.
- Cada execución tamén ten un límite de pasos (2 mil millóns de pasos por defecto; cámbieo en **Opcións de execución** do panel). Unha execución que o supere para cunha mensaxe.

## As variables pasan de script a script

Cada variable de nivel superior que fai un script acaba na lapela **Variables** (nome, tipo, tamaño, valor mínimo e máximo) e queda alí para o seguinte script, en calquera das dúas linguaxes. Así é como un script malla, o seguinte resolve e un terceiro traza.

- Prema unha variable para amosala: mallas, campos e modelos na vista 3D, arrays como táboa (e un trazado de liña para un vector ou un mapa de cores para unha matriz) nas subpantallas.
- {{ui:Gardar como JSON}}, {{ui:Gardar como CSV}} (unha táboa de números) e {{ui:Gardar como HDF5}} descárganea; {{ui:Eliminar}} elimínaa; {{ui:Limpar todo}} vacía o espazo de traballo.
- Marque **Gardar as variables coa peza** para conservalas no ficheiro da peza (ata 32 MB; as máis grandes quedan só para esta visita). Ao abrir unha peza así, o panel ofrece cargalas.

## Mallas, campos e trazados

- `show(m)` debuxa unha malla; `show(f)` colorea un campo sobre a súa malla cunha lenda. A lista **Amosados** na parte superior esquerda da vista oculta ({{ui:eye}}) ou quita cada elemento, e oculta ou amosa a propia peza. Debaixo da lenda, escriba un intervalo (**De**, **a**) ou prema {{ui:Auto}}; un campo vectorial ou de tensións tamén ofrece que compoñente amosar.
- `show(f, 'deform', u, 'scale', 50)` debuxa a malla desprazada por un campo de desprazamentos `u`, ampliada 50 veces (sen `scale`, uns 8 % do tamaño do modelo).
- Prema unha malla amosada: o nó máis próximo, o elemento e os valores do campo aparecen nas subpantallas (**Seleccionado**).
- `plot`, `imagesc` e `table` poñen nas subpantallas un trazado de liña, un mapa de cores dun array 2-D ou unha táboa. Un trazado co mesmo `'id'` (ou título) que un anterior substitúeo, así que un bucle pode actualizar un só trazado de converxencia; `'append', true` engádelle unha curva. {{ui:Limpar}} vacía as subpantallas; a frecha pregaas.
- Con dous ou máis trazados, {{ui:Lado a lado}} amósaos todos a un tempo (os seis máis novos); ao premer na lapela dunha táboa ou dunha imaxe volve amosarse só esa.
- Cada trazado ten debaixo {{ui:PNG}}, {{ui:SVG}} e {{ui:CSV}}. PNG e SVG imprimen o trazado sobre fondo branco coas cores do papel, sexa cal sexa o tema (PNG de 1600 × 1000 píxeles; SVG escálase sen perder nitidez); CSV garda os seus números con todas as cifras: unha columna de x e unha columna por curva cando as curvas comparten x, e doutro xeito unha fila por punto co nome da curva.
- {{key:F}} ou {{ui:Axustar}} axusta a vista ao que se amosa.

## Ficheiros

- {{ui:Abrir}} no grupo Script (ou solte ficheiros na vista ou no panel): os ficheiros `.craft`, `.lua` e `.py` ábrense como scripts novos (non se executan); os ficheiros de datos (STL, OBJ, CSV, JSON, NPY, HDF5) cárganse nas variables co nome do ficheiro.
- {{ui:Gardar}} no grupo Script descarga o script actual como ficheiro.
- {{ui:Novo}} no grupo Script (ou {{ui:+}} xunto ás lapelas) inicia outro script. Faga dobre clic nunha lapela para cambiarlle o nome; o seu {{ui:×}} elimina a (pódese desfacer iso).

## Ler os parámetros da peza

Un script le os parámetros da peza (ver [Controlar unha peza con parámetros](topic:parameters)) polo nome:

```
w = param('width');     % o valor dun parámetro, en mm (ou graos, ou un número simple)
p = params();           % todos, como estrutura: p.width, p.height
```

En Lua e Python son `cs.param('width')` e `cs.params()`. Os scripts só len parámetros: cámbieos na lapela {{ui:Parámetros}}. Debaixo da lapela do script, unha liña enumera os parámetros que le con `param('…')` e marca os que a peza non ten; a lapela {{ui:Parámetros}} enumera o script debaixo de cada un. Un nome montado durante a execución, como `param(name)`, non se enumera.

## Os scripts gárdanse na peza

Cada script das lapelas gárdase na peza, así que {{ui:Gardar}} no grupo Ficheiro gárdaos con ela e os cambios sobre eles pódense desfacer. Abrir unha peza **nunca executa os seus scripts**: a consola indica cantos leva, e só se executan cando prema Executar. Unha peza doutra persoa pode conter calquera script: léao antes de executalo. Os scripts execútanse en segundo plano neste ordenador sen acceso á rede e non poden tocar a páxina.

## Relacionado

- [A linguaxe CraftScript](topic:craftscript-language)
- [Scripts en Lua](topic:craftscript-lua)
- [Scripts en Python](topic:craftscript-python)
- [A biblioteca de análise](topic:craftscript-library)
- [Escribir unha análise propia](topic:craftscript-own-analysis)
