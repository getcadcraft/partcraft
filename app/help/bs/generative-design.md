---
title: Oblikovanje rasta iz opterećenja (Generativno)
summary: Odaberite površine koje su držane i opterećene, područja koja se čuvaju i koja moraju ostati slobodna, ciljane zapremine i materijale, te generišite ishode: najkrući oblici pronađeni za svaku zapreminu, ponovo provjereni kao čvrsta tijela, upoređeni u tabeli i preuzeti kao STL, STEP ili novi dio.
keywords: generativni dizajn, optimizacija topologije, SIMP, lagan, rešetka, organski oblik, ishodi, poređenje, masa, udio zapremine, zadrži, čuvaj unutra, prepreka, zadrži van, prostor dizajna, minimalna dimenzija člana, STL, 3D štampa
from: 5b91fa8e
---

Radni prostor **Generativno** uklanja materijal koji opterećenja ne trebaju. Kažete gdje je dio držan i opterećen, šta mora ostati, a šta mora ostati slobodno; PartCraft pronalazi najkrući oblik za svaku ciljnu zapreminu (**optimizacija topologije**), ponovo provjerava svaki kao čvrsto tijelo sa stvarnim materijalom i prikazuje ishode jedan pored drugog. Radi na imenovanim površinama koje mrežno jezgro daje dijelu (vidi [Mrežno jezgro](topic:solid-kernels)).

Odaberite **Generativno** u okviru **Radni prostor**. Vaš dio se ne mijenja; studija se čuva unutar datoteke dijela.

## Postavite studiju

1. Pritisnite **Nova studija** u desnom panelu.
2. **Prostor**: *Dio kakav jeste* uklanja materijal iz vašeg dijela; *Kutija oko dijela* izrasta oblik unutar kutije veće od dijela za **Razmak kutije**.
3. **Veličina elementa**: ostavite prazno za automatsku veličinu (oko 8.000 kockica), ili upišite jednu. Finije veličine daju finije oblike i duže traju.
4. **Minimalni član**: članovi tanji od otprilike dvostruke ove vrijednosti se ne formiraju. Prazno znači jedan i po kockicu.
5. Označite jednu do šest **Ciljanih zapremina** (udio prostora dizajna koji oblik smije ispuniti) i jedan do četiri **Materijala**. Svaka zapremina se generiše jednom; svaki materijal se provjerava na tom obliku (najkrući oblik ne zavisi od materijala, ali njegova masa, naprezanje i faktor sigurnosti zavise).

## Ciljevi

- {{ui:Fixed}}: kliknite površine koje su držane. **Površina bez trenja** iz liste **Dodaj** u panelu drži površinu samo preko sebe (koristite je za ravni simetrije).
- {{ui:Force}}: kliknite opterećene površine, zatim upišite ukupnu silu i odaberite njen smjer u panelu. **Pritisak** je u listi **Dodaj**.
- {{ui:Preserve}}: kliknite površine čija okolina mora ostati čvrsta i postavite koliko duboko (**Zadrži čvrsto unutar**), na primjer oko rupa za vijke. Površine koje učvrstite ili opteretite uvijek se čuvaju.
- {{ui:Obstacle}}: kliknite površine čija okolina mora ostati prazna i postavite koliko daleko (**Zadrži prazno unutar**), na primjer prostor za osovinu ili alat.

Pritisnite **Gotovo odabiranje** ili {{key:Esc}} nakon klikanja površina. Zelene i crvene nijanse prikazuju područja.

## Generišite i upoređujte

Pritisnite {{ui:Generate}}. Panel prikazuje napredak i preostalo vrijeme; **Zaustavi** otkazuje. Svaki ishod se pojavljuje u tabeli **Ishodi**: ciljana zapremina, materijal, **masa**, **najveće naprezanje**, **najveći pomak** i **faktor sigurnosti** (granica tečenja ÷ naprezanje), sve iz ponovnog rješavanja gotovog oblika kao čvrstih kockica sa stvarnim materijalom.

Odaberite ishod da ga vidite u prikazu (dio je skriven; označite **Prikaži dio kroz njega** da vidite oboje). Ispod tabele: koliko je iteracija trajalo i je li se smirilo, njegova krutost kao čvrstog tijela naspram sopstvene brojke optimizatora, i njegova površina.

## Koristite ishod

- **STL**: zatvorena trougaona mreža, spremna za 3D štampu.
- **STEP (faceted)**: ista površina kao STEP čvrsto tijelo sastavljeno od ravnih površina.
- **Nova datoteka dijela**: PartCraft dio čija je jedina značajka ishod kao uvezeno čvrsto tijelo. Otvorite ga da skicirate na njemu, izrežete rupe ili provjerite u Simulaciji. Facetiran je (hiljade ravnih površina), pa nije uređiv oblik.
- **Dodaj u ovaj dio** spaja ishod s dijelom; uključeno je samo za kutiju kao prostor dizajna (kada je sam dio prostor, ishod leži unutar dijela).

**Nova datoteka dijela** i **Dodaj u ovaj dio** još nisu izgrađeni u ovoj verziji: ishod postaje uvezeno čvrsto tijelo, što zahtijeva tačno jezgro. Preuzimanja STL i STEP (faceted) rade.

## Koliko mu vjerovati

- Optimizuje **krutost** za zadanu zapreminu. Nema granica naprezanja i nema proizvodnih pravila (prevjesi, smjerovi glodanja, najmanje veličine rupa) još: provjerite odabrani ishod u [Simulaciji](topic:simulation) i prilagodite.
- Tanki članovi široki jednu ili dvije kockice su aproksimacije: za vitke dijelove koristite manju veličinu elementa.
- Metoda je SIMP s filterom gustoće, projekcijom praga i ažuriranjima kriterijuma optimalnosti; prijavljeno naprezanje i progib su ishoda kao kockica, što je iskreno, ali grubo na oštrim uglovima.

## Povezano

- [Provjerite naprezanje i progib (Simulacija)](topic:simulation)
- [Izvoz za štampu, STEP i DXF](topic:export-files)
- [Šta još nije izgrađeno](topic:not-built-yet)
