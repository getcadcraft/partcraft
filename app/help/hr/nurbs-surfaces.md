---
title: Slobodne površine (NURBS)
summary: Glatke krivulje i površine uz dio — loft, provlačenje, mreže krivulja, zakrpe s četiri brida, prijelazi, obrezivanja — s kontinuitetom G0, G1 i G2 mjerenim na egzaktnim površinama, puna tijela s unijom, oduzimanjem i presjekom ugrađena u dio, prikazi zebre i zakrivljenosti, plohe prilagođene skenu s izmjerenom pogreškom te datoteke STEP ili IGES. Spremljeno u datoteci dijela.
keywords: nurbs, skeniranje, obrnuti inženjering, prilagodba, mreža u površinu, oblak točaka, stl, obrezivanje, obrezano, rupa, rez, puno tijelo, puna tijela, boolean, unija, oduzmi, presjek, razlika, zašij, zatvoreno, pečenje, slobodni oblik, površina, površine, b-splajn, bspline, krivulja, splajn, loft, provlačenje, šina, mreža, zakrpa, prijelaz, usklađivanje, kontinuitet, g0, g1, g2, tangenta, zakrivljenost, zebra, kontrolne točke, čvorovi, stupanj, step, iges, klasa a, trup, glačanje
from: 64ed5196
---

Radni prostor **Površine** izrađuje glatke krivulje i površine vrste koja se koristi za školjke proizvoda, karoserije automobila i trupove brodova: NURBS, ista matematika kojom koriste ostali modeleri površina. Sve se mjeri na egzaktnim površinama, nikad na trokutima koje vidite. Veličine su u milimetrima, kao i u ostatku PartCrafta.

Izaberite **Površine** u okviru **Radni prostor**. Alatna traka ima {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} i {{ui:Zebra}}; svaka naredba je na ploči desno. Naredba kaže što joj još treba: kliknite krivulje ili površine u prikazu (blizu brida ili kraja kad to traži) ili ih odaberite s popisa; upišite točke ili ih kliknite na plohama dijela (izvan dijela padaju na tlocrtnu ravninu), zatim pritisnite Enter.

Krivulje i površine spremaju se u datoteci dijela uz puno tijelo. Ne mijenjaju značajke dijela: ploča ima vlastite **Poništi** i **Ponovi**, jedan korak po naredbi.

## Krivulje

- **Krivulja kroz točke** prolazi kroz svaku točku koju kliknete. **Krivulja po kontrolnim točkama** umjesto toga prati mrežu točaka.
- **Umetni čvor**, **Podigni stupanj** i **Snizi stupanj** mijenjaju opis krivulje bez pomicanja (snižavanje odbija se kad bi se krivulja pomaknula više od tolerancije). **Ponovno izgradi krivulju** daje joj novi broj kontrolnih točaka i kaže koliko se pomaknula.
- **Uskladi krivulju** spaja kraj jedne krivulje s drugom uz G0 (dodir), G1 (isti smjer) ili G2 (i ista zakrivljenost). **Prijelazna krivulja** dodaje novu krivulju između dva kraja, G1 ili G2.

## Površine

- **Loft** kroz dvije ili više krivulja, **Linearna površina** između dviju, **Izvuci krivulju**, **Rotiraj krivulju**.
- **Provuci uz jednu šinu** nosi profil po putanji bez uvijanja; **Provuci uz dvije šine** drži krajeve profila na obje šine. Provlačenja su prilagođena: rezultat kaže koliko je ostalo blizu pravog provlačenja.
- **Površina iz mreže krivulja** prolazi kroz mrežu krivulja (svaka prelazi svaku od ostalih jednom). **Površina iz četiri brida** ispunjava četiri krivulje koje se spajaju u kutovima.
- **Uskladi površinu** spaja brid površine sa susjedom s G0, G1 ili G2; **Prijelazna površina** dodaje površinu između dva brida.
- **Odmakni površinu**, **Produži površinu** (površina se nastavlja kako je išla), **Ponovno izgradi površinu**.

## Provjera kvalitete

Tablica **Zajednički bridovi** popisuje svaki brid koji dvije površine dijele, s razmakom (mm), kutom među njima (°) i skokom zakrivljenosti (1/mm), te kaže je li to G0, G1 ili G2. Brid koji je lošiji nego što ste tražili pojavljuje se u **Problemima** s popravkom **Uskladi**. Pruge **Zebre** i boje zakrivljenosti dolaze iz egzaktne površine: pruge koje prolaze neprekinuto preko brida znače G1; pruge koje zadržavaju i širinu znače G2.

