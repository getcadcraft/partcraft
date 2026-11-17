---
title: Kopēšana, ielīmēšana un dublēšana
summary: Kopējiet skices ģeometriju, elementus un mezgla detaļas; ielīmējiet, kur noklikšķiniet, vai tajā pašā vietā; dublējiet vienā solī; un kas paliek līdzi kopijai, un kas nepaliek.
keywords: kopēt, ielīmēt, izgriezt, dublēt, starpliktuve, ielīmēt tajā pašā vietā, atlasīt visu, noņemt atlasi, dzēst, ctrl c, ctrl v, ctrl d, eksemplārs, komponente, kopēt skici, kopēt elementu, kopēt detaļu
from: 611307d7
---

Grupa {{ui:Rediģēt}} rīkjoslā satur {{ui:Atsaukt}}, {{ui:Atkārtot}}, {{ui:Kopēt}}, {{ui:Ielīmēt}} un izvēlni {{ui:Vairāk}} ar {{ui:Izgriezt}}, {{ui:Kopēt}}, {{ui:Ielīmēt}}, {{ui:Ielīmēt tajā pašā vietā}}, {{ui:Dublēt}}, {{ui:Dzēst}}, {{ui:Atlasīt visu}} un {{ui:Noņemt atlasi}}, katru ar savu taustiņu. Tas, ko tās kopē, ir atkarīgs no tā, kur atrodaties: ģeometrija atvērtā skicē, elements vēsturē vai detaļa mezglā.

Pelēkā pozīcija pašlaik nevar darboties. Novietojiet rādītāju virs tās: tās rīka padoms saka, kāpēc, piemēram, "Vispirms atlasiet skices ģeometriju" vai "Starpliktuvē ir Sketch2 un Extrude2: elementi ielīmējas vēsturē, tāpēc vispirms izejiet no skices".

| Darbība | Taustiņš | Skicē | Vēsturē | Mezglā |
|---|---|---|---|---|
| Kopēt | {{key:Mod+C}} | Atlasītie punkti un līknes | Atlasītā skice, izvilkums, rotācija vai caurums (kopā ar savu skici) | Atlasītā detaļa |
| Izgriezt | {{key:Mod+X}} | Kopēt, tad dzēst tos | Kopēt, tad dzēst elementu | Kopēt, tad noņemt detaļu |
| Ielīmēt | {{key:Mod+V}} | Kopija seko rādītājam; noklikšķiniet, kur tā jāliek | Pievieno kopiju vēstures beigās | Jauna kopija blakus pārējām detaļām |
| Ielīmēt tajā pašā vietā | {{key:Mod+Shift+V}} | Tajās pašās koordinātēs | Tas pats, kas Ielīmēt | Tajā pašā vietā, kur kopētā detaļa |
| Dublēt | {{key:Mod+D}} | Kopē un pārvieto vienā solī; starpliktuve paliek nemainīta | Otra kopija tieši aiz atlasītā elementa | Otra kopija blakus pārējām detaļām |
| Dzēst | {{key:Delete}} | Atlasīto | Elementu (jautā, ja to izmanto citi) | Detaļu vai savienojumu |
| Atlasīt visu | {{key:Mod+A}} | Viss skicē | Nav pieejams | Nav pieejams |
| Noņemt atlasi | {{key:Esc}} | Notīra atlasi | Notīra atlasi un izvēles | Notīra atlasi |

Katra ielīmēšana, dublēšana un izgriešana ir viens solis atsaukšanas sarakstā: {{key:Mod+Z}} to atsauc, {{key:Mod+Y}} to atjauno.

## Skicē

1. Atlasiet, ko kopēt: noklikšķiniet uz tā, {{key:Shift}}+klikšķis vairākiem, velciet logu, vai nospiediet {{key:Mod+A}} visam.
2. Nospiediet {{key:Mod+C}} vai izvēlieties {{ui:Kopēt}}. Statusa josla saka, kas tika nokopēts.
3. Nospiediet {{key:Mod+V}} vai izvēlieties {{ui:Ielīmēt}}. Punktēta kopija seko rādītājam, turēta pēc tās vidus. Tā piesaistās punktiem: lai novietotu nokopēta riņķa centru uz punkta, noklikšķiniet uz šī punkta.
4. Noklikšķiniet, kur tā jāiet. Ielīmētā ģeometrija paliek atlasīta, tāpēc to var uzreiz vilkt vai pievienot sakarības. {{key:Esc}} atceļ ielīmēšanu.

Kas pāriet līdzi:

- Nokopēta līnija, riņķis vai loks ņem līdzi savus galapunktus un centru.
- Sakarības un izmēri **starp kopētajiem vienumiem** pāriet: nokopēts taisnstūris joprojām ir taisnstūris ar saviem izmēriem.
- Sakarības **ar ģeometriju, ko nekopējāt**, un ar izcelsmi tiek atmestas. Statusa josla tās saskaita: "2 sakarības ar ģeometriju ārpus kopijas netiks pārnestas". Tātad ielīmēta kopija ir brīva kustēties, līdz to piesaistāt ar sakarībām vai izmēriem.
- Fiksēts punkts paliek fiksēts, jaunajā pozīcijā.

