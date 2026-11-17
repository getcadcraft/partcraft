---
title: Skriptlarni yozish va ishga tushirish (Skript ishchi maydoni)
summary: Skript ishchi maydoni qadamma-qadam: CraftScript yoki Lua skriptini yozish, F5 bilan ishga tushirish, konsolni oʻqish, keyingi skript uchun natijalarni oʻzgaruvchilarda saqlash, toʻrlar, maydonlar va grafiklarni koʻrsatish, ishga tushirishni toʻxtatish va skriptlarni detal bilan saqlash.
keywords: skript, skriptlash, modellash davomida skript, ajratish, ikkinchi ekran, ikkinchi monitor, param, params, skriptlardagi parametrlar, CraftScript, Lua, kod, dastur, tahrirlovchi, konsol, REPL, buyruq satri, ishga tushirish, F5, tanlovni ishga tushirish, toʻxtatish, oʻzgaruvchilar, ish maydoni, grafik, maydon, toʻr, legenda, qoʻshimcha displey, tahlil, avtomatlashtirish, matritsa, sonli
from: d0003e89
---

**Oldindan koʻrish.** Skriptlash PartCraft 0.3 da yangi va oldindan koʻrish rejimida: til, kutubxona va skriptlarning saqlanish usuli hali oʻzgarishi mumkin, hozir yozilgan skriptlarga keyinroq kichik tahrirlar kerak boʻlishi mumkin. Nima buzilishini bizga ayting.

Skript ishchi maydoni detal yonida oʻz hisob-kitoblaringizni ishga tushiradi: kichik yigʻindilardan tortib butun tahlillargacha, yoki [tahlil kutubxonasi](topic:craftscript-library) dagi skriptlar. Skriptlar **CraftScript** da (MATLAB ga oʻxshash matritsa tili, qarang: [CraftScript tili](topic:craftscript-language)), **Lua** da ([Lua skriptlari](topic:craftscript-lua)) yoki **Python** da ([Python skriptlari](topic:craftscript-python)) yoziladi.

Asboblar panelining chap tomonidagi **Ish maydoni** qutisidan **Skript** ni tanlang. Detal oʻzgarmaydi. Oʻng panel skript paneliga aylanadi (odatdagidan kengroq; uning chetini sudrab oʻzgartiring yoki {{ui:⋯}} menyusi orqali ikkinchi ekranga koʻchiring, qarang: [Panellarni joylashtirish](common:arrange-panels)).

## Modellash davomida skript

Skript yozish uchun Design ish maydonidan chiqishingiz shart emas. Design da oʻng panelning **{{ui:Skript}}** yorligʻi bir xil tahrirlovchi, konsol, oʻzgaruvchilar va kutubxonani, bir xil skriptlar bilan saqlaydi. Elementlar daraxti va koʻrinish ishlashda davom etadi: elementni tanlash uchun bosing, eskizni tahrirlash uchun ikki marta bosing, koʻrinishni aylantiring, soʻng **{{ui:Skript}}** yorligʻiga qayting va {{key:F5}} ni bosing.

Skript **koʻrsatadigan** narsalar (toʻrlar, maydonlar, grafiklar, jadvallar) Design da modelingiz ustida chizilmaydi: konsol buni aytadi, Skript ishchi maydoniga oʻtganingizda hammasi u yerda boʻladi.

{{ui:Ajratish}} {{ui:Ishga tushirish}} yonida turadi va butun panelni oʻzining alohida oynasiga koʻchiradi, masalan ikkinchi ekranga, shunda tahrirlovchi va toʻliq koʻrinish yonma-yon turadi. {{ui:Qaytarish}} uni yana joylaydi. Qarang: [Panellarni joylashtirish](common:arrange-panels).

## Birinchi skriptni ishga tushirish

1. Tahrirlovchiga yozing, masalan:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. {{key:F5}} ni bosing (yoki {{ui:Ishga tushirish}}). Tahrirlovchi ostidagi konsol skript chop etgan narsani va "… s da tugadi" xabarini koʻrsatadi. Grafik 3D koʻrinish pastidagi **qoʻshimcha displeylar** da paydo boʻladi.
3. Nuqta-vergulsiz qator qiymatini chop etadi, MATLAB kabi: `a = 3` `a = 3` ni chop etadi; `a = 3;` hech narsa chop etmaydi.
4. Skriptning faqat bir qismini ishga tushirish uchun qatorlarni tanlang va {{key:Mod+Enter}} ni bosing ({{ui:Tanlov}}). Hech narsa tanlanmagan boʻlsa, kursor turgan qatorni ishga tushiradi.
5. Konsol pastidagi qator (`>>` dan keyin) {{key:Enter}} bosilganda bitta ifodani ishga tushiradi. {{key:Up}} va {{key:Down}} oldingi qatorlarni qaytaradi.

