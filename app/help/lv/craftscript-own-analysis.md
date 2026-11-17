---
title: Savas analīzes rakstīšana
summary: Veidojiet analīzi kā skriptus Skripta darbvietā — sadaliet daļu tīklā, samontējiet un atrisiniet, parādiet lauku un konverģences grafiku, pārbaudiet rezultātu pret rokas aprēķinu, un glabājiet soļus kā atsevišķus skriptus, kas dalās ar mainīgajiem.
keywords: savas analīzes, pielāgota analīze, FEA skripts, galīgo elementu, samontēt, stingums, robežnosacījumi, atrisināt, pcg, retā, lauks, pēcapstrāde, konverģence, verifikācija, rokas aprēķins, pārbaude, darbplūsma
from: 0f471a8e
---

Analīze Skripta darbvietā ir daži īsi skripti, kas viens otram nodod mainīgos. Sāciet no [bibliotēkas](topic:craftscript-library) funkcijas, kas ir tuva tam, kas jums vajadzīgs, izveidojiet kopiju un mainiet to; vai veidojiet to pakāpeniski, kā zemāk.

## 1. Tīkls

```
model = part();                  % daļa, ko modelējat, kā modelis
m = tetmesh(model, 4);           % tetraedri ap 4 mm platumā
show(m)
```

Pārbaudiet tīklu skatā pirms tālākā: {{key:F}} to pielāgo, {{ui:acs}} sarakstā **Redzamie** paslēpj daļu.

## 2. Samontēt un atrisināt

Rakstiet elementu cilpu skriptā (tā lasās kā mācību grāmatā), bet smagās daļas atstājiet iebūvētajām funkcijām: elementu matricām, retu samontēšanu no trijniekiem un konjugēto gradientu risinātāju ar priekšnosacītāju. Bibliotēkas funkcija, piemēram, `static_tet` (kad bibliotēkā tā ir), ir pilnīgs piemērs, ko kopēt.

## 3. Parādīt rezultātu

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % viena vērtība katrā mezglā
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Legendas diapazonu var ierakstīt vai atjaunot uz {{ui:Auto}}.
- Noklikšķiniet uz tīkla, lai nolasītu vērtības mezglā.
- Grafiks ar tādu pašu `'id'` tiek atjaunināts vietā, tāpēc drukājiet un zīmējiet cilpā, lai redzētu, kā tas konverģē.

## 4. Pārbaudiet to

Salīdziniet ar kaut ko zināmu: konsoles gala izliece pret PL³/3EI, plāksne ar caurumu pret tās sprieguma koncentrācijas koeficientu, reakcijas pret slodzēm. Rakstiet pārbaudi kā atsevišķu skriptu, lai tas tiek palaists pēc katras izmaiņas:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Saglabājiet to

- Katrs solis var būt sava skripta cilne: tās dalās ar mainīgajiem, tāpēc palaidiet tās pa vienam pēc kārtas.
- Skripti tiek saglabāti daļā. Atzīmējiet **Saglabāt mainīgos kopā ar daļu** cilnē Mainīgie, lai paturētu arī rezultātus (līdz 32 MB).
- {{ui:Saglabāt}} Skripta grupā lejupielādē skriptu, lai to kopīgotu; {{ui:Atvērt}} ieved vienu.
