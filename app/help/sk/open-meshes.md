---
title: Otvorenie STL, OBJ alebo 3MF ako telesa
summary: Premeňte sieť zo skenera, z webu pre 3D tlač alebo z iného programu na teleso, ktoré môžete rezať, dopĺňať a kresliť naň náčrt; čo PartCraft pri tom opraví a čo nedokáže.
keywords: stl, obj, 3mf, sieť, sieť na teleso, previesť sieť, sken, vodotesný, oprava, diery, medzery, jednotky, smer hore, importované teleso, ploché plochy
from: 7b948471
---

PartCraft otvára siete STL, OBJ a 3MF ako **telesá**. Teleso funguje ako každé iné teleso: rezať, dopĺňať, vŕtať, vzorovať, použiť v zostave alebo na obrábanie a kresliť náčrt na jeho ploché plochy. Nemá vlastnú históriu: sieť je len trojuholníky, takže sa jej veľkosti nedajú meniť, len dopĺňať alebo z nej odoberať.

## Otvorenie siete

1. Vyberte {{ui:Otvoriť}} alebo stlačte {{key:Mod+O}} a vyberte súbor `.stl`, `.obj` alebo `.3mf`. Alebo ho pustite do 3D pohľadu.
2. PartCraft ho načíta, opraví to, čo bezpečne môže, a ukáže, čo našiel: koľko trojuholníkov a bodov, každú opravu a či sa sieť teraz **uzatvára**.
3. Skontrolujte **Jednotky v súbore** a **Smer hore v súbore**. STL a OBJ neuvádzajú svoje jednotky, takže milimetre sú odhad; súbor 3MF uvádza svoje vlastné. Riadok **Veľkosť tu** ukáže veľkosť telesa s vašou voľbou, takže súčiastka, ktorá vyjde 25,4-krát menšia, sa dá ľahko spozorovať (bola v palcoch).
4. Ak je súčiastka na obrazovke prázdna, vyberte {{ui:Otvoriť ako teleso}}. Ak už má prvky, vyberte **Použiť na** (pridať k súčiastke, odobrať z nej alebo ponechať len prienik), potom {{ui:Pridať do tejto súčiastky}}, alebo {{ui:Nová súčiastka}}, aby ste začali znovu so sieťou.

V histórii sa objaví prvok **Imported1**. Stavový riadok napíše napríklad: „bracket.stl je teleso: 15200.512 mm³, 14 plochých plôch na nakreslenie náčrtu.“

## Čo PartCraft opravuje

| Oprava | Čo to znamená |
|---|---|
| Zdvojené rohy spojené | STL zopakuje každý roh pre každý svoj trojuholník; spoja sa do jedného bodu |
| Trojuholníky bez plochy odstránené | Tenké trojuholníky, ktorých rohy ležia na jednej čiare |
| Zdvojené trojuholníky odstránené | Trojuholník napísaný dvakrát sa zachová raz; dva smerujúce opačne (vnútorná stena) sa odstránia oba |
| Malé medzery zatvorené | Hrany, ktoré sa skoro stretávajú (v rámci tisíciny veľkosti súčiastky), sa spoja |
| Diery zaplnené | Otvor, ktorého okraj leží rovno, sa vyplní bez ohľadu na veľkosť; zdeformovaný len vtedy, ak je malý |
| Trojuholníky otočené smerom von | Trojuholníky smerujúce zle sa otočia tak, aby súhlasili so susedmi, a celý povrch smeruje von |

## Keď sieť sa neuzatvára

Teleso potrebuje povrch bez otvorov. Keď PartCraft nedokáže uzavrieť povrch, dialóg povie, koľko otvorov a voľných hrán zostáva, a nie je žiadne teleso na pridanie. Uzavrite otvory v programe, ktorý sieť vytvoril, alebo ju exportujte znovu ako uzavretú (vodotesnú) sieť a otvorte ju znovu.

PartCraft nechá otvor na pokoji, keď by jeho zaplnenie mohlo uhádnuť zle: veľká zdeformovaná diera alebo dva otvory v tej istej rovine (chýbajúca prstencová plocha, kde by zaplnenie každého okraja zakrylo diery v strede). Hrana zdieľaná viac než dvoma trojuholníkmi sa tiež nahlási: taký povrch nemá jedno jasné vnútro.

## Nakreslite náčrt na ploché plochy

Ploché oblasti zložené z mnohých trojuholníkov sa zlúčia do jednej **plochej plochy** každá, takže na ne možno nakresliť náčrt: kliknite na plochu a vyberte {{ui:Náčrt na tejto ploche}}. Plocha, ktorá sa neskôr odreže alebo k nej sa pridá materiál, zostane plochou. Okrúhle oblasti (diera, zaoblenie) zostávajú trojuholníkmi: nie sú to plochy, ktoré možno vybrať, a pohľad ich obrys kreslí podľa uhla medzi trojuholníkmi.

## Zmena neskôr

Vyberte **Imported1**, aby ste videli súbor, z ktorého pochádza, koľko má trojuholníkov a čo sa opravilo. **Jednotky v súbore**, **Smer hore v súbore** a **Použiť na** sa dajú zmeniť tam; každá zmena je jeden krok späť.

## Kde sa uchováva

Opravená sieť sa uloží **vnútri** súboru `.partcraft.json`, takže už nepotrebujete pôvodný súbor siete. Súbor súčiastky so sieťovým telesom je verzia 5: staršia verzia PartCraft ho odmietne podľa jeho verzie. Sieť s 200 000 trojuholníkmi pridá asi 1,2 MB.

## Limity

- Najviac 3 milióny trojuholníkov a 200 MB v jednom súbore.
- Teleso zo siete stavia sieťové jadro. S presným jadrom zapnutým (len pre vývojárov) to povie a teleso sa nepostaví.
- Materiály OBJ, súradnice textúry a voľné krivky sa vynechajú; farby, materiály a podporné objekty 3MF sa vynechajú (dialóg povie, koľko objektov sa preskočilo).
- Teleso je také jemné ako sieť: hrubý STL dá hrubé okrúhle plochy. Diery, ktoré doň vŕtate, sú také okrúhle ako vaše vlastné prvky.