G0–G2 se mjere u 33 točke po bridu. **G3 i kvaliteta „klase A“ se ne mjere** i ne tvrdi se da su postignuti.

## Obrezivanje površine

Grupa **Obrezivanje** reže površinu bez promjene njezina oblika: površina zadržava sve kontrolne točke, a prikazuje se, broji i zapisuje samo dio unutar obrisa. **Obreži na pravokutnik** i **Obreži krugom** rade na udjelu (0 do 1) površine u svakom smjeru, pa ne traže odabir u prikazu; **Obreži krivuljom** uzima zatvorenu krivulju koja leži na površini (projicira se u površinu i odbija s porukom kad je otvorena ili je više od tolerancije udaljena). Označite **Izreži rupu** da uklonite unutrašnjost obrisa; ostavite neoznačeno da zadržite samo unutrašnjost. Površina može imati jedan zadržani obris i bilo koji broj rupa; obris koji siječe drugi odbija se. **Ukloni obrezivanje** prikazuje cijelu površinu opet. Poništi na ploči vraća obrezivanje kao svaki drugi korak.

STEP nosi obrezivanje kao granice plohe, a IGES kao obrezanu površinu (entitet 144); oboje ga čitaju natrag.

## Puna tijela i Booleove operacije

Grupa **Puna tijela** pretvara površine u zatvorena tijela i kombinira ih. Puno tijelo je ovdje skup površina panela koje zajedno zatvaraju volumen; njegove plohe ostaju egzaktne NURBS površine s obrezivanjima.

- **Kutija (puno tijelo)**, **Cilindar (puno tijelo)** i **Kugla (puno tijelo)** izrađuju tijelo iz upisanih veličina (u mm): kutiju od šest ravnih ploha, cilindar s okruglom stranom i dva ravna kraja obrezana na krug, kuglu od jedne rotirane površine.
- **Puno tijelo iz površina** grupira površine koje ste sami izradili. Odaberite ih, ili ništa da upotrijebite svaku prikazanu površinu koja još nije u tijelu. Spajaju se unutar tolerancije: ako se ne zatvore, ništa se ne mijenja i panel kaže koliko bridova ostaje otvoreno i koliko blizu se moraju spojiti.
- **Unija**, **Oduzmi** (drugo tijelo se oduzima od prvog) i **Presjek** (samo ono što oboje dijele) uzimaju dva puna tijela: kliknite plohu svakog u prikazu ili pritisnite **Odaberi** na popisu **Puna tijela**. Označite **Zadrži oba tijela** da ih ostavite uz rezultat.

Booleova operacija zadržava svaku plohu na njezinoj egzaktnoj površini i reže je novim obrisima obrezivanja duž presjeka. Redak rezultata daje izmjerene brojke: koliko su se morale pomaknuti točke motora tijela da sjednu na egzaktne površine (nikad više od tolerancije), koliko su točke presjeka blizu obje površine (obično nekoliko milijunitih dijela milimetra), volumen, i zatvaraju li se nove plohe opet kad se ponovno sašiju iz svojih egzaktnih površina. Volumeni se mjere na trokutima unutar tolerancije (0,05 mm osim ako postavite drugu), pa je volumen kugle ili cilindra malo manji od egzaktnog: manja tolerancija se više približava. Booleova operacija koja se ne može čisto izvesti (tijela nemaju ništa zajedničko, obris bi se sam sjekao) odbija se riječima i ništa ne mijenja. Jedna Booleova operacija je jedan korak **Poništi** na ploči.

U popisu **Puna tijela**, **Razgrupiraj** zadržava plohe kao obične površine; koš za otpad uklanja tijelo i njegove plohe.

## Zaobljenja i zadebljavanje

**Zaobljenje između ploha** zaobljuje brid gdje se dvije plohe jednog tijela spajaju: odaberite dvije plohe (u prikazu ili s **Odaberi** na popisu), upišite **polumjer** i, za polumjer koji se mijenja duž brida, **polumjer na kraju** (0 zadržava jedan polumjer). Kugla tog polumjera kotrlja se duž brida dodirujući obje plohe; zaobljenje je egzaktni kružni luk koji ostavlja u svakoj točki, spojen u jednu površinu, a dvije plohe se obrežu tamo gdje ih kugla dodiruje. Vanjski brid gubi materijal, unutarnji kut ga dobiva. Redak rezultata kaže što je izmjereno: koliko je površina zaobljenja udaljena od kugle koja se kotrlja između točaka iz kojih je izrađena (točke se dodaju dok ne bude unutar četvrtine tolerancije), najveći kut između zaobljenja i svake plohe duž linija dodira, i iste brojke kao kod Unije. Polumjer koji ne stane (kugla bi napustila plohu ili se ploha zakreće uže od polumjera) odbija se, imenujući plohu, i ništa se ne mijenja.

