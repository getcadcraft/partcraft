---
title: Tahrirlash mumkin boʻlgan postlar
summary: Post — bu asbob yoʻlini G-kodga aylantiruvchi qisqa matnli fayl. Oʻrnatilgan postlardan birini nusxalang, kerakli qatorlarni oʻzgartiring (qator raqamlari, asbob almashtirish, bosh holatga qaytish, tugash kodi), yozayotganingizda u yozadigan G-kodni koʻring va uni detal bilan saqlang.
keywords: post, post protsessori, postprotsessor, G-kod, NC, GRBL, LinuxCNC, postni tahrirlash, maxsus post, cpost, asbob almashtirish, M6, G43, tayyor sikl, qator raqamlari, modal, hodisa, oʻzgaruvchi
from: 36ab8a38
---

Bir xil asbob yoʻli turli boshqaruv qurilmalari uchun turlicha yozilishi kerak: qator raqamlari bor yoki yoʻq, `M6` yoki pauza, `G28` yoki `G53`, `M30` yoki `M2`. **Post** — bu buni qanday yozishni belgilovchi qisqa matn. PartCraft ning uchta oʻrnatilgan posti (Fanuc uslubidagi, GRBL va LinuxCNC) ushbu formatda yozilgan, shuning uchun oʻz postingiz ulardan birining nusxasidan boshlanishi mumkin.

Kesishdan oldin chiqishni stanokingizning oʻz simulyatorida tekshiring va avval uni xomashyo ustida havoda ishga tushiring. Oʻrnatilgan postlar bu format paydo boʻlishidan oldin yozgan narsani aynan yozadi (testlar ularning chiqishini yuzlab dasturlarda bayt-bayt solishtiradi), lekin bu yerdagi hech narsa sizning stanokingizda isbotlanmagan va oʻzgartirgan postingiz uni isbotlash sizning zimmangizda.

## Yangisini yaratish

Ishlab chiqarish boʻlimida, **Post** ostida:

- Oʻrnatilgan boshqaruvdagi {{ui:Postni tahrirlash…}} sizning **oʻz nusxangizni** ochadi. Oʻz postlaringizdan birida esa oʻsha postni ochadi.
- {{ui:Yangi post…}} barcha hodisalar kiritilgan kichik boʻsh postdan boshlanadi.
- {{ui:Post faylini import qilish…}} `.cpost` matn faylini oʻqiydi (bu faylni tahrirlovchida **Fayl sifatida saqlash…** orqali olasiz).

Tahrirlovchi matnni, qator oʻqilishini (va qaysi qator notoʻgʻri ekanini) hamda yozayotganingizda post yozadigan G-kodni koʻrsatadi. **Oldindan koʻrish** bilan har bir hodisani ishga tushiradigan kichik namunaviy dasturni yoki shu detalning oʻz dasturini tanlang. {{ui:Saqlash}} postni detal faylida saqlaydi (20 tagacha post) va uni boshqaruv sifatida tanlaydi. Postlar detal bilan birga koʻchadi; boshqa detalda ishlatish uchun uni fayl sifatida saqlab, oʻsha yerda import qiling.

## Post qanday koʻrinadi

```
post mymill
name Mening stanokim (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

`//` bilan boshlangan qatorlar va boʻsh qatorlar eʼtiborga olinmaydi. Eng yuqorida sozlamalar turadi; soʻng har bir hodisa uchun `end` bilan yopiladigan bitta `on <event>` bloki keladi. Oʻtkazib yuborilgan hodisa hech narsa yozmaydi.

| Parametr | Maʼnosi |
|---|---|
| `post <id>` | Postning identifikatori: harflar, raqamlar, `-` va `_` |
| `name <text>` | Boshqaruv roʻyxatida koʻrsatiladigan nom |
| `extension <ext>` | Fayl kengaytmasi: nc, ngc, tap … |
| `line-numbers 10` / `off` | Har bir `emit` qatorida `N10`, `N20` … yoki hech biri yoʻq |
| `decimal-point yes` / `no` | `10.` yoki `10` oʻrniga (izohlarda nuqta hech qachon boʻlmaydi) |
| `canned-cycles yes` / `no` | `no`: teshiklar ular ifodalaydigan G0/G1 harakatlari sifatida yoziladi |
| `modal <group> <words>` | Guruhning soʻzlari (`modal motion G0 G1 G2 G3`) faqat oʻzgarganda yoziladi |