## Topish, buklash va toʻldirish

- **Topish va almashtirish.** {{key:Mod+F}} ni bosing ({{key:Mod+H}} almashtirish uchun ham). Kod ustida panel ochiladi: qidiriladigan narsani yozing; mos kelganlar yorqinlashadi va son qayerdaligingizni koʻrsatadi. Quti yonidagi tugmalar katta-kichik harfni hisobga oladi (**Aa**), faqat butun soʻzlarni topadi (**W**) va muntazam ifodani ishlatadi (**.\***; almashtirishda `$1` birinchi guruh mos kelgan narsani qaytaradi). {{ui:Almashtirish}} joriy mosliklarni almashtiradi, {{ui:Hammasi}} har bir moslikni {{key:Mod+Z}} ning bitta qadami sifatida almashtiradi.
- **Buklash.** Qator raqami yonidagi ▾ ni bosing yoki kursor `function`, `if`, `for`, `while`, `switch` yoki `try` qatorida boʻlganda {{key:Mod+Shift+[}} ni bosing (Lua: `function`, `do`, `if`, `repeat`), ichki qatorlarini yashirish uchun; qatorda nechta qator borligi koʻrsatiladi. ▸ yoki {{key:Mod+Shift+]}} uni qayta ochadi. Buklash faqat qatorlarni yashiradi: ishga tushirish, saqlash, nusxalash va qator raqamlari hammasi barcha qatorlarni hisobga oladi; buklangan qatorga yozish uni avval ochadi.
- **Toʻldirish.** Nomning ikki harfini yozing yoki {{key:Mod+Space}} ni bosing: roʻyxatda sizda bor oʻzgaruvchilar, til funksiyalari (argumentlari bilan), kalit soʻzlar va skriptda allaqachon bor nomlar koʻrsatiladi. Strelkalar bilan tanlang va {{key:Enter}} yoki {{key:Tab}} ni bosing.

## Nimadir notoʻgʻri ketganda

- Xato muammoni va qatorini nomlaydi: qator tahrirlovchida qizil bilan belgilanadi, konsoldagi **Qator n** esa sizni oʻsha yerga olib boradi.
- Tugamaydigan sikl: {{ui:Toʻxtatish}} tugmasini bosing (asboblar paneli yoki panel). Skript darhol toʻxtaydi; oʻzgaruvchilar oʻsha ishga tushirishdan oldingi qiymatlarini saqlab qoladi.
- Har bir ishga tushirishda ham qadamlar chegarasi bor (standart 2 milliard qadam; uni panelda **Ishga tushirish parametrlari** ostida oʻzgartiring). Chegaradan oshgan ishga tushirish xabar bilan toʻxtaydi.

## Oʻzgaruvchilar skriptdan skriptga oʻtadi

Har bir yuqori darajadagi oʻzgaruvchi skript yaratgan **Oʻzgaruvchilar** yorligʻiga tushadi (nomi, turi, oʻlchami, eng kichik va eng katta qiymat) va keyingi skript uchun turadi, qaysi tilda boʻlishidan qatʼi nazar. Shunday qilib bir skript toʻr quradi, keyingisi yechadi, uchinchisi chizadi.

- Oʻzgaruvchini koʻrsatish uchun uni bosing: toʻrlar, maydonlar va modellar 3D koʻrinishda, massivlar esa qoʻshimcha displeylarda jadval sifatida (vektor uchun chiziqli grafik yoki matritsa uchun rang xaritasi bilan) koʻrsatiladi.
- {{ui:JSON sifatida saqlash}}, {{ui:CSV sifatida saqlash}} (sonlar jadvali) va {{ui:HDF5 sifatida saqlash}} uni yuklab oladi; {{ui:Oʻchirish}} uni olib tashlaydi; {{ui:Hammasini tozalash}} ish maydonini boʻshatadi.
- **Oʻzgaruvchilarni detal bilan saqlash** belgisini qoʻysangiz, ular detal faylida saqlanadi (32 MB gacha; kattaroqlari faqat shu tashrif uchun qoladi). Bunday detalni ochganda panel ularni yuklashni taklif qiladi.

## Toʻrlar, maydonlar va grafiklar

