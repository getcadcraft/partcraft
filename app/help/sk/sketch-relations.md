---
title: Väzby a kóty náčrtu
summary: Každá väzba a kóta, ktorú má náčrt PartCraft, čo vybrať pre každú, jej symbol a správanie pri riešení.
keywords: väzby, obmedzenia, stotožnenie, vodorovná, zvislá, rovnobežná, kolmá, dotyčnica, rovnosť, sústredná, stred úsečky, pevný, vzdialenosť, vodorovná vzdialenosť, zvislá vzdialenosť, polomer, priemer, uhol, symboly, znaky
from: 9831e7be
---

Väzby určujú, ako je geometria umiestnená voči inej geometrii. Kóty určujú veľkosti. Väzbu pridáte tak, že vyberiete položky nástrojom Vybrať ({{key:S}}) a zvolíte jej tlačidlo na pravom paneli; kótu pridáte nástrojom Kóta ({{key:D}}) alebo tlačidlami kót na pravom paneli. Ako s nimi pracovať: [Úplné určenie náčrtu](topic:relations-dimensions).

"Krivka" nižšie znamená kružnicu alebo oblúk. Počiatok sa počíta ako bod.

## Väzby

| Tlačidlo | Symbol | Výber | Účinok |
|---|---|---|---|
| {{ui:• Stotožnenie}} | • (zobrazuje sa len pri výbere alebo pri probléme) | Dva body | Body sa stretnú |
| {{ui:• Stotožnenie}} | • | Bod a úsečka | Bod leží na úsečke (alebo na jej predĺžení) |
| {{ui:• Stotožnenie}} | • | Bod a krivka | Bod leží na kružnici alebo oblúku |
| {{ui:H Vodorovná}} | H | Úsečka alebo dva body | Úsečka je vodorovná, alebo sú body v rovnakej výške |
| {{ui:V Zvislá}} | V | Úsečka alebo dva body | Úsečka je zvislá, alebo sú body jeden nad druhým |
| {{ui:∥ Rovnobežná}} | ∥ | Dve úsečky | Úsečky smerujú rovnako |
| {{ui:⊥ Kolmá}} | ⊥ | Dve úsečky | Úsečky sa stretávajú pod pravým uhlom |
| {{ui:T Dotyčnica}} | T | Úsečka a krivka | Úsečka sa dotýka krivky bez pretnutia |
| {{ui:T Dotyčnica}} | T | Dve krivky | Dotýkajú sa, zvonku alebo zvnútra, podľa nakreslenia |
| {{ui:T Dotyčnica}} | T | Splajn a úsečka, oblúk alebo splajn, ktorý sa stretáva s jedným z jeho koncov | Splajn vychádza z tohto konca v smere druhej krivky |
| {{ui:= Rovnosť}} | = | Dve úsečky | Rovnaká dĺžka |
| {{ui:= Rovnosť}} | = | Dve krivky | Rovnaký polomer |
| {{ui:◎ Sústredné}} | ◎ | Dve krivky | Rovnaký stred |
| {{ui:◎ Sústredné}} | ◎ | Bod a krivka | Bod je v strede krivky |
| {{ui:M Stred úsečky}} | M | Bod a úsečka | Bod je v strede úsečky |
| {{ui:↔ Symetria}} | ↔ | Dva body a úsečka | Body sú zrkadlové obrazy podľa úsečky (Zrkadliť tieto väzby pridáva) |
| {{ui:⚓ Pevný}} | ⚓ | Bod, úsečka, krivka alebo splajn | Drží ho presne na mieste, kde je teraz (splajn: jeho body) |

Úsečky tu zahŕňajú aj osi. Kreslenie pridáva niektoré väzby za vás: prichytenie k bodu ho stotožní, prichytenie ku krivke umiestni bod na ňu, takmer vodorovné alebo zvislé úsečky dostanú H alebo V a obdĺžnik príde so štyrmi spojenými rohmi, dvoma H a dvoma V.

**Pevný** je rýchly spôsob, ako niečo zastaviť, ale náčrt potom nemôže nasledovať zmenu kóty inde. Uprednostnite kóty voči počiatku.

## Kóty

