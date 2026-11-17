---
title: Bir .3dm modelini canlı tutun
summary: Modeli onu oluşturan programda değiştirin ve PartCraft'taki gövdenin takip etmesini izleyin: Rhino 8 veya bir Grasshopper tanımından, özelliklerinizin yeni şekle göre yeniden oluşturulmasıyla.
keywords: rhino, grasshopper, canlı bağlantı, canlı bağlantı, 3dm, nurbs, parametrik, bağlantı, eşitleme, betik, gönderme, içe aktarılmış gövde
from: cf4dc9b2
---

Modeli onu oluşturduğunuz yerde şekillendirmeye devam edin; makine, kontrol ve belgelendirmeyi burada yapın. Diğer programdaki her değişiklik, PartCraft'taki içe aktarılmış bir gövdenin yerini alır ve ondan sonraki özellikler yeni şekle göre yeniden oluşturulur.

:::note
Bağlantı için aynı bilgisayarda **CadCraft Studio** gerekir. Bir tarayıcı sekmesi bağlantıyı kuramaz. Hiçbir şey internete çıkmaz: betik, bir belirteçle birlikte Studio ile bu bilgisayarın kendi adresinden konuşur.
:::

:::warning
Bu bağlantı, betiğin dosya yazıcısı ve diğer programın yerine geçen bir araçla test edildi; henüz Rhino veya Grasshopper'ın içinde değil. Orada bir şey başarısız olursa ne dediğini bize bildirin.
:::

## Kurulum

1. Studio'da PartCraft'ı açın. {{ui:Ayarlar}} › {{ui:PartCraft}} › {{ui:Asistanlar}} bölümünde, **Yapay zekâ asistanlarının ve betiklerin PartCraft'ı kullanmasına izin ver** kutusunu işaretleyin, sonra **Düzenle**.
2. Studio'da {{ui:Asistan bağlan}} seçin. Aşağıda yapıştıracağınız adresi ve belirteci gösterir.
3. Betiği indirin: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Modelleme programından

1. `cadcraft_link.py` dosyasını Rhino'nun betik düzenleyicisinde çalıştırın (Rhino 8'de Python 3).
2. İlk kez adresi ve belirteci yapıştırın. Bunlar modelin içinde değil, ana klasörünüzdeki `.cadcraft-link.json` dosyasında tutulur. Studio her başladığında yeni bir belirteç üretir; betik o zaman yeniden sorar.

Durdurmak için betiği yeniden çalıştırın.

## Parametrik tanımdan

Önce betiği bir kez Rhino'da çalıştırın, böylece adres ve belirteç kaydedilir.

1. Bir Script bileşeni (Python 3) ekleyin ve tüm `cadcraft_link.py` dosyasını içine yapıştırın.
2. Şu girdileri verin: `G` (geometri, liste erişimiyle), `N` (ad, isteğe bağlı), `On` (bir boole anahtarı) ve `Target` (isteğe bağlı: `model` veya `part`, iki uygulama da açıksa).
3. `On` değerini doğru yapın.

Her çözümlemede `G` gönderilir ve daha önce gönderilenin yerini alır.

## Burada nasıl çalışır

- **Tek gövde.** Modeldeki görünen her şey, [bir .3dm dosyasını açtığınızda](topic:open-3dm-files) olduğu gibi tek bir içe aktarılmış özellik olur.
- **Kapanmak zorunda.** PartCraft küçük delikleri ve düz açıklıkları doldurur ve diğer programa kaç tane doldurduğunu bildirir. Model hâlâ kapanmazsa PartCraft sahip olduğu gövdeyi korur ve durum çubuğu bunu söyler. Kapanan bir sonraki değişiklik gövdeyi günceller.
- **Yaptığınız işi bitirin.** Bir eskizde veya çizimde güncellemeler reddedilir ve yeniden denenir; modele döndüğünüzde gelirler.
- **Geri al.** Birbirine iki saniyeden yakın güncellemeler tek bir geri alma adımını paylaşır.
- **Kaydet.** Parça dosyası bağlantıyı tutar. Yeniden açtıktan sonra betiği yeniden çalıştırın; aynı özellik güncellenir.

**Tek yönlü.** Buradaki değişiklikler diğer programa geri gitmez.

## Bir sorun olursa

- **"Hiçbir ModelCraft veya PartCraft penceresi buna izin vermiyor":** kurulumun 1. adımını yapın.
- **"Studio belirteci reddetti":** Studio yeniden başlatılmış. Yeni belirteci kopyalayın ve betiği yeniden çalıştırın. Grasshopper için önce Rhino'da çalıştırın.
- **"CadCraft Studio'ya ulaşılamıyor":** Studio çalışmıyor veya adres değişmiş.
