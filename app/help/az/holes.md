---
title: Eskiz nöqtələrində deşiklər açın və pilləli deşiklər
summary: Eskizdə üzdə nöqtələr qoyun, hər nöqtədə sadə, pilləli, konus və ya dişli (ISO metrik) deşiklər yaradın, diametr və dərinliyi təyin edin və səhv istiqamətdə deşilən deşikləri düzəldin.
keywords: deşik, deşik sihirbazı, matkap, modelləşdirilmiş diş, 3D çap, pilləli deşik, cbore, konus deşik, csink, dişli deşik, diş, matkap ölçüsü, metrik diş, M6, sərasər, kor deşik, bolt deşiyi, nöqtələr, deşik mərkəzləri
from: 8e1eef83
---

{{ui:Deşik}} eskizin hər sərbəst nöqtəsində bir deşik açır. Sərbəst nöqtə Nöqtə aləti ilə yaradılan nöqtədir, xəttin ucu və ya dairənin mərkəzi deyil.

## Üzdə deşiklər açın

1. Deşiyin açılacağı düz üzə klikləyin, sonra {{ui:Bu üzdə eskiz}} seçin.
2. {{key:P}} basın və hər deşiyin yerinə klikləyin. Əgər yerləşmə vacibdirsə, nöqtələri kənarlardan və ya başlanğıcdan ölçüləndirin (bax: [Eskizi tam təyin edin](topic:relations-dimensions)).
3. {{ui:Çıxış}} seçin.
4. {{ui:Deşik}} seçin.

Deşiklər detalın içindən keçir, 6 mm enində. Sağ panel **Deşiklər** göstərir: neçə yaradıldığını, "hər eskiz nöqtəsi üçün bir".

**Bir deşik, tez:** deşiyin olacağı düz üzə klikləyin və sağ paneldə {{ui:Burada deşik}} seçin. PartCraft kliklədiyiniz yerdə üzə bir nöqtəli eskiz və detalın içindən keçən deşik əlavə edir, bir addımda. Dərhal bir ədəd yazın və diametri üçün {{key:Enter}} basın. Dəqiq yerləşdirmək üçün yeni eskizi açın və nöqtəni ölçüləndirin.

**Hansı eskiz istifadə olunur:** indicə bağladığınız və ya seçilmiş eskiz; əks halda sərbəst nöqtələri olan ən son istifadə olunmamış eskiz. Heç biri yoxdursa: "Əvvəlcə deşiklərin olacağı yerlərdə nöqtələri olan eskiz yaradın (Üzdə eskiz, sonra Nöqtə)."

## Parametrlər

| Parametr | Seçimlər | Standart |
|---|---|---|
| **Növ** | Sadə, Pilləli, Konus, Dişli (ISO metrik) | Sadə |
| **Diametr (mm)** | Deşiyin diametri | 6 |
| **Hamısından keçən** | İşarəli: detalın içindən tamamilə keçir. Kor deşik üçün işarəni silin | İşarəli |
| **Dərinlik (mm)** | Hamısından keçən işarəsi silinəndə göstərilir | 10 |
| **Pilləli ⌀** | Pilləli üçün göstərilir: geniş yuvanın diametri | 11 |
| **Pillə dərinliyi** | Pilləli üçün göstərilir | 6 |
| **Əks istiqamət** | Eskiz müstəvisinin o tərəfinə deşir | Söndürülüb |

Deşiklər materiala düz, eskiz müstəvisinə perpendikulyar deşilir. Kor deşiyin dərinliyi eskiz müstəvisindən ölçülür; onun dibi düzdür.

## Pilləli bolt deşiyi

1. Deşikləri yuxarıdakı kimi yaradın.
2. **Növ** parametrini **Pilləli** təyin edin.
3. **Diametr (mm)** parametrini `6.6` (M6 boltu üçün boşluq), **Pilləli ⌀** parametrini `11` və **Pillə dərinliyi** parametrini `6.5` təyin edin.

Pilləli deşik deşikdən geniş olmalıdır ("Pilləli deşik deşikdən geniş olmalıdır.") və kor deşik üçün ondan dayaz olmalıdır ("Pilləli deşik deşikdən dayaz olmalıdır.").

## Bolt dairəsi

Mərkəz ətrafında bərabər aralı deşiklər üçün **bir** deşik yaradın və onun massivini qurun: Deşik xüsusiyyətini seçin, sonra {{ui:Dairəvi}} seçin (bax: [Massiv və güzgü xüsusiyyətləri](topic:patterns-mirror)). Deşiyin ölçüsünü dəyişdikdə massiv də izlənir.

## Deşiklər səhv istiqamətdə getdikdə

- "Eskizin bu tərəfində deşmək üçün heç nə yoxdur. İstiqaməti tərs çevirməyi sınayın." Eskiz materialın uzaq tərəfində yerləşir. **Əks istiqamət** işarələyin.
- "Deşiklərin olacağı yerlərə eskiz nöqtələri qoyun (Nöqtə aləti), sonra deşik yaradın." Eskizdə sərbəst nöqtə yoxdur. Xətt uçları və dairə mərkəzləri sayılmır.
- "Hələ deşmək üçün heç nə yoxdur." Deşik bərk cisim tələb edir. Əvvəlcə çıxıntı yaradın.

## Yığımlarda deşiklər

Hər deşiyin oxu var. Yığımda **Mərkəzləşdir** birləşməni deşiyin oxuna qoya bilər; o, "Hole1, hole 2" kimi siyahılanır, beləliklə pin və ya bolt detalı onunla düzülür. Bax: [Yığım qurun](topic:build-assembly).

## Konus deşiklər

**Növ** parametrini **Konus** təyin edin, sonra **Konus ⌀** (səthdə) və **Konus bucağı**: 90° (ISO metrik düz başlı vintlər) və ya 82° (düym vintlər). Konus diametrini vint istehsalçısının məlumatlarından götürün (vint başının diametrindən bir az böyük). Konusun üzü panellərdə konus adlanır.

## Dişli deşiklər

**Növ** parametrini **Dişli (ISO metrik)** təyin edin və **Diş** seçin, M2-dən M24-ə qədər kobud. Deşik aşağıdakı cədvəldən matkap ölçüsündə deşilir (nominal diametr çıxılmaqla addım, matkap seriyasına qədər, ISO 2306-nın 6H diş üçün göstərdiyi kimi); **Diametr (mm)** qutusu istifadə olunmur. Kor deşik üçün **Diş dərinliyi (mm)** dişin nə qədər dərinə getdiyini təyin edir.

| Diş | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Addım | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Diş matkabı ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Diş əvvəlcə **görünüş üçündür**: modeldə deşilmiş deşik var, baxış dişin böyük diametrini qırıq dairələrlə çəkir, çertyoj vərəqində isə çağırış qeyd kimi verilir, məsələn "4× M8×1.25 - 6H, sərasər diş". STEP yalnız deşilmiş deşiyi ixrac edir.

3D çap üçün əsl spiral dişi deşiyə kəsmək üçün **Modelləşdirilmiş** işarələyin. **Boşluq (mm)** onu hər tərəfdən həmin qədər böyüdür ki, çap olunmuş bolt yerinə düşsün: 0.1-dən 0.2 mm-ə qədər əksər printerlər üçün uyğundur. Çağırış sonra "(modelləşdirilmiş)" ilə bitir. Bax: [Millərdə və deşiklərdə dişlər, çəkilmiş və ya modelləşdirilmiş](topic:threads), burada millərdə də dişlər qoyulur.

:::note
Kontrdeşik, düym dişləri və boru dişləri hələ qurulmayıb.
:::
