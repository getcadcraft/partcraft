---
title: Ilustracións técnicas: arte de liñas, imaxes e follas
summary: Exporte calquera vista como arte de liñas vectorial (SVG ou PDF) con tres grosores de liña, liñas ocultas en trazos ou omitidas, superficies de corte con trama e recheos opcionais, ou como PNG; coloque varias vistas nunha folla.
keywords: ilustrar, arte de liñas, ilustración técnica, svg, pdf, png, liñas ocultas, silueta, trama, folla, exportar
from: 0e9bea63
---

{{ui:Exportar}} no grupo {{ui:Saída}} abre o diálogo de exportación:

- {{ui:Que}}: a escena tal como está agora, unha vista ou todas as vistas.
- {{ui:Como}}: **PDF** ou **SVG** (arte de liñas vectorial; ambos se xeran desde o mesmo debuxo), **PNG da arte de liñas**, ou un **PNG da imaxe da vista 3D** (ata 4096 píxeles de ancho), e o [ficheiro 3D interactivo](topic:illustrate-interactive).
- {{ui:Páxinas}}: unha vista por páxina, ou todas as vistas nunha folla co seu nome debaixo. {{ui:Papel}}: A4, A3, Letter ou Tabloid.
- {{ui:Liñas ocultas}}: en trazos ou omitidas. {{ui:Recheos}}: como se ve a vista, ningún, cores planas ou sombreado. {{ui:Debuxar tamén as arestas suaves}} engade liñas de detalle.

A arte de liñas ten tres grosores: contornos (siluetas, bordos abertos e cortes), arestas vivas e liñas de detalle. As caras cortadas dunha sección ou dun recorte en caixa levan trama. As vistas despezadas levan trazos de cadea desde o lugar onde está cada peza; tamén se debuxan os globos, as anotacións, a lista de pezas e a lupa.

A arte de liñas calcúlase a partir das formas das pezas polo método de malla (o mesmo que usa a folla de debuxo de PartCraft sen o núcleo exacto), así que as caras curvas se debuxan por facetas, tal como as conserva o modelo.

## Aínda non dispoñible

- As imaxes con calidade de trazador de camiños (o renderizador de ModelCraft) non se ofrecen aquí; as imaxes PNG son o aspecto propio da vista 3D.
