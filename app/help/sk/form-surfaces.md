---
title: Tvarované telesá pomocou Form a povrchové prvky
summary: Ťahajte a tlačte hladkú riadiacu klietku v pracovnom priestore Form, zaostrite hrany, použite symetriu, skontrolujte a dokončite ju na presné teleso alebo plochu; potom plochy zakryte, vytiahnite, zošite, zhrubnite, odsaďte, predĺžte a orežte v Návrhu. Čo je presné a čo je aproximované.
keywords: form, voľný tvar, T-spline, subdivízia, Catmull–Clark, klietka, quadball, zlom, symetria, zebra, zakrivenie, plocha, záplata, výplň, plocha loftu, zošiť, zhrubnúť, odsadená plocha, predĺžiť, orezať
from: 0d326ef4
---

:::note
**Ešte nie je hotové v tejto verzii.** Dokončenie tvaru do súčiastky a povrchové prvky vyžadujú presné geometrické jadro, ktoré táto verzia PartCraft nemá: každú súčiastku zostavuje s jadrom siete. [Čo ešte nie je hotové](topic:not-built-yet) popisuje, čo robiť namiesto toho. Zvyšok tejto stránky popisuje ich fungovanie s presným jadrom.
:::

Pracovný priestor **Form** vytvára organické tvary. Upravujete **klietku**, hrubú sieť rohov, hrán a plôch. Tvarom je hladká plocha, ktorú klietka riadi (jej limitná plocha Catmull–Clark), takže posunutie jedného rohu jemne ohne plochu okolo neho. Keď to vyzerá správne, **Povrchová úprava** pridá tvar do histórie súčiastky ako prvok *Form* a presné jadro ho premení na skutočné B-spline plochy. Potom ho môžete zaobliť, rezať, spojiť s inými prvkami a exportovať ako STEP.

Vyberte **Form** v zozname **Pracovný priestor** vľavo na paneli nástrojov.

## Začnite klietku

1. Na pravom paneli nastavte **Veľkosť** a **Delenia**. Delenia určujú, koľko plôch má každá strana.
2. Kliknite na {{ui:Kváder}}, {{ui:Quadball}} alebo {{ui:Rovina}} na paneli nástrojov. Panel má navyše **Valec**, **Torus** a **Plochy kliknutím**.

- **Quadball** je kváderová klietka upravená tak, aby jej rohové body ležali na guli. Medzi týmito bodmi leží plocha mierne vnútri gule: približne o 0.4 % menší objem pri 2 deleniach.
- **Rovina** je otvorená, takže sa stane plošným telesom (pozri „Povrchové prvky v Návrhu“ nižšie).
- **Plochy kliknutím**: kliknite na 4 body na hornej (zemnej) rovine alebo na rohy klietky a vytvoríte jednu plochu. Plochy so spoločnými rohmi sa spoja. Po 3 bodoch stlačte {{key:Enter}} pre trojuholník, alebo {{key:Esc}} na ukončenie.

Nedokončená klietka sa uloží so súborom súčiastky, takže môžete súbor zavrieť a pokračovať neskôr.

## Výber a presun

- Kliknite na roh, hranu alebo plochu klietky. {{key:Shift}}+klik pridá alebo odoberie položky. {{key:Esc}} zruší výber.
- Uprostred výberu sa zobrazí gizmo. Ťahaním šípky sa posúvate pozdĺž nej, alebo štvorčeka v tejto rovine. Stlačte {{key:W}} na presun, {{key:E}} na otočenie a {{key:R}} na mierku, alebo použite tlačidlá na paneli. {{ui:Gizmo}} na paneli nástrojov prepína medzi nimi.
- **Mäkký pokles** (mm) ťahá aj rohy v tejto vzdialenosti a plynule slabne na nulu na okraji tejto vzdialenosti.
- Každé ťahanie je jeden krok späť: {{key:Ctrl+Z}} a {{key:Ctrl+Y}} fungujú ako obvykle.

## Zmena klietky

Tlačidlá **Upraviť** na paneli pracujú s výberom:

| Tlačidlo | Čo robí |
|---|---|
| {{ui:Vytiahnuť}} | Vybrané plochy sa posunú von o **Vzdialenosť vytiahnutia** pozdĺž svojich normál, s novými bočnými plochami. Vybrané otvorené hrany vytvoria nové plochy smerom von. |
| {{ui:Slučka hrán}} / Vložiť slučku hrán | Rozdelí prstenec štvoruholníkových plôch, ktorý prechádza vybranou hranou, v polovici jej dĺžky. Viac slučiek dáva užšie krivky. |
| Vložiť bod | Pridá roh v strede vybranej hrany. |
| Rozdeliť | Rozdelí každú vybranú plochu na štvoruholníkové plochy okolo jej stredu. |
| Most | Spojí dve vybrané plochy alebo dva otvory (vyberte po jednej otvorenej hrane na každom) trubicou plôch. Obe musia mať rovnaký počet hrán. |
| Vyplniť dieru | Uzavrie otvor cez vybranú otvorenú hranu jednou plochou. |
| Zlúčiť | Zlúči vybrané rohy do jedného v ich strede. |
| Vyrovnať | Presunie vybrané rohy na rovinu, ktorá im najlepšie vyhovuje. |
| Zmazať | Odstráni vybrané plochy, hrany (dve plochy sa spoja) alebo rohy. |

## Ostré hrany, symetria a zobrazenie

