---
title: Slobodne površine (NURBS)
summary: Glatke krive i površine pored dijela — prelaz, provlačenje, mreže krivih, zakrpe sa četiri ivice, stapanja, odsijecanja — s kontinuitetom G0, G1 i G2 mjerenim na tačnim površinama, tijela sa unijom, oduzimanjem i presjekom ugrađenim u dio, prikazi zebre i zakrivljenosti, površine uklopljene u sken s izmjerenom greškom, i datoteke STEP ili IGES. Čuva se u datoteci dijela.
keywords: nurbs, sken, inženjerski povrat, uklapanje, mreža u površinu, oblak tačaka, stl, odsijecanje, rupa, izrez, tijelo, tijela, bulova, unija, oduzmi, presjek, razlika, sašij, zatvoreno, ugradi, slobodna forma, površina, površine, b-splajn, bsplajn, kriva, splajn, prelaz, provlačenje, vodilica, mreža, zakrpa, stapanje, poklapanje, kontinuitet, g0, g1, g2, tangenta, zakrivljenost, zebra, kontrolne tačke, čvorovi, stepen, step, iges, klasa A, trup, izglađivanje
from: 64ed5196
---

Radni prostor **Površine** pravi glatke krive i površine kakve se koriste za ljuske proizvoda, karoserije automobila i trupove brodova: NURBS, ista matematika koju koriste i drugi modelari površina. Sve se mjeri na tačnim površinama, nikad na trouglovima koje vidiš. Veličine su u milimetrima, kao i u ostatku PartCraft-a.

Izaberi **Površine** u polju **Radni prostor**. Traka s alatima ima {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} i {{ui:Zebra}}; svaka naredba je u panelu desno. Naredba kaže šta joj još treba: klikni krive ili površine u prikazu (blizu ivice ili kraja kad to traži) ili ih izaberi s liste; unesi tačke, ili ih klikni na površinama dijela (van dijela padaju na ravan tla), zatim pritisni Enter.

Krive i površine se čuvaju u datoteci dijela uz tijelo. Ne mijenjaju elemente dijela: panel ima svoje **Poništi** i **Ponovi**, jedan korak po naredbi.

## Krive

- **Kriva kroz tačke** prolazi kroz svaku tačku koju klikneš. **Kriva po kontrolnim tačkama** umjesto toga prati mrežu tačaka.
- **Umetni čvor**, **Povisi stepen** i **Snizi stepen** mijenjaju način opisa krive bez pomjeranja (snižavanje odbija kad bi se kriva pomjerila više od tolerancije). **Ponovo izgradi krivu** daje joj novi broj kontrolnih tačaka i kaže koliko se pomjerila.
- **Poklapanje krive** spaja kraj jedne krive s krajem druge sa G0 (dodir), G1 (isti smjer) ili G2 (ista zakrivljenost takođe). **Stapanje krive** dodaje novu krivu između dva kraja, G1 ili G2.

## Površine

- {{ui:Loft}} kroz dvije ili više krivih, **Linearna površina** između dvije, **Izvuci krivu**, **Rotiraj krivu**.
- **Provlačenje duž jedne vodilice** vodi profil duž putanje bez uvijanja; **Provlačenje duž dvije vodilice** drži krajeve profila na obje vodilice. Provlačenja se uklapaju: rezultat kaže koliko je ostalo blizu pravog provlačenja.
- **Površina iz mreže krivih** prolazi kroz mrežu krivih (svaka siječe svaku od ostalih jednom). **Zakrpa iz četiri ivice** popunjava četiri krive koje se spajaju u uglovima.
- **Poklapanje površine** spaja ivicu površine sa susjedom sa G0, G1 ili G2; **Stapanje površine** dodaje površinu između dvije ivice.
- {{ui:Offset surface}}, {{ui:Extend surface}} (površina se nastavlja kako je išla), **Ponovo izgradi površinu**.

## Provjera kvaliteta

Tabela **Zajedničke ivice** navodi svaku ivicu koju dvije površine dijele, sa razmakom (mm), uglom između njih (°) i skokom zakrivljenosti (1/mm), i kaže da li to čini G0, G1 ili G2. Ivica lošija nego što si tražio pojavljuje se u **Problemima** s popravkom **Poklapanje**. Pruge **Zebra** i boje **zakrivljenosti** dolaze iz tačne površine: pruge koje se neprekinuto protežu preko ivice znače G1; pruge koje zadržavaju i svoju širinu znače G2.

G0–G2 se mjere u 33 tačke po ivici. G3 i kvalitet "klase A" se ne mjere i ne tvrde se.

