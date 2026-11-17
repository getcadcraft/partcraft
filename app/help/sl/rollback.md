---
title: Vračanje in napredovanje po zgodovini
summary: Vrstico vračanja premikajte navzgor in navzdol po eno značilko, da spremljate gradnjo dela, vstavljate značilke sredi zgodovine in se vrnete na konec.
keywords: vračanje, povratek, napredovanje, vrstica vračanja, korak po zgodovini, vstavi značilko, zamrzni, zgodovina
from: 9a366cae
---

Vrstica vračanja določa, koliko zgodovine je zgrajene. Značilke pod njo so zasivljene in niso zgrajene; nove značilke se dodajo na vrstici.

## Korak po eno značilko

Z delom na zaslonu (brez odprte skice ali risbe):

| Dejanje | Rezultat |
|---|---|
| {{key:[}} ali gumb s puščico navzgor poleg imena dela | Vrstica se premakne za eno značilko navzgor |
| {{key:]}} ali gumb s puščico navzdol | Vrstica se premakne za eno značilko navzdol |
| {{key:End}} ali gumb za premik vrstice na konec | Vse značilke se znova zgradijo |

Vrstica stanja pove, kje je vrstica, na primer „Vrstica vračanja za Sketch1: zgrajena je 1 od 2 značilk“. Gumbi so onemogočeni, kadar se vrstica v tej smeri ne more premakniti dlje.

Lahko izberete tudi {{ui:Povrni nazaj do sem}} na kateri koli značilki ali kliknete **Vrstica vračanja · napredovanje** v zgodovini.

## Vstavite značilko sredi zgodovine

1. Vrstico pomaknite nazaj, dokler ne stoji tam, kamor sodi nova značilka.
2. Dodajte značilko: pride na vrstico.
3. Pritisnite {{key:End}}, da zgradite preostanek zgodovine na njej.

Vsak premik vrstice je korak, ki ga lahko razveljavite s {{key:Mod+Z}}. Mesto vrstice se shrani v datoteko, zato je del lahko poslan povrnjen nazaj. Orodje z ukazno vrstico jo prav tako premika: `partcraft rollback part.json` in `partcraft forward part.json --end`.
