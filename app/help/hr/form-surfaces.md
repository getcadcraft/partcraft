---
title: Slobodni oblici s alatom Forma i značajke površina
summary: Gurajte i povlačite glatku kontrolnu mrežu u radnom prostoru Forma, nabrazdite bridove, koristite simetriju, provjerite i dovršite u točno čvrsto tijelo ili površinu, zatim zakrpajte, loftajte, zašijte, zadebljajte, odmaknite, produžite i skratite površine u Dizajnu. Što je točno, a što aproksimirano.
keywords: forma, slobodni oblik, T-spline, podjela, Catmull-Clark, kavez, Quadball, pregib, simetrija, zebra, zakrivljenost, površina, zakrpa, popuni, loft površine, zašij, zadebljaj, odmakni površinu, produlji, skrati
from: 0d326ef4
---

:::note
**Još nije izrađeno u ovoj verziji.** Dovršavanje forme u dio i značajke površina zahtijevaju egzaktnu geometrijsku jezgru, a ova verzija aplikacije PartCraft je nema: svaki dio gradi s mrežnom jezgrom. [Što još nije izrađeno](topic:not-built-yet) govori što raditi umjesto toga. Ostatak ove stranice opisuje kako to rade s egzaktnom jezgrom.
:::

Radni prostor **Forma** izrađuje organske oblike. Uređujete **kavez**, grubu mrežu kutova, bridova i ploha. Oblik je glatka površina koju kavez kontrolira (njegova Catmull–Clarkova granična površina), pa pomicanje jednog kuta blago savija površinu oko njega. Kad izgleda ispravno, **Završna obrada** dodaje ga u povijest dijela kao značajku *Forma*, a egzaktna jezgra ga pretvara u prave B-spline površine. Zatim ga možete zaobliti, presjeći, spojiti s drugim značajkama i izvesti kao STEP.

Odaberite **Forma** na popisu **Radni prostor** lijevo na alatnoj traci.

## Započnite kavez

1. Postavite **Veličina** i **Podjele** na desnoj ploči. Podjele su koliko ploha ima svaka strana.
2. Kliknite {{ui:Kvadar}}, {{ui:Quadball}} ili {{ui:Ravnina}} na alatnoj traci. Ploča ima i **Cilindar**, **Torus** i **Plohe klikom**.

- **Quadball** je kavez u obliku kvadra prilagođen tako da njegove kutne točke leže na sferi. Između tih točaka površina je malo unutar sfere: oko 0.4 % manje volumena uz 2 podjele.
- **Ravnina** je otvorena, pa postaje tijelo površine (vidi „Značajke površina u Dizajnu” niže).
- **Plohe klikom**: kliknite 4 točke na gornjoj (podnoj) ravnini ili na kutovima kaveza da napravite jednu plohu. Plohe koje dijele kutove se spajaju. Pritisnite {{key:Enter}} nakon 3 točke za trokut ili {{key:Esc}} za zaustavljanje.

Vaš nedovršeni kavez sprema se s datotekom dijela, pa datoteku možete zatvoriti i nastaviti kasnije.

## Odaberite i pomaknite

- Kliknite kut, brid ili plohu kaveza. {{key:Shift}}+klik dodaje ili uklanja stavke. {{key:Esc}} poništava odabir.
- Gizmo se pojavljuje na sredini odabira. Povucite strelicu za pomicanje duž nje ili kvadrat za pomicanje u toj ravnini. Pritisnite {{key:W}} za pomicanje, {{key:E}} za zakretanje i {{key:R}} za skaliranje, ili koristite gumbe na ploči. {{ui:Gizmo}} na alatnoj traci prolazi kroz njih.
- **Meko opadanje** (mm) također povlači kutove unutar te udaljenosti, postupno nestajući na rubu te udaljenosti.
- Svako povlačenje je jedan korak poništavanja: {{key:Ctrl+Z}} i {{key:Ctrl+Y}} rade kao i obično.

## Promijenite kavez

Gumbi **Izmijeni** na ploči rade na odabiru:

| Gumb | Što radi |
|---|---|
| {{ui:Izvuci}} | Odabrane plohe pomiču se za **Udaljenost izvlačenja**, duž svojih normala, s novim bočnim plohama. Odabrani otvoreni bridovi stvaraju nove plohe prema van. |
| {{ui:Edge loop}} / Umetni petlju bridova | Dijeli prsten četverostranih ploha koji siječe odabrani brid, na pola puta. Više petlji daje tješnje krivulje. |
| Umetni točku | Dodaje kut u sredini odabranog brida. |
| Podijeli | Dijeli svaku odabranu plohu na četverostrane plohe oko njezine sredine. |
| Premosti | Spaja dvije odabrane plohe ili dva otvora (odaberite po jedan otvoreni brid na svakom) tubusom ploha. Oba zahtijevaju isti broj bridova. |
| Popuni rupu | Zatvara otvor kroz odabrani otvoreni brid jednom plohom. |
| Zavari | Spaja odabrane kutove u jedan, u njihovoj sredini. |
| Spljošti | Pomiče odabrane kutove na ravninu koja im najbolje odgovara. |
| Izbriši | Uklanja odabrane plohe, bridove (dvije plohe se spajaju) ili kutove. |

## Oštri bridovi, simetrija i prikaz

