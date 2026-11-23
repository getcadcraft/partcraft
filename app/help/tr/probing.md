---
title: "Prob: parçayı bulun ve iş ofsetini ayarlayın"
summary: "Bir prob ile üst yüzü, bir yanı, bir deliği ya da bir çıkıntıyı dokunun; kontrolcünün iş ofsetini parçanın gerçekten olduğu yere taşımasına izin verin ya da yalnızca ölçün. Her kontrolcünün ne yapabildiği ve neyin kanıtlanmadığı."
keywords: "prob, probing, dokunma probu, dokunarak ayar, iş ofseti, g54, g31, g38.2, atlama, datum, merkez bulma, delik, çıkıntı, kenar, sıfırı ayarla, ölçme, muayene, g10"
from: 1f718b82
---

{{ui:Prob}} İmalat'ta programa bir prob çevrimi yazar: prob parçaya dokunur ve kontrolcü iş ofsetini (G54), yüzeyin bulunduğu yer ile modelin onun olduğunu söylediği yer arasındaki fark kadar taşır. Sonraki işlemler parçanın gerçekten olduğu yerde keser.

**Burada hiçbir şey bir makinede çalıştırılmadı.** Bir dokunuştan önceki hareketler sıradan hareketlerdir: prob, probing hareketinin kendisine kadar izlenmez. Yavaş çalıştırın, önce havada, elinizi besleme durdurma üzerinde tutarak.

## Kullanım

1. **Takımlar** sekmesinde ilk prob işlemi bir **dokunma probu** ekler: bilyasının çapı ve prob beslemesi (ayarlamadığınız sürece 100 mm/dk).
2. İmalat araç çubuğunda {{ui:Daha fazla}}'ye, sonra {{ui:Prob}}'a basın ve neye dokunulacağına tıklayın. Her seçim bir çevrimdir, tıkladığınız sırayla:

| Seçim | Çevrim | Ayarlananlar |
|---|---|---|
| Takım ekseninde yukarı bakan düz bir yüz | Aşağı giden tek bir dokunuş | Z |
| X ya da Y'ye dik düz bir yan yüz | Yüzün üstünün biraz altında, yüze doğru giden tek bir dokunuş | X ya da Y |
| Takım ekseni boyunca bir delik ya da çıkıntı | Dört dokunuş (+X, −X, +Y, −Y) | Merkezinin X ve Y'si |

3. **Sonuçla**: {{ui:İş ofsetini ayarla}} ya da {{ui:Yalnızca ölç}}.
4. **Bu kadar uzaktan başla** ve **bu kadar ileri ara**, prob hareketinin beklenen yüzeyden ne kadar uzakta başladığı ve kontrolcü pes etmeden önce probun ötesine ne kadar gidebileceğidir. **Derinlik**, topun bir delik, çıkıntı ya da yan yüzün üstünün ne kadar altına gittiğidir.

Prob işlemini ilk sıraya koyun, kesmeden önce.

## Her kontrolcünün yazdığı

| Kontrolcü | Dokunuş | Sonuç |
|---|---|---|
| Fanuc tipi | `G31`, konumu `#101` ila `#104` içinde tutulur | Ofset değişkenleri (`#5221` ila `#5223`) bulunan − beklenen farkı kadar taşınır. Yalnızca ölç: fark `#110` (ve `#111`) içinde bırakılır. |
| LinuxCNC | `G38.2`, konum adlandırılmış parametrelerde tutulur | Yeni ofsetle `G10 L2 P1`. Yalnızca ölç: bir `(DEBUG, …)` mesajı. |
| GRBL | `G38.2` | Tek dokunuş, `G10 L20 P1` ile bir ekseni ayarlar. GRBL'nin değişkenleri yoktur, bu yüzden bir merkez **hesaplayamaz**: dosya bunu bir yorumla söyler ve hiçbir şey ayarlamaz. |

Aritmetik postun, bu yüzden değiştirebilirsiniz: olaylar `probe-move` ve `probe-set`'tir ([Düzenleyebileceğiniz post işlemciler](topic:post-processors)).

## Sınırlar

- Bir iş ofseti (G54). Yalnızca eksenlere dik yüzler: açı yok, köşe çevrimi yok, işin döndürülmesi yok.
- Takım ayarlayıcı yok, kırık takım denetimi yok, bir boyutu bir toleransa karşı ölçme yok, rapor yok.
- Prob için mil başlatılmaz ve soğutma kapalı kalır; mildeki takımın bir prob olduğunu denetleyen bir şey yoktur.
- Malzeme simülasyonu bir prob yolunu çalıştırmaz.
- Probun kendi kalibrasyonu (bilya ofseti, uç sapması, tetikleme yönü) kontrolcünün işidir.
