---
title: Splaynlar, kəsmə, ofset və digər eskiz alətləri
summary: Keçid nöqtəli və nəzarət nöqtəli splaynlar çəkin, əyriləri kəsin və uzadın, zənciri ofset edin, mərkəz xətti ətrafında güzgüləyin, çoxbucaqlı və yuva əlavə edin, eskiz həndəsəsini massivləşdirin və detalın kənarlarını proyeksiya edin.
keywords: splayn, keçid nöqtəsi, nəzarət nöqtəsi, b-spline, nurbs, əyri, kəsmə, uzatma, ofset, güzgü, simmetrik, çoxbucaqlı, altıbucaqlı, yuva, massiv, xətti massiv, dairəvi massiv, proyeksiya, proyeksiya et, daxil et, elementləri çevir
from: 3ecb166a
---

Bu alətlər açıq eskizdə işləyir. {{ui:Spline}} və {{ui:Kəsmə}} alətlər panelindədir. Qalanları sonunda {{ui:Daha çox}} altındadır. Hər alət bir geri alma addımıdır və {{key:Esc}} onu dayandırır. Əsas çəkmə alətləri üçün bax: [İlk eskizinizi çəkin](topic:sketch-basics).

## Splaynlar

Splayn hamar əyridir. İki növü var.

| Alət | Açar | Necə çəkilir |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Əyrinin keçdiyi nöqtələrə klikləyin. {{key:Enter}}, {{key:Esc}}, sağ klik və ya ikiqat klik ilə bitirin. Splaynı bağlamaq üçün birinci nöqtəyə yenidən klikləyin |
| {{ui:Nəzarət nöqtəli spline}} ({{ui:Daha çox}} altında) | | Nəzarət nöqtələrinə klikləyin. Əyri onlara doğru çəkilir, lakin yalnız birinci və son nöqtəyə toxunur. Qırıq nəzarət çoxbucaqlısı çəkərkən və sonra görünür |

- **Nöqtələr eskiz nöqtəsidir.** Onları sürükləyin və ya digər nöqtələr kimi əlaqə və ölçü verin. Splaynın birinci nöqtəsi xəttin ucuna tuta bilər və bu, onları üst-üstə düşən əlaqə ilə birləşdirir.
- **Ucda toxunma.** Splaynın bir ucuna bitişən xətt, qövs və ya splaynı seçin, sonra splaynı seçib {{ui:T Toxunan}} seçin. Splaynın uc istiqaməti onda xəttə uyğunlaşır. Splaynın ucundan kənardakı toxunma rədd olunur: "Splayn üçün toxunma o zaman mümkündür ki, xətt, qövs və ya splayn onun ucuna bitişsin."
- **Uclar.** Toxunma əlaqəsi yoxdursa, keçid nöqtəli splaynın ucları təbiidir (ucda əyrilik yoxdur). Əyri kubikdir və hər nöqtədən keçir; aralarındakı məsafələr nöqtələr arasındakı məsafələrlə təyin olunur.
- **Qapalı splaynlar** öz başına profil yaradır. Açıq splaynlar xətləri və qövsləri hər digər əyri kimi qapalı konturda birləşdirir.
- Splaynın içindəki nöqtəni silmək həmin nöqtəni silir və splaynı saxlayır, əgər hələ ən azı iki nöqtəsi qalırsa (qapalıdırsa üç).

Ekstruziya və fırlatma splaynı mesh nüvəsi ilə qısa düz parçalardan qurur (həqiqi əyrilər dəqiq nüvə tələb edir: bu versiyada hələ qurulmayıb). DXF ixracı splaynı əyriyə 0.01 mm-dən yaxın olan polixətt kimi yazır, çünki DXF R12-də splayn elementi yoxdur.

## Kəsmə və uzatma

| Alət | Açar | Necə |
|---|---|---|
| {{ui:Kəsmə}} | {{key:T}} | Əyriyə nöqtə qoyun: getməli olan parça ən yaxın kəsişmələrə qədər qırmızı göstərilir. Silmək üçün klikləyin. Heç nəyi kəsməyən əyri tamamilə silinir |
| {{ui:Uzat}} ({{ui:Daha çox}} altında) | {{key:E}} | Uzatmaq üçün ucuna yaxın xətt və ya qövsə klikləyin. Növbəti qarşılaşdığı əyriyə qədər böyüyür. Yolda heç nə yoxdursa: "Bu uc çatacaq bir şey tapmır." |

Kəsmə və Uzatma xətlər, qövslər, çevrələr və splaynlarda işləyir (Uzat: xətt və qövslər).

- Kəsilmiş **çevrə** qövsə çevrilir. Onun radius və ya diametr ölçüsü qövsə keçir.
- Xəttin ortasını kəsmək eyni düz xətt üzərində qalan iki xətt yaradır. Qövsün ortasını kəsmək eyni mərkəzli, bərabər əlaqəsi olan iki qövs yaradır.
- Kəsilmiş **splayn** köhnə əyrini dəqiq izləyən nəzarət nöqtəli splayna çevrilir. Saxlanılan ucda toxunma əlaqəsi qalır.
- Yeni uc onu kəsən əyrinin üzərinə qoyulur (xətt, qövs və ya çevrə üzərində və ya onun ucu ilə üst-üstə). Splaynlar nöqtə saxlaya bilmədiyi üçün kəsən splayn əlavə əlaqə yaratmır.

