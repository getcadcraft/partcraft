---
title: Veçoritë dhe opsionet e tyre
summary: Çdo veçori në shiritin e veglave me cilësimet, parazgjedhjet dhe kufijtë e saj, nga ekstrudimi te rrumbullakimi, zbrazja dhe trupat STEP të importuar; veprimet që ndajnë të gjitha veçoritë dhe cilësimet e pjesës.
keywords: veçori, nuk është ndërtuar, ekstrudo, prit, rrotullo, prerje e rrotulluar, vrimë, zgjerim, model linear, model rrethor, pasqyrë, rrumbullakim, qoshim, zbraz, importo, opsione, parazgjedhje, cilësime, rezolucion, kurba, facetë, pezullo, kthim
from: ab3a598e
---

Veçoritë listohen në historik sipas radhës në të cilën u bënë, dhe rindërtohen nga lart poshtë. Çdo veçori emërtohet sipas llojit të vet me një numër: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft ndërton çdo veçori me kernelin e rrjetit. {{ui:Rrumbullakim}} dhe {{ui:Qoshim}} punojnë mbi skaje të drejta midis dy faqeve të sheshta, dhe {{ui:Zbraz}} hap faqe të sheshta. Trupat e importuar kërkojnë kernel të saktë, që ky version nuk e ka: ata nuk janë ndërtuar ende, dhe seksioni i tyre më poshtë i përshkruan si pjesë të bërë në një version të mëparshëm që i mban. Shih [Kerneli i rrjetit](topic:solid-kernels) dhe [Çfarë nuk është ndërtuar ende](topic:not-built-yet).

## Skica

| Cilësimi | Shënime |
|---|---|
| Plani | Plani Front, Top ose Right, ose një faqe e sheshtë. Shfaqet, por nuk ndryshohet: për ta lëvizur një skicë, bëj një të re |
| Gjendja | Plotësisht e përcaktuar, Nën-përcaktuar (me shkallët e lirisë), Mbi-përcaktuar, ose Bosh |
| Gjeometria, Lidhjet | Sa kurba, pika dhe lidhje ka |
| Përmasat drejtuese | Çdo përmasë e skicës, e modifikueshme |

Butonat: {{ui:Modifiko skicën}}, {{ui:Eksporto si DXF}}.

## Ekstrudo dhe Prit

{{ui:Ekstrudo}} dhe {{ui:Prit}} krijojnë të njëjtën veçori, duke filluar me cilësime të ndryshme.

| Cilësimi | Zgjedhjet | Ekstrudimi fillon me | Prerja fillon me |
|---|---|---|---|
| Veprimi | Boss (shton material), Cut (heq material), Intersect (ruan mbivendosjen), New body (nuk është ndërtuar ende në këtë version) | Boss | Cut |
| Fundi | Verbër (një thellësi), Mes-plani (në të dy anët), Përgjatë gjithë | Verbër | Përgjatë gjithë |
| Thellësia (mm) | Mbi 0, deri në 1.000.000 | 10 | 10 |
| Kthe drejtimin | Off / on | Off | Off |

- Profili: çdo lak i mbyllur i vijave të ngurta, rrathëve dhe harqeve në skicë. Lakët brenda lakëve janë vrima.
- Përgjatë gjithë funksionon vetëm për prerje. Arrin tërësisht përmes pjesës në anën e zgjedhur.
- Një prerje shkon brenda materialit, larg anës së jashtme të planit të skicës; Kthe e kthen atë.

## Rrotullo dhe prerje e rrotulluar

| Cilësimi | Zgjedhjet | Parazgjedhja |
|---|---|---|
| Veprimi | Boss, Cut | Boss ({{ui:Rrotullo}}), Cut ({{ui:Më shumë}} › {{ui:Prerje e rrotulluar}}) |
| Këndi (°) | Mbi 0, deri në 360 | 360 |
| Boshti | Vija e parë qendrore, çdo vijë ose vijë qendrore e skicës, ose një veçori boshti që shtrihet në planin e skicës | Vija e parë qendrore |

- Profili duhet të mbetet në një anë të boshtit. Mund ta prekë atë.
- Boshti i një rrotullimi mund të përdoret nga Modelet rrethore dhe nga lidhjet e montimit.

## Vrimë

| Cilësimi | Zgjedhjet | Parazgjedhja |
|---|---|---|
| Lloji | E thjeshtë, Zgjerim (counterbore) | E thjeshtë |
| Diametri (mm) | Mbi 0 | 6 |
| Përgjatë gjithë | On / off | On |
| Thellësia (mm) | Kur Përgjatë gjithë është off | 10 |
| Diametri i zgjerimit ⌀ | Më i gjerë se vrima | 11 |
| Thellësia e zgjerimit | Më e cekët se një vrimë e verbër | 6 |
| Kthe drejtimin | Off / on | Off |

