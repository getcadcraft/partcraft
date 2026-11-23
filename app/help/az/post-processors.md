---
title: Redaktə edə biləcəyiniz post-prosessorlar
summary: Post trayektoriyanı kontrolleriniz üçün G-koduna çevirən qısa mətn faylıdır. Daxili postlardan birini kopyalayın, lazım olan sətirləri dəyişin (sətir nömrələri, alət dəyişməsi, ev hərəkətləri, proqramın sonu), yazarkən onun yazdığı G-kodu görün və onu detalla birlikdə saxlayın.
keywords: post, post-prosessor, postprosessor, G-kod, NC, GRBL, LinuxCNC, postu redaktə et, fərdi post, cpost, alət dəyişməsi, M6, G43, sabit dövr, sətir nömrələri, modal, hadisə, dəyişən
from: c78d0cae
---

Eyni trayektoriya müxtəlif kontrollər üçün fərqli yazılmalıdır: sətir nömrələri ilə və ya onlarsız, `M6` və ya dayanma, `G28` və ya `G53`, `M30` və ya `M2`. **Post** bunun necə olacağını deyən qısa mətndir. PartCraft-ın üç daxili postu (Fanuc tipli, GRBL və LinuxCNC) bu formatda yazılıb, ona görə öz postunuz onlardan birinin kopyası kimi başlaya bilər.

Kəsmədən əvvəl çıxışı öz dəzgahınızın simulyatorunda yoxlayın və əvvəlcə xam materialın üstündə havada işə salın. Daxili postlar bu format mövcud olmazdan əvvəl yazdıqları çıxışı dəqiq yazır (testlər yüzlərlə proqramda çıxışı bayt-bayt müqayisə edir), lakin burada heç nə sizin dəzgahınızda sübut olunmayıb və dəyişdirdiyiniz post sizindir, onu özünüz sübut etməlisiniz.

## Yaradın

Manufacture-da, **Post** altında:

- Daxili kontroller üzərində {{ui:Edit post…}} **öz nüsxənizi** açır. Öz postlarınızdan birində o, həmin postu açır.
- {{ui:New post…}} hər hadisəsi olan kiçik boş postla başlayır.
- {{ui:Import post file…}} `.cpost` mətn faylını oxuyur (redaktordan **Faylı kimi saxla…** ilə aldığınız fayl).

Redaktor mətni, postun oxunub-oxunmadığını göstərən sətri (və hansı sətrin səhv olduğunu), yazdıqca post yazdığı G-kodu göstərir. **Önizləmə** seçimi hər hadisəni işə salan kiçik nümunə proqramı və ya bu detalın öz proqramını seçir. {{ui:Save}} postu detalın faylında saxlayır (20-ə qədər post) və onu kontroller kimi seçir. Postlar detalla birlikdə gedir; onu başqa detalda istifadə etmək üçün faylı kimi saxlayıb orada idxal edin.

## Post necə görünür

```
post mymill
name Mənim freza (.nc)
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

`//` ilə başlayan sətirlər və boş sətirlər göz ardı olunur. Yuxarıda parametrlər gəlir; sonra hər hadisə üçün `on <event>` bloku, `end` ilə bağlanır. Buraxdığınız hadisə heç nə yazmır.

| Parametr | Mənası |
|---|---|
| `post <id>` | Postun id-si: hərflər, rəqəmlər, `-` və `_` |
| `name <text>` | Kontroller siyahısında göstərilən ad |
| `extension <ext>` | Fayl genişlənməsi: nc, ngc, tap … |
| `line-numbers 10` / `off` | Hər `emit` sətrində `N10`, `N20` … və ya heç biri |
| `decimal-point yes` / `no` | `10` əvəzinə `10.` (şərhlərdə nöqtə heç vaxt olmur) |
| `canned-cycles yes` / `no` | `no`: deşiklər onları təmsil edən G0/G1 hərəkətləri kimi yazılır |
| `modal <group> <words>` | Qrupun sözləri (`modal motion G0 G1 G2 G3`) yalnız dəyişdikdə yazılır |

## Hadisələr

Proqram üçün bunlar bu sırayla işləyir: `start`; sonra hər əməliyyat üçün `operation`, `tool-change` (alət dəyişdikdə), `spindle` (sürət dəyişdikdə), `approach` (ilk nöqtəyə qədər hərəkət, ilk sürətli hərəkətdən əvvəl), `coolant-on`, sonra onun hərəkətləri `rapid`, `feed` və `arc` kimi, və hər sabit dövr `cycle-start` kimi, hər deşik üçün bir `cycle-hole` və `cycle-end`; sonda `end`.

Üç oxdan kənara çıxanlar üçün daha çox hadisə (hadisəsi olmayan post belə proqramdan imtina edir və çatışmayan hadisənin adını göstərir):

