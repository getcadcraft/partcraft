---
title: Bir çıkıntıyı ekstrüde etme ve içinden kesme
summary: Ekstrüzyon ile bir eskizi katıya dönüştürün; kör, orta düzlem, yüzeye kadar ya da iki yönlü derinlik, konik ya da eskizin tek bir konturunu ayarlayın; sonra bir yüzeyde eskiz çizip Kes ile bir cep ya da baştan sona bir yuva kesin.
keywords: ekstrüzyon, çıkıntı, ekstrüde çıkıntı, kes, ekstrüde kesme, cep, baştan sona, kör, orta düzlem, ters yön, derinlik, kes-ekstrüde, çıkıntı-ekstrüde, ped, yüzeye kadar, sonraki yüzeye kadar, köşe noktasına kadar, yüzeyden ofset, yön 2, iki yön, ekstrüde ederken eğim, konik, kontur, bölge, seçili konturlar
from: 3b13ff10
---

{{ui:Ekstrüzyon}}, bir eskizin kapalı profilini düzleminden dik olarak dışarı iterek malzeme oluşturur. {{ui:Kes}} aynısını yapar ama malzemeyi kaldırır. İkisi de temelde aynı özelliktir; sonradan birini diğerine çevirebilirsiniz.

## Bir çıkıntı ekstrüde etme

1. Kapalı bir profil çizin ve eskizi kapatın (bkz. [İlk eskizinizi çizme](topic:sketch-basics)). Eskiz seçili kalır.
2. {{ui:Ekstrüzyon}} seçeneğini seçin.

10 mm'lik bir katı belirir, "Extrude1" geçmişe eklenir ve eskizi altında girintili olarak görünür; durum çubuğu şunu yazar: "Extrude1 eklendi. Sayılarını sağda değiştirin."

**Hangi eskiz kullanılır:** az önce kapattığınız eskiz ya da geçmişte seçili olan eskiz. Hiçbir şey seçili değilse PartCraft, henüz hiçbir özellik tarafından kullanılmamış en son eskizi alır. Hiç yoksa: "Önce bir eskiz yapın: bir düzlem seçin, Eskiz, kapalı bir profil çizin, Çık."

### Derinliği ve yönü ayarlama

Sağ panelde:

| Ayar | Seçenekler | Varsayılan |
|---|---|---|
| **İşlem** | Çıkıntı (malzeme ekler), Kes (malzemeyi kaldırır), Kesişim (örtüşen kısmı tutar), Yeni gövde (bu sürümde henüz yapılmadı: kesin bir çekirdek gerektirir) | Çıkıntı |
| **Bitiş** | Kör (bir derinlik), Orta düzlem (iki yönde), Baştan sona, Yüzeye ya da düzleme kadar, Sonraki yüzeye kadar, Köşe noktasına kadar, Yüzeyden ofset | Kör |
| **Derinlik (mm)** | Sıfırdan büyük herhangi bir boyut (Kör ve Orta düzlem için gösterilir) | 10 |
| **Yönü ters çevir** | Eskiz düzleminin öbür tarafına büyür (Orta düzlem için gösterilmez) | Kapalı |

Bir sayı yazıp {{key:Enter}} ya da {{key:Tab}} tuşuna basın: parça hemen yeniden oluşturulur. **Orta düzlem**, derinliğin yarısını eskizin her iki yanına koyar.

### Bir yüzeye, sonraki yüzeye ya da köşe noktasına kadar

Bu sürümde henüz yapılmadı: her "…kadar" bitişi kesin bir çekirdek gerektirir ve özellik şunu söyler: "Bir yüzeye, sonraki yüzeye ya da bir köşe noktasına kadar ekstrüzyon: henüz yapılmadı (kesin bir çekirdek gerektirir)." Ölçtüğünüz bir Kör derinliği kullanın. Kesin bir çekirdekle bitişler şöyle çalışır:

- **Yüzeye ya da düzleme kadar**: **Yüzeye kadar** bir düz yüzey (Seç, sonra ona tıklayın) ya da bir referans düzlemi alır. Eskize paralel bir yüzey kesin bir derinlik verir; eğik bir yüzey ise ucu eğimde keser. Yüzey eskizin arkasındaysa: "… Yönü ters çevirmeyi deneyin."
- **Sonraki yüzeye kadar**: ekstrüzyonun karşılaştığı gövdenin ilk düz yüzeyinde durur (eğri yüzeyler burada desteklenmez: bunu da söyler).
- **Köşe noktasına kadar**: bir köşe noktasının (bir kenarın ucuna yakın tıklayın) ya da bir nokta özelliğinin hizasında durur.
- **Yüzeyden ofset**: Yüzeye kadar gibi, ama ondan **Ofset (mm)** kadar önce durur (yüzeye dik ölçülür).

### İki yön, konik, tek kontur

- **İkinci yön** (Kör): eskizin öbür tarafına **İkinci derinlik (mm)** kadar da ekstrüde eder.
- **Konik (°)**: yanlar ilerledikçe içeri eğilir (negatif: dışarı), bir eğim gibi; yalnızca tek yön. Bu sürümde henüz yapılmadı (kesin bir çekirdek gerektirir): 0'da bırakın.
- **Bölgeler**: **Bölge seç**, sonra ekstrüde edilecek döngülerin içine tıklayın; yalnızca bu bölgeler kullanılır (bir karenin içindeki bir daire: silindir için dairenin içine, aralarındaki alana delikli bir levha için tıklayın). **Tümü** her döngüye geri döner.

