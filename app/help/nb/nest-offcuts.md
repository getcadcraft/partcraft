---
title: Ta vare på og gjenbruk rester
summary: Etter en nesting blir det som er igjen av hver plate til en nummerert rest i en lagerliste; neste nesting bruker restene først, deretter hele plater.
keywords: nesting, restemne, rest, lager, plate, ark, gjenbruk, materiale, tykkelse, CSV
from: 7a68d4b8
---

Når du nester deler på plater, kan hver plates brukbare rest (ikke små flak) tas vare på som en **rest**: en nummerert kontur (R-0001, R-0002 …) med materialet, tykkelsen, størrelsen og jobben den kom fra. Listen lagres med filen og kan lagres som en CSV.

## Bruk dem igjen

Oppgi **materiale** og **tykkelse**, la {{ui:Bruk rester først}} være på, og nest. Rester med samme materiale og tykkelse prøves minst først; delene som passer, legges på dem, innenfor restens egen kontur og unna kanten; det som ikke passer, legges på nye plater. Jobbrapporten sier hvilke rester som ble brukt, og hva som ble igjen. Med {{ui:Lagre det som blir igjen som rester}} på, skriver {{ui:Legg denne jobben til lageret}} deretter jobben inn i lagerlisten: en rest som ble brukt, merkes **Brukt** (med jobben) og tilbys ikke igjen; det som er igjen av den, blir en ny rest som husker sin forelder.

## Hva som regnes som en rest

Resten måles med avstanden du satte (ingen del er nærmere enn det til et snitt). Striper smalere enn en tjuendedel av platen og biter mindre enn 2 % av den er skrap; endre begge grensene hvis verkstedet ditt tar vare på mindre biter. Hull inne i deler tilhører delene og tas ikke vare på. En rull har ingen rester.

## I tegningen

DXF-filen for en nesting tegner konturen til hver rest på laget REMNANTS med nummeret i midten, slik at bitene kan merkes når de skjæres.

Ikke bygget ennå: kornretning for en rest, strekkode- eller etikettark, rester av ruller, lager delt mellom prosjekter.
