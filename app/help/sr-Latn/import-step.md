---
title: Otvaranje STEP datoteke i rad na njoj
summary: Uvezite STEP model dobavljača ili drugog CAD programa u PartCraft kao čvrsto telo, kao novi deo ili dodat trenutnom, podesite koja je strana gore, i dodajte skice i elemente.
keywords: step, stp, uvoz, otvori step, ap203, ap214, ap242, model dobavljača, čvrsto telo bez istorije, uvezeno čvrsto telo, osa gore, Z gore, Y gore, trouglovi, facetirano, STEP sklop
from: ca0eca5f
---

PartCraft otvara STEP datoteke (`.step` ili `.stp`, AP203, AP214 i AP242) kao **čvrsta tela** na kojima možete skicirati, seći, bušiti i kombinovati ih sa sopstvenim elementima. Telo nema sopstvenu istoriju: ne možete promeniti dimenzije sa kojima je napravljeno, samo dodati na njega ili seći iz njega.

Ova verzija gradi svaki deo mrežnim jezgrom, pa se STEP datoteka **čita kao trouglovi**: ravne površi ostaju ravne, a krive površi (cilindri, konusi, sfere, torusi, B-spline površi) postaju mnogo malih ravnih. Zapremina je u okviru delića procenta tačne. Čuvanje krivih površi tačno zahteva tačno jezgro, koje nije deo ove verzije.

## Otvaranje STEP datoteke

1. Izaberite {{ui:Otvori}} ili pritisnite {{key:Mod+O}} i izaberite `.step` ili `.stp` datoteku. Ili je prevucite na 3D pogled.
2. PartCraft čita datoteku i prikazuje šta je našao, na primer: „AP214 datoteka: 1 čvrsto telo, 10 površi, pročitano kao trouglovi.“ Ispod su broj trouglova, sve što je moralo da bude izostavljeno ili spojeno i da li se rezultat zatvara.
3. Proverite **Gore u datoteci**. STEP datoteka navodi sopstvenu jedinicu (milimetri, inči, metri…); PartCraft je pretvara u milimetre, pa **Jedinice u datoteci** pokazuje Milimetri, „datoteka tako kaže“. **Veličina ovde** pokazuje koliko će biti veliko.
4. Izaberite {{ui:Otvori kao telo}} za prazan deo, ili {{ui:Dodaj u ovaj deo}} / {{ui:Novi deo}} kada deo već ima elemente. Dodavanje pita šta da radi **Koristi za**: dodavanje, sečenje ili zadržavanje samo preklapanja.

Elemenat **Imported1** se pojavljuje u istoriji, a statusna traka kaže, na primer: „plate.step je čvrsto telo: 57995.937 mm³, 6 ravnih površi za skiciranje.“

## STEP sklop

Sklop dolazi kao **jedno telo** sa svakim delom tamo gde ga datoteka postavlja („3 dela postavljena u datoteci dolaze tamo gde stoje“). Deo korišćen dvaput dolazi dvaput. Nazivi delova i stablo sklopa se ne čuvaju.

## Podesite šta je gore

Većina CAD programa koristi Z gore; PartCraft koristi Y gore. Podrazumevano PartCraft okreće datoteku tako da njen Z pokazuje ovde nagore. Ako deo stigne ležeći na boku, izaberite **Imported1** i postavite **Gore u datoteci** na **Y gore**. **Jedinice u datoteci** i **Koristi za** se takođe mogu promeniti tamo; svaka promena je jedan korak opozivanja.

## Dalji rad na telu

- Kliknite ravnu površ tela i izaberite {{ui:Skica na ovoj površi}}. Ravne površi STEP modela zadržavaju svoje mesto kada se telo ponovo izgradi.
- Dodajte seče, rupe, izbočine, šablone i ogledala kao na bilo kom delu.
- Proverite njegovu veličinu u okviru **Deo**: zapremina, površina, dimenzije.

Zaobljenja, skošenja i ljuske zahtevaju tačno jezgro, kao na bilo kom delu u ovoj verziji ([Mrežno jezgro](topic:solid-kernels)).

## Gde se čuva

Trouglovi se čuvaju **unutar** datoteke `.partcraft.json`, pa je datoteka dela samostalna: STEP datoteka vam više nije potrebna.

## Poruke

| Poruka | Šta znači |
|---|---|
| '"part.stp" nije STEP datoteka (ne počinje sa ISO-10303-21).' | Datoteka nije običan STEP tekst. Zatražite od pošiljaoca STEP datoteku AP203, AP214 ili AP242 |
| "STEP datoteka ne može da se pročita: njen odeljak podataka nedostaje ili je oštećen." | Datoteka je odsečena ili oštećena. Kopirajte je ponovo |
| "STEP datoteka ne sadrži čvrsto telo ni telo površi: nema šta da se uveze." | Datoteka sadrži samo crteže, tačke ili podatke. Zatražite čvrsto telo |
| "Ta STEP datoteka je prevelika (preko 60 MB) da bi se ovde uvezla." i ostala ograničenja čitača (unosi, površi, trouglovi) | Pojednostavite model u izvoru ili pošaljite delove jedan po jedan |
| "… oštećeni redovi u datoteci su preskočeni." | Neki redovi nisu mogli da se pročitaju; ostatak je uvezen. Proverite telo |
| "… površi nisu mogle da se pretvore u trouglove i izostavljene su." | Te površi ostavljaju rupe, koje PartCraft pokušava da popuni; ako se telo ne zatvara, ne dodaje se |
| "… površi vrste koja se ne čita (…) su preskočene." | Redak tip površi. Zatražite model sa običnim ili B-spline površima |
| "Ne zatvara se …" | Površi ne čine zatvoreno čvrsto telo (model površi ili izostavljene površi). PartCraft prikazuje otvore i ništa ne dodaje |

## Ograničenja

- Krive površi se crtaju i mere kao ravne facete, kao na svakom delu koji ova verzija gradi. PartCraft zadržava ravne površi, cilindre, konuse, sfere i torusi iz datoteke uz telo, tako da {{ui:Izvezi}} › {{ui:STEP AP242 (tačno čvrsto telo)}} ih upisuje nazad kao prave površi, rupe kao rupe, zajedno sa elementima koje dodate. Površi koje datoteka navodi kao splajnove, provlačenja ili površi obrtanja ostaju facete u izvozu. Deo sačuvan pre 0.9.1 nema zadržane površi: ponovo otvorite STEP datoteku da ih dobijete.
- {{ui:Izvezi}} › {{ui:DXF skice ili ravne površi}} sa izabranom ravnom površi upisuje okrugle rupe iz datoteke kao prave krugove.
- Boje, nazivi tela, struktura sklopa i PMI (tolerancije u datoteci) se ne čitaju.
- Osim STEP-a, PartCraft otvara STL, OBJ i 3MF mreže ([Otvaranje STL, OBJ ili 3MF](topic:open-meshes)) i `.3dm` datoteke ([Otvaranje .3dm modela](topic:open-3dm-files)) kao čvrsta tela. IGES i izvorne datoteke drugih programa nisu podržani.
- Deo sa STEP čvrstim telom uvezenim build-om koji je imao tačno jezgro zadržava STEP tekst; ova verzija preskače taj elemenat („nije izrađeno“). Ponovo otvorite STEP datoteku da je uvezete kao trouglove.
