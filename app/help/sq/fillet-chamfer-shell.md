---
title: Rrumbullako, qoshoje dhe zbraz me Rrumbullakim, Qoshim dhe Zbraz
summary: Zgjidh brinjët dhe shto rrumbullakime me rreze konstante ose të ndryshueshme dhe qoshime me distancë të barabartë, dy distanca ose distancë dhe kënd; zbraz një pjesë me Zbraz duke zgjedhur faqet që hapen; ndrysho cilat brinjë ose faqe përdor një veçori, dhe rregullo dështimet e zakonshme.
keywords: rrumbullakim, rrumbullako, përzierje, qoshim, qoshim i prerë, zbraz, zbrazje, trashësia e murit, brinjë, faqe, zgjidh brinjët, shift kliko, faqe e hapur, kernel i saktë, kernel i rrjetit, nuk është ndërtuar
from: e41c1c12
---

:::note
**Në këtë version** PartCraft i ndërton rrumbullakimet dhe qoshimet me kernelin e rrjetit, vetëm mbi **brinjë të drejta midis dy faqeve të sheshta**: brinjët e kutisë dhe brinjët e drejta të ekstrudimeve dhe prerjeve, qoshe të jashtme ose të brendshme (një qoshe e brendshme merr material të shtuar). Brinjë të rrumbullakëta si buzët e vrimave, dhe një rreze që ndryshon përgjatë brinjës, nuk janë ndërtuar ende. Aty ku dy brinjë të rrumbullakëta takohen në një qoshe, rrumbullakimet presin me kënd (takohen në një bisht të mprehtë), nuk përzihen. {{ui:Zbraz}} funksionon gjithashtu, i ndërtuar nga kerneli i rrjetit: hap vetëm faqe të sheshta, zbrazjet me trashësi të ndryshme muresh nuk janë ndërtuar ende, dhe është i ngadaltë te pjesët me shumë sipërfaqe të rrumbullakëta. Shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet).
:::

{{ui:Rrumbullakim}} rrumbullakon brinjët, {{ui:Qoshim}} i qoshon dhe {{ui:Zbraz}} zbraz pjesën. Të tre punojnë mbi brinjët dhe faqet e trupit dhe ndërtohen nga kerneli i rrjetit. Rrumbullakimet e tyre janë me facetë si çdo sipërfaqe e rrumbullakët (**Kurbat** përcakton sa të imëta janë); sipërfaqet e rrumbullakëta janë cilindra që mund t'i zgjedhësh dhe t'i matësh (shih [Kerneli i rrjetit](topic:solid-kernels)).

## Rrumbullako ose qoshoje brinjët

### Zgjidh brinjët së pari

1. Kliko një brinjë të pjesës. E gjithë brinja nxjerr dritën, dhe paneli i djathtë thotë **Brinjë**: llojin e saj (Drejt, Rreth ose hark, Kurbë), gjatësinë dhe faqet mes të cilave shtrihet.
2. Për të shtuar brinjë të tjera, {{key:Shift}}+kliko ato. Çdo brinjë shënohet; {{key:Shift}}+kliko një brinjë të shënuar për ta hequr. Titulli i panelit i numëron ("4 brinjë") dhe shiriti i statusit thotë "4 brinjë të zgjedhura. {{ui:Rrumbullakim}} ose {{ui:Qoshim}} i rrumbullakon; Shift+kliko zgjedh më shumë, Esc pastron."
3. Zgjidh {{ui:Rrumbullakim}} ose {{ui:Qoshim}} në shiritin e veglave, ose të njëjtat butona në panelin e djathtë.

Veçoria shtohet me të gjitha brinjët e zgjedhura: një rrumbullakim 2 mm, ose një qoshim 1 mm. Shiriti i statusit thotë, për shembull, "Fillet1 u shtua (4 brinjë). Ndrysho madhësinë në të djathtë; {{ui:Përzgjidh brinjët}} ndryshon cilat."

### Ose shto fillimisht veçorinë

1. Pa asgjë të zgjedhur, zgjidh {{ui:Rrumbullakim}} ose {{ui:Qoshim}}.
2. PartCraft hyn në zgjedhje: titulli i panelit të djathtë thotë "Fillet1: zgjedhje", pjesa shfaqet siç ishte para rrumbullakimit (paneli e thotë këtë), dhe shiriti i veglave shfaq {{ui:U krye}}.
3. Kliko çdo brinjë për ta shtuar; kliko përsëri për ta hequr. Shiriti i statusit i numëron.
4. Zgjidh {{ui:U krye}} (ose {{ui:Përfundo përzgjedhjen}} në panel), ose shtyp {{key:Esc}} ose {{key:Enter}}.

