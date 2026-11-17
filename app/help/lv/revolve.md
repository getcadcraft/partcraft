---
title: Pagrieztas detaļas rotēšana
summary: Skicējiet pusprofilu blakus centrālajai līnijai, rotējiet to apaļā detaļā, izvēlieties asi un leņķi un izmantojiet rotētu griezumu rievām.
keywords: rotēt, rotēts izspiedums, rotēts griezums, pagriezta detaļa, virpa, vārpsta, ass, centrālā līnija, rieva, leņķis, rotācijas griezums
from: 593b6929
---

{{ui:Rotēt}} griež profilu ap asi, kā detaļu, kas taisīta virpā: vārpstas, skriemeļi, flancas, rokturi. Rotēts griezums ({{ui:Vairāk}} izvēlnē elementu grupā) griež profilu, lai noņemtu materiālu rievām un padziļinājumiem.

## Rotēt pakāpienveida vārpstu

1. Skicējiet uz **Priekšējās plaknes**.
2. Nospiediet {{key:N}} priekš {{ui:Centrālā līnija}}. Sāciet sākumpunktā un noklikšķiniet punktā taisni pa labi, piemēram, 100 mm tālāk. Tā ir ass. Tā ir punktēta: konstrukcijas ģeometrija nav daļa no profila.
3. Nospiediet {{key:L}} priekš Līnija. Zīmējiet **pusprofilu** virs centrālās līnijas kā vienu slēgtu cilpu: sākiet uz centrālās līnijas, ejiet augšup, pakāpieni, un atgriezieties uz centrālās līnijas, tad pa to līdz sākumam. Tās galiem jāsaskaras: cilpai jābūt slēgtai.
4. Uzdodiet rādiusus (augstumus virs centrālās līnijas) un garumus. Augstums 10 virs centrālās līnijas dod diametru 20.
5. Izvēlieties {{ui:Iziet}}.
6. Izvēlieties {{ui:Rotēt}}. Vārpsta parādās, pilns apgrieziens.

Profilam jāpaliek vienā ass pusē. Ja tas šķērso asi: "Profils šķērso asi. Turiet to vienā centrālās līnijas pusē." Profila šķautne var atrasties uz ass.

## Iestatījumi

| Iestatījums | Ko tas dara | Noklusējums |
|---|---|---|
| **Darbība** | Piedeva (pievienot materiālu), Griezums (noņemt materiālu), Krustojums (paturēt pārklāšanos) vai Jauns ķermenis | Piedeva priekš {{ui:Rotēt}}, Griezums priekš {{ui:Vairāk}} › {{ui:Rotēts griezums}} |
| **Leņķis (°)** | Cik tālu griezt, no nedaudz virs 0 līdz 360 | 360 |
| **Ass** | Pirmā centrālā līnija vai jebkura līnija vai centrālā līnija skicē, uzskaitīta kā "Centrālā līnija 1 (l1)" vai "Līnija 3 (l3)" | Pirmā centrālā līnija |

Daļējs leņķis veido ķīli, kas griezta no skices plaknes vienā virzienā.

Ja skicē nav centrālās līnijas un atstājat **Ass** uz Pirmā centrālā līnija: "Zīmējiet centrālo līniju (konstrukcijas līniju) skicē, ap ko rotēt." Varat arī izvēlēties profila cieto līniju kā asi.

## Iegriezt rievu

1. Ar izveidotu vārpstu atveriet jaunu skici uz **Priekšējās plaknes** (tā pati plakne kā vārpstas skicei).
2. Zīmējiet centrālo līniju pa to pašu asi: sāciet to sākumpunktā un turiet horizontāli, lai tā iegūtu H, vai ierakstiet to ar **Pievienot pēc koordinātēm** (piemēram, no `0, 0` līdz `100, 0`). Jauna skice nevar piesaistīties citas skices līnijām.
3. Zīmējiet mazu slēgtu taisnstūri, kas pārklājas ar vārpstas šķautni, kur iet rieva.
4. Izvēlieties {{ui:Iziet}}, tad {{ui:Vairāk}} › {{ui:Rotēts griezums}}.

## Rotētas virsmas mezglos

Rotācijai ir ass, ko citi elementi un mezgli var izmantot:

- **Cirkulārs** masīvs pēc noklusējuma izmanto pēdējās rotācijas asi (skatiet [Masīvu un spoguļošanas elementi](topic:patterns-mirror));
- mezglā savienojums starp virsmām, ko veidojušas rotācijas, sākas kā **rotējošs** savienojums, un **Centrēt uz** piedāvā "Revolve1 rotēšanas ass" (skatiet [Mezgla veidošana](topic:build-assembly)).

## Patiesas līknes un fasetes

PartCraft veido rotāciju ar tīkla kodolu (statusa joslas čips rāda "Tīkla kodols"): apaļas formas ir plakanas fasetes, pēc noklusējuma 64 uz apgriezienu, un tilpumi ir nedaudz mazāki par patieso vērtību (ap 0.16 % pie 64). Skats, STL, 3MF un STEP eksporti sastāv no šīm fasetēm: iestatiet **Līknes** (noklikšķiniet uz tukšas vietas, tad labajā panelī) uz Smalka (128) vai Ļoti smalka (256), lai iegūtu gludākas. Patiesi cilindri, konusi un tori prasa precīzu kodolu: šajā versijā tie vēl nav izveidoti. Skatiet [Tīkla kodols](topic:solid-kernels).
