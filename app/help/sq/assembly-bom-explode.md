---
title: Lista e pjesëve, pamjet e shpërthyera dhe pjesët në lëvizje
summary: Jep pjesëve të montimit një numër, përshkrim dhe material, lexo dhe shkarko tabelën e materialeve, bëj pamje të shpërthyera me hapa ose automatikisht, zhvendos me dorë pjesët që nuk janë lidhur, vendos kufij lidhjesh dhe eksporto të gjithë montimin si STL, 3MF ose tabelë materialesh.
keywords: bom, tabela e materialeve, lista e pjesëve, numri i pjesës, material, dendësi, csv, pamje e shpërthyer, shpërthim, palosje, vija gjurmë, zhvendos pjesën, tërhiq, dorezë, përkthe, rrotullo, kufijtë e lidhjes, eksport montimi, hap montimi, vizatim montimi, balona
from: ebc9f6f3
---

Këto mjete janë në panelin e djathtë të një montimi (shih [Ndërto një montim](topic:build-assembly)).

## Vetitë e pjesës

Zgjidh një pjesë nga lista në të majtë. Nën **Vetitë e pjesës** cakto:

- **Numri i pjesës** (deri në 40 karaktere) dhe **Përshkrimi** (deri në 200).
- **Materiali**: një material i zakonshëm me dendësinë e tij, ose **Dendësi e personalizuar…** për ta shkruar në g/cm³. Paneli pastaj shfaq masën e pjesës.

Vetitë i përkasin pjesës, kështu që çdo kopje e saj i ndan ato. Ruhen në skedarin e montimit.

## Tabela e materialeve

Kur nuk ka asgjë të zgjedhur ({{key:Esc}}), paneli shfaq **Tabelën e materialeve**: një rresht për çdo pjesë me numrin e saj të artikullit, sasinë (sa kopje ka), numrin e pjesës, emrin, materialin dhe masën. Numrat e artikujve ndjekin renditjen sipas së cilës pjesët shfaqen për herë të parë në listë. Masat përdorin vëllimin e çdo pjese (të trupit të fasetuar që ndërton kerneli i rrjetës, pak më të ulët te pjesët e rrumbullakëta) dhe materialin e saj; një pjesë pa material nuk ka masë, dhe atëherë nuk ka total.

{{ui:Shkarko CSV}} ruan listën si skedar CSV (ose **Eksporto › Tabela e materialeve (CSV)**). Hapet në çdo program llogaritësh; teksti që fillon me = ose + merr një apostrof në fillim, që programi të mos e ekzekutojë si formulë.

## Pamjet e shpërthyera

Një pamje e shpërthyer i ndan pjesët për fotografi. Ajo kurrë nuk ndryshon lidhjet ose vendet e vërteta të pjesëve: ruajtja, kontrollet e përplasjeve dhe eksportet përdorin pozicionet reale.

1. Kur nuk ka asgjë të zgjedhur, zgjidh {{ui:Pamje e re}} nën **Pamjet e shpërthyera**.
2. Nën **Shto një hap**, shëno pjesët që lëviz hapi, zgjidh një **Drejtim** (+X … −Z, normalja e një sipërfaqeje që klikon, ose **Tërhiq një shigjetë në pamje**) dhe një **Distancë**, pastaj {{ui:Shto hapin}}. Me **Tërhiq**, tërhiq shigjetën dhe lësho: hapi merr drejtimin dhe distancën që tërhoqe.
3. Shto më shumë hapa. Ata luhen njëri pas tjetrit.
4. Tërhiq rrëshqitësin midis **I montuar** dhe **I shpërthyer** për ta animuar pamjen. Vija gjurmësh me pika shkojnë nga pozicioni i çdo pjese në pozicionin e saj aktual.

{{ui:Auto (radiale)}} largon çdo pjesë, përveç asaj të fiksuar, nga mesi i montimit. {{ui:Auto (lidhje)}} zhvendos çdo pjesë të lidhur (me gjithçka të lidhur poshtë saj) përgjatë normales së sipërfaqes së lidhjes së saj. Mund të mbash disa pamje me emër; zgjidh një te **Pamja**, ose **I montuar** për t'i kthyer pjesët në vend. Pamjet ruhen në skedarin e montimit.

## Zhvendos një pjesë me dorë

Vetëm një pjesë pa lidhje me pjesën e fiksuar lëviz me dorë (pjesa e fiksuar qëndron; lidhjet vendosin pjesët e tjera). Zgjidhe dhe, nën **Zhvendos me dorë**:

- Shkruaj **ΔX, ΔY, ΔZ** dhe zgjidh {{ui:Zhvendos}}, ose zgjidh një bosht dhe një **Kënd** dhe {{ui:Rrotullo}} (rreth mesit të pjesës).
- {{ui:Tërhiq për të zhvendosur}} shfaq shigjeta mbi pjesën: tërhiq një shigjetë për të lëvizur përgjatë atij boshti, ose një katror për të lëvizur në një plan. {{ui:Tërhiq për të rrotulluar}} shfaq unaza për ta rrotulluar. Çdo tërheqje është një hap zhbërjeje. {{key:Esc}} i fsheh shigjetat.

## Kufijtë e lidhjeve

Zgjidh një lidhje që lëviz dhe, nën **Kufijtë**, shëno **Mbaj … midis kufijve** për çdo vlerë të saj, pastaj cakto **Minimumi** dhe **Maksimumi**. Çdo vlerë mbahet brenda kufijve të vet, rrëshqitësi i saj mbulon vetëm atë diapazon, dhe {{ui:Kontrollo lëvizjen për përplasje}} skanon vetëm midis tyre. Një lidhje cilindrike mund të kufizojë këndin, zhvendosjen ose të dyjat. Nëse ndryshon llojin e lidhjes, kufijtë për vlerat që lloji i ri nuk i ka hiqen.

## Eksporto të gjithë montimin

Në një montim, menuja **Eksporto** shkruan të gjithë montimin, me çdo pjesë aty ku është vendosur:

- **STEP AP242 / AP214** dhe **Vizatimi (PDF)** nuk janë ndërtuar ende në këtë version: kërkojnë një kernel të saktë, prandaj janë të zbehura. Eksporto STEP të çdo pjese (trup i saktë) nga vetë pjesa.
- **STL**: një rrjetë e vetme e të gjitha pjesëve. **3MF**: çdo pjesë një herë, e vendosur një herë për çdo kopje.
- **Tabela e materialeve (CSV)**.

## Kufizimet

- Vizatimi i montimit dhe STEP i montimit nuk janë ndërtuar ende në këtë version (kërkojnë një kernel të saktë). Pamjet e shpërthyera janë për fotografi në ekran.