### Cilësimet

| Cilësimi | Rrumbullakim | Qoshim |
|---|---|---|
| Madhësia | **Rrezja (mm)**, parazgjedhja 2 | **Distanca (mm)** prapa brinjës në të dy faqet, parazgjedhja 1 |
| **Brinjët** | Sa janë | Sa janë |

Lista më poshtë emërton çdo brinjë me dy faqet që bashkon, si "Edge 1: Extrude1 end face × Extrude1 side". **Hiq** heq një. {{ui:Përzgjidh brinjët}} kthehet te zgjedhja. Kliko dy herë mbi veçorinë në historik bën të njëjtën gjë.

Brinjët mbahen mend nga dy faqet që bashkojnë, kështu që qëndrojnë në brinjën e duhur kur ndryshon një përmasë më parë në historik.

### Rrumbullakime të ndryshueshme dhe llojet e qoshimit

- **Rreze e ndryshueshme** (rrumbullakim): nuk është ndërtuar ende në këtë version ("Një rrumbullakim, rrezja e të cilit ndryshon përgjatë brinjës: nuk është ndërtuar ende (kërkon kernel të saktë). Jepi një rreze."). Me kernel të saktë: vendose hakun dhe cakto **Rreza e fundit (mm)**. Rrezja ndryshon në mënyrë lineare nga **Rrezja** në njërin fund të çdo brinjë deri te **Rrezja e fundit** në tjetrin; **Ndërro fundet** e kthen.
- **Lloji** (qoshim): **Distancë e barabartë**, **Dy distanca** (një **Distanca e dytë** në faqen tjetër), ose **Distancë dhe kënd** (distanca në njërën faqe, prerja në **Këndi (°)** me atë faqe). **Ktheji anët** e vendos distancën e parë në faqen tjetër.

## Zbraz një pjesë

1. Kliko faqen e sheshtë që do të lihet e hapur, për shembull sipërin e një kutie. Ose {{key:Shift}}+kliko disa faqe.
2. Zgjidh {{ui:Zbraz}} në shiritin e veglave, ose {{ui:Zbraz, duke hapur këtë faqe}} në panelin e faqes.

Pjesa bëhet një mur 2 mm me faqet e zgjedhura të hapura. Cilësimet:

| Cilësimi | Çfarë bën | Parazgjedhja |
|---|---|---|
| **Muri (mm)** | Trashësia e murit | 2 |
| **Muret rriten jashtë (faqet mbeten brenda)** | Me hak: muret shtohen jashtë, kështu që brendësia ruan madhësinë e pjesës | Off: muret shkojnë brenda dhe jashtësia ruan madhësinë e vet |
| **Faqet e hapura** | Sa faqe hiqen | |

Brenda, muret janë saktësisht trashësia e murit: qoshet e jashtme mbeten të mprehta, qoshet e brendshme dalin të rrumbullakosura (rrezja = muri), dhe një vrimë përmes pjesës merr një tub muri rreth vetes. Jashtë, muret shtohen jashtë sipërfaqes origjinale, e cila bëhet zbrazëtira, dhe brinjët e jashtme dalin të rrumbullakosura. Faqet e brendshme emërtohen sipas faqeve që zhvendosin, kështu që mund t'i zgjedhësh.

Vetëm faqet e sheshta mund të hapen: zgjedhja e një të lakuari thotë "Zbraz: në këtë version hap vetëm faqe të sheshta (e ndërton kerneli i rrjetit)." Një zbrazje është e ngadaltë te pjesët me shumë sipërfaqe të rrumbullakëta (disa sekonda për çdo mijë trekëndësha): përdor një cilësim më të trashë **Kurbat** ndërsa projekton.

{{ui:Përzgjidh faqet}} ndryshon cilat faqe janë të hapura, në të njëjtën mënyrë si zgjedhja e brinjëve. Lista emërton çdo faqe, për shembull "Face 1: Extrude1 end face". Një zbrazje pa asnjë faqe të hapur nuk lejohet: "Zgjidh faqet që do të hiqen (të hapura), pastaj zbraz."

## Renditja ka rëndësi

