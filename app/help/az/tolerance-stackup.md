---
title: Tolerans yığınları
summary: Yığımın detalları arasından keçən səth zəncirini seçin və sonundakı boşluğun nə qədər dəyişə biləcəyini görün: ən pis hal və RSS ilə, ən çox təsir edən ölçülər ən üstdə sıralanmış.
keywords: tolerans yığını, yığın, tolerans analizi, tolerans zənciri, ölçü zənciri, döngə, boşluq, təmizlik, ən pis hal, rss, kök cəmi kvadrat, statistik tolerans, töhfəçilər, həssaslıq, gd&t, ümumi tolerans, iso 2768
from: cbdb3159
---

**Yığın** detalların bir zənciri boyunca ölçüləri toplayır ki, hər detal tolerans daxilində istənilən yerdə istehsal olunanda nəticənin — adətən boşluğun — nə qədər dəyişə biləcəyini görək.

## Zənciri seçin

1. Yığımı açın və Yığım qrupunda {{ui:Tolerans yığını}} seçin. Görünüşün üzərində kart açılır.
2. Zəncirin **boyunca** nəyin ölçüləcəyini seçin: yığımın X, Y və ya Z-si, ya da {{ui:Birinci üzün normalı}}.
3. {{ui:Zənciri seçin}} düyməsinə basın və zəncirin keçdiyi üzlərə **sıra ilə** klik edin: boşluğun bir tərəfindən başlayın, detalları keçin və boşluğun digər tərəfində bitirin.
4. {{ui:Hazırdır}} düyməsinə və ya Enter-ə basın. Backspace son kliki geri alır; Esc ləğv edir.

Eyni detalda iki klik o detalın ölçüsünü (zəncir boyunca məsafəsini) verir. Başqa detala klik onların birləşdiyi yerdə **interfeys** yaradır; əgər siz tolerans yazmasanız, onun toleransı olmur. Həlqələr zəncirin istiqamətinə görə toplayır və ya çıxır, döngəni bağlayır: nominal boşluq modelin göstərdiyidir.

Həmçinin əllə {{ui:Həlqə əlavə et}} seçib onun nominalını, toleransını və toplayıb-çıxmasını (+ və ya −) yaza bilərsiniz.

## Hər həlqəyə toleransını verin

Hər həlqənin **yuxarı** və **aşağı** kənarlaşması var (məsələn, +0.1 və −0.05). **Tolerans mənbəyi** onları detaldan doldurur:

- **Ümumi tolerans**: detalın ştamp sahəsindəki Tolerans xanası (bax [PDF-ə çertyoj](topic:drawing-pdf)), əgər ±0.1, +0.2/-0.1 və ya ISO 2768-f, -m, -c və ya -v (ISO 2768-1 xətti tolerans, həlqənin ölçüsünə görə) oxunursa. Detalın ümumi toleransı zəncir seçiləndə dərhal istifadə olunur.
- **GD&T**: detalın çertyojundakı hər hansı xüsusiyyət nəzarət çərçivəsi. Mövqe, profil və yuvarlanma zonaları toleransın yarısının ± qiymətini verir. Istiqamət və ya forma toleransı adətən ölçü toleransının içindədir: onu yalnız zəncir nəzarət olunan səthə çatdıqda əlavə edin. Ⓜ və ya Ⓛ ilə zona bildirilmiş ölçüsü ilə götürülür; bonus tolerans sayılmır.
- **Yazılmış**: yazdığınız hər hansı rəqəmlər.

## Nəticələri oxuyun

- **Boşluq, nominal** və toleranslar bərabər olmadıqda **Boşluq, orta** — +0.2/−0 və +0/−0.1 diapazonun ortasını yerdəyişdirir.
- **Ən pis hal**: bütün toleranslar eyni anda öz həddində. Boşluq bu hüdudun xaricində heç vaxt ola bilməz.
- **RSS** (kök cəmi kvadrat): hər tolerans normal yayılmanın üç standart kənarlaşması kimi götürülür və kvadratlarının cəminin kvadrat kökü kimi toplanır. Əksər yığımlar ən pis halın daxilində yaxşı qalır; bu, seriya ilə istehsal olunan detallar üçün adi qiymətləndirmədir.
- Ən pis halın həmişə içəridə qalıb-qalmadığını və milyon yığımdan neçəsinin RSS-ə görə kənarda qalacağını görmək üçün **Boşluq ən azı** və **Boşluq ən çoxu** verin.
- **#** sütunu həlqələri RSS-dəki **payına** görə sıralayır: ən böyük fərqi yaratmaq üçün birinciləri sıxın.

{{ui:CSV saxla}} həlqələri, onların paylarını və nəticələri yazır. Yığınlar yığım faylında saxlanılır və hər dəyişiklik {{key:Mod+Z}} üçün bir addımdır.

:::note
Yığın bir istiqamətlidir. Zəncir boyunca bucaqları və dönmələri izləmir və ölçü toleranslarını eskizlərdən oxumur: onları yazılmış tolerans və ya ştamp sahəsi vasitəsilə verin.
:::
