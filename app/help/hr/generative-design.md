---
title: Izrada oblika iz opterećenja (Generativno)
summary: Odaberite plohe koje su učvršćene i opterećene, područja koja treba zadržati i ona koja moraju ostati slobodna, ciljane volumene i materijale, zatim generirajte ishode: najkrući oblici pronađeni za svaki volumen, ponovno provjereni kao čvrsta tijela, uspoređeni u tablici i preuzeti kao STL, STEP ili novi dio.
keywords: generativni dizajn, optimizacija topologije, SIMP, lagan, rešetka, organski oblik, ishodi, usporedba, masa, udio volumena, očuvaj, zadrži unutra, prepreka, zadrži van, prostor dizajna, minimalna veličina člana, STL, 3D ispis
from: 5b91fa8e
---

Radni prostor **Generativno** uklanja materijal koji opterećenja ne trebaju. Vi kažete gdje je dio učvršćen i opterećen, što mora ostati i što mora ostati slobodno; PartCraft pronalazi najkrući oblik za svaki ciljani volumen (**optimizacija topologije**), ponovno ga provjerava kao čvrsto tijelo sa stvarnim materijalom i prikazuje ishode jedan uz drugi. Radi na imenovanim plohama koje mrežna jezgra daje dijelu (vidi [Mrežna jezgra](topic:solid-kernels)).

Odaberite **Generativno** u okviru **Radni prostor**. Vaš dio se ne mijenja; studija se sprema unutar datoteke dijela.

## Postavite studiju

1. Pritisnite **Nova studija** na desnoj ploči.
2. **Prostor**: *Dio kakav jest* uklanja materijal iz vašeg dijela; *Kutija oko dijela* izrasta oblik unutar kutije koja je veća od dijela za **Razmak kutije**.
3. **Veličina elementa**: ostavite prazno za automatsku veličinu (oko 8,000 kocaka), ili upišite jednu. Finije veličine daju finije oblike i traju dulje.
4. **Minimalni član**: članovi tanji od oko dvostruke ove vrijednosti ne nastaju. Prazno znači jedan i pola kocke.
5. Označite jedan do šest **Ciljnih volumena** (udio prostora dizajna koji oblik smije ispuniti) i jedan do četiri **Materijala**. Svaki volumen se generira jednom; svaki materijal se provjerava na tom obliku (najkrući oblik ne ovisi o materijalu, ali njegova masa, naprezanje i faktor sigurnosti da).

## Ciljevi

- {{ui:Fiksno}}: kliknite plohe koje su učvršćene. **Ploha bez trenja** s popisa **Dodaj** na ploči drži plohu samo preko same sebe (koristite je za ravnine simetrije).
- {{ui:Sila}}: kliknite opterećene plohe, zatim upišite ukupnu silu i odaberite njezin smjer na ploči. **Tlak** je na popisu **Dodaj**.
- {{ui:Očuvaj}}: kliknite plohe čija okolina mora ostati čvrsta i postavite koliko duboko (**Zadrži čvrsto unutar**), na primjer oko rupa za vijke. Plohe koje učvrstite ili opteretite uvijek se zadržavaju.
- {{ui:Prepreka}}: kliknite plohe čija okolina mora ostati prazna i postavite koliko daleko (**Zadrži prazno unutar**), na primjer prostor za osovinu ili alat.

Pritisnite **Gotovo s odabirom** ili {{key:Esc}} nakon klikanja ploha. Zelene i crvene nijanse pokazuju područja.

## Generirajte i usporedite

Pritisnite {{ui:Generiraj}}. Ploča prikazuje napredak i preostalo vrijeme; **Zaustavi** otkazuje. Svaki ishod pojavljuje se u tablici **Ishodi**: ciljni volumen, materijal, **masa**, **najveće naprezanje**, **najveći pomak** i **faktor sigurnosti** (granica popuštanja ÷ naprezanje), sve iz ponovnog izračuna gotovog oblika kao čvrstih kocaka sa stvarnim materijalom.

Odaberite ishod da ga vidite u prikazu (dio je skriven; označite **Prikaži dio kroz njega** da vidite oboje). Ispod tablice: koliko je iteracija trebalo i je li se smirilo, njegova krutost kao čvrstog tijela naspram vlastite brojke optimizatora te njegova površina.

## Upotrijebite ishod

- **STL**: zatvorena mreža trokuta, spremna za 3D ispis.
- **STEP (faceted)**: ista površina kao STEP čvrsto tijelo sastavljeno od ravnih ploha.
- **Nova datoteka dijela**: dio PartCraft-a čija je jedna značajka ishod kao uvezeno čvrsto tijelo. Otvorite ga da skicirate na njemu, izrežete rupe ili provjerite u Simulaciji. Poligonalan je (tisuće ravnih ploha), nije uređiv oblik.
- **Dodaj ovom dijelu** spaja ishod s dijelom; uključeno je samo za kutiju kao prostor dizajna (sa samim dijelom kao prostorom, ishod leži unutar dijela).

**Nova datoteka dijela** i **Dodaj ovom dijelu** još nisu izrađeni u ovoj verziji: ishod postaje uvezeno čvrsto tijelo, što zahtijeva egzaktnu jezgru. Preuzimanja STL i STEP (faceted) rade.

## Koliko mu vjerovati

- Optimizira **krutost** za zadani volumen. Za sada nema granica naprezanja ni proizvodnih pravila (prevjesi, smjerovi glodanja, minimalne veličine rupa): provjerite odabrani ishod u [Simulacija](topic:simulation) i prilagodite.
- Tanki članovi široki jednu ili dvije kocke su aproksimacije: za vitke dijelove koristite manju veličinu elementa.
- Metoda je SIMP s filtrom gustoće, projekcijom praga i ažuriranjima kriterija optimalnosti; prijavljeno naprezanje i progib su za ishod kao kocke, što je iskreno, ali grubo na oštrim kutovima.

## Povezano

- [Provjera naprezanja i progiba (Simulacija)](topic:simulation)
- [Izvoz za ispis, STEP i DXF](topic:export-files)
- [Što još nije izrađeno](topic:not-built-yet)
