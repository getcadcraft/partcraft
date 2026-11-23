---
title: "Bu çerçeveyi denetle"
summary: "Bir kaynaklı yapının (bir kızak, bir stand, tüp ve profillerden bir çerçeve) çelik elemanlarını alın, ekipmanı ayakları üzerine ve mesnetleri zemine yerleştirin ve AISC 360-16 ya da EN 1993 altında her elemanın ve her kaynağın ne kadarının kullanıldığını görün. Bir mühendis gözden geçirene kadar bir yardımcıdır."
keywords: "çerçeve, kaynaklı yapı, kızak, pompa kızağı, yapısal eleman, kaynak, kaynaklar, denetim, AISC 360, EN 1993, kullanım oranı, utilisation, utilization, mesnet, ekipman, yük, içi boş kesit, HSS, RHS, CHS, mühendis"
from: 032e34ee
---

{{ui:Bu çerçeveyi denetle}} bir kaynaklı yapının düz çelik elemanlarını alır, bunlardan bir çerçeve kurar, çelik ve üzerine koyduğunuz ekipmanın ağırlığı altında çözer ve her elemanı ve elemanların birleştiği her kaynağı test eder. Tek bir çalıştırma, tek bir tablo.

:::warning
Bu **bir mühendis gözden geçirene kadar yardımcıdır**. Onay damgası değildir ve bir geçme sonucu bir tasarım değildir. Elemanların merkez çizgilerini çizildiği gibi kullanır, her birleşimi kesit boyunca tam çevreden kaynaklı sayar, köşe kaynağının ayağını kesitin cidarından alır (8 mm'ye kadar), siz ayarlamadığınız sürece, ve cıvataları, levhaları, taban levhalarını, angkrajları, ezilmeyi, blok kesmeyi, yorulmayı ya da kaldırmayı denetlemez.
:::

## Çalıştırma

1. Elemanları {{ui:Yapısal eleman}} ile çizin (kesitler kesit tablosundan gelir).
2. {{ui:Görünümler}} › {{ui:Bu çerçeveyi denetle}} açın. Çerçevenin nerede durduğunu belirtin (her ayakta bir **mesnet**: mafsallı, ankastre ya da makaralı; {{ui:Ayaklarda mafsallı mesnetler}} her en alçak eleman ucuna bir tane koyar) ve üzerine ne oturduğunu belirtin (**ekipman**: kütle, ağırlık merkezi, cıvatalandığı noktalar ve isteğe bağlı yatay bir itme).
3. Kodu seçin: **ASCE 7 + AISC 360-16** ya da **EN 1990 + EN 1993**. Çelik sınıfını ve AISC için kaynak metalinin dayanımını ayarlayın (482.6 MPa, E70'tir).
4. {{ui:Denetle}} düğmesine basın. {{ui:Raporu CSV olarak kaydet}} her tabloyu yazar; inceleme yapılmadığına dair satır en başta yer alır.

Çerçeve milimetre cinsinden okunur; parçanın dikey ekseni yukarıdadır. Mesnet ve ekipman noktaları aynı çerçevede x y z olarak yazılır; z yüksekliktir.

Bir eleman ucu başka bir elemanın orta noktasına denk gelirse eleman orada bölünür; aynı şekilde bir ayak ya da bir cıvata noktası bir elemanın doğrusu üzerinde ise o da bölünür. Bir ağırlık, cıvata noktaları arasında rijit cisim olarak paylaştırılır; ayakların dışında kalan bir ağırlık merkezi ya da bir ayaktaki kaldırma kuvveti belirtilir, asla gizlenmez.

## Ne elde edersiniz

- En çok kullanılan öğe ve herhangi bir şeyin başarısız olup olmadığı. Denetimin yargılayamadığı öğeler (tabloda olmayan bir kesit, koda bir katsayısı olmayan bir çelik) sayılır ve adları verilir; asla geçen sayılmazlar.
- Her eleman ve her kaynak grubu için bir satır: ne kadarının kullanıldığı, belirleyici denetim ve madde, ve belirleyici yük kombinasyonu.
- Aynı tablolar raporda.

## Neler denetlenir

İçi boş kesitler (RHS, SHS, CHS, boru) ve I kesitler çekme, basınç, eğilme, kesme ve bunların etkileşimi için; köşe ve tam nüfuziyetli kaynaklar elastik vektör yöntemiyle. Kompakt cidarlar yalnızca içi boş kesitlerde eğilme için denetlenir; narin cidarlar denetlenmedi diye belirtilir. Bazı sabitler standartlardan yazıldı ve henüz basılı bir kopyayla karşılaştırılmadı; rapor her kaynağı listeler.

Elemanları çizme ve kesim listesi için bkz. [Çelik kesitlerden çerçeveler](topic:structural-members).
