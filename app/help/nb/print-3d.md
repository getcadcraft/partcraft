---
title: Gjør en del klar for 3D-utskrift
summary: Sjekk at en del eller sammenstilling er lukket, passer i skriveren din og står på en base, og last den ned som STL eller 3MF til slicer-programmet ditt.
keywords: 3D-utskrift, 3D-print, skriver, utskrift, slicer, stl, 3mf, tett, lukket, manifold, skriverplate, skriverplatestørrelse, underlag, overheng, støtter, base, millimeter, eksport, gjenger, klaring
from: 90d81dff
---

En slicer trenger en lukket form: ingen hull, alle flater peker utover, og ingenting går gjennom seg selv. Deler PartCraft bygger, er lukket allerede ved konstruksjon, så kontrollen forteller først og fremst størrelsen, om emnet passer på skriverens plate, om det står på en plan flate, og hvor mye av det som henger ut.

## Kontroller og last ned

1. Valgfritt, én gang: sett skriverens plate i {{ui:Innstillinger}} › PartCraft › **3D-skriver**: bredde, dybde og høyde i millimeter. La dem stå tomme for å hoppe over den kontrollen.
2. Velg {{ui:Eksporter}}, og deretter {{ui:Kontroller for 3D-utskrift (STL eller 3MF)…}}.

   Dialogen sier «Klar til å skrive ut» eller «Ikke klar til å skrive ut», lister alt som er feil, og gir størrelsen på platen (X × Y × Z, i millimeter), volumet og antall trekanter.

3. Klikk på {{ui:Last ned 3MF}} eller {{ui:Last ned STL}}. Filen er den samme som {{ui:Eksporter}} › {{ui:3MF, for 3D-utskrift}} eller {{ui:STL, for 3D-utskrift}}.

I en sammenstilling tar kontrollen og filene hele sammenstillingen, hver kopi der den er plassert.

Emnet kontrolleres slik eksporten skriver det: det som peker opp i PartCraft (rett på Topplan), peker opp på platen. En del skissert på Topplan ligger flatt.

## Hva dialogen kan si

**Ikke klar til å skrive ut** (en slicer kan nekte, eller skrive det feil): hull (kanter med en flate bare på den ene siden), kanter delt av tre eller flere flater, flater som peker motsatt vei, et legeme vendt innut, eller et legeme som går gjennom seg selv. En del bygget i PartCraft skal aldri vise dette; hvis den gjør det, se [Feilsøking](topic:troubleshooting).

**Advarsler** (den skrives ut, men se over den først):

- **Større enn skriverens plate**, selv vridd 90° på den.
- **Ingenting ligger flatt i bunnen**: snu emnet i slicer-programmet slik at en flate hviler på platen, ellers trengs støtter eller et underlag.
- **Heller ut mer enn 45° fra loddrett**: de flatene trenger støtte slik den står. En annen vei opp kan trenge mindre.
- **Separate legemer overlapper** eller **møter flate mot flate**: slicere slår dem vanligvis sammen. {{ui:Kombiner}} under Funksjoner › Mer slår dem sammen til ett legeme. Se [Legemer](topic:bodies).
- **Under 1 mm på tvers**: kontroller størrelsene på emnet.

## Gjenger som skrives ut

En modellert gjenge skrives ut som en ekte gjenge. Gi den litt **Klaring**, slik at en utskrevet bolt går inn i en utskrevet mutter: se [Gjenger](topic:threads).

## Glatte runde flater

STL og 3MF består av trekanter. For jevnere runde flater: klikk på tomt rom, slik at ingenting er valgt, og sett **Kurver** til **Fin (128 per omdreining)** eller **Veldig fin (256 per omdreining)** i høyre panel før du eksporterer. Flere trekanter gir større filer.

## Større, mindre eller i deler

- **Eksporter › Skaler for utskrift (STL eller 3MF)…** lagrer emnet skalert per akse uten å endre det: en **krympetillegg** i prosent (størrelse × (1 + s), eller nøyaktig størrelse ÷ (1 − s)) for et støpemønster, eller enkle faktorer, om midten, nederste hjørne, midten av bunnen eller origo.
- **Eksporter › Del for utskrift (en zip med deler)…** deler et emne som er for stort for skriveren din, i deler som hver passer til platen du oppgir. Delene er forbundet med tapper, nøkler, svalehaler, dymlehull eller magnetlommer (med klaringen du satte). Hver del og hver forbindelse er nummerert, og delene lagres som STL eller 3MF i en zip med et sammenstillingsark. Selve emnet endres ikke.

## Ikke kontrollert

Veggtykkelse, detaljer mindre enn dysen din kan tegne, og hvordan slicer-programmet plasserer støtter. Slicer-programmet viser dem.
