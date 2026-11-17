---
title: USB bellekten çalıştırma
summary: Mühendislik araçlarının neyi nereye yazdığı; CadCraft Studio'nun bir USB bellekten ya da herhangi bir klasörden, kurulum yapmadan ve yönetici hakkı olmadan nasıl çalışabildiği: ayarlar, üreteçler, önbellekler ve parça dosyaları ile bellekte kalanlar.
keywords: usb, taşınabilir, kurulum gerektirmez, yönetici, yönetici hakkı, ayarlar, veri klasörü, üreteçler, dosyaların yazıldığı yer, çevrimdışı, gizlilik, ana bilgisayar erişimi
from: 263efc79
---

Mühendislik araçları (üreteçler, mühendislik kütüphanesi, denetimler ve veri dosyaları) **yönetici hakkı gerektirmez** ve **kurulum gerektirmez**. Yalnızca burada listelenenleri yazar, başka hiçbir şey yazmaz.

| Ne | Nerede tutulur |
|---|---|
| Parçalarınız, üretilmiş gövdeleri, veri sayfaları ve denetimleri | Kaydettiğiniz parça dosyası (`.partcraft.json`), kaydettiğiniz yerde. |
| Dosyalardan açtığınız üreteçler | Uygulamanın kendi depolama alanında: bir web sayfasında tarayıcının yerel depolaması, taşınabilir Studio'da ise programın yanındaki `data` klasöründe. En fazla 20. |
| Ayarlar (ayarladığınız voksel boyutları, çözücü iş parçacıkları, düzen) | Aynı uygulama depolama alanı. |
| Veri sayfaları, alanlar, örgüler (mesh) | Yalnızca kaydettiğiniz yerde: indirme, seçtiğiniz yere gider. |

Araçlar kendi başına hiçbir ağ bağlantısı kurmaz: sunulan üreteçler uygulamanın kendi klasöründeki dosyalardır; kütüphane ve denetimler bilgisayarınızda, ağa erişemeyen bir çalışanda (worker) çalışır; mühendislik verileri (su ve hava özellikleri, malzemeler) uygulamanın içindedir. Dosyadan açtığınız bir üreteç bilgisayarınızda okunur ve hiçbir yere gitmez.

## Taşınabilir Windows zip'i ve Linux

Windows için taşınabilir Studio, ayarlarını, önbelleklerini ve eklentilerini programın yanındaki bir `data` klasöründe tutar. Linux AppImage, yanında `portable` adlı bir dosya bulunduğunda bunları kendi yanında tutar; bu dosya yoksa ana klasörünüzü kullanır. Taşınabilir Mac biçimi yoktur: sistem, indirilmiş bir uygulamanın kendi yanına yazmasını engeller. Kabuğun kendi taşınabilirlik notları (`Studio` yardımı) programın neleri yazdığını listeler.

## Ana bilgisayar erişimi

Burada hiçbir şey ana bilgisayar erişimi istemez. Yazıcılar, seri bağlantılı makineler ve USB aygıtları ayrıdır: bir iş bunlara ihtiyaç duyduğunda sorarlar, her aygıt için bir kez; üreteçler ve denetimler bunlara hiç dokunmaz.
