---
title: Ekstruder en opphøyning og klipp gjennom den
summary: Gjør en skisse om til et volumlegeme med Ekstruder, sett dybder som blind, midtplan, opp til eller to retninger, en trekkvinkel eller én kontur av skissen, og skisser deretter på en flate og bruk Klipp ut for en lomme eller et gjennomgående spor.
keywords: ekstruder, opphøyning, ekstrudert opphøyning, klipp ut, ekstrudert utklipp, lomme, gjennom alt, blind, midtplan, snu, dybde, klipp-ekstruder, opphøyning-ekstruder, pute, opp til flate, opp til neste, opp til hjørnepunkt, forskyvning fra flate, retning 2, to retninger, trekkvinkel under ekstrudering, skråning, kontur, område, valgte konturer
from: 3b13ff10
---

{{ui:Ekstruder}} presser en skisses lukkede profil rett ut av planet og lager materiale. {{ui:Klipp ut}} gjør det samme, men fjerner materiale. Begge er den samme funksjonen under overflaten; den ene kan byttes til den andre senere.

## Ekstruder en opphøyning

1. Tegn en lukket profil og lukk skissen (se [Tegn den første skissen](topic:sketch-basics)). Den forblir valgt.
2. Velg {{ui:Ekstruder}}.

Et volumlegeme på 10 mm vises, «Extrude1» legger seg til i historikken med skissen rykket inn under seg, og statuslinjen sier «Extrude1 er lagt til. Endre tallene til høyre.»

**Hvilken skisse som brukes:** skissen du nettopp lukket, eller skissen valgt i historikken. Uten noe valgt tar PartCraft den siste skissen som ingen funksjon bruker ennå. Finnes det ingen, får du beskjed om å lage en skisse først: velg et plan, Skisse, tegn en lukket profil, Avslutt.

### Angi dybde og retning

I høyre panel:

| Innstilling | Valg | Standard |
|---|---|---|
| **Operasjon** | Opphøyning (legg til materiale), Klipp ut (fjern materiale), Skjæring (behold overlappet), Nytt legeme (ikke bygget ennå i denne versjonen: den trenger en eksakt kjerne) | Opphøyning |
| **Slutt** | Blind (en dybde), Midtplan (begge veier), Gjennom alt, Opp til flate eller plan, Opp til neste flate, Opp til hjørnepunkt, Forskyvning fra flate | Blind |
| **Dybde (mm)** | Et mål over null (vises for Blind og Midtplan) | 10 |
| **Snu retning** | Vokser til den andre siden av skissplanet (vises ikke for Midtplan) | Av |

Skriv et tall og trykk {{key:Enter}} eller {{key:Tab}}: delen bygges om med en gang. **Midtplan** legger halvparten av dybden på hver side av skissen.

### Opp til en flate, neste flate eller et hjørnepunkt

Ikke bygget ennå i denne versjonen: hver «opp til»-slutt trenger en eksakt kjerne, og funksjonen sier at ekstrudering opp til en flate, neste flate eller et hjørnepunkt ikke er bygget ennå, fordi den trenger en eksakt kjerne. Bruk en blind dybde som du måler. Med en eksakt kjerne fungerer slutten slik:

- **Opp til flate eller plan**: **Opp til** tar en plan flate (Velg, deretter klikk på den) eller et referanseplan. En flate parallell med skissen gir en eksakt dybde; en skrå flate kutter enden langs skråningen. Ligger flaten bak skissen, får du beskjed om å prøve Snu retning.
- **Opp til neste flate**: stopper ved den første plane flaten på legemet som ekstruderingen møter (buede flater støttes ikke her, og det sies).
- **Opp til hjørnepunkt**: stopper i nivå med et hjørnepunkt (klikk nær enden av en kant) eller en punktfunksjon.
- **Forskyvning fra flate**: som Opp til flate, men stopper **Forskyvning (mm)** før den (målt vinkelrett på flaten).

### To retninger, trekkvinkel, én kontur

- **Andre retning** (Blind): ekstruderer også **Andre dybde (mm)** til den andre siden av skissen.
- **Trekkvinkel (°)**: sidene lener seg innover etter hvert som de går (negativ: utover), som en trekkvinkel; bare én retning. Ikke bygget ennå i denne versjonen (den trenger en eksakt kjerne): la den stå på 0.
- **Områder**: **Velg områder**, deretter klikk inne i sløyfene som skal ekstruderes; bare disse områdene brukes (en sirkel inne i et kvadrat: klikk inne i sirkelen for en sylinder, mellom dem for en plate med hull). **Alle** går tilbake til hver sløyfe.

