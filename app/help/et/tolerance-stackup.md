---
title: Tolerantsiaahelad
summary: Vali ahel läbi koostu detailide tahkude ja vaata, kui palju võib selle lõpus olev vahe varieeruda, halvima juhu ja RSS järgi, kusjuures kõige olulisemad mõõtmed on esimesed.
keywords: tolerantsiaahel, tolerantsi ahel, tolerantsianalüüs, mõõtmeahel, silmus, vahe, halvim juhtum, rss, ruutude summa juur, statistiline toleranss, osalised, tundlikkus, gd&t, üldtoleranss, iso 2768
from: cbdb3159
---

**Tolerantsiaahel** liidab kokku mõõtmed mööda ahelat läbi mitme detaili, et näha, kui palju võib tulemus, tavaliselt vahe, varieeruda, kui iga detail on valmistatud oma toleranssidesse mahtuvana.

## Vali ahel

1. Ava koost ja vali {{ui:Tolerantsiaahel}} Koost-rühmast. Vaate kohale avaneb kaart.
2. Vali, mööda mida ahelat mõõdetakse: koostu X, Y või Z, või {{ui:Esimese pinna normaal}}.
3. Vajuta {{ui:Vali ahel}} ja klõpsa tahkudele, mida ahel läbib, **järjekorras**: alusta vahe ühelt küljelt, mine läbi detailide ja lõpeta vahe teisel küljel.
4. Vajuta {{ui:Valmis}} või {{key:Enter}}. {{key:Backspace}} võtab viimase klõpsu tagasi; {{key:Esc}} tühistab.

Kaks klõpsu samal detailil teevad selle detaili mõõdu (selle kauguse mööda ahelat). Klõps teisel detailil teeb nende vahel **liidese**, kus detailid kokku puutuvad; sellel ei ole tolerantsi, kui sa just ei sisesta seda. Lülid liidavad või lahutavad sõltuvalt sellest, kuidas ahel kulgeb, ja need sulgevad silmuse: nominaalne vahe on see, mida mudel näitab.

Sa võid ka käsitsi {{ui:Lisa lüli}} ja sisestada selle nominaali, tolerantsi ning kas see liidab (+) või lahutab (−).

## Anna iga lülile oma toleranss

Igal lülil on **ülemine** ja **alumine** kõrvalekalle (näiteks +0.1 ja −0.05). **Toleranss allikast** täidab need detailist:

- **Üldtoleranss**: detaili tiitliploki tolerantsiväli (vt [Joonis PDF-iks](topic:drawing-pdf)), kui see on ±0.1, +0.2/-0.1 või ISO 2768-f, -m, -c või -v (ISO 2768-1 lineaarsed toleranssid, lüli suuruse järgi). Detaili üldtoleranss kasutatakse kohe, kui ahel valitakse.
- **GD&T**: iga detaili joonise kujundi-kontrollraam. Positsiooni-, profiili- ja väljajooksuvööndid annavad ± poole tolerantsist. Orientatsiooni- või kujutolerants asub tavaliselt mõõdutolerantsi sees: lisa see ainult siis, kui ahel puutub kokku kontrollitava pinnaga. Kui on Ⓜ või Ⓛ, võetakse vöönd selle deklareeritud suuruse järgi; boonustoleranssi ei arvestata.
- **Sisestatud**: mis tahes numbrid, mille sa sisestad.

## Tulemuste lugemine

- **Vahe, nominaalne** ja kui tolerantsid on erinevad, **Vahe, keskmine**: +0.2/−0 ja +0/−0.1 nihutavad vahemiku keskpunkti.
- **Halvim juhtum**: iga toleranss on korraga oma piiril. Vahe ei saa kunagi olla väljaspool seda.
- **RSS** (ruutude summa juur): iga toleranss võetakse kolme standardhälbena normaaljaotusest ja liidetakse ruutude summa ruutjuurena. Enamik koostest jääb halvima juhu sisse; see on tavaline hinnang detailidele, mida tehakse suures koguses.
- Anna **Vahe vähemalt** ja **Vahe kõige rohkem**, et näha, kas halvim juhtum jääb alati sisse ja mitu koostu miljonist RSS ootab väljaspool.
- Veerg **#** järjestab lülid nende **osa** järgi RSS-ist: kitsenda esimesi, et saada suurim mõju.

{{ui:Salvesta CSV}} kirjutab lülid, nende osad ja tulemused. Tolerantsiahelad salvestatakse koostefaili ja iga muudatus on üks samm, mille võib tagasi võtta klahviga {{key:Mod+Z}}.

:::note
Tolerantsiahel on ühe suunaga. See ei järgi nurki ega pöördeid mööda ahelat ning ei loe mõõtmetolerantse visanditest: anna need käsitsi sisestatud tolerantsidena või tiitliploki kaudu.
:::
