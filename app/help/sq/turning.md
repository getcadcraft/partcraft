---
title: Tornimi në torno
summary: Sipërfaqja, trashja, përfundimi, kanali, ndarja e pjesës, filetimi dhe shpuarja e një pjese të tornuar, nga profili që pjesa bën kur rrotullohet. Veglat e tornos, avancimet për rrotullim, postprocesorët e tornos, dhe çfarë nuk është vërtetuar.
keywords: tornim, torno, sipërfaqe, trashje, përfundim, kanal, kanalim, ndarje pjese, filetim, g32, g33, g96, shpejtësi konstante sipërfaqe, css, rreze hunde, plloçkë, shufër, mandrinë, diametër, avancim për rrotullim, g71, g76
from: d8cc53b0
---

Prodhimi ka shtatë operacione për torno. Ato punojnë në çdo pjesë: ajo që pritet është **profili që pjesa bën kur rrotullohet** rreth mesit të materialit, kështu që një pjesë që nuk është e rrumbullakët tornohet deri te forma e rrumbullakët që e mban.

**Asgjë këtu nuk është ekzekutuar në një torno.** Shtigjet janë kontrolluar me gjeometrinë nga testet; dy postprocesorët e tornos ndjekin kodet e dokumentuara të kontrolleve. Vërteto një program në simulatorin e kontrollit tënd dhe në ajër fillimisht.

## Konfigurimi

Te skeda **Konfigurimi**:

- **Boshti i veglës** është boshti i shtyllës, Z i tornos. Përpara pjesës është te +Z; mandrina mban skajin tjetër.
- **Blloku**: zgjidh {{ui:Cilindër}}, shufrën. Zhvendosja e saj e sipërme është ajo që heq prerja e sipërfaqes.
- **Origjina e punës**: një qendër në majën e materialit ose në majën e modelit vendos Z0 në fytyrën e përparme, vendi i zakonshëm.
- **Kontrolli**: {{ui:Torno stil Fanuc (.nc)}} ose {{ui:Torno LinuxCNC (.ngc)}}. Një postprocesor frezimi refuzon një program tornimi dhe e thotë këtë.
- **Shpejtësia maksimale e boshtit**: kufiri nën të cilin mbahet shpejtësia e sipërfaqes.

{{ui:Më shumë}} në shiritin e Prodhimit lista shtatë operacionet e tornimit në krye të skedës **Operacionet**. Operacioni i parë që shton sjell me vete veglën e vet: një **plloçkë tornimi** (rreze hunde, kënd plloçke, kënd skaji prerës) ose një **lamë kanali** (gjerësi, rreze qoshe, sa thellë arrin). Ndryshoji në skedën **Veglat**. Avancimet janë për rrotullim, dhe shpejtësia është një shpejtësi sipërfaqeje në m/min që kontrolli e mban ndërsa diametri ndryshon; jep një vegël rpm të vetin për ta fiksuar shpejtësinë.

## Operacionet

| Operacioni | Çfarë bën |
|---|---|
| {{ui:Faqe}} | Sheshon faqen e përparme të shufrës deri te pjesa, një hap në thellësi në një herë, nga jashtë deri pak përtej qendrës. |
| {{ui:I trashë}} | Kalime përgjatë Z me një **thellësi prerjeje** larg njëra-tjetrës, deri te kontura plus **materiali për t'u lënë**; pastaj një herë përgjatë konturës për të hequr shkallët. Një luginë midis dy shpatullave hyhet me një zhytje të një thellësie prerjeje. |
| {{ui:Përfundimi}} | Një kalim përgjatë konturës me një pjesë të avancimit të veglës. |
| {{ui:Kanal}} | Zhyt lamën anë për anë aty ku mund të marrë më shumë se kufiri i materialit që mbetet: kanalet që plloçka e tornimit nuk mund t'i arrijë. **Nga / Deri Z** e ngushton. |
| {{ui:Ndaj pjesën}} | Pret pjesën pak prapa murit të saj të pasmë, deri pak përtej qendrës, me zhytje të përsëritura nëse cakton një. |
| {{ui:Filetim}} | Një filetim i jashtëm: diametri i madh, hapi, gjatësia, numri i kalimeve. Thellësia 0 do të thotë 0,6134 × hapi (një filetim 60°). Çdo kalim merr të njëjtën sipërfaqe çipi; kalimet e elastikut përsëritin të fundit. |
| {{ui:Shpuarje}} | Një burgi mbi vijën e qendrës deri në një thellësi, me zhytje të përsëritura. |

## Si mbahet vegla larg pjesës

Plloçka trajtohet për atë që është: rrethi i hundës së saj, dhe pas tij buza e pasme, një vijë e drejtë kënd i së cilës është 180° minus këndi i skajit prerës dhe këndi i plloçkës. Ajo formë ulet mbi konturën në çdo pikë përgjatë Z, dhe shtegu është vendi ku ajo pushon. Pra:

- **Rrezja e hundës është tashmë në shteg.** Postprocesorët nuk shkruajnë `G41` ose `G42`; koordinatat janë pika e programuar e veglës (qoshja e katrorit rreth hundës).
- Plloçka **nuk mund të ndjekë një mur më të pjerrët se buza e pasme**. Një kanal pas një shpatulle lihet rehat, dhe operacioni i përfundimit thotë sa nga kontura nuk mundi ta arrijë. Një operacion {{ui:Kanal}} e merr atë.
- Materiali gjurmohet përgjatë Z pas çdo prerjeje, kështu që trashja nuk pret ajrin, kanalimi gjen çfarë mbetet, dhe çdo operacion tregon vëllimin që hoqi dhe nëse preu në pjesë.

## Kufijtë

- **Vetëm tornim i jashtëm**: pa shufër shpuarjeje, pa kanale ose filetime të brendshme, pa kanale në fytyrë.
- Një bosht, pjesa e mbajtur në −Z. Pa nën-bosh, pa vegla të gjalla, pa bosht C ose Y, pa mbështetëse të qëndrueshme ose lëvizje bishti.
- Shtigjet janë lëvizje të drejta: kurbat janë vija të shkurtra brenda tolerancës (pa `G2`/`G3`), dhe trashja dhe filetimi shkruhen kalim pas kalimi (pa cikle `G71` ose `G76`).
- Filetimi është kalime të drejta me një tërheqje të drejtë në fund: jep filetimit një kanal lehtësimi. Filetimi nuk shfaqet në material.
- Shpuarja në qendër nuk e ndryshon modelin e materialit.
- Mbajtësi, kulla dhe mandrina nuk kontrollohen. Vendos **Ndalo te Z** për ta mbajtur veglën larg nofullave.
- Avancimet dhe shpejtësitë janë vlera fillestare, si për frezimin.
