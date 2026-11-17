---
title: Kontrollo një montim për përplasje dhe lëvizje
summary: Gjej pjesët që mbivendosen me Përplasje, tërhiq çdo vlerë të çdo lidhjeje për të parë lëvizjen, dhe skano një lidhje nëpër diapazonin e saj për të gjetur ku përplasen pjesët.
keywords: ndërhyrje, zbulim ndërhyrjesh, përplasje, kolizion, mbivendosje, përshtatje fili, mospërputhje e thellësisë së filit, sipërfaqe që prekin, fshih, filtër, lëvizje, studim lëvizjeje, skanim, diapazoni i lëvizjes, kontroll
from: 9c98db46
---

Dy kontrolle funksionojnë mbi pjesët ashtu si janë vendosur: **Përplasje** kërkon materialin që mbivendoset tani, dhe **kontrolli i lëvizjes** zhvendos një lidhje nëpër diapazonin e saj dhe kërkon mbivendosje gjatë rrugës.

## Kontrollo për ndërhyrje

1. Hap ose ndërto një montim (shih [Ndërto një montim me lidhje](topic:build-assembly)).
2. Zgjidh {{ui:Përplasje}}.

Shiriti i statusit raporton rezultatin:

- "Asnjë ndërhyrje midis 3 pjesëve (… ms)." Asgjë nuk mbivendoset.
- "Ndërhyrje: Flange1 dhe Flange2: Mbivendosje, 2.5 mm³." Çdo çift, çfarë lloj rezultati është dhe vëllimi që ndajnë.

Kutia **Montimi** në të majtë shfaq **Ndërhyrje**: "Asnjë", "2 rezultate" (ato që shfaqen), ose "Nuk është kontrolluar". Kur nuk ka asgjë të zgjedhur, paneli i djathtë liston çdo rezultat nën **Ndërhyrje**.

Rezultati pastrohet sa herë ndryshon montimi. Nisni {{ui:Përplasje}} sërish pasi të keni lëvizur një lidhje. Çdo çift pjesësh kontrollohet kundër çdo tjetri, kështu që montimet e mëdha duan më shumë kohë.

### Llojet e rezultateve

| Lloji | Do të thotë |
|---|---|
| **Mbivendosje** | Pjesët ndajnë vëllim: një përplasje e vërtetë. |
| **Mospërputhje e thellësisë së filit** | Vëllimi i përbashkët është brenda filit të njërës pjesë, por përtej atij të tjetrës: një bulon i fijuar më thellë se vrima e tij, ose një kërcell i lëmuar në një vrimë me fill. |
| **Përshtatje filli (fije kozmetike)** | Vëllimi i përbashkët është brenda filit të të dyja pjesëve: një bulon në një vrimë me fill. Fijet kozmetike vizatohen në madhësinë e plotë të filit, kështu që gjithmonë mbivendosen pak. |
| **Sipërfaqe që prekin** | Nuk ka vëllim të përbashkët, por sipërfaqe në kontakt (brenda 0.001 mm). |

Fijet e modeluara (shih [Fijet te boshtet dhe vrimat, të vizatuara ose të modeluara](topic:threads)) janë gjeometri e vërtetë: ajo që ndajnë është një **Mbivendosje**.

### Fshih atë që nuk ke nevojë të shohësh

Nën **Ndërhyrje**, **Shfaq** ka një kuti për çdo lloj: hiq shenjën te **Përshtatje filli** dhe **Sipërfaqe që prekin** për të parë vetëm përplasjet që kanë rëndësi. **Fshih këtë çift** pranë një rezultati fsheh atë çift pjesësh, sido që të jetë lloji i tij. Rezultatet e fshehura numërohen ("2 rezultate të fshehura nga këto filtra"), dhe **Shfaq përsëri çiftet e fshehura** i kthen çiftet. Shiriti i statusit numëron edhe rezultatet e fshehura.

Filtrat ruhen me montimin, dhe çdo ndryshim është një hap {{key:Mod+Z}}. **Skano një lidhje për përplasje** (më poshtë) i përdor edhe ata. Një montim me filtra ruhet si versioni 4, të cilin versionet më të vjetra të PartCraft refuzojnë ta hapin në vend që të humbasin filtrat.

## Shiko lëvizjen

1. Zgjidh një lidhje që lëviz (çdo lloj përveç të ngurtës) në listën në të majtë.
2. Tërhiq rrëshqitësin nën një nga vlerat e saj, si **Kënd (°)** ose **Zhvendosja (mm)**. Pjesa lëviz ndërsa tërheq.
3. Lësho. Pozicioni i ri mbahet dhe mund të zhbëhet me {{key:Mod+Z}}.

Mund të shkruash edhe një kënd ose zhvendosje në kuti dhe të shtypësh {{key:Enter}}.

