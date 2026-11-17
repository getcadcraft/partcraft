---
title: Vertailutasot, akselit ja pisteet
summary: Tee tasoja pinnan etäisyydellä, kulmassa, kolmen pisteen kautta, keskelle, tangentiksi sylinteriin, kohtisuoraan reunaa vasten tai reunan ja pisteen kautta; akseleita; pisteitä reunojen keskikohtiin, leikkauskohtiin ja tasojen kulmiin; luonnostele niille ja käytä niitä kiertoakseleina, kuvioinnin suuntina ja peilaustasoina.
keywords: datum, kohteiden välissä, keskikohta, leikkauspiste, taso reunan ja pisteen kautta, vertailutaso, työtaso, rakennustaso, datum-taso, siirretty taso, kulmassa oleva taso, keskitaso, tangenttitaso, vertailuakseli, rakennusakseli, datum-akseli, vertailupiste, työpiste, luonnos tasolle
from: e7eb6fc1
---

Vertailugeometria on tukirakenne, jolle rakennat muotoelementit: **taso**, jolle luonnostella silloin, kun pintaa ei ole, **akseli**, jonka ympäri kierrät tai kuvioit, ja **piste**, johon pysäytät pursotuksen. Sillä ei ole omaa materiaalia. Tasot näkyvät näkymässä vaaleina neliöinä, akselit katkoviivoina ja pisteet pieninä ristinä. Kaikki kolme liittyvät historiaan ja seuraavat, mistä ne on tehty, kun muutat jotakin mittaa ylempänä.

Ne ovat Muotoelementit-ryhmän valikossa {{ui:Lisää}}: {{ui:Taso}}, {{ui:Akseli}}, {{ui:Piste}}.

## Tee taso

1. Napsauta tasaista pintaa tai perustasoa historiassa aloittaaksesi siitä (valinnainen).
2. Valitse {{ui:Lisää}} ja sitten {{ui:Taso}}. Taso alkaa siirrettynä 20 % osan koosta siitä, minkä valitsit (tai ylätasosta).
3. Valitse oikeasta paneelista **Tyyppi** ja sen viitteet:

| Tyyppi | Viitteet | Luvut |
|---|---|---|
| Tasosta tai pinnasta siirrettynä | **Tasosta** | **Etäisyys (mm)**, negatiivinen toiselle puolelle |
| Kulmassa, reunan tai akselin kautta | **Tasosta**, **Kierto akselin ympäri** (maailmanakseli, akselimuotoelementti tai valittu suora reuna) | **Kulma (°)** |
| Kolmen pisteen kautta | **Piste 1**, **Piste 2**, **Piste 3** | — |
| Keskitaso kahden välillä | **Ensimmäinen taso**, **Toinen taso** (yhdensuuntaiset: puolivälissä; leikkaavat: taso, joka puolittaa kulman) | — |
| Tangentti sylinteriin | **Sylinteri** (sylinterimäinen pinta), **Lähin piste** (kumpi puoli) | — |
| Kohtisuora reunaa vasten, pisteessä | **Reuna**, **Pisteessä** (taso kulkee reunan lähimmän pisteen ja myös tämän pisteen kautta) | — |
| Reunan ja pisteen kautta | **Suora reuna** (tai akseli), **Pisteen kautta** | — |
| Kohtisuora reunan keskikohtaan | **Reuna** (puolivälissä sitä, kohtisuoraan siihen nähden), tai ilman reunaa **Piste 1** ja **Piste 2** (taso näiden puolivälissä) | — |

Jokaisessa viitteessä on **Valitse**-painike: valitse se ja napsauta sitten näkymää. Tasopaikkaan käy perustaso, vertailutaso tai tasainen pinta. Pistepaikkaan käy reunan pää (napsauta lähellä sitä päätä), pistemuotoelementti tai kohta pinnalla. Reunapaikkaan käy reuna. {{key:Esc}} peruuttaa valinnan. **Käännä normaali** kääntää tason ympäri (mihin suuntaan sen päällä oleva luonnos osoittaa).

