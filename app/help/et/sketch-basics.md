---
title: Esimese visandi joonistamine
summary: Ava visand tasandile või lamedale tahule, joonista jooni, ristkülikuid, ringe, kaari, punkte ja telgjooni, ümarda nurk, vali, lohista ja kustuta.
keywords: visand, joonistamine, joon, ristkülik, ring, kaar, punkt, telgjoon, konstruktsioon, ümardus, visandi ümardus, ümarda nurk, haakumine, vali, aken, lohista, profiil
from: 28be7436
---

Iga tahkis algab visandist: lamedast joonisest tasandil. See juhend käsitleb joonistustööriistu. Visandi kinnitamine seostega ja mõõtudega on jaotises [Visandi täielik määramine](topic:relations-dimensions).

## Visandi alustamine

Visandi saab koostada baastasandile või detaili mis tahes lamedale tahule.

1. Vali, kuhu visand koostada:
   - baastasand: klõpsa ajaloos **Eesmine tasand**, **Ülemine tasand** või **Parem tasand** või klõpsa tasandit vaates;
   - lame tahk: klõpsa tahku vaates. Kogu tahk tõstetakse esile.
2. Vali tööriistaribal {{ui:Visand}} või vajuta {{key:S}}. (Kui tahk on valitud, saad valida ka paremal paneelil {{ui:Visand sellel tahul}}; tasandi puhul {{ui:Visand sellel}}.)

Vaade pöörab end tasandi suhtes risti, visandi tööriistad ilmuvad tööriistaribale ja tööriist {{ui:Joon}} on valmis. Kui vajutad {{ui:Visand}} ilma midagi valimata, kuvatakse baastasandid ja olekuriba ütleb: „Visandi koostamiseks klõpsa tasandit või lamedat tahku. Esc peatab.“

:::note
Kumer tahk ei saa visandit hoida: „Valitud tahk on kumer. Visandi koostamiseks vali lame tahk või tasand.“
:::

**Tahul olev visand järgib seda tahku.** Kui tahk tekkis visandi servast või ekstrusiooni otsast, liigub uus visand koos funktsiooni muutumisega (sügavam süvend viib tema põranda visandi kaasa). Kui paneel ütleb, et tahk on „Fikseeritud valikukohas“, jääb visand sinna, kus tahk praegu on.

## Joonistustööriistad

Igal tööriistal on tööriistariba nupp ja klahv. Vali sama nupp uuesti, vajuta {{key:S}} või vajuta {{key:Esc}}, et naasta valimisse.

| Tööriist | Klahv | Kuidas joonistada |
|---|---|---|
| {{ui:Joon}} | {{key:L}} | Klõpsa alguspunkt, seejärel iga järgmine punkt. Jooned ühenduvad otsast otsa. Ahela lõpetad klahviga {{key:Esc}}, {{key:Enter}}, paremklõpsuga või topeltklõpsuga. Olemasoleva punkti klõpsamine lõpetab samuti |
| {{ui:Ristkülik}} | {{key:R}} | Klõpsa üks nurk, seejärel vastasnurk. Saad neli nurkades ühendatud joont, kaks horisontaalset ja kaks vertikaalset |
| {{ui:Ring}} | {{key:C}} | Klõpsa keskpunkt, seejärel punkt ringjoonel |
| {{ui:Kaar}} | {{key:A}} | Klõpsa keskpunkt, seejärel algus ja lõpp. Kaar kulgeb nii, nagu liigutad osutit keskpunkti ümber |
| {{ui:Punkt}} | {{key:P}} | Klõpsa. Üksik punkt märgib augu keskpunkti tööriistale {{ui:Auk}} |
| {{ui:Telgjoon}} | {{key:N}} | Nagu joon, üks lõik korraga. Joonistatakse katkendjoonena; see on konstruktsioonigeomeetria, mida kasutatakse pööramise teljena või viitena |
| {{ui:Ümardus}} | {{key:F}} | Klõpsa nurk, kus kaks joont kohtuvad, sisesta raadius, vajuta {{key:Enter}} |
| {{ui:Splain}} | {{key:B}} | Klõpsa punktid, mida kõver läbib; {{key:Enter}} lõpetab, esimesele punktile klõpsamine sulgeb selle. Vaata [Splainid, lõikamine, nihutamine ja muud visandi tööriistad](topic:sketch-tools) |
| {{ui:Lõika}} | {{key:T}} | Klõpsa kõvera tükk, mida eemaldada, kuni lähima ristumiskohani |
| {{ui:Mõõt}} | {{key:D}} | Vaata [Visandi täielik määramine](topic:relations-dimensions) |

