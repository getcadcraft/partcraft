---
title: CraftScript-kieli
summary: CraftScript yhdellä sivulla: matriisit, alueet ja indeksointi, operaattorit, ohjausrakenteet, funktiot, structit ja solut, kommentit, echo, virheet ja vaihebudjetti sekä ero MATLABiin.
keywords: CraftScript, kieli, syntaksi, matriisi, taulukko, vektori, tensori, indeksi, end, kaksoispiste, alue, operaattori, alkioittain, transponointi, if, for, while, switch, try, catch, funktio, anonyymi funktio, struct, solu, kommentti, echo, puolipiste, MATLAB, Octave, portti
from: d072b7d5
---

CraftScript on matriisikieli, joka on kirjoitettu lukemaan kuin MATLAB, joten useimmat klassiset numeeriset koodit (esimerkiksi 88-rivinen topologian optimointikoodi) toimivat vain pienin muutoksin. Sitä ajetaan [Skripti-työtilassa](topic:craftscript) ja komentorivillä.

## Arvot

| Tyyppi | Esimerkki | Huomautukset |
|---|---|---|
| Luku, taulukko | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Jokainen luku on taulukko (1×1-taulukko). Taulukot tallennetaan sarake kerrallaan, enintään 8 ulottuvuutta |
| Looginen | `A > 2`, `true` | Tosi/epätosi-taulukot; käyvät indekseiksi |
| Teksti | `'beam'`, `"beam"` | |
| Harva matriisi | `sparse(i, j, v, n, n)` | Jäykkyysmatriiseihin |
| Verkko, kenttä, malli | `hexGrid(…)`, `part()`, `load('part.stl')` | Mitä `show` piirtää |
| Struct | `s.E = 210e3` | Nimetyt kentät |
| Solu | `c = {1, 'two', [3 4]}` | Mikä tahansa arvolista |
| Funktiokahva | `f = @(x) x.^2` | |

## Taulukot ja indeksointi

- Alueet: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indeksointi alkaa 1:stä: `A(2, 3)`, `v(end)`, `A(:, 1)` (koko sarake), `A(:)` (kaikki yhtenä sarakkeena), `v(v > 0)` (looginen indeksointi).
- Sijoitus viimeisen alkion yli kasvattaa taulukkoa kuten MATLABissa: `v(10) = 1`.

## Operaattorit

- `+ - * / \ ^` ovat matriisioperaatioita (`A \ b` ratkaisee); `.* ./ .^` toimivat alkio kerrallaan. `'` transponoi.
- Vertailut `== ~= < <= > >=`; logiikka `& | ~` (alkio kerrallaan) ja `&& ||` (oikosulku).

## Ohjaus ja funktiot

```
for k = 1:10
  if mod(k, 2) == 0
    continue
  elseif k > 7
    break
  end
end
while err > 1e-6, … end
switch kind
  case 'steel'
    E = 210e3;
  otherwise
    E = 70e3;
end
try
  x = A \ b;
catch e
  disp(e.message)
end
```

Funktiot sijoitetaan skriptiin komentojen jälkeen tai omaan skriptivälilehteensä, jonka nimi on funktion nimi:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Nimi haetaan tässä järjestyksessä: muuttuja, tämän osan skripti tällä nimellä, kirjastofunktio, sisäänrakennettu funktio.

## Echo, kommentit, tulostus

- Lause ilman `;`:ta tulostaa arvonsa; `;` pitää sen hiljaisena.
- `%` aloittaa kommentin; omilla riveillään olevat `%{` ja `%}` kommentoivat niiden väliset rivit.
- `disp(x)`, `fprintf('%g\n', x)` ja `display(x)` tulostavat konsoliin.

## Virheet ja rajat

- Virheet kertovat selkeästi, mikä meni pieleen, ja antavat rivin (sekä funktiokutsujen ketjun).
- Jokaisella ajolla on vaiheraja (Ajoasetukset paneelissa); päättymätön silmukka pysähtyy ilmoituksen kanssa, tai paina Pysäytä.
- Taulukkoon mahtuu enintään 134 miljoonaa arvoa.

## Eroavuudet MATLABiin

- Piirtokomennot antavat asetuksensa kutsussa: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` ja vastaavat hyväksytään, mutta eivät tee mitään.
- `input` ja `keyboard` eivät ole tuettuja: skripti ei voi pysähtyä kysymään.
- Toolboxeja ei ole; käytettävissä ovat [analyysikirjasto](topic:craftscript-library) ja sisäänrakennetut funktiot.
