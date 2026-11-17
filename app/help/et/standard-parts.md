---
title: Standardosa avamine
summary: Alusta detailiga poldist, kruvist, mutrist, seibist, tihvtist, laagrist või võtmest, mille mõõdud on võetud standardist; iga standardi tabeli suurus on konfiguratsioon.
keywords: standardosa, standardosad, polt, kruvi, kuuskant, mutter, seib, tihvt, dübel, laager, kuullaager, võti, paralleelvõti, kinnitusdetail, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, mall, teek
from: b9e2811f
---

PartCraft avab tavalised mehaanilised detailid valmis: mõõdud tulevad standardite tabelitest ja iga tabeli suurus on konfiguratsioon, millele saad lülituda.

## Ava standardosa

1. Klõpsa rühmas {{ui:Fail}} nuppu {{ui:Standardosa}}.
2. Vali väljal {{ui:Detail}} liik, näiteks {{ui:Kuuskantpeaga kruvi (ISO 4017)}}.
3. Vali väljal {{ui:Formaat}} suurus, näiteks `M10 × 40`.
4. Klõpsa {{ui:Ava}}.

Detail avaneb uue, salvestamata detailina. Salvesta see, et seda alles hoida ({{key:Mod+S}}).

| Detail | Standard | Parameetrid |
|---|---|---|
| Kuuskantpeaga kruvi, kuuskantpolt | ISO 4017, ISO 4014, ASME B18.2.1 (toll) | `d` keere suurus, `s` lamedate vahe, `k` peakõrgus, `l` pikkus |
| Kuuskantmutter | ISO 4032, ASME B18.2.2 (toll) | `d`, `s`, `height` |
| Lame seib | ISO 7089 | `d1` sisemine, `d2` väline, `h` paksus |
| Paralleelne tihvt | ISO 2338 | `d`, `l` |
| Sügavrennuga kuullaager | ISO 15 | `d` avaus, `D` väline, `B` laius |
| Paralleelne võti | DIN 6885-1, vorm A | `b` laius, `h` kõrgus, `l` pikkus |

## Muuda suurust

Iga suurus on konfiguratsioon (vaata [Konfiguratsioonid ja disainitabelid](topic:design-tables)): ava {{ui:Parameetrid}} ja vali teine suurus või muuda parameetrit, näiteks `l` pikema kruvi jaoks, ning salvesta see enda konfiguratsioonina.

## Mida modelleeritakse

- Kruvid ja poldid: kuuskantpea ja lihtne varreosa. Mutrid: kuusnurk augu ja keere nimimõõduga. Keeri ei modelleerita; kui vajad, lisa keere nupuga {{ui:Keere}} (vaata [Keered](topic:threads)).
- Tihvtid: lihtne silinder; otsafaase ei ole.
- Laagrid: ainult väliskontuur (avause rõngas, välisdiameeter ja laius), mida on vaja laagri paigutamiseks.
- Võtmed: ümara otsaga võti.

Detaili materjal on teras, nii et massipaneel näitab selle kaalu. Hammasrattaid siin veel ei ole: PartCraft-il ei ole hambafunktsiooni ja ketas ei ole hammasratas. CadCraft joonistab hammasrattaid joonistuskonventsiooni järgi ning teegis on need joonistena.
