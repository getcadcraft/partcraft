---
title: Gem og genbrug rester
summary: Efter en nesting bliver det, der er tilbage af hver plade, til en nummereret rest i en lagerliste; næste nesting bruger først resterne og derefter hele plader.
keywords: nesting, afskær, rest, lager, lagerliste, spild, plade, genbrug, materiale, tykkelse, CSV
from: 7a68d4b8
---

Når du nester dele på plader, kan hver plades brugbare rest (ikke flige) gemmes som en **rest**: en nummereret kontur (R-0001, R-0002 …) med materialet, tykkelsen, størrelsen og det job, den kom fra. Listen gemmes sammen med filen og kan gemmes som CSV.

## Brug dem igen

Indtast **materiale** og **tykkelse**, lad {{ui:Brug rester først}} være slået til, og nest. Rester med samme materiale og tykkelse prøves mindst først; de dele, der passer, lægges på dem, inde i restens egen kontur og med afstand til dens kant; det, der ikke passer, lægges på nye plader. Jobrapporten siger, hvilke rester der blev brugt, og hvad der blev tilbage. Når {{ui:Gem det, der er til overs, som rester}} er slået til, skriver {{ui:Føj dette job til lageret}} derefter det ind i lagerlisten: en rest, der blev brugt, markeres **Brugt** (med jobbet) og tilbydes ikke igen; det, der er tilbage af den, bliver til en ny rest, der husker sin forælder.

## Hvad der tæller som rest

Resten måles med den afstand, du har angivet (ingen del er tættere end det på en skæring). Strimler, der er smallere end en tyvendedel af pladen, og stykker, der er mindre end 2 % af den, er skrot; ændr begge grænser, hvis dit værksted gemmer mindre stykker. Huller i dele hører til delene og gemmes ikke. En rulle har ingen rester.

## I tegningen

DXF-filen for en nesting tegner hver rests kontur på laget REMNANTS med dens nummer i midten, så stykkerne kan mærkes, når de skæres.

Ikke lavet endnu: trådretning for en rest, et stregkode- eller etiketark, rester af ruller, lager delt mellem projekter.
