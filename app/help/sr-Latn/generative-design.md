---
title: Oblikovanje rasta iz opterećenja (generativno)
summary: Izaberi strane koje su držane i opterećene, oblasti koje treba zadržati i ostaviti slobodne, ciljane zapremine i materijale, i generiši ishode: najkrući oblici nađeni za svaku zapreminu, ponovo proverene kao čvrsta tela, upoređene u tabeli i preuzete kao STL, STEP ili kao novi deo.
keywords: generativno projektovanje, optimizacija topologije, SIMP, lagano, rešetka, organski oblik, ishodi, poređenje, masa, udeo zapremine, zadrži, zadrži unutra, prepreka, zadrži prazno, prostor projektovanja, minimalna veličina člana, STL, 3D štampa
from: 5b91fa8e
---

Radni prostor Generativno uklanja materijal koji opterećenja ne traže. Navodi se gde je deo držan i opterećen, šta mora ostati i šta mora ostati slobodno; PartCraft nalazi najkrući oblik za svaku ciljanu zapreminu (**optimizacija topologije**), ponovo ga proverava kao čvrsto telo sa stvarnim materijalom i prikazuje ishode jedan pored drugog. Radi na imenovanim stranama koje mrežno jezgro daje delu (vidi [Mrežno jezgro](topic:solid-kernels)).

Izaberi **Generativno** u polju **Radni prostor**. Deo se ne menja; studija se čuva unutar datoteke dela.

## Postavi studiju

1. Pritisni **Nova studija** u desnom panelu.
2. **Prostor**: *Deo kakav jeste* uklanja materijal iz dela; *Kutija oko dela* gradi oblik unutar kutije veće od dela za **Marginu kutije**.
3. **Veličina elementa**: ostavi prazno za automatsku veličinu (oko 8,000 kockica), ili upiši jednu. Finije veličine daju finije oblike i traju duže.
4. **Najmanji član**: članovi tanji od oko dvostruko ove vrednosti se ne formiraju. Prazno znači jedan i po kockicu.
5. Označi od jedne do šest **Ciljanih zapremina** (deo prostora projektovanja koji oblik sme da popuni) i od jednog do četiri **Materijala**. Svaka zapremina se generiše jednom; svaki materijal se proverava na tom obliku (najkrući oblik ne zavisi od materijala, ali njegova masa, naprezanje i faktor sigurnosti zavise).

## Ciljevi

- {{ui:Učvršćeno}}: klikni strane koje su držane. **Strana bez trenja** iz liste **Dodaj** u panelu drži stranu samo preko nje same (koristi je za ravni simetrije).
- {{ui:Sila}}: klikni opterećene strane, zatim upiši ukupnu silu i izaberi njen smer u panelu. **Pritisak** je u listi **Dodaj**.
- {{ui:Zadrži}}: klikni strane čija okolina mora ostati čvrsta, i postavi koliko duboko (**Zadrži kao čvrsto do**), na primer oko rupa za zavrtnje. Strane koje se učvršćuju ili opterećuju uvek se zadržavaju.
- {{ui:Prepreka}}: klikni strane čija okolina mora ostati prazna, i postavi koliko daleko (**Zadrži prazno do**), na primer prostor za osovinu ili alat.

Pritisni **Završi izbor** ili {{key:Esc}} posle klikanja strana. Zelene i crvene nijanse prikazuju oblasti.

## Generiši i uporedi

Pritisni {{ui:Generiši}}. Panel prikazuje napredak i preostalo vreme; **Zaustavi** otkazuje. Svaki ishod se pojavljuje u tabeli **Ishodi**: ciljana zapremina, materijal, **masa**, **najveće naprezanje**, **najveće pomeranje** i **faktor sigurnosti** (granica tečenja ÷ naprezanje), sve iz ponovnog rešavanja gotovog oblika kao čvrstih kockica sa stvarnim materijalom.

Izaberi ishod da ga vidiš u prikazu (deo je sakriven; označi **Prikaži deo kroz njega** da vidiš oba). Ispod tabele: koliko iteracija je trebalo i da li se ustalilo, njegova krutost kao čvrstog tela naspram sopstvene brojke optimizatora, i njegova površ.

## Koristi ishod

- **STL**: zatvorena trougaona mreža, spremna za 3D štampu.
- **STEP (izlomljeno)**: ista površ kao STEP čvrsto telo napravljeno od ravnih strana.
- **Nova datoteka dela**: deo PartCraft-a čija je jedina karakteristika ishod kao uvezeno čvrsto telo. Otvori ga da na njemu skiciraš, probušiš rupe ili proveriš u Simulaciji. Izlomljen je (na hiljade ravnih strana), nije uređiv oblik.
- **Dodaj u ovaj deo** spaja ishod sa delom; uključeno je samo za kutiju kao prostor projektovanja (sa samim delom kao prostorom, ishod leži unutar dela).

**Nova datoteka dela** i **Dodaj u ovaj deo** još nisu napravljeni u ovoj verziji: ishod postaje uvezeno čvrsto telo, što zahteva tačno jezgro. Preuzimanja STL i STEP (izlomljeno) rade.

## Koliko mu verovati

- Optimizuje **krutost** za zadatu zapreminu. Nema granica naprezanja i nema proizvodnih pravila (prepusti, pravci glodanja, minimalne veličine rupa) još: proveri izabrani ishod u [Simulaciji](topic:simulation) i prilagodi.
- Tanki članovi široki jednu ili dve kockice su aproksimacije: koristi manju veličinu elementa za vitke delove.
- Metoda je SIMP sa filterom gustine, projekcijom praga i ažuriranjem po kriterijumima optimalnosti; prijavljeno naprezanje i progib su za ishod kao kockice, što je iskreno ali grubo na oštrim uglovima.

## Povezano

- [Proveri naprezanje i progib (Simulacija)](topic:simulation)
- [Izvoz za štampu, STEP i DXF](topic:export-files)
- [Šta još nije napravljeno](topic:not-built-yet)
