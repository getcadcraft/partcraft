---
title: PartCrafti ekraan
summary: Ekskursioon igast ribast ja paneelist: tööriistariba ja selle muutumine, ajalugu, osa andmed, 3D-vaade, omaduste paneel ja olekuriba.
keywords: ekraan, paigutus, tööriistariba, ajalugu, elementide puu, omadused, paneel, olekuriba, liides, ui, ekskursioon, täisekraan, tööruum
from: 7394fc49
---

Ekraanil on viis osa: tööriistariba üleval, ajalugu vasakul, 3D-vaade keskel, omaduste paneel paremal ja olekuriba all. Kõige peal on CadCraft'i rakendusriba.

## Rakendusriba

Õhuke riba kõige ülemisel servas kuulub CadCraft'i saidile, mitte PartCrafti endale. See näitab rakenduse nime ja seda, kus see töötab, versioonimenüüd, **Teave PartCrafti kohta**, ekraanirežiimi nuppu ja teemalülitit Paber / Mudel.

- **Paber** on tumedad jooned heledal lehel. **Mudel** on heledad jooned tumedal taustal. Visandi värvid järgivad teemat.
- {{ui:Sätted}} (hammasratas või {{key:Mod+,}}) sisaldab vahekaarti {{ui:PartCraft}}: milline hiireklahv pöörab vaadet, hiireratas või puuteplaat ning seosed visandamise ajal. Vt [PartCrafti sätted](topic:settings).
- Ekraanirežiimi nupp või {{key:Ctrl+Shift+F}} tsükleerib normaalse, täisekraani ja täisekraani peidetud ribadega vahel. Kui ribad on peidetud, liiguta osuti ülemisse serva (või puuduta seal), et need tagasi tuua. {{key:Esc}} viib tagasi normaalsesse. See klahv on Macis samuti {{key:Ctrl+Shift+F}}, mitte ⌘.

## Tööriistariba

Tööriistariba on rühmitatud. See muutub vastavalt sellele, mida teed, nii et mahub ühte ritta:

| Rühm | Nupud | Näidatakse |
|---|---|---|
| Fail | {{ui:Uus}}, {{ui:Ava}}, {{ui:Salvesta}}, {{ui:Ekspordi}} (menüü) | Alati |
| Visand | {{ui:Visand}} | Kui visand pole avatud |
| Visand | {{ui:Välju}}, {{ui:Joon}}, {{ui:Ristkülik}}, {{ui:Ring}}, {{ui:Kaar}}, {{ui:Punkt}}, {{ui:Telgjoon}}, {{ui:Ümardus}}, {{ui:Mõõt}}, {{ui:Konstruktsioon}} | Ainult visandi avamisel |
| Elemendid | {{ui:Väljapressimine}}, {{ui:Lõika}}, {{ui:Pööramine}}, {{ui:Auk}}, {{ui:Lineaarne}}, {{ui:Ringjas}}, {{ui:Peegeldus}}, {{ui:Ümardus}}, {{ui:Faas}}, {{ui:Koor}}, {{ui:Veel}} (menüü: Pööratud lõige, {{ui:Tasand}}, {{ui:Telg}}, {{ui:Punkt}}, Pühkimine, Loft, {{ui:Tõmbenurk}}) | Osal, mitte visandi ega joonise avamisel. Ümardus ja faas töötavad sirgetel servadel kahe lameda tahu vahel; Koor ja Tõmbenurk lamedatel tahkudel. Pühkimine ja loft pole selles versioonis veel ehitatud (need vajavad täpset tuuma); nupu klõpsamine ütleb seda |
| Elemendid | {{ui:Valmis}} | Ainult siis, kui valid servi või tahke ümarduse, faasi, koore või tõmbenurga jaoks |
| Joonis | {{ui:Joonis}} | Osal (kasutatav, kui osal on tahkis) |
| Joonis | {{ui:Baas}}, {{ui:Raam}}, {{ui:Viimistlus}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Tagasi}} | Ainult joonislehel |
| Koost | {{ui:Koost}} | Osal (kasutatav, kui osal on tahkis) |
| Koost | {{ui:Lisa koopia}}, {{ui:Lisa}}, {{ui:Liide}}, {{ui:Põrkumine}}, {{ui:Muuda detaili}}, {{ui:Sulge}} | Ainult koostes |
| Koost | {{ui:Tagasi}} | Kui muudad koostest osa |
| Muuda | {{ui:Võta tagasi}}, {{ui:Tee uuesti}}, {{ui:Kopeeri}}, {{ui:Kleebi}}, {{ui:Veel}} (menüü: {{ui:Lõika}}, {{ui:Kopeeri}}, {{ui:Kleebi}}, Kleebi paika, Dubleeri, {{ui:Kustuta}}, {{ui:Vali kõik}}, Tühista valik) | Alati; iga käsk töötab selle visandi, ajaloo või koostu kohta, kus oled |
| Vaade | {{ui:Mahuta}}, {{ui:Normaali suunas}}, {{ui:Vaated}} (menüü: {{ui:Mõõda}}, Massiomadused, Lõige, {{ui:Tõmbenurk}}, Zebra, Kõverus, {{ui:Baastasandid}}, seejärel Isomeetria, Eesmine, Tagumine, Ülemine, Alumine, Parem, Vasak) | Alati |