Tässä versiossa paikka, joka tarvitsee reunan tai sylinterin pinnan (Tangentti sylinteriin ja reunapaikat), vastaa ”ei vielä toteutettu”. Käytä sen sijaan pisteitä tai akselia.

## Luonnostele tasolle

Valitse taso (historiasta tai napsauttamalla sen neliötä näkymässä) ja valitse {{ui:Luonnos}}, tai paneelissa **Luonnostele tasolle**. Luonnos seuraa tasoa: kun muutat tason etäisyyttä, myös luonnos ja kaikki sen päällä olevat muotoelementit siirtyvät.

## Akselit ja pisteet

- {{ui:Akseli}}: kahden pisteen kautta, sylinterin tai kartion akselina, kahden tason leikkauskohtaan, suoran reunan suuntaisesti (tai ympyräreunan akselina) tai pinnan suhteen kohtisuoraan pisteen kautta.
- {{ui:Piste}}: koordinaatteihin, kärkipisteeseen tai luonnospisteeseen, ympyräreunan keskipisteeseen sekä ”kohteiden välisiin” pisteisiin:

| Pistetyyppi | Viitteet |
|---|---|
| Reunan keskikohta (tai kahden pisteen välissä) | **Reuna** (puolivälissä sen pituutta, myös kaarille ja käyrille), tai ilman reunaa **Piste 1** ja **Piste 2** |
| Kohta, jossa reuna tai akseli kohtaa pinnan tai tason | **Reuna** (suora tai kaareva) tai akseli, ja **Kohtaa tason** (taso tai tasainen pinta) tai **Tai pinnan** (tasainen pinta tai sylinteri). Ympyrä leikkaa tason kahdesti, ja suora sylinterin kahdesti: **Toinen leikkauskohta** ottaa toisen |
| Kohta, jossa kolme tasoa kohtaavat | **Ensimmäinen**, **Toinen** ja **Kolmas taso** (tasot tai tasaiset pinnat) |

Kukin epäonnistuu selkeällä viestillä, kun sen viitteet eivät sovi yhteen: suora on tasoon yhdensuuntainen, suora ohittaa sylinterin, reuna ei ulotu tasoon, kolme tasoa eivät kohtaa yhdessä pisteessä, tai piste on sillä suoralla, jolla taso olisi pitänyt kiinnittää.

Käytä niitä muissa muotoelementeissä:

| Missä | Miten |
|---|---|
| Kierrä | **Akseli**: valitse akselimuotoelementti luettelosta (sen on oltava luonnoksen tasossa) |
| Ympyräkuviointi | **Akseli**: akselimuotoelementti |
| Suorakuviointi | **Suunta**: akselimuotoelementti tai taso (sen normaali) |
| Peilaus | **Peilaustaso**: vertailutaso |
| Pursota | **Pää**: Pinnaan tai tasoon asti, Kärkipisteeseen asti (pistemuotoelementti). Ei vielä toteutettu tässä versiossa (se tarvitsee tarkan ytimen) |
| Vetokulma | **Neutraali taso** |

## Kun viite on poistunut

Pinnasta tehty taso, jota ei enää ole, epäonnistuu viestillä, joka nimeää sen, esimerkiksi ”Pinta, jolla se on, on poissa kohdasta Extrude1.” Tasoa ei siirretä koskaan toiselle pinnalle. Sen luonnokset ja muotoelementit merkitään ”ei rakennettu” -tilaan, kunnes valitset uuden viitteen. Muu osa pysyy ennallaan.

:::note
Tämä versio rakentaa jokaisen osan verkkoytimellä. Se tekee tasot, akselit ja pisteet perustasoista, Pursota- tai Kierrä-muotoelementillä tehdyistä tasaisista pinnoista, luonnospisteistä, koordinaateista ja muista vertailumuotoelementeistä. Kaikkeen, mikä tarvitsee reunan, reunan pään tai kaarevan pinnan, tarvitaan tarkka ydin: se ei ole vielä toteutettu tässä versiossa (”Se käyttää kiintokappaleen pintaa tai reunaa, jonka vain tarkka ydin voi löytää: ei vielä toteutettu tässä versiossa.”).
:::
