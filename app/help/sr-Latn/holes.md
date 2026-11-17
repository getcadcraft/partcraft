---
title: Bušenje rupa i upuštenja na tačkama skice
summary: Stavi tačke u skicu na strani, napravi proste, upuštene, konusno upuštene ili rupe sa navojem (ISO metričke) na svakoj tački, podesi prečnik i dubinu i popravi rupe koje se buše na pogrešnu stranu.
keywords: rupa, čarobnjak za rupe, bušenje, modelovani navoj, 3D štampa, upuštanje, cbore, konično upuštanje, csink, rupa sa navojem, prečnik bušenja, navoj, M6, kroz sve, slepa rupa, rupa za zavrtanj, tačke, središta rupa
from: 8e1eef83
---

{{ui:Rupa}} buši jednu rupu na svakoj slobodnoj tački skice. Slobodna tačka je ona napravljena alatom Tačka, a ne kraj linije ili središte kruga.

## Buši rupe u strani

1. Klikni ravnu stranu u koju se buši, zatim izaberi {{ui:Skica na ovoj površi}}.
2. Pritisni {{key:P}} i klikni gde ide svaka rupa. Kotiraj tačke od ivica ili koordinatnog početka ako je njihov položaj bitan (vidi [Potpuno definiši skicu](topic:relations-dimensions)).
3. Izaberi {{ui:Izađi}}.
4. Izaberi {{ui:Rupa}}.

Rupe prolaze kroz deo, prečnika 6 mm. Desni panel prikazuje **Rupe**: koliko je napravljeno, „jedna po tački skice”.

**Jedna rupa, brzo:** klikni ravnu stranu gde ide rupa i izaberi {{ui:Rupa ovde}} u desnom panelu. PartCraft dodaje skicu na strani sa jednom tačkom gde si kliknuo i Rupu kroz deo, u jednom koraku. Odmah ukucaj broj i pritisni {{key:Enter}} za njen prečnik. Da bi se tačno postavila, otvori novu skicu i kotiraj tačku.

**Koja skica se koristi:** skica koju si upravo zatvorio ili izabrana; inače najnovija neiskorišćena skica koja ima slobodne tačke. Ako nema nijedne: „Prvo napravi skicu sa tačkama gde idu rupe (Skica na površi, zatim Tačka).”

## Podešavanja

| Podešavanje | Izbori | Podrazumevano |
|---|---|---|
| **Tip** | Prosta, Upuštena, Konusno upuštena, Sa navojem (ISO metrički) | Prosta |
| **Prečnik (mm)** | Prečnik rupe | 6 |
| **Kroz sve** | Označeno: kroz ceo deo. Isključi za slepu rupu | Označeno |
| **Dubina (mm)** | Prikazano kad je Kroz sve isključeno | 10 |
| **Prečnik upuštanja ⌀** | Prikazano za Upuštena: prečnik šireg udubljenja | 11 |
| **Dubina upuštanja** | Prikazano za Upuštena | 6 |
| **Obrnuti smer** | Buši na drugu stranu ravni skice | Isključeno |

Rupe se buše u materijal, pod pravim uglom u odnosu na ravan skice. Dubina slepe rupe meri se od ravni skice; njeno dno je ravno.

## Upuštena rupa za zavrtanj

1. Napravi rupe kao gore.
2. Postavi **Tip** na **Upuštena**.
3. Postavi **Prečnik (mm)** na `6.6` (zazor za zavrtanj M6), **Prečnik upuštanja ⌀** na `11` i **Dubinu upuštanja** na `6.5`.

Upuštanje mora biti šire od rupe („Upuštanje mora biti šire od rupe.”) i, za slepu rupu, plitko od nje („Upuštanje mora biti plitkije od rupe.”).

## Krug zavrtnja

Za rupe ravnomerno raspoređene oko središta, napravi **jednu** rupu i obrazuj je: izaberi karakteristiku Rupa, zatim {{ui:Kružno}} (vidi [Obrasci i ogledanje](topic:patterns-mirror)). Obrazac prati kad se promeni veličina rupe.

## Kad rupe idu na pogrešnu stranu

- „Nema šta da se buši sa te strane skice. Pokušaj obrnuti smer.” Skica je na suprotnoj strani materijala. Označi **Obrnuti smer**.
- „Postavi tačke skice gde idu rupe (alat Tačka), zatim napravi rupu.” Skica nema slobodnih tačaka. Krajevi linija i središta krugova se ne računaju.
- „Još nema šta da se buši.” Rupa treba čvrsto telo. Prvo napravi izbočinu.

## Rupe u sklopovima

Svaka rupa ima osu. U sklopu, **Centriraj na** može da postavi spoj na osu rupe, navedenu kao „Rupa1, rupa 2”, tako da se klin ili zavrtanj poravna sa njom. Vidi [Napravi sklop](topic:build-assembly).

## Konusno upuštene rupe

Postavi **Tip** na **Konusno upuštanje**, zatim **Prečnik konusa** (na površini) i **Ugao konusa**: 90° (ISO metrički zavrtnji sa ravnom glavom) ili 82° (inčni zavrtnji). Uzmi prečnik konusa iz podataka proizvođača zavrtnja (malo više od prečnika glave zavrtnja). Površ konusa se u panelima zove „konusno upuštanje”.

## Rupe sa navojem

Postavi **Tip** na **Sa navojem (ISO metrički)** i izaberi **Navoj**, od M2 do M24 grubo. Rupa se buši na veličini alata za navoj iz tabele ispod (nominalni prečnik minus korak, do serije bušenja, kako ISO 2306 navodi za navoj 6H); polje **Prečnik (mm)** se ne koristi. Za slepu rupu, **Dubina navoja (mm)** određuje koliko duboko ide navoj.

| Navoj | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Korak | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Prečnik bušenja ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Navoj je u početku **prikazan**: model ima bušenu rupu, prikaz crta veliki prečnik navoja isprekidanim krugovima, a list crteža nosi oznaku kao belešku, na primer „4× M8×1.25 - 6H, navoj kroz”. STEP izvozi samo bušenu rupu.

Označi **Modelovano** da bi se pravi spiralni navoj isekao u rupu, za 3D štampu. **Zazor (mm)** ga čini toliko većim sa svih strana, tako da se odštampan zavrtanj uklapa: 0.1 do 0.2 mm odgovara većini štampača. Oznaka se tada završava sa „(modelovano)”. Vidi [Navoji na osovinama i otvorima, prikazani ili modelovani](topic:threads), koji takođe stavlja navoje na osovine.

:::note
Dvostruko bušene rupe, inčni navoji i navoji za cevi još nisu napravljeni.
:::