{{ui:Ielīmēt tajā pašā vietā}} novieto kopiju tieši uz oriģināla koordinātēm, šajā skicē vai citā: noderīgi, lai no vienas skices pārnestu profilu uz citu. Tajā pašā skicē kopija atrodas tieši virs oriģināla; velciet to prom.

{{ui:Dublēt}} ({{key:Mod+D}}) nokopē atlasīto un uzreiz sāk to novietot, neskarot starpliktuvē esošo.

:::tip
Lai atkārtotu urbuma centru vai slotu vairākas reizes, nokopējiet to vienreiz un ielīmējiet vairākas reizes: katrs {{key:Mod+V}} sāk jaunu kopiju, kas seko rādītājam.
:::

## Vēsturē

1. Vēsturē noklikšķiniet uz skices, izvilkuma, rotācijas vai cauruma.
2. {{key:Mod+C}} to nokopē. Uz skices balstīts elements tiek kopēts kopā ar savu skici.
3. {{key:Mod+V}} pievieno kopiju vēstures beigās (atkāpšanās joslā, ja esat atkāpies), ar jauniem nosaukumiem, piemēram, Sketch3 un Extrude2.

Kopija atrodas tajā pašā plaknē vai virsmā kā oriģināls, tāpēc tā veidojas virs tā un detaļa izskatās tāpat. Atlasiet jauno skici un mainiet tās plakni labajā panelī, vai atveriet to un pārvelciet vai pārdimensionējiet profilu, lai pārvietotu kopiju.

- Ielīmēt **citā detaļā**: atveriet to detaļu un nospiediet {{key:Mod+V}}. Ja kopijas skice bija uz virsmas, kuras šai detaļai nav, tā nonāk priekšējā plaknē, un statusa josla to saka.
- {{ui:Dublēt}} veic kopēšanu un ielīmēšanu vienā solī tajā pašā detaļā.
- {{ui:Izgriezt}} nokopē elementu un tad to dzēš (vispirms jautājot, ja citi elementi to izmanto).

Masīvus, spoguļus, noapaļojumus, nošķelšanas, čaulas un importētās cietvielas nevar kopēt: tie ir piestiprināti pie šīs detaļas šķautnēm, virsmām vai elementiem. Kopējiet skici vai elementu, uz kura tie balstās, vai veidojiet masīvu ar {{ui:Lineārs}} vai {{ui:Cirkulārs}}.

## Mezglā

1. Noklikšķiniet uz detaļas skatā vai kreisajā sarakstā.
2. Izvēlieties {{ui:Dublēt}} ({{key:Mod+D}}) vai {{key:Mod+C}}, tad {{key:Mod+V}}.

Jaunā kopija ir **tā pati detaļa**: rediģējot vienu, mainās visas kopijas. Tā parādās 20 mm pa labi no visa, kas jau ir mezglā, pagriezta tāpat kā kopija, un paliek tur, līdz savienojums to novieto. {{ui:Ielīmēt tajā pašā vietā}} ({{key:Mod+Shift+V}}) novieto to tieši tur, kur atrodas kopētā detaļa; savienojums to pārvieto (slīdņa savienojuma nobīde to pabīda pa asi).

Detaļas ielīmēšana, kas nokopēta no cita mezgla, atnes detaļu līdzi, tāpat kā {{ui:Ievietot}} no tās faila. {{ui:Pievienot kopiju}} grupā Montāža dara to pašu, kas {{ui:Dublēt}}, un darbojas arī tad, ja nekas nav atlasīts (kopē pēdējo detaļu).

## Starpliktuve

- Tā ir PartCraft pati starpliktuve, nevis datora: nevar ielīmēt PartCraft ģeometriju citā programmā vai tekstu PartCraft skatos.
- Tā tiek glabāta šajā pārlūkprogrammā, tāpēc cita PartCraft cilne var ielīmēt to, ko nokopējāt. To nolasa un pārbauda kā atvērtu failu; bojāts vai no citas versijas esošs saturs tiek noraidīts.
- Liela importēta STEP faila detaļa var būt par lielu pārlūkprogrammai, lai to glabātu: tad tā ielīmējas tikai šajā cilnē.
- Skaitļu lodziņā vai palīdzības meklēšanā {{key:Mod+C}} un {{key:Mod+V}} kopē un ielīmē tekstu kā parasti.

Rasējuma lapā kopēšana un ielīmēšana vēl nav pieejama; {{ui:Dzēst}} un {{ui:Noņemt atlasi}} darbojas ar atlasīto simbolu. Skatiet [Kas vēl nav izveidots](topic:not-built-yet).
