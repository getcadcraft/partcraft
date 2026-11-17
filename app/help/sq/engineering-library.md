---
title: Biblioteka e inxhinierisë
summary: Formula teksti si skripta të lexueshme, në njësi SI, çdo rezultat me burimin e vet: rrjedha në tuba dhe kanale, transferim nxehtësie dhe shkëmbyes nxehtësie, pjesë nën presion, dinamikë gazi, vetitë e ujit dhe ajrit, materialet, dhe njësi që kontrollohen. Për çfarë shërben secila dhe ku ndalon.
keywords: inxhinieri, bibliotekë, njësi, Darcy-Weisbach, Colebrook, Reynolds, faktori i fërkimit, Dittus-Boelter, Gnielinski, NTU, efektivitet, LMTD, lamelë, Barlow, Lamé, nozzle, izentropik, Mach, rrjedhë e mbytur, ujë, ajër, veti, material, burime
from: 786ef967
---

Biblioteka e inxhinierisë është një grup skriptash në bibliotekën e hapësirës së punës Script (`craftlib/eng`). Çdo një është një funksion që mund ta lexosh nga lart poshtë, me një kokë që jep **metodën** e tij, **njësitë**, **kufijtë**, **referencat** dhe një **kontroll** me një numër të punuar. Përdorin njësi SI gjatë gjithë kohës dhe kthejnë sasi që mbartin një **njësi** dhe një **burim**, kështu që një fletë të dhënash mund të shtypë nga erdhi çdo numër.

## Njësi që kontrollohen

`to_si(10, 'bar', 'Pa')` konverton një vlerë dhe refuzon një njësi që mat diçka tjetër (një gjatësi aty ku pritet presion). `from_si`, `unit_convert(1, 'bar', 'psi')` dhe `unit_kind('W/(m K)')` ("përçueshmëri termike") punojnë në të njëjtën mënyrë. `temp_k(25, 'C')` dhe `temp_from_k` konvertojnë temperaturat, që kanë një zhvendosje.

## Vetitë

- `fluid('water', T)` dhe `fluid('air', T, p)`: dendësia, viskoziteti, përçueshmëria, nxehtësia specifike, numri i Prandtl. Uji 0 deri 100 °C, ajri 250 deri 600 K; jashtë kësaj ndalon në vend që të ekstrapolojë.
- `material('ss304')`: moduli i Young, raporti i Poisson, dendësia, kufiri i rrjedhjes, përçueshmëria, nxehtësia specifike, zgjerimi: vlera në temperaturën e dhomës nga të njëjtat fletë të dhënash si Simulation. Një dizajn real përdor shifrat e certifikuara të furnitorit. Kurbat e temperaturës nuk janë ndërtuar ende.

## Rrjedha në tuba dhe kanale

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar, pastaj ekuacioni Colebrook për rrjedhën turbulente; intervali 2300 deri 4000 nuk ka formulë të besueshme dhe e thotë këtë), `darcy_weisbach`, `minor_loss`, `pipe_flow` (tub rrethor, gjithçka njëherësh) dhe `rect_channel` (kanale drejtkëndëshe laminare sipas përshtatjes Shah dhe London).

## Transferimi i nxehtësisë

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (zgjedh laminar ose turbulent dhe emëron korrelacionin), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` dhe `ntu_for` (marrëdhëniet efektivitet-NTU për rrjedhë kundërt, paralele, bobinë-tub, rrjedhë kryqëzuese dhe një rrjedhë e vetme që ndryshon) dhe `hx_size` (madhësia UA që kërkon një detyrë; thotë sa është e mundur kur detyra nuk plotësohet).

## Pjesë nën presion

`allowable_stress` (kufiri i rrjedhjes mbi një faktor sigurie), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, sipas kriterit të unazës ose të prerjes) dhe `wall_sphere`. Këto janë marzhe teksti, **jo një llogaritje sipas kodit të enëve nën presion**: pa lejë korrozioni, efikasitet bashkimi ose faktorë kodi.

## Dinamika e gazit

`isentropic` (raportet në një numër Mach), `mach_from_area`, `choked_flow`, `throat_area` dhe `exit_mach`, për një gaz të përsosur pa fërkim, nxehtësi ose goditje.

## Kontrollo rezultatin

`check_stress`, `check_thermal` dhe `check_flow` ekzekutojnë zgjidhësit e vet të stresit, përcjelljes dhe rrjedhës të PartCraft mbi një pjesë të gjeneruar nga skripta, dhe lexojnë stresin maksimal dhe zhvendosjen, temperaturat dhe fluksin e nxehtësisë, dhe përshkueshmërinë e një rrjeti kanalesh. Ato nuk ndryshojnë asgjë në zgjidhës. Kontrollet e stresit dhe temperaturës përdorin voksela, kështu që një sipërfaqe e lakuar është si shkallë, dhe stresi në një cep të brendshëm të mprehtë ose nën një ngarkesë pike varet nga madhësia e vokselit.
