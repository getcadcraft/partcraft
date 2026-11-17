---
title: Konfigurimet dhe tabelat e projektimit
summary: Mbani disa madhësi dhe versione të një pjese si konfigurime të emërtuara të ruajtura në skedarin e pjesës, me veçoritë e ndezura ose të fikura në secilin, kaloni mes tyre me një klikim, sillni ose nxirrni ato si tabelë projektimi CSV, ose ndërtoni të gjitha nga vija e komandës.
keywords: tabelë projektimi, konfigurime, konfigurim, madhësi, familje pjesësh, csv, fletë llogaritëse, variante, të drejtuara nga tabela, familje pjese, pezullo, i pezulluar, fik një veçori, opsione, me ose pa, konfigurues
from: 17249afb
---

Një **konfigurim** është një madhësi e pjesës: një grup i emërtuar vlerash për parametrat e saj. Pjesa mban konfigurimet e veta në skedarin e vet, kështu që udhëtojnë me të. Një **tabelë projektimi** është e njëjta gjë si skedar CSV, me një rresht për konfigurim.

Konfigurimet caktojnë **parametrat**, kështu që shtoni ata së pari (shih [Drejtoni një pjesë me parametra](topic:parameters)). Një konfigurim ruan parametrat që janë numra të thjeshtë; parametrat e llogaritur nga të tjerët (si `area = w * d`) ndjekin vetvetiu.

## Ruani një konfigurim

1. Te skeda {{ui:Parametrat}}, caktoni parametrat për një madhësi të pjesës.
2. Nën **Konfigurimet**, shkruani një emër (për shembull `Madhe`) dhe shtypni {{ui:Ruaj vlerat aktuale}} ose {{key:Enter}}.

Konfigurimi i ri shënohet si **aktiv**. Nëse ndryshoni një parametër më pas, shfaqet **aktiv, ndryshuar që nga**, kështu e dini që pjesa nuk përputhet më me të.

## Ndrroni, përditësoni, riemërtoni, fshini

- {{ui:Apliko}} i cakton parametrat vlerat e atij konfigurimi dhe e ri-ndërton pjesën.
- {{ui:Përditëso}} i ruan vlerat aktuale në atë konfigurim.
- Për ta riemërtuar, shkruajeni emrin e ri në kutinë e tij dhe shtypni {{key:Enter}}.
- {{ui:Fshi}} e heq konfigurimin. Parametrat mbajnë vlerat e tyre.

Secili prej këtyre është një hap i vetëm: {{key:Mod+Z}} kthen mbrapsht. Nëse riemërtoni një parametër, çdo konfigurim ndjek emrin e ri; nëse fshini një, ai del nga të gjitha.

## Ndizni dhe fikni veçori në një konfigurim

Një konfigurim mban gjithashtu cilat veçori janë të fikura, kështu që një pjesë mund të ketë versione **me** dhe **pa** diçka: vrima montimi, një prerje këndi, një shtesë.

1. Fikni veçorinë: klikoni te historia, pastaj {{ui:Pezullo}} te {{ui:Vetitë}}.
2. Ruajeni konfigurimin si zakonisht, për shembull `Pa vrima`. Rreshti i tij liston çfarë fik.
3. Ndizni sërish veçorinë ({{ui:Riaktivizo}}) dhe ruani një konfigurim tjetër, për shembull `Me vrima`.

Pasi një konfigurim fik ndonjë veçori, aplikimi i një konfigurimi fik veçoritë e tij dhe **ndez çdo veçori tjetër**, së bashku me vlerat e parametrave të tij, në një hap të vetëm. Një konfigurim i ruajtur përpara se ndonjë veçori të fikej llogaritet si "gjithçka e ndezur". {{ui:Përditëso}} i ruan veçoritë siç janë tani, së bashku me vlerat.

Një pjesë konfigurimet e së cilës fikin veçori ruhet si version më i ri i skedarit: një PartCraft më i vjetër thotë se skedari është nga një version më i ri, në vend që ta hapë pa to.

:::note
Tabela CSV e projektimit mban vetëm vlerat e parametrave. Importimi i një tabele mbi një konfigurim ndryshon vlerat e tij dhe mban veçoritë që fik; `--table` i vijës së komandës ndërton vetëm vlerat.
:::

Skedari i pjesës ruhet me konfigurimet dhe me atë që ishte aktiv. Pjesa hapet me vlerat me të cilat u ruajt.

## Sillni ose nxirrni një tabelë projektimi

Një tabelë projektimi është një skedar CSV me një kolonë për çdo parametër dhe një rresht për çdo konfigurim:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

Kolona e parë mund të quhet `name`, `config` ose `configuration`; çdo kolonë tjetër duhet të jetë emri i një parametri të pjesës. Qelizat janë numra, me njësi nëse dëshironi (`8in`). Një qelizë bosh e lë atë parametër jashtë rreshtit.

- {{ui:Importo CSV}} shton çdo rresht si konfigurim. Një rresht me emrin e një konfigurimi ekzistues e zëvendëson atë. Importimi është një hap i vetëm.
- {{ui:Eksporto CSV}} i shkruan konfigurimet jashtë. Kur s'ka ende asnjë, shkruan një rresht me vlerat aktuale, si pikënisje për një fletë llogaritëse.

Një emër konfigurimi që një fletë llogaritëse do ta lexonte si formulë (që fillon me `=`, `+`, `-` ose `@`) shkruhet me një `'` përpara.

## Të gjitha madhësitë njëherësh

{{ui:Paketa e variantesh…}} nën **Konfigurimet** ndërton çdo konfigurim, ose disa të zgjedhur, si STEP, IFC, DWG dhe një pamje paraprake në një zip të vetëm, me një tabelë të parametrave të tyre: shih [Bëni një paketë variantesh nga konfigurimet tuaja](topic:variant-pack).

Mjeti i vijës së komandës ndërton një skedar për çdo rresht të një tabele projektimi CSV:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Eksportoni konfigurimet si CSV së pari, pastaj jepni atë skedar me `--table`. Shih [Skriptet dhe vija e komandës](topic:scripts-and-cli). Një pjesë e ruajtur si skript mban konfigurimet e saj në një rresht `configs json …`.
