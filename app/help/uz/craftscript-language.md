---
title: CraftScript tili
summary: CraftScript bir sahifada: matritsalar, diapazonlar va indekslash, operatorlar, boshqaruv oqimi, funksiyalar, strukturalar va kataklar, izohlar, echo, xatolar va qadamlar chegarasi, hamda uning MATLAB bilan farqlari.
keywords: CraftScript, til, sintaksis, matritsa, massiv, vektor, tenzor, indeks, end, ikki nuqta, diapazon, operator, elementlar boʻyicha, transponirlash, if, for, while, switch, try, catch, funksiya, anonim funksiya, struct, katak, izoh, echo, nuqtali vergul, MATLAB, Octave, koʻchirish
from: d072b7d5
---

CraftScript — bu MATLAB kabi oʻqilishga moʻljallangan matritsa tili, shuning uchun klassik sonli kodlarning aksariyati (masalan, 88 qatorli topologik optimallashtirish kodi) faqat kichik oʻzgartirishlar bilan ishlaydi. U [Skript ishchi maydonida](topic:craftscript) va buyruq satridan ishlaydi.

## Qiymatlar

| Tur | Misol | Izoh |
|---|---|---|
| Son, massiv | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Har bir son massiv hisoblanadi (1×1 oʻlchamli). Massivlar ustun-ustun saqlanadi, 8 tagacha oʻlchamgacha |
| Mantiqiy | `A > 2`, `true` | Rost/yolgʻon massivlari; indeks sifatida ishlatiladi |
| Matn | `'beam'`, `"beam"` | |
| Siyrak matritsa | `sparse(i, j, v, n, n)` | Bikrlik matritsalari uchun |
| Toʻr, maydon, model | `hexGrid(…)`, `part()`, `load('part.stl')` | `show` chizadigan narsa |
| Struktura | `s.E = 210e3` | Nomlangan maydonlar |
| Katak | `c = {1, 'two', [3 4]}` | Istalgan qiymatlar roʻyxati |
| Funksiya dastagi | `f = @(x) x.^2` | |

## Massivlar va indekslash

- Diapazonlar: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indekslash 1 dan boshlanadi: `A(2, 3)`, `v(end)`, `A(:, 1)` (butun ustun), `A(:)` (hammasi bitta ustun sifatida), `v(v > 0)` (mantiqiy indekslash).
- Oxiridan tashqariga qiymat berish MATLAB kabi massivni kengaytiradi: `v(10) = 1`.

## Operatorlar

- `+ - * / \ ^` matritsa amallari (`A \ b` yechadi); `.* ./ .^` elementma-element ishlaydi. `'` transponirlaydi.
- Solishtirishlar `== ~= < <= > >=`; mantiq `& | ~` (elementma-element) va `&& ||` (qisqa tutashuv).

## Boshqaruv oqimi va funksiyalar

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

Funksiyalar skriptda buyruqlardan keyin yoki oʻz nomi bilan atalgan alohida skript yorligʻida joylashadi:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Nom quyidagi tartibda qidiriladi: oʻzgaruvchi, shu qismdagi shu nomli skript, kutubxona funksiyasi, oʻrnatilgan funksiya.

## Echo, izohlar, chiqish

- `;` belgisisiz ifoda uning qiymatini chop etadi; `;` uni jim qoldiradi.
- `%` izohni boshlaydi; alohida qatorlarda `%{` va `%}` ular orasidagi qatorlarni izohga oladi.
- `disp(x)`, `fprintf('%g\n', x)` va `display(x)` konsolga chop etadi.

## Xatolar va chegaralar

- Xatolar nima notoʻgʻri ketganini oddiy soʻzlar bilan aytadi va qatorni (hamda funksiya chaqiruvlari zanjirini) koʻrsatadi.
- Har bir ishga tushirishda qadamlar chegarasi bor (paneldagi ishga tushirish parametrlarida); cheksiz sikl xabar bilan toʻxtaydi yoki Toʻxtatish tugmasini bosing.
- Massivlar har biri 134 million qiymatgacha saqlaydi.

## MATLAB bilan farqlari

- Grafik buyruqlari parametrlarini chaqiruvning oʻzida beradi: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` va shunga oʻxshash buyruqlar qabul qilinadi, lekin hech narsa qilmaydi.
- `input` va `keyboard` qoʻllab-quvvatlanmaydi: skript savol berish uchun toʻxtay olmaydi.
- Alohida toʻplamlar (toolbox) yoʻq; mavjud narsalar — [tahlil kutubxonasi](topic:craftscript-library) va oʻrnatilgan funksiyalar.
