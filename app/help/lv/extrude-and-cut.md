---
title: Izvelciet izcilni un izgriezt caur to
summary: Pārveidojiet skici cietā ķermenī ar Izvilkt, iestatiet aklo, vidusplaknes, līdz vai divvirzienu dziļumu, slīpumu vai vienu skices kontūru, pēc tam skicējiet uz virsmas un izgriezt dobumu vai caurejošu spraugu ar Izgriezt.
keywords: izvilkt, izcilnis, izvilkts izcilnis, izgriezt, izvilkts griezums, dobums, caur visu, akls, vidusplakne, atpakaļ, dziļums, izgriezt-izvilkt, izcilnis-izvilkt, paplātne, līdz virsmai, līdz nākamajai virsmai, līdz virsotnei, nobīde no virsmas, virziens 2, divi virzieni, slīpums, kontūra, reģions, izvēlētās kontūras
from: 3b13ff10
---

{{ui:Izvilkt}} izspiež skices slēgtu profilu taisni ārpus tā plaknes, lai radītu materiālu. {{ui:Izgriezt}} dara to pašu, bet noņem materiālu. Abas ir viena un tā pati funkcija; vēlāk varat vienu pārslēgt uz otru.

## Izvelciet izcilni

1. Zīmējiet slēgtu profilu un aizveriet skici (skatiet [Uzzīmējiet pirmo skici](topic:sketch-basics)). Tā paliek atlasīta.
2. Izvēlieties {{ui:Izvilkt}}.

Parādās 10 mm cietais ķermenis, "Extrude1" pievienojas vēsturei ar savu skici ievilktu zem tā, un statusa josla saka: "Extrude1 pievienots. Mainiet tā skaitļus labajā pusē."

**Kura skice tiek izmantota:** skice, ko tikko aizvērāt, vai skice, kas atlasīta vēsturē. Ja nekas nav atlasīts, PartCraft izvēlas jaunāko skici, ko neizmanto neviena funkcija. Ja tādas nav: "Vispirms izveidojiet skici: izvēlieties plakni, Skice, zīmējiet slēgtu profilu, Iziet."

### Iestatiet dziļumu un virzienu

Labajā panelī:

| Iestatījums | Izvēles | Noklusējums |
|---|---|---|
| **Darbība** | Izcilnis (pievienot materiālu), Griezums (noņemt materiālu), Krustojums (paturēt pārklājumu), Jauns ķermenis (šajā versijā vēl nav izveidots: tam nepieciešams precīzs kodols) | Izcilnis |
| **Beigas** | Akls (dziļums), Vidusplakne (abos virzienos), Caur visu, Līdz virsmai vai plaknei, Līdz nākamajai virsmai, Līdz virsotnei, Nobīde no virsmas | Akls |
| **Dziļums (mm)** | Jebkurš izmērs virs nulles (rādīts aklajam un vidusplaknes režīmam) | 10 |
| **Mainīt virzienu** | Aug uz otru skices plaknes pusi (nav rādīts vidusplaknei) | Izslēgts |

Ierakstiet skaitli un nospiediet {{key:Enter}} vai {{key:Tab}}: detaļa uzreiz tiek pārbūvēta. **Vidusplakne** novieto pusi dziļuma katrā skices pusē.

### Līdz virsmai, nākamajai virsmai vai virsotnei

Šajā versijā tās vēl nav izveidotas: katram "līdz" galam nepieciešams precīzs kodols, un funkcija saka: "Izvilkšana līdz virsmai, nākamajai virsmai vai virsotnei: vēl nav izveidota (nepieciešams precīzs kodols)." Izmantojiet izmērītu aklo dziļumu. Ar precīzu kodolu gali darbotos šādi:

- **Līdz virsmai vai plaknei**: **Līdz** izvēlas plakanu virsmu (Atlasīt un tad noklikšķināt uz tās) vai atsauces plakni. Virsma, kas paralēla skicei, dod precīzu dziļumu; slīpa virsma nogriež galu uz nogāzes. Ja virsma atrodas aiz skices: "… Izmēģiniet Mainīt virzienu."
- **Līdz nākamajai virsmai**: apstājas pie pirmās plakanās ķermeņa virsmas, ar ko izvilkums saskaras (izliektas virsmas šeit netiek atbalstītas, un to norāda).
- **Līdz virsotnei**: apstājas līmenī ar virsotni (noklikšķiniet tuvu malas galam) vai punkta elementu.
- **Nobīde no virsmas**: kā Līdz virsmai, apstājoties **Nobīde (mm)** īsi pirms tās (mērot taisni pret virsmu).

### Divi virzieni, slīpums, viena kontūra

- **Otrs virziens** (Akls): arī izvelk **Otrais dziļums (mm)** uz skices otru pusi.
- **Slīpums (°)**: sāni sašaurinās, kad iet (negatīvs: uz āru), kā novilkums; tikai viens virziens. Šajā versijā vēl nav izveidots (nepieciešams precīzs kodols): atstājiet 0.
- **Reģioni**: **Atlasīt reģionus**, tad noklikšķiniet cilpu iekšpusē, lai izvilktu; tiek izmantoti tikai šie reģioni (aplis kvadrātā: noklikšķiniet apļa iekšpusē cilindram, starp tiem plāksnei ar caurumu). **Visi** atgriež visām cilpām.

