---
title: Mijenjanje dimenzija bez otvaranja skice
summary: Upravljajte dijelom pomoću brojeva u desnoj ploči: kote skice, dubine, brojevi i kutovi, kako planirati dio da ga pravi brojevi upravljaju te gdje parametri i jednadžbe preuzimaju.
keywords: parametri, dimenzije upravljanja, namjera dizajna, promjena veličine, jednadžbe, globalne varijable, tablica dizajna, konfiguracije, promjena veličine, izmjena kote
from: c2ae1a32
---

Svaka veličina u PartCraft dijelu je broj koji kasnije možete promijeniti: kote u njegovim skicama i postavke njegovih značajki. Ne morate otvarati skicu da promijenite njezine kote.

## Promjena kote skice iz ploče

1. Kliknite značajku u povijesti, na primjer „Extrude1“.
2. Pod vlastitim postavkama izvlačenja **Kote skice (Sketch1)** navodi svaku kotu njezine skice: „Distance“, „Diameter“, „Angle (°)“ i tako dalje.
3. Upišite novu vrijednost u jedno polje i pritisnite {{key:Enter}} ili {{key:Tab}}.

Skica se rješava s novom vrijednošću, a cijeli se dio ponovno gradi. Odabir same skice prikazuje isti popis kao **Upravljajuće kote**.

Radijus ili promjer mora biti veći od nule, a kut je između 0 i 180 stupnjeva; statusna traka to kaže ako nije tako.

:::tip
Koje je polje koje? Polja su navedena onim redoslijedom kojim su kote nastale. Ako niste sigurni, otvorite skicu (dvaput kliknite na nju), dvaput kliknite kotu na platnu i promijenite je tamo.
:::

## Upišite glavni broj odmah

Odaberite značajku u povijesti (ili je samo dodajte) i upišite broj: ide u glavno polje značajke, ono koje najčešće mijenjate (**Dubina** izvlačenja, **Kut** rotacije, **Promjer** provrta, **Broj** uzorka, **Radijus** zaobljenja, stijenka ljuske). Pritisnite {{key:Enter}} da ga postavite ili {{key:Esc}} da zadržite stari. Dodavanje izvlačenja to navodi u statusnoj traci: „Extrude1 dodan. Promijenite njegove brojeve desno ili sada upišite broj za njegovu dubinu.“

## Promijenite broj u povijesti

Redak svake značajke u povijesti pokazuje njezin glavni broj uz naziv: „Extrude1 25 mm“, „Hole1 Ø6.6 thru“, „Fillet1 R2“, „LPattern1 4 × 20 mm“. Dvaput kliknite broj (ili odaberite redak i pritisnite {{key:F2}}) i odmah se otvori polje. Upišite novu vrijednost i pritisnite {{key:Enter}}; {{key:Esc}} zadržava staru. Radi točno kao polje značajke desno: ista ograničenja, `=` za upis jednadžbe poput `=width/2` i jedan korak za poništavanje.

Kod izvlačenja, provrta ili uzorka dvostruki klik bilo gdje u retku otvara polje. Kod zaobljenja, skošenja, ljuske, nagiba ili navoja dvostruki klik na naziv i dalje služi za odabir bridova ili ploha, pa dvaput kliknite sam broj. Skice nemaju broj u retku: dvostruki klik otvara skicu.

## Povucite u prikazu

Odaberite izvlačenje u povijesti (ili ga kliknite u prikazu, pa njegov redak) i na njegovoj krajnjoj plohi stoji narančasta strelica, a pored nje dubina u polju. Povucite strelicu: dio slijedi povlačenje, a kad pustite, nova dubina postavlja se kao jedan korak ({{key:Mod+Z}} je vraća). Pritisnite {{key:Esc}} dok povlačite da se vratite na početak. Dubina se pomiče u koracima od desetine svoje veličine: 1 mm kod izvlačenja od 25 mm, 0.1 mm kod onog od 3 mm.

Rotacija dobiva zakrivljenu strelicu na kraju okretanja: povucite je oko osi da promijenite kut, u cijelim stupnjevima od 1° do 360°.

Ili kliknite u polje pored strelice, upišite vrijednost (ili `=` i jednadžbu) i pritisnite {{key:Enter}}. Nema strelice na izvlačenju koje ide **Kroz sve** ili do plohe, niti na vrijednosti koju upravlja jednadžba: to mijenjate desno.

## Brojevi koji upravljaju dijelom

| Gdje | Što možete mijenjati |
|---|---|
| Skica | Svaka kota: duljine, udaljenosti, radijusi, promjeri, kutovi |
| Izvlačenje i Izreži | Dubina, uvjet završetka, smjer, ispup ili izrez |
| Rotacija i rotirani izrez | Kut, os, ispup ili izrez |
| Provrt | Promjer, dubina, kroz sve, promjer i dubina upuštenog provrta |
| Zaobljenje, Skošenje, Ljuska | Radijus, udaljenost, debljina stijenke i smjer te koji bridovi ili plohe |
| Linearno i Kružno | Broj, razmak ili kut, smjer ili os |
| Dio | Krivulje (koliko su fino okrugli oblici fasetirani) |
| Crtež | Gdje presjek reže, veličina i mjerilo detalja, vrijednosti GD&T |

## Planirajte dio tako da ga pravi brojevi upravljaju

Brojevi koje zadate su oni koje možete mijenjati. Nekoliko navika čini da kasnije promjene budu ispravne:

- **Kotirajte ono što je važno za posao.** Ako provrt mora ostati 15 mm od brida, kotirajte ga od tog brida, a ne od ishodišta.
- **Potpuno definirajte skice.** Tada promjena pomiče samo ono što treba (vidi [Potpuno definirajte skicu](topic:relations-dimensions)).
- **Koristite ograničenja za namjeru.** Jednako na dva provrta znači da jedan promjer upravlja objema. Simetrični oblici: postavite ishodište na središnju liniju ili upotrijebite Polovište.
- **Skicirajte na plohama koje su nastale značajkama.** Skica na krajnjoj plohi izvlačenja pomiče se kad se promijeni dubina.
- **Koristite uzorak umjesto kopiranja.** Jedan provrt ponovljen osam puta ima jedan promjer za promjenu.

## Iznad pojedinačnih brojeva

- **Jedan broj upravlja više stvari:** koristite parametre i jednadžbe: [Upravljanje dijelom pomoću parametara](topic:parameters).
- **Više veličina jednog dijela:** spremite svaku kao [konfiguraciju](topic:design-tables); čuvaju se u datoteci dijela.
- **Računanje u polju za broj:** upišite `=40/2` ili `=width / 2`. To čini jednadžbu; vidi [Jednadžbe u oba smjera](topic:equations-two-way).
- **Mjere u palcima:** dio prikazuje milimetre. U polju za broj s `=`, ili u parametru, `2in` se pretvara u 50.8.

Vidi [Što još nije izrađeno](topic:not-built-yet).
