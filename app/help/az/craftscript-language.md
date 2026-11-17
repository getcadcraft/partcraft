---
title: CraftScript dili
summary: CraftScript bir səhifədə: matrislər, diapazonlar və indekslər, operatorlar, idarəetmə axını, funksiyalar, strukturlar və hüceyrələr, şərhlər, əks-səda, xətalar və addım büdcəsi, həmçinin MATLAB-dan fərqi.
keywords: CraftScript, dil, sintaksis, matris, massiv, vektor, tenzor, indeks, end, iki nöqtə, diapazon, operator, elementlər üzrə, transponirləmə, if, for, while, switch, try, catch, funksiya, anonim funksiya, struktur, hüceyrə, şərh, əks-səda, nöqtəli vergül, MATLAB, Octave, port
from: d072b7d5
---

CraftScript MATLAB kimi oxunmaq üçün yazılmış matris dilidir, ona görə də əksər klassik ədədi kodlar (məsələn, 88 sətirlik topologiya optimallaşdırma kodu) yalnız kiçik dəyişikliklərlə işləyir. O, [Skript iş sahəsində](topic:craftscript) və əmr sətrindən işləyir.

## Dəyərlər

| Növ | Nümunə | Qeyd |
|---|---|---|
| Ədəd, massiv | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Hər ədəd massivdir (1×1 massiv). Massivlər sütun-sütun saxlanılır, 8 ölçüyə qədər |
| Məntiqi | `A > 2`, `true` | Doğru/yalan massivləri; indeks kimi işlənə bilər |
| Mətn | `'beam'`, `"beam"` | |
| Seyrək matris | `sparse(i, j, v, n, n)` | Sərtlik matrisləri üçün |
| Tor, sahə, model | `hexGrid(…)`, `part()`, `load('part.stl')` | `show` nəyi çəkirsə |
| Struktur | `s.E = 210e3` | Adlandırılmış sahələr |
| Hüceyrə | `c = {1, 'two', [3 4]}` | İstənilən dəyərlərin siyahısı |
| Funksiya tutacağı | `f = @(x) x.^2` | |

## Massivlər və indekslənmə

- Diapazonlar: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- İndekslənmə 1-dən başlayır: `A(2, 3)`, `v(end)`, `A(:, 1)` (bütöv sütun), `A(:)` (hamısı bir sütun kimi), `v(v > 0)` (məntiqi indekslənmə).
- Sonunu keçən təyinat MATLAB-da olduğu kimi massivi böyüdür: `v(10) = 1`.

## Operatorlar

- `+ - * / \ ^` matris əməliyyatlarıdır (`A \ b` həll edir); `.* ./ .^` elementbaşına işləyir. `'` transponirləyir.
- Müqayisələr `== ~= < <= > >=`; məntiq `& | ~` (elementbaşına) və `&& ||` (qısaldılmış).

## İdarəetmə axını və funksiyalar

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

Funksiyalar skriptdə əmrlərdən sonra, ya da funksiyanın adını daşıyan öz skript səkməsində yerləşir:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Ad aşağıdakı ardıcıllıqla axtarılır: dəyişən, bu hissədə həmin adlı skript, kitabxana funksiyası, daxili funksiya.

## Əks-səda, şərhlər, çıxış

- `;` olmadan yazılan ifadə öz dəyərini çap edir; `;` onu səssiz saxlayır.
- `%` şərh başlayır; `%{` və `%}` ayrıca sətirlərdə olduqda aralarındakı sətirləri şərhə alır.
- `disp(x)`, `fprintf('%g\n', x)` və `display(x)` konsola çap edir.

## Xətalar və məhdudiyyətlər

- Xətalar nəyin səhv olduğunu sadə sözlərlə izah edir və sətri (və funksiya çağırışlarının zəncirini) göstərir.
- Hər işin addım büdcəsi var (paneldə **İşə salma seçimləri** altında); sonsuz dövr mesajla dayanır, ya da Dayandır basın.
- Massivlərin hər biri 134 milyon dəyərə qədər saxlaya bilər.

## MATLAB-dan fərqlər

- Qrafik əmrləri seçimlərini çağırışın içində verir: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` və oxşarları qəbul edilir, amma heç nə etmir.
- `input` və `keyboard` dəstəklənmir: skript sual vermək üçün dayana bilmir.
- Alətlər yığımı yoxdur; [təhlil kitabxanası](topic:craftscript-library) və daxili funksiyalar mövcud olanlardır.
