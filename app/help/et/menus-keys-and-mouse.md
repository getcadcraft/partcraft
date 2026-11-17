---
title: Menüüd, klahvid ja hiir
summary: Vali menüüstiil, mis sobib sellega, kuidas juba töötad, anna mis tahes käsule oma klahv, liiguta käsud lintide vahekaartide vahel ning sea, mida ratas ja iga hiire nupp 3D-vaates teevad.
keywords: menüüstiil, menüüd, lint, tööriistariba, elementide puu, klaviatuuri otseteed, kiirklahvid, klahvid, kohanda, uuesti määra, hiir, ratas, vaate suund, keskmine nupp, orbiit, nihuta, eksport, import, vahetamine, tuttav
from: 8445b06c
---

PartCraft'i käsud on samad, sõltumata sellest, kuidas neid kätte saad. **Menüüstiil** määrab ainult, kus need ekraanil asuvad, mis nime all need seal on ja millised klahvid neid käivitavad. Vali see valikus {{ui:Sätted}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menüüd, klahvid ja hiir}}; muudatus jõustub kohe ja see brauser mäletab seda.

## Kaks stiili

| Stiil | Mida saad |
|---|---|
| {{ui:PartCraft}} | PartCraft'i enda tööriistariba: tööruumide lüliti, {{ui:Fail}}, {{ui:Visand}}, {{ui:Elemendid}}, {{ui:Joonis}}, {{ui:Koost}}, {{ui:Muuda}} ja {{ui:Vaade}}. Klahvid {{key:S}} visand, {{key:F}} sobita, {{key:M}} mõõda, {{key:X}} lõikevaade. Algseis. |
| {{ui:Elementide puu}} | Lint, mis on paigutatud nii, nagu paigutavad oma lindid elemendipõhised mehaanilise CAD-programmid: menüü {{ui:Fail}} (kõigi eksportidega), kiirnupud ja vahekaardid {{ui:Elemendid}}, {{ui:Visand}}, {{ui:Pinnad}}, {{ui:Hinda}}, {{ui:Joonis}}, {{ui:Koost}}, {{ui:Uuringud}} (tööruumid ja nende tööriistad), {{ui:Illustreeri}} (tööruumi Illustreeri käsitsi tööriistad; selle tööriistad lülituvad kõigepealt Illustreerile) ja {{ui:Vaade}}. {{ui:Elemendid}} algab visandist ({{ui:Visand}}), sest detail algab visandist. Lisaklahvid: {{key:E}} väljapressimine, {{key:H}} auk ja {{key:V}} ning seejärel täht vaate jaoks: {{key:V}} {{key:F}} eest, {{key:V}} {{key:B}} tagant, {{key:V}} {{key:T}} ülevalt, {{key:V}} {{key:O}} alt, {{key:V}} {{key:R}} paremalt, {{key:V}} {{key:L}} vasakult, {{key:V}} {{key:I}} isomeetriline, {{key:V}} {{key:N}} normaalsuunas. 3D-vaates orbiidib keskmine nupp, {{key:Shift}} ja keskmine nupp nihutavad, parem nupp nihutab ja vasak nupp ainult valib. |

Iga stiil säilitab {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} ja {{key:Mod+A}}.

Teise tööruumi tööriist lülitab kõigepealt sinna; Disaini tööriist, mis on valitud teises tööruumis, läheb kõigepealt tagasi Disaini. Visandi tööriistad ootavad visandit, joonise tööriistad joonislehte, koosti tööriistad koosti: olekuriba ütleb, mida kõigepealt teha.

:::tip
Visandis, joonislehel, koostes ja teistes tööruumides säilitavad tähed seal oma tähenduse ({{key:L}} joon, {{key:R}} ristkülik, {{key:J}} liide …) igas stiilis. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ja nooled säilitavad alati oma tähenduse. PartCraft'i enda paigutuse klahv, mille su stiil andis teisele käsule, ei tee midagi, ja olekuriba ütleb, kuhu tema käsk läks.
:::

## Tee see enda omaks

1. Vali stiil, mis on kõige lähemal sellele, mida soovid, ja klõpsa {{ui:Kohanda…}}.
2. Vahekaardil {{ui:Klahvid ja menüüd}} leia käsk (otsinguväli aitab). Vajuta {{ui:Lisa klahv}} ja vajuta klahvi või kahte klahvi järjest. Klikk klahvile eemaldab selle.
3. Lindiga {{ui:Asukoht}} liigutab käsu teise vahekaardi ja paneeli, menüüsse {{ui:Fail}} või {{ui:Ainult klahvid}}.
4. Vahekaardil {{ui:Hiir}} seadista ratas, nupud, mis nihutavad visandit, ja mida iga nupp 3D-vaates teeb.
5. Anna sellele nimi ja klõpsa {{ui:Salvesta}}.

Sisseehitatud stiili salvestamine teeb sinu enda koopia („Minu elementide puu“); sisseehitatud stiil ei muutu kunagi. Klahv, mis on antud kahele käsule, või selline, mis käivituks enne, kui kaheklahvilist otseteed saab sisestada, kuvatakse punasena ja see tuleb parandada enne salvestamist.

## Hiir

- **Hiireratas**: {{ui:Ratast üles kerides suumitakse sisse}} (algus) või {{ui:Ratast üles kerides suumitakse välja}}, ja kui kiiresti. Puuteplaadi nipsutus suumib alati nii, nagu su sõrmed liiguvad.
- **Visandi nihutamine**: keskmine nupp, parem nupp või mõlemad. Parem klikk visandis lõpetab siiski tööriista sammu.
- **Lohistamine 3D-vaates**: {{ui:Iga vaate oma}} jätab alles PartCraft'i seade ({{ui:Sätted}} › {{ui:PartCraft}}: vasak pöörab või keskmine pöörab). Või määra iga nupp pööramiseks, nihutamiseks, suumimiseks või mitte millekski; {{key:Shift}} pööramisnupuga nihutab. Klikk ilma lohistamata valib siiski.

## Vii see endaga kaasa

{{ui:Ekspordi}} salvestab kasutusel oleva stiili väikese failina `.ccinput.json`; {{ui:Impordi…}} lisab ühe teisest arvutist või kolleegilt. Imporditud fail saab osutada ainult PartCraft'i enda käskudele: kõik muu jäetakse välja ja loendatakse olekuribal. {{ui:Kustuta see stiil}} eemaldab ühe sinu enda stiilidest.

:::note
Need seaded jäävad sellesse brauserisse. {{ui:Kasuta seda stiili kõigis rakendustes}} stiilikaartide all paneb iga rakenduse avanema vastavas stiilis (oma tööriistaribaga või lindiga), koos muudatustega, mille igas rakenduses tegid. Teise stiili valimine ühes rakenduses muudab ainult seda rakendust.
:::

Seotud: [Klahvid ja hiir](topic:keyboard) · [PartCraft'i sätted](topic:settings) · [Tulek teisest parameetrilisest modelleerijast](topic:coming-from)
