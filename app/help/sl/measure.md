---
title: Merjenje razdalj, kotov in mase
summary: Kliknite dve stvari v pogledu za najmanjšo razdaljo, kot in ΔX ΔY ΔZ; preberite dolžino roba, premer izvrtine, površino ploskve ali koordinate točke; pridobite prostornino, maso, težišče in vztrajnostni moment dela ali sestava.
keywords: meri, razdalja, najmanjša razdalja, kot, dolžina, polmer, premer, površina, koordinate, delta, pregled, masne lastnosti, masa, teža, težišče, vztrajnostni moment, gostota, material
from: 20bda0b7
---

**Meri** deluje na modelu v vseh delovnih okoljih (Oblikovanje, Oblika, Simulacija, Generativno, Izdelava) in v sestavu. Je v skupini **Pogled** v meniju {{ui:Pogledi}} ali pa pritisnite {{key:M}}. Kartica se odpre nad zgornjim levim delom pogleda.

## Izmerite eno stvar

Kliknite oglišče, rob ali ploskev. Kartica prikaže:

- **Točko** (oglišče, središče roba ali središče kroga): njene X, Y, Z.
- **Rob**: raven, krožen ali krivulja, in njegovo dolžino; za krog tudi polmer, premer in središče.
- **Ploskev**: ravna, valj, stožec in podobno, ter njeno površino; normalo ravne ploskve; polmer in premer valja (velikost izvrtine). Površine so površine faset, ki jih naredi jedro mreže.
- **Celotno telo**: držite {{key:Shift}} in kliknite del. Dobite njegovo prostornino, površino, maso in vztrajnost (glejte spodaj).

Kazalec se prilepi na oglišča, središča robov in središča krogov v 10 slikovnih pikah; majhna modra pika pokaže prilepitev pred klikom. Za izbiro središča izvrtine usmerite kazalec na sredino izvrtine; za izbiro njenega roba (kroga) usmerite kazalec na rob.

## Izmerite med dvema stvarema

Kliknite drugi predmet. Kartica doda:

- **Najmanjšo razdaljo** in dve najbližji točki, narisani v pogledu s črto med njima.
- **ΔX, ΔY, ΔZ** od prve najbližje točke do druge.
- **Kot** med dvema ravnima ploskvama (med njunima normalama, 0–180°), med dvema ravnima robovoma ali osema (0–90°) ali med robom in ploskvijo.
- **Razmik med ravninama** za dve vzporedni ravni ploskvi, **Središče do središča** za dva kroga ali izvrtini, **Os do osi** za dve vzporedni izvrtini ali valja.

Tretji klik začne nov par. {{key:Esc}} počisti izbor; še en {{key:Esc}} (ali {{ui:Zapri}}) zapre Meri. {{ui:Kopiraj}} da rezultate na odložišče kot besedilo, ločeno s tabulatorji, pripravljeno za lepljenje v preglednico.

### Kako natančno je

PartCraft gradi del z jedrom mreže, zato se razdalje računajo na fasetah mreže, kartica pa to pove z besedilom **približno: po fasetah**. To je pravilno za ravne ploskve in razdalje med oglišči, pri ukrivljenih pa je rahlo netočno. Finejša nastavitev **Krivulje** jih približa. Natančno merjenje na pravih površinah zahteva točno jedro: v tej različici še ni na voljo.

## Masne lastnosti

Izberite {{ui:Masne lastnosti}} na kartici ali v meniju {{ui:Pogledi}}. Pri delu izberite **Material** na kartici (jeklo, aluminij, plastike in drugi z njihovimi običajnimi gostotami). V sestavu ima vsak del material, nastavljen v njegovih lastnostih (izberite del, nato **Material**), rezultat pa velja za vse dele skupaj.

Kartica prikaže maso, prostornino, površino, težišče, tenzor vztrajnosti (Ixx, Iyy, Izz in produkte Ixy, Iyz, Ixz, v kg·mm², glede na težišče vzdolž svetovnih osi) in glavne momente. Brez materiala prikaže enako na enoto gostote (mm⁵) in brez mase.

Števila so točna za tesselirano telo, ki ga naredi jedro mreže (ukrivljene ploskve kot fasete), zato je okrogel del nekoliko prenizek, kartica pa to pove. Gostote materialov so tipične vrednosti iz priročnikov; pravi zlitina ali razred se lahko razlikuje za nekaj odstotkov.

## Omejitve

- Prilepitve lahko najdejo točko, skrito za drugo geometrijo; preverite, ali kartica prikaže to, kar ste mislili.
- Meri se zapre, ko odprete skico ali risalni list ali zamenjate delovno okolje.