Zem tiem **Skices izmēri** uzskaita skices vadošos izmērus, lai varētu mainīt profila izmērus, neatverot skici.

:::note
**Caur visu ir tikai griezumiem.** Izcilnis, kas iestatīts uz Caur visu, neizdodas ar ziņojumu "Caur visu ir paredzēts griezumiem. Izcilnim izmantojiet dziļumu." Pārslēdzot funkciju no Griezums atpakaļ uz Izcilnis, Caur visu jūsu vietā mainās uz Akls.
:::

## Izgriezt dobumu

1. Noklikšķiniet uz plakanas virsmas, kurā vēlaties griezt. Tā izceļas, un labajā panelī parādās **Virsma**.
2. Izvēlieties {{ui:Skice uz šīs virsmas}} (vai {{ui:Skice}} rīkjoslā).
3. Zīmējiet dobuma kontūru, piemēram, taisnstūri, un nosakiet tās izmērus.
4. Izvēlieties {{ui:Iziet}}.
5. Izvēlieties {{ui:Izgriezt}}. Tas sākas kā **Caur visu**: tas noņem materiālu caur visu detaļu.
6. Dobumam iestatiet **Beigas** uz **Akls (dziļums)** un ierakstiet **Dziļums (mm)**.

Griezums iet materiālā, prom no virsmas, uz kuras skicējāt. Ja statusa josla saka: "Šajā skices pusē nav, ko griezt. Izmēģiniet otru virzienu.", atzīmējiet **Mainīt virzienu**.

Skice uz dobuma dibena seko dibenam: mainot dobuma dziļumu, skice pārvietojas līdzi.

## Izvilkt vai nospiest visu virsmu

Lai virsma izceltos tālāk vai ieslēgtos dziļāk, nav jāzīmē tās kontūra. Noklikšķiniet uz plakanas virsmas un pēc tam labajā panelī:

- {{ui:Izvilkt no tās}} izvelk virsmu: PartCraft pievieno skici virsmā ar tās kontūru (caurumi virsmā paliek caurumi) un Izvilkumu 10 mm.
- {{ui:Iegriezt tajā}} iespiež virsmu: tā pati skice un Griezums līdz pusei detaļas.

Abi ir viens solis: {{key:Mod+Z}} noņem skici un funkciju kopā. Jaunā funkcija tiek atlasīta, tāpēc uzreiz ierakstiet skaitli un nospiediet {{key:Enter}}, lai iestatītu tās dziļumu. Kontūra tiek kopēta kā fiksētas līnijas un loki: tā neseko vēlākām virsmas izmaiņām. Ja daļa kontūras nevar tikt nokopēta (brīva forma līkne), skice tā vietā atveras ar to, kas varēja tikt nokopēts; pabeidziet to, tad izvēlieties {{ui:Iziet}} un {{ui:Izvilkt}} vai {{ui:Izgriezt}}.

## Profili ar salām

Skicē var būt vairākas slēgtas cilpas. Blakus esošās cilpas kļūst par atsevišķiem izcilņiem (vai griezumiem); cilpa citas iekšpusē kļūst par caurumu caur izcilni. Piemēram, taisnstūris ar diviem apļiem iekšpusē izvelkas kā plāksne ar diviem caurumiem.

Lai izmantotu tikai dažas cilpas, izvēlieties tās ar **Reģioni** (augstāk); cita funkcija var izmantot citas tās pašas skices cilpas.

## Rediģējiet vēlāk

- Noklikšķiniet uz "Extrude1" vēsturē, lai atgrieztu tā iestatījumus.
- Divreiz noklikšķiniet uz tās skices (ievilktas zem tā), lai atvērtu skici; aizveriet to, lai pārbūvētu.
- Skatiet [Mainiet detaļu caur tās vēsturi](topic:edit-history) par apturēšanu, atgriešanu, pārkārtošanu un dzēšanu.

## Bieži sastopamie ziņojumi

| Ziņojums | Ko darīt |
|---|---|
| "Skicei nav slēgta profila, ko izvilkt." | Skicē nav slēgtas cilpas no cietām līnijām. Aizveriet spraugas vai atgriezeniet konstrukcijas līnijas ar {{key:Q}} |
| "Profils ir atvērts: gals punktā (x, y) nav savienots ar nekādu elementu." | Atveriet skici un savienojiet šo galu ar nākamo līniju |
| "Vēl nav ko griezt." | Griezumam vajag cietu ķermeni, ko griezt. Vispirms izveidojiet izcilni |
| "Pēc šī detaļai nekas nav palicis." | Griezums noņēma visu. Pārbaudiet tā izmēru un virzienu |

Vairāk: [Traucējummeklēšana](topic:troubleshooting).
