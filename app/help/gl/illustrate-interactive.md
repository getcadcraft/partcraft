---
title: O ficheiro 3D interactivo
summary: Exporte o manual como un único ficheiro HTML que se abre sen conexión en calquera navegador, sen instalación, conta nin seguimento: o modelo, as vistas, a lista de pezas (ligada en ambos sentidos), a animación e a lupa.
keywords: ilustrar, interactivo, ficheiro 3d, html, sen conexión, visor, compartir, cliente, taller
from: 4de4e074
---

{{ui:Exportar}}, despois {{ui:Como}} {{ui:Ficheiro 3D interactivo (HTML, ábrese sen conexión)}}, garda un único ficheiro `.html`. Envíeo por correo electrónico, póñao nun lapis USB ou nunha cartafol compartida: ábrese en calquera navegador con WebGL 2, nun ordenador, tableta ou teléfono.

No ficheiro:

- Arrastrar para xirar o modelo, arrastrar co botón dereito ou {{key:Shift}}+arrastrar para desprazar, roda ou pinzamento para ampliar.
- Prema unha vista na lista: a cámara vai até ela e as pezas adoptan as posicións, os aspectos, o corte e a lupa desa vista.
- Prema unha fila da lista de pezas para iluminar as súas pezas; prema unha peza para iluminar a súa fila.
- Cando o manual teña unha animación, unha barra debaixo do modelo a reproduce, a pausa e permite avanzar ou retroceder nela.

O ficheiro contén todo o que necesita (o modelo, o visor e three.js, baixo a súa licenza MIT) e prohibe todas as peticións: non pode chegar a internet, non ten conta nin seguimento.

O 3D interactivo dentro dun PDF non se ofrece: os navegadores e a maioría de lectores de PDF non o poden mostrar, e o lector que sí o pode mostrar ten esta función desactivada por defecto. O ficheiro HTML é a resposta interactiva.
