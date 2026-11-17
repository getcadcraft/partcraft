---
title: Python skriptlari
summary: Skript ishchi maydonida Python 3 da skriptlar yozish: oʻrnatilgan funksiyalar cs obyekti, 0 dan boshlanadigan indekslash bilan numpy kabi qiymatlar massivlari, umumiy ish maydoni, chop etish, hali yoʻq narsalar va Python ning CraftScript va Lua kabi qanday yopiq saqlanishi.
keywords: Python, Python 3, CPython, WebAssembly, yopiq, xavfsiz, skript, til, cs, ws, ish maydoni, numpy, massiv, matritsa, indekslash, print, display, ishonch
from: 66eab56d
---

Python — [Skript ishchi maydonining](topic:craftscript) uchinchi tili. Tahrirlovchi ustidagi til qutisidan **Python** ni tanlang (`.py` fayli oʻzi Python da ochiladi). Python, Lua va CraftScript bir xil oʻzgaruvchilar va bir xil oʻrnatilgan funksiyalardan foydalanadi, shuning uchun Python skripti CraftScript skripti yaratgan narsadan foydalanishi mumkin va aksincha.

Birinchi Python ishga tushirilganda Python oʻzi (CPython 3.14, taxminan 7 MB) ushbu saytdan yuklanadi, bu bir necha soniya oladi. Python hali {{ui:Oflayn uchun saqlash}} ning bir qismi emas: avval onlaynda bitta Python skriptini ishga tushiring.

## Python yopiq

Python skriptlari CraftScript va Lua skriptlari kabi yopiq: ular faqat detal, oʻzgaruvchilar va oʻrnatilgan funksiyalarga yetadi, boshqasiga yoʻq. Har bir ishga tushirish oʻz qumlogʻidagi xotiradagi kichik fayl daraxti bilan yangi Python dir (uning standart kutubxonasi va ishga tushirishdan keyin yoʻqoladigan `/tmp` jildi). U tarmoqqa, fayllaringizga yoki sahifaning qolgan qismiga — brauzerda ham, buyruq satrida ham — yetolmaydi. Boshqa odamning skripti hali ham koʻp vaqt yoki xotira ishlatishi mumkin: {{ui:Toʻxtatish}} uni tugatadi.

## Asoslar

```
A = cs.magic(3)              # har bir oʻrnatilgan funksiya cs.<nom>
B = A @ A.T                  # @ matritsa koʻpaytmasi, .T transponirlash
C = A * 2 + 1                # + - * / ** elementma-element, numpy kabi
print(A[0, 1], A[-1, -1])    # 0 dan boshlanadi; manfiy oxiridan sanaydi
row = A[1]                   # matritsada bitta indeks: qator
big = A[A > 4]               # mantiqiy maska elementlarni tanlaydi
A[0, 0] = -5                 # massivga yozish
V, D = cs.call('eig', 2, A)  # bir necha natija: cs.call(nom, nechta, …)
```

- 1 × 1 massiv oddiy son sifatida keladi; boshqa massivlar, siyrak matritsalar, toʻrlar, maydonlar va modellar **Qiymatlar** boʻladi.
- Qiymat `shape` (tuple), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (uning qatorlari) va bitta element uchun `float()`, `int()` va `bool()` ga ega.
- Solishtirishlar (`<`, `==`, …) numpy kabi elementma-element; ular mantiqiy Qiymat beradi.
- Oʻrnatilgan funksiyaga berilgan sonlar roʻyxati massivga aylanadi: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` matritsa yaratadi.
- Lugʻat strukturaga, aralash narsalar roʻyxati katakka aylanadi va orqaga.

Skript yaratgan har bir global (son, Qiymat, lugʻat, roʻyxat…) xato boʻlsa ham, ishga tushirish tugaganda **Oʻzgaruvchilar** yorligʻiga tushadi. `_` bilan boshlangan nomlar, funksiyalar, sinflar va modullar Python ichida qoladi. `ws.name` oʻzgaruvchini toʻgʻridan-toʻgʻri oʻqiydi yoki oʻrnatadi, `ws_names()` esa ularni sanab beradi.

`print(…)` konsolga yozadi. `display(…)` (yoki `cs.display`) CraftScript dagidek toʻr, maydon yoki grafikni koʻrsatadi.

## Tahlil kutubxonasini chaqirish

Kutubxona funksiyalari oʻrnatilganlar kabi chaqiriladi: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Nomni skriptda aynan shunday yozing: PartCraft skript ishga tushishidan oldin undan foydalanadigan kutubxona funksiyalarini topadi.

## Hali yoʻq

- numpy, scipy va boshqa paketlar: faqat Pythonning oʻz standart kutubxonasi (`math`, `json`, `itertools`, `decimal`, `statistics`…) bor, uning oynalar, terminal va maʼlumotlar bazasi qismlari (`tkinter`, `curses`, `sqlite3`) yoʻq.
- Tashqariga chiqadigan soketlar va boshqa narsalar: Pythonda bu yerda tarmoq yoʻq.
- `time.sleep` darhol qaytadi.
- Tahrirlovchida buklash va CraftScript skriptidan Python funksiyasini chaqirish.
- Ishga tushirish har 1000 qatorda koʻrsatmalar byudjetini va Toʻxtatish ni tekshiradi; bitta oʻrnatilgan funksiya ichidagi uzoq hisob avval tugaydi.
