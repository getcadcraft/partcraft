---
title: Atsauces plaknes, asis un punkti
summary: Veidojiet plaknes, kas nobīdītas no virsmas, leņķī, caur trim punktiem, pa vidu, pieskaras cilindram, perpendikulāras malai vai iet caur malu un punktu; asis; punktus malu vidū, krustpunktos un plakņu stūros; skicējiet uz tiem un izmantojiet tos kā rotāciju asis, masīvu virzienus un spoguļa plaknes.
keywords: datums, starp objektiem, viduspunkts, krustpunkta punkts, plakne caur malu un punktu, atsauces plakne, darba plakne, konstrukcijas plakne, datuma plakne, nobīdīta plakne, plakne leņķī, vidusplakne, pieskares plakne, atsauces ass, konstrukcijas ass, datuma ass, atsauces punkts, darba punkts, skicēt uz plaknes
from: e7eb6fc1
---

Atsauces ģeometrija ir pamats, uz kura veidojat elementus: **plakne**, uz kuras skicēt, ja nav virsmas, **ass**, ap kuru rotēt vai veidot masīvu, un **punkts**, kur apturēt izvilkumu. Tai nav pašai savas materiālas daļas. Plaknes skatā redzamas kā gaiši kvadrāti, asis kā punktētas līnijas, punkti kā mazi krusti; visas trīs pievienojas vēsturei un seko tam, no kā tās veidotas, kad maināt izmēru augstāk.

Tās atrodas grupas Elementi izvēlnē {{ui:Vairāk}}: {{ui:Plakne}}, {{ui:Ass}}, {{ui:Punkts}}.

## Veidot plakni

1. Noklikšķiniet uz plakanas virsmas vai pamatplaknes vēsturē, lai sāktu no tās (pēc izvēles).
2. Izvēlieties {{ui:Vairāk}}, tad {{ui:Plakne}}. Tā sākas kā nobīdīta plakne 20 % no detaļas izmēra attāluma no tā, ko izvēlējāties (vai no augšējās plaknes).
3. Labajā panelī izvēlieties **Tips** un tā atsauces:

| Tips | Atsauces | Skaitļi |
|---|---|---|
| Nobīde no plaknes vai virsmas | **No plaknes** | **Attālums (mm)**, negatīvs citā pusē |
| Leņķī, caur malu vai asi | **No plaknes**, **Griezt ap** (pasaules ass, ass elements vai izvēlēta taisna mala) | **Leņķis (°)** |
| Caur trim punktiem | **1. punkts**, **2. punkts**, **3. punkts** | — |
| Vidusplakne starp divām | **Pirmā plakne**, **Otrā plakne** (paralēlas: pa vidu; krustojošās: plakne, kas dala leņķi) | — |
| Pieskaras cilindram | **Cilindrs** (cilindriska virsma), **Tuvākais punkts** (kura puse) | — |
| Perpendikulāra malai, punktā | **Mala**, **Punktā** (plakne iet caur malas punktu, kas tam tuvākais, un arī caur punktu) | — |
| Caur malu un punktu | **Taisna mala** (vai ass), **Caur punktu** | — |
| Perpendikulāra malai tās vidū | **Mala** (pa vidu tās garumam, perpendikulāri tajā vietā), vai bez malas **1. punkts** un **2. punkts** (plakne pa vidu starp tiem) | — |

Katrai atsaucei ir poga **Atlasīt**: izvēlieties to, tad noklikšķiniet skatā. Plaknes laukā var ievietot pamatplakni, atsauces plakni vai plakanu virsmu; punkta laukā: malas galu (noklikšķiniet tuvu tam), punkta elementu vai vietu uz virsmas; malas laukā: malu. {{key:Esc}} atceļ atlasi. **Apgriezt normāli** apgriež plakni (virzienu, kurā uz tās vērsta skice).

Šajā versijā lauks, kam vajadzīga mala vai cilindra virsma (Pieskaras cilindram un Malas lauki), atbild "vēl nav pārbūvēts": tā vietā izmantojiet punktus vai asi.

## Skicēt uz plaknes

Atlasiet plakni (vēsturē vai noklikšķinot uz tās kvadrāta skatā) un izvēlieties {{ui:Skice}} vai **Skicēt uz tās** tās panelī. Skice seko plaknei: ja maināt plaknes attālumu, skice un visi uz tās esošie elementi pārvietojas arī.

## Asis un punkti

- {{ui:Ass}}: caur diviem punktiem, cilindra vai konusa ass, vietā, kur krustojas divas plaknes, pa taisnu malu (vai apļveida malas ass), vai perpendikulāri virsmai caur punktu.
- {{ui:Punkts}}: koordinātēs, virsotnē vai skices punktā, vai apļveida malas centrā, kā arī punkti "starp objektiem":

| Punkta tips | Atsauces |
|---|---|
| Malas vidus (vai starp diviem punktiem) | **Mala** (pa vidu tās garumam, arī lokiem un līknēm), vai bez malas **1. punkts** un **2. punkts** |
| Kur mala vai ass krusto virsmu vai plakni | **Mala** (taisna vai izliekta) vai ass, un **Krusto plakni** (plakne vai plakana virsma) vai **Vai virsma** (plakana virsma vai cilindrs). Aplis krusto plakni divreiz, bet līnija cilindru arī divreiz: **Otrs krustojums** ņem otro |
| Kur krustojas trīs plaknes | **Pirmā**, **Otrā** un **Trešā plakne** (plaknes vai plakanas virsmas) |

Katrs no tiem neizdodas ar vienkāršu ziņojumu, ja atsauces neatbilst: līnija paralēla plaknei, līnija, kas nekrusto cilindru, mala, kas nesasniedz plakni, trīs plaknes, kas nekrustojas vienā punktā, vai punkts uz līnijas, ar kuru tam vajadzētu nofiksēt plakni.

Izmantojiet tos citos elementos:

| Kur | Kā |
|---|---|
| Rotācija | **Ass**: izvēlieties ass elementu no saraksta (tam jāatrodas skices plaknē) |
| Apļveida masīvs | **Ass**: ass elements |
| Lineārs masīvs | **Virziens**: ass elements vai plakne (tās normāle) |
| Spogulis | **Spoguļa plakne**: atsauces plakne |
| Izvilkums | **Gals**: Līdz virsmai vai plaknei, Līdz virsotnei (punkta elements). Šajā versijā vēl nav pārbūvēts (tam vajadzīgs precīzs kodols) |
| Slīpums | **Neitrālā plakne** |

## Kad atsauce ir pazudusi

Plakne, kas veidota no virsmas, kuras vairs nav, neizdodas ar ziņojumu, kurā tā minēta, piemēram: "Virsma, uz kuras tā atrodas, no Extrude1 ir pazudusi." Tā nekad netiek pārvietota uz citu virsmu. Uz tās esošās skices un elementi tiek atzīmēti kā "nav pārbūvēts", līdz izvēlaties jaunu atsauci; pārējā detaļa paliek tāda, kāda bija.

:::note
Šajā versijā katru detaļu veido ar tīkla kodolu, kas veido plaknes, asis un punktus no pamatplaknēm, plakanām virsmām, kas izveidotas ar izvilkumu vai rotāciju, skices punktiem, koordinātēm un citiem atsauces elementiem. Viss, kam vajadzīga mala, malas gals vai izliekta virsma, prasa precīzu kodolu: šajā versijā vēl nav pārbūvēts ("Tas izmanto detaļas virsmu vai malu, ko var atrast tikai precīzs kodols: šajā versijā vēl nav pārbūvēts.").
:::
