---
title: Magnetska polja u 2D (vodič)
summary: Izračunajte magnetsko polje elektromagneta ili trajnog magneta pomoću biblioteke za analizu: pokrenite primjere, pročitajte gustoću toka, polje u zračnom rasporu, induktivitet i privlačnu silu, promijenite dizajn i izradite vlastiti model zavojnica, magneta i željeza.
keywords: magnetski, magnetostatika, magnetsko polje, gustoća magnetskog toka, tesla, elektromagnet, solenoid, zavojnica, amper-zavoji, željezna jezgra, zračni raspor, permeabilnost, induktivitet, magnetska sila, nemagnetski otpor, magnetski krug, vektorski potencijal, elektromagnetika, konačni elementi, fem, motor, aktuator, transformator, magnetostatic2d, trajni magnet, neodim, ndfeb, ferit, remanencija, radna točka, povrat, rasipanje, magnet za držanje
from: 215f6601
---

PartCraftova biblioteka za analizu može izračunati magnetsko polje zavojnica i željeza u 2D: presjek nečega što je dugo i jednako po svojoj duljini, poput elektromagneta, jezgre transformatora, sabirnice ili presjeka motora. Ovaj vodič pokreće primjer elektromagneta iz biblioteke, čita što prikazuje, mijenja ga, pokazuje kako modelirati vlastiti oblik, a zatim dodaje trajni magnet.

Koristi radni prostor Script i [biblioteku za analizu](topic:craftscript-library). Ne morate znati jezik CraftScript da biste pratili; primjer kaže što svaki redak radi.

## Što se modelira

C-oblika željezna jezgra, 100 × 80 mm izvana i 20 mm debela, sa zračnim rasporom od 2 mm u desnoj nozi. Zavojnica od 100 zavoja koja nosi 10 A (1000 amper-zavoja) namotana je oko lijeve noge. Sve je dugo u smjeru izvan ekrana, pa su odgovori **po metru dubine**: pomnožite s pravom dubinom za pravi magnet.

`magnetostatic2d` iz biblioteke rješava magnetski vektorski potencijal na mreži kvadrata od 1 mm u kutiji zraka oko magneta, a zatim iz njega izračunava gustoću magnetskog toka **B** (u teslama).

## Pokrenite primjer

1. Odaberite **Script** u okviru **Radni prostor** lijevo na alatnoj traci.
2. Otvorite karticu **Knjižnica** na ploči skripte, zatim **Primjeri** › **Elektromagnet: polje, zračni raspor, induktivitet**.
3. Kliknite {{ui:Otvori (samo za čitanje)}}, zatim pritisnite {{key:F5}}.

Za sekundu ili dvije platno prikazuje gustoću toka, a konzola ispisuje:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Graf ispod platna je okomita gustoća toka B_y duž srednje linije jezgre, s lijeva nadesno: oko −0,55 T u lijevoj nozi (tok teče niz nju), gotovo ništa u prozoru, i +0,55 T u desnoj nozi i preko zračnog raspora (tok se vraća prema gore). Isti tok prolazi kroz željezo i raspor, pa dvije noge i raspor pokazuju gotovo istu vrijednost.

## Čitanje rezultata

- **Polje u zračnom rasporu** iznosi 0,543 T. Ručni izračun tretira jezgru kao jedan magnetski krug, B = μ0 N I / (g + l / μr), gdje je g raspor, l duljina puta kroz željezo, a μr relativna permeabilnost željeza; daje 0,552 T. Polje je malo niže od ručnog izračuna jer se tok izbočuje oko raspora (rubni tok) i dio toka ide kratkim putem preko prozora (rasipanje). S manjim rasporom ili finijom mrežom dvije vrijednosti se bliže podudaraju.
- **Induktivitet** zavojnice od 100 zavoja iznosi 0,154 H po metru dubine, iz energije pohranjene u polju. Formula za krug daje manje (0,110 H/m) jer računa samo tok kroz raspor, a ne tok koji mu curi pokraj njega.
- **Privlačna sila** koja zatvara raspor je B² w / (2 μ0) za širinu w plohe raspora: oko 2300 N po metru, odnosno 117 N za magnet dubok 50 mm.
- **Vrh** od 1,97 T nalazi se u unutarnjim kutovima prozora, gdje se tok naglo savija. Model tretira željezo kao linearno; stvarni elektrotehnički čelik se zasićuje oko 1,5 do 2 T, pa vrijednosti iznad toga shvatite kao upozorenje, a ne kao odgovor.

:::note
Vlastiti testovi biblioteke pokreću ovaj primjer i provjeravaju polje u rasporu prema formuli magnetskog kruga pri svakoj promjeni PartCrafta. Metoda, njezine reference i ostale provjere (dugi solenoid, solenoid s željeznom jezgrom) nalaze se u zaglavlju `magnetostatic2d`: kliknite je u biblioteci.
:::

## Promjena dizajna

1. Kliknite {{ui:Napravi kopiju}} iznad skripte samo za čitanje. Kopija se sprema s vašim dijelom.
2. Promijenite vrijednost blizu vrha i ponovno pritisnite {{key:F5}}. Probajte:
   - `g = 0.001;`: polovica raspora, polje u rasporu gotovo se udvostruči, a tako i sila (ide s B²).
   - `mur = 200;`: lošija jezgra, više amper-zavoja troši se u željezu.
   - `N = 200;`: dvostruko više zavoja, dvostruko polje, četiri puta veći induktivitet.
   - `h = 0.0005;`: finija mreža, točniji rezultati, otprilike četiri puta više vremena.