| Tlačidlo | Výber | Meria | Zobrazuje sa ako |
|---|---|---|---|
| {{ui:Vzdialenosť}} | Úsečka | Jej dĺžku | Vzdialenosť 40 |
| {{ui:Vzdialenosť}} | Dva body | Priamu vzdialenosť medzi nimi | Vzdialenosť 40 |
| {{ui:Vzdialenosť}} | Bod a úsečka | Vzdialenosť od bodu k úsečke, kolmo na ňu | Vzdialenosť 40 |
| {{ui:Vzdialenosť}} | Dve rovnobežné úsečky | Medzeru medzi nimi | Vzdialenosť 40 |
| {{ui:Vodorovná vzdialenosť}} | Dva body alebo úsečka | Iba vzdialenosť vľavo-vpravo | Vodorovná vzdialenosť 40 |
| {{ui:Zvislá vzdialenosť}} | Dva body alebo úsečka | Iba vzdialenosť hore-dolu | Zvislá vzdialenosť 40 |
| {{ui:Polomer}} | Kružnica alebo oblúk | Jej polomer | Polomer R10 |
| {{ui:Priemer}} | Kružnica alebo oblúk | Jej priemer | Priemer ⌀20 |
| {{ui:Uhol}} | Dve úsečky, ktoré nie sú rovnobežné | Uhol medzi nimi, 0 až 180 stupňov | Uhol 30° |

Nástrojom Kóta PartCraft určí druh podľa toho, na čo kliknete, a kde umiestnite číslo:

| Kliknete na | Dostanete |
|---|---|
| Jednu úsečku | Jej dĺžku; pri šikmej úsečke vodorovnú, ak je číslo nad alebo pod ňou, zvislú, ak je bokom |
| Jednu kružnicu | Priemer |
| Jeden oblúk | Polomer |
| Dva body | Vzdialenosť; vodorovnú alebo zvislú ako pri šikmej úsečke |
| Bod a úsečku | Vzdialenosť od bodu k úsečke |
| Dve úsečky | Uhol, alebo vzdialenosť, ak sú rovnobežné |
| Bod a kružnicu | Nič: "Tieto položky nie je možné kótovať spolu." Namiesto toho kótujte na stred kružnice |

**Odsadenie** (zobrazené ako vzdialenosť) vytvára nástroj Odsadenie: udrží skopírovanú úsečku rovnobežne v tejto vzdialenosti, alebo skopírovaný oblúk či kružnicu sústredne s polomerom o túto hodnotu väčším alebo menším. Ostatné časti rovnakého odsadenia nesú väzbu **O** a nasledujú jednu kótu Odsadenie. Pozrite [Splajny, orezanie, odsadenie a ďalšie nástroje náčrtu](topic:sketch-tools).

Hodnoty kót sú v milimetroch (alebo v stupňoch), nikdy nie záporné. Polomer a priemer musia byť väčšie ako nula. Hodnota 0 je pri vzdialenostiach povolená: dva body vzdialené 0 sú stotožnené.

## Ako sa riešenie správa

- **Najmenší pohyb.** Keď sa hodnota zmení, riešiteľ posunie geometriu čo najmenej. Úsečka, ktorej sa mení dĺžka, rastie rovnako na oboch koncoch, ak žiaden koniec nie je držaný.
- **Žiadne preklápanie.** Vzdialenosti od bodu k úsečke, vodorovné a zvislé vzdialenosti, uhly a dotyčnice si pamätajú, na ktorej strane vznikli. Zmena hodnoty nikdy nepreklopí geometriu na druhú stranu.
- **Konflikty nič nemenia.** Ak sa väzby navzájom vylučujú, náčrt zostane presne taký, aký bol, a konfliktné väzby sčervenejú.
- **Nadbytočné väzby** (vyplývajúce z iných) sa uvedú v stavovom riadku ("je už vyplývajúca. Zmažte ju.") a prvok sa stále vytvorí, s upozornením.
- **Dotyčnicové spoje.** Tam, kde oblúk zaoblenia spája svoje úsečky v spoločnom koncovom bode, je dotyčnica riešená tak, aby tam zostala dobre určená, takže zaoblenia náčrtu sa nehlásia ako preurčené.

## Zatiaľ nie je k dispozícii

Väzby kolineárnosti, koradiálnosti a prebodnutia; bod na splajne; riadené (referenčné) kóty; súradnicové kóty a kóty dĺžky oblúka; rovnice medzi kótami. Pre kolineárne úsečky použite Rovnobežná a vzdialenosť 0.