Joonistamise ajal näitab osuti kõrval väike kast pikkust, suurust, läbimõõtu või raadiust.

### Sisesta mõõt joonistamisel

Pärast joone, ristküliku, ringi või kaare esimest klõpsu saad suuruse asemel sisestada arvu. Arvu sisestamine avab osuti kõrval kasti, kus see arv on:

| Tööriist | Kastid ({{key:Tab}} liigub järgmisele) | Mis juhtub klahvi {{key:Enter}} vajutamisel |
|---|---|---|
| {{ui:Joon}}, {{ui:Telgjoon}} | Pikkus, seejärel nurk (°) visandi X-teljest | Joon joonistatakse selle pikkusega, osuti suunas või sisestatud nurga all; ahel jätkub selle lõpust |
| {{ui:Ristkülik}} | Laius, seejärel kõrgus | Ristkülik joonistatakse esimesest nurgast osuti suunas; mõõt, mida ei sisestanud, tuleb osutist |
| {{ui:Ring}} | Läbimõõt | Ring joonistatakse selle läbimõõduga |
| {{ui:Kaar}} | Raadius pärast keskpunkti, seejärel kaare nurk (°) pärast algust | Algus on selle kauguse kaugusel keskpunktist; seejärel kaar kulgeb nii kaugele ringi, nagu liigutasid osutit |

Iga sisestatud suurus muutub samas sammus **juhtmõõduks**, nii et visand tuleb mõõtudega. {{key:Mod+Z}} eemaldab kuju ja selle mõõdud koos. Klõpsamine klahvi {{key:Enter}} vajutamise asemel säilitab sisestatu ja võtab ülejäänu klõpsust. {{key:Esc}} sulgeb kasti ja naaseb osuti juurde.

Lülita see välja jaotises {{ui:Sätted}} › {{ui:PartCraft}} › **Mõõt joonistamise ajal**, kui soovid joonistada ainult klõpsudega. Vaata [PartCraft-i sätted](topic:settings).

{{ui:Veel}}, visandi tööriistade lõpus, sisaldab juhtpunktidega splaini ({{ui:Juhtpunktidega splain}}), {{ui:Pikenda}}, {{ui:Nihuta}}, {{ui:Peegeldus}}, {{ui:Hulknurk}}, {{ui:Pesa}}, visandi mustreid ja {{ui:Projekteeri serv}}: vaata [Splainid, lõikamine, nihutamine ja muud visandi tööriistad](topic:sketch-tools).

### Haakumine

Haakumine lisab seoseid automaatselt, nii et visand jääb kokku, kui see liigub:

- **Lõpp-punktil või alguspunktil** ilmub väike ruut. Uus punkt muutub sellega ühtelangevaks.
- **Joonel, ringjoonel või kaarel** ilmub väike rist. Uus punkt asetatakse sellele kõverale.
- Joon, mis on horisontaalsest või vertikaalsest kuni 3 kraadi kaldu, haakub sellega ja saab horisontaalse või vertikaalse seose. Silt näitab „H“ või „V“.

Haakumise vältimiseks suumi sisse, et klõpsaksid punktist või kõverast kaugemal.

## Nurga ümardamine

1. Vajuta {{key:F}} või vali {{ui:Ümardus}}.
2. Klõpsa nurgapunkt, kus kaks joont kohtuvad.
3. Avaneb kast soovitatud raadiusega. Sisesta raadius ja vajuta {{key:Enter}}.

Mõlemad jooned lõigatakse ja ühendatakse puutuva kaarega, millel on raadiusmõõt. Võid näha teateid: „Visandi ümardamiseks on vaja nurka, kus täpselt kaks joont kohtuvad.“ ja „See raadius on nende joonte jaoks liiga suur.“

:::tip
Visandi ümardus ümardab profiili nurga, nii et ekstrusioonil on ümarad vertikaalsed servad. Tahkise enda servade (näiteks plaadi ülemiste servade) ümardamiseks kasuta detaili funktsiooni {{ui:Ümardus}}: vaata [Ümardamine, faasimine ja õõnestamine](topic:fillet-chamfer-shell). Visandis on tööriistariba {{ui:Ümardus}} visandi tööriist; detailil on see funktsioon.
:::

