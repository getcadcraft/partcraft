---
title: Cadre din profile de oțel
summary: Puneți profile de oțel de-a lungul liniilor uneia sau mai multor schițe pentru a face un cadru sudat: colțuri retezate sau cap la cap, bare tăiate la potrivire acolo unde se întâlnesc, capace de capăt, guseuri și o listă de debitare cu lungimi și unghiuri de capăt.
keywords: bară structurală, cadru, cadru de oțel, tub, țeavă pătrată, hss, rhs, shs, țeavă, chs, grindă cu tălpi late, grindă I, grindă W, ipe, hea, heb, profil U, cornier, retezare, îmbinare cap la cap, decupare, capac de capăt, guseu, listă de debitare
from: 59071e5a
---

O **Bară structurală** pune un profil de oțel de-a lungul fiecărei linii din schițele alese. Desenați cadrul ca linii (fiecare linie este o bară), apoi alegeți profilul: barele sunt construite, colțurile lor sunt tăiate și prelungite, iar o listă de debitare arată cât de lungă să fie fiecare bucată și sub ce unghi.

## Crearea unui cadru

1. Desenați cadrul ca linii într-o schiță, de exemplu un dreptunghi pe planul superior. Liniile marcate ca construcție sunt lăsate în afară.
2. Cu schița selectată, alegeți {{ui:Mai multe}} › {{ui:Bară structurală}}. Fiecare linie a schiței primește o bară.
3. În panou, alegeți **Familia** și **Format** ale profilului. Familiile sunt tabelele AISC (W, S, C, L, țevi HSS, Țeavă) și EN 10365 (IPE, HEA, HEB, UPN).

### Un cadru în 3D

Liniile din mai multe schițe formează un singur cadru: un dreptunghi superior schițat pe un plan de deasupra și picioarele schițate pe plane verticale se întâlnesc cu capetele lor în 3D. Sub **De-a lungul liniilor** din panou, bifați fiecare schiță ale cărei linii le urmează barele. Capetele care se întâlnesc la mai puțin de un micrometru sunt unite.

## Așezarea profilului pe linia sa

- **Rotire (°)** rotește profilul în jurul liniei sale. O grindă stă cu înălțimea în sus (pe o bară verticală, înălțimea este orientată spre față).
- **Pe linie** alege ce punct al profilului se află pe linie: centrul, sau un colț ori mijlocul unei laturi a conturului profilului. „Mijloc jos” pune cadrul deasupra planului schiței, în loc să-l treacă prin el.

## Colțuri și îmbinări

| Unde se întâlnesc barele | Ce se întâmplă |
|---|---|
| Două bare cap la cap, **Colțuri: Retezate** | Ambele sunt tăiate în planul de la jumătatea distanței dintre ele, ca o ramă de tablou |
| Două bare cap la cap, **Colțuri: Cap la cap** | Prima bară continuă până la fața îndepărtată a celei de-a doua; a doua este tăiată drept la fața apropiată a primei |
| O bară se termină pe mijlocul alteia (un T) | Este tăiată să se potrivească pe exteriorul celeilalte bare |
| Trei sau mai multe se termină într-un punct | Prima continuă drept dincolo de celelalte; celelalte sunt tăiate să se potrivească pe ea |

Prima bară este cea a cărei linie vine prima: liniile păstrează ordinea în care au fost desenate, schiță cu schiță, în ordinea în care au fost bifate schițele.

## Capace de capăt și guseuri

- **Capacele de capăt** închid fiecare capăt liber cu o placă având conturul profilului, cu grosimea setată, în afara capătului.
- **Guseele** pun o placă triunghiulară în fiecare colț în care două bare se întâlnesc sub un unghi: **Dimensiune guseu** de-a lungul fiecărei bare de la colț, **Grosime guseu** pe lățime, centrat pe planul colțului.

## Lista de debitare

Panoul listează fiecare bucată, cu piesele identice grupate: profilul, lungimea (de la punctul lung la punctul lung, cum ați marca-o pentru ferăstrău), cum este tăiat fiecare capăt (drept, sub un unghi față de drept sau tăiat la potrivire) și ce bare sunt. Capacele de capăt și guseurile sunt listate cu dimensiunile lor. {{ui:Salvare listă de debitare (CSV)}} o salvează pentru o foaie de calcul.

O bară tăiată la potrivire pe o țeavă cu colțuri rotunjite intră puțin în raza colțului acelei țevi, deci lungimea sa de la punctul lung este cu câțiva milimetri mai mare decât spațiul dintre fețe.

## Limite

- Barele urmează doar linii drepte; arcele și spline-urile din schiță sunt lăsate în afară.
- Îmbinările sunt tăiate, nu sudate: nu se desenează cordoane de sudură, iar cadrul este un singur solid.
- Profilele sunt desenate din dimensiunile tabelului: forme W cu racordarea de la rădăcină, S și canale cu tălpi paralele, țevi cu raze de colț; găurile, pregătirile de capăt și rosturile de sudură nu sunt făcute automat.
- Barele structurale sunt construite de nucleul de plasă. Cu nucleul exact activat (doar pentru dezvoltatori), ele anunță acest lucru și nu sunt construite.
