---
title: Åpne en STL, OBJ eller 3MF som et volumlegeme
summary: Gjør et nett fra en skanner, et 3D-utskriftssted eller et annet program om til et volumlegeme du kan kutte, legge til og skissere på; hva PartCraft reparerer underveis, og hva den ikke kan.
keywords: stl, obj, 3mf, nett, nett til volumlegeme, konverter nett, skanning, vanntett, reparer, hull, mellomrom, enheter, opp-akse, importert legeme, flate flater
from: 7b948471
---

PartCraft åpner STL-, OBJ- og 3MF-nett som **volumlegemer**. Legemet fungerer som ethvert annet volumlegeme: kutt i det, legg til i det, bor i det, mønster det, bruk det i en sammenstilling eller til bearbeiding, og skisser på de flate flatene. Det har ingen egen historikk: et nett er bare trekanter, så størrelsene kan ikke endres, bare legges til eller kuttes fra.

## Åpne et nett

1. Velg {{ui:Åpne}} eller trykk {{key:Mod+O}}, og velg `.stl`-, `.obj`- eller `.3mf`-filen. Eller slipp den i 3D-visningen.
2. PartCraft leser den, reparerer det den trygt kan, og viser hva den fant: hvor mange trekanter og punkter, hver reparasjon, og om nettet nå **lukker seg**.
3. Kontroller **Enheter i filen** og **Opp i filen**. STL og OBJ sier ikke hvilke enheter de bruker, så millimeter er gjetningen; en 3MF-fil sier sine egne. Linjen **Størrelse her** viser legemets størrelse med ditt valg, så en del som kommer inn 25.4 ganger for liten er lett å se (den var i tommer).
4. Hvis delen på skjermen er tom, velg {{ui:Åpne som et legeme}}. Hvis den allerede har funksjoner, velg **Bruk den til** (legg til i delen, kutt fra den, eller behold bare overlappet), deretter {{ui:Legg til i denne delen}}, eller {{ui:Ny del}} for å starte på nytt med nettet.

En funksjon **Imported1** vises i historikken. Statuslinjen sier for eksempel «bracket.stl er et volumlegeme: 15200.512 mm³, 14 flate flater å skissere på.»

## Hva PartCraft reparerer

| Reparasjon | Hva det betyr |
|---|---|
| Doble hjørner slått sammen | En STL gjentar hvert hjørne for hver av sine trekanter; de slås sammen til ett punkt |
| Trekanter uten areal fjernet | Smale flak der hjørnene ligger på én linje |
| Doble trekanter fjernet | En trekant skrevet to ganger beholdes én gang; to som vender motsatt vei (en innervegg) fjernes begge |
| Små mellomrom lukket | Kanter som nesten møtes (innen en tusendel av delens størrelse) sammenføyes |
| Hull fylt | En åpning der kanten ligger flat, fylles uansett størrelse; en skjev bare når den er liten |
| Trekanter snudd til å vende utover | Trekanter som vender feil vei, snus slik at de stemmer med naboene, og hele flaten vender utover |

## Når et nett ikke lukker seg

Et volumlegeme trenger en flate uten åpninger. Når PartCraft ikke kan lukke en, sier dialogen hvor mange åpninger og åpne kanter som er igjen, og det blir ikke noe legeme å legge til. Lukk åpningene i programmet som laget nettet, eller eksporter det på nytt som et lukket (vanntett) nett, og åpne det igjen.

PartCraft lar en åpning være i fred når fylling kunne gjettet feil: et stort skjevt hull, eller to åpninger i samme plan (en ringformet flate som mangler, der fylling av hver kant ville dekke hullet i midten). En kant delt av mer enn to trekanter blir også rapportert: en slik flate har ikke én tydelig innside.

## Skisser på de flate flatene

Flate områder laget av mange trekanter slås sammen til én **flat flate** hver, så en skisse kan ligge på dem: klikk flaten og velg {{ui:Skisse på denne flaten}}. En flate som kuttes eller legges til senere, forblir en flate. Runde områder (et hull, en avrunding) forblir trekanter: de er ikke flater du kan velge, og visningen tegner konturen deres ut fra vinkelen mellom trekantene.

## Endre den senere

Velg **Imported1** for å se filen den kom fra, hvor mange trekanter den har og hva som ble reparert. **Enheter i filen**, **Opp i filen** og **Bruk den til** kan endres der; hver endring er ett steg i **Angre**.

## Hvor det lagres

Det reparerte nettet lagres **inne i** `.partcraft.json`-filen, så du trenger ikke nettfilen igjen. En delfil med et nettlegeme er versjon 5: en eldre PartCraft avviser den på grunn av versjonen. Et nett med 200 000 trekanter legger til omtrent 1.2 MB.

## Begrensninger

- Høyst 3 millioner trekanter og 200 MB i én fil.
- Et legeme laget av et nett bygges av nettkjernen. Med den eksakte kjernen på (kun for utviklere) sier den det, og bygges ikke.
- OBJ-materialer, teksturkoordinater og frie kurver utelates; 3MF-farger, -materialer og støtteobjekter utelates (dialogen sier hvor mange objekter som ble hoppet over).
- Legemet er like fint som nettet: en grov STL gir grove runde flater. Hull du borer i den er like runde som dine egne funksjoner.