**Zaobljenje više bridova** zaobljuje mnoge bridove u jednom koraku: odaberite dvije plohe prvog brida, zatim dvije plohe sljedećeg, i tako dalje (jedna ploha može biti u nekoliko parova, na primjer gornja ploha kutije u četiri od njih); svi bridovi dobivaju polumjer koji upišete. Svako zaobljenje računa se na tijelu kakvo je bilo, zatim se redom reže, pa redoslijed nije važan. Gdje se dva zaobljena brida spajaju u kutu čiji drugi bridovi ostaju oštri, dva zaobljenja se sudaraju duž svoje krivulje presjeka (nabor). Gdje se tri zaobljena vanjska brida triju međusobno okomitih ravnih ploha spajaju s jednim polumjerom, kut je jedna **zakrpa kugle** tangentna na sva tri zaobljenja (isključite **Kutovi** da dobijete kut s naborom); brid mora biti barem dvostruko dulji od polumjera gdje su mu oba kraja takvi kutovi. Redak rezultata kaže koliko je bridova zaobljeno i kako su kutovi ispali. Unutarnji bridovi mogu se također zaobliti zajedno, ali rezultat koji se ponovno ne zatvara samo se prijavljuje (redak to kaže), pa ga provjerite.

**Zadebljaj u puno tijelo** daje površini debljinu: odaberite je, upišite **debljinu** i označite **Druga strana** da raste na drugu stranu. Odmaknuta ploha prilagođena je površini i mjeri se prema njoj (redak rezultata daje najveću razliku od debljine); stijenke prate svaki brid i svaki obris obrezivanja. Ako površina zakreće uže od debljine na toj strani, ili drugi dio nje leži bliže od debljine, odbija se, imenujući površinu i mjesto, i ništa se ne mijenja.

## Pečenje punog tijela u dio

**Pečenje** (na alatnoj traci Površine) ili **Peci u dio** na popisu **Puna tijela** pretvara tijelo u tijelo dijela, kao što se otvoreni STL pretvara u jedno: odaberite tijelo, je li **dodano** dijelu, **izrezano** iz njega ili **presječeno** s njim, te toleranciju (koliko trokuti smiju odstupati od egzaktnih površina). To je jedan korak Poništi dijela i pojavljuje se na popisu značajki kao uvoz nazvan po tijelu. Dio zadržava trokute, pa se otvara i ponovno gradi bez površina; egzaktno tijelo ostaje u Površinama, pa ga možete opet peći nakon promjene.

## Datoteke

Izvezite **STEP** (AP242) ili **IGES** s krivuljama i površinama točno kakve jesu (B-splajn krivulje i površine, ništa pretvoreno u trokute). Svaka površina je zasebna ploha s obrezivanjem; tijelo se zapisuje kao jedna zatvorena ljuska, a svaki brid dijele njegove dvije plohe, kako očekuju drugi CAD programi (redak stanja kaže koliko je tijela izašlo tako). U IGES-u isto puno tijelo je jedan mnogostrani B-rep (entitet 186 nad zatvorenom ljuskom 514, plohe 510, petlje 508, jedan popis bridova 504 i jedan popis vrhova 502); tijelo čije se plohe ne spajaju brid za brid zapisuje se kao zasebne plohe, a redak to kaže. **Uvoz…** čita takvo tijelo natrag kao puno tijelo, iz STEP-a i iz IGES-a.

## Glačanje linija trupa

**Glačaj** (na alatnoj traci Površine) mjeri svaku krivulju na njezinom egzaktnom obliku — infleksije (mjesta gdje prelazi iz savijanja u jednu stranu u savijanje u drugu), najveću zakrivljenost, skokove zakrivljenosti na čvorovima i njezinu hrapavost — i ponovno gradi one s infleksijom ili skokom, s najmanje kontrolnih točaka koje ostaju unutar tolerancije koju zadate i ne dodaju infleksiju. Nacrtajte presjeke, vodne linije i bokove kao krivulje, zaglatite ih, zatim pomoću naredbe **Loft** izradite trup kroz presjeke i provjerite s **Zebra**. Nezaglađene krivulje pojavljuju se i u **Problemima** s popravkom **Zaglati ovu krivulju**. Linija koja treba mijenjati smjer (S-presjek) zadržava tu jednu infleksiju. Istisnina trupa, središta i krakovi uspravljanja dolaze iz čvrstog dijela: vidi alat hidrostatike.

## Površine iz skeniranja (obrnuti inženjering)

