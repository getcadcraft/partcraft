---
title: Dokumenter og revisjoner (valvet)
summary: En steg-for-steg-gjennomgang av ett ekte prosjekt: legg en prosjektmappe med deler og sammenstillinger under kontroll, sjekk ut en del, endre den, sjekk den inn med en merknad, frigi den, se hva som bruker den og stykklisten, hva en annen person ser mens den er låst, og hvordan dette fungerer med skymapper.
keywords: valv, dokumenter, veiledning, steg for steg, sjekk ut, sjekk inn, revisjon, frigi, godkjenn, lås, historikk, hvor brukt, stykkliste, sammenstilling, skymappe, prosjektmappe, to personer, delt mappe
from: 0a5e6983
---

## Hva du skal gjøre

Du er Ana og jobber med Riverside Clinic sammen med en kollega, Ben. Prosjektets deler og sammenstillinger ligger i én mappe som dere begge kan nå (en delt disk, en synkronisert mappe eller en skymappe). Til slutt har én fil gått fra første kopi til frigitt revisjon **A**, er endret igjen som **B.1**, du har sett hvem som gjorde hva, og du har sett hva Ben ser når du holder filen.

Alt lagres i en skjult mappe `.ccvault` ved siden av filene dine: ingen server, ingenting lastes opp (en skymappe er unntaket, se siste steg). For alle knapper og regler samlet, se emnet *Dokumenter: utsjekking, revisjoner og frigivelse* der appen din har det.

## 1. Sett opp prosjektmappen

1. Velg {{ui:Dokumenter…}} i gruppen **Fil** på verktøylinjen.
2. Velg {{ui:Velg prosjektmappen}} og velg mappen som inneholder prosjektets deler og sammenstillinger. (Prosjektmapper fungerer i Studio og i nettlesere som kan åpne en mappe, for eksempel Chrome og Edge. I andre nettlesere sier panelet fra om det.)
3. Velg {{ui:Endre}} ved siden av **Du:** og skriv navnet ditt, `Ana` (hvis den spør, også navnet på denne datamaskinen). Panelet viser nå *Du: Ana på* og datamaskinen din. Navnet ditt står på alt du gjør.
4. Velg {{ui:Start et valv i denne mappen}} og skriv prosjektets navn, `Riverside clinic`. Panelet sier *Valv startet for Riverside clinic.*

## 2. Legg en fil under kontroll

1. Åpne **Filer utenfor valvet** og velg {{ui:Legg til}} ved siden av `plates/Bracket.partcraft.json`.
2. Den vises under **Filer i valvet** med revisjon **A.1** og status **Under arbeid**. A.1 er første kopi; valvet beholder en kopi av hver revisjon.

## 3. Sjekk ut, endre, sjekk inn

1. Velg {{ui:Åpne}} ved siden av `plates/Bracket.partcraft.json`. Delen åpnes i PartCraft, og panelet lukkes slik at du kan se den. Åpne panelet igjen fra {{ui:Dokumenter…}}.
2. Åpne panelet igjen og velg {{ui:Sjekk ut}}. Raden viser nå **Sjekket ut til deg**. En låsefil er laget i `.ccvault/locks`; ingen andre kan sjekke ut denne filen før du sjekker den inn.
3. Endre delen: rediger et mål, legg til et hull. Lagring nektes med mindre filen er sjekket ut til deg, og da står det hvorfor; Lagre som fungerer alltid for en kopi av din egen.
4. Åpne panelet, velg {{ui:Sjekk inn}} og skriv hva som ble endret (`Flyttet døren`). Panelet sier *sjekket inn som A.2*. Filen i prosjektmappen er nå delen du hadde åpen, og låsen er borte. Innsjekking uten endring beholder revisjonen.

Ombestemmer du deg, gir {{ui:Angre utsjekking}} filen tilbake uten ny revisjon.

## 4. Gjennomgang og frigivelse

1. Velg {{ui:Send til gjennomgang}}. Statusen blir **Til gjennomgang**, og filen er skrivebeskyttet.
2. Før godkjenning, velg {{ui:Prosjektinnstillinger}} og list opp hvem som kan godkjenne (ett navn per linje), for eksempel `Ben` og `Carla`, og kryss av for regelen om at godkjenneren må være en annen enn forfatteren. Velg {{ui:Lagre innstillinger}}. Nå nekter selve valvet alle andre.
3. Ben (eller Carla) velger {{ui:Godkjenn}} og skriver inn godkjennerens navn. Statusen blir **Frigitt**, og revisjonen blir **A**, med *godkjent av* og navnet. En frigitt fil er skrivebeskyttet. {{ui:Send tilbake}} ville ha returnert den til Under arbeid, med en begrunnelse.