| Hadisə | Nə zaman | Onun dəyişənləri |
|---|---|---|
| `index` | Alət istiqaməti əvvəlkindən fərqli olan əməliyyatdan əvvəl və fırlanan oxları olan dəzgahda ilk əməliyyatdan əvvəl | `rot.a`, `rot.b`, `rot.c` (gediləcək mövqelər; dəzgahda olmayan ox üçün boş), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Kəsərkən fırlanan oxları hərəkət edən əməliyyatın hərəkətləri | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (irəliləmə tərs vaxt olmalıdırsa bəli), `invf` (1/dəqiqə) |
| `rotary-end` | Belə əməliyyatdan sonra | |
| `probe-move` | Zond toxunduqda dayanan hərəkət | `x`, `y`, `z`, `f`, `probe.n` (1-dən 4-ə), `probe.axis` (x, y və ya z), `probe.k` (1, 2 və ya 3) |
| `probe-set` | Bir zondlama dövrünün toxunuşlarından sonra | `probe.kind` (`"z"`, `"x"`, `"y"` və ya `centre`), `probe.action` (`set` və ya `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Torna dəzgahında diş açma hərəkəti | `x`, `z`, `thread.lead` |

Hər hadisə üçün də: `kin` (none, a, b, ac, bc), `rotary` və `tcp` (yes və ya no, Quraşdırmadakı dəzgahdan), `pivot.x`, `pivot.y`, `pivot.z`, əməliyyatın `op.tilt` və `op.turn`, torna dəzgahında isə `spin.mode` (css və ya rpm), `spin.css`, `spin.max` və `tool.nose`. Dəyəri boş olan hərf sözü, məsələn dəzgahda A oxu olmadıqda `A{rot.a}`, sətirdən çıxarılır. x, y və z-ni mətn kimi dırnaqda müqayisə edin (`if probe.kind == "z"`): dırnaqsız olduqda onlar hərəkətin koordinatlarıdır.

Postun başındakı iki əlavə sətir onu torna postuna çevirir: `machine lathe` (bu halda yalnız X və Z yazır və frezə postunun torna yollarını rədd etdiyi kimi frezə yollarını rədd edir) və `lathe-x diameter` və ya `lathe-x radius`.

Hər hadisə öz hərəkət növünün dəyişənlərindən istifadə edə bilər, `{name}` şəklində yazılır: proqram (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), xam material (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), alət (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), əməliyyat (`op.name`, `op.type`), `rpm`, hərəkətin nöqtəsi (`x`, `y`, `z`, `f` və `moved`: oxlardan biri dəyişdikdə doğru), qövslər (`arc.g` 2 və ya 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) və deşiklər (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Redaktorun **Hadisələr və dəyişənlər** siyahısı hansı hadisənin nəyi gördüyünü göstərir. Oxuya və təyin edə biləcəyiniz vəziyyət: `cool`, `offset` və `at.x`, `at.y`, `at.z`, `at.f` (yazılan son qiymətlər).

## Ifadələr

| İfadə | Nə edir |
|---|---|
| `raw TEXT` | Yazıldığı kimi sətir (sətir nömrəsi olmadan) |
| `comment TEXT` | `(TEXT)`, qeyri-ASCII və mötərizələr çıxarılmış |
| `emit WORD WORD …` | Sözlərdən ibarət sətir; boş qalan sözlər buraxılır; söz yoxdursa, sətir yoxdur |
| `word WORD …` | Qurulan sətirə sözlər əlavə edir; çılpaq `emit` onu bitirir |
| `if EXPR` … `else` … `end` | Şərtlər: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, yoxsa b) |
| `for tool in tools` … `end` | Proqramın istifadə etdiyi hər alət üçün bir dəfə |
| `set NAME EXPR` | Dəyər yadda saxlayır (`set offset tool.number`) |
| `reset NAME …` | Modal sözləri unudur (qrup, `Z` kimi ünvan hərfi və ya `at.z`) |
| `do rapid X Y Z` | Nöqtə üçün `rapid` hadisəsini işə salır |

Söz yazılmış mətndir, `{variable|filter}` boşluqları ilə. Filtrlər bunlardır: `upper`, `lower`, `pad:N` (sıfırla doldurma), `cut:N` (ilk N simvol), `safe` (şərhə uyğun ASCII) və `int`. `~` ilə bitən söz **modal**dır: yalnız son yazılandan fərqləndikdə yazılır (`G1~`, `X{x}~`). `~!` ilə bitən söz hər dəfə yazılır və yadda da qalır. Dəyişən olmayan ad sadə mətn kimi qalır (`G81`, `mist`). Rəqəmlər 0,001 mm-ə yuvarlaqlaşdırılır və sondakı sıfırsız yazılır.

## Post nə edə bilməz

O, yalnız hərəkətlərin necə yazılacağına qərar verir, bundan artıq heç nə. Trayektoriyanı dəyişə bilməz, əməliyyatları sıralaya bilməz, qövsü bölə bilməz, ox əlavə edə bilməz, dəzgahınızın hərəkət diapazonunu və ya kinematikasını bilmir, koordinatlar üzərində hesab apara bilməz (`+` yoxdur). Fırlanan mövqelər özləri Quraşdırmada təsvir olunan dəzgahdan gəlir, postdan yox: post onların işarəsini və ya hərflərini dəyişə bilər, kinematikanı yox. Alət ömrü və alt-proqram dövrləri qurulmayıb. Başqa proqramdan `.cps` tipli post faylı yüklənə bilməz: bu, fərqli, daha sadə formatdır.
