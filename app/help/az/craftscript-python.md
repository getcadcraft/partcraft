---
title: Python ilə skriptlər
summary: Skript iş sahəsinin skriptlərini Python 3-də yazın: daxili funksiyaların `cs` obyekti, numpy-yə oxşar dəyərlər kimi massivlər (0-dan indekslənmə), paylaşılan iş sahəsi, çap, hələ olmayanlar və Python-un CraftScript və Lua kimi necə möhürləndiyi.
keywords: Python, Python 3, CPython, WebAssembly, möhürlənmiş, təhlükəsiz, skript, dil, cs, ws, iş sahəsi, numpy, massiv, matris, indeksləmə, çap, göstərmə, etibar
from: 66eab56d
---

Python [Skript iş sahəsinin](topic:craftscript) üçüncü dilidir. Redaktorun üstündəki dil qutusunda **Python** seçin (`.py` faylı özü Python-da açılır). Python, Lua və CraftScript eyni dəyişənləri və eyni daxili funksiyaları paylaşır, ona görə Python skripti CraftScript skriptinin yaratdığını istifadə edə bilər və əksinə.

Bir ziyarətdə ilk Python işə salınması Python-un özünü (CPython 3.14, təxminən 7 MB) bu saytdan yükləyir, bu bir neçə saniyə çəkir. Python hələlik {{ui:Oflayn üçün saxla}} hissəsinin bir parçası deyil: əvvəlcə onlayn olarkən bir Python skripti işə salın.

## Python möhürlənib

Python skriptləri CraftScript və Lua skriptləri kimi möhürlənib: yalnız hissəyə, dəyişənlərə və daxili funksiyalara çatır, başqa heç nəyə yox. Hər işə buraxılışda öz qum qutusunda, yaddaşdakı kiçik fayl ağacı ilə (standart kitabxanası və işə salındıqdan sonra silinən `/tmp` qovluğu) təzə Python işə düşür. Şəbəkəyə, sizin fayllarınıza və səhifənin qalan hissəsinə çata bilmir, həm brauzerdə, həm də əmr sətrində. Başqasının skripti hələ də çox vaxt və yaddaş istifadə edə bilər: {{ui:Dayandır}} onu bitirir.

## Əsaslar

```
A = cs.magic(3)              # hər daxili funksiya cs.<ad>-dır
B = A @ A.T                  # @ matris hasilidir, .T transponirləmə
C = A * 2 + 1                # + - * / ** elementbaşınadır, numpy-da olduğu kimi
print(A[0, 1], A[-1, -1])    # 0-dan başlayır; mənfi son tərəfdən sayır
row = A[1]                   # matrisdə bir indeks: sətir
big = A[A > 4]               # məntiqi maska elementləri seçir
A[0, 0] = -5                 # massivə təyinat
V, D = cs.call('eig', 2, A)  # bir neçə nəticə: cs.call(ad, neçə, …)
```

- 1 × 1 massiv adi ədəd kimi gəlir; digər massivlər, seyrək matrislər, torlar, sahələr və modellər **Dəyərlər**dir.
- Dəyərin `shape` (tuple), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (onun sətirləri) və tək element üçün `float()`, `int()` və `bool()` var.
- Müqayisələr (`<`, `==`, …) numpy-da olduğu kimi elementbaşınadır: məntiqi Dəyər verirlər.
- Daxili funksiyaya ötürülən ədəd siyahıları massivə çevrilir: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` matris yaradır.
- Lüğət strukturu, qarışıq şeylərin siyahısı isə hüceyrəyə çevrilir və geri.

Skriptinizin yaratdığı hər qlobal (ədəd, Dəyər, lüğət, siyahı…) işə buraxılış bitəndə, hətta xətadan sonra da **Dəyişənlər** sekmesinə düşür. `_` ilə başlayan adlar, funksiyalar, siniflər və modullar Python-da qalır. `ws.name` dəyişəni birbaşa oxuyur və ya təyin edir, `ws_names()` onları siyahılayır.

`print(…)` konsola yazır. `display(…)` (və ya `cs.display`) torları, sahəni və ya çəkilişi göstərir, CraftScript-dəki kimi.

## Analiz kitabxanasını çağırın

Kitabxana funksiyaları daxili funksiyalar kimi çağırılır: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Adı skriptdə olduğu kimi yazın: PartCraft skriptin istifadə etdiyi kitabxana funksiyalarını işə düşməzdən əvvəl tapır.

## Hələ burada deyil

- numpy, scipy və digər paketlər: yalnız Python-un öz standart kitabxanası (`math`, `json`, `itertools`, `decimal`, `statistics`…) var, pəncərə, terminal və verilənlər bazası hissələri (`tkinter`, `curses`, `sqlite3`) olmadan.
- Socketlər və xaricə çatan hər şey: Python-un burada şəbəkəsi yoxdur.
- `time.sleep` dərhal qayıdır.
- Redaktorda qatlanma və CraftScript skriptindən Python funksiyasını çağırmaq.
- İşə salma hər 1000 sətirdən bir təlimat büdcəsini və Dayandır-ı yoxlayır; bir daxili funksiyanın içindəki uzun hesablama əvvəlcə bitir.
