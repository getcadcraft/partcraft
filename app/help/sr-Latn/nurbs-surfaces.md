---
title: Slobodne površi (NURBS)
summary: Glatke krive i površi pored dela — prelaz, provlačenje, mreže krivih, zakrpe sa četiri ivice, stapanja, skraćivanja — sa G0, G1 i G2 kontinuitetom merenim na tačnim površima, čvrstim telima sa unijom, oduzimanjem i zajedničkim delom ugrađenim u deo, prikazima zebre i zakrivljenosti, površima uklopljenim u sken sa izmerenom greškom, i STEP ili IGES datotekama. Čuva se u datoteci dela.
keywords: nurbs, sken, reverzni inženjering, uklapanje, mreža u površ, oblak tačaka, stl, skraćivanje, rupa, rez, čvrsto telo, čvrsta tela, bulova, unija, oduzimanje, zajednički deo, razlika, sašij, zatvoreno, ugradi, slobodna forma, površ, površi, b-splajn, kriva, splajn, prelaz, provlačenje, šina, mreža, coons, zakrpa, stapanje, poklapanje, kontinuitet, g0, g1, g2, tangenta, zakrivljenost, zebra, kontrolne tačke, čvorovi, stepen, step, iges, klasa A, trup, glađenje
from: 64ed5196
---

Radni prostor **Površi** pravi glatke krive i površi kakve se koriste za školjke proizvoda, karoserije automobila i trupove brodova: NURBS, ista matematika koju koriste drugi modeleri površi. Sve se meri na tačnim površima, nikad na trouglovima koje vidite. Dimenzije su u milimetrima, kao u ostatku PartCraft-a.

Izaberite **Površi** u polju **Radni prostor**. Traka sa alatkama ima {{ui:Kriva}}, {{ui:Prelaz}}, {{ui:Provlačenje}}, {{ui:Poklapanje}} i {{ui:Zebra}}; svaka naredba je u panelu desno. Naredba kaže šta joj još treba: kliknite krive ili površi u prikazu (blizu ivice ili kraja kad to traži) ili ih izaberite na listi; ukucajte tačke, ili kliknite na površi dela (van dela padaju na ravan tla), pa pritisnite Enter.

Krive i površi se čuvaju u datoteci dela pored čvrstog tela. Ne menjaju elemente dela: panel ima sopstvene **Opozovi** i **Ponovi**, jedan korak po naredbi.

## Krive

- **Kriva kroz tačke** prolazi kroz svaku tačku koju kliknete. **Kriva preko kontrolnih tačaka** umesto toga prati kavez tačaka.
- **Umetni čvor**, **Podigni stepen** i **Spusti stepen** menjaju način opisa krive bez pomeranja (spuštanje se odbija kad bi se kriva pomerila više od tolerancije). **Ponovo napravi krivu** joj daje novi broj kontrolnih tačaka i kaže koliko se pomerila.
- **Poklapanje krive** spaja kraj jedne krive sa krajem druge sa G0 (dodir), G1 (isti smer) ili G2 (i ista zakrivljenost). **Stapanje krive** dodaje novu krivu između dva kraja, G1 ili G2.

## Površi

- **Prelaz** kroz dve ili više krivih, **Linearna površ** između dve, **Izvuci krivu**, **Rotiraj krivu**.
- **Provlačenje duž jedne šine** vodi profil duž putanje bez uvrtanja; **Provlačenje duž dve šine** drži krajeve profila na obe šine. Provlačenja se uklapaju: rezultat kaže koliko je blisko ostalo pravom provlačenju.
- **Površ iz mreže krivih** prolazi kroz mrežu krivih (svaka seče svaku od ostalih jednom). **Zakrpa iz četiri ivice** popunjava četiri krive koje se sastaju u uglovima.
- **Poklapanje površi** spaja ivicu površi sa susedom sa G0, G1 ili G2; **Stapanje površi** dodaje površ između dve ivice.
- **Pomak površine**, **Produži površinu** (površ se nastavlja kako je išla), **Ponovo napravi površ**.

## Provera kvaliteta

Tabela **Zajedničke ivice** navodi svaku ivicu koju dve površi dele, sa razmakom (mm), uglom između njih (°) i skokom zakrivljenosti (1/mm), i kaže da li je to G0, G1 ili G2. Ivica koja je lošija od tražene pojavljuje se u **Problemima** sa popravkom **Poklapanje**. Pruge **zebre** i boje **zakrivljenosti** dolaze s tačne površi: pruge koje prelaze preko ivice bez prekida znače G1; pruge koje zadržavaju i širinu znače G2.

