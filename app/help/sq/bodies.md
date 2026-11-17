---
title: Kombino, zhvendos dhe shkallëzo trupat; modele përgjatë shtegut
summary: Bëj trupa të veçantë, pastaj bashkoji, prit ose ndërpre ata më vonë, zhvendosi, rrotullo, përafro ose kopjoi, shkallëzoji njëtrajtësisht ose sipas X, Y dhe Z, dhe kopjo veçori ose trupa përgjatë një kurbe.
keywords: trup, trupa, shumë-trup, trup i ri, kombino, booleane, bashkim, prerje, ndërprerje, zbritje, bashkim (union), mbaj veglat, zhvendos trupin, kopjo trupin, rrotullo trupin, përafro, përkthe, shkallëzo, shkallë jo uniforme, shtrirje, afine, model shtegu, model përgjatë kurbës, grup i drejtuar nga kurba
from: 6b1ea820
---

:::note
**Nuk është ndërtuar ende në këtë version.** Puna me disa trupa kërkon një kernel gjeometrik të saktë, të cilin ky version i PartCraft nuk e ka: ai ndërton çdo pjesë me kernelin e rrjetës. [Çfarë nuk është ndërtuar ende](topic:not-built-yet) thotë çfarë të bësh në vend të kësaj. Pjesa tjetër e kësaj faqeje përshkruan se si funksionon me një kernel të saktë.
:::

Një pjesë mund të ketë më shumë se një solid. Çdo solid i veçantë është një **trup**. Shumica e veçorive shtojnë ose heqin nga çdo trup që prekin; veglat në këtë faqe punojnë mbi trupa të tërë që ti zgjedh. Ato janë në menunë {{ui:Më shumë}} të grupit Veçori: {{ui:Kombino}}, {{ui:Zhvendos trupin}}, {{ui:Shkallëzo trupin}} dhe {{ui:Model përgjatë shtegut}}. Të gjitha kërkojnë kernelin e saktë (OpenCascade).

## Bëj një trup të veçantë

Vendos **Operacionin** e një ekstrudimi ose rrotullimi në **Trup i ri** te paneli i djathtë i tij (edhe shtrirjet dhe ndërlidhjet e kanë). Trupi i ri mbetet i veçantë edhe aty ku mbivendoset me të tjerët. **Ndërprerje** mban vetëm mbivendosjen e formës së re me atë që ekziston.

Trupat marrin emrin e veçorisë që i krijoi: "Extrude2". Një kopje merr emrin e origjinalit dhe veçorisë që e kopjoi: "Extrude2, copy 1 of Move1". Emrat mbeten të njëjtë kur ndryshon përmasat më lart, kështu që veçoritë që përdorin një trup e gjejnë akoma. Me dy ose më shumë trupa, paneli i pjesës (kliko hapësirën bosh) i liston me vëllimet e tyre.

## Riemërto ose fshih një trup

Kliko hapësirën bosh në pamje për të parë panelin e pjesës. Lista e trupave të tij (e shfaqur kur pjesa ka dy ose më shumë trupa) ka një kuti emri dhe një buton {{ui:Fshih}} në çdo rresht.

- **Riemërto:** shkruaj një emër të ri në kuti dhe shtyp {{key:Enter}} ose kliko jashtë. Çdo panel e përdor atë më pas: Kombino, Zhvendos trupin, modelet. Pastro kutinë për t'u kthyer te emri nga veçoria që e bëri trupin.
- **Fshih:** kliko {{ui:Fshih}} në rreshtin e tij. Trupi del nga pamja dhe klikimet kalojnë përmes tij, kështu që mund të zgjedhësh sipërfaqe prapa tij. {{ui:Shfaq}} e kthen; {{ui:Shfaq të gjitha}} i kthen të gjithë trupat e fshehur.

Fshehja ndryshon vetëm pamjen. Një trup i fshehur ndërtohet akoma, llogaritet në vëllim dhe në matje, dhe ruhet në eksportet STL, 3MF dhe STEP. Emrat dhe trupat e fshehur ruhen në skedarin e pjesës, dhe çdo ndryshim është një hap i {{ui:Zhbëj}}.

## Kombino trupat

1. Shift+kliko një sipërfaqe të trupit **të synuar**, pastaj një sipërfaqe të çdo trupi **veglë**.
2. Zgjidh {{ui:Më shumë}}, pastaj {{ui:Kombino}}.
3. Në panelin e djathtë zgjidh **Operacionin**:

| Operacioni | Rezultati |
|---|---|
| Bashkim | Trupi i synuar dhe ato të veglave bëhen një trup |
| Prerje | Veglat hiqen nga trupi i synuar |
| Ndërprerje | Mbetet vetëm ajo që ka trupi i synuar dhe çdo vegël e përbashkët |

**Trupi i synuar** është ai që e mban emrin e vet. Shëno ose hiq shenjën te **Trupat e veglave**, ose përdor **Zgjidh në pamje** dhe kliko sipërfaqet e tyre. **Mbaj trupat e veglave** i lë veglat në vend edhe pas operacionit (e dobishme për një kallëp dhe bërthamën e tij). Nëse një trup vegël është përdorur tashmë nga një Kombino më herët, paneli e thotë këtë në vend që të zgjedhë një trup tjetër.

