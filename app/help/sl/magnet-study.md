---
title: Študija magneta skice
summary: Zaprte profile svojih skic spremenite v ravni magnetni model (železo, magneti, tuljave), si oglejte polje in preberite silo ter navor na telo.
keywords: magnet, magnetno, magnetostatika, polje, gostota magnetnega pretoka, sila, navor, tuljava, jarem, železo, krivulja B-H, trajni magnet, aktuator, motor, solenoid, maxwell
from: 604efc3b
---

Uporabite {{ui:Več}} v orodni vrstici Značilke › {{ui:Študija magneta skic…}} na delu, ki ima skice. Vsaka zaprta oblika v skicah, ki jih označite, je eno območje ravnega modela; študija izračuna magnetno polje B, silo in navor na telo, ki ga izberete.

## Koraki

1. Narišite telesa kot zaprte oblike v skicah: železni jarem, magnet, tuljavo. Telesa, ki se dotikajo, delijo rob, zato jih dajte v različne skice; telesa, ki stojijo ločeno ali so drug v drugem (okno v jarmu), lahko delijo eno skico. Skice naj bodo na isti ravnini.
2. Odprite študijo in označite skice za uporabo. Vsak zaprt profil dobi oštevilčeno vrstico. Povejte, kaj je: {{ui:Zrak}}, {{ui:Železo}} (permeabilnost ali krivuljo B–H, vpisano kot pare B v teslah in H v A/m), {{ui:Trajni magnet}} (Br v teslah, njegova smer kot kot od osi x skice in njegova povratna permeabilnost) ali {{ui:Tuljava}} (skupni tok skozi njen profil, ovoji krat amperi; predznak pove, v katero smer teče).
3. Označite {{ui:Sila in navor na to telo}} za telesa, na katerih ju želite. Vnesite globino dela, pravokotno na skico.
4. Izberite mrežo in zrak okoli modela, nato {{ui:Zaženi}}.

## Kaj naj vidite

- Gostoto magnetnega pretoka |B| čez model, od temno modre (nizko) do rdeče (visoko), s oštevilčenimi profili.
- Najmočnejše polje in kje je, število trikotnikov ter za vsako označeno telo silo vzdolž x in y ter navor okoli njegove sredine za globino, ki ste jo vnesli.
- {{ui:Shrani rezultate (CSV)}} zapiše številke.

## Dobro je vedeti

- Gre za ravni, stacionarni model: vse je na meter globine, brez vrtinčnih tokov in histereze, magnet pa je ravna povratna črta (ne more se razmagnetiti).
- Model je v škatli zraka, katere rob je stena. Primerjajte dve velikosti zračne škatle in mreži Normalno in Fino: sila, izračunana iz polja okoli telesa, je dobra le toliko, kolikor je dobra mreža tam.
- Železo samo s permeabilnostjo se nikoli ne nasiči. Ko polje preseže 2 T, študija v seznamu Težave izpiše ⚠: dajte železu krivuljo B–H. Številke v novi vrstici so primeri (železo μr 2000, magnet 1.2 T), ne podatki proizvajalca materiala.
- Telo potrebuje prostor okoli sebe, da prevzame silo: če je drugo telo preblizu, študija to pove.
- Pripomoček za risanje, ne inženirska odobritev.

## Naprej

- [Magnetna polja v 2D (vadnica)](topic:magnetic-fields-2d)
