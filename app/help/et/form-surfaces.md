---
title: Vabakujulised kujud Vormi abil ja pinnaelemendid
summary: Lükka ja tõmba siledat juhtvõrku Vormi tööruumis, teravda servi, kasuta sümmeetriat, kontrolli ja viimista see täpseks tahkiseks või pinnaks, seejärel katta, lofti, õmble, paksenda, nihuta, pikenda ja lõika pindu Disainis. Mis on täpne ja mis on ligikaudne.
keywords: vorm, vabakujuline, T-spliin, alamjaotus, Catmull–Clark, juhtvõrk, quadball, teravdus, sümmeetria, sebra, kumerus, pind, lapp, täitmine, lofti pind, õmblemine, paksendamine, nihutatud pind, pikendamine, lõikamine
from: 0d326ef4
---

:::note
**Seda versiooni pole veel ehitatud.** Vormi lõpetamine detailiks ning pinnaelemendid vajavad täpset geomeetriatuuma, mida selles PartCrafti versioonis pole: see ehitab iga detaili võrgutuumaga. [Mida pole veel ehitatud](topic:not-built-yet) ütleb, mida selle asemel teha. Ülejäänud lehekülg kirjeldab neid nii, nagu nad töötavad täpse tuumaga.
:::

**Vormi** tööruum loob orgaanilisi kujusid. Muudad **puuri**, jämedat võrku nurkade, servade ja tahkudena. Kuju on sile pind, mida puur juhib (selle Catmull–Clarki piirpind), nii et ühe nurga liigutamine painutab pinda selle ümber õrnalt. Kui see tundub õige, lisab **Viimistlus** selle detaili ajalukku *Vormi* elemendina ning täpne tuum muudab selle tõelisteks B-spliini pindadeks. Seejärel saad seda ümardada, lõigata, ühendada teiste elementidega ja eksportida STEP-vormingus.

Vali **Vorm** tööriistariba vasakul asuvast loendist **Tööruum**.

## Alusta puuriga

1. Määra parempoolses paneelis **Suurus** ja **Jaotused**. Jaotused on see, mitu tahku igal küljel on.
2. Klõpsa tööriistaribal {{ui:Kast}}, {{ui:Quadball}} või {{ui:Tasand}}. Paneelil on ka **Silinder**, **Toroid** ja **Tahud klõpsudega**.

- **Quadball** on kastipuur, mis on sobitatud nii, et selle nurgapunktid asuvad sfääril. Nende punktide vahel jääb pind sfääri sisse natuke: umbes 0.4 % vähem ruumala 2 jaotusega.
- **Tasand** on avatud, seega muutub pinnakehaks (vt allpool „Pinnaelemendid Disainis“).
- **Tahud klõpsudega**: klõpsa 4 punkti ülemisel (maapinna) tasandil või puuri nurkadel, et teha üks tahk. Ühiste nurkadega tahud ühinevad. Kolmnurga jaoks vajuta pärast 3 punkti {{key:Enter}}, või {{key:Esc}} peatamiseks.

Lõpetamata puur salvestatakse detaili failiga, nii et saad faili sulgeda ja hiljem jätkata.

## Vali ja liiguta

- Klõpsa puuri nurgal, servel või tahul. {{key:Shift}}+klõps lisab või eemaldab üksusi. {{key:Esc}} tühistab valiku.
- Valiku keskele ilmub gizmo. Lohista noolt, et liikuda selle suunas, või ruutu, et liikuda selles tasandis. Vajuta {{key:W}} liigutamiseks, {{key:E}} pööramiseks ja {{key:R}} skaleerimiseks või kasuta paneeli nuppe. {{ui:Gizmo}} tööriistaribal käib nende vahel.
- **Pehme langus** (mm) tõmbab nurki ka selle kauguse piires, hääbudes sujuvalt nulli selle kauguse servas.
- Iga lohistus on üks tagasivõtmise samm: {{key:Ctrl+Z}} ja {{key:Ctrl+Y}} töötavad nagu tavaliselt.

## Muuda puuri

Paneeli **Muuda** nupud töötavad valiku kallal:

| Nupp | Mida see teeb |
|---|---|
| {{ui:Väljapressimine}} | Valitud tahud liiguvad välja **väljapressimise kauguse** võrra oma normaalide suunas, uute külgtahkudega. Valitud avatud servad kasvatavad uusi tahke väljapoole. |
| {{ui:Servasilmus}} / Lisa servasilmus | Jagab valitud serva läbiva neljaküljeliste tahkude rõnga poolel teel. Rohkem silmuseid annab kitsamad kõverad. |
| Lisa punkt | Lisab nurga valitud serva keskele. |
| Jaota | Jagab iga valitud tahu keskpunkti ümber neljaküljelisteks tahkudeks. |
| Sild | Ühendab kaks valitud tahku või kaks ava (vali igast üks avatud serv) tahkude toruga. Mõlemal peab olema sama arv servi. |
| Täida auk | Sulgeb ava läbi valitud avatud serva ühe tahuga. |
| Keevita | Ühendab valitud nurgad üheks, nende keskel. |
| Lameda | Liigutab valitud nurgad nende jaoks kõige sobivamale tasandile. |
| Kustuta | Eemaldab valitud tahud, servad (kaks tahku ühinevad) või nurgad. |

## Teravad servad, sümmeetria ja kuvamine