## Odsijecanje površine

Grupa **Odsijecanje** siječe površinu bez promjene njenog oblika: površina zadržava sve svoje kontrolne tačke, a prikazuje se, broji i zapisuje samo dio unutar konture. **Odsijeci pravougaono** i **Odsijeci krugom** rade na udjelu (0 do 1) površine u svakom smjeru, pa ne traže biranje u prikazu; **Odsijeci krivom** uzima zatvorenu krivu koja leži na površini (projektuje se u površinu, i odbija se riječima kad je otvorena ili je dalje od tolerancije). Označi **Izreži rupu** da ukloniš unutrašnjost konture; ostavi neoznačeno da zadržiš samo unutrašnjost. Površina može imati jednu zadržanu konturu i bilo koji broj rupa; kontura koja siječe drugu se odbija. **Ukloni odsijecanje** ponovo prikazuje cijelu površinu. Poništi panela vraća odsijecanje kao i svaki drugi korak.

STEP nosi odsijecanje kao granice površine, a IGES kao odsječenu površinu (entitet 144); oba ga učitavaju natrag.

## Tijela i Booleove operacije

Grupa **Tijela** pretvara površine u zatvorena tijela i spaja ih. Tijelo je ovdje skup površina panela koje zajedno zatvaraju zapreminu; njegove površine ostaju tačne NURBS površine s odsijecanjima.

- **Tijelo kvadra**, **Tijelo valjka** i **Tijelo kugle** prave tijelo iz unesenih veličina (u mm): kvadar sa šest ravnih površina, valjak sa okruglom bočnom stranom i dvije ravne strane odsječene po krugu, kugla od jedne rotirane površine.
- **Tijelo iz površina** grupiše površine koje si sam napravio. Izaberi ih, ili ne biraj nijednu da se upotrijebi svaka prikazana površina koja još nije u tijelu. Sašivaju se unutar tolerancije: ako se ne zatvore, ništa se ne mijenja, a panel kaže koliko ivica ostaje otvoreno i koliko blizu se moraju spojiti.
- **Unija**, **Oduzmi** (drugo tijelo se oduzima od prvog) i **Zajednički dio** (samo ono što oba dijele) uzimaju dva tijela: klikni po jednu površinu svakog u prikazu, ili pritisni **Odaberi** na listi **Tijela**. Označi **Zadrži oba tijela** da ih ostaviš uz rezultat.

Booleova operacija zadržava svaku površinu na njenoj tačnoj površini i siječe je novim konturama odsijecanja duž presjeka. Red rezultata daje izmjerene brojeve: koliko su se tačke motora tijela morale pomjeriti da sjednu na tačne površine (nikad više od tolerancije), koliko su tačke presjeka blizu obje površine (obično nekoliko milionitih dijela milimetra), zapreminu, i da li se nove površine ponovo zatvaraju kad se sašiju iznova od svojih tačnih površina. Zapremine se mjere na trouglovima unutar tolerancije (0.05 mm osim ako postaviš drugu), pa zapremina kugle ili valjka izlazi malo manja od tačne: manja tolerancija je bliža. Booleova operacija koja se ne može uraditi čisto (tijela ne dijele ništa, kontura bi presjekla samu sebe) odbija se riječima i ništa ne mijenja. Jedna Booleova operacija je jedan korak panelovog **Poništi**.

Na listi **Tijela**, **Razgrupiši** zadržava površine kao obične površine; kanta uklanja tijelo i njegove površine.

## Zaobljenja i zadebljavanje

**Zaobljenje između površina** zaobljuje ivicu gdje se sastaju dvije površine jednog tijela: izaberi dvije površine (u prikazu, ili s **Odaberi** na listi), upiši **poluprečnik** i, za poluprečnik koji se mijenja duž ivice, **poluprečnik na kraju** (0 zadržava jedan poluprečnik). Kugla tog poluprečnika kotrlja se duž ivice dodirujući obje površine; zaobljenje je tačan kružni luk koji ostavlja u svakoj tački, spojen u jednu površinu, a dvije površine se odsijecaju tamo gdje ih kugla dodiruje. Vanjska ivica gubi materijal, unutrašnji ugao ga dobija. Red rezultata daje šta je izmjereno: koliko je površina zaobljenja udaljena od kotrljajuće kugle između tačaka iz kojih je izgrađena (tačke se dodaju dok ne bude unutar četvrtine tolerancije), najveći ugao između zaobljenja i svake površine duž linija dodira, i iste brojeve kao kod Unije. Poluprečnik koji ne stane (kugla bi napustila površinu, ili površina krivi uže od poluprečnika) odbija se, uz navođenje površine, i ništa se ne mijenja.

