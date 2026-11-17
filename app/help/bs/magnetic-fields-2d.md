---
title: Magnetna polja u 2-D (vodič)
summary: Izračunaj magnetno polje elektromagneta ili trajnog magneta uz biblioteku za analizu: pokreni primjere, čitaj gustinu fluksa, polje u zazoru, induktivnost i privlačenje, mijenjaj dizajn, i napravi vlastiti model kalemova, magneta i željeza.
keywords: magnetno, magnetostatika, magnetno polje, gustina fluksa, tesla, elektromagnet, solenoid, kalem, amper-zavoji, željezno jezgro, zračni zazor, permeabilnost, induktivnost, magnetna sila, reluktansa, magnetno kolo, vektorski potencijal, elektromagnetika, konačni elementi, fem, motor, aktuator, transformator, magnetostatic2d, trajni magnet, neodim, ndfeb, ferit, remanencija, radna tačka, povrat, curenje, magnet za držanje
from: 215f6601
---

Biblioteka za analizu u PartCraft-u može izračunati magnetno polje kalemova i željeza u 2-D: presjek nečega što je dugačko i isto duž cijele dužine, kao što su elektromagnet, jezgro transformatora, sabirnica ili presjek motora. Ovaj vodič pokreće primjer elektromagneta iz biblioteke, čita šta on kaže, mijenja ga, pokazuje kako modelirati vlastiti oblik, a zatim dodaje trajni magnet.

Koristi radni prostor Skripta i [biblioteku za analizu](topic:craftscript-library). Ne moraš znati jezik CraftScript da bi pratio; primjer kaže šta radi svaka linija.

## Šta je modelirano

Željezno jezgro u obliku slova C, 100 × 80 mm spolja i 20 mm debljine, sa zračnim zazorom od 2 mm u desnoj nozi. Kalem od 100 zavoja sa 10 A (1000 amper-zavoja) namotan je oko lijeve noge. Sve je dugačko u smjeru izvan ekrana, pa su odgovori **po metru dubine**: pomnoži sa stvarnom dubinom za pravi magnet.

`magnetostatic2d` iz biblioteke rješava magnetni vektorski potencijal na mreži kvadrata od 1 mm u kutiji zraka oko magneta, zatim iz njega računa gustinu fluksa **B** (u teslama).

## Pokreni primjer

1. Odaberi **Skripta** u polju **Radni prostor** lijevo na traci.
2. Otvori karticu **Biblioteka** na panelu skripte, zatim **Primjeri** › **Elektromagnet: polje, zazor, induktivnost**.
3. Klikni {{ui:Otvori (samo za čitanje)}}, zatim pritisni {{key:F5}}.

Za sekundu-dvije platno prikazuje gustinu fluksa, a konzola ispisuje:

```
B u zazoru 0.5427 T; magnetno kolo 0.5516 T (-1.6 %: rubni efekat i curenje)
induktivnost 0.1539 H po metru dubine; kolo daje 0.1103 H/m, bez fluksa koji curi pored zazora
uskladištena energija 7.694 J/m; |B| dostiže vrh od 1.97 T u unutrašnjim uglovima prozora (pravi čelik bi se tamo zasitio)
privlačenje preko zazora oko 2343 N po metru dubine (117.2 N za dubinu 50 mm)
```

Grafikon ispod platna je vertikalna gustina fluksa B_y duž srednje linije jezgra, s lijeva na desno: oko −0.55 T u lijevoj nozi (fluks teče niz nju), gotovo ništa u prozoru, i +0.55 T u desnoj nozi i preko zazora (fluks se vraća gore). Isti fluks prolazi kroz željezo i zazor, pa dvije noge i zazor pokazuju gotovo istu vrijednost.

## Čitaj rezultate