Under disse viser **Skissemål** skissens drivende mål, slik at profilens størrelser kan endres uten å åpne skissen.

:::note
**Gjennom alt er bare for utklipp.** En opphøyning satt til Gjennom alt feiler, og meldingen sier at Gjennom alt er bare for utklipp, og at en dybde må brukes for en opphøyning. Bytter du en funksjon fra Klipp ut tilbake til Opphøyning, endres Gjennom alt automatisk til Blind.
:::

## Klipp ut en lomme

1. Klikk på den plane flaten du vil skjære inn i. Den markeres, og høyre panel sier **Flate**.
2. Velg {{ui:Skisse på denne flaten}} (eller {{ui:Skisse}} i verktøylinjen).
3. Tegn lommens omriss, for eksempel et rektangel, og sett mål på det.
4. Velg {{ui:Avslutt}}.
5. Velg {{ui:Klipp ut}}. Den starter som **Gjennom alt**: den fjerner materiale rett gjennom delen.
6. For en lomme, sett **Slutt** til **Blind (en dybde)** og skriv inn **Dybde (mm)**.

Et utklipp går inn i materialet, bort fra flaten du skisserte på. Får statuslinjen beskjed om at det ikke er noe å klippe ut på den siden av skissen, prøv den andre retningen og kryss av for **Snu retning**.

En skisse på lommens bunn følger bunnen: endres lommedybden, flytter skissen seg med den.

## Dra eller skyv en hel flate

For å få en flate til å stå ut lenger eller synke inn, trenger du ikke tegne omrisset. Klikk på den plane flaten, og bruk deretter i høyre panel:

- {{ui:Ekstruder fra den}} trekker flaten ut: PartCraft legger til en skisse på flaten med omrisset (hull i flaten forblir hull) og en ekstrudering på 10 mm.
- {{ui:Klipp inn i den}} skyver flaten inn: den samme skissen og et utklipp halvveis inn i delen.

Begge er ett steg: {{key:Mod+Z}} fjerner skissen og funksjonen sammen. Den nye funksjonen er valgt, så skriv et tall med en gang og trykk {{key:Enter}} for dybden. Omrisset kopieres som låste linjer og buer: det følger ikke senere endringer i flaten. Kan ikke deler av omrisset kopieres (en fri kurve), åpnes skissen i stedet med det som kunne kopieres; fullfør den, velg {{ui:Avslutt}}, og deretter {{ui:Ekstruder}} eller {{ui:Klipp ut}}.

## Profiler med øyer

En skisse kan holde flere lukkede sløyfer. Sløyfer side om side blir egne opphøyninger (eller utklipp); en sløyfe inne i en annen blir et hull gjennom opphøyningen. For eksempel ekstruderes et rektangel med to sirkler inni som en plate med to hull.

For å bruke bare noen av sløyfene, velg dem med **Områder** (over); en annen funksjon kan bruke de andre sløyfene i samme skisse.

## Rediger senere

- Klikk på «Extrude1» i historikken for å hente tilbake innstillingene.
- Dobbeltklikk på skissen (rykket inn under den) for å åpne den; lukk den for å bygge om.
- Se [Endre en del via historikken](topic:edit-history) for undertrykking, tilbakerulling, omordning og sletting.

## Vanlige meldinger

| Melding | Hva å gjøre |
|---|---|
| Skissen har ingen lukket profil å ekstrudere. | Skissen har ingen lukket sløyfe av heltrukne linjer. Lukk hullene, eller sett konstruksjonslinjene tilbake med {{key:Q}} |
| Profilen er åpen: en ende ved (x, y) er ikke koblet til noe. | Åpne skissen og koble den enden til neste linje |
| Det er ingenting å klippe i ennå. | Et utklipp trenger et volumlegeme å klippe i. Lag en opphøyning først |
| Ingenting er igjen av delen etter dette. | Utklippet fjernet alt. Sjekk størrelsen og retningen |

Mer i [Feilsøking](topic:troubleshooting).