G0–G2 se mere u 33 tačke po ivici. **G3 i kvalitet „klase A“ se ne mere** i ne tvrde se.

## Skraćivanje površi

Grupa **Skraćivanje** seče površ bez promene oblika: površ zadržava sve svoje kontrolne tačke, a prikazuje se, broji i upisuje samo deo unutar konture. **Skrati na pravougaonik** i **Skrati krugom** rade na udelu (0 do 1) površi u svakom pravcu, pa ne traže biranje u prikazu; **Skrati krivom** uzima zatvorenu krivu koja leži na površi (projektuje se na površ, a odbija se rečima kad je otvorena ili udaljena više od tolerancije).

Označite **Izreži rupu** da uklonite unutrašnjost konture; ostavite neoznačeno da zadržite samo unutrašnjost. Površ može imati jednu zadržanu konturu i bilo koji broj rupa; kontura koja seče drugu se odbija. **Ukloni skraćivanje** ponovo prikazuje celu površ. Opozovi panela vraća skraćivanje kao i svaki drugi korak.

STEP nosi skraćivanje kao granice površi, a IGES kao skraćenu površ (entitet 144); oba ga čitaju nazad.

## Čvrsta tela i Bulove operacije

Grupa **Čvrsta tela** pretvara površi u zatvorena tela i spaja ih. Čvrsto telo ovde je skup sopstvenih površi panela koje zajedno zatvaraju zapreminu; njegove površi ostaju tačne NURBS površi sa svojim skraćenjima.

- **Kvadar**, **Valjak** i **Kugla** prave telo od ukucanih mera (u mm): kvadar od šest ravnih površi, valjak od okrugle strane i dva ravna kraja skraćena na krug, kugla od jedne rotirane površi.
- **Čvrsto telo iz površi** grupiše površi koje ste sami napravili. Izaberite ih, ili nijednu da upotrebite sve prikazane površi koje još nisu u čvrstom telu. Šiju se zajedno u okviru tolerancije: ako se ne zatvore, ništa se ne menja i panel kaže koliko ivica ostaje otvoreno i koliko blizu moraju da se sretnu.
- **Unija**, **Oduzimanje** (drugo telo se oduzima od prvog) i **Zajednički deo** (samo ono što oba dele) uzimaju dva tela: kliknite po jednu površ svakog u prikazu, ili pritisnite **Izaberi** u listi **Čvrsta tela**. Označite **Zadrži dva tela** da ih ostavite pored rezultata.

Bulova operacija zadržava svaku površ na sopstvenoj tačnoj površi i seče je novim konturama skraćenja duž preseka. Red rezultata daje izmerene brojke: koliko su tačke motora čvrstih tela morale da se pomere da sednu na tačne površi (nikad više od tolerancije), koliko su tačke preseka blizu obe površi (obično nekoliko milionitih delova milimetra), zapreminu, i da li se nove površi ponovo zatvaraju kad se ponovo sašiju od svojih tačnih površi. Zapremine se mere na trouglovima u okviru tolerancije (0.05 mm osim ako ne zadate drugu), pa zapremina kugle ili valjka izlazi malo manja od tačne: manja tolerancija dolazi bliže. Bulova operacija koja ne može čisto da se uradi (tela nemaju ništa zajedničko, kontura bi sama sebe presekla) odbija se rečima i ništa ne menja. Jedna Bulova operacija je jedan korak panela **Opozovi**.

U listi **Čvrsta tela**, **Razgrupiši** zadržava površi kao obične površi; dugme Izbriši uklanja telo i njegove površi.

## Zaobljenja i zadebljavanje

**Zaobljenje između površi** zaobljuje ivicu gde se sastaju dve površi jednog tela: izaberite dve površi (u prikazu, ili sa **Izaberi** u listi), ukucajte **poluprečnik** i, za poluprečnik koji se menja duž ivice, **poluprečnik na kraju** (0 zadržava jedan poluprečnik). Kuglica tog poluprečnika kotrlja se duž ivice dodirujući obe površi; zaobljenje je tačan kružni luk koji ostaje u svakoj tački, spojen u jednu površ, a dve površi se skraćuju tamo gde ih kuglica dodiruje. Spoljašnja ivica gubi materijal, unutrašnji ugao dobija ga. Red rezultata daje izmereno: koliko je površ zaobljenja udaljena od kotrljajuće kuglice između tačaka od kojih je napravljena (tačke se dodaju dok ne bude u okviru četvrtine tolerancije), najveći ugao između zaobljenja i svake površi duž linija dodira, i iste brojke kao kod Unije. Poluprečnik koji ne stane (kuglica bi napustila površ, ili površ krivi uže od poluprečnika) odbija se uz navođenje površi, i ništa se ne menja.

