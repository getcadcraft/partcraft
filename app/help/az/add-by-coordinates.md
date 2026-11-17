---
title: Koordinatları yazmaqla eskiz həndəsəsinin əlavə edilməsi
summary: Eskiz panelindəki Koordinatlarla əlavə et vasitəsilə xətt, mərkəz xətti, düzbucaqlı, çevrə və nöqtələri dəqiq mövqelərdə yerləşdirin — yalnız klaviatura ilə.
keywords: koordinatlar, yazılmış daxiletmə, klaviatura ilə daxiletmə, ədədi daxiletmə, dəqiq mövqe, x y, mütləq koordinatlar, əlçatanlıq, siçansız
from: 5e6c1656
---

Ədədləri bildiyiniz zaman onları yazmaq klikləyib ölçü verməkdən daha sürətlidir. **Koordinatlarla əlavə et** eskiz açıq olduqda sağ paneldə yerləşir. O, həmçinin eskizi heç bir göstərici olmadan qurmağa imkan verir.

Koordinatlar millimetrlə verilir, eskizin öz oxlarında: eskizə baxdıqda x sağa, y yuxarıya doğrudur, (0, 0) isə başlanğıc nöqtədədir (xaç işarəli qırmızı dairə).

## Forma əlavə edin

1. Eskiz açın (bax: [İlk eskizinizi çəkin](topic:sketch-basics)).
2. Sağ paneldə **Koordinatlarla əlavə et** bölməsinə enin.
3. **Əlavə et** bölməsində formanı seçin: Xətt, Mərkəz xətti, Düzbucaqlı, Çevrə və ya Nöqtə.
4. Qutuları doldurun:

| Forma | Qutular |
|---|---|
| Xətt | **Başlanğıc x, y** və **Son x, y** |
| Mərkəz xətti | **Başlanğıc x, y** və **Son x, y** |
| Düzbucaqlı | **Künc x, y** və **Əks künc x, y** |
| Çevrə | **Mərkəz x, y** və **Radius** |
| Nöqtə | **Yer x, y** |

5. {{ui:Əlavə et}} seçin və ya istənilən qutuda {{key:Enter}} basın.

Forma görünür və status paneli, məsələn, "Düzbucaqlı əlavə edildi." mesajını göstərir. Qutular boşalır və növbəti forma üçün hazır olur. Hər əlavə bir geri qaytarma addımıdır.

Cütü vergüllə və ya boşluqla ayrılmış iki ədəd kimi yazın: `0, 0`, `25 -10` və ya `12.5,40`. Mənfi ədədlər və onluq kəsrlər məqbuldur. Radius sıfırdan böyük olmalıdır. Hər hansı hissə ədəd kimi oxunmursa, status paneli deyir: 'Koordinatları "x, y" formatında və sıfırdan böyük radiusu yazın.'

## Nümunə: yazılmış yuvalı lövhə konturu

1. **Ön müstəvi** üzərində eskiz açın.
2. **Əlavə et**: Düzbucaqlı. **Künc x, y**: `-50, -30`. **Əks künc x, y**: `50, 30`. {{key:Enter}}.
3. **Əlavə et**: Çevrə. **Mərkəz x, y**: `-30, 0`. **Radius**: `5`. {{key:Enter}}.
4. **Mərkəz x, y**: `30, 0`. **Radius**: `5`. {{key:Enter}}.
5. {{ui:Eskizdən çıx}} seçin, sonra {{ui:Ekstruziya}}: iki 10 mm deşikli 100 × 60 lövhə.

## Yazılmış həndəsə yerləşdirilir, lakin bağlanmır

Yazılmış koordinatlar həndəsəni düzgün yerə qoyur, lakin onlar **əlaqə deyil**. Formalar mavi qalır (natamam təyin olunmuş) və onları sürüklədikdə və ya başqa ölçünü dəyişdikdə yerindən tərpənə bilər:

- yazılmış düzbucaqlı çəkilmiş kimi öz künc, üfüqi və şaquli əlaqələri ilə gəlir, lakin heç nə onu başlanğıc nöqtəyə bağlamır;
- yazılmış xəttin üfüqi və ya şaquli əlaqəsi yoxdur, hətta səviyyəli xətt yazmısınızsa belə;
- yazılmış çevrənin mərkəzi sərbəstdir.

Eskizi tam təyin etmək üçün sonradan ölçülər və əlaqələr əlavə edin (bax: [Eskizi tam təyin edin](topic:relations-dimensions)). Məsələn, düzbucaqlının künc nöqtəsini və başlanğıc nöqtəni seçin və {{ui:• Üst-üstə düşmə}} seçin, ya da çevrə mərkəzlərini başlanğıcdan ölçün.

:::note
Göstəricisiz də bu yerə qədər gedə bilərsiniz: {{key:Tab}} və ox düymələri ilə tarixçədə müstəvi sətrinə keçin, onu seçmək üçün {{key:Enter}} basın, eskiz üçün {{key:S}} basın, burada formalar əlavə edin və hər ölçünün yanındakı **Redaktə et**ə çatın, {{key:Tab}} ilə {{ui:Eskizdən çıx}} seçin. Həndəsəni seçmək, yəni əlaqə və ya yeni ölçü əlavə etmək isə bu versiyada hələ də klik və ya toxunuş tələb edir.
:::

## Məhdudiyyətlər

- Qövslər hələ yazıla bilmir. Onları Qövs aləti ilə çəkin, ya da çevrəni yazıb əlaqələrdən istifadə edin.
- Bu qutuda nisbi koordinatlar (son nöqtədən) və ya polyar koordinatlar (uzunluq və bucaq) yoxdur.
- Yazılmış həndəsə mövcud nöqtələrə yapışmır. Mövcud nöqtənin koordinatlarını eyni yazın, sonra birləşmiş qalmalıdırsa, aralarında {{ui:• Üst-üstə düşmə}} əlaqəsi əlavə edin.