## Konstruktsioonigeomeetria

Konstruktsioonijooned, -ringjooned ja -kaared on katkendjoonelised ja hallid. Need juhivad visandit, kuid ei kuulu profiili, mida ekstrudeeritakse või pööratakse.

1. Vali jooned, ringjooned või kaared.
2. Vajuta {{key:Q}} või vali {{ui:Konstruktsioon}}. Vajuta uuesti, et need tagasi lülitada.

## Vali, lohista ja kustuta

Vajuta {{key:S}} (või {{key:Esc}}, kuni ükski tööriist pole aktiivne), et valida.

- Klõpsa punkti, joont, ringjoont, kaart, seoseikooni või mõõtu, et see valida. {{key:Shift}}+klõps lisab valikule või eemaldab sealt. Windowsis ja Linuxis teeb sama {{key:Ctrl}}+klõps; Macis ⌘+klõps.
- Lohista tühjal alal, et joonistada valikuaken: kõik, mis on sellesse täielikult jäänud, valitakse.
- Lohista punkti või joont, et seda liigutada. Lahendaja hoiab liigutamisel kõiki seoseid ja mõõte, nii et liigub ainult vaba geomeetria. Lohista ringjoone serva, et muuta selle raadiust.
- Lohista mõõdu numbrit, et silti liigutada.
- Vajuta {{key:Delete}} või {{key:Backspace}} või vali paremal paneelil {{ui:Kustuta}}, et valik kustutada. Geomeetria kustutamine kustutab seda puudutavad seosed.

## Visandi suumimine ja nihutamine

- Keri ratast, et suumida osuti kohal.
- Lohista keskmise või parema nupuga, et nihutada.
- {{ui:Mahuta}} tööriistaribal või paremal paneelil mahutab visandi vaatesse. Visandis on klahv {{key:F}} tööriist {{ui:Ümardus}}, mitte {{ui:Mahuta}}.

## Visandi sulgemine

Vali tööriistaribal {{ui:Välju}} või paremal paneelil {{ui:Välju visandist}}, või vajuta {{key:Esc}}, kuni visand sulgub. Iga {{key:Esc}} tühistab esmalt pooleliolevad toimingud, seejärel naaseb valimisse, seejärel tühistab valiku ja järgmine sulgeb visandi.

Visand jääb valituks, nii et järgmine {{ui:Väljapressimine}} või {{ui:Pööramine}} kasutab seda.

## Mis teeb hea profiili

{{ui:Väljapressimine}} ja {{ui:Pööramine}} kasutavad visandi tahkise (mitte konstruktsiooni) joontest, ringjoontest, kaartest ja splainidest **kõiki suletud ahelaid**. Ahelad ahelate sees muutuvad aukudeks.

- Iga ots peab kohtuma täpselt ühe teise otsaga. Profiil on avatud, kui ots punktis (12.5, 40) ei ole millegagi ühendatud, ja olekuriba nimetab koha.
- Kolm otsa ei tohi kohtuda ühes punktis: „Profiil hargneb punktis (0, 20): seal kohtub rohkem kui kaks otsa.“
- Punkte ja konstruktsioonigeomeetriat profiil ei arvesta.

Järgmine: [Visandi täielik määramine seostega ja mõõtudega](topic:relations-dimensions).

## Visand fotost

**Funktsioonid › Veel › Visand fotost…** (või visandirühm funktsioonipuu lindil) jälgib pildi tasasest detailist tavalisel alusel, selle äärejoone ja augud, või pliiatsijoonise, ja muudab selle joonte, kaarte ja ringjoonte visandiks. Ütle üks pikkus (laius, kõrgus või pikim külg), et visandil oleks õige suurus, kontrolli eelvaates leitut ja vali **Koosta visand**; saad selle ka kohe ekstrudeerida, samas tagasivõtmise sammus. Fotot töödeldakse selles arvutis. Nurkade raadiused tulevad tagasi umbes 5 % täpsusega, pikslitasemel üksikasjad kaovad ja kaldu tehtud või detaili peal varje sisaldavat fotot ei sirgendata: tee foto detailist risti ja ühtlase valgusega.
