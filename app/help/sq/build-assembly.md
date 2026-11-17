---
title: Ndërto një montim me lidhje
summary: Fillo një montim nga një pjesë, fut kopje dhe skedarë të tjerë pjesësh, lidh me lidhje të ngurta, rrotulluese, rrëshqitëse, cilindrike, të sheshta, sferike dhe kunj-në-brazdë mbi sipërfaqe të sheshta, qendëro lidhjet mbi boshte, redakto një pjesë në vend dhe ruaj montimin.
keywords: montim, lidhje, mate, lidhje (mates), lidhje e mbyllur, mekanizëm, katërlidhje, ngurtë, rrotulluese, rrëshqitëse, cilindrike, e sheshtë, sferike, lidhje sferike, kunj në brazdë, fut komponent, e fiksuar, koncentrike, bashkëvendosur, redakto pjesën, në kontekst, partcraft-asm
from: a53bbfef
---

Një montim vendos pjesët së bashku. Në PartCraft, **lidhjet** i vendosin pjesët: çdo lidhje qëndron mbi një sipërfaqe të sheshtë të secilës nga dy pjesët dhe i vendos ato faqe më faqe. Një lidhje rrotulluese e lejon një pjesë të rrotullohet, një rrëshqitëse e lejon të rrëshqasë, një lidhje e ngurtë e mban.

## Fillo një montim

1. Ndërto një pjesë me një solid (një pjesë bosh nuk mund të hyjë në një montim: "Ndërto së pari një solid, pastaj fute në një montim.").
2. Zgjidh {{ui:Montimi}} në shiritin e veglave.

Shiriti i statusit thotë "Montimi filloi me Part1 si pjesë të fiksuar. Fut më shumë pjesë ({{ui:Shto kopje}}, {{ui:Fut}}, ose Ndrysho › {{ui:Dyfisho}}), pastaj lidhi me {{ui:Lidhja}}." Paneli i majtë tani liston **Pjesët** dhe **Lidhjet**, dhe shiriti i veglave shfaq veglat e montimit. Veglat e skicës dhe të veçorive fshihen.

Pjesa e parë është **e fiksuar**: ajo nuk lëviz kurrë, dhe çdo gjë tjetër vendoset në lidhje me të.

## Fut pjesë

- {{ui:Shto kopje}} fut një kopje tjetër të pjesës së zgjedhur (ose të së fundit). Kopjet ndajnë një pjesë të vetme: redakto njërën dhe çdo kopje ndryshon.
- {{ui:Dyfisho}} ({{key:Mod+D}}) te grupi Ndrysho bën të njëjtën gjë për pjesën e zgjedhur. {{key:Mod+C}} dhe {{key:Mod+V}} kopjojnë një pjesë dhe e ngjisin pranë të tjerave, në këtë montim ose në një tjetër; {{key:Mod+Shift+V}} e ngjit në të njëjtin vend. Shih [Kopjo, ngjit dhe dyfisho](topic:copy-paste).
- {{ui:Fut}} fut një pjesë nga një skedar `.partcraft.json` në kompjuterin tënd. Pjesa kopjohet në montim.

Pjesët e reja shfaqen 20 mm djathtas të gjithçkaje që ekziston tashmë, dhe qëndrojnë aty derisa një lidhje t'i vendosë. Një pjesë pa lidhje mund të zhvendoset edhe me dorë: vlera të shkruara ose shigjeta që tërheq (shih [Lista e pjesëve, pamjet e shpërthyera dhe pjesët në lëvizje](topic:assembly-bom-explode)).

## Lidh dy pjesë

1. Zgjidh {{ui:Lidhja}} ose shtyp {{key:J}}. Paneli i djathtë thotë **Lidhje e re**.
2. Kliko një sipërfaqe të sheshtë të pjesës së parë. Ajo nxihet.
3. Kliko një sipërfaqe të sheshtë të pjesës së dytë.

Pjesa e dytë kërcen në mënyrë që sipërfaqja e saj të shtrihet mbi atë të parës, duke e shikuar. Lidhja shfaqet nën **Lidhjet**, për shembull "Revolute1", dhe paneli i djathtë shfaq cilësimet e saj.

- Nëse të dy sipërfaqet janë bërë nga rrotullime, lidhja fillon si **rrotulluese**; ndryshe si **e ngurtë**. Ndryshoje më pas.
- Sipërfaqet e lakuara nuk mund të zgjidhen: "Kjo sipërfaqe është e lakuar. Zgjidh një sipërfaqe të sheshtë (për t'u rrotulluar rreth një vrime ose boshtit të një rrotullimi, zgjidhe më pas te lidhja)."
- {{key:Esc}} anulon një lidhje që ke filluar (ose kliko një pjesë në listën në të majtë).

### Cilësimet e lidhjes

