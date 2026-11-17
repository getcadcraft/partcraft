---
title: Delförteckning, sprängvyer och flytt av delar
summary: Ge sammanställningens delar ett nummer, beskrivning och material, läs och ladda ner stycklistan, gör sprängvyer med steg eller automatiskt, flytta delar som inte är kopplade för hand, ange ledgränser och exportera hela sammanställningen som STL, 3MF eller stycklista.
keywords: stycklista, bom, delnummer, material, densitet, csv, sprängvy, spräng, ihopfällning, spårlinjer, flytta del, dra, gizmo, förflytta, rotera, ledgränser, export av sammanställning, sammanställningssteg, sammanställningsritning, ballonger
from: ebc9f6f3
---

Dessa verktyg finns i den högra panelen för en sammanställning (se [Bygg en sammanställning](topic:build-assembly)).

## Delegenskaper

Markera en del i listan till vänster. Under **Delegenskaper** anger du:

- **Delnummer** (upp till 40 tecken) och **Beskrivning** (upp till 200).
- **Material**: ett vanligt material med dess densitet, eller **Anpassad densitet…** för att skriva in en i g/cm³. Panelen visar sedan delens massa.

Egenskaperna hör till delen, så alla kopior av den delar dem. De sparas i sammanställningsfilen.

## Stycklista

Med inget markerat ({{key:Esc}}) visar panelen **Stycklista**: en rad per del med dess positionsnummer, antal (hur många kopior), delnummer, namn, material och massa. Positionsnumren följer den ordning delarna först förekommer i listan. Massor beräknas med varje delens volym (av den facetterade solid som mesh-kärnan bygger, något låg på runda delar) och dess material. En del utan material har ingen massa, och då finns ingen summa.

{{ui:Ladda ner CSV}} sparar listan som en CSV-fil (även **Exportera › Stycklista (CSV)**). Den öppnas i valfritt kalkylblad. Text som börjar med = eller + får en inledande apostrof, så att kalkylbladet inte kör den som en formel.

## Sprängvyer

En sprängvy drar isär delarna för bilder. Den ändrar aldrig lederna eller var delarna faktiskt är: spara, kollisionskontroller och exporter använder de verkliga positionerna.

1. Med inget markerat väljer du {{ui:Ny vy}} under **Sprängvyer**.
2. Under **Add a step** -> **Lägg till ett steg** bockar du för de delar som steget flyttar, väljer en **Riktning** (+X … −Z, normalen på en yta du klickar på, eller **Dra en pil i vyn**) och ett **Avstånd**, och sedan {{ui:Lägg till steg}}. Med **Dra** drar du pilen och släpper: steget tar den riktning och det avstånd du drog.
3. Lägg till fler steg. De spelas upp i tur och ordning.
4. Dra reglaget mellan **Monterad** och **Sprängd** för att animera vyn. Streckade spårlinjer går från varje delens viloposition till var den är nu.

{{ui:Auto (radiellt)}} flyttar alla delar utom den jordade bort från sammanställningens mitt. {{ui:Auto (leder)}} flyttar varje kopplad del (med allt som sitter kopplat under den) utåt längs ledets ytnormal. Du kan behålla flera namngivna vyer. Välj en i **Vy**, eller **Monterad** för att sätta tillbaka delarna. Vyerna sparas i sammanställningsfilen.

## Flytta en del för hand

Bara en del utan led till den jordade delen flyttas för hand. Den jordade delen är fast, och leden placerar resten. Markera delen och under **Flytta för hand**:

- Skriv in **ΔX, ΔY, ΔZ** och välj {{ui:Flytta}}, eller välj en axel och en **Vinkel** och {{ui:Vrid}} (kring delens mitt).
- {{ui:Dra för att flytta}} visar pilar på delen: dra en pil för att flytta längs den axeln, eller en kvadrat för att flytta i ett plan. {{ui:Dra för att vrida}} visar ringar för att vrida den. Varje drag är ett steg i {{ui:Ångra}}. {{key:Esc}} döljer pilarna.

## Ledgränser

Markera ett led som rör sig och bocka i under **Gränser** **{{ui:Håll … mellan gränser}}** för något av dess värden, och ange sedan dess **Minsta** och **Största**. Varje värde hålls inom sina egna gränser, dess reglage täcker bara det intervallet, och {{ui:Kontrollera rörelsen med avseende på kollisioner}} sveper bara mellan dem. Ett cylindriskt led kan begränsa sin vinkel, sin förskjutning eller båda. Att ändra ledets typ tar bort gränser för värden som den nya typen inte har.

## Exportera hela sammanställningen

I en sammanställning skriver menyn **Exportera** hela sammanställningen med varje del där den är placerad:

- **STEP AP242 / AP214** och **Ritning (PDF)** finns inte ännu i den här versionen. De kräver en exakt kärna, så de är gråade. Exportera varje delens STEP (exakt solid) från delen i stället.
- **STL**: ett nät av alla delar. **3MF**: varje del en gång, placerad en gång per kopia.
- **Stycklista (CSV)**.

## Begränsningar

- Sammanställningsritningen och sammanställningens STEP finns inte ännu i den här versionen (de kräver en exakt kärna). Sprängvyer är till för bilder på skärmen.
