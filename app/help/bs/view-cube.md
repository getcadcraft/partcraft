---
title: Kocka pogleda
summary: Klikni na stranu, ivicu ili ugao kocke u uglu prikaza da gledaš odatle, povuci je da kružiš, okreni prsten kompasa, obiđi pogled okomit na površinu i vrati se na početak.
keywords: kocka pogleda, viewcube, kocka, kompas, sjever, početni pogled, standardni pogledi, odozgo, ispred, desno, iso, ugao, ivica, kruženje, rotiraj pogled, ikona osa, indikator ugla, navigacija
from: afc33dc7
---

Kocka pogleda stoji u gornjem desnom uglu 3D prikaza (ne dok skiciraš ili na listu crteža). Okreće se s pogledom, pa uvijek pokazuje u kom smjeru gledaš: {{ui:Odozgo}} je strana +Y dijela (ravan Odozgo), {{ui:Ispred}} strana +Z (ravan Ispred je okrenuta prema tebi kad je gledaš), {{ui:Desno}} strana +X. Ostaje prozirna dok na nju ne pokažeš.

## Gledaj sa strane, ivice ili ugla

1. Pokaži na kocku. Dio ispod pokazivača se osvijetli: sredina strane, ivica (osvijetli se na obje strane koje dijeli) ili ugao (na sve tri strane).
2. Klikni na nju. Pogled se okreće da gleda odatle, zadržavajući istu sredinu i zumiranje.

Ima 26 mjesta za klik: 6 strana ({{ui:Odozgo}}, {{ui:Odozdo}}, {{ui:Ispred}}, {{ui:Nazad}}, {{ui:Lijevo}}, {{ui:Desno}}), 12 ivica i 8 uglova. Ugao daje klasični tri-četvrtinski pogled; ivica izgleda na pola puta između dvije strane.

Klik na {{ui:Ispred}}, {{ui:Odozgo}} ili {{ui:Desno}} daje iste poglede kao {{ui:Prikazi}} na alatnoj traci, bez uklapanja zumiranjem.

## Kruženje povlačenjem kocke

Povuci kocku da okreneš pogled, isto kao kruženje u samom prikazu. Povlačenje se nikad ne uzima kao klik, pa kocku možeš uhvatiti bilo gdje.

## Prsten kompasa

Prsten ispod kocke nosi N, E, S i W.

- **Povuci prsten** da okreneš model oko vertikalne ose, kao da stoji na okretnom stolu. Prsten prati pokazivač.
- **Klikni slovo** da gledaš s te strane, zadržavajući koliko strmo gledaš dolje. U pogledu ravno odozgo, slovo na koje klikneš ide na dno ekrana.

## Pogledi okomiti na površinu: strelice

Kad gledaš ravno u površinu, oko kocke se pojave male strelice:

- Četiri **trougla** dovode površinu s te strane naprijed: trougao iznad kocke pokazuje površinu koja je bila na vrhu, i tako dalje.
- Dvije **zakrivljene strelice** gore desno okreću sliku za četvrt okreta u smjeru kazaljke na satu ili suprotno, bez promjene površine na koju gledaš. Koristi ih da okreneš nacrt tako da dugi zid bude preko ekrana.

## Početak

Dugme kućice gore lijevo na kocki vraća tri-četvrtinski pogled i uklapa dio. {{key:Home}} radi isto dok kocka ima fokus tastature.

## Tastaturom

{{key:Tab}} do kocke, zatim:

| Taster | Radi |
|---|---|
| {{key:left}} / {{key:right}} | bira stranu, ivicu ili ugao oko kocke, u koracima od osmine okreta (čitači ekrana kažu koji) |
| {{key:up}} / {{key:down}} | bira višu ili nižu, do {{ui:Odozgo}} ili dolje do {{ui:Odozdo}} |
| {{key:Enter}} ili {{key:Space}} | gleda s odabranog |
| {{key:Shift+left}} / {{key:Shift+right}} | okreće pogled za četvrt okreta oko vertikalne ose |
| {{key:Home}} | početni pogled |
| {{key:Esc}} | napušta kocku |

Tasteri pritisnuti na kocki ostaju uz kocku: ne pokreću PartCraft alate.

## Ikona osa ili ništa

Otvori {{ui:Postavke}} ({{key:Mod+,}}), karticu {{ui:PartCraft}}, i postavi **Indikator ugla** na {{ui:Kocka pogleda}} (početno), {{ui:Ikona osa}} (mali X, Y, Z marker dolje lijevo: X crveno, Y zeleno, Z plavo) ili {{ui:Nema}}. Ovaj pregledač pamti izbor. Vidi [Postavke PartCrafta](topic:settings#corner-indicator).

:::note
Kocka prikazuje dio kako ga PartCraft gradi: Y gore, pa je {{ui:Odozgo}} kocke ravan Odozgo. Slova kompasa služe samo za okretanje; dio nema sjever.
:::
