---
title: Poʻlat profillardan ramalar
summary: Bir yoki bir nechta eskizning chiziqlari boʻylab poʻlat profillar qoʻying va payvandlangan rama hosil qiling: qiyshiq yoki uchma-uch burchaklar, bir-biriga mos kesilgan elementlar, uchlik qopqoqlar, tayanch plastinalar va uzunlik hamda uchlarning burchaklari bilan kesish roʻyxati.
keywords: konstruktiv element, rama, poʻlat rama, quvur, kvadrat quvur, hss, rhs, shs, chs, keng flanets, i-beam, w beam, ipe, hea, heb, shveller, upn, burchak, qiyshiq, uchma-uch birikma, kesib tushirish, uchlik qopqoq, tayanch plastina, kesish roʻyxati
from: 59071e5a
---

**Konstruktiv element** tanlagan eskizlarning har bir chizigʻi boʻylab poʻlat profil qoʻyadi. Ramani chiziqlar bilan chizing (har bir chiziq bitta element), keyin profilni tanlang: elementlar quriladi, ularning burchaklari qirqiladi va choʻziladi, kesish roʻyxati esa har bir boʻlakni qancha uzunlikda va qanday burchakda kesish kerakligini aytadi.

## Rama yasash

1. Ramani eskizda chiziqlar bilan chizing, masalan yuqori tekislikda toʻrtburchak. Yordamchi deb belgilangan chiziqlar qoldiriladi.
2. Eskiz tanlangan holda {{ui:Koʻproq}} › {{ui:Konstruktiv element}} ni tanlang. Eskizning har bir chizigʻiga element beriladi.
3. Panelda profilning **Oila** va **Format**ini tanlang. Oilalar: AISC jadvallari (W, S, C, L, HSS quvurlari, Pipe) va EN 10365 (IPE, HEA, HEB, UPN).

### 3D da rama

Bir nechta eskizning chiziqlari bitta ramani hosil qiladi: yuqorida tekislikda chizilgan yuqori toʻrtburchak va tik turgan tekisliklarda chizilgan ayaqlar 3D da uchlari bilan tutashadi. Panelda **Chiziqlar boʻylab** ostida, elementlar ergashadigan har bir eskizni belgilang. Bir mikrometr ichida tutashgan uchlar ulanadi.

## Profilni chizigʻida oʻrnatish

- **Burish (°)** profilni oʻz chizigʻi atrofida buradi. Nur chuqurligi tik turgan holda turadi (vertikal elementda chuqurligi oldinga qarab turadi).
- **Chiziqda** profilning qaysi nuqtasi chiziqda turishini tanlaydi: markaz, yoki profil konturining burchagi yoki yon tomonining oʻrtasi. “Pastki oʻrta” ramani eskiz tekisligidan oʻtib ketmasdan, uning ustiga qoʻyadi.

## Burchaklar va birikmalar

| Elementlar qayerda uchrashadi | Nima boʻladi |
|---|---|
| Ikki element uchma-uch, **Burchaklar: Qiyshiq** | Ikkalasi ular orasidagi yarim tekislikda kesiladi, rasm ramkasi kabi |
| Ikki element uchma-uch, **Burchaklar: Uchma-uch** | Birinchi element ikkinchisining uzoq yuzigacha davom etadi; ikkinchisi birinchisining yaqin yuzasida toʻgʻri kesiladi |
| Element boshqasining oʻrtasida tugaydi (T shakl) | U boshqa elementning tashqi tomoniga mos keladigan qilib kesiladi |
| Uchta yoki undan koʻp element bitta nuqtada tugaydi | Birinchisi boshqalardan oʻtib, toʻgʻri davom etadi; boshqalari unga mos keladigan qilib kesiladi |

Birinchi element — chizigʻi birinchi boʻlgan element: chiziqlar chizilgan tartibni saqlaydi, eskizlar esa belgilangan tartibda eskiz-eskiz.

## Uchlik qopqoqlar va tayanch plastinalar

- **Uchlik qopqoqlar** har bir erkin uchni profil konturi boʻyicha plastina bilan yopadi, siz belgilagan qalinlikda, uchidan tashqarida.
- **Tayanch plastinalar** burchak ostida uchrashgan har bir burchakka uchburchak plastina qoʻyadi: burchakdan har bir element boʻylab **Tayanch oʻlchami**, eni boʻylab **Tayanch qalinligi**, burchak tekisligida markazlashgan.

## Kesish roʻyxati

Panelda har bir boʻlak roʻyxatlanadi, bir xil boʻlaklar guruhlangan holda: profil, uzunlik (uzun nuqtadan uzun nuqtagacha, arra uchun belgilangandek), har bir uchi qanday kesilgani (toʻgʻri, toʻgʻridan burchak ostida yoki mosligicha kesish) va ular qaysi elementlar. Uchlik qopqoqlar va tayanch plastinalar oʻlchamlari bilan roʻyxatlanadi. {{ui:Kesish roʻyxatini saqlash (CSV)}} uni elektron jadval uchun saqlaydi.

Dumaloq burchakli quvurga mos kesilgan element oʻsha quvur burchak radiusiga biroz kirib boradi, shuning uchun uning uzun nuqta uzunligi yuzalar orasidagi boʻshliqdan bir necha millimetrga uzunroq boʻladi.

## Cheklovlar

- Elementlar faqat toʻgʻri chiziqlarga ergashadi; eskizdagi yoylar va splaynlar qoldiriladi.
- Birikmalar kesiladi, payvandlanmaydi: payvand chokining chizigi chizilmaydi va rama bitta qattiq jism.
- Profillar jadval oʻlchamlari boʻyicha chiziladi: W shakllari ildiz yumaloqlashi bilan, S va shvellerlar parallel flanetslar bilan, quvurlar burchak radiuslari bilan; teshiklar, uchlarni tayyorlash va payvand oraliqlari siz uchun yasalmaydi.
- Konstruktiv elementlar mesh yadrosi bilan quriladi. Aniq yadro yoqilganda (faqat ishlab chiquvchilar uchun) ular shuni aytadi va qurilmaydi.
