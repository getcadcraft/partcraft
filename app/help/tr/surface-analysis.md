---
title: Zebra çizgileri ve eğrilik
summary: Herhangi bir parçanın yüzeylerinin ne kadar düzgün birleştiğini kontrol edin; Görünümler menüsünden, görünüme uyan zebra çizgileri ya da ortalama eğriliğin renk haritası ile.
keywords: zebra, zebra çizgileri, yansıma çizgileri, eğrilik, eğrilik haritası, ortalama eğrilik, yüzey kalitesi, süreklilik, teğet, g1, g2, düzgün, keskin kenar, vurgu çizgileri
from: 78fed4c3
---

Tasarım çalışma alanındaki herhangi bir parçada, bir parçanın yüzeylerinin ne kadar düzgün olduğuna dair iki hızlı bakış. (Form çalışma alanının, düzenlediğiniz form için kendi görünümü vardır: bkz. [Form ile serbest biçimli şekiller](topic:form-surfaces).)

## Zebra çizgileri

{{ui:Görünümler}} menüsünü açın ve {{ui:Zebra çizgileri}} seçeneğini seçin. Parça, parlatılmış bir yüzeyin yapacağı gibi çizgili bir ışığın yansımasını gösterir:

- İki yüzey **teğetsel** olarak birleştiğinde (düz bir yüzey üzerindeki yuvarlatma, düzgün bir Gordon yüzeyi), çizgiler birleşim boyunca bir bükülme ile devam eder.
- **Keskin bir kenarda** buluştuklarında çizgiler kırılır ve sıçrar.
- Eğrilik de eşleşiyorsa (G2), çizgiler hiçbir kırılma olmadan akar.

Görünümü çevirin (sürükleyerek ya da bir görünüm küpü yüzüyle): çizgiler yeni yönden yeniden çizilir. **Çizgiler** ayarı kaç çizgi olacağını belirler.

## Eğrilik

Aynı menüde {{ui:Eğrilik}} seçeneğini seçin. Parça, **ortalama eğriliğine** göre renklendirilir: içe doğru çukur olan yerler mavi, düz olan yerler soluk, dışa doğru şişkin olan yerler kırmızı. Kart, renklerin hangi eğrilikte tam yoğunluğa ulaştığını 1/mm cinsinden ve yarıçap olarak gösterir. Keskin kenarlar çok eğrili sayılır, bu yüzden güçlü görünürler; aralarındaki yüzeylere bakın.

## Kart

İkisi de görünümün sol altında bulunan analiz kartını açar; bu kart [taslak analizini](topic:draft-analysis) de içerir. Aralarında **Göster** ile geçiş yapın. Açık olanı {{ui:Görünümler}} içinde yeniden seçerek, {{ui:Kapat}} ile ya da Esc tuşuyla kapatırsınız. Renkler parçayı değiştirdikçe onu izler; parçada hiçbir şey kaydedilmez.
