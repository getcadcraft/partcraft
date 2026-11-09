---
title: PartCraft ilə başlayın
summary: PartCraft bu gün nə edir, brauzerinizin nəyə ehtiyacı var və on dəqiqədə ilk detal, eskizdən saxlanmış fayla qədər.
keywords: başlamaq, ilk işə salma, sürətli başlanğıc, giriş, dərslik, ilk detal, plitə, parametrik, detal modelləşdiricisi
from: 5f0a668d
---

PartCraft CadCraft ailəsinin parametrik detal və yığım tətbiqidir. 2D eskiz çəkirsiniz, onu əlaqələr və ölçülərlə bağlayırsınız, ekstruziya, fırlatma və deşik kimi elementlərlə bərk cismə çevirirsiniz və istənilən ədədi sonradan dəyişə bilərsiniz: detal tarixçəsindən yenidən qurulur. Detallar sonra yığımlara daxil edilir; orada birləşmələr onları yerləşdirir və hərəkəti yoxlamağa imkan verir.

Bu versiya nə edir:

| İş | Nə alırsınız |
|---|---|
| Eskizlər | Xətlər, düzbucaqlılar, çevrələr, qövslər, nöqtələr və mərkəz xətləri, əlaqələr və ölçülərlə, həm də canlı vəziyyət: təyin olunmamış, tam təyin olunmuş və ya artıq təyin olunmuş |
| Bərk elementlər | Ekstruziya, kəsmə, fırlatma, fırlatma ilə kəsmə, sadə və kürsüklü deşiklər, xətti və dairəvi nümunələr, güzgü, düz üzlər arasında düz kənarlarda yuvarlaqlaşdırma və faskalar, həm də düz üzlərdə qabıq və qaralamalar. Süpürmə, loft və dəqiq nüvə tələb edən digər elementlər bu versiyada hələ qurulmayıb: bax [Hələ qurulmayanlar](topic:not-built-yet) |
| Tarixçə | İstənilən elementin ədədlərini redaktə edin, söndürün, geri qaytarın, yenidən sıralayın və silin; geri qaytarma ilə |
| Yığımlar | Sərt, fırlanan və sürüşən birləşmələrlə birləşdirilmiş detallar, toqquşma yoxlaması və hərəkət yoxlaması |
| Çertyojlar | Üç görünüş, izometrik, kəsik, detal görünüşü, ümumi ölçülər, bazalar, xüsusiyyət nəzarət çərçivələri və səth emalı simvolları olan A3 vərəq, PDF kimi ixrac olunur |
| Fayllar | Öz detal və yığım faylları; STL, 3MF, faset STEP, DXF və PDF çıxışı |

Hər şey brauzerinizdə, kompüterinizdə işləyir. **Heç nə yüklənmir.** Faylların haraya getdiyini [Fayllar: açmaq, saxlamaq və ixrac](topic:files) bölməsində görün.

## Nə lazımdır

- Cari Chrome, Edge, Firefox və ya Safari, **WebGL** (3D qrafika) və **WebAssembly** aktiv olmaqla. Hər ikisi defolt olaraq aktivdir. Bərk cisim həndəsəsini tətbiqlə birlikdə yüklənən WebAssembly mesh nüvəsi qurur: bax [Mesh nüvəsi](topic:solid-kernels).
- Siçan ən asandır. Trackpad işləyir, sensor ekranlar isə baxış və sadə eskiz üçün işləyir: bax [Trackpad, toxunuş və kiçik ekranlar](topic:trackpad-and-touch).
- Ən azı 1280 piksel enində ekran bütün alət panelini bir sətirdə göstərir. Dar pəncərələrdə alət paneli yanlara sürüşür; telefonda panellər aşağıdakı paneldən vərəq kimi açılır.

Brauzerlər haqqında daha çox: [Brauzerlər və kompüterlər](common:browsers).

:::note
PartCraft brauzerdə işləyir, masaüstündə isə CadCraft Studio daxilində. Bulud saxlaması hələ mövcud deyil: detalları kompüterinizdən açır və fayl kimi geri saxlayırsınız.
:::

## PartCraft-ı açın

1. PartCraft-ı açın.
2. Ekranda "Bərk cism nüvəsi yüklənir…" yazana qədər gözləyin. Bu ilk dəfə bir az vaxt aparır.
3. Boş 3D görünüş, üç baza müstəvisi, solda tarixçə ("Part1", sonra Ön müstəvi, Üst müstəvi, Sağ müstəvi) və görünüşdə "Detal başlat" başlıqlı qutu görürsünüz.
4. Status panelinin sağ ucundakı çip "Mesh kernel" yazır: PartCraft bu versiyada hər detalı mesh nüvəsi ilə qurur, ona görə dairəvi üzlər düz faset-lərdir. Dərhal modelləşdirməyə başlaya bilərsiniz.

