---
title: Rāmji no tērauda profiliem
summary: Novietojiet tērauda profilus pa vienas vai vairāku skiču līnijām, lai izveidotu metinātu rāmi: ieķīlētus vai sastumtus stūrus, savstarpēji pielāgotus elementus, galu vāciņus, stiprinājuma ribas un griežamo daļu sarakstu ar garumiem un galu leņķiem.
keywords: konstrukcijas elements, rāmis, tērauda rāmis, caurule, kvadrātveida caurule, hss, rhs, shs, caurule, chs, platflanšu sija, I-sija, W sija, ipe, hea, heb, kanāls, upn, leņķis, ieķīlējums, ieķīlēt, sastumts savienojums, izgriezt, galu vāciņš, stiprinājuma ribas, griežamo daļu saraksts
from: 59071e5a
---

**Konstrukcijas elements** novieto tērauda profilu pa katru skiču līniju, ko izvēlaties. Zīmējiet rāmi kā līnijas (katra līnija ir viens elements), tad izvēlieties profilu: elementi tiek veidoti, to stūri tiek apgriezti un pagarināti, un griežamo daļu saraksts norāda, cik garu katru gabalu griezt un kādā leņķī.

## Rāmja izveide

1. Uzzīmējiet rāmi kā līnijas skicē, piemēram, taisnstūri uz augšējās plaknes. Līnijas, kas atzīmētas kā konstrukcija, netiek ņemtas vērā.
2. Ar izvēlētu skici izvēlieties {{ui:Vairāk}} › {{ui:Konstrukcijas elements}}. Katrai skices līnijai tiek piešķirts elements.
3. Panelī izvēlieties profila **Saime** un **Formāts**. Saimes ir AISC tabulas (W, S, C, L, HSS caurules, caurule) un EN 10365 (IPE, HEA, HEB, UPN).

### Rāmis 3D

Līnijas no vairākām skicēm veido vienu rāmi: augšējais taisnstūris, kas skicēts plaknē augstāk, un kājas, kas skicētas uz vertikālām plaknēm, savienojas galos 3D. Panelī zem **Pa līniju virzieniem** atzīmējiet katru skici, kuras līnijas elementi seko. Gali, kas saskaras ar mikrometra precizitāti, tiek savienoti.

## Profila novietošana uz līnijas

- **Pagriezt (°)** pagriež profilu ap savu līniju. Sija stāv ar savu dziļumu vertikāli (vertikālam elementam dziļums vērsts uz priekšu).
- **Uz līnijas** izvēlas, kurš profila punkts atrodas uz līnijas: centrs, stūris vai kāda malas vidus profila kontūrā. „Apakšā vidū” novieto rāmi virs skices plaknes, nevis caur to.

## Stūri un savienojumi

| Kur elementi saskaras | Kas notiek |
|---|---|
| Divi elementi gals pie gala, **Stūri: Ieķīlēts** | Abi tiek griezti plaknē vidū starp tiem, kā attēla rāmī |
| Divi elementi gals pie gala, **Stūri: Sastumts** | Pirmais turpinās līdz otrā elementa tālākajai virsmai; otrs tiek griezts taisni pie pirmā tuvākās virsmas |
| Elements beidzas uz cita elementa vidus (T) | Tas tiek griezts, lai piegultu otra elementa ārpusei |
| Trīs vai vairāk beidzas vienā punktā | Pirmais iet taisni tālāk par pārējiem; pārējie tiek griezti, lai piegultu tam |

Pirmais elements ir tas, kura līnija ir pirmā: līnijas saglabā zīmēšanas kārtību, skice pa skicei, tādā kārtībā, kādā skices tika atzīmētas.

## Galu vāciņi un stiprinājuma ribas

- **Galu vāciņi** aizver katru brīvu galu ar plāksni profila kontūrā, ar jūsu iestatīto biezumu, ārpus gala.
- **Stiprinājuma ribas** ievieto trīsstūrveida plāksni katrā stūrī, kur divi elementi saskaras leņķī: **Ribas izmērs** gar katru elementu no stūra, **Ribas biezums** šķērsām, centrēts uz stūra plaknes.

## Griežamo daļu saraksts

Panelis rāda katru gabalu, identiskos gabalus apvienojot: profilu, garumu (no gara punkta līdz garam punktam, kā to atzīmētu zāģēšanai), kā katrs gals ir griezts (taisni, leņķī no taisnas, vai griezts, lai piegultu) un kuri elementi tie ir. Galu vāciņi un ribas tiek uzskaitīti ar saviem izmēriem. {{ui:Saglabāt griežamo daļu sarakstu (CSV)}} to saglabā izklājlapai.

Elements, kas griezts, lai piegultu pret caurules ar noapaļotiem stūriem, nedaudz iesniedzas tās stūra rādiusā, tāpēc tā garums no gara punkta līdz garam punktam ir dažus milimetrus lielāks nekā sprauga starp virsmām.

## Ierobežojumi

- Elementi seko tikai taisnām līnijām; loki un splaini skicē netiek ņemti vērā.
- Savienojumi tiek griezti, nevis metināti: metinājuma šuves netiek zīmētas, un rāmis ir viens ķermenis.
- Profili tiek zīmēti pēc tabulas izmēriem: W profili ar saknes noapaļojumu, S profili un kanāli ar paralēlām atlokām, caurules ar stūru rādiusiem; caurumi, galu sagatavošana un metinājuma spraugas netiek veidotas automātiski.
- Konstrukcijas elementus veido tīkla kodols. Ar ieslēgtu precīzo kodolu (tikai izstrādātājiem) tiek par to paziņots, un tie netiek veidoti.
