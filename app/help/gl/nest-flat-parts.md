---
title: Encaixar pezas planas en follas
summary: Dispor pezas planas en placas ou nun rolo co menor desperdicio que PartCraft poida atopar, nunca máis preto que a separación que indique, e gardar a disposición como DXF para a láser, o plasma, o chorro de auga ou a fresadora.
keywords: encaixe, encaixar, folla, placa, rolo, láser, plasma, chorro de auga, fresadora, corte, aproveitamento, uso de material, recorte, desperdicio, separación, ancho de corte, fibra, dirección de laminado, dxf, patrón plano, contornos
from: 8dcce1a6
---

**O encaixe** coloca moitas pezas planas nunha folla de xeito que quede o mínimo de material sobrante. PartCraft coloca as pezas unha a unha, cada unha onde máis reduce a lonxitude usada da folla, proba varias ordes e xera o resultado en poucos segundos, e queda co mellor. As pezas poden encaixar nos furados das outras e no oco dunha L ou dunha U.

## Abrilo

- {{ui:Exportar}} › {{ui:Encaixar pezas planas en follas…}} abre a ferramenta coa superficie plana da peza ou, nun conxunto, coa superficie plana de cada peza de chapa, tantas como copias haxa.
- Nunha peza de chapa, {{ui:Estender}} e despois {{ui:Encaixar en follas…}} baixo a superficie plana.
- {{ui:Engadir contornos desde un DXF…}} engade como pezas cada contorno pechado dun ficheiro DXF: un debuxo de CadCraft gardado como DXF, ou un ficheiro do propio software da máquina de corte. Un contorno dentro doutro é un furado nel. As liñas e arcos que se unen extremo con extremo contan como un só contorno. Os ficheiros en polgadas, centímetros ou metros cámbianse a milímetros.

:::note
Estender a chapa precisa un núcleo xeométrico exacto (ver [Chapa metálica](topic:sheet-metal)). Os contornos dun ficheiro DXF sempre funcionan.
:::

## Configurar

Para cada peza indique **cantas** precisa e a súa **fibra**: {{ui:Calquera dirección}}, {{ui:Ao longo da folla (como se debuxa)}} para chapa cepillada ou laminada que debe ir nunha soa dirección, ou {{ui:Atravesando a folla}}.

Baixo **Follas**:

- **Stock**: {{ui:Placas}} dunha lonxitude e largura dadas (e cantas teña; 0 = as que sexan precisas), ou {{ui:Un rolo}} dunha largura dada, tan longo como sexa preciso.
- **Marxe de bordo** é a zona que se deixa libre en cada bordo da folla (para as mordazas, ou un bordo irregular).
- **Separación entre pezas** é a menor distancia entre dúas liñas de corte: polo menos o ancho de corte da máquina, máis o que necesite o material.
- **Xiros**: os ángulos aos que se pode xirar unha peza, cada 90° por defecto. Menos xiros vai máis rápido; máis xiros aproveitan mellor a folla.
- **Pode virarse a peza** permite colocar unha peza boca abaixo. Déixeo desactivado para a chapa: unha peza plana virada dobra no sentido contrario.

Prema {{ui:Encaixar}}. A vista previa mostra cada folla; os datos indican cantas placas (ou canto do rolo) se usaron e canto material ocupan as pezas. Nomease calquera peza que non cabe.

## Gardar

{{ui:Gardar DXF}} escribe a disposición como DXF (R12, milímetros), unha folla debaixo da outra: os contornos das follas na capa SHEET, as pezas en PARTS (os arcos mantéñense como arcos), e o nome de cada peza en LABELS.

:::tip
Mesturar varias pezas adoita encaixar mellor que moitas copias dunha soa: as pezas pequenas enchen os ocos entre as grandes.
:::

## Cortar as follas (G-code)

**Exportar › Follas encaixadas a G-code** lee un DXF encaixado (este, ou as follas do complemento Cabinets en CadCraft) e xera un programa por folla co posprocesador que escolla: primeiro os furados e recortes, despois os contornos, cortando cada un o raio da ferramenta por fóra da peza, a través da folla e 1 mm máis, con lingüetas se as pide. A lista de posprocesadores inclúe os integrados e os do estudo Manufacture. Revise cada programa nun simulador antes de executalo: os furados e as cavidades non se fan.

## Que revisar

PartCraft comproba de novo cada disposición sobre as formas reais (non sobre a rede que usou para buscar): ningunha peza máis preto que a separación, nada nas marxes. Non planifica o corte: as entradas e saídas da ferramenta, a orde de corte, o corte de bordos compartidos unha soa vez e a conservación da folla sobrante son tarefa do software da máquina. Revise o DXF alí antes de cortar.