**Artıq uyğun olmayan əlaqələr silinir** və status paneli neçə olduğunu deyir. Məsələn, kəsilmiş xəttin uzunluq ölçüsü silinir, lakin üfüqi və ya paralel əlaqələr qalır.

## Ofset

1. {{ui:Daha çox}} altında {{ui:Ofset}} seçin və ya {{key:O}} basın.
2. Xətt, qövs, çevrə və ya splaynı klikləyin. Bütün zəncir işıqlanır: ucdan-uca birləşmiş bütün əyrilər, üç və ya daha çoxunun birləşdiyi nöqtəyə qədər. Zəncirin yalnız bir hissəsini ofset etmək üçün əvvəlcə həmin əyriləri seçin, sonra Ofset seçin və onlardan birinə klikləyin.
3. Göstəricini kopyanın gedəcəyi tərəfə aparın. Qırıq önizləmə izləyir. Hər iki tərəf üçün {{key:B}} basın.
4. Klikləyin, məsafəni yazın və {{key:Enter}} basın.

Xətlər və qövslər dəqiq ofset olunur. Künclər birləşənə qədər uzadılır və ya kəsilir. Kopyanın bir **Ofset** ölçüsü var, digər parçalar onu izləyir: bütün kopyanı dəyişmək üçün ölçüyə ikiqat klik edin. Zəncir üçün çox böyük məsafə rədd olunur, məsələn: "Bu zəncir üçün məsafə çox böyükdür: bir tərəf içəri dönər."

**Splayn** həqiqi ofsetdən 0.001 mm dəqiqliklə yeni keçid nöqtəli splaynla ofset olunur. Bu kopya sabitdir: sonrakı dəyişiklikləri izləmir və Ofset ölçüsü yoxdur. Zəncirdəki splaynın uclarında hamar (toxunan) birləşmə tələb olunur.

## Güzgü

1. Seç ilə nə güzgüləşəcəyini seçin.
2. {{ui:Daha çox}} altında {{ui:Güzgü}} seçin və ya {{key:M}} basın.
3. Güzgüləmək üçün xətt və ya mərkəz xəttinə klikləyin.

Hər güzgülənmiş nöqtə orijinalı ilə **Simmetrik** əlaqə alır, buna görə orijinal dəyişəndə kopya izləyir. Güzgü xəttində yerləşən nöqtələr ortaqdır, güzgülənmiş çevrələr isə Bərabər əlaqə alır. Heç nə seçilməyibsə, güzgüləniləcək elementlərə klikləyin, {{key:Enter}} basın, sonra güzgü xəttinə klikləyin.

## Çoxbucaqlılar və yuvalar

| Alət | Necə |
|---|---|
| {{ui:Çoxbucaqlı}} | Mərkəzə, sonra künca klikləyin, sonra tərəflərin sayını yazın (3-dən 64-ə). Tərəflər bərabərdir, künclər köməkçi çevrə üzərində olur. Çoxbucaqlının ölçüsünü təyin etmək üçün çevrəyə ölçü verin |
| {{ui:Yuva}} | Bir ucun mərkəzinə, sonra digər ucun mərkəzinə klikləyin, sonra eni təyin etmək üçün klikləyin. İki xətt, iki bərabər yarımçevrəyə toxunur |

## Eskiz massivləri

Əvvəlcə həndəsəni seçin, sonra:

- {{ui:Xətti massiv}}: başlanğıc nöqtəyə klikləyin, sonra birinci kopyanın gedəcəyi yeri, sonra kopyaların sayını yazın (ilkin daxil olmaqla).
- {{ui:Dairəvi massiv}}: mərkəzə klikləyin, sonra kopyaların sayını yazın; tam dövrə bərabər paylanır.

Kopyalar seçilmiş həndəsə arasındakı əlaqələri özləri ilə gətirir (dairəvi massiv üfüqi və şaquli əlaqələri buraxır). Kopyalar orijinala bağlı deyil: birini dəyişsəniz, digərləri olduğu kimi qalır.

## Detalın kənarlarını proyeksiya etmək

1. {{ui:Daha çox}} altında {{ui:Kənarı proyeksiya et}} seçin.
2. Eskizin arxasındakı detalın düz və ya dairəvi kənarına klikləyin.

Kənar eskiz müstəvisinə dəqiq kopyalanır və sabitlənir (Sabitlə əlaqəsi). Detalda sonrakı dəyişiklikləri izləmir. Kənarı köməkçi həndəsəyə çevirmək üçün {{key:Q}} basın. Eskiz müstəvisinə meyilli dairə elips kimi proyeksiya olunardı, buna görə rədd olunur. Sərbəst formalı kənarlar və eskizdən birbaşa çıxan kənarlar da belədir. Proyeksiya dəqiq nüvə tələb edir: bu versiyada hələ qurulmayıb.
