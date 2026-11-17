---
title: Bušenje rupa i upuštanja u tačkama skice
summary: Stavite tačke u skicu na površini, napravite jednostavne, cilindrično upuštene, konusno upuštene ili navojne (ISO metričke) rupe u svakoj tački, postavite prečnik i dubinu, i ispravite rupe koje se buše pogrešnim smjerom.
keywords: rupa, čarobnjak za rupe, burgija, modelovani navoj, 3D štampa, cilindrično upuštanje, cbore, konusno upuštanje, csink, navojna rupa, navoj, burgija za navoj, metrički navoj, M6, kroz sve, slijepa rupa, rupa za vijak, tačke, središta rupa
from: 8e1eef83
---

{{ui:Hole}} buši jednu rupu na svakoj slobodnoj tački skice. Slobodna tačka je ona nacrtana alatom Tačka, a ne kraj linije ili središte kruga.

## Bušite rupe u površini

1. Kliknite ravnu površinu u koju bušite, zatim odaberite {{ui:Sketch on this face}}.
2. Pritisnite {{key:P}} i kliknite gdje ide svaka rupa. Kotirajte tačke od ivica ili ishodišta ako je njihov položaj važan (vidi [Potpuno definišite skicu](topic:relations-dimensions)).
3. Odaberite {{ui:Exit}}.
4. Odaberite {{ui:Hole}}.

Rupe prolaze kroz dio, 6 mm u prečniku. Desni panel prikazuje **Rupe**: koliko ih je napravljeno, „jedna po tački skice”.

**Jedna rupa, brzo:** kliknite ravnu površinu gdje ide rupa i odaberite {{ui:Hole here}} u desnom panelu. PartCraft dodaje skicu na površini s jednom tačkom na mjestu gdje ste kliknuli i Rupu kroz dio, u jednom koraku. Odmah ukucajte broj i pritisnite {{key:Enter}} za njen prečnik. Da je postavite tačno, otvorite novu skicu i kotirajte tačku.

**Koja skica se koristi:** skica koju ste upravo zatvorili ili odabranu; inače, najnovija nekorištena skica koja ima slobodne tačke. Ako nema nijedne: „Prvo napravite skicu s tačkama gdje idu rupe (Skica na površini, zatim Tačka).”

## Postavke

| Postavka | Izbori | Podrazumijevano |
|---|---|---|
| **Tip** | Jednostavna, Cilindrično upuštanje, Konusno upuštanje, Navojna (ISO metrička) | Jednostavna |
| **Prečnik (mm)** | Prečnik rupe | 6 |
| **Kroz sve** | Označeno: sasvim kroz dio. Isključite za slijepu rupu | Označeno |
| **Dubina (mm)** | Prikazuje se kada je Kroz sve isključeno | 10 |
| **Prečnik upuštanja ⌀** | Prikazuje se za Cilindrično upuštanje: prečnik šireg udubljenja | 11 |
| **Dubina upuštanja** | Prikazuje se za Cilindrično upuštanje | 6 |
| **Obrnut smjer** | Buši na drugu stranu ravni skice | Isključeno |

Rupe se buše u materijal, pravo na ravan skice. Dubina slijepe rupe mjeri se od ravni skice; dno joj je ravno.

## Cilindrično upuštena rupa za vijak

1. Napravite rupe kao gore.
2. Postavite **Tip** na **Cilindrično upuštanje**.
3. Postavite **Prečnik (mm)** na `6.6` (zazor za vijak M6), **Prečnik upuštanja ⌀** na `11` i **Dubinu upuštanja** na `6.5`.

Upuštanje mora biti šire od rupe: „Upuštanje mora biti šire od rupe.” Za slijepu rupu upuštanje mora biti pliće od nje: „Upuštanje mora biti pliće od rupe.”

## Krug rupa

Za rupe ravnomjerno raspoređene oko središta, napravite **jednu** rupu i uzorkujte je: odaberite značajku Rupa, zatim {{ui:Circular}} (vidi [Značajke uzoraka i zrcaljenja](topic:patterns-mirror)). Uzorak prati kada promijenite veličinu rupe.

## Kada rupe idu pogrešnim smjerom

- „Na toj strani skice nema šta bušiti. Pokušajte obrnuti smjer.” Skica je na suprotnoj strani materijala. Označite **Obrnut smjer**.
- „Postavite tačke skice gdje idu rupe (alat Tačka), pa napravite rupu.” Skica nema slobodnih tačaka. Krajevi linija i središta krugova se ne računaju.
- „Još nema šta bušiti.” Rupa treba čvrsto tijelo. Prvo napravite izbočinu.

## Rupe u sklopovima

Svaka rupa ima osu. U sklopu, **Centriraj na** može postaviti spoj na osu rupe, navedenu kao „Rupa1, rupa 2”, tako da se klin ili vijak dijela poravna s njom. Pogledajte [Izgradnja sklopa](topic:build-assembly).

## Konusno upuštene rupe

Postavite **Tip** na **Konusno upuštanje**, zatim **Prečnik upuštanja ⌀** (na površini) i **Ugao upuštanja**: 90° (ISO metrički vijci s ravnom glavom) ili 82° (inčni vijci). Uzmite prečnik upuštanja iz podataka proizvođača vijka (malo više od prečnika glave vijka). Površina konusa se u panelima zove „upuštanje”.

## Navojne rupe

Postavite **Tip** na **Navojna (ISO metrička)** i odaberite **Navoj**, M2 do M24 grubo. Rupa se buši na veličini burgije za navoj iz tabele ispod (nominalni prečnik minus korak, do serije burgija, kako ISO 2306 navodi za navoj 6H); polje **Prečnik (mm)** se ne koristi. Za slijepu rupu, **Dubina navoja (mm)** određuje koliko duboko ide navoj.

| Navoj | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Korak | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Prečnik burgije za navoj ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Navoj je u početku **kozmetički**: model ima izbušenu rupu, prikaz crta glavni prečnik navoja kao isprekidane krugove, a list crteža nosi oznaku kao napomenu, na primjer „4× M8×1.25 - 6H, navoj kroz”. STEP izvozi samo izbušenu rupu.

Označite **Modelovano** da urežete pravi spiralni navoj u rupu, za 3D štampu. **Zazor (mm)** ga čini toliko većim sa svih strana, tako da se štampani vijak uklapa: 0.1 do 0.2 mm odgovara većini štampača. Oznaka tada završava s „(modelovano)”. Pogledajte [Navoji na osovinama i provrtima, nacrtani ili modelovani](topic:threads), koji također stavlja navoje na osovine.

:::note
Rupe s protubušenjem, inčni navoji i navoji za cijevi još nisu izgrađeni.
:::
