---
title: Abrir unha peza normalizada
summary: Comece unha peza a partir dun perno, parafuso, porca, arandela, pasador, rodamento ou chavella dimensionados segundo a súa norma, con cada tamaño da táboa da norma como configuración.
keywords: peza normalizada, pezas normalizadas, perno, parafuso, hexagonal, porca, arandela, pasador, cavilla, rodamento, rodamento de bólas, chavella, elemento de fixación, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, modelo, biblioteca
from: b9e2811f
---

PartCraft abre pezas mecánicas comúns xa feitas: as dimensións proveñen das táboas das normas, e cada tamaño da táboa é unha configuración á que pode cambiar.

## Abrir unha

1. Faga clic en {{ui:Standard part}} no grupo Ficheiro.
2. En {{ui:Part}}, escolla o tipo, por exemplo {{ui:Parafuso de cabeza hexagonal (ISO 4017)}}.
3. En {{ui:Size}}, escolla o tamaño, por exemplo `M10 × 40`.
4. Faga clic en {{ui:Open}}.

A peza ábrese como peza nova e sen gardar. Garde a peza para conservala ({{key:Mod+S}}).

| Peza | Norma | Parámetros |
|---|---|---|
| Parafuso de cabeza hexagonal, perno hexagonal | ISO 4017, ISO 4014, ASME B18.2.1 (polgadas) | `d` tamaño da rosca, `s` distancia entre planos, `k` altura da cabeza, `l` lonxitude |
| Porca hexagonal | ISO 4032, ASME B18.2.2 (polgadas) | `d`, `s`, `height` |
| Arandela plana | ISO 7089 | `d1` interior, `d2` exterior, `h` espesor |
| Pasador paralelo | ISO 2338 | `d`, `l` |
| Rodamento rígido de bólas | ISO 15 | `d` diámetro interior, `D` diámetro exterior, `B` largura |
| Chavella paralela | DIN 6885-1, forma A | `b` largura, `h` altura, `l` lonxitude |

## Cambiar o tamaño

Cada tamaño é unha configuración (consulte [Configuracións e táboas de deseño](topic:design-tables)): abra {{ui:Parameters}} e escolla outro, ou cambie un parámetro, como `l` para un parafuso máis longo, e gárdeo como configuración propia.

## O que se modela

- Parafusos e pernos: a cabeza hexagonal e unha caña lisa. Porcas: o hexágono cun burato do tamaño nominal da rosca. As roscas non se modelan; engada unha con {{ui:Thread}} se a necesita (consulte [Roscas](topic:threads)).
- Pasadores: un cilindro liso; os chanfros dos extremos non se inclúen.
- Rodamentos: só a envolvente exterior (un anel do diámetro interior, o diámetro exterior e a largura), que é o que precisa para colocar un.
- Chavellas: a chavella de extremos redondos.

O material da peza é aceiro, así que o panel de masa mostra o seu peso. As engrenaxes aínda non están aquí: PartCraft non ten elemento de dentes, e un disco non é unha engrenaxe. CadCraft debuxa engrenaxes segundo a convención de debuxo, e a biblioteca téas como debuxos.