- Një vrimë në çdo pikë të lirë të skicës (pika të bëra me veglën Point). Paneli tregon sa janë.
- Vrimat shpohen pingul me planin e skicës, brenda materialit.
- Boshti i çdo vrime mund të përdoret nga lidhjet e montimit ("Hole1, hole 2").

## Model linear

| Cilësimi | Zgjedhjet | Parazgjedhja |
|---|---|---|
| Veçoritë për t'u kopjuar | Çdo veçori trupi mbi të | Veçoria e zgjedhur, përndryshe veçoria e fundit e trupit |
| Drejtimi | Boshti X, Boshti Y, Boshti Z; një vijë e një skice të mëparshme; boshti i një rrotullimi; një brinjë e zgjedhur | Boshti X (ose brinja e zgjedhur kur e shtove) |
| Hapësira (mm) | Çdo numër | 20 |
| Numri | 1 deri në 1000, duke përfshirë origjinalin | 3 |
| Kthe drejtimin | Off / on | Off |

## Model rrethor

| Cilësimi | Zgjedhjet | Parazgjedhja |
|---|---|---|
| Veçoritë për t'u kopjuar | Si për Linear | Si për Linear |
| Boshti | Si për Drejtimin më lart | Boshti i rrotullimit të fundit, përndryshe boshti Y (ose brinja e zgjedhur) |
| Këndi (°) | Mbi 0, deri në 360. 360 i shpërndan kopjet në mënyrë të barabartë rreth tërë rrethit; më pak i shpërndan ato në këndin e dhënë | 360 |
| Numri | 1 deri në 1000, duke përfshirë origjinalin | 6 |
| Kthe drejtimin | Off / on | Off |

## Pasqyrë

| Cilësimi | Zgjedhjet | Parazgjedhja |
|---|---|---|
| Pasqyro | Gjithë trupin (ashtu si është ndërtuar deri tani), ose veçori të zgjedhura | Veçoria e zgjedhur, përndryshe gjithë trupi |
| Plani i pasqyrës | Plani Front, Top ose Right; një faqe e sheshtë | Plani Right, ose faqja e sheshtë e zgjedhur kur e shtove |

## Rrumbullakim dhe Qoshim

Në këtë version kerneli i rrjetit i ndërton ato mbi skaje të drejta midis dy faqeve të sheshta (qoshe të jashtme ose të brendshme), me një rreze. Një skaj i rrumbullakët thotë "Fillet: në këtë version vetëm skaje të drejta midis dy faqeve të sheshta (kerneli i rrjetit i ndërton ato). Rrumbullako ose qoshoje skajet e lakuara në skicë."; ku skajet e rrumbullakëta takohen në një qoshe, ato presin me kënd, dhe veçoria jep paralajmërimin "Rrumbullakim nga kerneli i rrjetit: ku takohen skajet e rrumbullakëta, ato presin me kënd, nuk përzihen." Të gjitha llojet e qoshimit (distancë e barabartë, dy distanca, distancë dhe kënd, me {{ui:Ktheji anët}}) funksionojnë. Shih [Rrumbullako, qoshoje dhe zbraz](topic:fillet-chamfer-shell).

| Cilësimi | Zgjedhjet | Parazgjedhja |
|---|---|---|
| Rrezja (mm) (Rrumbullakim) | Mbi 0 | 2 |
| Distanca (mm) (Qoshim) | Mbi 0, e njëjta në të dy faqet | 1 |
| Brinjët | Brinjët e zgjedhura, secila e listuar me dy faqet që bashkon ("Extrude1 end face × Extrude1 side"), me {{ui:Hiq}} | Brinjët e zgjedhura kur e shtove |

- Zgjidh brinjët para se të zgjedhësh butonin ({{key:Shift}}+kliko për disa), ose zgjidhe pa asgjë të zgjedhur dhe kliko brinjët më pas.
- {{ui:Përzgjidh brinjët}} (ose kliko dy herë mbi veçorinë) i ndryshon brinjët.
- Brinjët mbahen nga dy faqet që bashkojnë, prandaj mbijetojnë ndryshimet e madhësisë më lart.

## Zbraz

Kerneli i rrjetit e ndërton. Mund të hapen vetëm faqe të sheshta ("Zbraz: në këtë version hap vetëm faqe të sheshta (e ndërton kerneli i rrjetit)."); muret me trashësi të ndryshme nuk janë ndërtuar ende. Shih [Rrumbullako, qoshoje dhe zbraz](topic:fillet-chamfer-shell).

| Cilësimi | Zgjedhjet | Parazgjedhja |
|---|---|---|
| Muri (mm) | Mbi 0 | 2 |
| Muret rriten jashtë (faqet mbeten brenda) | Off: muret shkojnë brenda. On: muret shkojnë jashtë | Off |
| Faqet e hapura | Faqet e hequra, të paktën një, me {{ui:Hiq}} | Faqet e zgjedhura kur e shtove |

{{ui:Përzgjidh faqet}} i ndryshon faqet e hapura.

