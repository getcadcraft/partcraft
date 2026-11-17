---
title: Masofa, burchak va massani oʻlchash
summary: Koʻrinishda ikki narsani bosing: minimal masofa, burchak va ΔX ΔY ΔZ ni oling; qirra uzunligi, teshik diametri, yuza maydoni yoki nuqta koordinatalarini oʻqing; detal yoki yigʻmaning hajmi, massasi, massa markazi va inersiyasini oling.
keywords: oʻlchash, masofa, minimal masofa, burchak, uzunlik, radius, diametr, maydon, koordinatalar, delta, tekshirish, massa xususiyatlari, massa, ogʻirlik, massa markazi, inersiya, inersiya momenti, zichlik, material
from: 20bda0b7
---

**Oʻlchash** modelda har bir ish maydonida (Loyihalash, Forma, Simulyatsiya, Generativ, Ishlab chiqarish) va yigʻmada ishlaydi. U **Koʻrinish** guruhining {{ui:Koʻrinishlar}} menyusida yoki {{key:M}} tugmasini bosib topiladi. Koʻrinishning yuqori chap burchagida karta ochiladi.

## Bitta narsani oʻlchash

Uchini, qirrani yoki yuzani bosing. Kartada koʻrsatiladi:

- **Nuqta** (uchi, qirra oʻrtasi yoki aylana markazi): uning X, Y, Z.
- **Qirra**: toʻgʻri, aylana yoki egri, va uning uzunligi; aylana uchun yana radius, diametr va markaz.
- **Yuza**: tekis, silindr, konus va h.k., hamda uning maydoni; tekis yuzaning normali; silindrning radiusi va diametri (teshik oʻlchami). Maydonlar mesh yadrosi yasagan fasetlar boʻyicha hisoblanadi.
- **Butun jism**: {{key:Shift}} ni ushlab turing va detalni bosing. Uning hajmi, maydoni, massasi va inersiyasi olinadi (quyida qarang).

Koʻrsatkich 10 piksel ichida uchlarga, qirra oʻrtalariga va aylana markazlariga tortiladi; bosishdan oldin tortilish kichik koʻk nuqta bilan koʻrsatiladi. Teshik markazini tanlash uchun teshik oʻrtasiga, uning chetini (aylanani) tanlash uchun chetiga koʻrsating.

## Ikki narsa orasidagi masofa

Ikkinchi elementni bosing. Karta quyidagilarni qoʻshadi:

- **Minimal masofa** va ikkita eng yaqin nuqta, koʻrinishda ular orasida chiziq bilan chiziladi.
- **ΔX, ΔY, ΔZ** birinchi eng yaqin nuqtadan ikkinchisigacha.
- **Burchak** ikki tekis yuza orasida (ularning normallari orasida, 0–180°), ikki toʻgʻri qirra yoki oʻq orasida (0–90°) yoki qirra va yuza orasida.
- **Tekisliklar orasidagi masofa** ikki parallel tekis yuza uchun, **Markazdan markazgacha** ikki aylana yoki teshik uchun, **Oʻqdan oʻqgacha** ikki parallel teshik yoki silindr uchun.

Uchinchi bosish yangi juftlikni boshlaydi. {{key:Esc}} tanlovlarni tozalaydi; {{key:Esc}} yana bir marta (yoki {{ui:Yopish}}) Oʻlchashni yopadi. {{ui:Nusxalash}} natijalarni tabulyatsiya bilan ajratilgan matn sifatida xotira buferiga qoʻyadi, jadvalga qoʻyish uchun tayyor.

### Qanchalik aniq

PartCraft detalni mesh yadrosi bilan quradi, shuning uchun masofalar mesh fasetlari boʻyicha hisoblanadi va karta **taxminiy: fasetlar boʻyicha** deb yozadi: tekis yuzalar va uchlar orasida toʻgʻri, egri yuzalar uchun biroz noaniq. Nozikroq **Egrilar** sozlamasi ularni yaqinlashtiradi. Haqiqiy yuzalarda aniq oʻlchash aniq yadroni talab qiladi: bu versiyada hali qurilmagan.

## Massa xususiyatlari

Kartada yoki {{ui:Koʻrinishlar}} menyusida {{ui:Massa xususiyatlari}} ni tanlang. Detalda kartada **Material** ni tanlang (poʻlat, alyuminiy, plastmassalar va boshqalar odatiy zichliklari bilan). Yigʻmada har bir detal oʻz xususiyatlarida belgilangan materialni ishlatadi (detalni tanlang, soʻng **Material**), va natija barcha detallar uchun birgalikda.

Karta massa, hajm, maydon, massa markazi, inersiya tenzorini (Ixx, Iyy, Izz va koʻpaytmalar Ixy, Iyz, Ixz, kg·mm² da, massa markazi atrofida dunyo oʻqlari boʻylab) hamda bosh momentlarni koʻrsatadi. Material boʻlmasa, u birlik zichligiga (mm⁵) xuddi shuni koʻrsatadi va massa koʻrsatmaydi.

Raqamlar mesh yadrosi yasagan mozaikali jism uchun aniq (egri yuzalar fasetlar sifatida), shuning uchun dumaloq detal biroz past chiqadi va karta buni aytadi. Material zichliklari odatiy qoʻllanma qiymatlari; haqiqiy qotishma yoki nav bir necha foizga farq qilishi mumkin.

## Cheklovlar

- Tortilish boshqa geometriya orqasida yashirin nuqtani topishi mumkin; kartada siz nimani nazarda tutganingizni tekshiring.
- Eskiz yoki chizma varagʻini ochsangiz yoki ish maydonini almashtirsangiz, Oʻlchash yopiladi.
