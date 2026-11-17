---
title: Bogʻlanishlar va oʻlchamlar yordamida eskizni toʻliq aniqlash
summary: Oʻng paneldan bogʻlanishlar va Oʻlcham asbobi yordamida oʻlchamlar qoʻshing, qisman, toʻliq va ortiqcha aniqlangan ranglarni oʻqing hamda ortiqcha aniqlangan eskizni tuzating.
keywords: bogʻlanishlar, cheklovlar, oʻlchamlar, aqlli oʻlcham, toʻliq aniqlangan, qisman aniqlangan, ortiqcha aniqlangan, erkinlik darajalari, ustma-ust, gorizontal, vertikal, parallel, perpendikulyar, urinma, teng, konsentrik, oʻrta nuqta, mahkamlash, ziddiyat, ortiqcha
from: e76d047a
---

Eskiz **toʻliq aniqlangan** boʻladi, qachonki har bir nuqta va har bir oʻlcham bogʻlanishlar hamda oʻlchamlar bilan mahkamlangan boʻlsa. Toʻliq aniqlangan eskiz faqat siz raqamni oʻzgartirganda oʻzgaradi, shuning uchun detal keyinroq tahrirlanganda oldindan aytib boʻladigan tarzda ishlaydi. PartCraft eskizni toʻliq aniqlashni majburlamaydi, lekin doim qanchalik yaqin ekanligingizni koʻrsatib turadi.

## Eskiz holatini oʻqish

Holat uch joyda koʻrinadi: koʻrinishning chap yuqorisidagi chip, oʻng panel yuqorisidagi xabar va tarixdagi bayroq.

| Holat | Chip | Geometriya rangi | Nimani anglatadi |
|---|---|---|---|
| Qisman aniqlangan | "Qisman aniqlangan · 3 ta erkinlik darajasi" | Koʻk | Ba'zi geometriya hali harakatlanishi mumkin. Qaysi tomonga harakatlanishini bilish uchun koʻk geometriyani sudrang |
| Toʻliq aniqlangan | "Toʻliq aniqlangan" | Siyoh (Paper'da qora, Model'da och) | Har bir nuqta va oʻlcham mahkamlangan |
| Ortiqcha aniqlangan | "Ortiqcha aniqlangan" | Tegishli bogʻlanishlarda qizil | Ba'zi bogʻlanishlar bir-biriga zid, yoki biri boshqalardan allaqachon kelib chiqadi |

Yordamchi geometriya holatidan qat'i nazar kulrang va shtrixli boʻladi. Tanlangan elementlar toʻq sariq boʻladi. "Erkinlik darajasi" — bu biror narsa hali harakatlanishi mumkin boʻlgan bir yoʻl: erkin nuqtada ikkita (chapga-oʻngga va yuqoriga-pastga), erkin aylanada uchta (markazi va radiusi).

Oʻng paneldagi xabar ostidagi izoh ranglarni takrorlaydi.

## Oʻlcham qoʻshish

1. {{key:D}} ni bosing yoki {{ui:Oʻlcham}} ni tanlang.
2. Oʻlchanadigan narsani bosing:
   - **bitta chiziq**: uning uzunligi;
   - **bitta aylana**: uning diametri; **bitta yoy**: uning radiusi;
   - **ikki nuqta** (uchi, markaz, erkin nuqta yoki koordinata boshi): ular orasidagi masofa;
   - **nuqta va chiziq**: nuqtadan chiziqqacha boʻlgan masofa;
   - **ikki parallel chiziq**: ular orasidagi masofa; **burchak ostidagi ikki chiziq**: ular orasidagi burchak.
3. Bitta element tanlangach, holat satrida "Ikkinchi elementni bosing yoki oʻlcham qayerga borishini bosing" deb yoziladi. Ikkinchi elementni bosing yoki raqam joylashishi kerak boʻlgan boʻsh joyni bosing.
4. Joriy qiymat bilan raqam oynasi ochiladi. Oʻlchamni kiriting va {{key:Enter}} ni bosing. {{key:Esc}} oʻlchangan qiymatni saqlaydi.

**Raqam qayerga qoʻyilgani turni belgilaydi**: qiyshiq chiziq yoki ikki nuqta uchun raqamni yuqoriga yoki pastga qoʻysangiz gorizontal masofa, chapga yoki oʻngga qoʻysangiz vertikal masofa, boshqa joyga qoʻysangiz haqiqiy (tekis) masofa boʻladi.

