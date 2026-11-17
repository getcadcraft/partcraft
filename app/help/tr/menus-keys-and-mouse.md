---
title: Menüler, tuşlar ve fare
summary: Zaten çalıştığınız yolla eşleşen bir menü stili seçin, her komuta kendi tuşunu verin, komutları şerit sekmeleri arasında taşıyın ve tekerleğin ile her fare düğmesinin 3B görünümde ne yaptığını ayarlayın.
keywords: menü stili, menüler, şerit, araç çubuğu, özellik ağacı, klavye kısayolları, kısayollar, tuşlar, özelleştir, yeniden eşle, fare, tekerlek, yönü değiştir, yakınlaştırma yönü, orta düğme, yörünge, kaydır, dışa aktar, içe aktar, geçiş, tanıdık
from: 8445b06c
---

PartCraft'ın komutları, hangi yoldan çağırdığınızdan bağımsız olarak aynıdır. Bir **menü stili** yalnızca ekranda nerede durdukları, orada nasıl adlandırıldıkları ve hangi tuşlarla çalıştıkları kararını verir. {{ui:Ayarlar}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menüler, tuşlar ve fare}} bölümünden seçin; değişiklik anında olur ve bu tarayıcı bunu hatırlar.

## İki stil

| Stil | Ne elde edersiniz |
|---|---|
| {{ui:PartCraft}} | PartCraft'ın kendi araç çubuğu: çalışma alanı değiştiricisi, Dosya, Eskiz, Özellikler, Çizim, Montaj, Düzenle ve Görünüm. Tuşlar: {{key:S}} eskiz, {{key:F}} sığdır, {{key:M}} ölç, {{key:X}} kesit görünümü. Başlangıç. |
| {{ui:Özellik ağacı}} | Özellik tabanlı mekanik CAD programlarının düzenlediği gibi bir şerit: her dışa aktarmayı içeren bir {{ui:Dosya}} menüsü, hızlı düğmeler ve sekmeler {{ui:Özellikler}}, {{ui:Eskiz}}, {{ui:Yüzeyler}}, {{ui:Değerlendir}}, {{ui:Çizim}}, {{ui:Montaj}}, {{ui:Çalışmalar}} (çalışma alanları ve araçları), {{ui:Illustrate}} (Illustrate çalışma alanının elle araçları; araçları önce Illustrate'e geçer) ve {{ui:Görünüm}}. {{ui:Özellikler}} {{ui:Eskiz}} ile başlar, çünkü bir parça bir eskizle başlar. Ek tuşlar: {{key:E}} ekstrüzyon, {{key:H}} delik ve {{key:V}} sonra bir görünüm harfi: {{key:V}} {{key:F}} ön, {{key:V}} {{key:B}} arka, {{key:V}} {{key:T}} üst, {{key:V}} {{key:O}} alt, {{key:V}} {{key:R}} sağ, {{key:V}} {{key:L}} sol, {{key:V}} {{key:I}} izometrik, {{key:V}} {{key:N}} normale. 3B görünümde orta düğme yörünge çevirir, {{key:Shift}} ve orta düğme kaydırır, sağ düğme kaydırır ve sol düğme yalnızca seçer. |

Her stil {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} ve {{key:Mod+A}} tuşlarını korur.

Başka bir çalışma alanının aracı önce oraya geçer; başka bir çalışma alanında seçilen bir Tasarım aracı önce Tasarım'a döner. Eskiz araçları bir eskiz bekler, çizim araçları çizim sayfasını, montaj araçları bir montajı bekler: durum çubuğu önce ne yapılacağını söyler.

:::tip
Eskizin içinde, çizim sayfasında, montajda ve diğer çalışma alanlarında harfler orada kendi anlamlarını korur ({{key:L}} çizgi, {{key:R}} dikdörtgen, {{key:J}} birleşim …) her stilde. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ve oklar her zaman kendi anlamlarını korur. PartCraft'ın kendi düzeninin bir tuşu, stiliniz onu başka bir komuta verdiyse hiçbir şey yapmaz ve durum çubuğu komutun nereye gittiğini söyler.
:::

## Kendinize göre yapın

1. En yakın stili seçin, sonra {{ui:Özelleştir…}} tıklayın.
2. {{ui:Tuşlar ve menüler}} bölümünde bir komut bulun (arama kutusu yardımcı olur). {{ui:Tuş ekle}} tıklayın ve tuşa basın veya art arda iki tuşa. Bir tuşu kaldırmak için ona tıklayın.
3. Şeritle, {{ui:Yeri}} komutu başka bir sekmeye ve panele, {{ui:Dosya}} menüsüne ya da {{ui:Yalnızca tuşlarla}} taşır.
4. {{ui:Fare}} bölümünde tekerleği, bir eskizi kaydıran düğmeleri ve her düğmenin 3B görünümde ne yaptığını ayarlayın.
5. Bir ad verin ve {{ui:Kaydet}} tıklayın.

Yerleşik bir stili kaydetmek kendi kopyanızı yapar ("Benim Özellik ağacım"); yerleşik olan asla değişmez. Aynı tuşu iki komuta veren veya iki tuşlu bir tuştan önce çalışacak bir tuş kırmızı gösterilir ve kaydetmeden önce düzeltilmesi gerekir.

## Fare

- **Fare tekerleği**: {{ui:Yukarı kaydırmak yakınlaştırır}} (başlangıç) ya da {{ui:Yukarı kaydırmak uzaklaştırır}}, ve ne kadar hızlı. Bir izleme paneli çimdiği her zaman parmaklarınızın hareket ettiği yönde yakınlaştırır.
- **Eskizi kaydırma**: orta düğme, sağ düğme veya ikisi. Eskizde sağ tıklama yine aracın adımını bitirir.
- **3B görünümde sürükleme**: {{ui:Her görünümün kendi ayarı}} PartCraft'ın ayarını korur ({{ui:Ayarlar}} › {{ui:PartCraft}}: sol yörünge çevirir ya da orta yörünge çevirir). Ya da her düğmeyi yörünge, kaydırma, yakınlaştırma veya hiçbir şey olarak ayarlayın; {{key:Shift}} ile yörünge düğmesi kaydırır. Sürüklemeden tıklama yine seçer.

## Yanınıza alın

{{ui:Dışa aktar}} kullanılan stili küçük bir `.ccinput.json` dosyası olarak kaydeder; {{ui:İçe aktar…}} başka bir bilgisayardan veya bir meslektaştan birini ekler. İçe aktarılan bir dosya yalnızca PartCraft'ın kendi komutlarına işaret edebilir: başka her şey dışarıda bırakılır ve durum çubuğunda sayılır. {{ui:Bu stili sil}} kendi stillerinizden birini kaldırır.

:::note
Bu ayarlar bu tarayıcıda kalır. Stil kartlarının altındaki {{ui:Bu stili her uygulamada kullan}} her uygulamayı eşleşen stiliyle açar (kendi araç çubuğu ya da bir şerit), her birinde yaptığınız değişikliklerle. Bir uygulamada başka bir stil seçmek yalnızca o uygulamayı değiştirir.
:::

İlgili: [Tuşlar ve fare](topic:keyboard) · [PartCraft ayarları](topic:settings) · [Başka bir parametrik modelleyiciden geliyorsanız](topic:coming-from)
