---
title: Bušenje rupa i upuštanja na točkama skice
summary: Stavite točke u skicu na plohi, izradite jednostavne, upuštene, upuštene za glavu ili narezane (ISO metričke) rupe na svakoj točki, postavite promjer i dubinu, te popravite rupe koje se buše na krivu stranu.
keywords: rupa, čarobnjak za rupe, bušenje, modelirani navoj, 3D ispis, upuštanje, cbore, upuštanje za glavu, csink, narezana rupa, navoj, promjer svrdla, metrički navoj, M6, kroz sve, slijepa rupa, rupa za vijak, točke, središta rupa
from: 8e1eef83
---

{{ui:Provrt}} buši jednu rupu na svakoj slobodnoj točki skice. Slobodna točka je ona nacrtana alatom Točka, a ne kraj linije ili središte kružnice.

## Bušenje rupa u plohi

1. Kliknite ravnu plohu u koju bušite, zatim odaberite {{ui:Skiciraj na ovoj plohi}}.
2. Pritisnite {{key:P}} i kliknite gdje ide svaka rupa. Kotirajte točke od rubova ili ishodišta ako je njihov položaj važan (vidi [Potpuno definirajte skicu](topic:relations-dimensions)).
3. Odaberite {{ui:Izlaz}}.
4. Odaberite {{ui:Provrt}}.

Rupe prolaze kroz dio, promjera 6 mm. Desna ploča prikazuje **Provrti**: koliko ih je napravljeno, „jedan po točki skice”.

**Jedna rupa, brzo:** kliknite ravnu plohu gdje ide rupa i odaberite {{ui:Provrt ovdje}} na desnoj ploči. PartCraft dodaje skicu na plohi s jednom točkom tamo gdje ste kliknuli, i Provrt kroz dio, u jednom koraku. Odmah upišite broj i pritisnite {{key:Enter}} za promjer. Da je točno postavite, otvorite novu skicu i kotirajte točku.

**Koja se skica koristi:** skica koju ste upravo zatvorili ili odabrana; inače najnovija neiskorištena skica koja ima slobodne točke. Ako nema nijedne: „Prvo napravite skicu s točkama gdje idu rupe (Skica na plohi, zatim Točka).”

## Postavke

| Postavka | Izbori | Standardno |
|---|---|---|
| **Vrsta** | Jednostavno, Upuštanje, Upuštanje za glavu, Narezano (ISO metrički) | Jednostavno |
| **Promjer (mm)** | Promjer rupe | 6 |
| **Kroz sve** | Označeno: sasvim kroz dio. Isključite za slijepu rupu | Označeno |
| **Dubina (mm)** | Prikazuje se kad je Kroz sve isključeno | 10 |
| **Promjer upuštanja ⌀** | Prikazuje se za Upuštanje: promjer šireg udubljenja | 11 |
| **Dubina upuštanja** | Prikazuje se za Upuštanje | 6 |
| **Obrnuti smjer** | Buši na drugu stranu ravnine skice | Isključeno |

Rupe se buše u materijal, okomito na ravninu skice. Dubina slijepe rupe mjeri se od ravnine skice; dno je ravno.

## Upuštena vijčana rupa

1. Napravite rupe kao gore.
2. Postavite **Vrsta** na **Upuštanje**.
3. Postavite **Promjer (mm)** na `6.6` (zazor za vijak M6), **Promjer upuštanja ⌀** na `11` i **Dubinu upuštanja** na `6.5`.

Upuštanje mora biti šire od rupe („Upuštanje mora biti šire od rupe.”) i, za slijepu rupu, plići od nje („Upuštanje mora biti plići od rupe.”).

## Krug rupa

Za rupe ravnomjerno raspoređene oko središta, napravite **jednu** rupu i ponovite je: odaberite značajku Provrt, zatim {{ui:Kružno}} (vidi [Značajke niza i zrcaljenja](topic:patterns-mirror)). Niz prati kad promijenite veličinu rupe.

## Kad rupe idu krivo

- „Na toj strani skice nema što bušiti. Pokušajte obrnuti smjer.” Skica je na suprotnoj strani materijala. Označite **Obrnuti smjer**.
- „Postavite točke skice gdje idu rupe (alat Točka), zatim napravite rupu.” Skica nema slobodnih točaka. Krajevi linija i središta kružnica se ne računaju.
- „Još nema što bušiti.” Rupa treba čvrsto tijelo. Prvo napravite izbočinu.

## Rupe u sklopovima

Svaka rupa ima os. U sklopu, **Centriraj na** može staviti zglob na os rupe, navedeno kao „Hole1, hole 2”, tako da se dio klina ili vijka poravna s njom. Pogledajte [Izrada sklopa](topic:build-assembly).

## Upuštene rupe za glavu

Postavite **Vrsta** na **Upuštanje za glavu**, zatim **Promjer upuštanja za glavu ⌀** (na površini) i **Kut upuštanja za glavu**: 90° (ISO metrički vijci s ravnom glavom) ili 82° (inčni vijci). Uzmite promjer upuštanja iz podataka proizvođača vijaka (malo veći od promjera glave vijka). Ploha stošca u panelima zove se „upuštanje za glavu”.

## Narezane rupe

Postavite **Vrsta** na **Narezano (ISO metrički)** i odaberite **Navoj**, M2 do M24 grubi. Rupa se buši na veličinu svrdla za narezivanje iz tablice ispod (nazivni promjer minus korak, do serije svrdla, kako ISO 2306 navodi za navoj 6H); polje **Promjer (mm)** se ne koristi. Za slijepu rupu, **Dubina navoja (mm)** određuje koliko duboko ide navoj.

| Navoj | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Korak | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Promjer svrdla za narezivanje ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Navoj je u početku **kozmetički**: model ima izbušenu rupu, prikaz crta glavni promjer navoja isprekidanim kružnicama, a list crteža nosi oznaku kao bilješku, na primjer „4× M8×1.25 - 6H, navoj kroz”. STEP izvozi samo izbušenu rupu.

Označite **Modelirano** da u rupu urežete pravi spiralni navoj, za 3D ispis. **Zazor (mm)** ga čini toliko većim sa svih strana, da se otisnuti vijak uklapa: 0.1 do 0.2 mm odgovara većini pisača. Oznaka tada završava s „(modelirano)”. Pogledajte [Navoji na osovinama i provrtima, nacrtani ili modelirani](topic:threads), koji također stavlja navoje na osovine.

:::note
Protubušene rupe, inčni navoji i navoji za cijevi još nisu izrađeni.
:::