- `show(m)` toʻrni chizadi; `show(f)` maydonni legenda bilan toʻrida rangga boʻyaydi. Koʻrinishning yuqori chap burchagidagi **Koʻrsatilganlar** roʻyxati har bir elementni yashiradi ({{ui:koʻz}} belgisi bilan) yoki olib tashlaydi, va detalning oʻzini yashiradi yoki koʻrsatadi. Legenda ostida diapazonni kiriting (**Dan**, **gacha**) yoki {{ui:Avtomatik}} ni bosing; vektor yoki kuchlanish maydoni qaysi komponentni koʻrsatishni ham taklif qiladi.
- `show(f, 'deform', u, 'scale', 50)` toʻrni `u` siljish maydoni boʻyicha siljitilgan holda, 50 marta kattalashtirib chizadi (`scale` boʻlmasa, modelning oʻlchamining taxminan 8 % i).
- Koʻrsatilgan toʻrni bosing: eng yaqin tugun, element va u yerdagi maydon qiymatlari qoʻshimcha displeylarda (**Tanlangan**) koʻrinadi.
- `plot`, `imagesc` va `table` chiziqli grafik, 2-D massivning rang xaritasi yoki jadvalni qoʻshimcha displeylarga qoʻyadi. Oldingi grafik bilan bir xil `'id'` (yoki sarlavha) ga ega grafik uni almashtiradi, shuning uchun tsikl bitta yaqinlashish grafigini yangilashi mumkin; `'append', true` unga egri chiziq qoʻshadi. {{ui:Tozalash}} qoʻshimcha displeylarni boʻshatadi; strelka ularni yigʻishtiradi.
- Ikki yoki undan ortiq grafik boʻlsa, {{ui:Yonma-yon}} ularni bir vaqtning oʻzida koʻrsatadi (eng yangi oltitasi); jadval yoki tasvir yorligʻini bosish uni yana alohida koʻrsatadi.
- Har bir grafik ostida {{ui:PNG}}, {{ui:SVG}} va {{ui:CSV}} bor. PNG va SVG uni mavzudan qatʼi nazar oq fonda qogʻoz ranglarida chop etadi (PNG 1600 × 1000 piksel; SVG xiralashmasdan masshtablanadi); CSV barcha raqamlarni toʻliq saqlaydi: umumiy x ga ega egri chiziqlarda bir ustun x va har bir egri chiziq uchun ustun, aks holda har bir nuqta uchun bir qator va egri chiziq nomi bilan.
- {{key:F}} yoki {{ui:Moslash}} koʻrinishni koʻrsatilganga moslaydi.

## Fayllar

- Skript guruhidagi {{ui:Ochish}} (yoki fayllarni koʻrinish yoki panelga tashlang): `.craft`, `.lua` va `.py` fayllar yangi skript sifatida ochiladi (ishga tushmaydi); maʼlumot fayllari (STL, OBJ, CSV, JSON, NPY, HDF5) oʻz fayl nomi ostida oʻzgaruvchilarga yuklanadi.
- Skript guruhidagi {{ui:Saqlash}} joriy skriptni fayl sifatida yuklab oladi.
- Skript guruhidagi {{ui:Yangi}} (yoki yorliqlar yonidagi {{ui:+}}) boshqa skript boshlaydi. Yorliqni ikki marta bosib qayta nomlang; uning {{ui:×}} belgisi uni olib tashlaydi (buni bekor qilish mumkin).

## Detalning parametrlarini oʻqish

Skript detal parametrlarini ([Parametrlar bilan detalni boshqarish](topic:parameters) ga qarang) nomi bilan oʻqiydi:

```
w = param('width');     % bitta parametrning qiymati, mm da (yoki gradusda, yoki oddiy son)
p = params();           % hammasi, struktura sifatida: p.width, p.height
```

Lua va Pythonda bular `cs.param('width')` va `cs.params()` boʻladi. Skriptlar parametrlarni faqat oʻqiydi: ularni {{ui:Parametrlar}} yorligʻida oʻzgartiring. Skript yorligʻi ostida bir qator `param('…')` bilan oʻqiydigan parametrlarni sanab oʻtadi va detalda boʻlmaganlarni belgilaydi; {{ui:Parametrlar}} yorligʻi har birining ostida skriptni koʻrsatadi. Ishlash paytida tuzilgan nom, masalan `param(name)`, roʻyxatga kiritilmaydi.

## Skriptlar detalda saqlanadi

Yorliqlardagi har bir skript detalda saqlanadi, shuning uchun Fayl guruhidagi {{ui:Saqlash}} ularni detal bilan saqlaydi va ularga oʻzgarishlarni bekor qilish mumkin. Detalni ochish uning skriptlarini **hech qachon ishga tushirmaydi**: konsol ularning nechtasi borligini aytadi va ular faqat {{ui:Ishga tushirish}} bosilganda ishlaydi. Boshqa odamning detali istalgan skriptni olib yurishi mumkin: uni ishga tushirishdan oldin oʻqing. Skriptlar bu kompyuterda fon rejimida, tarmoqsiz ishlaydi va sahifaga tegolmaydi.

## Aloqador

- [CraftScript tili](topic:craftscript-language)
- [Lua skriptlari](topic:craftscript-lua)
- [Python skriptlari](topic:craftscript-python)
- [Tahlil kutubxonasi](topic:craftscript-library)
- [Oʻz tahlilingizni yozish](topic:craftscript-own-analysis)
