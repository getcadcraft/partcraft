---
title: Odnosi in kote skice
summary: Vsak odnos in kota skice PartCraft, kaj izbrati za vsakega, njegov simbol in obnašanje med reševanjem.
keywords: odnosi, omejitve, sovpadanje, vodoravno, navpično, vzporedno, pravokotno, tangenta, enako, koncentrično, sredina, fiksiraj, razdalja, vodoravna razdalja, navpična razdalja, polmer, premer, kot, simboli, glifi
from: 9831e7be
---

Odnosi določajo, kako je geometrija postavljena glede na drugo geometrijo. Kote določajo velikosti. Za dodajanje odnosa izberite predmete z orodjem Izberi ({{key:S}}) in izberite njegov gumb v desnem podoknu; za dodajanje kote uporabite orodje Kota ({{key:D}}) ali gumbe za kote v desnem podoknu. Kako delati z njimi: [Popolna določitev skice](topic:relations-dimensions).

»Krivulja« spodaj pomeni krožnico ali lok. Izhodišče šteje kot točko.

## Odnosi

| Gumb | Simbol | Izberite | Učinek |
|---|---|---|---|
| {{ui:• Sovpadanje}} | • (prikazano samo, ko je izbrano ali v težavah) | Dve točki | Točki se srečata |
| {{ui:• Sovpadanje}} | • | Točko in črto | Točka leži na črti (ali na njenem podaljšku) |
| {{ui:• Sovpadanje}} | • | Točko in krivuljo | Točka leži na krožnici ali loku |
| {{ui:H Vodoravno}} | H | Črto ali dve točki | Črta je vodoravna ali sta točki na isti višini |
| {{ui:V Navpično}} | V | Črto ali dve točki | Črta je pokončna ali sta točki ena nad drugo |
| {{ui:∥ Vzporedno}} | ∥ | Dve črti | Črti tečeta v isti smeri |
| {{ui:⊥ Pravokotno}} | ⊥ | Dve črti | Črti se srečata pod pravim kotom |
| {{ui:T Tangenta}} | T | Črto in krivuljo | Črta se dotika krivulje, ne da bi jo prečkala |
| {{ui:T Tangenta}} | T | Dve krivulji | Dotikata se, zunaj ali znotraj, kot sta narisani |
| {{ui:T Tangenta}} | T | Zlepek in črto, lok ali zlepek, ki se stika z enim od njegovih koncev | Zlepek zapusti ta konec v smeri druge krivulje |
| {{ui:= Enako}} | = | Dve črti | Enaka dolžina |
| {{ui:= Enako}} | = | Dve krivulji | Enak polmer |
| {{ui:◎ Koncentrično}} | ◎ | Dve krivulji | Isto središče |
| {{ui:◎ Koncentrično}} | ◎ | Točko in krivuljo | Točka leži v središču krivulje |
| {{ui:M Sredina}} | M | Točko in črto | Točka leži na sredini črte |
| {{ui:↔ Simetrično}} | ↔ | Dve točki in črto | Točki sta zrcalni sliki glede na črto (Zrcali jih doda) |
| {{ui:⚓ Fiksiraj}} | ⚓ | Točko, črto, krivuljo ali zlepek | Zadrži jo točno tam, kjer je zdaj (zlepek: njene točke) |

Črte tu vključujejo osne črte. Risanje samo doda nekatere odnose: lovljenje na točko jo naredi sovpadajočo, lovljenje na krivuljo postavi točko nanjo, skoraj vodoravne ali navpične črte dobijo H ali V, pravokotnik pa pride s štirimi ogliščih povezanimi, dvema H in dvema V.

**Fiksiraj** je hiter način, da nekaj ustavite, vendar del se potem ne more prilagoditi spremembi kote drugje. Raje uporabite kote do izhodišča.

## Kote

| Gumb | Izberite | Meri | Prikazano kot |
|---|---|---|---|
| {{ui:Razdalja}} | Črto | Njeno dolžino | Razdalja 40 |
| {{ui:Razdalja}} | Dve točki | Ravno razdaljo med njima | Razdalja 40 |
| {{ui:Razdalja}} | Točko in črto | Razdaljo od točke do črte, pravokotno nanjo | Razdalja 40 |
| {{ui:Razdalja}} | Dve vzporedni črti | Razmik med njima | Razdalja 40 |
| {{ui:Vodoravna razdalja}} | Dve točki ali črto | Samo razdaljo levo–desno | Vodoravna razdalja 40 |
| {{ui:Navpična razdalja}} | Dve točki ali črto | Samo razdaljo gor–dol | Navpična razdalja 40 |
| {{ui:Polmer}} | Krožnico ali lok | Njen polmer | Polmer R10 |
| {{ui:Premer}} | Krožnico ali lok | Njen premer | Premer ⌀20 |
| {{ui:Kot}} | Dve nevzporedni črti | Kot med njima, od 0 do 180 stopinj | Kot 30° |

Z orodjem Kota PartCraft izbere vrsto glede na to, kar kliknete, in kam postavite število:

| Kliknete | Dobite |
|---|---|
| Eno črto | Njeno dolžino; pri poševni črti vodoravno, če je število nad ali pod njo, navpično, če je ob strani |
| Eno krožnico | Premer |
| Lok | Polmer |
| Dve točki | Razdaljo; vodoravno ali navpično kot pri poševni črti |
| Točko in črto | Razdaljo od točke do črte |
| Dve črti | Kot ali razdaljo, če sta vzporedni |
| Točko in krožnico | Nič: „Teh predmetov ni mogoče kotirati skupaj.“ Namesto tega kotirajte do središčne točke krožnice |

**Odmik** (prikazan kot razdalja) naredi orodje Odmik: vzdržuje kopirano črto vzporedno na tej razdalji ali kopirani lok oziroma krožnico soseden s polmerom, ki je toliko večji ali manjši. Drugi deli iste kopije odmika nosijo odnos **O** in sledijo eni koti Odmik. Glejte [Zlepki, prirezi, odmiki in druga orodja skice](topic:sketch-tools).

Vrednosti kot so milimetri (ali stopinje), nikoli negativne. Polmer in premer morata biti večja od nič. Vrednost 0 je dovoljena za razdalje: dve točki na razdalji 0 sta sovpadajoči.

## Obnašanje reševanja

- **Najmanjši premik.** Ko se vrednost spremeni, reševalnik premakne geometrijo čim manj. Črta, ki spremeni dolžino, zraste enako na obeh koncih, če ju nič ne drži.
- **Brez preobračanja.** Razdalje od točke do črte, vodoravne in navpične razdalje, koti in tangentnost si zapomnijo, na kateri strani so bile narejene. Sprememba vrednosti nikoli ne preobrne geometrije na drugo stran.
- **Konflikti pustijo stvari pri miru.** Če se odnosi med seboj protislovijo, skica ostane točno taka, kot je bila, protislovni odnosi pa postanejo rdeči.
- **Odvečni odnosi** (ki jih že implicirajo drugi) so navedeni v vrstici stanja („je že implicirano. Izbrišite ga.“), značilka pa se še vedno zgradi z opozorilom.
- **Tangentni stiki.** Kjer se lok zaobljenja stika s svojima črtama v skupni končni točki, je tangentnost rešena v obliki, ki tam ostane natančno določena, zato zaobljenja skice ne berejo kot preveč določena.

## Še ni na voljo

Kolinearni, koradialni in prebodni odnosi; točka na zlepku; gnane (referenčne) kote; ordinatne kote in kote dolžine loka; enačbe med kotami. Za kolinearne črte uporabite Vzporedno in razdaljo 0.