Hoia hiirt nupu kohal, et näha, mida see teeb ja milline on selle klahv. Hall nupp ei ole praegu kasutatav: näiteks elementide nupud visandi avamise ajal või {{ui:Liide}} enne, kui koostes on kaks osa.

Muuda rühma menüü {{ui:Veel}} loetleb iga muutmistoimingu koos klahviga. Kopeerimine ja kleepimine toimuvad seal, kus oled; vt [Kopeeri, kleebi ja dubleeri](topic:copy-paste). Halli kirje tööriistavihje ütleb, miks see praegu ei tööta.

Menüü {{ui:Ekspordi}} sisaldab {{ui:STL, 3D-printimiseks}}, {{ui:3MF, 3D-printimiseks}}, {{ui:STEP AP242 (täpne tahkis)}}, {{ui:STEP AP214 (täpne tahkis)}}, {{ui:STEP (tahkudeks jaotatud, võrgusilma tuum)}}, {{ui:STEP AP214 (fassetiline, võrgutuum)}}, {{ui:DXF visandist või lamedast tahust}} ja {{ui:Joonis (PDF): vaated, lõige, detail, GD&T}}. Kaks täpset STEP-kirjet on hallid: need pole selles versioonis veel ehitatud, nii et kasuta {{ui:STEP (tahkudeks jaotatud, võrgusilma tuum)}}.

## Ajalugu (vasak)

Vasakpoolne paneel on osa elementide ajalugu: nimekiri, mille PartCraft ehitab ülevalt alla.

- Pealkiri on osa nimi („Part1“, kuni nimetad selle ümber).
- **Eesmine tasand**, **Ülemine tasand** ja **Parem tasand** on esimesed. Klõpsa ühel, et see valida; see tõstetakse vaates esile.
- Nende all on sinu elemendid selles järjekorras, nagu need tehti. Visand, mida element kasutab, on taandatud selle elemendi alla.
- Rea paremas servas olev märk ütleb oleku:

| Märk | Tähendus |
|---|---|
| (puudub) | Ehitatud ja visand on täielikult määratud |
| − | Visand on alamääratud (see saab veel liikuda) |
| + | Visand on ülemääratud |
| ⚠ | Ehitatud, hoiatusega (too hiirega üle, et lugeda) |
| ⚠ viga | Element ebaõnnestus. Too hiirega üle, et lugeda põhjust, või klõpsa sellel |
| ⚠ pole ehitatud | Element vajab teist, mis ebaõnnestus või on välja lülitatud |
| väljas | Välja lülitatud |

