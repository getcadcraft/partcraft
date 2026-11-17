---
title: Mühendislik kütüphanesi
summary: Ders kitabı formülleri okunabilir betikler olarak, SI birimlerinde, her sonucun kaynağıyla: boru ve kanal akışı, ısı transferi ve ısı eşanjörleri, basınçlı parçalar, gaz dinamiği, su ve hava özellikleri, malzemeler ve denetlenen birimler. Her birinin neye yaradığı ve nerede durduğu.
keywords: mühendislik, kütüphane, birimler, Darcy-Weisbach, Colebrook, Reynolds, sürtünme katsayısı, Dittus-Boelter, Gnielinski, NTU, etkinlik, LMTD, kanat, Barlow, Lamé, meme, izentropik, Mach, boğulmuş akış, su, hava, özellikler, malzeme, kaynaklar
from: 786ef967
---

Mühendislik kütüphanesi, Betik çalışma alanının kütüphanesinde (`craftlib/eng`) bir dizi betiktir. Her biri, yukarıdan aşağıya okunabilen bir fonksiyondur; **yöntem**, **birimler**, **sınırlar**, **kaynaklar** ve işlenmiş bir sayıyla bir **denetim** içeren bir başlığa sahiptir. Her yerde SI birimlerini kullanırlar ve bir **birim** ve bir **kaynak** taşıyan nicelikler döndürürler; böylece bir veri sayfası her sayının nereden geldiğini yazdırabilir.

## Denetlenen birimler

`to_si(10, 'bar', 'Pa')` bir değeri dönüştürür ve başka bir şeyi ölçen bir birimi reddeder (basınç beklenirken uzunluk). `from_si`, `unit_convert(1, 'bar', 'psi')` ve `unit_kind('W/(m K)')` ("ısıl iletkenlik") aynı şekilde çalışır. `temp_k(25, 'C')` ve `temp_from_k` sıcaklıkları dönüştürür; çünkü sıcaklıklarda bir ofset vardır.

## Özellikler

- `fluid('water', T)` ve `fluid('air', T, p)`: yoğunluk, viskozite, iletkenlik, özgül ısı, Prandtl sayısı. Su 0 ile 100 °C, hava 250 ile 600 K arasında; bunun dışında ekstrapolasyon yapmak yerine durur.
- `material('ss304')`: Young modülü, Poisson oranı, yoğunluk, akma, iletkenlik, özgül ısı, genleşme: Simülasyon ile aynı veri sayfalarından oda sıcaklığı değerleri. Gerçek bir tasarım, tedarikçinin sertifikalı değerlerini kullanır. Sıcaklık eğrileri henüz yapılmadı.

## Boru ve kanallarda akış

`reynolds`, `hydraulic_diameter`, `friction_factor` (önce laminer, sonra türbülanslı akış için Colebrook denklemi; 2300 ile 4000 arasındaki aralık için güvenilir bir formül yoktur ve bunu söyler), `darcy_weisbach`, `minor_loss`, `pipe_flow` (yuvarlak boru, her şey birden) ve `rect_channel` (Shah ve London uyumuyla laminer dikdörtgen kanallar).

## Isı transferi

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (laminer ya da türbülanslı seçer ve bağıntıyı adlandırır), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` ve `ntu_for` (karşı akış, paralel, kabuk ve boru, çapraz akış ve tek değişen bir akış için etkinlik-NTU bağıntıları) ve `hx_size` (bir yükün ihtiyaç duyduğu UA boyutu; yük karşılanamadığında ne kadarının mümkün olduğunu söyler).

## Basınçlı parçalar

`allowable_stress` (akma, bir güvenlik katsayısına bölünmüş), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, hoop ya da kayma ölçütüne göre) ve `wall_sphere`. Bunlar ders kitabı paylarıdır, **bir basınçlı kap kodu hesabı değildir**: korozyon payı, birleşim verimi ya da kod katsayıları yoktur.

## Gaz dinamiği

`isentropic` (bir Mach sayısındaki oranlar), `mach_from_area`, `choked_flow`, `throat_area` ve `exit_mach`, sürtünmesiz, ısısız ve şoksuz mükemmel bir gaz için.

## Sonucu denetleyin

`check_stress`, `check_thermal` ve `check_flow`, üretilen parça üzerinde betikten PartCraft'ın kendi gerilme, iletim ve akış çözücülerini çalıştırır ve maksimum gerilmeyi ve yer değiştirmeyi, sıcaklıkları ve ısı akışını ve bir kanal ağının geçirgenliğini geri okur. Çözücüleri değiştirmezler. Gerilme ve sıcaklık denetimleri vokselleri kullanır; bu yüzden kavisli bir yüz basamaklı bir yüzeydir ve keskin bir iç köşedeki ya da bir nokta yük altındaki gerilme voksel boyutuna bağlıdır.
