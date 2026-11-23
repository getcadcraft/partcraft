---
title: "Torna üzerinde tornalama"
summary: "Dönen parçanın oluşturduğu dış hattan bir tornalı parçanın yüzeyini alın, kaba işleyin, bitirin, oluk açın, ayırın, diş açın ve delin. Torna takımları, devir başına beslemeler, torna postları ve neyin kanıtlanmadığı."
keywords: "tornalama, torna, yüzey alma, kaba işleme, bitirme, oluk, oluk açma, ayırma, kesip ayırma, diş, diş açma, g32, g33, g96, sabit yüzey hızı, css, burun yarıçapı, plaket, çubuk, ayna, çap, devir başına besleme, g71, g76"
from: d8cc53b0
---

İmalat'ta bir torna için yedi işlem vardır. Her parçada çalışırlar: kesilen, parçanın ortadaki malzemenin etrafında **dönerken oluşturduğu dış hattır**; bu yüzden yuvarlak olmayan bir parça, onu tutan yuvarlak şekle kadar tornalanır.

**Burada hiçbir şey bir torna üzerinde çalıştırılmadı.** Yollar testlerle geometriye karşı denetlenir; iki torna postu kontrolcülerin belgelenmiş kodlarını izler. Önce programı kontrolcünüzün kendi simülatöründe ve havada kanıtlayın.

## Kurulum

**Bağlama** sekmesinde:

- **Takım ekseni** iş milinin eksenidir, tornanın Z'si. Parçanın ön yüzü +Z'dedir; ayna diğer ucu tutar.
- **Ham malzeme**: {{ui:Silindir}}'i seçin, çubuk. Üst ofseti yüzey alma kesiminin kaldırdığı şeydir.
- **İş orijini**: bir ham malzeme üstü ya da model üstü merkezi Z0'ı ön yüze koyar; olağan yer budur.
- **Kontrolcü**: {{ui:Fanuc tipi torna (.nc)}} ya da {{ui:LinuxCNC torna (.ngc)}}. Bir frezeleme postu bir torna programını reddeder ve bunu söyler.
- **En yüksek mil devri**: yüzey hızının altında tutulduğu sınır.

İmalat araç çubuğundaki {{ui:Daha fazla}}, **İşlemler** sekmesinin en üstünde yedi torna işlemini listeler. Eklediğiniz ilk işlem kendi takımını getirir: bir **torna plakası** (burun yarıçapı, plaka açısı, kesme kenarı açısı) ya da bir **oluk bıçağı** (genişlik, köşe yarıçapı, ne kadar derine ulaştığı). **Takımlar** sekmesinde değiştirin. Beslemeler devir başınadır; hız, çap değiştikçe kontrolcünün tuttuğu m/dk cinsinden bir yüzey hızıdır; bunun yerine hızı sabitlemek için bir takıma kendi devrini verin.

## İşlemler

| İşlem | Ne yapar |
|---|---|
| {{ui:Yüzey}} | Çubuğun önünü parçaya kadar, bir adım derinliği seferinde, dıştan merkezin biraz ötesine kadar yüzeyler. |
| {{ui:Kaba}} | Z boyunca bir **kesme derinliği** aralıklı geçişler, dış hatta artı **bırakılacak malzemeye** kadar; sonra kademeleri almak için bir kez dış hat boyunca. İki omuz arasındaki bir çukura bir kesme derinliği kadar dalışla girilir. |
| {{ui:Yüzey işlemi}} | Dış hat boyunca, takımın beslemesinin bir kesri ile bir geçiş. |
| {{ui:Oluk}} | Bıçağı yan yana, hâlâ mevcut olan malzemenin sınırından fazla alabileceği her yere dalar: torna plakasının ulaşamadığı oluklar. **Z'den / Z'ye** onu daraltır. |
| {{ui:Ayır}} | Parçayı arka yüzünün hemen arkasından, merkezin biraz ötesine kadar keser; isterseniz kademelerle. |
| {{ui:Diş}} | Dış diş: dış çap, adım, uzunluk, geçiş sayısı. Derinlik 0, 0.6134 × adım demektir (60° diş). Her geçiş aynı talaş alanını alır; yay geçişleri son geçişi tekrarlar. |
| {{ui:Delme}} | Bir derinliğe kadar merkez çizgisinde bir matkap, kademelerle. |

## Takımın parçadan nasıl uzak tutulduğu

Plaka olduğu gibi ele alınır: burun dairesi ve arkasında arka kenar; açısı 180° eksi kesme kenarı açısı ve plaka açısı olan düz bir çizgi. Bu şekil Z boyunca her noktada dış hatta indirilir ve yol, durduğu yerdir. Yani:

- **Burun yarıçapı yolda zaten vardır.** Postlar `G41` ya da `G42` yazmaz; koordinatlar takımın programlanmış noktasıdır (burnun etrafındaki karenin köşesi).
- Plaka, arka kenarından daha dik bir duvarı **izleyemez**. Bir omuzun arkasındaki bir oluk olduğu gibi bırakılır ve bitirme işlemi ulaşamadığı dış hattın ne kadarını söyler. Bunu bir {{ui:Oluk}} işlemi alır.
- Malzeme her kesimden sonra Z boyunca izlenir; böylece kaba işleme havayı kesmez, oluklama kalanı bulur ve her işlem kaldırdığı hacmi ve parçaya girip girmediğini gösterir.

## Sınırlar

- **Yalnızca dış tornalama**: delme bar yok, iç oluk ya da diş yok, yüz oluğu yok.
- Bir iş mili; parça −Z'de tutulur. Alt iş mili, canlı takım, C ya da Y ekseni, sabit destek ya da kuyruk payandası hareketi yok.
- Yollar düz hareketlerdir: eğriler tolerans içinde kısa çizgilerdir (`G2`/`G3` yok), kaba işleme ve dişler geçiş geçiş yazılır (`G71` ya da `G76` çevrimi yok).
- Diş açma düz geçişlerdir, sonunda düz bir çekme ile; dişe bir boşaltma oluğu verin. Diş ham malzemede gösterilmez.
- Merkez üzerinde delme ham malzeme modelini değiştirmez.
- Tutucu, taret ve ayna denetlenmez. Takımı çenelerden uzak tutmak için **Z'de dur** ayarlayın.
- Beslemeler ve hızlar frezelemedeki gibi başlangıç değerleridir.
