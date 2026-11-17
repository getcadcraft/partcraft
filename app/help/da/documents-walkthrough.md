---
title: Dokumenter og revisioner (arkivet)
summary: En trin-for-trin-gennemgang af et reelt job: sæt en projektmappe med dele og samlinger under styring, tjek en del ud, ændr den, tjek den ind med en note, frigiv den, se hvad der bruger den og styklisten, hvad en anden person ser, mens filen er låst, og hvordan det virker med skymapper.
keywords: arkiv, dokumenter, trin-for-trin-guide, vejledning, tjek ud, tjek ind, revision, frigivelse, godkend, lås, historik, hvor brugt, stykliste, bom, samling, skymappe, projektmappe, to personer, delt mappe
from: 0a5e6983
---

## Hvad du kommer til at gøre

Du er Ana, og du arbejder på Riverside Clinic sammen med en kollega, Ben. Projektets dele og samlinger ligger i én mappe, som I begge kan komme til (et delt drev, en synkroniseret mappe eller en skymappe). Når du er færdig, er en fil gået fra sin første kopi til frigivet revision **A**, er blevet ændret igen som **B.1**, du har set, hvem der gjorde hvad, og du har set, hvad Ben ser, når du har filen.

Alt gemmes i en skjult mappe `.ccvault` ved siden af dine filer: ingen server, intet uploades (en skymappe er undtagelsen, se det sidste trin). For alle knapper og regler samlet ét sted, se emnet *Dokumenter: tjek ud, revisioner og frigivelse*, hvor din app har det.

## 1. Opsæt projektmappen

1. Vælg {{ui:Documents…}} i gruppen **Fil** på værktøjslinjen.
2. Vælg {{ui:Choose the project folder}} og vælg den mappe, der indeholder projektets dele og samlinger. (Projektmapper virker i Studio og i browsere, der kan åbne en mappe, fx Chrome og Edge. I andre browsere siger panelet det.)
3. Vælg {{ui:Change}} ved siden af **Du:** og skriv dit navn, `Ana` (hvis den spørger, også navnet på denne computer). Panelet viser nu *Du: Ana på* og din computer. Dit navn kommer på alt, du gør.
4. Vælg {{ui:Start a vault in this folder}} og skriv projektets navn, `Riverside clinic`. Panelet siger *Arkiv startet for Riverside clinic.*

## 2. Sæt en fil under styring

1. Åbn **Filer, der ikke er i arkivet** og vælg {{ui:Add}} ved siden af `plates/Bracket.partcraft.json`.
2. Den vises under **Filer i arkivet** med revision **A.1** og status **Under arbejde**. A.1 er dens første kopi; arkivet gemmer en kopi af hver revision.

## 3. Tjek ud, ændr, tjek ind

1. Vælg {{ui:Open}} ved siden af `plates/Bracket.partcraft.json`. Delen åbnes i PartCraft, og panelet lukker, så du kan se den. Åbn panelet igen fra {{ui:Documents…}}.
2. Åbn panelet igen og vælg {{ui:Check out}}. Rækken siger nu **Udtjekket til dig**. En låsefil er oprettet i `.ccvault/locks`; ingen andre kan tjekke filen ud, før du tjekker den ind.
3. Ændr delen: ret et mål, tilføj et hul. Gem afvises, medmindre filen er udtjekket til dig, og der står hvorfor; Gem som virker altid for en kopi af din egen.
4. Åbn panelet, vælg {{ui:Check in}} og skriv, hvad der er ændret (`Flyttede døren`). Panelet siger *tjekket ind som A.2*. Filen i projektmappen er nu den del, du havde åben, og låsen er væk. Indtjekning uden ændringer beholder revisionen.

Hvis du ombestemmer dig, giver {{ui:Undo check-out}} filen tilbage uden en ny revision.

## 4. Gennemgang og frigivelse

1. Vælg {{ui:Send for review}}. Status bliver **Til gennemgang**, og filen er skrivebeskyttet.
2. Før du godkender, vælg {{ui:Project settings}} og angiv, hvem der må godkende (ét navn pr. linje), fx `Ben` og `Carla`, og sæt flueben i reglen om, at godkenderen skal være en anden end forfatteren. Vælg {{ui:Save settings}}. Nu afviser selve arkivet alle andre.
3. Ben (eller Carla) vælger {{ui:Approve}} og skriver godkenderens navn. Status bliver **Frigivet**, og revisionen bliver **A**, med *godkendt af* og navnet. En frigivet fil er skrivebeskyttet. {{ui:Send back}} ville have sendt den tilbage til Under arbejde med en begrundelse.

