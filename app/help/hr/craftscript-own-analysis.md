---
title: Napišite vlastitu analizu
summary: Izradite analizu kao skripte u radnom prostoru Skripta: mrežu dijela, sastavljanje i rješavanje, prikaz polja i grafa konvergencije, provjeru rezultata ručnim izračunom te čuvanje koraka kao zasebnih skripti koje dijele varijable.
keywords: vlastita analiza, prilagođena analiza, FEA skripta, konačni elementi, sastavljanje, krutost, rubni uvjeti, rješavanje, pcg, rijetko, polje, naknadna obrada, konvergencija, verifikacija, ručni izračun, provjera, tijek rada
from: 0f471a8e
---

Analiza u radnom prostoru Skripta skup je nekoliko kratkih skripti koje međusobno predaju varijable. Krenite od funkcije iz [biblioteke](topic:craftscript-library) koja je bliska onome što trebate, napravite kopiju i promijenite je; ili izgradite analizu od početka kako je niže prikazano.

## 1. Mreža

```
model = part();                  % dio koji modelirate, kao model
m = tetmesh(model, 4);           % tetraedri veličine oko 4 mm
show(m)
```

Provjerite mrežu u prikazu prije nastavka: {{key:F}} prilagođava prikaz, a {{ui:oko}} u **Prikazano** sakriva dio.

## 2. Sastavljanje i rješavanje

Petlju po elementima napišite u skripti (čita se kao u udžbeniku), a teške dijelove prepustite ugrađenim funkcijama: matricama elemenata, rijetkom sastavljanju iz trojki i rješavaču konjugiranih gradijenata s prethodnim uvjetovanjem. Funkcija biblioteke poput `static_tet` (kad je biblioteka ima) potpun je primjer za kopiranje.

## 3. Prikažite rezultat

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % jedna vrijednost po čvoru
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Raspon legende može se upisati ili vratiti na {{ui:Auto}}.
- Kliknite mrežu da pročitate vrijednosti u čvoru.
- Graf koji zadrži isti `'id'` ažurira se na mjestu, pa ispisujte i crtajte unutar petlje da pratite konvergenciju.

## 4. Provjerite

Usporedite s nečim što znate: progib vrha konzole s PL³/3EI, ploču s rupom s njezinim faktorom koncentracije naprezanja, reakcije s opterećenjima. Provjeru napišite kao zasebnu skriptu da se pokrene ponovno nakon svake promjene:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Sačuvajte

- Svaki korak može biti vlastita kartica skripte: dijele varijable, pa ih pokrećite jednu za drugom.
- Skripte se spremaju u dio. Označite **Spremi varijable s dijelom** na kartici Varijable da zadržite i rezultate (do 32 MB).
- {{ui:Spremi}} u grupi Skripta preuzima skriptu da je podijelite; {{ui:Otvori}} je učitava.
