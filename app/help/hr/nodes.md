---
title: Čvorovi: izrada modela povezivanjem
summary: Povežite brojeve u točke, točke u krivulje, krivulje u površine. Promijenite broj i sve nizvodno se ponovno izgradi. Svaki čvor je ujedno redak CraftScripta, a graf je spremljen u datoteci.
keywords: nodes, uređivač čvorova, vizualno skriptiranje, parametarski, graf, veze, priključci, slobodni oblik, freeform, nurbs, loft, izvuci, rotiraj, krug, krivulja, površina, niz, raspon, slučajno, popis, script, craftscript, grasshopper
from: 3a4625de
---

**Čvorovi** izrađuju geometriju povezivanjem kutija. Svaka kutija (čvor) obavlja jedan mali posao: stvara broj, točku, kružnicu ili loft. Rezultat jednog spajate na ulaz sljedećeg, a model slijedi kad promijenite broj na početku.

Otvorite ga s popisa radnih prostora: {{ui:Nodes}}. Otvara se prozor uređivača. Dio koji već ima graf prikazuje ga kad otvorite radni prostor. Prozor je preko 3D prikaza: povucite naslovnu traku da ga pomaknete, povucite kut da mu promijenite veličinu.

## Povezivanje

1. Odaberite čvor s popisa lijevo (upišite u polje za traženje da suzite popis; <kbd>Enter</kbd> dodaje prvi pogodak). Pojavljuje se na sredini platna.
2. Povucite od okrugle **izlazne** točke s desne strane jednog čvora do okrugle **ulazne** točke s lijeve strane drugog. Točka postaje zelena kad odgovara, a crvena kad ne odgovara; pokažite na nju za razlog.
3. Ulaz bez veze prikazuje okvir za upisanu vrijednost. Upišite broj i pritisnite <kbd>Tab</kbd>: rezultat se ponovno izgradi.
4. Mali krug u naslovnoj traci čvora je njegovo **oko**. Čvor s uključenim okom crta se u 3D prikazu: kao linije za krivulje, sjenčano za površine, točkice za točke.

Povucite čvor za naslovnu traku. Povucite pozadinu za pomicanje, a kotačićem zumirajte. <kbd>Delete</kbd> uklanja odabrani čvor. {{ui:Tidy}} slaže čvorove u stupce, {{ui:Fit}} ih dovodi sve u vidno polje, a {{ui:Undo}} i {{ui:Redo}} kreću se kroz vaše promjene.

## Vrste i jedinice

Priključci imaju vrstu: broj, da/ne, točka, vektor, krivulja, površina, mreža, puno tijelo, ili „geometrija“ za bilo koju od njih. Točka može ići na ulaz vektora i natrag. Brojevi nose jedinicu: **duljina** je u milimetrima, a **kut** u stupnjevima. Duljina ne može na ulaz kuta, a duljina pomnožena duljinom (površina) se odbija, pa je pogrešna veza zaustavljena čim je napravite.

Kvadratna točka je **popis**. Kad popis dođe na ulaz s jednom vrijednošću, čvor se izvodi jednom za svaku stavku, a njegov rezultat postaje popis. Kraći popis ponavlja svoju zadnju stavku. Na primjer, **Niz** visina spojen na **Pomakni** daje hrpu primjeraka.

## Puna tijela i Booleove operacije kao čvorovi

Grupa **Puna tijela** izrađuje zatvorena tijela iz istih egzaktnih površina kao panel Površine: **Kutija (puno tijelo)**, **Cilindar (puno tijelo)** i **Kugla (puno tijelo)** (dimenzije u mm), **Unija**, **Oduzmi** i **Presjek** (drugo tijelo uzima se iz prvog; tolerancija je koliko trokuti motora tijela smiju odstupati od egzaktnih površina), **Zaobljenje između ploha** (plohe po njihovom broju u tijelu, 1 za prvu; polumjer i, iznad 0, polumjer na kraju), **Volumen tijela** (mm³) i **Tijelo u mrežu** (za pregled ili pečenje). Puno tijelo ima vlastitu vrstu priključka: točka ili broj ne mogu se spojiti na ulaz tijela, a točka ostaje crvena. Čvorovi Booleove operacije i zaobljenja koriste vlastiti motor tijela programa, učitan pri prvom otvaranju uređivača.

## Pogreške

Čvor koji ne može obaviti svoj posao kaže zašto, ispod svog naziva, crveno („Polumjer mora biti veći od nule.“), a čvorovi nakon njega čekaju. Ista poruka je Problem na ploči Problemi, pa je tamo možete pronaći.

## Svaki čvor je redak skripte

Pritisnite {{ui:Script}} da vidite graf kao CraftScript: po jedan redak za svaki čvor, na primjer `n3 = nd_circle(n2, n1, [0 0 1]);`. Uredite tekst i pritisnite {{ui:Make the graph from this script}} da ga vratite u graf. Iste `nd_` funkcije rade i u CraftScriptu u PartCraftu, pa se graf može pokrenuti, ponavljati ili testirati tamo. Slučajni brojevi uvijek primaju **sjeme (seed)**, pa isti graf daje isti rezultat na svakom računalu.

## Spremljeno uz datoteku

Graf je spremljen u datoteci dijela (ne u povijesti, pa je Poništi u uređivaču zasebno). Čvorovi izrađuju krivulje, površine i mreže uz puno tijelo: ne mijenjaju značajke dijela.
