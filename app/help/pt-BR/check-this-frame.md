---
title: Verificar esta estrutura
summary: Pegue os perfis de aço de uma peça soldada (um skid, um suporte, uma estrutura de tubos e seções), apoie o equipamento sobre os pés e os apoios no piso, e veja quanto de cada perfil e de cada solda é utilizado segundo a AISC 360-16 ou a EN 1993. Um auxílio até que um engenheiro o revise.
keywords: estrutura, peça soldada, skid, skid de bomba, perfil estrutural, solda, soldas, verificar, AISC 360, EN 1993, utilização, apoio, equipamento, carga, seção oca, HSS, RHS, CHS, engenheiro
from: 032e34ee
---

{{ui:Verificar esta estrutura}} pega os perfis de aço retos de uma peça soldada, monta uma estrutura com eles, resolve sob o peso do aço e do equipamento que você põe sobre ela, e testa cada perfil e cada solda onde os perfis se encontram. Uma execução, uma tabela.

:::warning
É um **auxílio até que um engenheiro o revise**. Não é um carimbo, e uma aprovação não é um projeto. Ele usa as linhas de centro dos perfis como desenhadas, trata cada junta como soldada em todo o contorno da seção, toma a perna do filete da parede da seção (até 8 mm) a menos que você defina, e não verifica parafusos, chapas, placas de base, chumbadores, esmagamento, cisalhamento em bloco, fadiga nem içamento.
:::

## Execute

1. Desenhe os perfis com {{ui:Perfil estrutural}} (as seções vêm da tabela de seções).
2. Abra {{ui:Vistas}} › {{ui:Verificar esta estrutura}}. Diga onde a estrutura está apoiada (um **apoio** em cada pé: articulado, engastado ou de rolete; {{ui:Apoios articulados nos pés}} coloca um em cada extremidade de perfil mais baixa) e o que está sobre ela (**equipamento**: massa, centro de gravidade, os pontos onde é parafusado e um empuxo horizontal opcional).
3. Escolha o código: **ASCE 7 + AISC 360-16** ou **EN 1990 + EN 1993**. Defina a classe do aço e, para a AISC, a resistência do metal de solda (482.6 MPa é E70).
4. Pressione {{ui:Verificar}}. {{ui:Salvar o relatório como CSV}} grava todas as tabelas, com a linha de não revisado primeiro.

A estrutura é lida em milímetros, com o eixo vertical da peça para cima. Os apoios e os pontos do equipamento são digitados como x y z no mesmo referencial, sendo z a altura.

A extremidade de um perfil que cai no meio de outro perfil o divide ali, assim como um pé ou um ponto de parafusamento sobre a linha de um perfil. Um peso é distribuído pelos pontos de parafusamento como corpo rígido; um centro de gravidade fora dos pés, ou uma força de levantamento em um pé, é informado, nunca ocultado.

## O que você recebe

- O item mais utilizado e se algo falha. Itens que a verificação não consegue julgar (uma seção que não está na tabela, um aço sem fator no código) são contados e nomeados, nunca contados como aprovados.
- Uma linha por perfil e por grupo de solda: quanto é utilizado, a verificação determinante e a cláusula, e a combinação de carga que governou.
- As mesmas tabelas no relatório.

## O que é verificado

Seções ocas (RHS, SHS, CHS, tubo) e seções I para tração, compressão, flexão, cisalhamento e a interação entre eles; soldas de filete e de penetração total pelo método vetorial elástico. Paredes compactas apenas em flexão, para seções ocas; paredes esbeltas são informadas como não verificadas. Algumas constantes foram tiradas das normas e ainda não foram comparadas com uma cópia impressa; o relatório lista cada fonte.

Veja [Estruturas a partir de seções de aço](topic:structural-members) para desenhar os perfis e a sua lista de corte.