**Zaobljenje više ivica** zaobljuje mnogo ivica u jednom koraku: izaberite dve površi prve ivice, pa dve površi sledeće, i tako dalje (površ može biti u više parova, na primer gornja površ kvadra u četiri njih); sve ivice dobijaju poluprečnik koji ukucate. Svako zaobljenje se računa na telu kakvo je bilo, pa se seku jedno za drugim, tako da redosled ne važi. Gde se dve zaobljene ivice sastaju u uglu čije ostale ivice ostaju oštre, dva zaobljenja se spajaju duž svoje krive preseka (nabor). Gde se tri zaobljene spoljašnje ivice tri ravne površi, međusobno pod pravim uglom, sastaju sa jednim poluprečnikom, ugao je jedna **zakrpa sfere** tangentna na sva tri zaobljenja (isključite **Uglove** da dobijete naborani ugao umesto toga); ivica mora biti bar dvostruko duža od poluprečnika tamo gde su oba kraja takvi uglovi. Red rezultata kaže koliko je ivica zaobljeno i kako su ispali uglovi. Unutrašnje ivice mogu da se zaobljuju zajedno, ali rezultat koji se ponovo ne zatvara samo se prijavljuje (red to kaže), pa ga proverite.

**Zadebljaj u čvrsto telo** daje površi debljinu: izaberite je, ukucajte **debljinu**, i označite **Druga strana** da je raste na drugu stranu. Pomaknuta površ se uklapa u površ i meri u odnosu na nju (red rezultata daje najveću razliku od debljine); zidovi prate svaku ivicu i svaku konturu skraćenja. Ako površ na toj strani krivi uže od debljine, ili drugi deo nje leži bliže od debljine, odbija se uz navođenje površi i mesta, i ništa se ne menja.

## Ugradnja čvrstog tela u deo

**Ugradi** (na traci Površi) ili **Ugradi u deo** na listi **Čvrsta tela** pravi od čvrstog tela telo dela, kao što otvoren STL postaje jedno: izaberite telo, da li se **dodaje** delu, **izrezuje** iz njega ili **preseca** sa njim, i toleranciju (koliko trouglovi smeju da odstupaju od tačnih površi). To je jedan korak Opozovi dela i pojavljuje se na listi elemenata kao uvoz nazvan po telu. Deo zadržava trouglove, pa se otvara i ponovo pravi bez površi; tačno telo ostaje u Površima, pa ga možete ponovo ugraditi posle izmene.

## Datoteke

Izvezite **STEP** (AP242) ili **IGES** sa krivama i površima tačno onakvim kakvi jesu (B-splajn krive i površi, ništa pretvoreno u trouglove). Svaka površ je sopstvena površ, sa svojim skraćenjem; čvrsto telo se piše kao jedna zatvorena ljuska, svaka ivica deljena između dve površi, kako očekuju drugi CAD programi (statusna linija kaže koliko je tela tako izašlo). U IGES-u isto čvrsto telo je jedan mnogostruki čvrsti B-rep (entitet 186 nad zatvorenom ljuskom 514, površi 510, petlje 508, jedna lista ivica 504 i jedna lista temena 502); čvrsto telo čije se površi ne uparuju ivica po ivicu piše se kao zasebne površi, a red to kaže. **Uvezi…** čita takvo telo nazad kao čvrsto telo, iz STEP-a i iz IGES-a.

## Glađenje linija trupa

**Glađenje** (na traci Površi) meri svaku krivu na njenom tačnom obliku — prevoje (gde menja savijanje s jedne strane na drugu), najveću zakrivljenost, skokove zakrivljenosti na svojim čvorovima i njenu neravnost — i ponovo pravi one sa prevojem ili skokom sa najmanje kontrolnih tačaka koje ostaju u okviru tolerancije koju zadate i ne dodaju prevoj. Nacrtajte rebra, vodene linije i bočne linije kao krive, zagladite ih, pa **Prelazom** napravite trup kroz rebra i proverite ga sa **Zebra**. Negladke krive se pojavljuju i u **Problemima** sa popravkom **Zagladi ovu krivu**. Linija koja treba da menja pravac (S-presek) zadržava taj jedan prevoj. Istisnina trupa, centri i kraci uspravljanja dolaze iz čvrstog dela: vidi alat hidrostatike.

## Površi iz skena (reverzni inženjering)

