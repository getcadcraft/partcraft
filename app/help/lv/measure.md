---
title: Mērīt attālumus, leņķus un masu
summary: Noklikšķiniet uz divām lietām skatā, lai iegūtu minimālo attālumu, leņķi un ΔX ΔY ΔZ; nolasiet malas garumu, cauruma diametru, virsmas laukumu vai punkta koordinātes; iegūstiet tilpumu, masu, masas centru un inerci detaļai vai mezglam.
keywords: mērīt, attālums, minimālais attālums, leņķis, garums, rādiuss, diametrs, laukums, koordinātes, delta, pārbaudīt, masas īpašības, masa, svars, masas centrs, inerce, inerces moments, blīvums, materiāls
from: 20bda0b7
---

**Mērīt** darbojas ar modeli visās darbvietās (Design, Form, Simulation, Generative, Manufacture) un mezglā. Tas atrodas grupas **Skats** izvēlnē {{ui:Views}} vai nospiediet {{key:M}}. Karte atveras virs skata augšējā kreisajā stūrī.

## Mērīt vienu lietu

Noklikšķiniet uz virsotnes, malas vai virsmas. Karte rāda:

- **Punktu** (virsotni, malas vidu vai riņķa centru): tā X, Y, Z.
- **Malu**: taisna, riņķa vai līkne, un tās garumu; riņķim arī rādiusu, diametru un centru.
- **Virsmu**: plakana, cilindrs, konuss un tā tālāk, un tās laukumu; plakanas virsmas normāli; cilindra rādiusu un diametru (cauruma izmēru). Laukumi ir no facetēm, ko veido sieta kodols.
- **Visu korpusu**: turiet {{key:Shift}} un noklikšķiniet uz detaļas. Iegūsiet tās tilpumu, laukumu, masu un inerci (skat. zemāk).

Rādītājs piesaistās virsotnēm, malu vidiem un riņķu centriem 10 pikseļu robežās; mazs zils punkts rāda piesaisti pirms klikšķa. Lai atlasītu cauruma centru, norādiet uz cauruma vidu; lai atlasītu tā malu (riņķi), norādiet uz malu.

## Mērīt starp divām lietām

Noklikšķiniet uz otrās lietas. Karte pievieno:

- **Minimālo attālumu** un divus tuvākos punktus, zīmētus skatā ar līniju starp tiem.
- **ΔX, ΔY, ΔZ** no pirmā tuvākā punkta uz otro.
- **Leņķi** starp divām plakanām virsmām (starp to normālēm, 0–180°), starp divām taisnām malām vai asīm (0–90°) vai starp malu un virsmu.
- **Attālumu starp plaknēm** divām paralēlām plakanām virsmām, **Centrs līdz centram** diviem riņķiem vai caurumiem, **Ass līdz asij** diviem paralēliem caurumiem vai cilindriem.

Trešais klikšķis sāk jaunu pāri. {{key:Esc}} notīra izvēli; vēlreiz {{key:Esc}} (vai {{ui:Close}}) aizver Mērīt. {{ui:Copy}} ieliek rezultātus starpliktuvē kā tabulatoros atdalītu tekstu, gatavu ielīmēšanai izklājlapā.

### Cik tas ir precīzs

PartCraft veido detaļu ar sieta kodolu, tāpēc attālumi tiek aprēķināti pēc sieta facetēm, un karte saka **aptuveni: pēc facetēm**: tas ir pareizi plakanām virsmām un attālumiem starp virsotnēm, nedaudz nepareizi izliektām. Smalkāks iestatījums **Līknes** tos tuvina. Precīza mērīšana uz īstajām virsmām prasa precīzu kodolu: šajā versijā tā vēl nav.

## Masas īpašības

Izvēlieties {{ui:Mass properties}} kartē vai {{ui:Views}} izvēlnē. Detaļai kartē izvēlieties **Material** (tērauds, alumīnijs, plastmasas un citi ar parastajiem blīvumiem). Mezglā katra detaļa izmanto materiālu, kas iestatīts tās īpašībās (atlasiet detaļu, tad **Material**), un rezultāts ir visām detaļām kopā.

Karte rāda masu, tilpumu, laukumu, masas centru, inerces tenzoru (Ixx, Iyy, Izz un reizinājumus Ixy, Iyz, Ixz, kg·mm², ap masas centru pasaules asīs) un galvenos momentus. Bez materiāla tā rāda to pašu uz vienības blīvumu (mm⁵) un bez masas.

Skaitļi ir precīzi sieta cietajam ķermenim, ko veido sieta kodols (izliektas virsmas kā facetes), tāpēc apaļa detaļa ir nedaudz zemāka, un karte to saka. Materiālu blīvumi ir tipiskas rokasgrāmatas vērtības; īsts sakausējums vai marka var atšķirties par dažiem procentiem.

## Ierobežojumi

- Piesaiste var atrast punktu, kas paslēpts aiz citas ģeometrijas; pārbaudiet, vai karte rāda to, ko domājāt.
- Mērīt aizveras, kad atverat skici vai rasējuma lapu vai maināt darbvietu.
