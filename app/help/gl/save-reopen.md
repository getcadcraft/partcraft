---
title: Gardar, reabrir e seguir traballando
summary: Garda pezas e conxuntos no teu ordenador, dálles nome, reábreos con botón, tecla ou arrastrando, conserva versións e evita perder traballo nunha lapela do navegador.
keywords: gardar, abrir, reabrir, cargar, descargar, versións, copia de seguranza, renomear, nome de ficheiro, traballo perdido, saír do sitio, partcraft.json, partcraft-asm.json, nova peza
from: c18a5abc
---

PartCraft non garda nada entre visitas. A túa peza vive na lapela do navegador ata que a gardes como ficheiro, e volve cando abres ese ficheiro.

## Gardar unha peza

1. Dálle nome á peza: fai clic en espazo baleiro da vista para que non haxa nada seleccionado, despois escribe o **Nome** no panel da dereita e preme {{key:Enter}}. O título do historial cambia para coincidir.
2. Preme {{key:Mod+S}} ou escolle {{ui:Gardar}}.
3. O navegador descarga `<nome>.partcraft.json`. A barra de estado di: "Gardado Bracket.partcraft.json (o historial completo; reábrilo aquí para seguir editando)."

Se hai un esbozo aberto, gardar pecha antes o esbozo.

O ficheiro conserva todos os esbozos, relacións, cotas e elementos, ademais dos elementos suprimidos, a posición da barra de retroceso, a configuración da folla de debuxo e as notas GD&T, e o texto completo de calquera sólido STEP importado. A lista de desfacer non se garda.

## Gardar un conxunto

Nun conxunto, o mesmo {{ui:Gardar}} ou {{key:Mod+S}} descarga `<nome do conxunto>.partcraft-asm.json`. Cada peza se garda dentro del: non precisas os ficheiros de peza separados para reabrilo.

Mentres editas unha peza desde dentro dun conxunto, {{key:Mod+S}} garda esa peza por separado como `.partcraft.json`. Escolle primeiro {{ui:Volver}}, despois garda, para gardar o conxunto completo.

## Reabrir

Calquera destas opcións:

- escolle {{ui:Abrir}} ou preme {{key:Mod+O}}, e despois selecciona o ficheiro;
- arrastra o ficheiro desde {{pick:mac=Finder|windows=Explorador de ficheiros|linux=o teu xestor de ficheiros}} ata a vista 3D (aparece "Solte unha peza de PartCraft para abrila").

PartCraft distingue as pezas dos conxuntos polo que hai dentro, así que ambos se abren do mesmo xeito. Un ficheiro `.step` ou `.stp` ábrese como sólido importado: ver [Abrir un ficheiro STEP e construír sobre el](topic:import-step). A barra de estado confirma: "Aberto Bracket.partcraft.json: 7 elementos." ou "Aberto Hinge.partcraft-asm.json: 3 pezas, 2 unións."

Se a peza na pantalla ten cambios sen gardar, PartCraft pregunta primeiro: {{ui:Cancelar}}, {{ui:Descartar cambios}} ou {{ui:Gardar primeiro}}.

:::warning
Pecha un conxunto ({{ui:Pechar}}) antes de abrir un ficheiro de peza. Se abres unha peza mentres hai un conxunto na pantalla, a peza cárgase detrás do conxunto e só a verás ao pechar o conxunto. Abrir un ficheiro de conxunto tamén substitúe un conxunto sen gardar sen preguntar, así que gárdao primeiro.
:::

## Comezar de novo

{{ui:Novo}} inicia unha "Part1" baleira. Pregunta antes se hai cambios sen gardar, e pecha un conxunto aberto (preguntando se non está gardado).

## Conservar versións

Cada gardado é unha nova descarga, así que podes conservar versións simplemente conservando os ficheiros:

- Pon unha versión ou unha data no nome antes de gardar: "Bracket rev B".
- O navegador pode engadir " (1)", " (2)" cando xa hai un ficheiro co mesmo nome na cartafol de descargas. O máis recente é o de número máis alto, ou mira a data en {{pick:mac=Finder|windows=Explorador de ficheiros|linux=o teu xestor de ficheiros}}.
- Move os ficheiros rematados da cartafol de descargas á cartafol do proxecto.

Consulta [Onde van os teus ficheiros](common:your-files) para saber onde van as descargas en cada sistema.

## Non perder traballo

- Garda antes de pechar a lapela, de recargar ou de deixar o ordenador durmido durante moito tempo. O navegador pregunta "Saír do sitio?" se tentas pechar con cambios sen gardar, pero unha caída ou un portátil pechado non dan aviso.
- As ventás privadas ou de incógnito funcionan, pero non hai outra diferenza: o ficheiro segue sendo a única copia.
- O gardado na nube e o historial de versións aínda non están dispoñibles.