Godkenderens navn er det navn, der er skrevet i panelet; det er en registrering af, hvem der har skrevet under, ikke et bevis for identitet.

## 5. En ny revision

1. På den frigivne fil vælges {{ui:New revision}}. Du reserverer det næste bogstav.
2. Ændr den, og vælg {{ui:Check in}}. Revisionen er **B.1**, under arbejde. Frigiv den på samme måde, så bliver den **B**. {{ui:Undo check-out}} før første indtjekning lader den blive på **A**.

Revisionsbogstaverne går A, B … Z, AA, AB. Hvis din standard springer nogle bogstaver over, springer projektindstillingen *Brug ASME Y14.35-rækkefølgen* I, O, Q, S, X og Z over i de næste revisioner.

## 6. Se hvad der er sket

Vælg filens navn for at åbne dens detaljer:

- **{{ui:History}}**: hver hændelse, nyeste først, med hvem, hvilken computer og hvornår: *Tjekket ind som A.2* af Ana, *Frigivet* af Ben, og så videre.
- **{{ui:Revisions}}**: revisionstabellen: alle gemte revisioner med deres dato, hvem der tjekkede dem ind, noten og hvem der godkendte dem. Arkivet gemmer en kopi af hver i `.ccvault/revs`.
- **{{ui:Uses}}**: delene i en samling.
- **{{ui:Used by}}**: Brugt af lister hver samling i arkivet, der indeholder denne del: ændrer du en bøjle, ved du, hvilke samlinger der skal tjekkes.

## Samlinger: hvad de bruger, og stykliste

Læg en samling (`.partcraft.json`, gemt fra Assembly-tilstand) i mappen og tilføj den. Vælg dens navn: **Bruger** lister de dele, den indeholder, med hver dels revision og status; **Brugt af** på en del lister hver samling, der indeholder den. {{ui:Bill of materials (CSV)}} gemmer hele delelisten, niveau for niveau, med mængder, revisioner og status, til et regneark. Ændrer du en bøjle, fortæller **Brugt af** dig, hvilke samlinger du skal kigge på.

## 7. Hvad Ben ser, mens du holder filen

Tjek filen ud igen, og bed Ben om at åbne den samme projektmappe på sin computer og åbne panelet. På filens række ser han **Udtjekket af Ana på** din computer **siden** tidspunktet, og ingen {{ui:Check out}}-knap. Hvis han alligevel prøver, afviser arkivet: låsen er en fil, som systemet ikke vil oprette to gange, så to personer ikke kan have filen på samme tid, selv i samme brøkdel af et sekund, når mappen ligger på disken i Studio. (I en browser giver mappen kun en bedste indsats, og panelet siger det under **Mappe**.)

Hvis Ana er væk, og Ben har brug for filen, frigiver {{ui:Break check-out}} den. Han skal skrive en begrundelse; den går i loggen sammen med, hvis udtjekning det var. Hvis projektet har angivet administratorer, kan kun de gøre det. En udtjekning, der er ældre end forældelsesgrænsen (14 dage som standard), markeres *lang tid*. Efter brydningen afvises Anas sene indtjekning, så I to ikke kan overskrive hinanden.

## 8. Skymapper

En skymappe er en projektmappe, der gemmes i dit teams skylager, så teamet ikke har brug for et delt drev. I Studio, logget ind på din CadCraft-konto, viser panelet {{ui:Open a cloud folder}} ved siden af {{ui:Choose the project folder}}. Vælg den og vælg mappen, der vises som workspace / folder. En workspace-ejer opretter mappen først, og teamets skylager skal være aktivt. Alt ovenfor virker på samme måde; serveren laver låsen, og den er streng på tværs af personer. Hvis du ikke er logget ind, siger panelet, at du skal logge ind. I et almindeligt browserfane tilbydes skyknappen ikke; brug Studio.

## Prøv det

Gør de otte trin ovenfor med en kopi af en reel fil. Til de to-personers trin skal du have en anden person eller to vinduer med to navne. Hvis du prøver med en reel delt mappe, har testsiden for fællesskabet en kontrol, der spørger præcis dette, og den modtager resultater.