- Iga element näitab oma põhiarvu nime järel, näiteks „25 mm“ väljapressimisel või „Ø6.6 thru“ augu puhul. Topeltklõps arvul või klahv {{key:F2}} rea peal, et seda seal muuta. Vt [Muuda suurusi](topic:change-sizes).
- Klõpsa elemendil, et muuta seda paremal. Topeltklõps visandil avab selle.
- Tagasikerimisel ilmub nimekirja rida **Tagasikerimise riba · keri edasi**. Selle all olevad elemendid on hallid ega ole ehitatud.
- Kui rida on fookuses, liiguvad {{key:Up}} ja {{key:Down}} ridade vahel ning {{key:Alt+Up}} / {{key:Alt+Down}} liigutavad elementi ise, kus ajalugu seda lubab.

Koostes loetleb sama paneel selle asemel **Osad** (esimene on märgitud „kinnitatud“) ja **Liited**.

### Osa andmed

Ajaloo all olev kast **Osa** loetleb tahkise **Maht**, **Pindala**, **Suurus (X × Y × Z)**, **Läbivad augud**, **Kehad**, **Kolmnurgad**, elementide arvu **Elemendid** ja mitu neist on **Ebaõnnestumas**. Mahud ja pindalad on võrgutuuma ehitatud tahkudeks jaotatud tahkise omad, ümarate kujundite puhul veidi alla tõelise väärtuse (vt [Elemendid ja nende valikud](topic:features#curves-resolution)).

Koostes on kasti pealkiri **Koost**: Osad, Eksemplarid, Liited, Ühendamata ja Interferents.

## 3D-vaade (keskel)

Vaade näitab tahkist, baastasandeid ja iga visandit, mida veel ükski element ei kasuta.

Baastasandid joonistatakse täies mahus, kui osa on tühi. Kui sellel on tahkis, jäävad need tagasihoidlikuks: joonistatud nõrgalt, et nad ei kataks osa, ja klõpsud läbivad need osale. Need tulevad taas täies mahus tagasi, kui valid, kuhu visandada ({{ui:Visand}} ilma valituna), ja kui valid ajaloos ühe. {{ui:Vaated}} › {{ui:Baastasandid}} peidab need täielikult; need on ikka näha, kui valid, kuhu visandada. PartCraft mäletab selle valiku.

- Lohista, et osa pöörata; parema- või keskmise hiireklahviga lohistamine nihutab vaadet; hiireratta kerimine suumib osuti kohal. Üksikasjad: [Klahvid ja hiir](topic:keyboard).
- Too osuti tahkude, servade või tasandi kohale, et see helendama hakkaks. Klõpsa, et valida. Tahud tõstetakse terviklikult esile ja servad joonistatakse ning valitakse tervikuna. {{key:Shift}}+klõps kogub mitu serva või tahku; need jäävad märgituks.
- Vaatekuup vaate paremas ülanurgas pöördub koos osaga: klõpsa tahul, servale või nurgal, et vaadata sealt; lohista pööramiseks; maja nupp viib tagasi algusesse. Vt [Vaatekuup](topic:view-cube).
- Valitud väljapressimine näitab oma lõpptahul oranži noolt ja pööre kõverat noolt pöörde lõpus: lohista, et muuta sügavust või nurka, või sisesta väärtus kasti selle kõrval. Vt [Muuda suurusi](topic:change-sizes#drag-it-in-the-view).
- Kui osa on tühi, loetleb kast pealkirjaga **Alusta osa** esimesed sammud.
- Lohista `.partcraft.json`- või `.partcraft-asm.json`-fail kuhu tahes vaatele, et see avada. Sinna lohistatud `.step`-, `.stp`-, `.stl`-, `.obj`-, `.3mf`- või `.3dm`-fail avaneb tahkiskehana.

### Servade või tahkude valimisel

Kui valid ilma valikuta ümarduse, faasi või koore (või sellise elemendi puhul {{ui:Vali servad}}), näitab osa sellisena, nagu see oli enne seda elementi. Klõpsa servadele või tahkudele, et lisada või eemaldada; nende märgid näitavad, mis on sees. {{ui:Valmis}} või {{key:Esc}} lõpetab. Vt [Ümarda, faasi ja õõnesta](topic:fillet-chamfer-shell).

### Joonislehel

{{ui:Joonis}} asendab 3D-vaate A3-joonislehega. Hiireratas suumib, parema- või keskmise hiireklahviga lohistamine nihutab ja {{key:F}} mahutab. Vt [Tee joonis](topic:drawing-pdf).

### Visandi avamisel

Vaade pöördub otse visandi tasandi poole ja visandi 2D-kiht ilmub peale. Osa näitab ainult enne seda visandit tehtud elemente. Ribal vasakus ülanurgas on visandi olekukiip („Täielikult määratud“, „Alamääratud · 3 vabadusastet“ jne) ja visandi nimi, näiteks „Sketch2 elemendi Extrude1 tahul“.

## Omaduste paneel (paremal)

Paremal paneel näitab seda, mis on valitud, ja selle pealkiri nimetab selle:

- **Osa** (midagi pole valitud): osa **Nimi** ja seade **Kõverused**.
- Tasand: nupp {{ui:Visand sellel}}.
- **Tahk**: mis liiki see on (Lame tahk, Silinder oma raadiuse ja teljega, Koonus, Sfäär või Toroid), selle pindala, milline element selle tegi, ja lame tahk puhul {{ui:Visand sellel tahul}}, {{ui:Normaali suunas}}, {{ui:Ekspordi tahk DXF-ina}}, {{ui:Väljapressi sellest}}, {{ui:Lõika sisse}} ja {{ui:Auk siin}} (vt [Tõmba või lükka terve tahk](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Serv**: selle liik (sirge, ring oma keskpunkti ja raadiusega või kõver), selle pikkus ja kaks tahku, mille vahel see asub (näiteks „Extrude1 otsatahk ja Extrude1 külg“), koos nuppudega {{ui:Ümardus}} ja {{ui:Faas}}.
- Mitu serva või tahku, valitud klahviga {{key:Shift}}: nende arv, koos {{ui:Ümardus}} ja {{ui:Faas}} servade puhul ning {{ui:Tühjenda}}.
- **Element**: selle arvud ja valikud, tema visandi mõõtmed, seejärel {{ui:Lülita välja}}, {{ui:Keri siiani tagasi}}, {{ui:Teisalda üles}}, {{ui:Teisalda alla}}, {{ui:Kustuta}} ja selle **Nimi**.
- **Avatud visand**: selle olek, seosed, mida saab valikule lisada, seoste ja mõõtude loend, **Lisa koordinaatide järgi** ning {{ui:Välju visandist}}, {{ui:Mahuta}} ja {{ui:Ekspordi DXF-ina}}.
- Joonislehel: lõike- ja detailiseaded või valitud GD&T sümbol.
- Koostes: koost, valitud osa või valitud liide.

Iga arvukast rakendub, kui vajutad {{key:Enter}} või {{key:Tab}} või klõpsad kõrvale. Osa ehitatakse kohe uuesti; OK-nuppu ei ole. Tagasi saad, kui kasutad {{key:Mod+Z}}.

## Olekuriba (all)

- Vasakul on osuti koordinaadid visandis (ainult visandi avamisel).
- Keskel on teated: mida teha järgmisena ja miks midagi tagasi lükati. Loe seda, kui näib, et miski ei juhtu.
- Paremal lähedal on tuuma kiip: selles versioonis alati „Võrgutuum“. Too hiirega üle, et lugeda, mida see tähendab. Vt [Võrgutuum](topic:solid-kernels).
- Paremal on kiip: „Ehitatakse uuesti…“, kui osa ehitatakse uuesti; seejärel „Ehitatud uuesti ajaga … ms“, kui kõik on korras, või „1 element ebaõnnestub“. Koostes ütleb see „Paigutatud ajaga … ms“ või loeb liidete probleeme.

Vt ka [Alusta juhendit töötsoonis Illustreeri](topic:illustrate): töötsoon, mis teeb koostejuhendeid sinu osadest ja koostest.

## Kitsas ekraan

Kuni 760 pikslit laiuses, näiteks telefonis, hoiab vaade ekraani: tööriistariba on üks rida, mis kerib küljele, ja paneelid avanevad lehtedena alumisest ribast. {{ui:Tööriistad}} peidab tööriistariba ja {{ui:Teisalda}} paneb selle alla. Vt [Puuteplaat, puuteekraan ja väikesed ekraanid](topic:trackpad-and-touch).