Otvorite dio koji sadrži skenirani mrežu (otvoreni STL ili pečeno tijelo), odaberite **Površine** u okviru **Radni prostor**, a u grupi **Skeniranje** odaberite **Prilagodi površine skenu**; izrađena mreža dijela je sken. Alat traži **ravnine**, **cilindre**, **kugle** i **stošce** (egzaktne površine od kojih je obrađeni dio napravljen; svaki red pokazuje polumjer ili polukut koji je našao), nalazi **zaobljenja** (zaobljene bridove i kutove: mali cilindar ili kugla koja tangencijalno ulazi u dvije ili više drugih ploha, prikazan s polumjerom i plohama koje spaja), **rubna zaobljenja** (torus: zaobljeni brid gdje ravna ploha spaja cilindar ili stožac, prikazan s polumjerom i polumjerom prstena) i **promjenjiva zaobljenja** (zaobljeni brid čiji se polumjer mijenja duž njega, prikazan s polumjerom na svakom kraju), prilagođava **jednu slobodnu zakrpu** na glatkom, blago zakrivljenom dijelu, i reže svaku plohu na obris dijela skena iz kojeg je potekla, tako da rupe i kutovi ostaju. Opcije: **tolerancija** (koliko, u mm, točka skena smije biti udaljena od ravnine ili cilindra i još joj pripadati, te cilj za slobodnu zakrpu), **najmanji komad** (udio u površini) i **najviše ploha**. Isti sken i iste opcije uvijek daju iste plohe.

Rezultat je tablica, po jedan red za svaku plohu: njezina vrsta, koliko je trokuta iz kojih potječe i pogreška **izmjerena od skena do plohe** (srednja kvadratna vrijednost, najveća i udio točaka unutar tolerancije). Mjere se točke skena (vrhovi mreže) i sredina svakog trokuta. Pogreška se ne mjeri obrnuto (od plohe do skena), pa plohe koja seže dalje od skena to ne bi pokazalo. Bilješka ispod tablice kaže i koliko je površine bilo premalo da se prilagodi. U prikazu su točke skena obojene svojom **mapom odstupanja**: plavo na plohi, zeleno na pola tolerancije, crveno na toleranciji ili više (odznačite **Prikaži mapu odstupanja** da je sakrijete). Komadi koji se savijaju sami na sebe (zatvorena cijev prilagođena slobodnim zakrpama, na primjer) navode se kao neprilagođeni i nikad se ne prisiljavaju u jednu površinu.

**Zašij površine u puno tijelo** spaja svaku prikazanu površinu koja nije u punom tijelu u jedno zatvoreno tijelo. Plohe skena se spajaju samo unutar vlastite pogreške skena, pa pokušava najmanju udaljenost spoja koja zatvara (nikad više od **udaljenosti zašivanja** koju postavite) i odbija riječima kad se plohe ne zatvaraju. Nikad ne zakrpljuje prazninu. Kutija sa zaobljenim bridovima se zašije kad su joj zaobljenja nađena kao zasebne plohe; udaljenost spoja koja je zatvorila navedena je u rezultatu. Tijelo tada radi s Unijom, Oduzmi, Presjek i **Peci u dio**.

Što ne radi: **rubno zaobljenje** (torus) traži se samo oko osi cilindra ili stošca već nađenog, a **promjenjivo zaobljenje** samo duž prilično ravnog brida (njegovi presjeci su okomito rezani u jednom smjeru); drugdje ispadnu kao slobodne zakrpe kad su dovoljno glatke, a inače se izostave. Kugle, stošci i zaobljenja traže se slučajnim uzorkovanjem, pa se vrlo mala (nekoliko trokuta) može propustiti. Mapa odstupanja prikazuje udaljenost od skena do ploha, ne obrnuto. Vrlo veliki skenovi (preko 300.000 trokuta) se ovdje odbijaju. Plohe cilindra punog kruga reže se oko rupa, a šav je stavljen tamo gdje nema rupe. Provjerite svaku plohu u odnosu na sken prije nego se oslonite na nju.

## Još nije izrađeno

Zaobljavanje bridova koji se spajaju u kutu zakrivljenih ploha ili s različitim polumjerima (vrh blend), zaobljenje između ploha koje se ne spajaju, unutarnje zaobljenje koje završava na nagnutoj ili zakrivljenoj plohi, Booleove operacije i zaobljenja izračunata na površinama bez trokuta (ovdje motor tijela radi na trokutima unutar tolerancije, pa se svaka točka zatim vraća na egzaktne površine), pečeno tijelo koje prati površine kad se one promijene, obrezivanje površine drugom površinom izvan Booleove operacije, popunjavanje rupa s više od četiri strane, projiciranje krivulja na površine.
