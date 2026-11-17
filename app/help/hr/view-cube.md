---
title: ViewCube
summary: Kliknite stranu, brid ili kut kocke u kutu prikaza da gledate odatle, povucite je za kruženje, okrenite prsten kompasa, zakrenite se oko pogleda ravno na plohu i vratite se na početni pogled.
keywords: viewcube, kocka, kompas, sjever, početni pogled, standardni pogledi, gornji, prednji, desni, iso, kut, brid, kruženje, okretanje pogleda, ikona osi, oznaka kuta, navigacija
from: afc33dc7
---

ViewCube se nalazi u gornjem desnom kutu 3D prikaza (ne dok skicirate ili na listu crteža). Okreće se s pogledom, pa uvijek pokazuje u kojem smjeru gledate: {{ui:Gornji}} je strana +Y dijela (gornja ravnina), {{ui:Prednji}} strana +Z (prednja ravnina je okrenuta prema vama kad je gledate), {{ui:Desni}} strana +X. Ostaje prozirna dok na nju ne pokažete.

## Gledanje sa strane, s brida ili iz kuta

1. Pokažite na kocku. Dio ispod pokazivača se osvijetli: sredina plohe, brid (osvijetli se na obje plohe koje dijeli) ili kut (na sve tri plohe).
2. Kliknite. Pogled se okreće da gleda odatle, zadržavajući isto središte i zumiranje.

Ima 26 mjesta za klik: 6 ploha ({{ui:Gornji}}, {{ui:Donji}}, {{ui:Prednji}}, {{ui:Natrag}}, {{ui:Lijevi}}, {{ui:Desni}}), 12 bridova i 8 kutova. Kut daje klasični trokvartalni pogled; brid izgleda na pola puta između dviju ploha.

Klik na {{ui:Prednji}}, {{ui:Gornji}} ili {{ui:Desni}} daje iste poglede kao {{ui:Pogledi}} na alatnoj traci, bez zumiranja da cijeli dio stane u prikaz.

## Kruženje povlačenjem kocke

Povucite kocku da okrenete pogled, isto kao kruženje u samom prikazu. Povlačenje se nikad ne shvaća kao klik, pa kocku možete uhvatiti bilo gdje.

## Prsten kompasa

Prsten ispod kocke nosi oznake S, I, J i Z.

- **Povucite prsten** da okrenete model oko vertikalne osi, kao da stoji na okretnom stolu. Prsten prati pokazivač.
- **Kliknite slovo** da gledate s te strane, zadržavajući koliko strmo gledate dolje. U pogledu odozgo, slovo na koje kliknete ide na dno zaslona.

## Pogledi ravno na plohu: strelice

Kad gledate ravno na plohu, oko kocke se pojave male strelice:

- Četiri **trokuta** dovode plohu s te strane naprijed: trokut iznad kocke pokazuje plohu koja je bila na vrhu, i tako dalje.
- Dvije **zakrivljene strelice** u gornjem desnom kutu zakreću sliku za četvrt okreta u smjeru kazaljke na satu ili suprotno, bez promjene plohe koju gledate. Koristite ih da zakrenete tlocrt tako da dugi zid ide preko zaslona.

## Početni pogled

Gumb kućice u gornjem lijevom kutu kocke vraća trokvartalni pogled i prilagodi dio prikazu. {{key:Home}} radi isto dok kocka ima fokus tipkovnice.

## Tipkovnicom

Pritisnite {{key:Tab}} da dođete do kocke, zatim:

| Tipka | Radi |
|---|---|
| {{key:left}} / {{key:right}} | odaberite stranu, brid ili kut oko kocke, u koracima od osmine okreta (čitači zaslona kažu koji) |
| {{key:up}} / {{key:down}} | odaberite višu ili nižu, do {{ui:Gornji}} ili do {{ui:Donji}} |
| {{key:Enter}} ili {{key:Space}} | gledajte s odabrane |
| {{key:Shift+left}} / {{key:Shift+right}} | zakrenite pogled za četvrt okreta oko vertikalne osi |
| {{key:Home}} | početni pogled |
| {{key:Esc}} | izađite iz kocke |

Tipke pritisnute na kocki ostaju s kockom: ne pokreću alate PartCraft-a.

## Ikona osi ili ništa

Otvorite {{ui:Postavke}} ({{key:Mod+,}}), karticu {{ui:PartCraft}}, i postavite **Oznaka kuta** na {{ui:ViewCube}} (početna), {{ui:Ikona osi}} (mala oznaka X, Y, Z u donjem lijevom kutu: X crveno, Y zeleno, Z plavo) ili {{ui:Nijedan}}. Ovaj preglednik pamti izbor. Vidi [Postavke PartCraft-a](topic:settings#corner-indicator).

:::note
Kocka prikazuje dio onako kako ga PartCraft gradi: Y prema gore, pa je {{ui:Gornji}} na kocki gornja ravnina. Oznake kompasa služe samo za okretanje; dio nema sjever.
:::
