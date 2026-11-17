---
title: PartCraft iestatījumi
summary: Izvēlieties, kura peles poga pagriež skatu, ieslēdziet skārienpaliktņa vilkšanu, lai pagrieztu un panoramētu detaļu, ieslēdziet vai izslēdziet automātiskās sakarības skicēšanas laikā un iestatiet, cik pavedienus izmanto simulācijas risinātāji.
keywords: iestatījumi, opcijas, pele, vidējā poga, ritenīša poga, orbīta, pagriezt, skārienpaliktnis, ritināšana, vilkšana, žests, savilkšana, sakarības, ierobežojumi, automātiskās sakarības, piesaiste, sakrītoši, pavedieni, risinātāja pavedieni, kodoli, procesori, daudzpavedienu, ātrāka risināšana, paralēli
from: 759edcaf
---

Atveriet {{ui:Iestatījumi}} ar zobrata ikonu lietotnes joslā vai ar {{key:Mod+,}}. Pirmajā cilnē, {{ui:PartCraft}}, ir šai lietotnei piederošie iestatījumi; {{ui:Vispārīgi}} ietver tos, ko kopīgi izmanto visas CadCraft lietotnes (motīvs, rīkjosla, paneļi). PartCraft iestatījumi pastāv tikai lietotnē: tos mainiet šeit, un šī pārlūkprogramma tos atceras. {{ui:Atiestatīt PartCraft iestatījumus}} atjauno visu sākuma stāvoklī.

## Skata pagriešana

- **Kreisā poga** (sākumā): velciet ar kreiso pogu, lai pagrieztu detaļu; velciet ar labo vai vidējo pogu, lai panoramētu.
- **Vidējā poga**: nospiediet ritenīti un velciet, lai pagrieztu detaļu; turiet {{key:Shift}} (vai {{key:Ctrl}}, vai ⌘) ar vidējo pogu, vai velciet ar labo pogu, lai panoramētu. Kreisā poga atlasa tikai virsmas, malas un plaknes, tāpēc klikšķis, kas nedaudz pārvietojas, nekad nepagriež detaļu. Daudzas CAD programmas darbojas šādi.

Ritenītis abos gadījumos tālummaina pa rādītāja vietu. Skicē labā un vidējā poga panoramē kā līdz šim.

## Ritināšana: peles ritenītis vai skārienpaliktnis

- **"Noteikt automātiski"** (sākumā): PartCraft novēro ritināšanu. Sānu vai smalka ritināšana, kādu nosūta skārienpaliktnis, pagriež detaļu; veselas ritenīša atzīmes tālummaina.
- **Peles ritenītis**: ritināšana vienmēr tālummaina uz rādītāja pusi.
- **Skārienpaliktnis**: vilkt ar diviem pirkstiem, lai pagrieztu detaļu; turiet {{key:Shift}} un velciet, lai panoramētu; savelciet, lai tālummainītu. Skicē vilkšana ar diviem pirkstiem panoramē skici.

Savilkšana tālummaina visās izvēlēs. Ja "Noteikt automātiski" nepareizi nosaka jūsu peli vai skārienpaliktni, izvēlieties to, kas jums ir. Vairāk: [Skārienpaliktnis, skārienekrāns un mazi ekrāni](topic:trackpad-and-touch).

## Skicēšana: sakarību pievienošana zīmēšanas laikā

**Pievienot sakarības zīmējot** (sākumā ieslēgts): klikšķis, kas piesaistās punktam, padara jauno punktu sakritīgu ar to; klikšķis uz līknes novieto punktu uz tās līknes, un līnija, kas zīmēta gandrīz horizontāli vai vertikāli, kļūst horizontāla vai vertikāla. Skatiet [Sakarības un izmēri](topic:relations-dimensions).

Izslēdziet to, kad vēlaties novietot ģeometriju blakus citai ģeometrijai, nesaistot to ar to. Rādītājs joprojām piesaistās punktiem un līknēm, bet nekas nav savienots: līnijas, kas zīmētas ķēdē, nedalās ar galiem, tāpēc vilkšana tās var atdalīt. Pievienojiet vajadzīgās sakarības pats no labā paneļa. Slēgts profils joprojām tiek izvilkts, kad tā gali saskaras.

