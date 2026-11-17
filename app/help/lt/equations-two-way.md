---
title: Lygtys abiem kryptimis
summary: Pakeiskite parametrą, ir detalė seka paskui; įveskite naują dydį į išvestinį skaičių, o PartCraft apskaičiuoja parametrą, kuris už jo slypi, ir klausia, kurį, kai kelios galėtų keistis.
keywords: lygtys, spręsti atgal, išvestinis matmuo, dviem kryptimis, atvirkščiai, tikslo paieška, parametrai, susietos reikšmės, kuris parametras
from: 82dc0269
---

Lygtis, pavyzdžiui **Extrude1 depth = thick + extra**, veikia abiem kryptimis.

## Pirmyn: pakeiskite parametrą

Skirtuke {{ui:Parameters}} pakeiskite `thick` iš 20 į 30. Extrude1 gylis tampa 30 + extra, ir detalė perskaičiuojama.

## Atgal: pakeiskite išvestinį skaičių

1. Spustelėkite „Extrude1“ istorijoje. Jo **Gylis (mm)** laukelyje rodoma **ƒ**: lygtis jį valdo.
2. Įrašykite norimą dydį, pavyzdžiui, `40`, ir paspauskite {{key:Enter}}.

PartCraft sprendžia parametrą, kuris slypi už lygties, per tiek žingsnių, kiek reikia (`depth = hub_h`, `hub_h = disc_t + 50`: įvedus aukštį, pakinta `disc_t`). Statusinėje juostoje rašoma, kas pasikeitė, pavyzdžiui, kad extra pakito iš 5 į 15.

Kai du ar daugiau parametrų valdo skaičių, langelis klausia **Kurį parametrą keisti?** ir išvardija juos. Spustelėkite vieną; kiti išlaiko savo reikšmes. {{ui:Cancel}} nieko nekeičia.

Tas pats veikia ir eskize: dukart spustelėkite išvestinį matmenį, įveskite reikšmę ir paspauskite {{key:Enter}}. Taip pat veikia **Value** stulpelyje parametrų lentelėje, parametrui, kuris pats yra išraiška.

## Kai negalima

- Skaičius, kuris turi būti sveikas (šablono kiekis) arba likti ribose (kampas iki 360°), atmetamas prieš ką nors pakeičiant.
- Lygtis tik iš fiksuotų skaičių (`=40`) neturi parametro, kurį galima keisti: įvestas skaičius pakeičia ją.
- Jei nė viena parametro reikšmė neduoda įvesto dydžio, statusinėje juostoje sakoma tai, ir niekas nepasikeičia.
- Eskizas, kurio negalima išspręsti su nauja reikšme, išlaiko ankstesnes reikšmes, o statusinėje juostoje nurodomas eskizas.

Kiekvienas pakeitimas, bet kuria kryptimi, yra vienas žingsnis {{key:Mod+Z}} ir {{key:Mod+Y}}.