- {{ui:Teravda}} teeb valitud servad teravaks. **Teravuse kaal** 10 on täiesti terav. Väiksem kaal jääb teravaks nii paljude täpsustusetappide jooksul ja pehmeneb seejärel, mis annab tiheda ümaruse kõva voltimise asemel. **Teravuse eemaldus** teeb need uuesti siledaks. **Terav tipp** kinnitab nurga nii, et pind läbib seda punktiga.
- **Sümmeetria** peegeldab puuri üle X, Y või Z = 0. See hoiab positiivse poole, peegeldab selle ja ühendab kaks poolt. Pärast seda toimub muudatus kummalgi poolel mõlemal. Peegeltasandil olevad nurgad jäävad sinna.
- {{ui:Kuvamine}} lülitub **Siledale** (pind, milleks element saab) ja **Kastile** (puuri tahud ise) vahel.
- **Analüüs**: **Sebra triibud** peegeldavad vaates triibulist valgust. Need painduvad sujuval pinnal sujuvalt ning katkevad teravuse juures. **Keskmine kumerus** värvib kumerad alad punaseks, nõgusad siniseks ja tasased valgeks. See mõõdetakse kuvatud võrgul kotangensi valemiga, seega on see juhis, mitte mõõtmine.

## Kontrolli ja viimista

- **Kontrolli täpselt** teisendab puuri täpses tuumas ilma detaili muutmata. See teatab, mitu B-spliini lappi puur moodustab, mitu neist on täpsed, ning kas tulemus on suletud ja kehtiv tahkis ning selle ruumala.
- {{ui:Viimistlus}} lisab ajalukku *Vormi* elemendi või uuendab vormi, mida muutsid, ja viib sind tagasi Disaini. Suletud puur muutub tahkiseks. Selle **Toiming** Disaini paneelil võib olla Uus keha, Ühenda, Lõika või Ristumine. Avatud puur muutub pinnakehaks.
- Vormi hiljem muutmiseks vali see ajaloost ja klõpsa **Muuda vormis**. Ehitatud keha on peidetud, kui muudad selle puuri.
- **Loobu** viskab puuri ära, ajalugu puutumata.

## Mis on täpne ja mis on ligikaudne

Iga puuri neljaküljeline tahk muutub vajadusel täpsustatuna üheks bikuupseks B-spliini lapiks.

- Kus iga tahu nurk on *korrapärane* (pinna sees kohtuvad neli serva või avatud serval ja teravuse ääres kolm), on lapp **täpselt** jaotuspind. Testid kontrollivad seda täpsusega 1e-9 mm.
- Ümber **erilise punkti** (kolm, viis või rohkem serva kohtuvad, kolm- või viisküljelise tahu nurk või teravuse lõpp) ei ole täpset polünoomilist lappi. Seal võtab lapp selle nurga täpse punkti ja puutujatasandi ning naabrite servakõverad, nii et lapid kohtuvad endiselt ilma vahedeta. Puutujapidevus punktis kohtuvate servade vahel on ligikaudne. Vormi paneel ja elemendi paneel annavad suurima nurga, tavaliselt alla 2°. Kõrgem **Tase** elemendi paneelil muudab need lapid väiksemaks ja lähemaks.
- Teravad voldid on tahkise tegelikud servad, nii et neid saab ümardada.
- Iga lapp on oma tahk, nii et vormil on palju tahke ja nende vahele tõmmatakse jooni.

## Pinnaelemendid Disainis

Pinnakäsud asuvad Disaini menüüs {{ui:Veel}} elementide all. Need vajavad täpset tuuma. Pinnakehad joonistatakse sinisena läbipaistvana. Need ei kuulu tahkisesse, kuni need paksendad või õmbled.

| Käsk | Mida see teeb |
|---|---|
| Lapp | Täidab suletud servaahela. Kõigepealt {{key:Shift}}+klõpsa tahkise servi või vali pinnakeha, et täita selle ava. **Puutuja (G1)** paneb lapi selle pinnaga sujuvalt kohtuma. |
| Lofti pind | Pind läbi ühe kõverate ahela iga visandi kohta (avatud või suletud), ajaloo järjekorras. |
| Õmble | Õmbleb pinnakehad mööda nende ühiseid servi. Kui need sulguvad, on tulemuseks tahkis, mille toiming on nagu teistel elementidel. |
| Paksenda | Annab pinnakehale paksuse: mööda normaali, selle vastu või pool igas suunas. Tulemus on tahkis. |
| Nihuta pinda | Pinnakeha koopia, mis on nihutatud mööda oma normaale. Originaal jääb alles. |
| Pikenda pinda | Kasvatab ühetahulist pinda üle valitud servade. |
| Lõika pinda | Lõikab pinnakeha seal, kus sellega ristub teine pinnakeha või tahkis. Klõpsa **Vali punkt tükil**, et valida, milline tükk alles jätta, või jäta kõik muu alles. |

Õmble, Paksenda, Pikenda ja Lõika kulutavad ära pinnakeha, millest nad alustavad. Hilisemad elemendid kasutavad uut.

Praegused piirangud: mitme eraldi suletud tükiga vormid ei teisendu üheks tahkiseks; korrapärased alad ei ühine suuremateks pindadeks; ja vt [Mida pole veel ehitatud](topic:not-built-yet).
