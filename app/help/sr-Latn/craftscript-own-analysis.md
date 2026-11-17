---
title: Pišite sopstvenu analizu
summary: Napravite analizu kao skripte u radnom prostoru Skripte: podelite deo na mrežu, sklopite i rešite, prikažite polje i grafik konvergencije, proverite rezultat ručnim proračunom i čuvajte korake kao odvojene skripte koje dele promenljive.
keywords: sopstvena analiza, prilagođena analiza, FEA skripta, konačni elementi, sklapanje, krutost, granični uslovi, rešavanje, pcg, retka, polje, naknadna obrada, konvergencija, verifikacija, ručni proračun, provera, tok rada
from: 0f471a8e
---

Analiza u radnom prostoru Skripte je nekoliko kratkih skripti koje prosleđuju promenljive jedna drugoj. Počnite od [funkcije iz biblioteke](topic:craftscript-library) koja je bliska onome što vam treba, napravite kopiju i promenite je; ili je sastavite korak po korak, kao dole.

## 1. Mreža

```
model = part();                  % deo koji modelujete, kao model
m = tetmesh(model, 4);           % tetraedri veličine oko 4 mm
show(m)
```

Proverite mrežu u prikazu pre nego što nastavite: {{key:F}} uklapa, a {{ui:oko}} u **Prikazano** sakriva deo.

## 2. Sklapanje i rešavanje

Napišite petlju po elementima u skripti (čita se kao u udžbeniku), a teške delove prepustite ugrađenim funkcijama: matrice elemenata, retko sklapanje iz trojki i rešavač konjugovanih gradijenata sa prethodnim uslovljavanjem. Funkcija iz biblioteke, kao što je `static_tet` (kad je biblioteka ima), potpun je primer za kopiranje.

## 3. Prikaz rezultata

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % jedna vrednost po čvoru
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Opseg legende može da se unese ili vrati na {{ui:Auto}}.
- Kliknite mrežu da pročitate vrednosti u čvoru.
- Grafik koji zadrži isti `'id'` ažurira se na mestu, pa ispisujte i crtajte unutar petlje da pratite konvergenciju.

## 4. Proverite

Uporedite sa nečim što znate: progib vrha konzole sa PL³/3EI, ploču sa rupom sa faktorom koncentracije naprezanja, reakcije sa opterećenjima. Napišite proveru kao zasebnu skriptu da se pokrene ponovo posle svake izmene:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Sačuvajte

- Svaki korak može biti sopstveni jezičak skripte: dele promenljive, pa ih pokrećite jedan za drugim.
- Skripte se čuvaju u delu. Označite **Sačuvaj promenljive uz deo** na kartici Promenljive da sačuvate i rezultate (do 32 MB).
- {{ui:Sačuvaj}} u grupi Skripta preuzima skriptu da je podelite; {{ui:Otvori}} je učitava.
