---
title: Birinchi eskizingizni chizing
summary: Tekislikda yoki yassi yuzada eskiz oching; chiziqlar, toʻrtburchaklar, aylanalar, yoylar, nuqtalar va markaziy chiziqlar chizing, burchakni yumaloqlang, tanlang, sudrang va oʻchiring.
keywords: eskiz, chizish, chiziq, toʻrtburchak, aylana, yoy, nuqta, markaziy chiziq, yordamchi, yumaloqlash, eskiz yumaloqlash, burchakni yumaloqlash, tutish, tanlash, oyna, sudrash, profil
from: 28be7436
---

Har bir jism eskizdan boshlanadi: tekislikdagi yassi chizma. Bu qoʻllanma chizish asboblarini yoritadi. Eskizni munosabatlar va oʻlchamlar bilan mahkamlash [Eskizni toʻliq aniqlash](topic:relations-dimensions) boʻlimida bayon etilgan.

## Eskizni boshlash

Eskizni asosiy tekislikda yoki detalning istalgan yassi yuzasida chizishingiz mumkin.

1. Eskiz qayerda chizilishini tanlang:
   - asosiy tekislik: tarixda **Front plane**, **Top plane** yoki **Right plane** ni bosing yoki koʻrinishda tekislikni bosing;
   - yassi yuza: koʻrinishda yuzani bosing. Butun yuza ajratib koʻrsatiladi.
2. Asboblar panelida {{ui:Eskiz}} ni tanlang yoki {{key:S}} tugmasini bosing. (Yuza tanlangan boʻlsa, oʻng panelda {{ui:Bu yuzada eskiz}} ni ham tanlashingiz mumkin; tekislik tanlangan boʻlsa, {{ui:Unda eskiz}}.)

Koʻrinish tekislikka tik holatga oʻtadi, eskiz asboblari asboblar panelida paydo boʻladi va {{ui:Chiziq}} asbobi tayyor boʻladi. Hech narsa tanlanmagan holda {{ui:Eskiz}} tugmasini bossangiz, asosiy tekisliklar koʻrinadi va holat satrida “Eskiz chizish uchun tekislik yoki yassi yuzani bosing. Esc toʻxtatadi.” chiqadi.

:::note
Egri yuzada eskiz boʻlmaydi: “Bu yuza egri. Eskiz chizish uchun yassi yuza yoki tekislikni tanlang.”
:::

**Yuzadagi eskiz oʻsha yuzaga ergashadi.** Agar yuza eskiz qirrasi yoki ekstruziya uchi bilan hosil qilingan boʻlsa, xususiyat oʻzgarganda yangi eskiz ham siljiydi (chuqurroq kovak oʻz tagidagi eskizni ham oʻzi bilan koʻchiradi). Agar panelda yuza “Tanlangan joyda qotirilgan” deb yozilsa, eskiz yuza hozir turgan joyda qoladi.

## Chizish asboblari

Har bir asbobning asboblar panelida tugmasi va klavishi bor. Xuddi shu tugmani yana tanlang, {{key:S}} ni bosing yoki {{key:Esc}} ni bosib Tanlash rejimiga qayting.

| Asbob | Klavisha | Qanday chizish |
|---|---|---|
| {{ui:Chiziq}} | {{key:L}} | Boshlanish nuqtasini bosing, keyin har bir keyingi nuqtani bosing. Chiziqlar uchma-uch ulanadi. Zanjirni {{key:Esc}}, {{key:Enter}}, oʻng tugma yoki ikki marta bosish bilan tugating. Mavjud nuqtani bosish ham uni tugatadi |
| {{ui:Toʻrtburchak}} | {{key:R}} | Bir burchakni, keyin qarama-qarshi burchakni bosing. Burchaklarda ulangan toʻrt chiziq hosil boʻladi: ikkitasi gorizontal, ikkitasi vertikal |
| {{ui:Aylana}} | {{key:C}} | Markazni, keyin aylanadagi nuqtani bosing |
| {{ui:Yoy}} | {{key:A}} | Markazni, keyin boshlanishni, keyin tugashni bosing. Yoy kursorni markaz atrofida harakatlantirgan yoʻnalishda chiziladi |
| {{ui:Nuqta}} | {{key:P}} | Bosing. Oʻz-oʻzidan turgan nuqta {{ui:Teshik}} uchun teshik markazini belgilaydi |
| {{ui:Markaziy chiziq}} | {{key:N}} | Chiziqqa oʻxshash, bir vaqtda bitta kesma. Punktir chiziq bilan chiziladi; bu yordamchi geometriya boʻlib, aylantirish oʻqi yoki yoʻnaltiruvchi sifatida ishlatiladi |
| {{ui:Yumaloqlash}} | {{key:F}} | Ikki chiziq tutashadigan burchakni bosing, radiusni kiriting, {{key:Enter}} ni bosing |
| {{ui:Splayn}} | {{key:B}} | Egri chiziq oʻtadigan nuqtalarni bosing; {{key:Enter}} tugatadi, birinchi nuqtani bosish esa uni yopadi. Qarang: [Splaynlar, qirqish, siljitish va boshqa eskiz asboblari](topic:sketch-tools) |
| {{ui:Qirqish}} | {{key:T}} | Oʻchiriladigan egri chiziq boʻlagini eng yaqin kesishmalargacha bosing |
| {{ui:Oʻlcham}} | {{key:D}} | Qarang: [Eskizni toʻliq aniqlash](topic:relations-dimensions) |

