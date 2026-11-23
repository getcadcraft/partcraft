---
title: Verificar esta estrutura
summary: Os perfis de aço de uma estrutura soldada (um patim, um suporte, um pórtico de tubos e secções) são usados com o equipamento sobre os pés e os apoios no chão, e vê-se quanto de cada perfil e de cada soldadura é utilizado segundo AISC 360-16 ou EN 1993. Um auxiliar até que um engenheiro o tenha revisto.
keywords: estrutura, estrutura soldada, patim, patim de bomba, perfil estrutural, soldadura, soldaduras, verificar, AISC 360, EN 1993, utilização, apoio, equipamento, carga, secção oca, HSS, RHS, CHS, engenheiro
from: 032e34ee
---

{{ui:Verificar esta estrutura}} toma os perfis de aço retos de uma estrutura soldada, monta a estrutura a partir deles, resolve-a sob o peso do aço e do equipamento que lhe põe em cima, e testa cada perfil e cada soldadura onde os perfis se encontram. Uma execução, uma tabela.

:::warning
É um **auxiliar até que um engenheiro o tenha revisto**. Não é um selo, e uma aprovação não é um projeto. Usa as linhas médias dos perfis tal como desenhadas, trata cada junta como soldada em todo o contorno da secção, tira a perna do cordão da parede da secção (até 8 mm) a não ser que a defina, e não verifica parafusos, chapas, chapas de base, ancoragens, esmagamento, corte em bloco, fadiga nem içamento.
:::

## Executar

1. Desenhe os perfis com {{ui:Perfil estrutural}} (as secções vêm da tabela de secções).
2. Abra {{ui:Vistas}} › {{ui:Verificar esta estrutura}}. Indique onde a estrutura assenta (um **apoio** em cada pé: articulado, fixo ou de rolo; {{ui:Apoios articulados nos pés}} põe um em cada extremidade de perfil mais baixa) e o que assenta nela (**equipamento**: massa, centro de gravidade, os pontos onde é aparafusado, e um empuxo horizontal opcional).
3. Escolha o código: **ASCE 7 + AISC 360-16** ou **EN 1990 + EN 1993**. Defina a qualidade do aço e, para AISC, a resistência do metal de adição (482,6 MPa é E70).
4. Prima {{ui:Verificar}}. {{ui:Guardar o relatório em CSV}} escreve cada tabela, com a linha de "não revisto" em primeiro lugar.

A estrutura é lida em milímetros, com o eixo vertical da peça para cima. Os pontos de apoio e de equipamento escrevem-se como x y z no mesmo referencial, sendo z a altura.

A extremidade de um perfil que cai a meio de outro perfil divide-o aí, tal como um pé ou um ponto de aparafusamento sobre a linha de um perfil. Um peso é repartido pelos pontos de aparafusamento como corpo rígido; um centro de gravidade fora dos pés, ou uma força de içamento num pé, é indicado, nunca escondido.

## O que obtém

- O item mais utilizado e se alguma coisa falha. Os itens que a verificação não consegue julgar (uma secção que não está na tabela, um aço sem fator no código) são contados e nomeados, nunca contados como aprovados.
- Uma linha por perfil e por grupo de soldaduras: quanto é utilizado, a verificação determinante e a cláusula, e a combinação de cargas que a governou.
- As mesmas tabelas no relatório.

## O que é verificado

Secções ocas (RHS, SHS, CHS, tubo) e secções em I quanto a tração, compressão, flexão, corte e a sua interação; soldaduras de cordão e de penetração total pelo método vetorial elástico. Paredes compactas só em flexão, para secções ocas; paredes esbeltas são indicadas como não verificadas. Algumas constantes foram escritas a partir das normas e ainda não foram comparadas com um exemplar impresso; o relatório indica cada fonte.

Ver [Estruturas de perfis de aço](topic:structural-members) para desenhar os perfis e a sua lista de corte.