- {{ui:Pregib}} čini odabrane bridove oštrima. **Težina pregiba** 10 je potpuno oštro. Manja težina ostaje oštra za toliko koraka profinjavanja, a zatim omekšava, što daje uski zaobljen prijelaz umjesto tvrdog preklopa. **Ukloni pregib** ih vraća na glatke. **Oštri vrh** učvršćuje kut tako da površina prolazi kroz njega točkom.
- **Simetrija** zrcali kavez preko X, Y ili Z = 0. Zadržava pozitivnu stranu, zrcali je i spaja dvije polovice. Nakon toga, izmjena na jednoj strani događa se na obje. Kutovi na ravnini zrcaljenja ostaju na njoj.
- {{ui:Prikaz}} prebacuje između **Glatko** (površina koju će značajka imati) i **Kutija** (same plohe kaveza).
- **Analiza**: **Zebra pruge** odbijaju prugasto svjetlo iz trenutnog prikaza. Glatko se savijaju preko glatke površine i prekidaju na pregibu. **Srednja zakrivljenost** boji konveksna područja crveno, konkavna plavo, a ravna bijelo. Mjeri se na prikazanoj mreži kotangensovom formulom, pa je vodič, a ne mjerenje.

## Provjerite i dovršite

- **Provjeri točno** pretvara kavez u egzaktnoj jezgri, bez mijenjanja vašeg dijela. Izvješćuje koliko B-spline zakrpa kavez čini, koliko ih je točno i je li rezultat zatvoreno, valjano čvrsto tijelo te njegov volumen.
- {{ui:Završna obrada}} dodaje značajku *Forma* u povijest ili ažurira formu koju ste uređivali i vraća vas na Dizajn. Zatvoreni kavez postaje čvrsto tijelo. Njegova **Operacija** na ploči Dizajna može biti Novo tijelo, Spoji, Izreži ili Presjek. Otvoreni kavez postaje tijelo površine.
- Da kasnije promijenite formu, odaberite je u povijesti i kliknite **Uredi u Formi**. Izgrađeno tijelo je skriveno dok uređujete njegov kavez.
- **Odbaci** odbacuje kavez, bez diranja povijesti.

## Što je točno, a što aproksimirano

Svaka četverostrana ploha kaveza, profinjena kad je potrebno, postaje jednu bikubičnu B-spline zakrpu.

- Gdje je svaki kut plohe *pravilan* (četiri brida se sastaju unutar površine, ili tri na otvorenom bridu ili uz pregib), zakrpa je **točno** podjelna površina. Testovi to provjeravaju do 1e-9 mm.
- Oko **izvanredne točke** (tri, pet ili više bridova koji se sastaju, kut plohe s tri ili pet stranica, ili kraj pregiba) nema točne polinomske zakrpe. Tamo zakrpa preuzima točnu točku i tangentnu ravninu u tom kutu te krivulje bridova susjeda, pa se zakrpe i dalje spajaju bez praznine. Tangentna neprekidnost preko bridova koji se sastaju u toj točki je aproksimirana. Ploča Forme i ploča značajke daju najveći kut, obično manji od 2°. Viša **Razina** na ploči značajke čini te zakrpe manjima i bližima.
- Oštri pregibi su stvarni bridovi čvrstog tijela, pa ih možete zaobliti.
- Svaka zakrpa je zasebna ploha, pa forma ima mnogo ploha i između njih se crtaju linije.

## Značajke površina u Dizajnu

Naredbe za površine nalaze se u izborniku {{ui:Više}} u Dizajnu, među značajkama. Trebaju egzaktnu jezgru. Tijela površina crtaju se prozirno plavo. Nisu dio čvrstog tijela dok ih ne odebljate ili zašijete.

| Naredba | Što radi |
|---|---|
| Zakrpa | Popunjava zatvorenu petlju bridova. Prvo {{key:Shift}}+klik na bridove čvrstog tijela, ili odaberite tijelo površine da popunite njegov otvor. **Tangentno (G1)** čini da zakrpa glatko spaja tu površinu. |
| Loft površine | Površina kroz jedan lanac krivulja po skici (otvorena ili zatvorena), redom iz povijesti. |
| {{ui:Zašij}} | Šije tijela površina duž zajedničkih bridova. Ako se zatvore, rezultat je čvrsto tijelo, s Operacijom kao kod drugih značajki. |
| {{ui:Zadebljaj}} | Daje tijelu površine debljinu: duž normale, nasuprot njoj ili polovicu u svakom smjeru. Rezultat je čvrsto tijelo. |
| Odmakni površinu | Kopija tijela površine pomaknuta duž njezinih normala. Izvornik ostaje. |
| Produlji površinu | Povećava jednoplošnu površinu preko bridova koje odaberete. |
| {{ui:Skrati površinu}} | Presijeca tijelo površine gdje ga siječe drugo tijelo površine ili čvrsto tijelo. Kliknite **Odaberi točku na dijelu** da odaberete koji dio zadržati, ili zadržite sve ostalo. |

Zašij, Zadebljaj, Produlji i Skrati troše tijelo površine od kojeg počinju. Kasnije značajke koriste novo.

Ograničenja danas: forme s nekoliko odvojenih zatvorenih dijelova ne pretvaraju se u jedno čvrsto tijelo; pravilna područja se ne spajaju u veće površine; i pogledajte [Što još nije izrađeno](topic:not-built-yet).