Əgər görünüş brauzerin 3D göstərə bilmədiyini və ya nüvənin yüklənmədiyini deyirsə, bax: [Problemlərin həlli](topic:troubleshooting#the-app-does-not-start).

## İlk detal: deşikli plitə

60 × 40 mm, 10 mm qalınlığında plitə düzəldəcək və içindən 6 mm deşik açacaqsınız. Vahid millimetrdir.

### Konturu eskizləyin

1. Solda tarixçədə **Ön müstəvi** üzərinə klikləyin. Müstəvi görünüşdə vurğulanır.
2. Alət panelində {{ui:Eskiz}} seçin ya da {{key:S}} basın. Görünüş birbaşa həmin müstəviyə baxır və Xətt aləti aktiv olur.
3. Düzbucaqlı aləti üçün {{key:R}} basın.
4. Göstəricini başlanğıc nöqtənin üzərinə (kiçik qırmızı dairə və xaç) aparın. Kiçik kvadrat tutulduğunu göstərir. Klikləyin.
5. Yuxarı və sağa aparın və yenidən klikləyin. Düzbucaqlınız var. Xətləri mavidir: mavi o deməkdir ki, onlar hələ hərəkət edə bilər.

### Ölçü verin

1. Ölçü aləti üçün {{key:D}} basın.
2. Yuxarı xətti klikləyin, sonra onun bir az üstünə klikləyin. Cari uzunluqla ədəd qutusu açılır.
3. `60` yazın və {{key:Enter}} basın. Düzbucaqlı 60 mm enə keçir.
4. Sol xətti klikləyin, sonra onun bir az soluna klikləyin. `40` yazın və {{key:Enter}} basın.

Görünüşün sol yuxarısındakı çip indi **Tam təyin olunub** yazır və xətlər qara olur (Paper mövzusunda qara, Model mövzusunda açıq). Hər nöqtə və ölçü sabitdir.

:::tip
Düzbucaqlını başlanğıc nöqtədən kənarda başlatmısınızsa, çip hələ də "Təyin olunmayıb · 2 sərbəstlik dərəcəsi" yazır. {{key:S}} basın (Seç), bir künc klikləyin, başlanğıc nöqtəyə {{key:Shift}}+klik edin, sonra sağ paneldə {{ui:• Üst-üstə düşür}} seçin.
:::

### Ekstruziya

1. Alət panelində {{ui:Çıxış}} seçin ya da eskiz bağlanana qədər {{key:Esc}} basın (adətən iki dəfə).
2. {{ui:Ekstruziya}} seçin. 10 mm bərk cism görünür. Tarixçəyə "Extrude1" əlavə olunur, altında girintili "Sketch1" ilə.
3. Sağ paneldə ekstruziyanın parametrləri görünür. Qalınlığı dəyişmək üçün **Dərinlik (mm)** sahəsinə yeni ədəd yazın və {{key:Enter}} ya da {{key:Tab}} basın. Detal dərhal yenidən qurulur.

### Deşik əlavə edin

1. Plitənin ön tərəfindəki böyük düz üzə klikləyin (ekstruziyanın sonu). Bütün üz vurğulanır və sağ panel **Üz** yazır.
2. Sağ paneldə {{ui:Bu üzdə eskiz}} seçin.
3. Nöqtə aləti üçün {{key:P}} basın və üzün mərkəzinə yaxın klikləyin.
4. {{ui:Çıxış}} seçin.
5. {{ui:Deşik}} seçin. Plitədən keçən 6 mm deşik yaranır. İstəsəniz sağ paneldə **Diametr (mm)** dəyişin.

Sol aşağıdakı **Detal** qutusu indi həcmi, səth sahəsini, ölçüsünü (60 × 40 × 10 mm) və "Keçən deşiklər: 1" yazır.

### Saxlayın

1. {{key:Mod+S}} basın ya da {{ui:Saxla}} seçin.
2. Brauzeriniz `Part1.partcraft.json` faylını yükləmələr qovluğuna yükləyir. Fayl bütün tarixçəni saxlayır: redaktəyə davam etmək üçün onu {{ui:Aç}} ilə yenidən açın.

Detalın adını əvvəlcə dəyişmək üçün görünüşdə boş yerə klikləyin ki, heç nə seçilməsin və sağ paneldə yeni **Ad** yazın.

## Növbəti addımlar

- [Eskiz çəkin](topic:sketch-basics) və [Eskizi tam təyin edin](topic:relations-dimensions) eskizləyicini ətraflı izah edir.
- [Detalı tarixçə ilə dəyişin](topic:edit-history) qurduğunuzu necə redaktə etməyi göstərir.
- [Yuvarlaqlaşdırın, faskalayın və qabıq yaradın](topic:fillet-chamfer-shell) və [Çertyoj hazırlayın](topic:drawing-pdf) detalı bitirir. [Hələ qurulmayanlar](topic:not-built-yet) bu versiyanın etmədiklərini sadalayır, məsələn süpürmə və loft.
- [Başqa parametrik modelləşdiricidən gəlmək](topic:coming-from) fərqli işləyən adətləri sadalayır.
- [Klavişlər və siçan](topic:keyboard) tam qısayollar siyahısıdır.
- [Bu yardımdan istifadə](common:help).