- **Polje u zazoru** je 0.543 T. Računica rukom tretira jezgro kao jedno magnetno kolo, B = μ0 N I / (g + l / μr), gdje je g zazor, l dužina puta kroz željezo, a μr relativna permeabilnost željeza; daje 0.552 T. Polje je malo niže od računice rukom jer se fluks širi oko zazora (rubni efekat) i dio fluksa prečicom prolazi kroz prozor (curenje). Sa manjim zazorom ili finijom mrežom, dvije vrijednosti se više približavaju.
- **Induktivnost** kalema od 100 zavoja je 0.154 H po metru dubine, iz energije uskladištene u polju. Formula kola daje manje (0.110 H/m) jer računa samo fluks kroz zazor, a ne fluks koji curi pored njega.
- **Privlačenje** koje zatvara zazor je B² w / (2 μ0) za površinu zazora širine w: oko 2300 N po metru, ili 117 N za magnet dubine 50 mm.
- **Vrh** od 1.97 T nalazi se u unutrašnjim uglovima prozora, gdje se fluks oštro okreće. Model tretira željezo kao linearno; pravi električni čelik se zasiti na oko 1.5 do 2 T, pa vrijednosti iznad toga tretiraj kao upozorenje, a ne kao odgovor.

:::note
Biblioteka sama pokreće ovaj primjer pri svakoj promjeni PartCraft-a i provjerava polje u zazoru prema formuli magnetnog kola. Metoda, njene reference i ostale provjere (dugi solenoid, solenoid sa željeznim jezgrom) nalaze se u zaglavlju `magnetostatic2d`: klikni ga u biblioteci.
:::

## Promijeni dizajn

1. Klikni {{ui:Napravi kopiju}} iznad skripte samo za čitanje. Kopija se čuva sa tvojim dijelom.
2. Promijeni vrijednost pri vrhu i ponovo pritisni {{key:F5}}. Probaj:
   - `g = 0.001;` — pola zazora: polje u zazoru gotovo se udvostruči, i privlačenje također (ide sa B²).
   - `mur = 200;` — lošije jezgro: više amper-zavoja troši se u željezu.
   - `N = 200;` — dvostruko više zavoja: dvostruko polje, četiri puta veća induktivnost.
   - `h = 0.0005;` — finija mreža: tačniji odgovori, oko četiri puta više vremena.

Svako pokretanje zamjenjuje platno. Promjenljive koje skripta napravi (npr. `Bgap`, `L`, `F`) ostaju na listi **Promjenljive** za tvoje vlastite proračune.

## Modeliraj vlastiti oblik

Primjer gradi sve iz tri liste, jedna vrijednost po kvadratu mreže, što možeš napraviti za bilo koji oblik nacrtan pravim linijama duž mreže:

- **Gdje je željezo:** `iron` je tačno za kvadrate unutar jezgra. Primjer ga gradi od pravougaonika: `frame & ~window & ~gap` znači „u okviru, ne u prozoru, ne u zazoru”.
- **Permeabilnost:** `1 + (mur - 1) * iron` je 1 u zraku i `mur` u željezu. Više materijala daj njihove vrijednosti na isti način.
- **Struja:** `J` je gustina struje u amperima po kvadratnom metru, pozitivna izvan ekrana, negativna u njega. Kalem ima dvije strane sa suprotnim predznacima; primjer računa `J0` tako da jedna strana nosi N I.

Zatim `r = magnetostatic2d(m, permeability, J)` ga rješava. `r.B` je gustina fluksa u svakom kvadratu (dvije kolone, x i y), `r.Bmag` njena veličina, `r.energy` uskladištena energija po metru. `plot(x, y)` crta liniju.

Biblioteka radi u metrima, a pogled u milimetrima, pa bi polje prikazano kakvo jeste bilo nacrtano hiljadu puta premalo. Primjer ga prikazuje na kopiji mreže u milimetrima (`mm = quadGrid(…)`, zatim `show(field(mm, …))`): kopiraj ta dva reda.

