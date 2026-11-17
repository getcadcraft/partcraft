---
title: Zinxhirët e tolerancave
summary: Zgjidhni një zinxhir sipërfaqesh nëpër pjesët e një montimi dhe shihni sa mund të ndryshojë hapësira në fund të tij, në rastin më të keq dhe me RSS, me dimensionet që kanë më shumë ndikim të renditura të parat.
keywords: zinxhir tolerancash, stack-up, analizë tolerancash, zinxhir tolerancash, zinxhir dimensionesh, lak, hapësirë, pastrim, rasti më i keq, rss, rrënja e shumës së katrorëve, tolerancë statistikore, kontribuuesit, ndjeshmëria, gd&t, tolerancë e përgjithshme, iso 2768
from: cbdb3159
---

Një **zinxhir tolerancash** mbledh dimensionet përgjatë një zinxhiri nëpër disa pjesë, për të parë sa mund të ndryshojë një rezultat, zakonisht një hapësirë, kur çdo pjesë bëhet kudo brenda tolerancave të saj.

## Zgjidhni zinxhirin

1. Hapni një montim dhe zgjidhni {{ui:Zinxhiri i tolerancave}} në grupin Assembly. Mbi pamje hapet një kartë.
2. Zgjidhni përgjatë çfarë matet zinxhiri: X, Y ose Z e montimit, ose {{ui:Normalja e sipërfaqes së parë}}.
3. Shtypni {{ui:Zgjidh zinxhirin}} dhe klikoni faqet nëpër të cilat kalon zinxhiri, **me radhë**: filloni nga njëra anë e hapësirës, kaloni nëpër pjesët, dhe mbaroni te ana tjetër e hapësirës.
4. Shtypni {{ui:U krye}} ose Enter. Backspace heq klikimin e fundit; Esc anulon.

Dy klikime në të njëjtën pjesë e bëjnë dimensionin e asaj pjese (distancën e saj përgjatë zinxhirit). Një klikim në një pjesë tjetër bën një **ndërfaqe** ndërmjet tyre, aty ku takohen pjesët; ajo nuk ka tolerancë përveç nëse shkruani një të tillë. Lidhjet shtojnë ose zbresin sipas drejtimit të zinxhirit, dhe e mbyllin lakun: hapësira nominale është ajo që tregon modeli.

Mund të **Shtoni një lidhje** edhe me dorë, dhe të shkruani nominalin e saj, tolerancën dhe nëse shton (+) ose heq (−).

## Jepni çdo lidhjeje tolerancën e saj

Çdo lidhje ka një devijim **sipër** dhe një **poshtë** (për shembull +0.1 dhe −0.05). **Tolerancë nga** i plotëson ato nga pjesa:

- **Tolerancë e përgjithshme**: fusha Tolerance e bllokut të titullit të pjesës (shih [Vizatimi në PDF](topic:drawing-pdf)), kur lexon ±0.1, +0.2/-0.1 ose ISO 2768-f, -m, -c ose -v (tolerancat lineare ISO 2768-1, sipas madhësisë së lidhjes). Toleranca e përgjithshme e një pjese përdoret menjëherë kur zgjidhet zinxhiri.
- **GD&T**: çdo kornizë kontrolli elementi në vizatimin e pjesës. Zonat e pozicionit, profilit dhe rrotullimit japin ± gjysmën e tolerancës. Një tolerancë orientimi ose formë zakonisht gjendet brenda tolerancës së madhësisë tashmë: shtojeni vetëm aty ku zinxhiri takon sipërfaqen e kontrolluar. Me Ⓜ ose Ⓛ zona merret në madhësinë e deklaruar; toleranca bonus nuk llogaritet.
- **E shkruar**: çdo numra që shkruani.

## Lexoni rezultatet

- **Hapësira, nominale** dhe, kur tolerancat janë të pabarabarta, **Hapësira, mesatare**: +0.2/−0 dhe +0/−0.1 zhvendosin mesin e intervalit.
- **Rasti më i keq**: çdo tolerancë në kufirin e vet njëkohësisht. Hapësira nuk mund të dalë kurrë jashtë kësaj.
- **RSS** (rrënja e shumës së katrorëve): çdo tolerancë merret si tre devijime standarde të një shpërndarjeje normale, dhe shuma e katrorëve të tyre merr rrënjën katrore. Shumica e montimeve bien shumë brenda rastit më të keq; ky është vlerësimi i zakonshëm për pjesë të prodhuara në seri.
- Jepni **Hapësira të paktën** dhe **Hapësira më së shumti** për të parë nëse rasti më i keq qëndron gjithmonë brenda, dhe sa montime në një milion pritet RSS jashtë.
- Kolona **#** i rendit lidhjet sipas **pjesës së tyre** të RSS: shtrëngoni të parat për ndryshimin më të madh.

{{ui:Ruaj CSV}} shkruan lidhjet, pjesët e tyre dhe rezultatet. Zinxhirët ruhen në skedarin e montimit, dhe çdo ndryshim është një hap për {{key:Mod+Z}}.

:::note
Një zinxhir tolerancash është në një drejtim. Ai nuk ndjek këndet ose kthesat përgjatë zinxhirit, dhe nuk i lexon tolerancat e madhësisë nga skicat: jepini ato si toleranca të shkruara ose nëpërmjet bllokut të titullit.
:::