## Hodisalar

Dastur uchun ular quyidagi tartibda ishlaydi: `start`; soʻng har bir operatsiya uchun `operation`, `tool-change` (asbob almashganda), `spindle` (tezlik oʻzgarganda), `approach` (birinchi nuqtagacha boʻlgan harakat, birinchi tez harakatdan oldin), `coolant-on`, soʻng uning harakatlari `rapid`, `feed` va `arc` sifatida, har bir tayyor sikl esa `cycle-start` sifatida, har bir teshik uchun bittadan `cycle-hole` va `cycle-end`; oxirida `end`.

Har bir hodisa oʻz harakat turining oʻzgaruvchilaridan foydalanishi mumkin, ular `{name}` shaklida yoziladi: dastur (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), xomashyo (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), asbob (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operatsiya (`op.name`, `op.type`), `rpm`, harakat nuqtasi (`x`, `y`, `z`, `f` va oʻq oʻzgarganda `true` boʻladigan `moved`), yoylar (`arc.g` 2 yoki 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) va teshiklar (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Tahrirlovchidagi **Hodisalar va oʻzgaruvchilar** roʻyxatida qaysi hodisa qaysisini koʻrishi koʻrsatiladi. Oʻqish va oʻrnatish mumkin boʻlgan holat: `cool`, `offset` hamda `at.x`, `at.y`, `at.z`, `at.f` (oxirgi yozilgan qiymatlar).

## Buyruqlar

| Buyruq | Vazifasi |
|---|---|
| `raw TEXT` | Qatorni aynan yozilganidek chiqaradi (qator raqamisiz) |
| `comment TEXT` | `(TEXT)` ASCII boʻlmagan belgilar va qavslar olib tashlangan holda |
| `emit WORD WORD …` | Soʻzlardan iborat qator; boʻsh chiqadigan soʻzlar tashlab ketiladi; soʻz boʻlmasa, qator ham boʻlmaydi |
| `word WORD …` | Tuzilayotgan qatorga soʻzlar qoʻshadi; oddiy `emit` qatorni yakunlaydi |
| `if EXPR` … `else` … `end` | Shartlar: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, aks holda b) |
| `for tool in tools` … `end` | Dastur ishlatadigan har bir asbob uchun bir marta |
| `set NAME EXPR` | Qiymatni eslab qoladi (`set offset tool.number`) |
| `reset NAME …` | Modal soʻzlarni unutadi (guruh, `Z` kabi manzil harfi yoki `at.z`) |
| `do rapid X Y Z` | Nuqta uchun `rapid` hodisasini ishga tushiradi |

Soʻz — `{variable|filter}` boʻshliqlari bilan yozilgan matn. Filtrlar: `upper`, `lower`, `pad:N` (nollar bilan toʻldirish), `cut:N` (birinchi N ta belgi), `safe` (izohda xavfsiz ASCII) va `int`. `~` bilan tugaydigan soʻz **modal**: u faqat oxirgi yozilgandan farq qilganda yoziladi (`G1~`, `X{x}~`). `~!` bilan tugaydigan soʻz har safar yoziladi va yana eslab qolinadi. Oʻzgaruvchi boʻlmagan nom oddiy matn hisoblanadi (`G81`, `mist`). Sonlar 0.001 mm gacha yaxlitlanadi va oxirgi nollarsiz yoziladi.

## Post nima qila olmaydi

U faqat harakatlarning qanday yozilishini hal qiladi, boshqa narsani emas. U asbob yoʻlini oʻzgartira olmaydi, operatsiyalarni tartiblay olmaydi, yoyni boʻla olmaydi, oʻq qoʻsha olmaydi, stanokingizning yurish diapazoni yoki kinematikasini bilmaydi va koordinatalar ustida arifmetik amal bajara olmaydi (`+` yoʻq). Zondlash, asbob muddati va kichik dastur sikllari, 4- va 5-oʻq chiqishi hamda tokarlik kodlari yaratilmagan. Boshqa dasturning `.cps` uslubidagi post fayli yuklanmaydi: bu boshqa, soddaroq formatdir.