Chizish paytida kursor yonidagi kichik oynada uzunlik, oʻlcham, diametr yoki radius koʻrsatiladi.

### Chizish paytida oʻlchamni kiriting

Chiziq, toʻrtburchak, aylana yoki yoy uchun birinchi bosishdan keyin oʻlchamni bosish oʻrniga kiritishingiz mumkin. Raqam kiritilganda kursor yonida oʻsha raqam bilan oyna ochiladi:

| Asbob | Oynalar ({{key:Tab}} keyingisiga oʻtadi) | {{key:Enter}} bosilganda nima boʻladi |
|---|---|---|
| {{ui:Chiziq}}, {{ui:Markaziy chiziq}} | Uzunlik, keyin eskizning X oʻqidan burchak (°) | Chiziq shuncha uzunlikda kursor tomon yoki kiritilgan burchakda chiziladi; zanjir uning uchidan davom etadi |
| {{ui:Toʻrtburchak}} | Kenglik, keyin Balandlik | Toʻrtburchak birinchi burchakdan kursor tomon chiziladi; kiritilmagan oʻlcham kursordan olinadi |
| {{ui:Aylana}} | Diametr | Aylana shu diametrda chiziladi |
| {{ui:Yoy}} | Markazdan keyin radius, keyin boshlanishdan keyin yoy burchagi (°) | Boshlanish markazdan shuncha masofada boʻladi; keyin yoy kursorni harakatlantirgan yoʻnalishda shuncha burchakka davom etadi |

Kiritgan har bir oʻlcham bir qadamda **boshqaruvchi oʻlcham**ga aylanadi, shuning uchun eskiz oʻlchamli chiqadi: {{key:Mod+Z}} shaklni va uning oʻlchamlarini birga olib tashlaydi. {{key:Enter}} bosish oʻrniga bosish kiritilgan qiymatni saqlaydi, qolganini esa bosishdan oladi. {{key:Esc}} oynani yopadi va kursorga qaytadi.

Faqat bosish orqali chizmoqchi boʻlsangiz, buni {{ui:Sozlamalar}} › {{ui:PartCraft}} › **Chizish paytida oʻlchamlash** boʻlimida oʻchiring. Qarang: [PartCraft sozlamalari](topic:settings).

Eskiz asboblari oxirida joylashgan {{ui:Koʻproq}} ichida boshqaruv nuqtali splayn, {{ui:Choʻzish}}, {{ui:Siljitish}}, {{ui:Aks ettirish}}, {{ui:Koʻpburchak}}, {{ui:Yoriq}}, eskiz massivlari va {{ui:Qirrani proyeksiyalash}} bor: qarang [Splaynlar, qirqish, siljitish va boshqa eskiz asboblari](topic:sketch-tools).

### Tutish

Tutish munosabatlarni oʻzi qoʻshadi, shunda eskiz siljiganda ulangan holda qoladi:

- **Uchi nuqtada yoki koordinata boshida** kichik kvadrat koʻrinadi. Yangi nuqta unga ustma-ust qilinadi.
- **Chiziq, aylana yoki yoyda** kichik xoch koʻrinadi. Yangi nuqta oʻsha egri chiziqqa joylashtiriladi.
- Gorizontal yoki vertikaldan 3 gradus ichidagi chiziq unga tutiladi va gorizontal yoki vertikal munosabat oladi. Belgida “H” yoki “V” koʻrsatiladi.

Tutishdan qochish uchun kattalashtiring, shunda nuqta yoki egri chiziqdan uzoqroq bosasiz.

## Burchakni yumaloqlash

1. {{key:F}} ni bosing yoki {{ui:Yumaloqlash}} ni tanlang.
2. Ikki chiziq tutashadigan burchak nuqtasini bosing.
3. Taklif qilingan radius bilan oyna ochiladi. Radiusni kiriting va {{key:Enter}} ni bosing.

Ikkala chiziq qirqiladi va radius oʻlchamli urinma yoy bilan ulanadi. Koʻrinishi mumkin boʻlgan xabarlar: “Yumaloqlash uchun aynan ikki chiziq tutashadigan burchak kerak.” va “Bu radius bu chiziqlar uchun juda katta.”

:::tip
Eskiz yumaloqlashi profilning burchagini yumaloqlaydi, shuning uchun ekstruziya yumaloq vertikal qirralarga ega boʻladi. Jismning oʻz qirralarini yumaloqlash uchun (masalan, plastinaning yuqori qirralari) detalda {{ui:Yumaloqlash}} xususiyatidan foydalaning: qarang [Yumaloqlash, qiyalatish va boʻshlatish](topic:fillet-chamfer-shell). Eskizda asboblar panelidagi Yumaloqlash eskiz asbobi; detalda esa xususiyatdir.
:::