Otvorite deo koji sadrži skenirani mrežu (otvoren STL ili ugrađeno telo), izaberite **Površi** u polju **Radni prostor**, i u grupi **Skeniranje** izaberite **Uklopi površi u sken**; napravljena mreža dela je sken.

Alat traži **ravni**, **valjke**, **kugle** i **konuse** (tačne površi od kojih je obrađen deo; svaki red pokazuje poluprečnik ili polovinu ugla koju je našao), nalazi **zaobljenja** (zaobljene ivice i uglovi: mali valjak ili kugla koja tangentno prelazi u dve ili više drugih površi, prikazana sa svojim poluprečnikom i površima koje spaja), **obodna zaobljenja** (torus: zaobljena ivica gde ravna površ dodiruje valjak ili konus, prikazana sa poluprečnikom i poluprečnikom prstena) i **promenljiva zaobljenja** (zaobljena ivica čiji se poluprečnik menja duž nje, prikazana sa poluprečnikom na svakom kraju), uklapa **jednu slobodnu zakrpu** u glatak, blago zakrivljen deo, i seče svaku površ po konturi dela skena iz kog potiče, tako da rupe i uglovi ostaju. Opcije: **tolerancija** (koliko, u mm, tačka skena sme da bude udaljena od ravni ili valjka a da još pripada njoj, i cilj za slobodnu zakrpu), **najmanji deo** (udeo površine) i **najviše površi**. Isti sken i iste opcije uvek daju iste površi.

Rezultat je tabela, jedan red po površi: njena vrsta, iz koliko trouglova je nastala, i greška **izmerena od skena do površi** (rms, najveća, i udeo tačaka u okviru tolerancije). Mere se temena skena i sredina svakog trougla. Greška se ne meri obrnuto (od površi do skena), pa površ koja seže preko skena ne bi bila vidljiva. Napomena ispod tabele kaže i koliki deo površine je bio premali da se uklopi. U prikazu se tačke skena boje svojom **mapom odstupanja**: plavo na površi, zeleno na pola tolerancije, crveno na toleranciji ili više (isključite **Prikaži mapu odstupanja** da je sakrijete). Delovi koji se savijaju preko sebe (na primer zatvorena cev uklopljena slobodnim zakrpama) navode se kao neuklopljeni, nikad nasilno ne u jednu površ.

**Sašij površi u čvrsto telo** šije svaku prikazanu površ koja nije u čvrstom telu u jedno zatvoreno telo. Površi skena se sastaju samo u okviru sopstvene greške skena, pa proba najmanju razdaljinu spajanja koja zatvara (nikad više od **razdaljine šivanja** koju zadate) i odbija rečima kad se površi ne zatvaraju. Nikad ne zakrpljuje prazninu. Kvadar sa zaobljenim ivicama se šije kad su mu zaobljenja nađena kao sopstvene površi; razdaljina spajanja koja je zatvorila je u rezultatu. Čvrsto telo tada radi sa Unijom, Oduzimanjem, Zajedničkim delom i **Ugradi u deo**.

Šta ne radi: **obodno zaobljenje** (torus) se traži samo oko ose valjka ili konusa koji je već nađen, a **promenljivo zaobljenje** samo duž prilično prave ivice (njegovi preseci su pravougaono sečeni u jednom pravcu); drugde ona izlaze kao slobodne zakrpe kad su dovoljno glatka, a inače se izostavljaju; kugle, konusi i zaobljenja se nalaze slučajnim uzorkovanjem, pa se vrlo mali (nekoliko trouglova) mogu promašiti; mapa odstupanja prikazuje rastojanje od skena do površi, a ne obrnuto; vrlo veliki skenovi (preko 300.000 trouglova) ovde se odbijaju. Površi cilindra punog obrta seku se oko rupa, a šav se stavlja gde nema rupe. Proverite svaku površ prema skenu pre oslanjanja na nju.

## Još nije urađeno

Zaobljavanje ivica koje se sastaju u uglu zakrivljenih površi ili sa različitim poluprečnicima (stapanje temena), zaobljenje između površi koje se ne sastaju, unutrašnje zaobljenje koje se završava na kosoj ili zakrivljenoj površi, Bulove operacije i zaobljenja računata na površima bez trouglova (ovde motor čvrstih tela radi na trouglovima u okviru tolerancije, a svaka tačka se zatim vraća na tačne površi), ugrađeno telo koje prati površi kad se one promene, skraćivanje površi drugom površi van Bulove operacije, popunjavanje rupa sa više od četiri strane, projektovanje krivih na površi.
