---
title: Ilustrações técnicas: line art, imagens e folhas
summary: Exporte qualquer vista como line art vetorial (SVG ou PDF) com três espessuras de linha, linhas ocultas tracejadas ou omitidas, faces de corte com hachura e preenchimentos opcionais, ou como PNG; coloque várias vistas em uma folha.
keywords: ilustrar, line art, ilustração técnica, svg, pdf, png, linhas ocultas, silhueta, hachura, folha, exportar
from: 0e9bea63
---

{{ui:Exportar}} no grupo {{ui:Saída}} abre a caixa de exportação:

- {{ui:O quê}}: a cena como está agora, uma vista ou todas as vistas.
- {{ui:Como}}: **PDF** ou **SVG** (line art vetorial; os dois são gerados a partir do mesmo desenho), **PNG do line art**, ou uma **imagem PNG da vista 3D** (até 4096 pixels de largura), e o [arquivo 3D interativo](topic:illustrate-interactive).
- {{ui:Páginas}}: uma vista por página, ou todas as vistas em uma folha com o nome de cada uma embaixo. {{ui:Papel}}: A4, A3, Letter ou Tabloid.
- {{ui:Linhas ocultas}}: tracejadas ou omitidas. {{ui:Preenchimentos}}: como a vista aparece, nenhum, cores chapadas ou sombreado. {{ui:Também desenhar arestas suaves}} acrescenta linhas de detalhe.

O line art tem três espessuras: contornos (silhuetas, arestas abertas e contornos de corte), arestas vivas e linhas de detalhe. As faces de corte de um corte de seção ou de um recorte em caixa recebem hachura. Vistas explodidas recebem trilhas de linha de traço e ponto a partir de onde cada peça está; balões, anotações, a lista de peças e a lupa também são desenhados.

O line art é calculado a partir das formas das peças pelo método de malha (o mesmo que a folha de desenho do PartCraft usa sem o núcleo exato), então superfícies curvas são desenhadas pelas suas facetas, como o modelo as guarda.

## Ainda não implementado

- Imagens com a qualidade do traçador de caminhos (o renderizador do ModelCraft) não são oferecidas aqui; as imagens PNG são o próprio visual da vista 3D.
