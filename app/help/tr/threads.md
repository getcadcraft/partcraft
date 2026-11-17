---
title: Miller ve deliklerde dişler, çizimde veya modelde
summary: Herhangi bir yuvarlak yüzeye, bir mile ya da bir deliğe ISO metrik ya da yamuk diş koyun. Çizimler için görünüşte bırakın ya da 3B baskı için gerçek helis dişi modelleyin; baskılı parçaların oturması için bir boşlukla.
keywords: diş, dişler, modellenmiş diş, helis, helis eğrisi, vida, cıvata, somun, mil, delik, dış diş, iç diş, görünüşte diş, metrik diş, yamuk diş, acme, kurşun vidası, Tr16x4, M10, 3B baskı, baskı, boşluk, geçme, sol el, kılavuzlu delik
from: 4f6401cc
---

{{ui:Diş}} yuvarlak yüzeylere diş koyar: bir milin dış yüzeyine (dış diş) ya da bir deliğin iç yüzeyine (iç diş). PartCraft hangisi olduğunu yüzeyden anlar.

Bir diş başlangıçta **görünüşte** (kozmetik) olur: yüzey düz kalır, görünüm dişi kesikli daireler olarak çizer ve çizim sayfası onu not eder; örneğin "M10×1.5 - 6g, diş uzunluğu 20". 3B baskı ya da doğru görünmesi gereken bir model için gerçek helis dişini parçaya kesmek üzere **Modelli** seçeneğini işaretleyin.

## Mil ya da delik üzerine diş açın

1. Mili ya da deliği dişin boyutunda oluşturun: bir M10 cıvata için Ø10 mil, ya da bir M10 somun için Ø8.5 delik (kılavuz matkabı).
2. Yuvarlak yüzeye tıklayın, sonra {{ui:Daha fazla}} › {{ui:Diş}} seçin. Hiçbir yuvarlak yüzey seçili değilse PartCraft yüzeylere tıklamanızı ister, sonra {{ui:Bitti}}.
3. Sağ panelde **Boyut** değerini kontrol edin. **Yüzeye uydur** boyutu kendisi seçer: bir mil için büyük çapı milin çapına eşit olan boyutu; bir delik için küçük çapının uyduğu boyutu.

Diş, yüzeyin açık ucunda başlar; parçanın eksen boyunca devam etmediği yerde: bir milin serbest ucunda, bir deliğin ağzında. **Diğer uçtan başlat** bunu tersine çevirir.

## Ayarlar

| Ayar | Seçenekler | Varsayılan |
|---|---|---|
| **Biçim** | ISO metrik (60°), M1.6'dan M64'e kaba; yamuk (Tr, 30°), Tr8×1.5'ten Tr60×9'a | ISO metrik |
| **Boyut** | Yüzeye uydur ya da listeden tek bir boyut | Yüzeye uydur |
| **Tüm yüzey** | Başlangıçtan ölçülen bir **Uzunluk (mm)** girmek için işareti kaldırın | İşaretli |
| **Diğer uçtan başlat** | Diş, yüzeyin diğer ucundan başlar | Kapalı |
| **Sarım yönü** | Sağ el ya da sol el | Sağ el |
| **Modelli** | Gerçek helis dişi kesilir | Kapalı |
| **Boşluk (mm)** | Modelli işaretlendiğinde gösterilir: bir milin dişi ne kadar küçük, bir deliğin dişi ne kadar büyük, her yönde | 0.1 |

Yüzeye uymayan bir boyut yine de oluşturulur, yüzeye göre kesilir ve panel bunu söyler; örneğin "Ø12 mm'lik bir mil, M10'un Ø10 mm'si değildir". Birden fazla yüzey tek bir Diş özelliğini paylaşabilir; **Yüzeye uydur** ile her biri kendi boyutunu alır.

## 3B baskı için modelli dişler

Modelli bir diş standart temel profili izler: metrik dişler için ISO 68-1 (düz tepe ve dipler, 60° yanlar), yamuk dişler için ISO 2901 (30° yanlar). **Boşluk**, baskılı parçaların birbirine vidalanabilmesi için bütün profili içeri (bir mil) ya da dışarı (bir delik) taşır:

- **0.1 ila 0.2 mm** çoğu yazıcıya uygundur. Önce bir deneme cıvatası ve somunu basın.
- **0** standart profildir; işlenmiş parçalar için ya da geçmeyi denetlemek için.

Aynı boşluğa sahip bir cıvata ve somun, yanları boyunca asla temas etmez: aralarındaki boşluk her yönde boşluğun iki katıdır.

:::tip
İnce adımlar zayıf basılır: M3 ve daha küçükleri ya da 0.5 mm'den küçük bir adım, 0.4 mm'lik bir nozülün çizebileceğine yakındır. Daha büyük dişleri modelleyin; küçükler için ısıyla yerleşen bir insert ya da kılavuzla açılmış bir delik kullanın.
:::

Modelli bir diş katının bir parçasıdır: STL, 3MF ve STEP dışa aktarımları onu taşır ve {{ui:Ölç}} onu ölçer. Parçanın yeniden oluşturulmasını ağırlaştırır: 20 uzunluğundaki bir M10 dişi yaklaşık 150,000 üçgendir.

## Kılavuzla açılmış delikler

Bir **Kılavuzlu (ISO metrik)** deliğin de aynı **Boşluk** ile birlikte bir **Modelli** anahtarı vardır. Bkz. [Eskiz noktalarında delik ve havşa delme](topic:holes).

## Diş oluşturulamadığında

- "Diş yuvarlak bir yüzeye (silindir) konur: bir mil ya da bir delik." Seçilen yüzey düz ya da başka türlü eğridir.
- "Ø0.6 mm'lik bir yuvarlak yüzeye uyan standart bir boyut yok: bir boyut seçin." Yüzeye uydur, yüzeyin 12 % içinde hiçbir şey bulamadı. Bir **Boyut** seçin ya da yüzeyi değiştirin.
- "Bu dişin üzerinde olduğu bir yüzey yok (…). Yeniden seçin." Önceki bir değişiklik yüzeyi kaldırdı. {{ui:Yüzeyleri seç}} düğmesine tıklayın ve yüzeye yeniden tıklayın.

:::note
İnç dişler (UNC, UNF), boru dişleri, konik dişler, diş çıkış boşlukları ve pahlı diş başlangıçları henüz yapılmadı. Kesin çekirdek, modelli bir dişi görünüşte olarak gösterir.
:::
