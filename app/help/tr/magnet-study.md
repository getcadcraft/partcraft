---
title: Bir eskizin mıknatıs çalışması
summary: Eskizlerinizin kapalı profillerini düz bir manyetik modele çevirin (demir, mıknatıslar, bobinler), alanı görün ve bir gövdedeki kuvveti ve torku okuyun.
keywords: mıknatıs, manyetik, manyetostatik, alan, akı yoğunluğu, kuvvet, tork, bobin, boyunduruk, demir, B-H eğrisi, kalıcı mıknatıs, aktüatör, motor, solenoid, maxwell
from: 604efc3b
---

Eskizleri olan bir parçada Özellikler araç çubuğunda {{ui:Daha fazla}} › {{ui:Eskizlerin mıknatıs çalışması…}} kullanın. İşaretlediğiniz eskizlerdeki her kapalı şekil düz bir modelin bir bölgesidir; çalışma manyetik alan B'yi, kuvveti ve seçtiğiniz gövdedeki torku hesaplar.

## Adımlar

1. Gövdeleri eskizlerde kapalı şekiller olarak çizin: bir demir boyunduruk, bir mıknatıs, bir bobin. Birbirine değen gövdeler bir kenarı paylaşır; bu yüzden onları farklı eskizlere koyun. Ayrı duran veya birinin içinde olan gövdeler (bir boyunduruktaki pencere) aynı eskizde olabilir. Eskizleri aynı düzlemde tutun.
2. Çalışmayı açın ve kullanılacak eskizleri işaretleyin. Her kapalı profilin numaralandırılmış bir satırı olur. Ne olduğunu belirtin: {{ui:Hava}}, {{ui:Demir}} (bir geçirgenlik veya çift olarak yazılmış bir B–H eğrisi; B tesla, H A/m cinsinden), bir {{ui:Kalıcı mıknatıs}} (Br tesla cinsinden, yönü eskizin x ekseninden bir açı olarak ve geri dönüş geçirgenliği) veya bir {{ui:Bobin}} (profilinden geçen toplam akım, sarım × amper; işaret hangi yönde aktığını söyler).
3. Kuvvet ve torkun istendiği gövdeler için {{ui:Bu gövdeye etkiyen kuvvet ve tork}} kutusunu işaretleyin. Parçanın eskizden dışarı doğru derinliğini girin.
4. Modelin ağını ve etrafındaki havayı seçin, sonra {{ui:Çalıştır}}.

## Ne görmelisiniz

- Akı yoğunluğu |B| modelin üzerinde, düşükten yükseğe koyu maviden kırmızıya; profiller numaralı.
- En güçlü alan ve nerede olduğu, üçgen sayısı ve işaretlediğiniz her gövde için x ve y yönündeki kuvvet ile gövdenin ortası etrafındaki tork, girdiğiniz derinlik için.
- {{ui:Sonuçları kaydet (CSV)}} sayıları yazar.

## Bilmeniz iyi olanlar

- Düz, durağan bir modeldir: her şey metre derinlik başınadır; girdap akımı ve histerezis yoktur; bir mıknatıs düz bir geri dönüş doğrusudur (demanyetize edilemez).
- Model, kenarı bir duvar olan bir hava kutusunun içindedir. İki hava kutusu boyutunu ve Normal ile İnce ağları karşılaştırın: modelin etrafındaki alandan bir gövdeye alınan kuvvet, oradaki ağ kadar iyidir.
- Yalnızca geçirgenliği verilen demir hiçbir zaman doyuma ulaşmaz. Akı 2 T'yi geçtiğinde çalışma, Sorunlar listesinde ⚠ uyarısı koyar: demire bir B–H eğrisi verin. Yeni bir satırdaki sayılar örnektir (demir μr 2000, 1.2 T'lik bir mıknatıs); bir malzemenin veri föyü değildir.
- Bir gövde kuvveti almak için etrafında yer ister: başka bir gövde çok yakınsa çalışma bunu söyler.
- Bir çizim yardımcısıdır, bir mühendislik onayı değildir.

## Sonraki

- [2 boyutta manyetik alanlar (eğitim)](topic:magnetic-fields-2d)
