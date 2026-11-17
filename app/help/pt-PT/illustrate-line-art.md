---
title: Ilustrações técnicas: desenho a traço, imagens e folhas
summary: Exportar qualquer vista como desenho vetorial a traço (SVG ou PDF) com três espessuras de linha, linhas ocultas a tracejado ou omitidas, faces de corte com trama e preenchimentos opcionais, ou como PNG; colocar várias vistas numa só folha.
keywords: ilustrar, desenho a traço, ilustração técnica, svg, pdf, png, linhas ocultas, silhueta, trama, folha, exportar
from: 0e9bea63
---

{{ui:Exportar}} no grupo {{ui:Saída}} abre a caixa de diálogo de exportação:

- {{ui:O quê}}: a cena tal como está neste momento, uma vista ou todas as vistas.
- {{ui:Como}}: **PDF** ou **SVG** (desenho vetorial a traço; ambos são gerados a partir do mesmo desenho), **PNG do desenho a traço**, ou **imagem PNG da vista 3D** (com até 4096 pixels de largura), e o [ficheiro 3D interativo](topic:illustrate-interactive).
- {{ui:Páginas}}: uma vista por página, ou todas as vistas numa só folha, com o nome por baixo. {{ui:Papel}}: A4, A3, Letter ou Tabloid.
- {{ui:Linhas ocultas}}: a tracejado ou omitidas. {{ui:Preenchimentos}}: como a vista aparece, nenhum, cores planas ou sombreado. {{ui:Desenhar também arestas suaves}} acrescenta linhas de detalhe.

O desenho a traço tem três espessuras: contornos (silhuetas, arestas abertas e contornos de corte), arestas vivas e linhas de detalhe. As faces de corte de um {{ui:Plano de corte}} ou de um corte em caixa são desenhadas com trama. As vistas explodidas recebem trajetos em traço e ponto desde onde cada peça está; os balões, as anotações, a lista de peças e a lupa também são desenhados.

O desenho a traço é calculado a partir da forma das peças pelo método de malha (o mesmo que a folha de desenho do PartCraft usa sem o núcleo exato), por isso as faces curvas são desenhadas pelas suas facetas, tal como o modelo as guarda.

## Ainda não implementado

- As imagens com a qualidade do path tracer (o renderizador do ModelCraft) não são oferecidas aqui; as imagens PNG têm o aspeto da própria vista 3D.