- {{ui:Zlom}} urobí vybrané hrany ostré. **Váha zlomu** 10 je úplne ostrá. Menšia váha zostane ostrá pre toľko krokov spresňovania a potom zmäkne, čo dá tesné zaoblenie namiesto tvrdého zlomu. **Odstrániť zlom** ich znova vyhladí. **Ostrý vrchol** pripne roh, aby ním plocha prechádzala bodom.
- **Symetria** zrkadlí klietku cez X, Y alebo Z = 0. Zachová kladnú stranu, zrkadlí ju a spojí obe polovice. Potom sa úprava na ktorejkoľvek strane vykoná na oboch. Rohy na zrkadlovej rovine na nej zostanú.
- {{ui:Zobrazenie}} prepína medzi **Hladké** (plocha, ktorou prvok bude) a **Kváder** (samotné plochy klietky).
- **Analýza**: **Zebrové pruhy** odrážajú pruhované svetlo z aktuálneho pohľadu. Na hladkej ploche sa plynulo ohýbajú a na zlome sa prerušia. **Stredná krivosť** zafarbí konvexné oblasti červeno, konkávne modro a rovné biele. Meria sa na zobrazenej sieti kotangensovým vzorcom, takže je to vodítko, nie meranie.

## Kontrola a dokončenie

- **Presne skontrolovať** prevedie klietku v presnom jadre bez zmeny vašej súčiastky. Ohlási, koľko B-spline záplat klietka vytvorí, koľko z nich je presných, a či je výsledkom uzavreté, platné teleso a jeho objem.
- {{ui:Povrchová úprava}} pridá prvok *Form* do histórie alebo aktualizuje tvar, ktorý upravujete, a vráti vás do Návrhu. Uzavretá klietka sa stane telesom. Jej **Operácia** na paneli Návrhu môže byť Nové teleso, Spojiť, Rezať alebo Prienik. Otvorená klietka sa stane plošným telesom.
- Ak chcete tvar neskôr zmeniť, vyberte ho v histórii a kliknite na **Upraviť v Form**. Zostavené teleso je počas úpravy klietky skryté.
- **Zahodiť** zahodí klietku bez zásahu do histórie.

## Čo je presné a čo je aproximované

Každá štvoruholníková plocha klietky sa v prípade potreby spresní a stane sa jednou bikubickou B-spline záplatou.

- Tam, kde je každý roh plochy *pravidelný* (v rámci plochy sa stretávajú štyri hrany, alebo tri na otvorenej hrane či pozdĺž zlomu), je záplata **presne** subdivíznou plochou. Testy to overujú na 1e-9 mm.
- Okolo **mimoriadneho bodu** (tri, päť alebo viac hrán, roh trojuholníkovej alebo päťuholníkovej plochy, alebo koniec zlomu) neexistuje presná polynomická záplata. Tam záplata prevezme presný bod a dotykovú rovinu v tomto rohu a hrany susedov, takže záplaty sa stále stretávajú bez medzery. Dotyčnicová spojitosť cez hrany, ktoré sa v bode stretávajú, je približná. Panel Form a panel prvku uvádzajú najväčší uhol, typicky pod 2°. Vyššia **Úroveň** na paneli prvku robí tieto záplaty menšie a tesnejšie.
- Ostré zlomy sú skutočné hrany telesa, takže ich môžete zaobliť.
- Každá záplata je vlastná plocha, takže tvar má veľa plôch a medzi nimi sa kreslia čiary.

## Povrchové prvky v Návrhu

Príkazy pre plochy sú v ponuke {{ui:Viac}} v Návrhu, pod prvkami. Potrebujú presné jadro. Plošné telesá sa kreslia priehľadne modrou farbou. Nie sú súčasťou telesa, kým ich nezhrubnete alebo nezošijete.

| Príkaz | Čo robí |
|---|---|
| Záplata | Vyplní uzavretú slučku hrán. Najprv {{key:Shift}}+klikom označte hrany telesa, alebo vyberte plošné teleso a vyplňte jeho otvor. **Dotyčnica (G1)** zabezpečí, že záplata na tú plochu plynulo nadväzuje. |
| Plocha loftu | Plocha prechádzajúca jedným reťazcom kriviek na každý náčrt (otvorený alebo uzavretý), v poradí histórie. |
| Zošiť | Zošije plošné telesá pozdĺž ich spoločných hrán. Ak sa uzavrú, výsledkom je teleso s Operáciou ako pri iných prvkoch. |
| Zhrubnúť | Dá plošnému telesu hrúbku: pozdĺž normály, proti nej, alebo polovicu na každú stranu. Výsledkom je teleso. |
| Odsadená plocha | Kópia plošného telesa posunutá pozdĺž svojich normál. Pôvodné zostane. |
| Predĺžiť plochu | Predĺži jednoplochovú plochu za hrany, ktoré zvolíte. |
| Orezať plochu | Orezáva plošné teleso tam, kde ho pretína iné plošné teleso alebo teleso. Kliknite na **Vyberte bod na časti**, aby ste zvolili, ktorú časť zachovať, alebo zachovajte všetko ostatné. |

Zošiť, Zhrubnúť, Predĺžiť a Orezať spotrebujú plošné teleso, z ktorého začínajú. Neskoršie prvky používajú nové.

Súčasné obmedzenia: tvary s viacerými oddelenými uzavretými časťami sa nepremenia na jedno teleso; pravidelné oblasti sa nezlučujú do väčších plôch; a pozri [Čo ešte nie je hotové](topic:not-built-yet).
