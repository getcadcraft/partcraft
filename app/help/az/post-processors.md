---
title: Redaktə edə biləcəyiniz post prosessorları
summary: Post — alətyolunu dəzgahınızın idarəsi üçün G-koda çevirən qısa mətn faylıdır. Quraşdırılmış postlardan birini kopyalayın, lazım olan sətirləri dəyişin (sətir nömrələri, alət dəyişikliyi, əsas nöqtəyə hərəkətlər, proqramın sonu), yazdığı G-kodu yazdıqca görün və onu hissə ilə birlikdə saxlayın.
keywords: post, post prosessoru, postprocessor, G-kod, NC, GRBL, LinuxCNC, postu redaktə et, fərdi post, cpost, alət dəyişikliyi, M6, G43, sabit dövr, sətir nömrələri, modal, hadisə, dəyişən
from: 36ab8a38
---

Eyni alətyolu müxtəlif idarəetmələr üçün fərqli yazılmalıdır: sətir nömrələri ilə və ya onsuz, `M6` və ya fasilə, `G28` və ya `G53`, `M30` və ya `M2`. **Post** bunun necə olacağını deyən qısa mətndir. PartCraft-ın üç quraşdırılmış postu (Fanuc üslublu, GRBL və LinuxCNC) bu formatda yazılıb, ona görə öz postunuz onlardan birinin surətindən başlaya bilər.

Kəsməzdən əvvəl çıxışı öz dəzgahınızın simulyatorunda yoxlayın və əvvəl materialın üstündə, havada işə salın. Quraşdırılmış postlar bu format mövcud olmadan əvvəl yazdıqları dəqiq olanı yazır (testlər onların çıxışını yüzlərlə proqramda bayt-bayt müqayisə edir), lakin burada heç nə sizin dəzgahınızda sübut edilməyib və dəyişdirdiyiniz post sizin sübut etməli olduğunuz şeydir.

## Öz postunuzu yaradın

İstehsal bölməsində, **Post** altında:

- Quraşdırılmış idarəetmədə {{ui:Edit post…}} **sizin öz surətinizi** açır. Öz postlarınızdan birində isə həmin postu açır.
- {{ui:New post…}} hər hadisəsi olan kiçik boş post ilə başlayır.
- {{ui:Import post file…}} `.cpost` mətn faylını oxuyur (redaktorda **Fayl kimi saxla…** ilə əldə etdiyiniz fayl).

Redaktor mətni, postun oxunub-oxunmadığını və hansı sətirin səhv olduğunu göstərən sətiri və yazdıqca postun yazdığı G-kodu göstərir. **Önizləmə üçün** hər hadisəni işə salan kiçik nümunə proqramı və ya bu hissənin öz proqramını seçir. {{ui:Save}} postu hissənin faylında saxlayır (20-yə qədər post) və onu idarəetmə kimi seçir. Postlar hissə ilə birlikdə gedir; başqa hissədə istifadə etmək üçün onu fayl kimi saxlayıb orada idxal edin.

## Post necə görünür

```
post mymill
name Mənim dəzgahım (.nc)
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

`//` ilə başlayan sətirlər və boş sətirlər nəzərə alınmır. Yuxarıda parametrlər gəlir; sonra hər hadisə üçün bir `on <hadisə>` bloku, `end` ilə bağlanır. Buraxdığınız hadisə heç nə yazmır.

| Parametr | Mənası |
|---|---|
| `post <id>` | Postun id-si: hərflər, rəqəmlər, `-` və `_` |
| `name <mətn>` | İdarəetmə siyahısında göstərilən ad |
| `extension <ext>` | Fayl genişlənməsi: nc, ngc, tap … |
| `line-numbers 10` / `off` | Hər `emit` sətrində `N10`, `N20` … və ya heç biri |
| `decimal-point yes` / `no` | `10` əvəzinə `10.` (şərhlərdə nöqtə heç vaxt olmur) |
| `canned-cycles yes` / `no` | `no`: deşiklər onları təmsil edən G0/G1 hərəkətləri kimi yazılır |
| `modal <qrup> <sözlər>` | Qrupun sözləri (`modal motion G0 G1 G2 G3`) yalnız dəyişdikdə yazılır |

