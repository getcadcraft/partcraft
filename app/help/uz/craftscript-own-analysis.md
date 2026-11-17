---
title: Oʻz tahlilingizni yozish
summary: Skript ishchi maydonida tahlil tuzish: detalni toʻrlash, yigʻish va yechish, maydon va yaqinlashish grafigini koʻrsatish, natijani qoʻlda hisob bilan tekshirish hamda qadamlarni umumiy oʻzgaruvchilarga ega alohida skriptlar sifatida saqlash.
keywords: oʻz tahlilim, maxsus tahlil, FEA skript, chekli elementlar, yigʻish, bikrlik, chegaraviy shartlar, yechish, pcg, siyrak, maydon, postprotsessing, yaqinlashish, verifikatsiya, qoʻlda hisob, tekshiruv, ish oqimi
from: 0f471a8e
---

Skript ishchi maydonidagi tahlil bir-biriga oʻzgaruvchilarni uzatadigan bir necha qisqa skriptdir. [Kutubxona](topic:craftscript-library) funksiyasidan boshlang, u sizga yaqin boʻlsa, nusxasini oling va oʻzgartiring; yoki quyida koʻrsatilganidek tuzing.

## 1. Toʻr

```
model = part();                  % modellashtirayotgan detal, model sifatida
m = tetmesh(model, 4);           % taxminan 4 mm kenglikdagi tetraedrlar
show(m)
```

Davom etishdan oldin toʻrni koʻrinishda tekshiring: {{key:F}} uni moslaydi, **Koʻrsatilganlar** dagi {{ui:koʻz}} belgisi detalni yashiradi.

## 2. Yigʻish va yechish

Element tsiklini skriptda yozing (u darslikdagidek oʻqiladi), og'ir qismlarni esa oʻrnatilgan funksiyalarga qoldiring: element matritsalari, triplet lardan siyrak yigʻish va prekondisioner bilan konjugat gradiyent yechuvchisi. `static_tet` kabi kutubxona funksiyasi (kutubxonada mavjud boʻlgach) nusxalash uchun toʻliq namuna boʻladi.

## 3. Natijani koʻrsatish

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % har bir tugun uchun bitta qiymat
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Legend diapazonini qoʻlda kiritish yoki {{ui:Avtomatik}} ga qaytarish mumkin.
- Tugundagi qiymatlarni oʻqish uchun toʻrni bosing.
- Bir xil `'id'` ga ega grafik joyida yangilanadi, shuning uchun yaqinlashishni kuzatish uchun tsikl ichida chop eting va grafik chizing.

## 4. Tekshiring

Maʼlum narsa bilan solishtiring: konsolning uchidagi egilishini PL³/3EI bilan, teshikli plastinkani kuchlanish konsentratsiyasi koeffitsiyenti bilan, reaksiyalarni yuklar bilan. Tekshiruvni alohida skript sifatida yozing, shunda har bir oʻzgartirishdan keyin qayta ishlaydi:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Saqlang

- Har bir qadam oʻz skript yorligʻiga ega boʻlishi mumkin: ular oʻzgaruvchilarni baham koʻradi, shuning uchun ularni ketma-ket ishga tushiring.
- Skriptlar detalda saqlanadi. Natijalarni ham saqlash uchun **Oʻzgaruvchilar** yorligʻida **Oʻzgaruvchilarni detal bilan saqlash** belgisini qoʻying (32 MB gacha).
- Skript guruhidagi {{ui:Saqlash}} skriptni ulashish uchun yuklab oladi; {{ui:Ochish}} uni olib keladi.