:::note
Iestatījums maina tikai to, ko jaunā zīmēšana pievieno. Skicē jau esošās sakarības paliek, un Noapaļošanas rīks joprojām veido savu tangentes loku un rādiusu.
:::

## Skicēšana: izmērs zīmēšanas laikā

**Izmērs zīmējot** (sākumā ieslēgts): kamēr zīmē līniju, taisnstūri, riņķi vai loku, skaitļa ierakstīšana aizpilda izmēra lodziņu blakus rādītājam ({{key:Tab}} pāriet uz nākamo lodziņu), un {{key:Enter}} uzzīmē formu šādā izmērā ar vadošu izmēru katram ierakstītajam izmēram. Izslēgts: skaitļa ierakstīšana zīmēšanas laikā nedara neko, un formas tiek zīmētas tikai ar klikšķiem. Skatiet [Ierakstiet izmēru zīmējot](topic:sketch-basics#type-the-size-as-you-draw).

## Stūra indikators

Kas rādās 3D skata stūrī: **Skata kubs** (sākumā; augšā pa labi — noklikšķiniet uz virsmas, malas vai stūra, lai skatītos no turienes, velciet to, lai orbitētu, velciet tā kompasa gredzenu, lai pagrieztu modeli), **Asu ikona** (neliels X, Y, Z marķieris apakšā pa kreisi, kas pagriežas kopā ar skatu: X sarkans, Y zaļš, Z zils) vai **Nav**. Neviens no tiem nerādās, kamēr skicējat vai rasējuma lapā. Skatiet [Skata kubs](topic:view-cube).

## Risinātāja pavedieni

Cik pavedienus drīkst izmantot simulācijas risinātāji. **Automātiski** (sākumā) izmanto par vienu mazāk nekā datora loģisko procesoru skaits (ne vairāk kā 16), tāpēc lapa paliek atsaucīga, kamēr pētījums tiek atrisināts; vai izvēlieties skaitli. Lieli vokseļu pētījumi, izliekšanās, spriegums laikā un plūsmas risinās ātrāk vairākos pavedienos (aptuveni 2× ar 4 pavedieniem 80,000 kubiem mūsu mērījumos, vairāk uz brīva datora); modeļi ar līdz aptuveni 20,000 nezināmajiem paliek vienā pavedienā, jo pavedienu palaišana izmaksā vairāk, nekā ietaupa. Pavedienu risinājums dod to pašu atbildi kā viens pavediens (līdz noapaļojumam: summas tiek saskaitītas citā secībā). Katra pētījuma rezultātos sadaļā **Risinātājs** tiek uzskaitīts **N pavedieni** vai **1 pavediens** ar iemeslu.

Pavedieniem lapai jābūt **starpizcelsmju izolētai** (cross-origin isolated): tikai tad pārlūkprogramma ļauj darbiniekiem kopīgot atmiņu. Laboratorijas lapa tāda ir; kur nav, iestatījums to saka ("Šī lapa nav starpizcelsmju izolēta, tāpēc risinātāji darbojas vienā pavedienā neatkarīgi no tā, kas šeit izvēlēts.") un katrs risinājums izmanto vienu pavedienu. Viss pārējais darbojas tāpat, un atbildes ir tādas pašas.

Laminārās plūsmas pētījumi arī izmanto pavedienus (aptuveni 2.5× ar 4 pavedieniem 54,000 šķidruma šūnām, tā pati atbilde līdz pēdējam ciparam). Kvadrātiskā tetraedra risinātājs un siltuma pārnese darbojas vienā pavedienā: pavedienu izmantošana mūsu testa datorā izrādījās lēnāka (to risinātājus ierobežo atmiņas ātrums un solis, ko nevar sadalīt).

### Savā tīmekļa serverī

Ja PartCraft darbināt savā serverī, tas darbojas kā pasniegts. Risinātāja pavedieniem serverim jānosūta divas galvenes ar PartCraft lapu:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Apache serverī mapes `.htaccess` failā (nepieciešams mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

nginx serverī `location` blokā, kas pasniedz PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Pārlādējiet lapu: Iestatījumi › Risinātāja pavedieni tad piedāvā **Automātiski** ar jūsu datora skaitu. Otrā galvene liek pārlūkprogrammai noraidīt visu, ko lapa ielādē no citas vietnes, kas to neļauj; tas PartCraft pašam ir labi (tas ielādē visu no savas mapes).
