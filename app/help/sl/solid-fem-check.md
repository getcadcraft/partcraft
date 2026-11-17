---
title: Solid FEM: preverba napetosti enega dela
summary: Vklopite dodatek Solid FEM, mrežite del, izberite pritrjene ploskve in obremenitev v 3D pogledu, rešite in preberite pomik ter von Misesovo napetost na modelu.
keywords: solid fem, končni elementi, fea, napetost, von mises, pomik, pritrjena ploskev, obremenitev, tlak, gravitacija, lastna frekvenca, oblika nihanja, mreža, dodatek
from: 8b7e6ba2
---

## Kaj boste naredili

Preverite en trdni del pod obremenitvijo: kje se premakne in kje je napetost največja. Študija je linearna in elastična, zato je pripomoček za preverjanje; vaš inženir pregleda rezultate.

## Koraki

1. Izberite {{ui:Nastavitve}} › {{ui:Dodatki}} in vklopite {{ui:Solid FEM}} (dokler tega ne storite, je izklopljen). Odprite zavihek {{ui:Solid FEM}} v desnem podoknu.
2. Pod {{ui:Material}} izberite enega ali {{ui:Po meri}} in vnesite Poissonovo razmerje, gostoto in mejo tečenja.
3. Pritisnite {{ui:Dodaj pritrjene ploskve}}, kliknite ploskve, ki so v 3D pogledu držane, nato pritisnite {{ui:Izbiranje končano}}.
4. Dodajte obremenitev z {{ui:Dodaj silo}}, {{ui:Dodaj tlak}} ali {{ui:Dodaj gravitacijo}} in izberite njene ploskve na enak način.
5. Pritisnite {{ui:Mrežiraj del}}, nato {{ui:Reši}}. Če želite frekvence, najprej izberite {{ui:Lastne frekvence}} pod {{ui:Študija}}.
6. Preberite {{ui:Rezultati}} in {{ui:Opozorila}}, nato pritisnite {{ui:Prikaži na modelu}}, da narišete von Misesovo napetost, pomik ali obliko nihanja; {{ui:Odstrani prikaz}} ga odstrani.

## Opombe

- Stran rešuje do določenega števila elementov; vrstica stanja pove, kdaj je vaša velikost elementov prefina.
- Napetost na pritrjenih ploskvah, točkah obremenitve in ostrih vogalih raste, ko se mreža zgosti. Zgostite in primerjajte, preden se zanesete na največjo vrednost.
- Vsaka sprememba je en korak razveljavitve, nastavitve pa se shranijo v datoteko dela.
- Za študije popuščanja in stika glejte [Preverjanje napetosti in upogiba](topic:simulation).
