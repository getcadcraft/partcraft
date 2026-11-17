---
title: Nusxalash, qoʻyish va nusxa olish
summary: Eskiz geometriyasi, xususiyatlar va yigʻma detallarini nusxalash; bosgan joyingizga yoki joyida qoʻyish; bir qadamda nusxa olish; va nusxa bilan nima birga koʻchishi va nima koʻchmasligi.
keywords: nusxalash, qoʻyish, kesish, nusxa olish, bufer, joyida qoʻyish, hammasini tanlash, hech narsani tanlamaslik, oʻchirish, ctrl c, ctrl v, ctrl d, nusxa, komponent, eskizni nusxalash, xususiyatni nusxalash, detalni nusxalash
from: 611307d7
---

{{ui:Tahrirlash}} guruhida asboblar panelida {{ui:Ortga qaytarish}}, {{ui:Qayta bajarish}}, {{ui:Nusxalash}} va {{ui:Qoʻyish}} bor, shuningdek {{ui:Koʻproq}} menyusida {{ui:Kesish}}, {{ui:Nusxalash}}, {{ui:Qoʻyish}}, {{ui:Joyida qoʻyish}}, {{ui:Nusxa}}, {{ui:Oʻchirish}}, {{ui:Hammasini tanlash}} va {{ui:Hech narsani tanlamaslik}}, har biri oʻz tugmasi bilan. Nusxa olinadigan narsa qayerda ekaningizga bogʻliq: ochiq eskizdagi geometriya, tarixdagi xususiyat yoki yigʻmadagi detal.

Kulrang rangdagi element hozir bajarilmaydi. Ustiga olib boring: maslahat matnida sababi aytiladi, masalan "Avval eskiz geometriyasini tanlang" yoki "Bufferda Sketch2 va Extrude2 bor: xususiyatlar tarixga qoʻyiladi, shuning uchun avval eskizdan chiqing".

| Amal | Tugma | Eskizda | Tarixda | Yigʻmada |
|---|---|---|---|---|
| Nusxalash | {{key:Mod+C}} | Tanlangan nuqtalar va egri chiziqlar | Tanlangan eskiz, ekstruziya, aylantirish yoki teshik (eskizi bilan birga) | Tanlangan detal |
| Kesish | {{key:Mod+X}} | Nusxalash, soʻng ularni oʻchirish | Nusxalash, soʻng xususiyatni oʻchirish | Nusxalash, soʻng detalni olib tashlash |
| Qoʻyish | {{key:Mod+V}} | Nusxa kursorni kuzatadi; joyini bosing | Nusxani tarix oxiriga qoʻshadi | Boshqa detallarning yonida yangi nusxa |
| Joyida qoʻyish | {{key:Mod+Shift+V}} | Xuddi shu koordinatalarda | Qoʻyish bilan bir xil | Nusxalangan detal bilan bir joyda |
| Nusxa | {{key:Mod+D}} | Nusxalash va bir qadamda siljitish; buferga tegilmaydi | Darhol keyin ikkinchi nusxa | Boshqa detallarning yonida ikkinchi nusxa |
| Oʻchirish | {{key:Delete}} | Tanlov | Xususiyat (boshqalar ishlatsa soʻraydi) | Detal yoki birikma |
| Hammasini tanlash | {{key:Mod+A}} | Eskizdagi hamma narsa | Mavjud emas | Mavjud emas |
| Hech narsani tanlamaslik | {{key:Esc}} | Tanlovni tozalaydi | Tanlovni va tanlashni tozalaydi | Tanlovni tozalaydi |

Har bir qoʻyish, nusxa va kesish ortga qaytarish roʻyxatida bitta qadam: {{key:Mod+Z}} uni qaytaradi, {{key:Mod+Y}} qayta qoʻyadi.

## Eskizda

1. Nusxalanadigan narsani tanlang: ustiga bosing, koʻproq uchun {{key:Shift}}+bosing, oynani torting yoki hammasi uchun {{key:Mod+A}} ni bosing.
2. {{key:Mod+C}} ni bosing yoki {{ui:Nusxalash}} ni tanlang. Holat satri nimani nusxalaganini aytadi.
3. {{key:Mod+V}} ni bosing yoki {{ui:Qoʻyish}} ni tanlang. Nusxa punktir chiziq bilan kursorga ergashadi, oʻrtasidan ushlanadi. U nuqtalarga tortiladi: nusxalangan aylananing markazini nuqtaga qoʻyish uchun oʻsha nuqtani bosing.
4. Qoʻyilgan joyni bosing. Qoʻyilgan geometriya tanlangan holatda qoladi, shuning uchun uni darhol surishingiz yoki munosabatlar qoʻshishingiz mumkin. {{key:Esc}} qoʻyishni bekor qiladi.

Nima birga keladi:

- Nusxalangan chiziq, aylana yoki yoy oʻzining uchlari va markazini olib keladi.
- **Nusxalangan elementlar orasidagi** munosabatlar va oʻlchamlar birga keladi: nusxalangan toʻrtburchak oʻz oʻlchamlari bilan toʻrtburchak boʻlib qoladi.
- **Nusxalanmagan geometriyaga** va koordinata boshiga boʻlgan munosabatlar tashlab yuboriladi. Holat satri ularni sanaydi: "Nusxadan tashqari geometriyaga 2 ta munosabat birga kelmaydi". Shuning uchun qoʻyilgan nusxa munosabatlar yoki oʻlchamlar bilan bogʻlanmaguncha erkin siljiydi.
- Qoʻzgʻalmas nuqta yangi joyida ham qoʻzgʻalmas boʻlib qoladi.

