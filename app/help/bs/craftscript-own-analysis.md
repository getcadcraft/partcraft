---
title: Napiši vlastitu analizu
summary: Gradnja analize kao skripti u radnom prostoru za skripte: mreženje dijela, sastavljanje i rješavanje, prikaz polja i grafikona konvergencije, provjera rezultata ručnim proračunom, i čuvanje koraka kao zasebnih skripti koje dijele varijable.
keywords: vlastita analiza, prilagođena analiza, FEA skripta, konačni elementi, sastavljanje, krutost, rubni uslovi, rješavanje, pcg, rijetko, polje, post-obrada, konvergencija, verifikacija, ručni proračun, provjera, tok rada
from: 0f471a8e
---

Analiza u radnom prostoru za skripte je nekoliko kratkih skripti koje međusobno prosljeđuju varijable. Počni od [funkcije iz biblioteke](topic:craftscript-library) koja je blizu onome što treba, napravi kopiju i promijeni je; ili izgradi analizu korak po korak kao ispod.

## 1. Mreža

```
model = part();                  % dio koji modeliraš, kao model
m = tetmesh(model, 4);           % tetraedri od oko 4 mm
show(m)
```

Prije nastavka provjeri mrežu u prikazu: {{key:F}} je uklapa, a {{ui:oko}} u **Prikazano** sakriva dio.

## 2. Sastavljanje i rješavanje

Napiši petlju po elementima u skripti (čita se kao u udžbeniku), a teške dijelove prepusti ugrađenim funkcijama: matricama elemenata, rijetkom sastavljanju iz trojki i rješavaču konjugovanih gradijenata s prethodnim uslovljavanjem. Funkcija iz biblioteke, kao što je `static_tet` (kad je ima biblioteka), je potpun primjer za kopiranje.

## 3. Prikaži rezultat

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % jedna vrijednost po čvoru
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Raspon legende može se upisati ili vratiti na {{ui:Auto}}.
- Klikni mrežu da pročitaš vrijednosti u čvoru.
- Grafikon koji zadržava isti `'id'` ažurira se na mjestu, pa ispisuj i crtaj unutar svoje petlje da pratiš konvergenciju.

## 4. Provjeri

Uporedi s nečim što znaš: progib vrha konzole u odnosu na PL³/3EI, ploču s rupom u odnosu na njen faktor koncentracije naprezanja, reakcije u odnosu na opterećenja. Napiši provjeru kao zasebnu skriptu da se ponovo pokrene nakon svake izmjene:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Sačuvaj

- Svaki korak može biti zasebna kartica skripte: dijele varijable, pa ih pokreći jednu za drugom.
- Skripte se čuvaju u dijelu. Označi **Spasi varijable s dijelom** na kartici Varijable da sačuvaš i rezultate (do 32 MB).
- {{ui:Spasi}} u grupi Skripta preuzima skriptu da je podijeliš; {{ui:Otvori}} je uvozi.