Raqam oynasi millimetr yoki gradusdagi oddiy sonlarni qabul qiladi, masalan `25`, `12.5` yoki `1e3`. Boshida turgan `⌀`, `Ø` yoki `R`, yoki oxiridagi `mm` yoki `°` e'tiborga olinmaydi. Burchaklar 0 dan 180 gradusgacha boʻladi. `20+5` kabi hisoblash qabul qilinmaydi; oʻlchamni oʻzgaruvchi yoki formulaga bogʻlash uchun uni `=` bilan boshlang.

Oʻlchamni keyinroq oʻzgartirish uchun eskizdagi raqamini ikki marta bosing yoki oʻng paneldagi roʻyxatda uning yonidagi **Tahrirlash** ni tanlang.

:::tip
Avval geometriyani tanlab (Tanlash asbobi), soʻng oʻng paneldagi oʻlcham tugmalaridan birini tanlashingiz ham mumkin: {{ui:Masofa}}, {{ui:Gorizontal masofa}}, {{ui:Vertikal masofa}}, {{ui:Radius}}, {{ui:Diametr}} yoki {{ui:Burchak}}. Faqat tanlovga mos keladiganlari koʻrsatiladi. Aylanaga diametr oʻrniga radius berishning yoʻli shu.
:::

## Bogʻlanish qoʻshish

Bogʻlanishlar asbob bilan emas, oʻng paneldan qoʻshiladi.

1. Tanlash uchun {{key:S}} ni bosing.
2. Bitta elementni bosing; bogʻlanishga ikkita element kerak boʻlsa, ikkinchisini {{key:Shift}}+bosing. Koordinata boshini ham tanlash mumkin.
3. Oʻng panelda "Tanlangan: chiziq l3, nuqta p1" deb yoziladi va mos keladigan har bir bogʻlanish uchun tugma koʻrsatiladi, masalan {{ui:∥ Parallel}} yoki {{ui:• Ustma-ust}}.
4. Tugmani tanlang. Eskiz darhol yechiladi.

Agar hech bir bogʻlanish mos kelmasa, panelda shunday yoziladi: "Bu tanlovga hech bir bogʻlanish mos kelmaydi. Bir yoki ikkita element tanlang (Shift+bosish qoʻshadi)."

Har bir bogʻlanish nimani talab qilishi va nima qilishining toʻliq roʻyxati: [Eskiz bogʻlanishlari va oʻlchamlari](topic:sketch-relations).