Podrazumijevano, ivica kutije zadržava polje unutra: nijedan fluks ne izlazi. Napravi kutiju najmanje dva ili tri puta veću od magneta da to ne bi stisnulo polje. Za simetričan magnet možeš modelirati polovinu: zaglavlje `magnetostatic2d` kaže koji uslov ivice koristiti na liniji simetrije.

## Trajni magneti

Drugi primjer, **Primjeri** › **Trajni magnet u željeznom jezgru: radna tačka, curenje, privlačenje**, je isto jezgro bez kalema i sa 10 mm isječkom lijeve noge zamijenjenim magnetom, namagnetisanim prema gore. Pokreni ga sa {{key:F5}}. Ispisuje:

```
magnet radi pri B = 1.036 T, H = -124 kA/m (na svojoj povratnoj liniji B = Br + μ0 μr H)
B u zazoru 0.6778 T; magnetno kolo bez curenja 0.9692 T (-30.1 %)
faktor curenja 1.53: od fluksa koji izlazi iz magneta, 65 % prelazi zazor između polnih površina
privlačenje preko zazora oko 3656 N po metru dubine (182.8 N za dubinu 50 mm)
```

- **Radna tačka.** Magnet se opisuje svojom **remanencijom** Br (polje koje zadržava kad je kratko spojen željezom: oko 1.2 T za sinterovani NdFeB magnet, 0.4 T za ferit) i svojom povratnom permeabilnošću (oko 1.05 i 1.1). Otvaranje zazora spušta ga niz povratnu liniju: ovdje na 1.04 T, sa H usmjerenim suprotno od B unutar njega.
- **Curenje.** Računica rukom bez curenja daje 0.97 T u zazoru; model daje 0.68 T. Magnet svoj fluks gura snažnim pritiskom na kratkoj dužini, pa se velik dio vraća pravo kroz prozor umjesto kroz zazor. Faktor curenja pokazuje koliko: ovdje 1.53. Postavi `g = 0;` za zatvoreni držač: magnet tada radi unutar pola procenta računice rukom.
- **Magneti u tvom modelu.** Daj `magnetostatic2d` magnete kao `struct('Br', Br)`, gdje `Br` ima jedan red po kvadratu mreže sa remanencijom duž x i y u teslama (nula van magneta), i daj kvadratima magneta njihovu povratnu permeabilnost u listi permeabilnosti:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T prema gore u kvadratima gdje je mag tačno
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Za magnet namagnetisan pod uglom, stavi `Br·cos(angle)` i `Br·sin(angle)` u dvije kolone; za prsten namagnetisan prema van, izračunaj smjer svakog kvadrata iz njegove pozicije. `r.H` daje jačinu polja H u svakom kvadratu.

Model drži magnet na njegovoj pravoj povratnoj liniji, koliko god ga jako pogonili. Pravi magnet, kad se pogoni preko svog koljena (velikim zazorom, jakim kalemom ili toplotom), trajno gubi dio snage; provjeri radnu tačku prema krivoj proizvođača za taj razred i temperaturu.

Testovi biblioteke provjeravaju magnete prema dva rezultata računice rukom: okrugao magnet na otvorenom zraku (unutra, B = Br / (1 + μr)) i magnet zatvoren željeznim držačem (magnetno kolo), oba unutar 1 %.

## Šta još ne radi

- **Zasićenje.** Željezo je linearno: dvostruka struja, dvostruko polje, bez granice.
- **Razmagnetisanje.** Magneti ostaju na svojoj pravoj povratnoj liniji (vidi gore).
- **Vrtložne struje** i **gubici** (gubici u željezu, gubici u bakru).
- **Pokretni dijelovi i moment.** Nema rotora koji se okreće u statoru, nema momenta u zavisnosti od ugla.
- **Okrugli oblici.** Mreža je od jednakih kvadrata, pa zakrivljene konture izlaze stepenaste.
- **3-D.** Sve je presjek nečega dugačkog.

Dizajn motora (rotirajući rotor, moment i gubici u 2-D) razmatra se za kasniju verziju. Vidi [Još nije napravljeno](topic:not-built-yet).
