---
title: Oman analyysin kirjoittaminen
summary: Rakenna analyysi Skripti-työtilan skripteinä: verkota osa, kokoa ja ratkaise, näytä kenttä ja lähentymiskuvaaja, tarkista tulos käsilaskelmaa vastaan ja pidä vaiheet erillisinä skripteinä, jotka jakavat muuttujia.
keywords: oma analyysi, mukautettu analyysi, FEA-skripti, elementtimenetelmä, kokoaminen, jäykkyys, reunaehdot, ratkaisu, pcg, harva, kenttä, jälkikäsittely, lähentyminen, varmennus, käsilaskenta, tarkistus, työnkulku
from: 0f471a8e
---

Analyysi Skripti-työtilassa on muutama lyhyt skripti, jotka antavat muuttujia toisilleen. Aloita [kirjaston](topic:craftscript-library) funktiosta, joka on lähellä tarvettasi, tee kopio ja muuta sitä; tai rakenna se alla olevan mukaisesti.

## 1. Verkko

```
model = part();                  % mallinnettava osa mallina
m = tetmesh(model, 4);           % tetraedrit noin 4 mm:n kokoisia
show(m)
```

Tarkista verkko näkymästä ennen jatkamista: {{key:F}} sovittaa sen, ja **Näytetyt**-kohdan {{ui:silmä}} piilottaa osan.

## 2. Kokoa ja ratkaise

Kirjoita elementtisilmukka skriptiin (se lukee kuin oppikirjassa) ja jätä raskaat osat sisäänrakennetuille funktioille: elementtimatriisit, harvat kokoonpanot kolmikoista ja esikäsitellyllä konjugaattigradienttiratkaisijalla varustettu ratkaisija. Kirjastofunktio, kuten `static_tet` (kun kirjastossa on se), on valmis esimerkki, josta kopioida.

## 3. Näytä tulos

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % yksi arvo solmua kohden
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Selitteen välin voi kirjoittaa tai palauttaa arvoon {{ui:Auto}}.
- Napsauta verkkoa lukeaksesi solmun arvot.
- Kuvaaja, jolla on sama `'id'`, päivitetään paikalleen, joten tulosta ja piirrä silmukassa seurataksesi lähentymistä.

## 4. Tarkista se

Vertaa johonkin tuntemaasi: konsolipalkin kärkipoikkeama PL³/3EI:tä vastaan, reiällinen levy sen jännityskeskittymäkertoimeen, reaktiot kuormiin. Kirjoita tarkistus omana skriptinään, jotta se ajetaan uudelleen jokaisen muutoksen jälkeen:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Säilytä se

- Jokainen vaihe voi olla oma skriptivälilehtensä: ne jakavat muuttujat, joten aja ne peräkkäin.
- Skriptit tallennetaan osan mukana. Valitse **Muuttujat**-välilehdellä **Tallenna muuttujat osan mukana**, jotta säilytät myös tulokset (enintään 32 MB).
- {{ui:Tallenna}} Skripti-ryhmässä lataa skriptin jaettavaksi; {{ui:Avaa}} tuo sen sisään.
