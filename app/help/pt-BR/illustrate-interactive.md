---
title: O arquivo 3D interativo
summary: Exporte o manual como um único arquivo HTML que abre offline em qualquer navegador, sem instalação, conta nem rastreamento: o modelo, as vistas, a lista de peças (ligada nos dois sentidos), a animação e a lupa.
keywords: ilustrar, interativo, arquivo 3d, html, offline, visualizador, compartilhar, cliente, chão de fábrica
from: 4de4e074
---

{{ui:Exportar}}, depois {{ui:Como}} {{ui:Arquivo 3D interativo (HTML, abre offline)}}, salva um arquivo `.html`. Envie por e-mail, coloque em um pen drive ou em uma pasta compartilhada: ele abre em qualquer navegador com WebGL 2, em computador, tablet ou celular.

No arquivo:

- Arraste para girar o modelo, arraste com o botão direito ou {{key:Shift}} + arraste para deslocar a vista (pan), use a roda ou pinça para dar zoom.
- Clique em uma vista na lista: a câmera vai até ali e as peças assumem as posições, aparências, cortes e lupa dessa vista.
- Clique em uma linha da lista de peças para destacar as suas peças; clique em uma peça para destacar a sua linha.
- Quando o manual tiver uma animação, uma barra abaixo do modelo a reproduz, pausa e permite percorrê-la.

O arquivo traz tudo o que precisa (o modelo, o visualizador e three.js, sob a licença MIT) e bloqueia todas as requisições: ele não acessa a internet, não tem conta nem rastreamento.

Um 3D interativo dentro de um PDF não é oferecido: os navegadores e a maioria dos leitores de PDF não o exibem, e o leitor que o exibe o mantém desligado por padrão. O arquivo HTML é a resposta interativa.