## Trup i importuar

Krijohet duke hapur një skedar STEP, STL, OBJ ose 3MF: një trup i ngurtë trekëndëshash pa historik të vet ([Hap një skedar STEP](topic:import-step), [Hap një STL, OBJ ose 3MF](topic:open-meshes)). Shfaq skedarin nga vjen dhe atë që importi riparoi; **Njësitë në skedar**, **Lart në skedar** dhe **Përdore për** mbeten të modifikueshme. Një trup STEP i importuar nga një version më i vjetër që kishte kernel të saktë qëndron në historik i shënuar si i pandërtuar; hap sërish skedarin STEP për ta sjellë si trekëndësha.

| Cilësimi | Zgjedhjet | Parazgjedhja |
|---|---|---|
| Lart në skedar | Z lart (shumica e CAD), Y lart | Z lart |

Modelet dhe pasqyrat mund të kopjojnë një trup të importuar, por jo një rrumbullakim, qoshim ose zbrazje.

## Çfarë ka çdo veçori

Në fund të panelit të çdo veçorie:

| Buton | Bën |
|---|---|
| {{ui:Pezullo}} / {{ui:Riaktivizo}} | E fik ose e ndez. Veçoritë që e kërkojnë nuk ndërtohen ndërsa është fikur |
| {{ui:Kthehu deri këtu}} | Ndërton vetëm veçoritë mbi këtë. Veçoritë e reja hyjnë te shiriti i kthimit |
| {{ui:Zhvendos lart}} / {{ui:Zhvendos poshtë}} | Rirendit, kur asgjë që përdor nuk do të përfundonte poshtë saj. Ndryshe është e çaktivizuar me arsyen |
| {{ui:Fshi}} | E fshin, dhe (pasi pyet) çdo veçori që e përdor |
| Emri | E riemërton (deri në 60 karaktere) |

Veçoritë me skicë listojnë gjithashtu **Përmasat e skicës**, të modifikueshme në vend.

## Gjendjet në historik

| Gjendja | Shfaqet si | Kuptimi |
|---|---|---|
| Ndërtuar | Normale | Gjithçka në rregull |
| Paralajmërim | ⚠ | Ndërtuar, me diçka për të kontrolluar: "Mbi-përcaktuar: 1 lidhje nuk nevojitet." ose "Pas kësaj nuk mbetet asgjë nga pjesa." |
| Gabim | ⚠ gabim, e kuqe | Nuk mund të ndërtohej; mesazhi thotë pse |
| Nuk është ndërtuar | ⚠ nuk është ndërtuar | Ka nevojë për një veçori që dështoi, është pezulluar ose është kthyer, ose ka nevojë për kernel të saktë, që ky version nuk e ka ("Sweep: nuk është ndërtuar ende. …") |
| Pezulluar | off | E fikur |
| Kthyer | e zbehur, poshtë shiritit të kthimit | Nuk ndërtohet deri sa të ecësh përpara |

## Cilësimet e pjesës

Kliko hapësirën bosh që asgjë të mos jetë e zgjedhur. Paneli i djathtë shfaq **Pjesën**:

- **Emri**: emri i pjesës, që përdoret për emrat e skedarëve dhe bllokun e titullit të vizatimit (deri në 120 karaktere).
- **Kurbat**: shih më poshtë.

### Rezolucioni i kurbave

Kerneli i rrjetit e ndërton vetë trupin nga facetat e sheshta, prandaj pamja, STL, 3MF, STEP me facetë, vëllimi dhe pamjet e vizatimit ndjekin **Kurbat**: sa facetë për rrotullim të plotë.

| Cilësimi | Facetë për rrotullim | Vëllimi i një forme të rrumbullakët |
|---|---|---|
| E trashë (32 për rrotullim) | 32 | Rreth 0,64 % nën vlerën e saktë |
| Normale (64 për rrotullim) | 64 | Rreth 0,16 % nën (parazgjedhja) |
| E imët (128 për rrotullim) | 128 | Rreth 0,04 % nën |
| Shumë e imët (256 për rrotullim) | 256 | Rreth 0,01 % nën |

Kurbat më të imëta japin eksporte dhe pamje më të lëmuara, dhe rindërtime më të ngadalta. Cilësimi ruhet në skedarin e pjesës.

## Nuk është ndërtuar ende

Rrumbullakimet me rreze të ndryshueshme, rrumbullakimet dhe qoshimet mbi skaje të rrumbullakëta, zbrazjet që hapin faqe të lakuara, zhdrejtimi mbi faqe të lakuara, sweep, loft, rib, trupat STEP me faqe të lakuara të sakta, trupa të rinj, konicitetet, "deri te" një faqe ose kulm, dhe referencat në faqet dhe brinjët e trupit kërkojnë kernel të saktë, që ky version nuk e ka. Gjithashtu nuk janë ndërtuar ende: vrimat me filetim dhe ato me konik. Shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet).
