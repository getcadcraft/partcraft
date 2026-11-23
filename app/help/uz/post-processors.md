---
title: Tahrirlanadigan postprotsessorlar
summary: Post — asbob yoʻlini boshqaruvingiz uchun G-code ga aylantiradigan qisqa matn fayli. Oʻrnatilgan postdan nusxa oling, kerakli qatorlarni oʻzgartiring (qator raqamlari, asbobni almashtirish, bosh harakatlar, tugash kodi), yozayotganingizda u yozadigan G-code ni koʻring va uni detal bilan saqlang.
keywords: post, postprotsessor, G-code, NC, GRBL, LinuxCNC, postni tahrirlash, maxsus post, cpost, asbobni almashtirish, M6, G43, tayyor sikl, qator raqamlari, modal, hodisa, oʻzgaruvchi
from: c78d0cae
---

Bir xil asbob yoʻlini turli boshqaruvlar uchun turlicha yozish kerak: qator raqamlari bilan yoki ularsiz, `M6` yoki toʻxtash, `G28` yoki `G53`, `M30` yoki `M2`. **Post** — bu buni qanday qilishni aytadigan qisqa matn. PartCraft ning uchta oʻrnatilgan posti (Fanuc uslubidagi, GRBL va LinuxCNC) shu formatda yozilgan, shuning uchun oʻzingizning postingiz ulardan biridan nusxa boʻlib boshlanishi mumkin.

Kesishdan oldin chiqishni oʻz stanokingizning simulyatorida tekshiring va avval uni zaxira ustida havoda ishga tushiring. Oʻrnatilgan postlar bu format mavjud boʻlishidan oldin yozgan narsalarini aynan yozadi (testlar ularning chiqishini yuzlab dasturda bayt-bayt solishtiradi), ammo bu yerdagi hech narsa sizning stanokingizda isbotlanmagan va siz oʻzgartirgan post — uni isbotlash sizning vazifangiz.

## Yaratish

Ishlab chiqarishda, **Post** ostida:

- Oʻrnatilgan boshqaruvdagi {{ui:Postni tahrirlash…}} uning **oʻz nusxangizni** ochadi. Oʻzingizning postingizda u oʻsha postni ochadi.
- {{ui:Yangi post…}} barcha hodisalari bor kichik boʻsh postdan boshlanadi.
- {{ui:Post faylini import qilish…}} `.cpost` matn faylini oʻqiydi (muharrirda **Faylga saqlash…** dan olingan fayl).

Muharrir matnni, post oʻqiladimi-yoʻqligini aytadigan qatorni (va qaysi qator notoʻgʻri ekanini) va post yozadigan G-code ni, siz yozayotganingizda, koʻrsatadi. **Oldindan koʻrish** barcha hodisalarni ishga tushiradigan kichik namunaviy dasturni yoki shu detalning oʻz dasturini tanlaydi. {{ui:Saqlash}} postni detal faylida saqlaydi (20 tagacha post) va uni boshqaruv sifatida tanlaydi. Postlar detal bilan birga yuradi; uni boshqa detalda ishlatish uchun uni fayl sifatida saqlang va u yerga import qiling.

## Post qanday koʻrinadi

```
post mymill
name Mening frezam (.nc)
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

`//` bilan boshlanadigan qatorlar va boʻsh qatorlar eʼtiborga olinmaydi. Yuqorida sozlamalar keladi; soʻng har bir hodisa uchun bitta `on <event>` bloki, `end` bilan yopiladi. Tashlab ketgan hodisa hech narsa yozmaydi.

| Sozlama | Maʼnosi |
|---|---|
| `post <id>` | Postning identifikatori: harflar, raqamlar, `-` va `_` |
| `name <text>` | Boshqaruvlar roʻyxatida koʻrsatiladigan nom |
| `extension <ext>` | Fayl kengaytmasi: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … har bir `emit` qatorida, yoki hech biri |
| `decimal-point yes` / `no` | `10` oʻrniga `10.` (izohlarda nuqta hech qachon boʻlmaydi) |
| `canned-cycles yes` / `no` | `no`: teshiklar ular ifodalaydigan G0/G1 harakatlari sifatida yoziladi |
| `modal <group> <words>` | Guruh soʻzlari (`modal motion G0 G1 G2 G3`), faqat oʻzgarganda yoziladi |

## Hodisalar

Dastur uchun ular shu tartibda ishlaydi: `start`; soʻng har bir operatsiya uchun `operation`, `tool-change` (asbob almashganda), `spindle` (tezlik oʻzgarganda), `approach` (birinchi nuqtagacha boʻlgan harakat, birinchi tez harakatdan oldin), `coolant-on`, soʻng uning harakatlari `rapid`, `feed` va `arc` sifatida, va har bir tayyor sikl `cycle-start` sifatida, har bir teshik uchun bittadan `cycle-hole` va `cycle-end`; oxirida `end`.

Uch oʻqdan oshgan narsalar uchun qoʻshimcha hodisalar (hodisasi boʻlmagan post bunday dasturni rad etadi va yetishmayotgan hodisani nomlaydi):

