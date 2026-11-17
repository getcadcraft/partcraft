---
title: Mijenjajte veličine bez otvaranja skice
summary: Upravljajte dijelom iz brojeva u desnom panelu: kote skica, dubine, brojevi i uglovi, kako planirati dio da ga pravi brojevi upravljaju, i gdje parametri i jednačine preuzimaju.
keywords: parametri, upravljajuće kote, namjera dizajna, promjena veličine, jednačine, globalne varijable, tabela dizajna, konfiguracije, promjena veličine, izmijeni kotu
from: c2ae1a32
---

Svaka veličina u PartCraft dijelu je broj koji kasnije možete promijeniti: kote u njegovim skicama i postavke njegovih značajki. Ne morate otvarati skicu da promijenite njene kote.

## Promjena kote skice iz panela

1. Kliknite značajku u historiji, npr. "Extrude1".
2. Pod sopstvenim postavkama izvlačenja, **Kote skice (Sketch1)** navodi svaku kotu njene skice: "Udaljenost", "Prečnik", "Ugao (°)" i tako dalje.
3. Upišite novu vrijednost u jedno polje i pritisnite {{key:Enter}} ili {{key:Tab}}.

Skica se rješava sa novom vrijednošću, a cijeli dio se ponovo gradi. Ako izaberete samu skicu, prikazuje se ista lista kao **Upravljajuće kote**.

Poluprečnik ili prečnik mora biti veći od nule, a ugao je između 0 i 180 stepeni. Statusna traka to kaže ako nije.

:::tip
Koje je koje polje? Polja su navedena redoslijedom kojim su kote napravljene. Ako niste sigurni, otvorite skicu (dvostruki klik na nju), dvaput kliknite kotu na platnu i promijenite je tamo.
:::

## Odmah upišite glavni broj

Izaberite značajku u historiji (ili je samo dodajte) i upišite broj: ide u glavno polje značajke, ono koje najviše mijenjate (**Dubina** izvlačenja, **Ugao** rotiranja, **Prečnik** rupe, **Broj** uzorka, **Poluprečnik** zaobljenja, debljina zida ljuske). Pritisnite {{key:Enter}} da postavite, ili {{key:Esc}} da zadržite staru. Dodavanje izvlačenja to kaže u statusnoj traci: "Dodan je Extrude1. Promijenite njegove brojeve desno ili upišite broj sada za njegovu dubinu."

## Promjena broja u historiji

Red svake značajke u historiji prikazuje njen glavni broj pored naziva: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Dvaput kliknite broj (ili izaberite red i pritisnite {{key:F2}}) i otvara se polje tu. Upišite novu vrijednost i pritisnite {{key:Enter}}; {{key:Esc}} zadržava staru. Radi tačno kao polje značajke na desnoj strani: ista ograničenja, `=` da upišete jednačinu kao `=width/2`, i jedan korak poništavanja.

Na izvlačenju, rupi ili uzorku, dvostruki klik bilo gdje na redu otvara polje. Na zaobljenju, skošenju, ljusci, nagibu ili navoju dvostruki klik na naziv i dalje vodi na biranje ivica ili površina, pa dvaput kliknite sam broj. Skice nemaju broj u redu: dvostruki klik otvara skicu.

## Povucite u prikazu

Izaberite izvlačenje u historiji (ili kliknite na njega u prikazu, pa njegov red) i narandžasta strelica stoji na njegovoj krajnjoj površini, sa dubinom u polju pored nje. Povucite strelicu: dio prati vaše povlačenje, a kad pustite, nova dubina se postavlja kao jedan korak ({{key:Mod+Z}} je vraća). Pritisnite {{key:Esc}} dok povlačite da se vratite na početak. Dubina se mijenja u koracima od desetine veličine: 1 mm kod izvlačenja od 25 mm, 0.1 mm kod onog od 3 mm.

Rotiranje dobija zakrivljenu strelicu na kraju svog okreta: povucite je oko ose da promijenite ugao, u cijelim stepenima od 1° do 360°.

Ili kliknite u polje pored strelice, upišite vrijednost (ili `=` i jednačinu) i pritisnite {{key:Enter}}. Nema strelice na izvlačenju koje ide **Kroz sve** ili do površine, ni na vrijednosti koju vodi jednačina: promijenite ih na desnoj strani.

## Brojevi koji upravljaju dijelom

| Gdje | Šta možete promijeniti |
|---|---|
| Skica | Svaka kota: dužine, udaljenosti, poluprečnici, prečnici, uglovi |
| Izvlačenje i Izrezivanje | Dubina, završni uslov, smjer, izbočina ili izrez |
| Rotiranje i rotirano izrezivanje | Ugao, osa, izbočina ili izrez |
| Rupa | Prečnik, dubina, kroz sve, prečnik i dubina upuštanja |
| Zaobljenje, Skošenje, Ljuska | Poluprečnik, udaljenost, debljina zida i smjer, i koje ivice ili površine |
| Linearno i Kružno | Broj, razmak ili ugao, smjer ili osa |
| Dio | Krivine (koliko fino su okrugli oblici izlomljeni) |
| Crtež | Gdje presjek siječe, veličina i razmjera detalja, GD&T vrijednosti |

## Planirajte dio da ga pravi brojevi upravljaju

Brojevi koje date su oni koje možete mijenjati. Nekoliko navika čini da kasnije promjene rade ispravno:

- **Kotirajte ono što je bitno za posao.** Ako rupa mora biti 15 mm od ivice, kotirajte je od te ivice, a ne od ishodišta.
- **Potpuno definišite skice.** Tada promjena pomjera samo ono što treba (vidi [Potpuno definišite skicu](topic:relations-dimensions)).
- **Koristite relacije za namjeru.** Jednako na dvije rupe znači da jedan prečnik upravlja oboje. Za simetrične oblike stavite ishodište na središnju liniju, ili koristite Središnju tačku.
- **Skicirajte na površinama koje su napravile značajke.** Skica na krajnjoj površini izvlačenja se pomjera kad se dubina promijeni.
- **Uzorkujte umjesto kopiranja.** Jedna rupa uzorkovana osam puta ima jedan prečnik za promjenu.

## Iza pojedinačnih brojeva

- **Jedan broj koji upravlja više**: koristite parametre i jednačine: [Upravljajte dijelom pomoću parametara](topic:parameters).
- **Više veličina jednog dijela**: sačuvajte svaku kao [konfiguraciju](topic:design-tables). Čuvaju se u datoteci dijela.
- **Aritmetika u polju za broj**: upišite `=40/2` ili `=width / 2`. To pravi jednačinu; vidi [Jednačine u oba smjera](topic:equations-two-way).
- **Jedinice u inčima**: dio prikazuje milimetre. U polju za broj sa `=`, ili u parametru, `2in` se pretvara u 50.8.

Vidi [Šta još nije izrađeno](topic:not-built-yet).
