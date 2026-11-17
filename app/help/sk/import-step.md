---
title: Otvorenie súboru STEP a práca na ňom
summary: Načítajte model STEP od dodávateľa alebo iného CAD programu do PartCraft ako plné teleso, ako novú súčiastku alebo pridaný k aktuálnej, nastavte, ktorý smer je hore, a pridajte náčrty a prvky.
keywords: step, stp, import, otvoriť step, ap203, ap214, ap242, model dodávateľa, slepé teleso, importované teleso, os hore, Z hore, trojuholníky, fasetované, zostava step
from: ca0eca5f
---

PartCraft otvára súbory STEP (`.step` alebo `.stp`, AP203, AP214 a AP242) ako **plné telesá**, na ktoré môžete kresliť náčrty, rezať, vŕtať a kombinovať ich s vlastnými prvkami. Teleso nemá vlastnú históriu: nemôžete zmeniť rozmery, s akými bolo vytvorené, môžete iba doň pridať alebo z neho odrezať.

Táto verzia zostavuje každú súčiastku sieťovým jadrom, takže súbor STEP sa **načíta ako trojuholníky**: ploché plochy zostanú ploché a zakrivené plochy (valce, kužele, gule, tori, B-spline plochy) sa stanú mnohými malými plochami. Jeho objem je v rámci zlomku percenta presného objemu. Zachovanie zakrivených plôch presne vyžaduje presné jadro, ktoré v tejto verzii nie je.

## Otvorenie súboru STEP

1. Vyberte {{ui:Otvoriť}} alebo stlačte {{key:Mod+O}} a vyberte súbor `.step` alebo `.stp`. Alebo ho pretiahnite do 3D pohľadu.
2. PartCraft súbor načíta a ukáže, čo našiel, napríklad: "Súbor AP214: 1 teleso, 10 plôch, načítané ako trojuholníky." Nižšie je počet trojuholníkov, všetko, čo sa muselo vynechať alebo spojiť, a či je výsledok uzavretý.
3. Skontrolujte **Smer hore v súbore**. Súbor STEP uvádza svoju vlastnú jednotku (milimetre, palce, metre…); PartCraft ho prevedie na milimetre, takže **Jednotky v súbore** ukazuje Milimetre, "súbor to uvádza". **Veľkosť tu** ukazuje, aká veľká bude.
4. Vyberte {{ui:Otvoriť ako teleso}} pre prázdnu súčiastku, alebo {{ui:Pridať do tejto súčiastky}} / {{ui:Nová súčiastka}}, keď súčiastka už má prvky. Pri pridávaní sa opýta, čo sa má **Použiť na**: pridať, odrezať alebo ponechať iba prekrytie.

V histórii sa objaví prvok **Imported1** a stavový riadok napríklad hlási: "plate.step je plné teleso: 57995.937 mm³, 6 plochých plôch na náčrt."

## Zostava STEP

Zostava sa načíta ako **jedno teleso** so všetkými súčiastkami na mieste, kde ich súbor umiestňuje ("3 súčiastky umiestnené v súbore sa načítajú na svojich miestach."). Súčiastka použitá dvakrát sa načíta dvakrát. Názvy súčiastok a stromová štruktúra zostavy sa nezachovajú.

## Nastavenie smeru hore

Väčšina CAD programov používa Z hore; PartCraft používa Y hore. Predvolene PartCraft otočí súbor tak, aby jeho Z smerovalo hore. Ak súčiastka pristane na boku, vyberte **Imported1** a nastavte **Smer hore v súbore** na **Y hore**. **Jednotky v súbore** a **Použiť na** sa dajú zmeniť aj tam; každá zmena je jeden krok späť.

## Nadväzovanie

- Kliknite na rovnú plochu telesa a vyberte {{ui:Náčrt na tejto ploche}}. Ploché plochy modelu STEP si zachovajú svoje miesto, keď sa teleso prepočíta.
- Pridajte rezy, otvory, výstupky, vzory a zrkadlenia ako pri akejkoľvek súčiastke.
- Skontrolujte jej veľkosť v rámčeku **Súčiastka**: objem, povrch a rozmery.

Zaoblenia, skosenia a škrupiny vyžadujú presné jadro, ako pri akejkoľvek súčiastke v tejto verzii ([Sieťové jadro](topic:solid-kernels)).

## Kde sa uchováva

Trojuholníky sa ukladajú **vnútri** súboru `.partcraft.json`, takže súbor súčiastky je sebestačný: pôvodný súbor STEP už nepotrebujete.

## Správy

| Správa | Čo znamená |
|---|---|
| '"part.stp" nie je súbor STEP (nezačína reťazcom ISO-10303-21).' | Súbor nie je obyčajný text STEP. Požiadajte odosielateľa o súbor STEP AP203, AP214 alebo AP242 |
| "Súbor STEP sa nedal načítať: jeho dátová časť chýba alebo je poškodená." | Súbor je useknutý alebo poškodený. Skopírujte ho znova |
| "Súbor STEP neobsahuje žiadne teleso ani plošné teleso: nie je čo importovať." | Súbor obsahuje iba výkresy, body alebo údaje. Požiadajte o teleso |
| "Tento súbor STEP je príliš veľký (nad 60 MB) na import tu." a ďalšie limity čítača (položky, plochy, trojuholníky) | Zjednodušte model u zdroja alebo posielajte súčiastky jednotlivo |
| "… poškodené riadky v súbore boli preskočené." | Niektoré riadky sa nedali prečítať; ostatné sa načítali. Skontrolujte teleso |
| "… plochy sa nedali previesť na trojuholníky a boli vynechané." | Tieto plochy zanechávajú diery, ktoré PartCraft sa pokúša vyplniť; ak teleso nie je uzavreté, nepridá sa |
| "… plochy druhu, ktorý sa nečíta (…), boli preskočené." | Vzácny typ plochy. Požiadajte o model s jednoduchými alebo B-spline plochami |
| "Nie je uzavreté …" | Plochy netvoria uzavreté teleso (plošný model alebo vynechané plochy). PartCraft zobrazí otvory a nič nepridá |

## Limity

- Zakrivené plochy sa kreslia a merajú ako ploché plôšky, ako pri každej súčiastke v tejto verzii. PartCraft s telesom zachováva ploché plochy, valce, kužele, gule a tori zo súboru, takže {{ui:Export}} › {{ui:STEP AP242 (presné teleso)}} ich zapíše späť ako skutočné plochy, otvory ako otvory, spolu s prvkami, ktoré pridáte. Plochy, ktoré súbor uvádza ako spline, ťahanie po dráhe alebo rotačné plochy, zostanú v exporte plôškami. Súčiastka uložená pred verziou 0.9.1 nemá zachované plochy: otvorte súbor STEP znova, aby ste ich získali.
- {{ui:Export}} › {{ui:DXF náčrtu alebo plochej plochy}} s vybranou plochou zapíše okrúhly otvor zo súboru ako skutočnú kružnicu.
- Farby, názvy telies, štruktúra zostavy a PMI (tolerancie v súbore) sa nečítajú.
- Okrem STEP PartCraft otvára siete STL, OBJ a 3MF ([Otvorenie STL, OBJ alebo 3MF](topic:open-meshes)) a súbory `.3dm` ([Otvorenie modelu .3dm](topic:open-3dm-files)) ako plné telesá. IGES a natívne súbory iných programov nie sú podporované.
- Súčiastka s telesom STEP importovaným zostavením s presným jadrom si ponecháva text STEP; táto verzia tento prvok preskakuje („nie je hotové“). Otvorte súbor STEP znova, aby sa importoval ako trojuholníky.
