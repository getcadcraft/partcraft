---
title: Pišite lastno analizo
summary: Analizo sestavite kot skripte v delovnem okolju Skript: razdelite del na mrežo, sestavite in rešite, prikažite polje in graf konvergence, rezultat preverite z ročnim izračunom ter korake hranite kot ločene skripte, ki si delijo spremenljivke.
keywords: lastna analiza, analiza po meri, skript FEA, končni elementi, sestavi, togost, robni pogoji, reši, pcg, redka, polje, naknadna obdelava, konvergenca, verifikacija, ročni izračun, preverjanje, potek dela
from: 0f471a8e
---

Analiza v delovnem okolju Skript je nekaj kratkih skriptov, ki si podajajo spremenljivke. Začnite s [funkcijo knjižnice](topic:craftscript-library), ki je blizu temu, kar potrebujete, naredite kopijo in jo spremenite; ali pa zgradite svojo, kot spodaj.

## 1. Mreža

```
model = part();                  % del, ki ga modelirate, kot model
m = tetmesh(model, 4);           % tetraedri, veliki okoli 4 mm
show(m)
```

Preverite mrežo v pogledu, preden nadaljujete: {{key:F}} prilagodi prikaz, {{ui:oko}} v **Prikazano** skrije del.

## 2. Sestavite in rešite

Zanko po elementih napišite v skriptu (bere se kot v učbeniku), težke dele pa prepustite vgrajenim funkcijam: matrikam elementov, sestavljanju redkih matrik iz trojk in reševalcu s konjugiranimi gradienti s predpogojevalnikom. Funkcija knjižnice, kot je `static_tet` (ko jo knjižnica že ima), je popoln zgled za kopiranje.

## 3. Prikažite rezultat

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % ena vrednost na vozlišče
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Razpon legende lahko vpišete ali ga vrnete na {{ui:Samodejno}}.
- Kliknite mrežo, da preberete vrednosti v vozlišču.
- Graf, ki ohrani isti `'id'`, se posodobi na mestu, zato med zanko izpisujte in rišite, da spremljate konvergenco.

## 4. Preverite

Primerjajte z nečim, kar poznate: pomik konice konzole s PL³/3EI, ploščo z luknjo z njenim faktorjem koncentracije napetosti, reakcije z obremenitvami. Preverjanje zapišite kot lasten skript, da se po vsaki spremembi znova zažene:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('konica %g mm, teorija nosilca %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Shranite

- Vsak korak je lahko svoj zavihek skripta: delijo si spremenljivke, zato jih zaženite drugega za drugim.
- Skripti se shranijo v del. Označite **Shrani spremenljivke skupaj z delom** na zavihku Spremenljivke, da ohranite tudi rezultate (do 32 MB).
- {{ui:Shrani}} v skupini Skript prenese skript, da ga delite; {{ui:Odpri}} ga uvozi.
