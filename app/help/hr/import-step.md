---
title: Otvaranje STEP datoteke i rad na njoj
summary: Uvezite STEP model dobavljača ili drugog CAD programa u PartCraft kao puno tijelo, kao novi dio ili dodan trenutnom dijelu, postavite koji je smjer gore te dodajte skice i značajke.
keywords: step, stp, uvoz, otvori step, ap203, ap214, ap242, model dobavljača, jednostavno tijelo, uvezeno tijelo, os gore, z gore, y gore, trokuti, poligonalno, sklop step
from: ca0eca5f
---

PartCraft otvara STEP datoteke (`.step` ili `.stp`, AP203, AP214 i AP242) kao **puna tijela** na kojima možete skicirati, rezati, bušiti i kombinirati ih sa svojim značajkama. Tijelo nema vlastitu povijest: ne možete mijenjati dimenzije kojima je izrađeno, samo dodati ili izrezati iz njega.

Ova verzija izrađuje svaki dio mrežnim kernelom, pa se STEP datoteka **čita kao trokuti**: ravne plohe ostaju ravne, a zakrivljene (cilindri, stošci, kugle, torusi, B-spline plohe) postaju mnogo malih ravnih. Njezin volumen odstupa tek djelić postotka od točnog. Čuvanje zakrivljenih ploha točno zahtijeva egzaktni kernel, koji nije u ovoj verziji.

## Otvaranje STEP datoteke

1. Odaberite {{ui:Otvori}} ili pritisnite {{key:Mod+O}} i odaberite datoteku `.step` ili `.stp`. Ili je ispustite na 3D prikaz.
2. PartCraft čita datoteku i prikazuje što je pronašao, npr.: „AP214 datoteka: 1 tijelo, 10 ploha, pročitano kao trokuti.“ Ispod su broj trokuta, sve što je izostavljeno ili spojeno te je li rezultat zatvoren.
3. Provjerite **Gore u datoteci**. STEP datoteka navodi svoju jedinicu (milimetri, inči, metri…); PartCraft je pretvara u milimetre, pa **Jedinice u datoteci** prikazuje Milimetri, „datoteka tako kaže“. **Veličina ovdje** pokazuje koliko će biti velika.
4. Odaberite {{ui:Otvori kao tijelo}} za prazan dio ili {{ui:Dodaj u ovaj dio}} / {{ui:Novi dio}} kad dio već ima značajke. Dodavanje pita što treba učiniti s **Upotrijebi za**: dodaj, izreži ili zadrži samo preklapanje.

Značajka **Imported1** pojavljuje se u povijesti, a statusna traka kaže, npr.: „plate.step je puno tijelo: 57995.937 mm³, 6 ravnih ploha za skiciranje.“

## STEP sklopa

Sklop dolazi kao **jedno tijelo** sa svakim dijelom na mjestu gdje ga datoteka postavlja („3 dijela postavljena u datoteci dolaze na mjestu gdje stoje“). Dio korišten dvaput dolazi dvaput. Nazivi dijelova i stablo sklopa se ne čuvaju.

## Postavite smjer prema gore

Većina CAD programa koristi Z prema gore; PartCraft koristi Y prema gore. Zadano je da PartCraft okreće datoteku tako da njezin Z pokazuje prema gore ovdje. Ako dio dođe ležeći na boku, odaberite **Imported1** i postavite **Gore u datoteci** na **Y prema gore**. **Jedinice u datoteci** i **Upotrijebi za** također se mogu mijenjati ovdje; svaka promjena je jedan korak poništavanja.

## Rad na njoj

- Kliknite ravnu plohu tijela i odaberite {{ui:Skiciraj na ovoj plohi}}. Ravne plohe STEP modela zadržavaju svoje mjesto kad se tijelo ponovno izgradi.
- Dodajte izreze, rupe, izbočine, uzorke i zrcaljenja kao kod bilo kojeg dijela.
- Provjerite veličinu u okviru **Dio**: volumen, površinu, veličinu.

Zaobljenja, skošenja i ljuske zahtijevaju egzaktni kernel, kao i bilo koji dio u ovoj verziji ([Mrežni kernel](topic:solid-kernels)).

## Gdje se čuva

Trokuti se čuvaju **unutar** datoteke `.partcraft.json`, pa je datoteka dijela samostalna: STEP datoteka vam više nije potrebna.

## Poruke

| Poruka | Što znači |
|---|---|
| '„part.stp“ nije STEP datoteka (ne počinje s ISO-10303-21).' | Datoteka nije običan STEP tekst. Zatražite od pošiljatelja STEP datoteku AP203, AP214 ili AP242 |
| "STEP datoteka nije mogla biti pročitana: njezin dio s podacima nedostaje ili je oštećen." | Datoteka je skraćena ili oštećena. Ponovno je kopirajte |
| "STEP datoteka ne sadrži nijedno puno tijelo ni plohu: nema što uvesti." | Datoteka sadrži samo crteže, točke ili podatke. Zatražite puno tijelo |
| "Ta STEP datoteka je prevelika (preko 60 MB) za uvoz ovdje." i ostala ograničenja čitača (unosi, plohe, trokuti) | Pojednostavnite model u izvoru ili šaljite dijelove jedan po jedan |
| "… oštećeni redci u datoteci su preskočeni." | Neki redci nisu mogli biti pročitani; ostali su uvezeni. Provjerite tijelo |
| "… plohe nisu mogle biti pretvorene u trokute i izostavljene su." | Te plohe ostavljaju rupe koje PartCraft pokušava popuniti; ako se tijelo ne zatvori, ne dodaje se |
| "… plohe vrste koja se ne čita (…) su preskočene." | Rijedak tip plohe. Zatražite model s jednostavnim ili B-spline plohama |
| "Ne zatvara se …" | Plohe ne tvore zatvoreno tijelo (model površina ili izostavljene plohe). PartCraft prikazuje otvore i ništa ne dodaje |

## Ograničenja

- Zakrivljene plohe crtaju se i mjere kao ravni poligoni, kao u svakom dijelu koji ova verzija izrađuje. PartCraft uz tijelo čuva vlastite ravne plohe datoteke, cilindre, stošce, kugle i torusi, pa {{ui:Izvoz}} › {{ui:STEP AP242 (egzaktno tijelo)}} ih zapisuje natrag kao prave plohe, rupe kao rupe, zajedno sa značajkama koje dodate. Plohe koje datoteka navodi kao splajnove, provučene plohe ili plohe rotacije u izvozu ostaju poligoni. Dio spremljen prije 0.9.1 nema sačuvane plohe: ponovno otvorite STEP datoteku da ih dobijete.
- {{ui:Izvoz}} › {{ui:DXF skice ili ravne plohe}} s odabranom ravnom plohom zapisuje okruglu rupu datoteke kao pravu kružnicu.
- Boje, nazivi tijela, struktura sklopa i PMI (tolerancije u datoteci) se ne čitaju.
- Osim STEP-a, PartCraft otvara STL, OBJ i 3MF mreže ([Otvaranje STL, OBJ ili 3MF datoteke](topic:open-meshes)) i `.3dm` datoteke ([Otvaranje .3dm modela](topic:open-3dm-files)) kao puna tijela. IGES i izvorne datoteke drugih programa nisu podržane.
- Dio sa STEP tijelom uvezenim u verziji koja je imala egzaktni kernel zadržava tekst STEP-a; ova verzija preskače tu značajku („Još nije izrađeno“). Ponovno otvorite STEP datoteku da je uvezete kao trokute.