## Hadisələr

Proqram üçün bunlar bu ardıcıllıqla işləyir: `start`; sonra hər əməliyyat üçün `operation`, `tool-change` (alət dəyişdikdə), `spindle` (sürət dəyişdikdə), `approach` (birinci nöqtəyə qədər hərəkət, birinci sürətli hərəkətdən əvvəl), `coolant-on`; sonra onun hərəkətləri `rapid`, `feed` və `arc` kimi, hər sabit dövr isə `cycle-start` kimi, hər deşik üçün bir `cycle-hole` və `cycle-end`; ən sonda `end`.

Hər hadisə öz hərəkət növünün dəyişənlərindən istifadə edə bilər, `{ad}` şəklində yazılır: proqram (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), material (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), alət (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), əməliyyat (`op.name`, `op.type`), `rpm`, hərəkətin nöqtəsi (`x`, `y`, `z`, `f` və `moved`: ox dəyişdikdə doğrudur), qövslər (`arc.g` 2 və ya 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) və deşiklər (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Redaktorun **Hadisələr və dəyişənlər** siyahısı hansı hadisənin nəyi gördüyünü göstərir. Oxuya və təyin edə biləcəyiniz vəziyyət: `cool`, `offset` və `at.x`, `at.y`, `at.z`, `at.f` (son yazılmış qiymətlər).

## İfadələr

| İfadə | Nə edir |
|---|---|
| `raw TEXT` | Sətir yazıldığı kimi (sətir nömrəsi olmadan) |
| `comment TEXT` | `(TEXT)`, ASCII olmayan simvollar və mötərizələr çıxarılmış halda |
| `emit WORD WORD …` | Sözlərdən ibarət sətir; boş qalan sözlər buraxılır; söz yoxdursa, sətir də yoxdur |
| `word WORD …` | Qurulan sətrə söz əlavə edir; təkbaşına `emit` sətri bitirir |
| `if EXPR` … `else` … `end` | Şərtlər: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, yoxsa b) |
| `for tool in tools` … `end` | Proqramın istifadə etdiyi hər alət üçün bir dəfə |
| `set NAME EXPR` | Qiyməti yadda saxlayır (`set offset tool.number`) |
| `reset NAME …` | Modal sözləri unudur (qrup, `Z` kimi ünvan hərfi və ya `at.z`) |
| `do rapid X Y Z` | Nöqtə üçün `rapid` hadisəsini işə salır |

Söz `{dəyişən|filtr}` deşikləri olan yazılmış mətndir. Filtrlər: `upper`, `lower`, `pad:N` (sıfırla doldurma), `cut:N` (ilk N simvol), `safe` (şərhə uyğun ASCII) və `int`. `~` ilə bitən söz **modaldır**: yalnız son yazılandan fərqli olduqda yazılır (`G1~`, `X{x}~`). `~!` ilə bitən söz hər dəfə yazılır və yenə də yadda saxlanılır. Dəyişən olmayan ad sadə mətndir (`G81`, `mist`). Rəqəmlər 0.001 mm-ə yuvarlaqlaşdırılır və sondakı sıfırlar olmadan yazılır.

## Post nə edə bilmir

O, yalnız hərəkətlərin necə yazılacağını müəyyən edir, başqa heç nə. Alətyolunu dəyişə, əməliyyatları sıralaya, qövsü bölə, ox əlavə edə, dəzgahınızın hərəkət diapazonunu və kinematikasını bilə və ya koordinatlar üzərində hesab-çıxma apara bilməz (`+` yoxdur). Zondlama, alətin ömrü və alt-proqram dövrləri, 4-cü və 5-ci ox çıxışı və torna kodları qurulmayıb. Başqa proqramın `.cps` tipli post faylı yüklənə bilməz: bu, fərqli, daha sadə formatdır.
