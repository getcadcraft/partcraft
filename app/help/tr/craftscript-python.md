---
title: Python ile betikler
summary: Betik çalışma alanı betiklerini Python 3'te yazın: yerleşik fonksiyonların cs nesnesi, numpy benzeri değerler olarak diziler ve 0 tabanlı indeksleme, paylaşılan çalışma alanı, yazdırma, henüz olmayanlar ve Python'un CraftScript ve Lua gibi nasıl yalıtıldığı.
keywords: Python, Python 3, CPython, WebAssembly, yalıtılmış, güvenli, betik, dil, cs, ws, çalışma alanı, numpy, dizi, matris, indeksleme, yazdır, göster, güven
from: 66eab56d
---

Python, [Betik çalışma alanı](topic:craftscript) için üçüncü dildir. Düzenleyicinin üstündeki dil kutusundan **Python**'u seçin (bir `.py` dosyası kendiliğinden Python'da açılır). Python, Lua ve CraftScript aynı değişkenleri ve aynı yerleşik fonksiyonları paylaşır; bu yüzden bir Python betiği, bir CraftScript betiğinin ürettiklerini kullanabilir ve tersi de geçerlidir.

Bir ziyarette ilk Python çalıştırması, Python'un kendisini (CPython 3.14, yaklaşık 7 MB) bu siteden yükler; bu birkaç saniye sürer. Python henüz {{ui:Çevrimdışı için kaydet}} kapsamında değildir: önce çevrimiçiyken bir Python betiği çalıştırın.

## Python yalıtılmıştır

Python betikleri CraftScript ve Lua betikleri gibi yalıtılmıştır: parçaya, değişkenlere ve yerleşik fonksiyonlara ulaşırlar, başka hiçbir şeye ulaşmazlar. Her çalıştırma, kendi korumalı alanında, bellekte küçük bir dosya ağacıyla (standart kütüphanesi ve yalnızca çalıştırmadan sonra yok olan bir `/tmp` klasörü) yeni bir Python'dır. Ağa, dosyalarınıza ya da sayfanın geri kalanına, tarayıcıda da komut satırında da erişemez. Başka birinden gelen bir betik yine de çok fazla zaman ya da bellek kullanabilir: {{ui:Durdur}} onu sonlandırır.

## Temeller

```
A = cs.magic(3)              # her yerleşik fonksiyon cs.<ad>
B = A @ A.T                  # @ matris çarpımı, .T devriktir
C = A * 2 + 1                # + - * / ** numpy'deki gibi öğe öğedir
print(A[0, 1], A[-1, -1])    # 0 tabanlı; negatif sayılar sondan sayar
row = A[1]                   # bir matriste tek indeks: bir satır
big = A[A > 4]               # mantıksal bir maske öğeleri seçer
A[0, 0] = -5                 # bir diziye atama
V, D = cs.call('eig', 2, A)  # birden çok sonuç: cs.call(ad, kaç tane, …)
```

- 1 × 1 bir dizi düz bir sayı olarak gelir; diğer diziler, seyrek matrisler, örgüler, alanlar ve modeller **Değer**'dir.
- Bir Değer'in `shape` (bir demet), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (satır sayısı) vardır ve tek bir öğe için `float()`, `int()` ve `bool()`.
- Karşılaştırmalar (`<`, `==`, …) numpy'deki gibi öğe öğedir: mantıksal bir Değer verirler.
- Yerleşik bir fonksiyona verilen sayı listeleri diziye dönüşür: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` bir matris yapar.
- Bir sözlük bir yapıya, karışık şeylerin bir listesi bir hücreye dönüşür; tersi de geçerlidir.

Betiğinizin yaptığı her genel değişken (bir sayı, bir Değer, bir sözlük, bir liste…) hata olsa bile çalışma bittiğinde **Değişkenler** sekmesine düşer. `_` ile başlayan adlar, fonksiyonlar, sınıflar ve modüller Python'da kalır. `ws.name` bir değişkeni doğrudan okur ya da ayarlar; `ws_names()` bunları listeler.

`print(…)` konsola yazar. `display(…)` (ya da `cs.display`) bir örgüyü, alanı ya da grafiği gösterir; CraftScript'teki gibi.

## Analiz kütüphanesini çağırın

Kütüphane fonksiyonları yerleşik olanlar gibi çağrılır: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Adı betikte olduğu gibi yazın: PartCraft, bir betiğin kullandığı kütüphane fonksiyonlarını çalıştırmadan önce bulur.

## Henüz yok

- numpy, scipy ve diğer paketler: burada yalnızca Python'un kendi standart kütüphanesi (`math`, `json`, `itertools`, `decimal`, `statistics`…) vardır; pencere, terminal ve veritabanı kısımları (`tkinter`, `curses`, `sqlite3`) yoktur.
- Soketler ve dışarıya ulaşacak başka her şey: Python'un burada ağı yoktur.
- `time.sleep` hemen döner.
- Düzenleyicide kod katlama ve bir CraftScript betiğinden bir Python fonksiyonunu çağırma.
- Bir çalışma her 1000 satırda bir komut bütçesini ve Durdur'u denetler; tek bir yerleşik fonksiyonun içindeki uzun bir hesaplama önce biter.