Veçoritë ndërtohen nga lart poshtë. Një rrumbullakim para një zbrazjeje zbrazet bashkë me pjesën, kështu që brendësia merr edhe qoshe të rrumbullakosura. Një rrumbullakim pas një zbrazjeje rrumbullakos vetëm brinjët që zgjedh. Zhvendos veçoritë me {{ui:Zhvendos lart}} dhe {{ui:Zhvendos poshtë}} (shih [Ndrysho një pjesë përmes historikut të saj](topic:edit-history)).

Modelet dhe pasqyrat nuk mund të kopjojnë një rrumbullakim, qoshim ose zbrazje: "Fillet1 ndryshon brinjët ose muret e trupit; nuk mund të kopjohet. Kopjo veçoritë që bëjnë trupa (ekstrudime, rrotullime, vrima, importe)." Modelo vrimat ose prerjet fillimisht, pastaj rrumbullako të gjitha brinjët e kopjeve me një rrumbullakim.

## Kur dështon

| Mesazhi | Çfarë të bësh |
|---|---|
| "Një rrumbullakim 5 mm nuk përshtatet këtu (është shumë i madh për një faqe pranë njërës nga brinjët, ose brinjët takohen në një qoshe që kerneli nuk mund ta përzierë)." | Përdor një rreze më të vogël, ose rrumbullako më pak brinjë në të njëjtën kohë (disa veçori rrumbullakimi, më i vogli i fundit) |
| "Një brinjë që rrumbullakon nuk ekziston më: brinja ndërmjet Extrude1 dhe Cut2." | Një ndryshim më i hershëm e hoqi atë brinjë. Zgjidh {{ui:Përzgjidh brinjët}}, hiq brinjën e kuqe dhe zgjidh të riun |
| "Zbrazja nuk mund të bëhej me këtë trashësi (…)." | Muri është më i trashë se një pjesë e ngushtë e modelit, ose se rreza e një rrumbullakimi. Bëje murin më të hollë, ose rrumbullakimet më të mëdha se muri |
| "Ajo faqe nuk ka emër që historiku mund ta ndjekë; zgjidh një tjetër." | Zgjidh një faqe të krijuar nga një veçori (shumica e faqeve janë) |
| "Fillet: në këtë version vetëm brinjë të drejta midis dy faqeve të sheshta (kerneli i rrjetit i ndërton ato). Rrumbullako ose qoshoje brinjët e lakuara në skicë." (edhe Qoshim) | Një brinjë e zgjedhur është e rrumbullakët, si buza e një vrime, ose ndodhet mbi një faqe të lakuar. Hiqe me {{ui:Përzgjidh brinjët}}, dhe rrumbullako ose qoshoje atë qoshe në skicë në vend të kësaj |
| "Një rrumbullakim, rrezja e të cilit ndryshon përgjatë brinjës: nuk është ndërtuar ende (kërkon kernel të saktë). Jepi një rreze." | Hiq zgjedhjen te **Rreze e ndryshueshme** |
| "Rrumbullakim nga kerneli i rrjetit: ku takohen brinjët e rrumbullakëta, ato presin me kënd, nuk përzihen." (⚠ në historik) | Një paralajmërim, jo një gabim: pjesa është ndërtuar. Brinjët e zgjedhura takohen në një qoshe, dhe rrumbullakimet takohen aty në një bisht të mprehtë. Rrumbullako më pak brinjë, ose pranoje bishtin |
| "Zbraz: në këtë version hap vetëm faqe të sheshta (e ndërton kerneli i rrjetit)." | Një faqe e hapur është e lakuar. Zgjidh {{ui:Përzgjidh faqet}} dhe hiqe; hap vetëm faqe të sheshta |

## Kufijtë

Në këtë version rrumbullakimet dhe qoshimet funksionojnë vetëm mbi brinjë të drejta midis dy faqeve të sheshta, me një rreze, dhe rrumbullakimet që takohen në një qoshe presin me kënd. Zbrazjet hapin vetëm faqe të sheshta. Me kernel të saktë, një rrumbullakim i ndryshueshëm ndryshon në mënyrë lineare përgjatë çdo brinjë (një ligj për veçori; pa rreze të caktuar në pika përgjatë saj). Rrumbullakimet e faqeve, rrumbullakimet e plota dhe zbrazjet me trashësi të ndryshme muresh nuk janë ndërtuar ende.
