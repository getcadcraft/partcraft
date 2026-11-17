---
title: PartCraft ilə başlayın
summary: PartCraft bu gün nə edir, brauzerinizə nə lazımdır və on dəqiqədə ilk detal: eskizdən saxlanılmış fayla qədər.
keywords: başlanğıc, ilk işə salma, sürətli başlanğıc, giriş, dərslik, ilk detal, lövhə, parametrik, detal modelləşdiricisi
from: 7d43283f
---

PartCraft CadCraft ailəsinin parametrik detal və yığım proqramıdır. Siz 2D eskiz çəkirsiniz, onu əlaqələr və ölçülərlə bağlayırsınız, ekstruziya, fırlatma və deşik kimi xüsusiyyətlərlə bərk cismə çevirirsiniz və sonra istənilən ədədi dəyişə bilərsiniz: detal öz tarixçəsindən yenidən qurulur. Detallar sonra yığımlara daxil edilir, burada birləşmələr onları yerləşdirir və hərəkəti yoxlamağa imkan verir.

Bu versiyanın imkanları:

| İş | Nə əldə edirsiniz |
|---|---|
| Eskizlər | Xətlər, düzbucaqlılar, dairələr, qövslər, nöqtələr və mərkəz xətləri, əlaqələr və ölçülərlə, həmçinin canlı vəziyyət: az, tam və ya artıq təyin olunmuş |
| Bərk xüsusiyyətlər | Ekstruziya, kəsmə, fırlatma, fırlanmış kəsmə, sadə və pilləli deşiklər, xətti və dairəvi massivlər, güzgü, düz üzlər arasında düz kənarlarda yumru və fasalar, düz üzlərdə qabıqlar və meyllər. Sweep, loft və dəqiq nüvə tələb edən digər xüsusiyyətlər bu versiyada hələ qurulmayıb: bax: [Hələ qurulmayanlar](topic:not-built-yet) |
| Tarixçə | İstənilən xüsusiyyətin ədədlərini redaktə edin, söndürün, geri qaytarın, sıranı dəyişin və silin, geri alma ilə |
| Yığımlar | Detallar bərk, fırlanan və sürüşən birləşmələrlə birləşdirilir, toqquşma yoxlaması və hərəkət yoxlaması |
| Çertyojlar | Üç görünüşü, izometriyanı, kəsiyi, detal görünüşünü, ümumi ölçüləri, datumları, xüsusiyyət nəzarət çərçivələrini və səth emalı simvollarını olan A3 vərəq, PDF kimi ixrac olunur |
| Fayllar | Öz detal və yığım faylları; ixrac: STL, 3MF, dəqiq STEP, DXF və PDF |

Hər şey brauzerinizdə, kompüterinizdə işləyir. **Heç nə yüklənmir.** Faylların hara getdiyini görmək üçün bax: [Fayllar: açmaq, saxlamaq və ixrac](topic:files).

## Nə lazımdır

- **WebGL** (3D qrafika) və **WebAssembly** aktiv olmaqla müasir Chrome, Edge, Firefox və ya Safari. Hər ikisi standart olaraq aktivdir. Bərk həndəsəni proqramla birlikdə yüklənən WebAssembly şəbəkə nüvəsi qurur: bax: [Şəbəkə nüvəsi](topic:solid-kernels).
- Siçan ən asandır. Trackpad işləyir, sensor ekranlar isə baxış və sadə eskizləmə üçün işləyir: bax: [Trackpad, sensor və kiçik ekranlar](topic:trackpad-and-touch).
- Ən azı 1280 piksel enində ekran bütün alət panelini bir sırada göstərir. Daha dar pəncərələrdə alət paneli yan-yana sürüşür; telefonda panellər aşağıdakı zolaqdan vərəq kimi açılır.

Brauzerlər haqqında daha çox: [Brauzerlər və kompüterlər](common:browsers).

:::note
PartCraft brauzerdə işləyir və masaüstündə CadCraft Studio daxilində işləyir. Bulud saxlanması hələ mövcud deyil: detalları kompüterinizdən açır və fayl kimi ona geri saxlayırsınız.
:::

## PartCraft-ı açın

1. PartCraft-ı açın.
2. Ekranda "Bərk cisim nüvəsi yüklənir…" yazısı görünənə qədər gözləyin. İlk dəfə bu bir az vaxt aparır.
3. Üç baza müstəvisi olan boş 3D baxış, solda tarixçə ("Part1", sonra Ön müstəvi, Üst müstəvi, Sağ müstəvi) və baxışda "Detal başlat" başlığı olan qutu görürsünüz.
4. Status zolağının sağ ucunda yaxınlıqdakı çip "Şəbəkə nüvəsi" yazır: bu versiyada PartCraft hər detalı şəbəkə nüvəsi ilə qurur, ona görə yumru üzlər düz fasetlərdir. Dərhal modelləşdirməyə başlaya bilərsiniz.