Svako pokretanje zamjenjuje platno. Varijable koje skripta stvori (poput `Bgap`, `L`, `F`) ostaju u popisu **Varijable** za vaše vlastite račune.

## Modelirajte vlastiti oblik

Primjer gradi sve iz tri popisa, po jednu vrijednost za svaki kvadrat mreže, što možete napraviti za bilo koji oblik nacrtan ravnim linijama uz mrežu:

- **Gdje je željezo:** `iron` je istina za kvadrate unutar jezgre. Primjer ga gradi od pravokutnika: `frame & ~window & ~gap` znači „u okviru, ne u prozoru, ne u rasporu”.
- **Permeabilnost:** `1 + (mur - 1) * iron` je 1 u zraku i `mur` u željezu. Dajte više materijala vlastite vrijednosti na isti način.
- **Struja:** `J` je gustoća struje u amperima po četvornom metru, pozitivna izvan ekrana, negativna u ekran. Zavojnica ima dvije strane s suprotnim predznacima; primjer izračunava `J0` tako da jedna strana nosi N I.

Zatim `r = magnetostatic2d(m, permeability, J)` rješava model. `r.B` je gustoća toka u svakom kvadratu (dva stupca, x i y), `r.Bmag` njezina veličina, `r.energy` pohranjena energija po metru. `plot(x, y)` crta liniju.

Biblioteka radi u metrima, a prikaz u milimetrima, pa bi polje prikazano kakvo jest bilo nacrtano tisuću puta premalo. Primjer ga prikazuje na kopiji mreže u milimetrima (`mm = quadGrid(…)`, zatim `show(field(mm, …))`): prekopirajte ta dva retka.

Zadano, rub kutije zadržava polje unutra: ništa ne izlazi kroz njega. Kutija neka bude barem dva ili tri puta veća od magneta da to ne stisne polje. Za simetrični magnet možete modelirati polovicu: zaglavlje `magnetostatic2d` kaže koji rubni uvjet koristiti na liniji simetrije.

## Trajni magneti

Drugi primjer, **Primjeri** › **Trajni magnet u željeznoj jezgri: radna točka, rasipanje, privlačenje**, jest ista jezgra bez zavojnice, a 10 mm isječak lijeve noge zamijenjen je magnetom, magnetiziranim prema gore. Pokrenite ga s {{key:F5}}. Ispisuje:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Radna točka.** Magnet se opisuje **remanencijom** Br (polje koje zadržava kad ga željezo kratko spoji: oko 1,2 T za sinterirani NdFeB magnet, 0,4 T za ferit) i svojom povratnom permeabilnošću (oko 1,05, odnosno 1,1). Otvaranje raspora spušta ga niz povratnu liniju: ovdje na 1,04 T, s H usmjerenim suprotno od B unutar njega.
- **Rasipanje.** Ručni izračun bez rasipanja daje 0,97 T u rasporu; model daje 0,68 T. Magnet tok potiskuje snažno, na kratkoj duljini, pa ga velik dio ide ravno natrag preko prozora umjesto kroz raspor. Faktor rasipanja kaže koliko: ovdje 1,53. Postavite `g = 0;` za zatvoreni držač: tada se magnet drži unutar pola postotka od ručnog izračuna.
- **Magneti u vlastitom modelu.** Dajte `magnetostatic2d` magnete kao `struct('Br', Br)`, gdje `Br` ima jedan redak po kvadratu mreže s remanencijom duž x i y u teslama (nula izvan magneta), a kvadratima magneta dajte njihovu povratnu permeabilnost u popisu permeabilnosti:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T upward in the squares where mag is true
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Za magnet magnetiziran pod kutom stavite `Br·cos(kut)` i `Br·sin(kut)` u dva stupca; za prsten magnetiziran prema van izračunajte smjer svakog kvadrata iz njegova položaja. `r.H` daje jakost polja H u svakom kvadratu.

Model drži magnet na njegovoj ravnoj povratnoj liniji bez obzira koliko ga jako pogonite. Pravi magnet koji se pogoni preko koljena (velikim rasporom, jakom zavojnicom ili toplinom) trajno gubi dio svoje jakosti; radnu točku provjerite prema krivulji proizvođača za taj razred i temperaturu.

Vlastiti testovi biblioteke provjeravaju magnete prema dva ručna rezultata: okrugli magnet na otvorenom zraku (unutar njega je B = Br / (1 + μr)) i magnet zatvoren željeznim držačem (magnetski krug), oba unutar 1 %.

## Što ne radi još

- **Zasićenje.** Željezo je linearno: dvostruka struja znači dvostruko polje, bez granice.
- **Razmagnetiziranje.** Magneti ostaju na svojoj ravnoj povratnoj liniji (vidi gore).
- **Vrtložne struje** i **gubici** (gubici u željezu, gubici u bakru).
- **Pomični dijelovi i moment.** Nema rotora koji se okreće u statoru, nema momenta prema kutu.
- **Okrugli oblici.** Mreža je od jednakih kvadrata, pa zakrivljeni obrisi izlaze stepenasti.
- **3D.** Sve je presjek nečega što je dugo.

Dizajn motora (rotirajući rotor, moment i gubici u 2D) razmatra se za kasniju verziju. Vidi [Još nije izrađeno](topic:not-built-yet).
