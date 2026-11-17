---
title: Rokasgrāmatas sākšana darba vidē Illustrate
summary: Darba vide Illustrate veido rokasgrāmatas no jūsu konstrukcijas: skatus, izvērstus līniju zīmējumus ar baloniem un detaļu sarakstu, soli pa solim instrukcijas, animācijas un 3D failu, ko klients var atvērt bez CAD. Rokasgrāmata ir atsevišķs fails.
keywords: ilustrēt, rokasgrāmata, tehniskā ilustrācija, dokumentācija, izvērsts skats, detaļu saraksts, instrukcijas, partcraft-manual
from: e447e0ab
---

**Illustrate** ir darba vide dokumentiem, kas nepieciešami ap konstrukciju: izvērsti skati ar baloniem un detaļu sarakstu, līniju zīmējumi rokasgrāmatām, soli pa solim instrukcijas, animācijas un 3D fails, ko klients var atvērt bez CAD. Izvēlieties {{ui:Illustrate}} pārslēdzējā {{ui:Darba vide}} rīkjoslas sākumā.

**Rokasgrāmata** ir atsevišķs fails (`<name>.partcraft-manual.json`). Tajā glabājas katras detaļas formas kopija, izstrādājuma koks un detaļu rekvizīti, kā arī saite uz to avotu, lai varat strādāt pie rokasgrāmatas, kamēr konstrukcija turpinās. Kad konstrukcija mainās, [Atjaunināt no konstrukcijas](topic:illustrate-update) ienes izmaiņas.

## Sākt jaunu

Noklikšķiniet uz {{ui:Jauns}} grupā {{ui:Rokasgrāmata}}, pēc tam:

- {{ui:No atvērtās detaļas}}: detaļa, kas atvērta konstrukcijā.
- {{ui:No atvērtā mezgla}}: tiek rādīts tā vietā, kad ir atvērts mezgls; tā detaļas, to novietojums, detaļu numuri, materiāli un izvērstie skati tiek pārņemti kopā ar tām.
- {{ui:No mezgla faila…}}: saglabāts `.partcraft-asm.json`; PartCraft vispirms izveido tā detaļas.
- {{ui:No cita faila…}}: glTF (.glb, .gltf), OBJ, STL vai 3MF. Faila koks un nosaukumi tiek saglabāti, un vienas detaļas kopijas (tā pati forma novietota divreiz) kļūst par vienu detaļu ar daudzumu. STL un OBJ faili neuzrāda savu mērvienību, tāpēc tiek jautāts. STL failos Z ass ir uz augšu; glTF un 3MF norāda savu.

Kamēr rokasgrāmata ir atvērta, Illustrate rāda rokasgrāmatas pašas detaļu kopijas; detaļa vai mezgls, kas atvērts konstrukcijā, ir paslēpts, līdz atgriezīsieties konstrukcijā.

## Saglabāšana un atvēršana

{{ui:Saglabāt}} grupā {{ui:Rokasgrāmata}} (vai {{key:Mod+S}}) saglabā rokasgrāmatu; {{ui:Atvērt}} atver to. Katra izmaiņa programmā Illustrate ir viens solis rokasgrāmatas vēsturē: {{ui:Atsaukt}} un {{ui:Atkārtot}} darbojas ar rokasgrāmatu, kamēr Illustrate ir atvērts.

## Vēl nav pieejams

- STEP faili vēl neatveras {{ui:No cita faila…}}. Tā vietā atveriet STEP konstrukcijā (tas tiek ievests kā cieta korpusa detaļa: skatiet [STEP faila atvēršana](topic:import-step)) un sāciet rokasgrāmatu ar {{ui:No atvērtās detaļas}}, vai saglabājiet to kā glTF, 3MF, OBJ vai STL.
- ModelCraft un BimCraft vēl nevar nodot modeli tieši programmai Illustrate: saglabājiet to kā glTF (.glb) un izmantojiet {{ui:No cita faila…}}.

Tālāk: [Skati un izskats](topic:illustrate-views).