**Zaobljenje više ivica** zaobljuje mnoge ivice u jednom koraku: izaberi dvije površine prve ivice, zatim dvije površine sljedeće, i tako dalje (površina može biti u nekoliko parova, na primjer gornja površina kvadra u četiri njih); sve ivice dobijaju poluprečnik koji upišeš. Svako zaobljenje se računa na tijelu kakvo je bilo, zatim se sijeku jedno za drugim, pa redoslijed nije važan. Gdje se dvije zaobljene ivice spajaju u uglu čije ostale ivice ostaju oštre, dva zaobljenja se ulijevaju jedno u drugo duž njihove krive presjeka (nabor). Gdje se tri zaobljene vanjske ivice tri ravne površine međusobno pod pravim uglom sastaju s jednim poluprečnikom, ugao je jedan **dio sfere** tangentan na sva tri zaobljenja (isključi **Uglove** da dobiješ ugao s naborom); ivica mora biti najmanje dvostruko duža od poluprečnika gdje su oba kraja takva ugla. Red rezultata kaže koliko je ivica zaobljeno i kako su uglovi ispali. Unutrašnje ivice se također mogu zaobliti zajedno, ali se rezultat koji se ne zatvara ponovo samo prijavljuje (red to kaže), pa ga provjeri.

**Zadeblji u tijelo** daje površini debljinu: izaberi je, upiši **debljinu**, i označi **Druga strana** da je raste na drugu stranu. Pomaknuta površina se uklapa u površinu i mjeri prema njoj (red rezultata daje najveću razliku od debljine); zidovi slijede svaku ivicu i svaku konturu odsijecanja. Ako površina na toj strani krivi uže od debljine, ili je neki drugi njen dio bliži od debljine, odbija se, uz navođenje površine i mjesta, i ništa se ne mijenja.

## Zapeci tijelo u dio

**Zapeci** (na traci s alatima Površine), ili **Zapeci u dio** na listi **Tijela**, pravi od tijela dio tijela, kao što otvoreni STL postaje jedan: izaberi tijelo, da li se **dodaje** u dio, **siječe** iz njega ili **presijeca** s njim, i toleranciju (koliko trouglovi smiju biti udaljeni od tačnih površina). To je jedan korak Poništi dijela i pojavljuje se na listi elemenata kao uvoz nazvan po tijelu. Dio zadržava trouglove, pa se otvara i gradi bez površina; tačno tijelo ostaje u Površinama, pa ga možeš ponovo zapeći nakon izmjene.

## Datoteke

Izvezi **STEP** (AP242) ili **IGES** sa krivama i površinama tačno kakve jesu (B-splajn krive i površine, ništa pretvoreno u trouglove). Svaka površina je zasebna površina sa svojim odsijecanjem; tijelo se zapisuje kao jedna zatvorena ljuska, svaka ivica zajednička sa svoje dvije površine kako drugi CAD programi očekuju (red statusa kaže koliko je tijela tako izašlo). U IGES-u isto tijelo je jedan mnogostruki čvrsti B-rep (entitet 186 nad zatvorenom ljuskom 514, površine 510, petlje 508, jedna lista ivica 504 i jedna lista vrhova 502); tijelo čije se površine ne spajaju ivicu po ivicu zapisuje se kao zasebne površine, a red to kaže. **Uvezi…** čita takvo tijelo nazad kao tijelo, iz STEP-a i iz IGES-a.

## Izglađivanje linija trupa

**Izgladi** (na traci s alatima Površine) mjeri svaku krivu na njenom tačnom obliku — prevoje (gdje mijenja savijanje iz jednog smjera u drugi), najveću zakrivljenost, skokove zakrivljenosti u svojim čvorovima i hrapavost — i ponovo gradi one s prevojem ili skokom, s najmanje kontrolnih tačaka koje ostaju unutar tolerancije koju zadaš i ne dodaju prevoj. Nacrtaj stanice, vodene linije i bokove kao krive, izgladi ih, zatim {{ui:Loft}} trup kroz stanice i provjeri sa {{ui:Zebra}}. Neizglađene krive se također pojavljuju u **Problemima** s popravkom **Izgladi ovu krivu**. Linija koja treba da mijenja smjer (S-presjek) zadržava taj jedan prevoj. Istisnina, težišta i krakovi ispravljanja trupa dolaze iz tijela dijela: vidi alat hidrostatike.

## Površine iz skena (inženjerski povrat)

