---
title: Čvorovi: izrada modela povezivanjem
summary: Poveži brojeve u tačke, tačke u krive, krive u površine. Promijeni broj i sve nizvodno se ponovo gradi. Svaki čvor je ujedno red CraftScript-a, a graf se čuva u datoteci.
keywords: čvorovi, uređivač čvorova, vizuelno skriptiranje, parametarski, graf, žice, priključci, slobodna forma, freeform, nurbs, prelaz, izvlačenje, rotacija, kružnica, kriva, površina, niz, opseg, slučajno, lista, skripta, craftscript, grasshopper
from: 3a4625de
---

Uređivač **Čvorovi** gradi geometriju povezivanjem kutija. Svaka kutija (čvor) obavlja jedan mali posao: pravi broj, tačku, krug, prelaz. Rezultat jednog povežeš s ulazom sljedećeg, i model prati kad promijeniš broj na početku.

Otvori ga s liste radnih prostora: {{ui:Nodes}}. Otvara se prozor uređivača. Dio koji već ima graf prikazuje ga kad otvoriš radni prostor. To je prozor preko 3D prikaza: povuci njegovu naslovnu traku da ga pomjeriš, povuci ugao da mu promijeniš veličinu.

## Povezivanje

1. Izaberi čvor s liste lijevo (upiši u polje za pretragu da suziš; <kbd>Enter</kbd> dodaje prvi pogodak). Pojavljuje se u sredini platna.
2. Prevuci od okruglog **izlaznog** kružića desno na jednom čvoru do okruglog **ulaznog** kružića lijevo na drugom. Kružić postaje zelen kad odgovara, a crven kad ne odgovara; pokaži na njega da vidiš razlog.
3. Ulaz bez veze prikazuje polje za upisanu vrijednost. Upiši broj i pritisni <kbd>Tab</kbd>: rezultat se ponovo gradi.
4. Mali krug u naslovnoj traci čvora je njegovo **oko**. Čvor s uključenim okom crta se u 3D prikazu: kao linije za krive, zasjenjeno za površine, kao tačke za tačke.

Povuci čvor za naslovnu traku. Povuci pozadinu da pomjeriš pogled, a točkićem zumiraš. <kbd>Delete</kbd> briše izabrani čvor. {{ui:Tidy}} slaže čvorove u kolone, {{ui:Fit}} ih sve dovodi u vidno polje, {{ui:Undo}} i {{ui:Redo}} kreću se kroz tvoje izmjene.

## Tipovi i jedinice

Priključci imaju tip: broj, da/ne, tačka, vektor, kriva, površina, mreža, tijelo ili "geometrija" za bilo koji od njih. Tačka može napajati ulaz vektora i obrnuto. Brojevi nose jedinicu: **dužina** je u milimetrima, a **ugao** u stepenima. Dužina ne može napajati ugao, a dužina pomnožena dužinom (površina) se odbija, pa se pogrešna veza zaustavlja čim je napraviš.

Kvadratni kružić je **lista**. Kad lista stigne na ulaz s jednom vrijednošću, čvor se izvrši jednom za svaku stavku, a njegov rezultat postaje lista. Kraća lista ponavlja svoju zadnju stavku. Na primjer, **Niz** visina u **Pomjeri** pravi gomilu kopija.

## Tijela i Booleove operacije kao čvorovi

Grupa **Tijela** pravi zatvorena tijela od istih tačnih površina kao panel Površine: **Tijelo kvadra**, **Tijelo valjka** i **Tijelo kugle** (veličine u mm), **Unija**, **Oduzmi** i **Zajednički dio** (drugo tijelo se uzima iz prvog; tolerancija je koliko trouglovi motora tijela smiju odstupati od tačnih površina), **Zaobljenje između površina** (površine po svom broju u tijelu, 1 za prvu; poluprečnik i, iznad 0, poluprečnik na kraju), **Zapremina tijela** (mm³) i **Tijelo u mrežu** (da se vidi ili zapeče). Tijelo ima svoj tip priključka: tačka ili broj ne mogu se povezati na ulaz tijela, a kružić ostaje crven. Čvorovi Booleove operacije i zaobljenja koriste vlastiti motor tijela programa, koji se učitava prvi put kad se uređivač otvori.

## Greške

Čvor koji ne može obaviti svoj posao kaže zašto ispod svog naziva, crveno ("Poluprečnik mora biti veći od nule."), a čvorovi poslije njega čekaju. Ista poruka je problem u panelu Problemi, pa je možeš naći odatle.

## Svaki čvor je red skripte

Pritisni {{ui:Script}} da vidiš graf kao CraftScript: jedan red po čvoru, na primjer `n3 = nd_circle(n2, n1, [0 0 1]);`. Izmijeni tekst i pritisni {{ui:Make the graph from this script}} da ga vratiš kao graf. Iste `nd_` funkcije rade u CraftScript-u u PartCraft-u, pa se graf može pokrenuti, ponavljati ili testirati tamo. Slučajni brojevi uvijek uzimaju **početnu vrijednost (seed)**, pa isti graf daje isti rezultat na svakom računaru.

## Sačuvano uz datoteku

Graf se čuva u datoteci dijela (ne u istoriji, pa je Poništi u uređivaču zasebno). Čvorovi prave krive, površine i mreže uz tijelo: ne mijenjaju elemente dijela.