Një lidhje në një unazë të mbyllur (një mekanizëm) zhvendos të gjithë unazën: vlera që tërheq mbahet dhe lidhjet e tjera të unazës ndjekin (shih [Unaza të mbyllura](topic:build-assembly#closed-loops-linkages)).

## Skano një lidhje për përplasje

1. Zgjidh një lidhje që lëviz.
2. Për një lidhje me disa vlera (cilindrike, e sheshtë, sferike, kunj në brazdë), zgjidh cilën të skanosh te **Kontrollo lëvizjet**.
3. Zgjidh {{ui:Kontrollo lëvizjen për përplasje}}.

PartCraft e zhvendos atë vlerë nëpër 25 pozicione në 24 hapa të barabartë, të tjerat mbeten ashtu si janë: një kënd nga −180° në 180° (një prirje nga −90° në 90°), një gjatësi nga minus në plus madhësia e pjesës më të madhe. Raporton:

- "Asnjë përplasje kudo për Kënd (°) nga -180 në 180 (u kontrolluan 25 pozicione)."
- "6 nga 25 pozicionet përplasen, i pari te Kënd (°) 45 (12.4 mm³)." Pozicioni i parë që përplaset dhe mbivendosja atje.

Butoni është i zbehur për lidhjet e ngurta, sepse ato nuk lëvizin. Skanimi kontrollon vetëm pozicionet, jo rrugën ndërmjet tyre: një pjesë e hollë mund të kalojë përmes një tjetre midis dy hapave.

:::note
Kontakti dhe graviteti nuk janë ndërtuar. Pa kufij, skanimi mbulon të gjithë diapazonin; jep vlerës **Kufijtë** (shih [Lista e pjesëve, pamjet e shpërthyera dhe pjesët në lëvizje](topic:assembly-bom-explode)) dhe skanimi mbulon vetëm ato, kështu që një menteshë që hapet 90° kontrollohet vetëm në 90°.
:::

## Një studim lëvizjeje

**Montimi › Lëvizja** e shtyn vlerën e një lidhjeje nga një fillim në një fund gjatë një kohe që ti jep (shpejtësi konstante, e butësuar, sinusoidale, ose dalje dhe kthim), e vendos montimin në çdo hap me lidhjet dhe unazat e mbyllura të tij, dhe raporton çfarë përplaset dhe sa afër vijnë pjesët. **Shto një pikë** ndjek mesin e një pjese ose një pike që kliko mbi të, dhe kartela vizaton pozicionin, shpejtësinë dhe përshpejtimin e saj, vlerën e lidhjes dhe hapësirën kundrejt kohës; **Ruaj CSV** dhe **Ruaj grafikun** i shkruajnë ato. Shpejtësia dhe përshpejtimi llogariten nga pozicionet e regjistruara, kështu që një kulm i mprehtë ndërmjet hapave lexohet i ulët: përdor më shumë hapa.

Pas **Ekzekuto**, shiriti **Hap përmes ekzekutimit** e zhvendos montimin në çdo hap të kohës (koha, vlera dhe nëse pjesët përplasen atje shfaqen pranë tij); lidhja e mban vlerën e vet, dhe **Kthehu te modeli** e kthen montimin në vend. Cilësimet e studimit ruhen në skedarin e montimit; rezultatet e tij riprodhohen nga **Ekzekuto**.

## Një studim kontakti

**Montimi › Kontakti** tregon si një montim i mban ngarkesat aty ku pjesët shtypen mes tyre. Çdo pjesë sjell mbështetjet, ngarkesat dhe materialin e vet nga studimi i vet **Simulimi** (një sipërfaqe e fiksuar në një pjesë, një forcë në një tjetër); këtu zgjedh çiftet. **Shto një çift**, pastaj **Zgjidh anën A** dhe kliko sipërfaqe të një pjese, **Zgjidh anën B** dhe kliko sipërfaqe të një pjese tjetër (klikimi në një sipërfaqe të zgjedhur e heq; Esc ose **Përfundo** mbaron zgjedhjen). Një çift është **Pa fërkim** (pjesët shtypen por rrëshqasin) ose **I lidhur** (qëndrojnë bashkë); faktori i ngurtësisë tregon sa fort kontakti i reziston zhytjes (20 është një fillim i mirë, 1000 për një grumbull çeliku të ngurtë).

**Llogarit** e ekzekuton ngarkesën në hapa dhe shfaq forcën e kontaktit, zhytjen më të thellë, lëvizjen më të madhe dhe stresin më të madh. Një pjesë pa çift lihet jashtë dhe kartela e thotë këtë. Kontakti pa fërkim nuk mban një pjesë anash: jepi çdo pjese një mbështetje në studimin e vet të Simulimit, ose lidhe, përndryshe hapat mund të mos stabilizohen. Çiftet dhe cilësimet ruhen në skedarin e montimit.

**Eksporto skedarin CalculiX** shkruan të njëjtin model si një skedar hyrjeje CalculiX (.inp). CalculiX është një program i veçantë që ti e instalon dhe e nis vetë; **Lexo rezultatet CalculiX (.frd)** i lexon përsëri zhvendosjet mbi rrjetën e këtij montimi dhe refuzon një skedar të bërë për një rrjetë tjetër. Zgjidhësi këtu mbështet plastike, por jo dinamikë eksplicite, dhe asgjë këtu nuk është një analizë e certifikuar: një inxhinier duhet të kontrollojë çdo gjë që ka rëndësi.