Otvori dio koji sadrži skenirani mrežu (otvoreni STL ili zapečeno tijelo), izaberi **Površine** u polju **Radni prostor**, i u grupi **Sken** izaberi **Uklopi površine u sken**; izgrađena mreža dijela je sken. Alat traži **ravni**, **cilindre**, **sfere** i **konuse** (tačne površine od kojih se sastoji obrađeni dio; svaki red pokazuje poluprečnik ili polovinu ugla koju je našao), nalazi **zaobljenja** (zaobljene ivice i uglovi: mali cilindar ili sfera koji tangentno prelazi u dvije ili više drugih površina, prikazan sa svojim poluprečnikom i površinama koje spaja), **zaobljenja oboda** (torus: zaobljena ivica gdje se ravna površina sastaje s cilindrom ili konusom, prikazana sa svojim poluprečnikom i poluprečnikom prstena) i **promjenljiva zaobljenja** (zaobljena ivica čiji se poluprečnik mijenja duž nje, prikazana s poluprečnikom na svakom kraju), uklapa **jednu slobodnu zakrpu** u glatak, blago zakrivljen komad, i siječe svaku površinu po konturi dijela skena iz kojeg dolazi, tako da rupe i uglovi ostaju. Opcije: **tolerancija** (koliko daleko, u mm, tačka skena smije biti od ravni ili cilindra a da i dalje pripada njemu, i cilj za slobodnu zakrpu), **najmanji komad** (udio površine) i **najviše površina**. Isti sken i iste opcije uvijek daju iste površine.

Rezultat je tabela, jedan red po površini: njena vrsta, iz koliko je trouglova nastala, i greška **izmjerena od skena do površine** (RMS, najveća i udio tačaka unutar tolerancije). Mjere se tjemena skena i sredina svakog trougla. Greška se ne mjeri obrnuto (od površine do skena), pa površina koja seže dalje od skena ne bi bila prikazana. Napomena ispod tabele kaže i koliki dio površine je bio premali za uklapanje. U prikazu su tačke skena obojene po svojoj **mapi odstupanja**: plavo na površini, zeleno na pola puta do tolerancije, crveno na toleranciji ili više (skini oznaku **Prikaži mapu odstupanja** da je sakriješ). Komadi koji se savijaju sami u sebe (na primjer zatvorena cijev uklopljena slobodnim zakrpama) navode se kao neuklopljeni, nikad se ne tjeraju u jednu površinu.

**Sašij površine u tijelo** sašiva svaku prikazanu površinu koja nije u tijelu u jedno zatvoreno tijelo. Površine skena se spajaju samo unutar sopstvene greške skena, pa proba najmanju udaljenost spoja koja zatvara (nikad više od **udaljenosti šivanja** koju postaviš) i odbija riječima kad se površine ne zatvaraju. Nikad ne krpi procjep. Kvadar sa zaobljenim ivicama se sašiva kad su mu zaobljenja nađena kao sopstvene površine; udaljenost spoja koja je zatvorila je u rezultatu. Tijelo tada radi s Unijom, Oduzmi, Zajedničkim dijelom i **Zapeci u dio**.

Šta ne radi: **zaobljenje oboda** (torus) se traži samo oko ose već nađenog cilindra ili konusa, a **promjenljivo zaobljenje** samo duž pretežno prave ivice (njegovi presjeci se sijeku pod pravim uglom na jedan smjer); drugdje se dobijaju kao slobodne zakrpe kad su dovoljno glatke, inače se izostavljaju; sfere, konusi i zaobljenja se traže slučajnim uzorkovanjem, pa se vrlo mali (nekoliko trouglova) mogu propustiti; mapa odstupanja pokazuje udaljenost od skena do površina, a ne obrnuto; vrlo veliki skenovi (preko 300,000 trouglova) ovdje se odbijaju. Površine cilindra punog kruga sijeku se oko rupa, sa šavom postavljenim gdje nema rupe. Provjeri svaku površinu prema svom skenu prije nego se osloniš na nju.

## Još nije izrađeno

Zaobljavanje ivica koje se sastaju u uglu zakrivljenih površina ili s različitim poluprečnicima (stapanje vrha), zaobljenje između površina koje se ne sastaju, unutrašnje zaobljenje koje se završava na kosoj ili zakrivljenoj površini, Booleove operacije i zaobljenja računata na površinama bez trouglova (ovdje motor tijela radi na trouglovima unutar tolerancije, a svaka tačka se zatim vraća na tačne površine), zapečeno tijelo koje prati površine kad se one promijene, odsijecanje površine drugom površinom van Booleove operacije, popunjavanje rupa sa više od četiri strane, projektovanje krivih na površine.