Əgər baxış brauzerin 3D göstərə bilmədiyini və ya nüvənin yüklənmədiyini deyirsə, bax: [Problemlərin həlli](topic:troubleshooting#the-app-does-not-start).

## İlk detalınız: deşikli lövhə

60 × 40 mm ölçülü, 10 mm qalınlığında, içindən 6 mm deşikli lövhə hazırlayacaqsınız. Ölçü vahidləri millimetrdir.

### Konturu eskizləyin

1. Soldakı tarixçədə **Ön müstəvi** üzərinə klikləyin. Müstəvi baxışda vurğulanır.
2. Alət panelində {{ui:Eskiz}} seçin və ya {{key:S}} basın. Baxış birbaşa müstəviyə çevrilir və Xətt aləti aktiv olur.
3. Düzbucaqlı aləti üçün {{key:R}} basın.
4. Göstəricini başlanğıca (xaçlı kiçik qırmızı dairə) aparın. Kiçik kvadrat onun yapışdığını göstərir. Klikləyin.
5. Yuxarı və sağa aparın və yenidən klikləyin. Düzbucaqlınız var. Xətləri mavidir: mavi o deməkdir ki, onlar hələ hərəkət edə bilər.

### Ölçü verin

1. Ölçü aləti üçün {{key:D}} basın.
2. Üst xəttə klikləyin, sonra onun bir az üstünə klikləyin. Cari uzunluqla ədəd qutusu açılır.
3. `60` yazın və {{key:Enter}} basın. Düzbucaqlı 60 mm enində olur.
4. Sol xəttə klikləyin, sonra onun bir az soluna klikləyin. `40` yazın və {{key:Enter}} basın.

Baxışın yuxarı solundakı çip indi **Tam təyin olunub** yazır və xətlər mürəkkəb rəngə keçir (Kağız mövzusunda qara, Model mövzusunda açıq). Hər nöqtə və ölçü sabitdir.

:::tip
Əgər düzbucaqlını başlanğıcdan kənarda başlatmısınızsa, çip hələ də "Az təyin olunub · 2 sərbəstlik dərəcəsi" yazır. Seçim üçün {{key:S}} basın, bir küncə klikləyin, başlanğıca {{key:Shift}}+klik edin, sonra sağ paneldə {{ui:• Üst-üstə düşmə}} seçin.
:::

### Ekstruziya edin

1. Alət panelində {{ui:Çıxış}} seçin və ya eskiz bağlanana qədər {{key:Esc}} basın (adətən iki dəfə).
2. {{ui:Ekstruziya}} seçin. 10 mm bərk cisim görünür. Tarixçəyə "Extrude1" əlavə olunur, altında isə "Sketch1" girintili olur.
3. Sağ panel ekstruziyanın parametrlərini göstərir. Qalınlığı dəyişmək üçün **Dərinlik (mm)** sahəsinə yeni ədəd yazın və {{key:Enter}} və ya {{key:Tab}} basın. Detal dərhal yenidən qurulur.

### Deşiyi əlavə edin

1. Lövhənin ön tərəfindəki böyük düz üzə klikləyin (ekstruziyanın ucu). Bütün üz vurğulanır və sağ paneldə **Üz** yazılır.
2. Sağ paneldə {{ui:Bu üzdə eskiz}} seçin.
3. Nöqtə aləti üçün {{key:P}} basın və üzün ortasına yaxın klikləyin.
4. {{ui:Çıxış}} seçin.
5. {{ui:Deşik}} seçin. Lövhədən 6 mm deşik keçir. İstəsəniz sağ paneldə **Diametr (mm)** dəyişin.

Solda aşağıdakı **Detal** qutusu indi həcmi, səth sahəsini, ölçünü (60 × 40 × 10 mm) və "Sərasər deşiklər: 1" göstərir.

### Saxlayın

1. {{key:Mod+S}} basın və ya {{ui:Saxla}} seçin.
2. Brauzeriniz `Part1.partcraft.json` faylını yükləmələr qovluğuna endirir. Fayl bütün tarixçəni saxlayır: redaktəni davam etdirmək üçün onu {{ui:Aç}} ilə yenidən açın.

Detalı əvvəlcə adlandırmaq üçün baxışda boş yerə klikləyin ki, heç nə seçilməsin və sağ paneldə yeni **Ad** yazın.

## Növbəti addım

- [İlk eskizinizi çəkin](topic:sketch-basics) və [Eskizi tam təyin edin](topic:relations-dimensions) eskiz redaktorunu düzgün izah edir.
- [Detalı tarixçəsi ilə dəyişin](topic:edit-history) qurduğunuzu necə redaktə etməyi göstərir.
- [Yumrulaşdırın, fasalayın və boşaldın](topic:fillet-chamfer-shell) və [Çertyoj hazırlayın](topic:drawing-pdf) detalı bitirir. [Hələ qurulmayanlar](topic:not-built-yet) bu versiyanın etmədiyi şeyləri, məsələn sweep və loft-u sadalayır.
- [Başqa parametrik modelləşdiricidən gəlirsinizsə](topic:coming-from) burada fərqli işləyən vərdişləri sadalayır.
- [Düymələr və siçan](topic:keyboard) qısayolların tam siyahısıdır.
- [Bu yardımdan istifadə](common:help).