{{ui:Joyida qoʻyish}} nusxani asl koordinatalarga aynan qoʻyadi, bu xuddi shu eskizda yoki boshqasida: bitta eskizdan profilni boshqasiga olib kelish uchun qulay. Xuddi shu eskizda nusxa asl nusxaning ustiga tushadi; uni tortib oling.

{{ui:Nusxa}} ({{key:Mod+D}}) tanlovni nusxalaydi va darhol joylashtirishni boshlaydi, buferdagi narsaga tegmasdan.

:::tip
Teshik markazini yoki yiriq (slot) ni bir necha marta takrorlash uchun uni bir marta nusxalang va bir necha marta qoʻying: har bir {{key:Mod+V}} kursorga ergashuvchi yangi nusxa boshlaydi.
:::

## Tarixda

1. Tarixda eskiz, ekstruziya, aylantirish yoki teshikni bosing.
2. {{key:Mod+C}} uni nusxalaydi. Eskizga asoslangan xususiyat eskizi bilan birga nusxalanadi.
3. {{key:Mod+V}} nusxani tarix oxiriga qoʻshadi (ortga qaytarish panelida orqaga qaytgan boʻlsangiz, panelda), yangi nomlar bilan, masalan Sketch3 va Extrude2.

Nusxa asl bilan bir xil tekislik yoki yuzda turadi, shuning uchun uning ustida quriladi va detal bir xil koʻrinadi. Nusxani koʻchirish uchun yangi eskizni tanlang va oʻng paneldagi tekisligini oʻzgartiring, yoki uni ochib profilni suring yoki qayta oʻlchang.

- **Boshqa detalga** qoʻyish: oʻsha detalni oching va {{key:Mod+V}} ni bosing. Agar nusxaning eskizi bu detalda boʻlmagan yuzda boʻlsa, u Old tekislikka tushadi va holat satri buni aytadi.
- {{ui:Nusxa}} bitta detal ichida nusxalash va qoʻyishni bir qadamda bajaradi.
- {{ui:Kesish}} xususiyatni nusxalaydi, soʻng uni oʻchiradi (boshqa xususiyatlar ishlatsa avval soʻraydi).

Massivlar, aks ettirishlar, yumaloqlashlar, faskalar, qobiqlar va import qilingan qattiq jismlarni nusxalab boʻlmaydi: ular bu detalda tanlangan qirralar, yuzlar yoki xususiyatlarga bogʻliq. Ular asoslangan eskizni yoki xususiyatni nusxalang yoki uni {{ui:Chiziqli}} yoki {{ui:Doiraviy}} bilan massivlang.

## Yigʻmada

1. Koʻrinishda yoki chapdagi roʻyxatda detalni bosing.
2. {{ui:Nusxa}} ({{key:Mod+D}}) ni tanlang yoki {{key:Mod+C}}, soʻng {{key:Mod+V}}.

Yangi nusxa **bir xil detal** boʻladi: birini tahrirlasangiz, har bir nusxa oʻzgaradi. U yigʻmadagi hamma narsadan 20 mm oʻngda, nusxalangan nusxa bilan bir xil burilgan holda paydo boʻladi va birikma uni joylashtirmaguncha shu yerda qoladi. {{ui:Joyida qoʻyish}} ({{key:Mod+Shift+V}}) uni nusxalangan detal turgan aniq joyga qoʻyadi; uni koʻchirish uchun birikma bogʻlang (surgichli birikmaning ofseti uni oʻq boʻylab suradi).

Boshqa yigʻmadan nusxalangan detalni qoʻyish, oʻsha fayldan {{ui:Qoʻshish}} bilan bir xil ish qiladi: detal bilan birga keladi. Yigʻma guruhidagi {{ui:Nusxa qoʻshish}} {{ui:Nusxa}} bilan bir xil ish qiladi va hech narsa tanlanmagan holda ham ishlaydi (oxirgi detalni nusxalaydi).

## Buferi

- Bu kompyuterniki emas, PartCraft ning oʻz buferi: PartCraft geometriyasini boshqa dasturga yoki matnni PartCraft koʻrinishlariga qoʻyib boʻlmaydi.
- U shu brauzerda saqlanadi, shuning uchun boshqa PartCraft varagʻi nusxalangan narsani qoʻyishi mumkin. U ochilgan fayl kabi qayta oʻqiladi va tekshiriladi; buzilgan yoki boshqa versiyadan boʻlganlar rad etiladi.
- Katta import qilingan STEP faylli detal brauzerda saqlash uchun juda katta boʻlishi mumkin: u faqat shu varaqda qoʻyiladi.
- Raqam katakchasida yoki yordam qidiruvida {{key:Mod+C}} va {{key:Mod+V}} odatdagidek matnni nusxalaydi va qoʻyadi.

Chizma varagʻida nusxalash va qoʻyish hali mavjud emas; {{ui:Oʻchirish}} va {{ui:Hech narsani tanlamaslik}} tanlangan belgida ishlaydi. Qarang: [Hali tayyor emas](topic:not-built-yet).