Bunların altında **Eskiz ölçüleri**, eskizin yönlendiren ölçülerini listeler; böylece eskizi açmadan profilin boyutlarını değiştirebilirsiniz.

:::note
**Baştan sona yalnızca kesimler içindir.** Baştan sona olarak ayarlanmış bir çıkıntı şu mesajla başarısız olur: "Baştan sona kesimler içindir. Bir çıkıntı için bir derinlik kullanın." Bir özelliği Kes'ten yeniden Çıkıntı'ya çevirdiğinizde, Baştan sona sizin için Kör'e döner.
:::

## Bir cep kesme

1. Kesmek istediğiniz düz yüzeye tıklayın. Vurgulanır ve sağ panel **Yüzey** yazar.
2. {{ui:Bu yüzeyde eskiz}} (ya da araç çubuğundaki {{ui:Eskiz}}) seçeneğini seçin.
3. Cebin konturunu çizin, örneğin bir dikdörtgen, ve ölçülendirin.
4. {{ui:Çık}} seçeneğini seçin.
5. {{ui:Kes}} seçeneğini seçin. **Baştan sona** olarak başlar: parçanın içinden baştan sona malzeme kaldırır.
6. Bir cep için **Bitiş**'i **Kör (bir derinlik)** olarak ayarlayın ve **Derinlik (mm)** değerini yazın.

Bir kesim, eskizini yaptığınız yüzeyden uzağa, malzemenin içine girer. Durum çubuğu "Eskizin bu tarafında kesilecek bir şey yok. Öbür yönü deneyin." derse, **Yönü ters çevir** kutusunu işaretleyin.

Cebin tabanındaki bir eskiz tabanı izler: cebin derinliğini değiştirirseniz eskiz de onunla birlikte hareket eder.

## Bütün bir yüzeyi çekme ya da itme

Bir yüzeyi daha fazla dışarı çıkarmak ya da içeri batırmak için dış hattını çizmeniz gerekmez. Düz yüzeye tıklayın, sonra sağ panelde:

- {{ui:Bundan ekstrüde et}} yüzeyi dışarı çeker: PartCraft yüzeyin üzerine dış hattını tutan bir eskiz ve 10 mm'lik bir Ekstrüzyon ekler (yüzeydeki delikler delik olarak kalır).
- {{ui:İçine kes}} yüzeyi içeri iter: aynı eskiz ve parçanın yarısına kadar bir Kes ekler.

İkisi de tek adımdır: {{key:Mod+Z}} eskizi ve özelliği birlikte kaldırır. Yeni özellik seçili olduğundan, hemen bir sayı yazın ve derinliği için {{key:Enter}} tuşuna basın. Dış hat, sabit çizgiler ve yaylar olarak kopyalanır: yüzeydeki sonraki değişiklikleri izlemez. Dış hattın bir kısmı kopyalanamazsa (serbest biçimli bir eğri), bunun yerine eskiz, kopyalanabilenlerle açılır; bitirin, sonra {{ui:Çık}} ve {{ui:Ekstrüzyon}} ya da {{ui:Kes}} seçeneğini seçin.

## Adacıklı profiller

Bir eskiz birden çok kapalı döngü içerebilir. Yan yana duran döngüler ayrı çıkıntılar (ya da kesimler) olur; bir döngünün içindeki döngü ise çıkıntıdan geçen bir delik olur. Örneğin, içinde iki daire bulunan bir dikdörtgen, iki delikli bir levha olarak ekstrüde edilir.

Yalnızca bazı döngüleri kullanmak için, bunları **Bölgeler** (yukarıda) ile seçin; başka bir özellik aynı eskizin diğer döngülerini kullanabilir.

## Sonra düzenleme

- Ayarlarını geri getirmek için geçmişte "Extrude1"e tıklayın.
- Eskizini açmak için (altında girintili olarak görünen) eskizine çift tıklayın; yeniden oluşturmak için kapatın.
- Bastırma, geri sarma, yeniden sıralama ve silme için bkz. [Parçayı geçmişi üzerinden değiştirme](topic:edit-history).

## Yaygın iletiler

| İleti | Ne yapmalı |
|---|---|
| "Eskizin ekstrüde edilecek kapalı bir profili yok." | Eskizde katı çizgilerden oluşan kapalı bir döngü yok. Boşlukları kapatın ya da yapı çizgilerini {{key:Q}} ile geri çevirin |
| "Profil açık: (x, y) konumundaki bir uç hiçbir şeye bağlı değil." | Eskizi açın ve o ucu bir sonraki çizgiye bağlayın |
| "Henüz kesilecek bir şey yok." | Bir kesim, kesilecek bir katı gerektirir. Önce bir çıkıntı oluşturun |
| "Bundan sonra parçadan hiçbir şey kalmadı." | Kesim her şeyi kaldırdı. Boyutunu ve yönünü denetleyin |

Daha fazlası için bkz. [Sorun giderme](topic:troubleshooting).
