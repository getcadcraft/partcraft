---
title: Visandi geomeetria lisamine koordinaatide sisestamisega
summary: Kasuta visandi paneelis nuppu Lisa koordinaatide järgi, et paigutada jooned, telgjooned, ristkülikud, ringid ja punktid täpsetesse asukohtadesse ainult klaviatuuri abil.
keywords: koordinaadid, sisestatud sisend, klaviatuurisisestus, arvuline sisestus, täpne asukoht, x y, absoluutsed koordinaadid, juurdepääsetavus, ilma hiireta
from: 5e6c1656
---

Kui sa tead arve, on neid sisestades kiirem kui klõpsida ja mõõtmeid lisada. **Lisa koordinaatide järgi** asub paremas paneelis alati, kui visand on avatud. See võimaldab koostada visandi ka ilma hiireta.

Koordinaadid on millimeetrites visandi enda teljestikus: x paremale ja y üles, kui vaadata visandit, nullpunktiga (0, 0) (punane ring risti-märgiga).

## Kuju lisamine

1. Ava visand (vt [Joonista esimene visand](topic:sketch-basics)).
2. Paremas paneelis keri jaotiseni **Lisa koordinaatide järgi**.
3. Vali kuju väljal **Lisa**: Joon, Telgjoon, Ristkülik, Ring või Punkt.
4. Täida väljad:

| Kuju | Väljad |
|---|---|
| Joon | **Algus x, y** ja **Lõpp x, y** |
| Telgjoon | **Algus x, y** ja **Lõpp x, y** |
| Ristkülik | **Nurk x, y** ja **Vastasnurk x, y** |
| Ring | **Keskpunkt x, y** ja **Raadius** |
| Punkt | **Asukoht x, y** |

5. Vali {{ui:Lisa}} või vajuta mis tahes väljal {{key:Enter}}.

Kuju ilmub ja olekuribal on näiteks „Lisatud ristkülik.“ Väljad tühjenevad järgmise jaoks. Iga lisamine on üks tagasivõtmise samm.

Kirjuta paar kahe arvuna, mida eraldab koma või tühik: `0, 0`, `25 -10` või `12.5,40`. Negatiivsed arvud ja komakohaga arvud on lubatud. Raadius peab olema suurem kui null. Kui midagi ei ole arvuna loetav, ütleb olekuriba: „Sisesta koordinaadid kujul „x, y“ ja raadius suurem kui null.“

## Näide: plaadi kontuur sisestatud koordinaatidega

1. Ava visand tasandil **Front plane**.
2. **Lisa**: Ristkülik. **Nurk x, y**: `-50, -30`. **Vastasnurk x, y**: `50, 30`. {{key:Enter}}.
3. **Lisa**: Ring. **Keskpunkt x, y**: `-30, 0`. **Raadius**: `5`. {{key:Enter}}.
4. **Keskpunkt x, y**: `30, 0`. **Raadius**: `5`. {{key:Enter}}.
5. Vali {{ui:Välju visandist}}, seejärel {{ui:Väljapressimine}}: 100 × 60 plaat kahe 10 mm auguga.

## Sisestatud geomeetria paigutatakse, aga ei ole seotud

Sisestatud koordinaadid paigutavad geomeetria õigesse kohta, kuid need **ei ole seosed**. Kujud jäävad siniseks (alamfikseeritud) ja võivad liikuda, kui neid lohistad või muudad mõnda teist mõõtu:

- sisestatud ristkülik tuleb kaasa oma nurkade ning horisontaalsete ja vertikaalsete seostega nagu joonistatud ristkülik, kuid miski ei seo seda nullpunktiga;
- sisestatud joonel ei ole horisontaalset ega vertikaalset seost, isegi kui sisestasid tasase joone;
- sisestatud ringi keskpunkt on vaba.

Visandi täielikuks fikseerimiseks lisa hiljem mõõdud ja seosed (vt [Visandi täielik fikseerimine](topic:relations-dimensions)). Näiteks vali ristkülikunurk ja nullpunkt ning vali {{ui:• Kokkulangevus}}, või mõõdusta ringide keskpunktid nullpunktist.

:::note
Ilma hiireta jõuad siiani: liigu ajaloos tasandi reale klahviga {{key:Tab}} ja nooleklahvidega, vajuta {{key:Enter}}, et see valida, vajuta {{key:S}}, et visandada, lisa siin kujud ning jõua iga mõõdu kõrval oleva nupuni **Muuda** ja {{ui:Välju visandist}} klahviga {{key:Tab}}. Geomeetria valimine ning seega seoste või uute mõõtude lisamine nõuab selles versioonis endiselt klõpsu või puudutust.
:::

## Piirangud

- Kaari ei saa veel sisestada. Joonista need kaare tööriistaga või sisesta ring ja kasuta seoseid.
- Sellel väljal ei ole suhtelisi koordinaate (viimasest punktist) ega polaarkoordinaate (pikkus ja nurk).
- Sisestatud geomeetria ei kleepu olemasolevatele punktidele. Sisesta olemasoleva punktiga samad koordinaadid ja lisa nende vahele {{ui:• Kokkulangevus}} seos, kui need peavad jääma ühendatuks.