| Cilësimi | Çfarë bën |
|---|---|
| **Lloji** | Një nga lidhjet në tabelën më poshtë |
| **Kënd (°)** | Rrotullon pjesën e dytë rreth boshtit të lidhjes (drejt me sipërfaqet) |
| **Zhvendosja (mm)** | Zhvendos pjesën e dytë përgjatë boshtit, larg sipërfaqes (vlerat negative e shtyjnë brenda) |
| **Përgjatë X**, **Përgjatë Y**, **Prirje rreth X**, **Prirje rreth Y**, **Përgjatë brazdës**, **Drejtimi i brazdës** | Vlerat e tjera, të shfaqura për lidhjet që i përdorin |
| **Qendra në** (për çdo anë) | Ku kryqëzohet boshti i lidhjes me sipërfaqen: "Origjina e vetë sipërfaqes", boshti i një rrotullimi ("Axis of Revolve1") ose boshti i një vrime ("Hole1, hole 2") |

Çdo vlerë që një lidhje lejon të lëvizë ka një rrëshqitës tërheqjeje nën kutinë e vet; të tjerat vendosen një herë.

| Lidhja | Çfarë lëviz | Vendoset një herë |
|---|---|---|
| **E ngurtë** | asgjë | Kënd, Zhvendosja |
| **Rrotulluese** | Kënd (një menteshë) | Zhvendosja |
| **Rrëshqitëse** | Zhvendosja (një sirtar) | Kënd |
| **Cilindrike** | Kënd dhe Zhvendosja (një bosht në një bosht të thjeshtë) | |
| **E sheshtë** | Përgjatë X, Përgjatë Y mbi sipërfaqe, dhe Kënd (një pjesë që rrëshqet mbi një tavolinë) | |
| **Sferike** | Kënd (rrotullim) dhe Prirje rreth X dhe Y, rreth qendrës së lidhjes (një lidhje sferike) | |
| **Kunj në brazdë** | Përgjatë brazdës dhe Kënd (një kunj në një brazdë të drejtë) | Drejtimi i brazdës: këndi i brazdës nga X i sipërfaqes |

X dhe Y e një sipërfaqeje janë ato të sipërfaqes së pjesës së parë; qendra e lidhjes vendoset nga **Qendra në**.

"Origjina e vetë sipërfaqes" është origjina e pjesës e projektuar mbi sipërfaqe, që shpesh nuk është vendi ku dëshiron që pjesët të përputhen. Për pjesë të rrumbullakëta dhe kunja, vendos **Qendra në** në boshtin e rrotullimit ose të vrimës në të dy anët: boshtet atëherë përputhen, si një lidhje koncentrike.

### Shembull: dy flanxha të bulonuara faqe më faqe

1. Hap pjesën e flanxhës (një rrotullim me një model rrethor vrimash) dhe zgjidh {{ui:Montimi}}.
2. Zgjidh {{ui:Shto kopje}}.
3. Shtyp {{key:J}}, kliko sipërfaqen e sheshtë të diskut të flanxhës së parë (sipërfaqja nga ku fillojnë vrimat e bulonave), pastaj të njëjtën sipërfaqe të flanxhës së dytë. Sipërfaqet u bënë nga rrotullimi, kështu që lidhja është rrotulluese.
4. Vendos **Qendra në** në "Axis of Revolve1" për të dy anët. Flanxhat tani ndajnë të njëjtin bosht.
5. Shkruaj `22.5` te **Kënd (°)** për të përputhur vrimat e bulonave, ose tërhiq rrëshqitësin.

## Unaza të mbyllura: mekanizma

Pjesët e lidhura në një unazë (një katërlidhje, një manivelë dhe rrëshqitës, një kornizë e mbështetur në të dy anët) formojnë një **unazë**. PartCraft zgjidh çdo unazë që të mbyllet: lidhjet në të marrin vlerat që e bashkojnë unazën, duke lëvizur sa më pak nga vendet ku ishin.

- **Vendos ose tërhiq** një vlerë të një lidhjeje në një unazë dhe pjesa tjetër e unazës ndjek. Për një katërlidhje, tërhiq **Kënd** të manivelës dhe lidhësi dhe balancieri lëvizin me të. Vlera që vendos mbahet; të tjerat llogariten prej saj.
- Në listë, një lidhje në një unazë që ende mund të lëvizë është **blu**: mund të vendoset edhe një vlerë tjetër. Një unazë që nuk mund të lëvizë (një kornizë e mbështetur) mbetet e zezë. Një unazë që nuk mund të mbyllet është **e kuqe**.
- Kutia **Pjesa** shfaq **Unazat**: sa janë të mbyllura dhe sa vlera mund të lëvizin akoma, për shembull "1 mbyllur; 1 vlerë mund të lëvizë akoma".
- {{ui:Kontrollo lëvizjen për përplasje}} skanon një lidhje në një unazë me unazën që e ndjek, hap pas hapi (shih [Kontrollo një montim për përplasje dhe lëvizje](topic:check-assembly)).

