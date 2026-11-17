---
title: CraftScript dili
summary: CraftScript tek sayfada: matrisler, aralıklar ve indeksleme, işleçler, akış denetimi, fonksiyonlar, yapılar ve hücreler, yorumlar, yankı, hatalar ve adım bütçesi ile MATLAB'den farkı.
keywords: CraftScript, dil, sözdizimi, matris, dizi, vektör, tensör, indeks, end, iki nokta, aralık, işleç, öğe bazında, devrik, if, for, while, switch, try, catch, fonksiyon, anonim fonksiyon, yapı, hücre, yorum, yankı, noktalı virgül, MATLAB, Octave, taşıma
from: d072b7d5
---

CraftScript, MATLAB gibi okunsun diye yazılmış bir matris dilidir; bu yüzden klasik sayısal kodların çoğu (örneğin 88 satırlık topoloji optimizasyon kodu) yalnızca küçük değişikliklerle çalışır. [Betik çalışma alanı](topic:craftscript) içinde ve komut satırından çalışır.

## Değerler

| Tür | Örnek | Notlar |
|---|---|---|
| Sayı, dizi | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Her sayı bir dizidir (1×1 dizi). Diziler sütun sütun saklanır, 8 boyuta kadar |
| Mantıksal | `A > 2`, `true` | Doğru/yanlış dizileri; indeks olarak kullanılabilir |
| Metin | `'beam'`, `"beam"` | |
| Seyrek matris | `sparse(i, j, v, n, n)` | Rijitlik matrisleri için |
| Örgü, alan, model | `hexGrid(…)`, `part()`, `load('part.stl')` | `show` komutunun çizdikleri |
| Yapı | `s.E = 210e3` | Adlandırılmış alanlar |
| Hücre | `c = {1, 'two', [3 4]}` | Herhangi değerlerden oluşan bir liste |
| Fonksiyon tutamacı | `f = @(x) x.^2` | |

## Diziler ve indeksleme

- Aralıklar: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- İndeksleme 1'den başlar: `A(2, 3)`, `v(end)`, `A(:, 1)` (bütün bir sütun), `A(:)` (her şey tek bir sütun olarak), `v(v > 0)` (mantıksal indeksleme).
- Sonun ötesine atama, MATLAB'deki gibi diziyi büyütür: `v(10) = 1`.

## İşleçler

- `+ - * / \ ^` matris işlemleridir (`A \ b` çözer); `.* ./ .^` öğe öğe çalışır. `'` devriğini alır.
- Karşılaştırmalar `== ~= < <= > >=`; mantık `& | ~` (öğe öğe) ve `&& ||` (kısa devre).

## Akış denetimi ve fonksiyonlar

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

Fonksiyonlar, betikte komutlardan sonra ya da fonksiyonun adını taşıyan kendi betik sekmesinde yer alır:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Bir ad şu sırayla aranır: bir değişken, bu parçadaki o adı taşıyan bir betik, bir kütüphane fonksiyonu, bir yerleşik fonksiyon.

## Yankı, yorumlar, çıktı

- `;` içermeyen bir deyim değerini yazdırır; `;` ile biten ise sessiz kalır.
- `%` bir yorum başlatır; kendi satırlarında yer alan `%{` ve `%}`, aralarındaki satırları yorum hâline getirir.
- `disp(x)`, `fprintf('%g\n', x)` ve `display(x)` konsola yazdırır.

## Hatalar ve sınırlar

- Hatalar neyin ters gittiğini sade sözlerle söyler ve satırı (ve fonksiyon çağrılarının zincirini) verir.
- Her çalıştırmanın bir adım bütçesi vardır (panelde Çalıştırma seçenekleri altında); sonsuz bir döngü bir iletiyle durur ya da Durdur'a basabilirsiniz.
- Her dizi en fazla 134 milyon değer tutar.

## MATLAB'den farklı olanlar

- Çizim komutları seçeneklerini çağrının içine koyar: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` ve benzerleri kabul edilir, ama hiçbir şey yapmaz.
- `input` ve `keyboard` desteklenmez: bir betik durup soru soramaz.
- Araç kutuları yoktur; [analiz kütüphanesi](topic:craftscript-library) ve yerleşik fonksiyonlar mevcut olanlardır.