Bogʻlanishlar eskizda geometriya yonida kichik belgilar sifatida koʻrinadi (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Ustma-ust nuqtalar faqat geometriya tanlanganda yoki bogʻlanish muammoli boʻlganda koʻrinadi. Bogʻlanishni tanlash uchun belgisini bosing.

## Misol: L shaklidagi kronshteyn profili

1. **Old tekislik** da eskiz chizing. Chiziq asbobi bilan koordinata boshidan boshlang, L ning oltita burchagini bosing va oxirida yana koordinata boshida tugating. Zanjir birinchi nuqtani bosganingizda oʻz-oʻzidan tugaydi.
2. Gorizontalga yoki vertikalga yaqin chizilgan chiziqlar allaqachon H va V bogʻlanishlarga ega, faqat oxirgisidan tashqari: mavjud nuqtada tugaydigan chiziqqa avtomatik bogʻlanish berilmaydi. {{key:S}} ni bosing, oxirgi chiziqni bosing va oʻng paneldagi {{ui:V Vertikal}} ni tanlang. Chipda "Qisman aniqlangan · 4 ta erkinlik darajasi" yoziladi.
3. {{key:D}} ni bosing. Pastki chiziqni bosing, uning pastida bosing, `80` deb yozing va {{key:Enter}} ni bosing.
4. Chap chiziqni bosing, uning chap tomonida bosing, `60` deb yozing va {{key:Enter}} ni bosing.
5. Yuqoridagi qisqa chiziqni `20` bilan, ichki vertikal chiziqni `45` bilan xuddi shunday oʻlchang.
6. Endi chipda **Toʻliq aniqlangan** yoziladi va butun L siyoh rangiga oʻtadi.

## Ortiqcha aniqlangan eskizni tuzatish

Yangi bogʻlanish yoki oʻlcham boshqalariga zid boʻlsa, PartCraft hech narsani siljitmaydi. Geometriya aynan oʻz holicha qoladi, tegishli bogʻlanishlar qizil boʻladi va holat satri ularni nomlaydi:

- "Ortiqcha aniqlangan: Gorizontal, Masofa 40 ni birgalikda bajarib boʻlmaydi. Bekor qiling yoki ulardan birini oʻchiring." Bogʻlanishlar ziddiyatda.
- "Ortiqcha aniqlangan: Parallel allaqachon kelib chiqadi. Uni oʻchiring." Bogʻlanish hech narsa qoʻshmaydi: boshqalari uni allaqachon talab qiladi. (Masalan, toʻrtburchakning tomonlari allaqachon parallel.)

Tuzatish uchun:

1. Oxirgi oʻzgarishni bekor qilish uchun {{key:Mod+Z}} ni bosing, yoki
2. Oʻng paneldagi **Bogʻlanishlar va oʻlchamlar** roʻyxatidan qizil elementni toping (uni oʻz ichiga olgan guruh ochiq va qizil boʻladi) va yonidagi **Oʻchirish** ni tanlang. Eskizdagi belgisini yoki raqamini bosib {{key:Delete}} ni ham bosishingiz mumkin.

:::note
Bu versiyada "haydovchi" (referens) oʻlchamlar yoʻq. Boshqa bogʻlanishlar allaqachon belgilab qoʻygan oʻlchamni faqat koʻrsatadigan oʻlcham ortiqcha aniqlangan deb hisoblanadi. Buning oʻrniga oʻlchamlarni panelda oʻqing: chiziqni tanlang va Oʻlcham tugmalariga qarang, yoki ekstrud qilgandan keyin detal maʼlumotlarini tekshiring.
:::

Haqiqiy ziddiyatga ega ortiqcha aniqlangan eskiz undan foydalanadigan xususiyatni xato berishiga olib keladi ("Ortiqcha aniqlangan: 1 ta bogʻlanish birgalikda bajarilmaydi."), tarixda esa u **⚠ xato** deb belgilanadi. Faqat ortiqcha boʻlgan eskiz hali ham quriladi, ⚠ ogohlantirish bilan.

## Erkin qismni topish uchun sudrash

Tanlash asbobida har qanday koʻk nuqta yoki chiziqni torting. Yechuvchi har bir bogʻlanishni saqlagan holda uni imkon qadar kam siljitadi. Agar sudrash bogʻlanishni buzsa, geometriya oʻz joyiga qaytadi. Bu hali yetishmayotgan oʻlchamni koʻrishning eng tez usuli.

## Bogʻlanishlar roʻyxati

Hech narsa tanlanmaganda oʻng panelda **Bogʻlanishlar va oʻlchamlar** roʻyxati chiqadi. Har bir qatorda:

- **Tahrirlash** (faqat oʻlchamlar uchun): raqam oynasini ochadi;
- **Tanlash**: eskizda uni tanlaydi;
- **Oʻchirish**: uni olib tashlaydi.

Bir turdagi bir necha marta uchraydigan bogʻlanishlar bitta qatorni baham koʻradi, masalan koordinata boshiga bogʻlangan toʻrtburchak uchun "Ustma-ust × 5". Qatorni bosib oching: har bir bogʻlanish nimani bogʻlashi bilan roʻyxatlanadi ("nuqta p2, nuqta p4") va oʻzining **Tanlash** hamda **Oʻchirish** tugmalari bilan. Qatorning oʻzida:

- **Tanlash**: ularning hammasini eskizda tanlaydi;
- **Hammasini oʻchirish**: ularning hammasini bir qadamda olib tashlaydi ({{key:Mod+Z}} ularni qaytaradi).

Ortiqcha aniqlangan bogʻlanish bor guruh oʻzi ochiladi, nomi qizil boʻladi. Oʻlchamlar har doim qatorda bittadan, qiymatlari bilan roʻyxatlanadi.

Geometriya tanlanganda roʻyxatda faqat **Tanlovdagi bogʻlanishlar** koʻrsatiladi.