## Zhvendos ose kopjo një trup

1. Zgjidh {{ui:Më shumë}}, pastaj {{ui:Zhvendos trupin}}. Trupi më i ri është i shënuar; shëno ata që do të zhvendosësh.
2. Zgjidh llojin **Zhvendos**:

| Zhvendos | Çfarë cakton ti |
|---|---|
| Përkthe | **ΔX**, **ΔY**, **ΔZ** në milimetra |
| Pikë në pikë | **Nga** dhe **Deri te**: kliko pranë skajit të një brinje, një veçorie pike ose një pike në një sipërfaqe |
| Rrotullo rreth një boshti | **Boshti** (X, Y, Z, një veçori boshti, ose **Zgjidh**: një brinjë e drejtë, një rreth ose një cilindër) dhe **Kënd (°)** |
| Përafro një sipërfaqe me një sipërfaqe ose plan | **Sipërfaqja për t'u zhvendosur** (një sipërfaqe e sheshtë e trupit), **Mbi** (një sipërfaqe e sheshtë ose një plan) |

Përafrimi e kthen trupin në mënyrë që sipërfaqja e tij të shtrihet mbi tjetrën, faqe më faqe, pastaj e rrëshqet vetëm përgjatë normales së asaj sipërfaqeje. **Në të njëjtin drejtim** e kthen në drejtim të kundërt. **Kopjo** e mban origjinalin dhe shton kopjen e zhvendosur si trup të ri.

## Shkallëzo një trup

1. Zgjidh {{ui:Më shumë}}, pastaj {{ui:Shkallëzo trupin}}, dhe shëno trupat.
2. Shkruaj një **Shkallë**, ose hiq shenjën te **Uniforme** dhe shkruaj **Shkalla X**, **Shkalla Y** dhe **Shkalla Z** (sipas boshteve botërore).
3. **Rreth** është pika që qëndron në vend: qendra e kutisë së trupave, ose një pikë që zgjedh ti.

Një shkallëzim uniform është i saktë. Një shkallëzim jo uniform e kthen rrethin në elips: një cilindër bëhet cilindër eliptik, që asnjë sipërfaqe analitike nuk e mban, prandaj sipërfaqet e lakuara bëhen sipërfaqe B-spline që qëndrojnë brenda 0.0000004 mm nga forma e saktë; sipërfaqet e sheshta dhe brinjët e drejta mbeten të sakta. Paneli thotë cili ndodhi. Faktorët e shkallës duhet të jenë më të mëdhenj se zero (për pasqyrim përdor {{ui:Pasqyrimi}}).

## Kopjo përgjatë një shtegu

1. Zgjidh veçorinë për t'u kopjuar në histori, ose mos zgjidh asgjë për të kopjuar trupin më të ri.
2. Zgjidh {{ui:Më shumë}}, pastaj {{ui:Model përgjatë shtegut}}. Skica më e re e pa përdorur merret si shteg.
3. Në panelin e djathtë cakto:

| Cilësimi | Çfarë bën |
|---|---|
| **Kopjo** | Trupa (çdo kopje një trup i ri) ose Veçori (bashkohen ose priten si origjinali) |
| **Shtegu** | Shëno skicat, ose **Zgjidh brinjët e modelit**; pjesët duhet të lidhen skaj më skaj |
| **Numri** | Numri total, duke përfshirë origjinalin |
| **Hapësira** | Të barabarta (shpërndara deri në fund të një shtegu të hapur, ose rreth gjithë një shtegu të mbyllur) ose një distancë e caktuar |
| **Orientimi** | Ndiq shtegun (çdo kopje kthehet me të) ose Fiksuar (kopjet mbeten paralele) |
| **Kthe drejtimin** | Shko në drejtim tjetër përgjatë shtegut |

Kopjet fillojnë aty ku shtegu kalon më afër origjinalit dhe janë të vendosura sipas gjatësisë përgjatë kurbës.

Modelet lineare dhe rrethore mund të kopjojnë edhe trupa: shëno **Kopjo trupat** në panelin e tyre dhe zgjidh trupat; çdo kopje është trup i ri.

## Kufizimet

- Trupat kërkojnë kernelin e saktë; kerneli i rrjetës mban një solid të vetëm dhe e thotë këtë.
- Një shkallëzim jo uniform i bën sipërfaqet e lakuara përafrime B-spline të afërta (shih më sipër), jo cilindra apo konusa të saktë; sipërfaqet e zhvendosura nuk mund të shkallëzohen kështu ende.
- Ndjekja e shtegut mbi një kurbë 3D që përdredhet e mbart kopjen pa e përdredhur; te shtegjet e sheshtë kthesa është e saktë.
- Kombino punon vetëm me solide. Trupat sipërfaqe bashkohen me {{ui:Qep}}.

Shih gjithashtu [Planet, boshtet dhe pikat referuese](topic:reference-geometry) për pika dhe plane "midis objekteve", dhe [Modele veçorish dhe pasqyrim](topic:patterns-mirror).