| Hodisa | Qachon | Uning oʻzgaruvchilari |
|---|---|---|
| `index` | Asbob yoʻnalishi oxirgisidan farq qiladigan operatsiyadan oldin va aylanma oʻqli stanokda birinchi operatsiyadan oldin | `rot.a`, `rot.b`, `rot.c` (boriladigan holatlar; stanokda boʻlmagan oʻq uchun boʻsh), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Aylanma oʻqlari kesish paytida harakatlanadigan operatsiyaning harakatlari | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (berilish teskari vaqt boʻlishi kerak boʻlganda yes), `invf` (1/daqiqa) |
| `rotary-end` | Bunday operatsiyadan keyin | |
| `probe-move` | Zond ishga tushganda toʻxtaydigan harakat | `x`, `y`, `z`, `f`, `probe.n` (1 dan 4 gacha), `probe.axis` (x, y yoki z), `probe.k` (1, 2 yoki 3) |
| `probe-set` | Bitta zondlash sikli tegishlaridan keyin | `probe.kind` (`"z"`, `"x"`, `"y"` yoki `centre`), `probe.action` (`set` yoki `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Tokarlikdagi rezba harakati | `x`, `z`, `thread.lead` |

Har bir hodisa uchun ham: `kin` (none, a, b, ac, bc), `rotary` va `tcp` (yes yoki no, Sozlashdagi stanokdan), `pivot.x`, `pivot.y`, `pivot.z`, operatsiyaning `op.tilt` va `op.turn`, va tokarlikda `spin.mode` (css yoki rpm), `spin.css`, `spin.max` va `tool.nose`. Qiymati boʻsh boʻlgan harf soʻzi, masalan A oʻqi boʻlmagan stanokdagi `A{rot.a}`, qatordan chiqarib tashlanadi. X, Y va Z ni matn sifatida qoʻshtirnoq bilan solishtiring (`if probe.kind == "z"`): qoʻshtirnoqsiz ular harakatning koordinatalari.

Postning yuqorisidagi yana ikki qator uni tokarlik posti qiladi: `machine lathe` (keyin faqat X va Z yozadi va frezalash yoʻllarini rad etadi, xuddi frezalash posti tokarlik yoʻllarini rad etgandek) va `lathe-x diameter` yoki `lathe-x radius`.

Har bir hodisa oʻz harakat turining oʻzgaruvchilarini ishlatishi mumkin, `{name}` shaklida yoziladi: dastur (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), zaxira (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), asbob (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operatsiya (`op.name`, `op.type`), `rpm`, harakat nuqtasi (`x`, `y`, `z`, `f` va `moved`: oʻq oʻzgarganda true), yoylar (`arc.g` 2 yoki 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) va teshiklar (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Muharrirning **Hodisalar va oʻzgaruvchilar** roʻyxati qaysi hodisa nimani koʻrishini koʻrsatadi. Oʻqish va oʻrnatish mumkin boʻlgan holat: `cool`, `offset`, va `at.x`, `at.y`, `at.z`, `at.f` (oxirgi yozilgan qiymatlar).

## Buyruqlar

| Buyruq | Nima qiladi |
|---|---|
| `raw TEXT` | Qanday yozilgan boʻlsa, aynan shunday qator (qator raqamisiz) |
| `comment TEXT` | ASCII boʻlmagan belgilar va qavslar olib tashlangan `(TEXT)` |
| `emit WORD WORD …` | Soʻzlar qatori; boʻsh chiqadigan soʻzlar chiqarib tashlanadi; soʻz yoʻq boʻlsa, qator ham yoʻq |
| `word WORD …` | Yasalayotgan qatorga soʻzlar qoʻshadi; oddiy `emit` uni tugatadi |
| `if EXPR` … `else` … `end` | Shartlar: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, aks holda b) |
| `for tool in tools` … `end` | Dastur ishlatadigan har bir asbob uchun bir marta |
| `set NAME EXPR` | Qiymatni eslab qoladi (`set offset tool.number`) |
| `reset NAME …` | Modal soʻzlarni unutadi (guruh, `Z` kabi manzil harfi yoki `at.z`) |
| `do rapid X Y Z` | Nuqta uchun `rapid` hodisasini ishga tushiradi |

Soʻz — `{variable|filter}` teshiklari bilan yozilgan matn. Filtrlar: `upper`, `lower`, `pad:N` (nollar bilan toʻldirish), `cut:N` (birinchi N belgi), `safe` (izohga xavfsiz ASCII) va `int`. `~` bilan tugaydigan soʻz **modal**: u faqat oxirgi yozilgandan farq qilganda yoziladi (`G1~`, `X{x}~`). `~!` bilan tugaydigan soʻz har safar yoziladi va yana eslab qolinadi. Oʻzgaruvchi boʻlmagan nom oddiy matn (`G81`, `mist`). Raqamlar 0.001 mm gacha yaxlitlanadi va oxirgi nollarsiz yoziladi.

## Post nima qila olmaydi

U faqat harakatlar qanday yozilishini hal qiladi, boshqa hech narsani emas. U asbob yoʻlini oʻzgartira olmaydi, operatsiyalarni tartiblay olmaydi, yoyni boʻla olmaydi, oʻq qoʻshib boʻlmaydi, stanokingizning yurishini yoki kinematikasini bilmaydi yoki koordinatalar ustida arifmetika bajara olmaydi (`+` yoʻq). Aylanma holatlarning oʻzi Sozlashda tasvirlangan stanokdan keladi, postdan emas: post ularning ishorasini yoki harflarini oʻzgartirishi mumkin, kinematikani emas. Asbob umri va kichik dastur sikllari qurilmagan. Boshqa dasturning `.cps` uslubidagi post fayli yuklanmaydi: bu boshqa, soddaroq format.