Godkjennerens navn er navnet som ble skrevet i panelet; det er en oppføring over hvem som signerte, ikke et bevis på identitet.

## 5. En ny revisjon

1. På den frigitte filen, velg {{ui:Ny revisjon}}. Du reserverer den neste bokstaven.
2. Endre den, og velg {{ui:Sjekk inn}}. Revisjonen er **B.1**, under arbeid. Frigi den på samme måte, så blir den **B**. {{ui:Angre utsjekking}} før første innsjekking lar den stå på **A**.

Revisjonsbokstavene går A, B … Z, AA, AB. Hvis standarden din hopper over noen bokstaver, hopper prosjektinnstillingen *Bruk ASME Y14.35-sekvensen* over I, O, Q, S, X og Z for de neste revisjonene.

## 6. Se hva som skjedde

Velg filens navn for å åpne detaljene:

- **{{ui:Historikk}}**: alle hendelser, nyeste først, med hvem, hvilken datamaskin og når: *Sjekket inn A.2* av Ana, *Frigitt* av Ben, og så videre.
- **Revisjoner**: revisjonstabellen: alle beholdte revisjoner, med dato, hvem som sjekket dem inn, merknaden og hvem som godkjente. Valvet beholder en kopi av hver i `.ccvault/revs`.
- **{{ui:Bruker}}**: delene i en sammenstilling.
- **{{ui:Brukt av}}**: Brukt av lister hver sammenstilling i valvet som har denne delen: endrer du en vinkel, vet du hvilke sammenstillinger du skal sjekke.

## Sammenstillinger: hva de bruker og stykklisten

Legg en sammenstilling (`.partcraft.json`, lagret fra sammenstillingsmodus) i mappen og legg den til. Velg navnet: **Bruker** lister delene den har, med hver dels revisjon og status; **Brukt av** på en del lister hver sammenstilling som har den. {{ui:Stykkliste (CSV)}} lagrer hele delelisten, nivå for nivå, med mengder, revisjoner og statuser, til et regneark. Endrer du en vinkel, forteller **Brukt av** deg hvilke sammenstillinger du skal se på.

## 7. Hva Ben ser mens du holder filen

Sjekk nå filen ut igjen, og be Ben åpne samme prosjektmappe på sin datamaskin og åpne panelet. På filens rad ser han **Sjekket ut av Ana på** din datamaskin **siden** klokkeslettet, og ingen knapp for {{ui:Sjekk ut}}. Prøver han likevel, nekter valvet: låsen er en fil som systemet ikke lager to ganger, så to personer kan ikke begge holde filen, selv i samme brøkdel av et sekund, når mappen ligger på disk i Studio. (I en nettleser gir mappen bare et best mulig forsøk, og panelet sier det under **Mappe**.)

Hvis Ana er borte og Ben trenger filen, frigjør {{ui:Bryt utsjekking}} den. Han må skrive en begrunnelse; den går inn i loggen sammen med hvis utsjekking det var. Når prosjektet har listet opp administratorer, kan bare de gjøre det. En utsjekking eldre enn grensen for utdaterte (som standard 14 dager) merkes *lenge siden*. Etter bruddet blir Anas sene innsjekking nektet, slik at dere ikke kan overskrive hverandre.

## 8. Skymapper

En skymappe er en prosjektmappe som ligger i teamets skylagring, så teamet trenger ingen delt disk. I Studio, pålogget med din CadCraft-konto, viser panelet {{ui:Åpne en skymappe}} ved siden av {{ui:Velg prosjektmappen}}. Velg den og velg mappen, som listes som arbeidsområde / mappe. En eier av arbeidsområdet lager mappen først, og teamets skylagring må være aktiv. Alt over fungerer på samme måte; serveren lager låsen, og den er streng på tvers av personer. Er du ikke pålogget, sier panelet at du må logge inn. I en vanlig nettleserfane tilbys ikke skyknappen; bruk Studio.

## Prøv det

Gjør de åtte stegene over med en kopi av en ekte fil. For trinnene med to personer trenger du en annen person, eller to vinduer med to navn. Hvis du prøver med en ekte delt mappe, lister siden for fellesskapstesting en sjekk som spør nettopp dette, og tar imot resultater.
