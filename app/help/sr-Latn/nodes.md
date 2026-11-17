---
title: Čvorovi: pravljenje modela povezivanjem
summary: Povežite brojeve u tačke, tačke u krive, krive u površi. Promenite broj i sve nizvodno se ponovo pravi. Svaki čvor je ujedno red CraftScript-a, a graf se čuva u datoteci.
keywords: čvorovi, uređivač čvorova, vizuelno skriptovanje, parametarski, graf, žice, portovi, slobodna forma, nurbs, prelaz, izvlačenje, rotiranje, krug, kriva, površ, niz, opseg, slučajno, lista, skripta, craftscript, grasshopper
from: 3a4625de
---

**Uređivač čvorova** pravi geometriju povezivanjem kutija. Svaka kutija (čvor) radi mali posao: pravi broj, tačku, krug, prelaz. Povežete rezultat jednog sa ulazom sledećeg, a model prati kad promenite broj na početku.

Otvorite ga iz liste radnih prostora: {{ui:Čvorovi}}. Otvara se prozor uređivača. Deo koji već ima graf prikazuje ga kad otvorite radni prostor. To je prozor preko 3D prikaza: prevucite naslovnu traku da ga pomerite, a ugao da mu promenite veličinu.

## Povezivanje

1. Izaberite čvor sa liste levo (ukucajte u polje za pretragu da je suzite, <kbd>Enter</kbd> dodaje prvi pogodak). Pojavljuje se u sredini platna.
2. Prevucite od okrugle tačke **izlaza** s desne strane jednog čvora do okrugle tačke **ulaza** s leve strane drugog. Tačka postaje zelena kad odgovara, a crvena kad ne odgovara; zadržite pokazivač na njoj za razlog.
3. Ulaz bez veze prikazuje polje za upisanu vrednost. Ukucajte broj i pritisnite <kbd>Tab</kbd>: rezultat se ponovo pravi.
4. Mali krug u naslovnoj traci čvora je njegovo **oko**. Čvor sa uključenim okom crta se u 3D prikazu: kao linije za krive, senčeno za površi, tačkama za tačke.

Prevucite čvor za naslovnu traku. Prevucite pozadinu da pomerate pogled, točkić miša za zumiranje. <kbd>Delete</kbd> uklanja izabrani čvor. {{ui:Poredaj}} raspoređuje čvorove u kolone, {{ui:Uklopi}} ih sve uklapa u prikaz, {{ui:Opozovi}} i {{ui:Ponovi}} vraćaju se kroz vaše izmene.

## Tipovi i jedinice

Portovi imaju tip: broj, da/ne, tačka, vektor, kriva, površ, mreža, čvrsto telo, ili „geometrija“ za bilo koji od njih. Tačka može da ulazi u ulaz vektora i obrnuto. Brojevi nose jedinicu: **dužina** je u milimetrima, a **ugao** u stepenima. Dužina ne može da ulazi u ugao, a dužina pomnožena dužinom (površina) se odbija, pa je pogrešna veza zaustavljena kad je pravite.

Kvadratna tačka je **lista**. Kad lista stigne do ulaza sa jednom vrednošću, čvor se izvršava jednom za svaku stavku, a njegov rezultat postaje lista. Kraća lista ponavlja svoju poslednju stavku. Na primer, **Niz** visina u **Pomeri** pravi gomilu kopija.

## Čvrsta tela i Bulove operacije kao čvorovi

Grupa **Čvrsta tela** pravi zatvorena tela od istih tačnih površi kao panel Površi: **Kvadar**, **Valjak** i **Kugla** (mere u mm), **Unija**, **Oduzimanje** i **Zajednički deo** (drugo telo se oduzima od prvog; tolerancija je koliko trouglovi motora čvrstih tela smeju da budu udaljeni od tačnih površi), **Zaobljenje između površi** (površi po svom rednom broju u telu, 1 za prvu; poluprečnik i, ako je veći od 0, poluprečnik na kraju), **Zapremina tela** (mm³) i **Telo u mrežu** (da je vidite ili ugradite). Telo ima sopstveni tip porta: tačka ili broj ne mogu da se povežu na ulaz tela, a tačka ostaje crvena. Čvorovi Bulovih operacija i zaobljenja koriste sopstveni motor čvrstih tela programa, koji se učitava prvi put kad se uređivač otvori.

## Greške

Čvor koji ne može da uradi svoj posao kaže zašto ispod svog imena, crveno („Poluprečnik mora biti veći od nule.“), a čvorovi posle njega čekaju. Ista poruka je Problem u panelu Problemi, pa je odatle možete naći.

## Svaki čvor je jedan red skripte

Pritisnite {{ui:Skripta}} da vidite graf kao CraftScript: jedan red po čvoru, na primer `n3 = nd_circle(n2, n1, [0 0 1]);`. Izmenite tekst i pritisnite {{ui:Napravi graf iz ove skripte}} da ga vratite kao graf. Iste `nd_` funkcije rade u CraftScript skripti u PartCraft-u, pa se graf može pokrenuti, ponavljati ili testirati tamo. Slučajni brojevi uvek primaju **seme**, pa isti graf daje isti rezultat na svakom računaru.

## Sačuvano uz datoteku

Graf se čuva u datoteci dela (ne u istoriji, pa je {{ui:Opozovi}} u uređivaču zaseban). Čvorovi prave krive, površi i mreže pored tela: ne menjaju elemente dela.