## Yordamchi geometriya

Yordamchi chiziqlar, aylanalar va yoylar punktir va kulrang boʻladi. Ular eskizga yoʻl koʻrsatadi, lekin ekstruziya yoki aylantirilgan profilning qismi emas.

1. Chiziqlar, aylanalar yoki yoylarni tanlang.
2. {{key:Q}} ni bosing yoki {{ui:Yordamchi}} ni tanlang. Ularni qaytarish uchun yana bosing.

## Tanlash, sudrash va oʻchirish

Tanlash uchun {{key:S}} ni bosing (yoki faol asbob qolmaguncha {{key:Esc}} ni bosing).

- Tanlash uchun nuqta, chiziq, aylana, yoy, munosabat belgisi yoki oʻlchamni bosing. {{key:Shift}}+bosish tanlovga qoʻshadi yoki undan olib tashlaydi. Windows va Linuxda {{key:Ctrl}}+bosish xuddi shunday ish qiladi; Mac’da ⌘+bosish.
- Boʻsh joyda sudrab oyna chizing: undagi hamma narsa toʻliq tanlanadi.
- Nuqta yoki chiziqni sudrab siljiting. Yechuvchi siljish vaqtida har bir munosabat va oʻlchamni saqlaydi, shuning uchun faqat erkin geometriya siljiydi. Aylananing chetini sudrab radiusini oʻzgartiring.
- Yozuvni koʻchirish uchun oʻlcham raqamini sudrang.
- Tanlovni oʻchirish uchun {{key:Delete}} yoki {{key:Backspace}} ni bosing yoki oʻng panelda {{ui:Oʻchirish}} ni tanlang. Geometriyani oʻchirish unga tegishli munosabatlarni ham oʻchiradi.

## Eskizda kattalashtirish va surish

- Kursor joyida kattalashtirish uchun gʻildirakni aylantiring.
- Surish uchun oʻrta yoki oʻng tugma bilan sudrang.
- Asboblar panelidagi yoki oʻng paneldagi {{ui:Moslash}} eskizni koʻrinishga moslaydi. Eskizda {{key:F}} klavishi Yumaloqlash asbobi, Moslash emas.

## Eskizni yopish

Asboblar panelida {{ui:Chiqish}} yoki oʻng panelda {{ui:Eskizdan chiqish}} ni tanlang yoki eskiz yopilguncha {{key:Esc}} ni bosing. Har bir {{key:Esc}} avval bajarilayotgan ishni bekor qiladi, keyin Tanlash rejimiga qaytadi, keyin tanlovni tozalaydi, keyingisi esa eskizni yopadi.

Eskiz tanlangan holda qoladi, shuning uchun keyingi {{ui:Ekstruziya}} yoki {{ui:Aylantirish}} uni ishlatadi.

## Yaxshi profil nimadan iborat

{{ui:Ekstruziya}} va {{ui:Aylantirish}} eskizning qattiq (yordamchi boʻlmagan) chiziqlari, aylanalari, yoylari va splaynlarining **har bir yopiq halqasini** ishlatadi. Halqa ichidagi halqalar teshiklarga aylanadi.

- Har bir uchi aynan bitta boshqa uchga tutashishi kerak. “Profil ochiq: (12.5, 40) dagi uch hech narsaga ulanmagan.” joyni koʻrsatadi.
- Bir nuqtada uchta uch tutashmasligi kerak: “Profil (0, 20) da shoxlanadi: u yerda ikkitadan koʻp uch tutashadi.”
- Profil nuqtalar va yordamchi geometriyani e’tiborga olmaydi.

Keyingi: [Eskizni munosabatlar va oʻlchamlar bilan toʻliq aniqlash](topic:relations-dimensions).

## Fotosuratdan eskiz

**Features › More › Sketch from a photo…** (yoki Feature tree lentasidagi Sketch guruhi) oddiy fon ustidagi yassi detal rasmini — uning konturini va teshiklarini — yoki qalam chizmasini chiziqlar, yoylar va aylanalardan iborat eskizga koʻchiradi. Eskiz toʻgʻri oʻlchamga ega boʻlishi uchun bitta uzunlikni koʻrsating (kenglik, balandlik yoki eng uzun tomon), oldindan koʻrinishda topilganlarni tekshiring va **Make the sketch** ni tanlang; uni xuddi shu bekor qilish qadamida ekstruziya ham qilishi mumkin. U shu kompyuterda koʻchiriladi. Burchak radiuslari taxminan 5 % aniqlikda chiqadi, bir-ikki piksel darajasidagi tafsilotlar yoʻqoladi va qiya olingan yoki detal ustida soyalari bor surat tekislanmaydi: detalni toʻgʻridan, bir tekis yorugʻlikda suratga oling.
