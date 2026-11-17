---
title: Plochy cez sieť kriviek (plocha Gordon)
summary: Vytvorte jednu hladkú plochu cez mriežku profilových a vodiacich kriviek nakreslených v náčrtoch alebo prevzatých z hrán modelu, uzavrite ju na teleso, ak sú profily uzavreté, a zistite, čo je presné, čo je fitované, a aké hlásenia sa zobrazia, keď sieť nesedí.
keywords: dotyčnica, G1, dotyčnicová spojitosť, zrkadlová rovina, plocha Gordon, sieť kriviek, hraničná plocha, sieťová plocha, profily, vodiace krivky, loft s vodidlami, vodiace lišty, obal, transfinitný, Coons, B-spline plocha, voľný tvar
from: ada3cb8b
---

:::note
**Ešte nie je hotové v tejto verzii.** Plocha Gordon vyžaduje presné geometrické jadro, ktoré táto verzia PartCraft nemá: každú súčiastku zostavuje s jadrom siete. [Čo ešte nie je hotové](topic:not-built-yet) popisuje, čo robiť namiesto toho. Zvyšok tejto stránky popisuje jej fungovanie s presným jadrom.
:::

**Plocha Gordon** je jedna plocha, ktorá prechádza každou krivkou siete: súbor **profilov** vedených jedným smerom a súbor **vodiacich kriviek** vedených druhým, prekrížených ako vlákna siete. Takto tvarujete trup, blatník alebo rukoväť z niekoľkých rezových kriviek, ktoré priamo ovládate. Potrebuje **presné jadro** (pozri [Jadro siete](topic:solid-kernels)).

## Nakreslite sieť

1. Nakreslite **profily**: dve alebo viac kriviek vedených vedľa seba, napríklad rezy na rovnobežných rovinách. Fungujú úsečky, oblúky, kružnice aj splajny a reťazec kriviek spojených koniec na koniec sa počíta ako jedna krivka.
2. Nakreslite **vodiace krivky**: dve alebo viac kriviek vedených napríč profilmi. Každá vodiaca krivka musí pretnúť každý profil raz a každý profil každú vodiacu krivku raz.
3. Zabezpečte, aby sa krivky skutočne stretli. Nakreslite náčrt vodiacej krivky tak, aby jej krivka prechádzala bodmi profilov (prichyťte sa k premietnutým bodom, alebo zadajte súradnice). Sieť akceptuje medzery do **Tolerancie** (na začiatok 0.01 mm).

Jeden náčrt môže obsahovať viacero kriviek: každý samostatný reťazec v ňom je vlastná krivka. Napríklad môžete všetky vodiace krivky nakresliť v jednom náčrte na hornej rovine.

## Vytvorte plochu

1. Vyberte {{ui:Viac}} v skupine Prvky a potom {{ui:Plocha Gordon}}.
2. PartCraft zoberie náčrty, ktoré zatiaľ nikto nepoužíva: tie v rovinách rovnobežných s prvou sa stanú **profilmi**, ostatné **vodiacimi krivkami**. Skontrolujte zoznam vpravo a každý náčrt nastavte na **Profily**, **Vodiace** alebo **Nepoužité**.
3. Ak chcete použiť hrany súčiastky, kliknite na **Vybrať hrany ako profily** (alebo **ako vodiace**), kliknite na hrany v pohľade a potom stlačte Esc.

Výsledkom je **plošné teleso**. {{ui:Zhrubnúť}} ho premení na teleso, {{ui:Zošiť}} ho zošije s inými plochami a {{ui:Orezať plochu}} ho orezáva.

### Uzavrite na teleso

Keď sú profily uzavreté krivky (kružnice, uzavreté splajny, uzavreté reťazce) a prvý a posledný profil ležia každý rovne v jednej rovine, označte **Uzavrieť na teleso**. Konce sa uzavrú rovnými plochami a uzavretý tvar sa spojí, vyreže, vytvorí prienik alebo sa stane novým telesom ako ktorýkoľvek iný prvok. Takto vytvoríte loft, ktorý sleduje vodiace krivky. To isté platí pre uzavreté vodiace krivky.

## Dotyčnica k rovine pozdĺž hrany

Plocha Gordon prechádza svojimi krivkami, ale sama osebe nezodpovedá sklonu toho, s čím sa stretáva. Ak chcete, aby z hrany odchádzala dotyčne k rovine (G1), napríklad k zrkadlovej rovine, aby sa zrkadlová kópia spojila bez zlomu, alebo k rovnej ploche, z ktorej vyrastá:

1. Vyberte prvok Gordon. V časti **Dotyčne k** zvoľte rovinu v {{ui:Pridať rovinu…}} (Predná, Horná, Pravá alebo referenčná rovina), alebo vyberte rovnú plochu v pohľade a stlačte {{ui:Pridať vybranú plochú plochu}}.
2. PartCraft nájde hraničnú krivku siete, ktorá leží v tejto rovine, a plocha z nej odíde dotyčne k rovine.

Ak rovina obsahuje dve hraničné krivky (podlaha pod oboma koncami), pridajte ju dvakrát: každá kópia zoberie ďalšiu. Najviac štyri roviny, jedna na hranu.

Hlásenie uvádza, pozdĺž ktorej krivky každá rovina dotyčne upravila plochu a aký najstrmší uhol plocha s rovinou pred tým zvierala. Vodiace krivky, ktoré už z tejto krivky odchádzajú dotyčne k rovine, sa dodržia presne. Vodiace krivky, ktoré sa od nej odklánajú, sa ohnú v úzkom pásme pri hrane a údaj hlásenia „sleduje každú krivku v rámci“ hovorí, o koľko: pre presné prilieganie nakreslite vodiace krivky odchádzajúce z hrany rovne.

## Čo je presné a čo je fitované

Panel uvádza, ktoré z nich platí a ako ďaleko sa plocha odchyľuje od vašich kriviek.

- **Presné**: keď je každá krivka polynomická (úsečky, splajny a ich reťazce) a vodiace krivky pretínajú všetky profily pri rovnakých parametroch, plocha je presne plochou Gordon týchto kriviek. Sieť izokriviek vyrezaná z bikubickej plochy vráti túto plochu späť a štyri priame čiary dajú rovnú alebo skrútenú (bilineárnu) záplatu.
- **Fitované**: oblúky, kružnice a hrany súčiastky nie sú polynomické a krivky, ktoré sa pretínajú pri rôznych parametroch, sa musia prepočítať tak, aby sa priesečníky zarovnali. Tieto krivky sú fitované kubickými B-splajnmi v rámci jednej desatimiliontiny veľkosti siete (približne 0.00001 mm pri súčiastke 100 mm). Valcová záplata z oblúkov a čiar zostáva v rámci 0.00001 mm od skutočného valca.

Medzi krivkami je plocha takou, akú metóda dá: profily prelínané napríč, plus vodiace krivky prelínané napríč, mínus prelínanie ich priesečníkov. Je hladká všade, okrem miesta, kde má krivka ostrý roh. Kde dve plochy Gordon zdieľajú hraničnú krivku, stretávajú sa hrana na hranu (G0), nie dotyčne.

## Keď sieť nesedí

| Hlásenie | Čo robiť |
|---|---|
| „… sa nestretávajú: prechádzajú 0.4 mm od seba“ | Nechajte ten profil a vodiacu krivku pretnúť sa, alebo zvýšte Toleranciu |
| „… sa stretáva … 2-krát“ | Vodiaca krivka smie každý profil pretnúť iba raz: rozdeľte slučkovitú krivku, alebo použite menej profilov |
| „… v inom poradí“ alebo „sa prehýba sám seba“ | Dve vodiace krivky sa navzájom križujú (alebo dva profily). Skupiny musia bežať vedľa seba |
| „aspoň dva profily a dve vodiace krivky“ | Pridajte krivky, alebo nastavte viac náčrtov na Profily alebo Vodiace |
| „zmiešané otvorené a uzavreté krivky“ | Všetky profily nastavte ako otvorené alebo všetky ako uzavreté (rovnako pre vodiace krivky) |
| „Koniec … nie je rovný, takže ho nie je možné uzavrieť“ | Nakreslite prvý a posledný uzavretý profil každý v jednej rovine, alebo nechajte Uzavrieť na teleso vypnuté |

## Obmedzenia

- Jedna B-spline plocha na sieť: žiadna dotyčnica G1 ani G2 k susedným plochám.
- Šev uzavretej siete pri prvej vodiacej krivke je spojený hrana na hranu, nie dotyčne.
- Samotný prvok Loft nemá vodiace lišty; namiesto toho použite plochu Gordon uzavretú na teleso.
- Veľmi vlnité krivky alebo priesečníky rozmiestnené veľmi nerovnomerne pozdĺž jednej krivky v porovnaní s inou môžu potrebovať príliš veľa bodov na fitovanie; prvok to potom oznámi.