Një mekanizëm i sheshtë nga shirita të sheshtë duhet të përputhet në thellësi: dy pjesë të lidhura faqe më faqe në të dy anët e një unaze kanë nevojë për të njëjtin lartësi grumbullimi nga të dyja anët. Përdor **Zhvendosjen** e një lidhjeje për ta ngritur një pjesë kur grumbullimi nuk mbledh saktë, përndryshe unaza nuk mund të mbyllet.

## Punë me pjesët

Kliko një pjesë në pamje ose në listë për ta zgjedhur. Paneli i djathtë shfaq emrin e pjesës, sa kopje ka, vëllimin e saj, lidhjet e saj, dhe nëse është e fiksuar, e vendosur nga lidhjet, ose "Nuk është e lidhur: mbetet aty ku u vendos". Butonat:

- {{ui:Redakto këtë pjesë}} (ose {{ui:Redakto pjesën}} në shiritin e veglave, ose kliko dy herë pjesën në listë): hap pjesën për redaktim;
- {{ui:Fut një kopje}};
- {{ui:Bëje pjesën e fiksuar}};
- {{ui:Hiq}}: heq edhe lidhjet e saj, pasi pyet.

Një montim mban të paktën një pjesë: "Një montim mban të paktën një pjesë. Mbylle atë."

### Redakto një pjesë në vend

1. Zgjidh një pjesë dhe zgjidh {{ui:Redakto pjesën}}. Pjesa hapet me historinë e saj; titulli thotë "Bracket (in Bracket assembly)".
2. Ndrysho atë si çdo pjesë tjetër.
3. Zgjidh {{ui:Kthehu}} në shiritin e veglave. Montimi përditësohet: çdo kopje e asaj pjese ndryshon, dhe lidhjet mbi sipërfaqe të bëra nga brinjët e skicës ndjekin.

Sjellja e ndryshimit mbrapa është një hap në listën e zhbërjeve të montimit.

## Zhbërja, ruajtja dhe mbyllja

- Montimi ka listën e vet të zhbërjeve: {{key:Mod+Z}} dhe {{key:Mod+Y}} veprojnë mbi lidhjet, futjet dhe cilësimet.
- {{ui:Ruaj}} ose {{key:Mod+S}} shkarkon `<emri i montimit>.partcraft-asm.json`, me çdo pjesë brenda. Hapeni më vonë me {{ui:Hap}}.
- {{ui:Mbyll}} mbyll montimin dhe kthehet te pjesa nga e cila ke filluar. Nëse montimi nuk është ruajtur, pyet: {{ui:Anulo}}, {{ui:Hidh tej montimin}} ose {{ui:Ruaj më parë}}.
- Për ta riemërtuar montimin, kliko hapësirën bosh që të mos ketë asgjë të zgjedhur dhe ndrysho **Emri** në panelin e djathtë.

## Montime të mëdha

Një montim mund të mbajë mijëra kopje të disa pjesëve. Kopjet e një pjese vizatohen së bashku, një lidhje që e rrotulloni vendos vetëm pjesët pas saj, dhe lista e pjesëve shfaq rreshtat e parë me një buton "Shfaq më shumë" poshtë tyre (pjesa e zgjedhur është gjithmonë në listë).

- Ndërsa rrotulloni ose zmadhoni pamjen, një montim me më shumë se rreth 300,000 trekëndësha vizatohet si një kuti për pjesë, pastaj plotësisht pak pas pushimit.
- {{ui:Pamjet}} › {{ui:Shfaqje e lehtë}} i mban kutitë gjithmonë të ndezura. Zgjedhja e një pjese dhe e lidhjeve përdor akoma pjesët reale.
- Sa shpejt rrotullohet varet edhe nga karta juaj grafike. Numrat që PartCraft ka matur janë në shënimet e versionit, bashkë me makinën nga e cila erdhën.

## Probleme me lidhjet

- Një pjesë që asnjë lidhje nuk e arrin shfaqet si **e lirë** dhe paneli thotë "Bracket2 nuk është e lidhur me pjesën e fiksuar, prandaj mbetet aty ku u vendos."
- Një unazë që nuk mund të mbyllet (gjatësitë nuk arrijnë, një kufi ndalon një lidhje, sipërfaqet nuk përputhen në thellësi): "Revolute3 mbyll një unazë që nuk mund të mbyllet: është shmangur me 2.000 mm. Kontrollo sipërfaqet, zhvendosjet dhe kufijtë e lidhjeve të unazës." Lidhjet e saj bëhen të kuqe.
- Nëse një sipërfaqe ose bosht që përdor një lidhje zhduket pas redaktimit të një pjese: "Kjo sipërfaqe që përdor kjo lidhje mungon nga Bracket." Hiq lidhjen dhe bëje sërish.

Më pas: [Kontrollo një montim për përplasje dhe lëvizje](topic:check-assembly).
