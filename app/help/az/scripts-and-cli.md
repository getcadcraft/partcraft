---
title: Skriptlər və komanda sətri
summary: PartCraft skript formatı (.pcscript) bütün detalı oxunaqlı mətn kimi yazır, partcraft komanda sətri aləti isə detalları ekransız qurur, dəyişdirir, geri qaytarır və yoxlayır.
keywords: skript, pcscript, mətn, komanda sətri, cli, terminal, toplu, avtomatlaşdır, yoxla, lint, qur, ixrac, versiya nəzarəti, fərq, parametrik skript
from: c56df222
---

Diqqətli modelləşdirmə düymələrdən çox nizamdan asılıdır. Mətn kimi yazılmış detalı oxumaq, nəzərdən keçirmək, sətir-sətir müqayisə etmək və skriptlə yenidən qurmaq olar. PartCraft hər iki istiqamətdə işləyir: istənilən detal skript kimi yazıla bilər və skript detalı qurur.

## Tətbiqdə

{{ui:Parametrlər}} sekmesində, **Skript** altında:

- {{ui:Skript kimi saxla}} açıq detalı `<ad>.pcscript` kimi yükləyir.
- {{ui:Skripti aç}} `.pcscript` faylından detal qurur. Səhv sətir nömrəsi ilə bildirilir və heç nə əvəz edilmir.

## Skript formatı

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Plate width
param thick = 8
param bolt = 8.5
param margin = bolt * 1.5

sketch Plate
  on top
  point a 0, 0
  point b 120, 0
  point c 120, 60
  point d 0, 60
  line bottom a b
  line right b c
  line top c d
  line left d a
  coincident a O
  horizontal bottom
  horizontal top
  vertical left
  vertical right
  distance bottom = width
  distance left 60

extrude Base
  sketch Plate
  depth = thick

sketch HoleCentres
  on face Base end
  point h1 12, 12
  hdistance O h1 = margin
  vdistance O h1 = margin

hole Bolts
  sketch HoleCentres
  d = bolt
  through
```

Qaydalar:

- Sol kənarda olan sətir ifadə başlayır: `pcscript`, `part`, `param`, xüsusiyyət növü (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` və yeni növlər), ardınca onun adı, ya da `rollback <feature>`.
- Girintili sətirlər yuxarıdakı ifadənin parametrləridir. Tək başına duran parametr (`through`, `reverse`, `suppressed`) "bəli" mənasını verir.
- Ədədi parametr ədəd olur, ya da `=` və ifadə yazılır, bu da tənlik yaradır: `depth = thick`.
- Eskizdə: `on` müstəvini adlandırır (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); həndəsə `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (saat əqrəbinin əksinə) və ya `spline <name> fit|control <points>` ilə yazılır; münasibətlər öz növləri və onları birləşdirən adlardır (`O` başlanğıc nöqtəsidir); ölçü öz dəyəri ilə və ya `= ifadə` ilə bitir.
- Həndəsə və ya münasibət sətrinin isteğe bağlı parametrləri sonda kvadrat mötərizədə, `;` ilə ayrılmış yazılır: `[construction]`, `[side -1; label 5, 3]`.
- `#` şərh başladır (sətrin əvvəlində və ya boşluqdan sonra). Boşluqlu adlar "qoşa dırnaq" içində yazılır.
- Xüsusiyyət id-ləri yazıldığı sıra ilə f1-dən sayılır. Kənar və üz istinadları onlardan istifadə edir, məsələn `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Formatın sözü olmayan parametrlər `json` və dəyər kimi yazılır; onlar olduğu kimi geri oxunur.

Tətbiqdən saxlanılan skript hər parametri ehtiva edir, ona görə eyni detal kimi açılır. Tətbiqdən idxal edilmiş STEP gövdə skriptin içində yazılır, komanda sətrindən isə `step-file` ilə adlandırılmış ayrı `.step` faylı kimi.

## Komanda sətri aləti

Alət Node.js 24 quraşdırılmış kompüterdə, CadCraft mənbə kodunun surətindən işləyir: `node tools/partcraft-cli/partcraft.mjs <command>`. Bu developer aləti olub tətbiqlə eyni modulları istifadə edir. Detallar `.partcraft.json` faylları və ya `.pcscript` skriptləridir.

| Komanda | Nə edir |
|---|---|
| `info <part>` | Xüsusiyyətlər, parametrlər, geri qaytarma çubuğu, qurulmuş gövdənin həcmi və ölçüsü |
| `params <part>` | Hər parametr və tənlik onun dəyəri ilə |
| `set <part> width=150 Base.depth==thick` | İrəli: parametrləri dəyişir, ədədləri əlaqələndirir (`==` və ya ifadə), sadə ədədləri təyin edir |
| `drive <part> Base.depth=12` | Geriyə: göstərilən ədədin arxasındakı parametri həll edir (`--prefer width` birini seçir) |
| `build <part> --out x.step` | Yazır `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` və ya makro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Dizayn cədvəlinin hər sətri üçün bir fayl |
| `variants <part> --out-dir d` və ya `--zip f.zip` | Hər konfiqurasiya STEP, IFC, DWG və önizləmə, variantlar cədvəli və kitabxana elementi kimi (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); bax [Variant paketi hazırlayın](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Skriptdən detala |
| `to-script <part> -o part.pcscript` | Detaldan skripta |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Faylda geri qaytarma çubuğunu hərəkət etdirir |
| `check <part> [--strict]` | Nizam yoxlaması (aşağıda) |

`build` həmçinin `--set name=value` (yalnız bu qurma üçün) və `--upto <feature>` qəbul edir. Hər komanda `--json` qəbul edir. Çıxış kodları: 0 yaxşı, 1 problem tapıldı, 2 komanda səhv yazılıb. Skript heç vaxt yerində yenidən yazılmır: dəyişdirilmiş surəti saxlamaq üçün `-o` verin.

## Yoxlama

`check` detalın sonradan dəyişdirilməsini çətinləşdirən şeyləri bildirir:

| Tapıntı | Hesab olunur |
|---|---|
| Həddindən artıq təyin olunmuş eskiz (ziddiyyətli və ya təkrarlanan münasibətlər) | xəta |
| Qurulmayan xüsusiyyət | xəta |
| Xətası olan parametr və ya tənlik, ya da bir-birindən asılı parametrlər | xəta |
| Az təyin olunmuş eskiz, sərbəstlik dərəcələri ilə | xəbərdarlıq |
| Xüsusiyyətlərə və ölçülərə birbaşa yazılmış, heç bir parametrin idarə etmədiyi ədədlər | xəbərdarlıq |
| Heç nə istifadə etməyən parametr | xəbərdarlıq |
| Söndürülmüş xüsusiyyət; geri qaytarma çubuğu sonda deyil | xəbərdarlıq |

`--strict` hər xəbərdarlığı xətaya çevirir, beləliklə qurma skripti tam idarə olunmayan detalı qəbul etməyə bilər.

:::note
`.swb` makro çıxışı əksər emalatxanaların istifadə etdiyi detal modelləşdiricisi üçündür: həmin proqramın içində işlədildikdə detalı orada qurur. Burada o proqramda işlədilməyib (serverlərimizdə mövcud deyil), ona görə sınanmamış hesab edin.
:::
