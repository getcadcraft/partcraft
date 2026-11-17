---
title: Kaydetme, yeniden açma ve çalışmaya devam etme
summary: Parçaları ve montajları bilgisayarınıza kaydedin, adlandırın, düğme, tuş ya da sürükleme ile yeniden açın, sürümleri saklayın ve bir tarayıcı sekmesinde çalışmanızı kaybetmekten kaçının.
keywords: kaydet, aç, yeniden aç, yükle, indir, sürümler, yedek, yeniden adlandır, dosya adı, kaybolan çalışma, siteden ayrılma, partcraft.json, partcraft-asm.json, yeni parça
from: c18a5abc
---

PartCraft ziyaretler arasında hiçbir şey saklamaz. Parçanız, bir dosya olarak kaydedene kadar tarayıcı sekmesinde yaşar ve o dosyayı açtığınızda geri gelir.

## Parça kaydetme

1. Parçayı adlandırın: görünümde boş bir yere tıklayarak hiçbir şeyin seçili olmamasını sağlayın, sonra sağ paneldeki **Ad** alanına yazın ve {{key:Enter}} tuşuna basın. Geçmiş başlığı buna göre değişir.
2. {{key:Mod+S}} tuşuna basın ya da {{ui:Kaydet}} seçin.
3. Tarayıcı `<name>.partcraft.json` dosyasını indirir. Durum çubuğunda "Bracket.partcraft.json kaydedildi (tüm geçmiş; düzenlemeye devam etmek için burada yeniden açın)." yazar.

Bir eskiz açıksa, kaydetme önce onu kapatır.

Dosya her eskizi, ilişkiyi, ölçüyü ve özelliği tutar; bastırılmış özellikleri, geri alma çubuğunun konumunu, çizim sayfasının ayarlarını ve GD&T notlarını ve içe aktarılmış herhangi bir STEP katısının tam metnini de. Geri al listeniz kaydedilmez.

## Montaj kaydetme

Bir montajda aynı {{ui:Kaydet}} ya da {{key:Mod+S}} `<montaj adı>.partcraft-asm.json` dosyasını indirir. Her parça bunun içinde saklanır: montajı yeniden açmak için ayrı parça dosyalarına ihtiyacınız yoktur.

Montajın içinde bir parçayı düzenlerken {{key:Mod+S}} o parçayı tek başına `.partcraft.json` olarak kaydeder. Tüm montajı kaydetmek için önce {{ui:Geri}} seçin, sonra kaydedin.

## Yeniden açma

Şunlardan biri:

- {{ui:Aç}} seçin ya da {{key:Mod+O}} tuşuna basın, sonra dosyayı seçin;
- dosyayı {{pick:mac=Finder|windows=File Explorer|linux=dosya yöneticiniz}} içinden 3B görünüme sürükleyin ("PartCraft parçasını açmak için bırakın" görünür).

PartCraft parçaları ve montajları içerdiklerine göre ayırır, bu yüzden ikisi de aynı şekilde açılır. `.step` ya da `.stp` dosyası içe aktarılmış bir katı olarak açılır: bkz. [STEP dosyası açın ve üzerine inşa edin](topic:import-step). Durum çubuğu onaylar: "Bracket.partcraft.json açıldı: 7 özellik." ya da "Hinge.partcraft-asm.json açıldı: 3 parça, 2 birleşim."

Ekrandaki parçada kaydedilmemiş değişiklikler varsa PartCraft önce sorar: {{ui:İptal}}, {{ui:Değişiklikleri at}} ya da {{ui:Önce kaydet}}.

:::warning
Bir parça dosyasını açmadan önce bir montajı ({{ui:Kapat}}) kapatın. Bir montaj ekrandayken bir parça açarsanız parça montajın arkasına yüklenir ve yalnızca montajı kapattıktan sonra görürsünüz. Bir montaj dosyasını açmak da kaydedilmemiş bir montajı sormadan değiştirir, bu yüzden önce kaydedin.
:::

## Baştan başlama

{{ui:Yeni}} boş bir "Part1" başlatır. Kaydedilmemiş değişiklikler varsa önce sorar; açık bir montajı kapatır (montaj kaydedilmemişse ayrıca sorar).

## Sürümleri saklama

Her kayıt yeni bir indirmedir, bu yüzden dosyaları saklayarak sürümleri tutabilirsiniz:

- Kaydetmeden önce ada bir sürüm ya da tarih koyun: "Bracket rev B".
- Aynı adlı bir dosya indirilenler klasöründe zaten varsa tarayıcınız " (1)", " (2)" ekleyebilir. En yeni olan en yüksek numaralı olandır ya da {{pick:mac=Finder|windows=File Explorer|linux=dosya yöneticiniz}} içinde tarihe bakın.
- Bitmiş dosyaları indirilenler klasöründen proje klasörünüze taşıyın.

Her sistemde indirmelerin nereye gittiği için bkz. [Dosyalarınızın nereye gittiği](common:your-files).

## Çalışmanızı kaybetmeyin

- Sekmeyi kapatmadan, sayfayı yenilemeden ya da bilgisayarın uzun süre uyku moduna geçmesine izin vermeden önce kaydedin. Kaydedilmemiş değişikliklerle kapatmaya çalışırsanız tarayıcı "Siteden ayrılmak istiyor musunuz?" diye sorar; ama bir çökme ya da kapatılmış bir dizüstü bilgisayar hiçbir uyarı vermez.
- Gizli ya da özel pencereler çalışır, ama başka bir fark yoktur: dosya yine tek kopyadır.
- Bulut kaydı ve sürüm geçmişi henüz kullanılamıyor.
