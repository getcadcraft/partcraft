---
title: Belgeler ve revizyonlar (kasa): adım adım rehber
summary: Gerçek bir iş üzerinden adım adım ilerleyin: bir proje klasöründeki parça ve montajları kontrol altına alın, bir parçayı alın, değiştirin ve bir notla geri verin, serbest bırakın, neyin kullandığını ve malzeme listesini görün, dosya kilitliyken ikinci bir kişinin ne gördüğünü ve bulut klasörleriyle nasıl çalıştığını öğrenin.
keywords: kasa, belgeler, rehber, eğitim, al, geri ver, revizyon, serbest bırakma, onayla, kilit, geçmiş, nerede kullanılıyor, malzeme listesi, bom, montaj, bulut klasörü, proje klasörü, iki kişi, paylaşılan klasör
from: 0a5e6983
---

## Ne yapacaksınız

Siz Ana'sınız; Riverside Clinic projesi üzerinde, Ben adlı bir meslektaşınızla çalışıyorsunuz. Projenin parça ve montajları, ikinizin de erişebildiği tek bir klasörde durur (paylaşılan bir sürücü, eşitlenen bir klasör ya da bir bulut klasörü). Sonunda bir dosya ilk kopyasından serbest bırakılmış **A** revizyonuna geçmiş, **B.1** olarak yeniden değiştirilmiş olacak; kimin ne yaptığını görmüş ve dosyayı siz tutarken Ben'in neler gördüğüne bakmış olacaksınız.

Her şey, dosyalarınızın yanındaki gizli `.ccvault` klasöründe tutulur: sunucu yok, hiçbir şey yüklenmez (bulut klasörü istisnadır, son adıma bakın). Her düğme ve kural için, uygulamanızda varsa *Belgeler: alma, revizyonlar ve serbest bırakma* konusuna bakın.

## 1. Proje klasörünü ayarlayın

1. Araç çubuğunun **Dosya** grubunda {{ui:Documents…}} seçeneğini seçin.
2. {{ui:Choose the project folder}} seçeneğini seçin ve projenin parça ve montajlarını barındıran klasörü seçin. (Proje klasörleri Studio'da ve klasör açabilen tarayıcılarda, örneğin Chrome ve Edge'de çalışır. Diğer tarayıcılarda panel bunu belirtir.)
3. **Siz:** satırının yanındaki {{ui:Change}} seçeneğini seçin ve adınızı yazın: `Ana` (sorarsa bu bilgisayarın adını da). Panel artık *Siz: Ana, bilgisayarınızda* yazar. Adınız yaptığınız her işin üzerine yazılır.
4. {{ui:Start a vault in this folder}} seçeneğini seçin ve projenin adını yazın: `Riverside clinic`. Panel *Riverside clinic için kasa başlatıldı.* yazar.

## 2. Bir dosyayı kontrol altına alın

1. **Kasada olmayan dosyalar** bölümünü açın ve `plates/Bracket.partcraft.json` yanındaki {{ui:Add}} seçeneğini seçin.
2. Dosya **Kasadaki dosyalar** altında, **Çalışma sürüyor** durumunda, **A.1** revizyonuyla görünür. A.1 ilk kopyasıdır; kasa her revizyonun bir kopyasını tutar.

## 3. Alın, değiştirin, geri verin

1. `plates/Bracket.partcraft.json` yanındaki {{ui:Open}} seçeneğini seçin. Parça PartCraft'ta açılır ve görebilmeniz için panel kapanır. Paneli {{ui:Documents…}} üzerinden yeniden açın.
2. Paneli yeniden açın ve {{ui:Check out}} seçeneğini seçin. Satır artık **Size alındı** yazar. `.ccvault/locks` içinde bir kilit dosyası oluşturulmuştur; siz geri verene kadar kimse bu dosyayı alamaz.
3. Parçayı değiştirin: bir ölçüyü düzenleyin, bir delik ekleyin. Dosya size alınmadıysa Kaydet reddedilir ve nedenini söyler; Farklı kaydet ise kendi kopyanız için her zaman çalışır.
4. Paneli açın, {{ui:Check in}} seçeneğini seçin ve neyi değiştirdiğinizi yazın (`Moved the door`). Panel *A.2 olarak geri verildi* der. Proje klasöründeki dosya artık açık olan parçadır ve kilit kalkmıştır. Hiçbir değişiklik yapmadan geri verirseniz revizyon korunur.

Vazgeçerseniz, {{ui:Undo check-out}} dosyayı yeni bir revizyon oluşturmadan geri verir.

## 4. İnceleme ve serbest bırakma

1. {{ui:Send for review}} seçeneğini seçin. Durum **İncelemede** olur ve dosya salt okunur hale gelir.
2. Onaylamadan önce {{ui:Project settings}} seçeneğini seçin ve kimlerin onaylayabileceğini yazın (her satıra bir ad), örneğin `Ben` ve `Carla`; ayrıca onaylayanın yazardan başka biri olması gerektiği kuralını işaretleyin. {{ui:Save settings}} seçeneğini seçin. Artık kasanın kendisi başkalarını reddeder.
3. Ben (ya da Carla) {{ui:Approve}} seçeneğini seçer ve onaylayanın adını yazar. Durum **Serbest bırakıldı** olur, revizyon **A** olur; *onaylayan* ve adı kaydedilir. Serbest bırakılmış dosya salt okunurdur. {{ui:Send back}} seçeneği, bir nedenle birlikte dosyayı **Çalışma sürüyor** durumuna geri döndürürdü.

Onaylayanın adı, panelde yazılan addır; kimlik kanıtı değil, kimin onayladığının kaydıdır.

## 5. Yeni bir revizyon

1. Serbest bırakılmış dosyada {{ui:New revision}} seçeneğini seçin. Bu, dosyayı bir sonraki harf için tutar.
2. Değiştirin, sonra {{ui:Check in}}. Revizyon **B.1** olur, çalışma sürüyor. Aynı şekilde serbest bırakın, o zaman **B** olur. İlk geri vermeden önce {{ui:Undo check-out}} dosyayı **A** da bırakır.

Revizyon harfleri A, B … Z, AA, AB diye ilerler. Standardınız bazı harfleri atlıyorsa, *ASME Y14.35 sırasını kullan* proje ayarı, sonraki revizyonlar için I, O, Q, S, X ve Z harflerini atlar.

## 6. Ne olduğunu görün

Ayrıntılarını açmak için dosyanın adını seçin:

- **{{ui:History}}**: her olay, en yenisi önce, kim, hangi bilgisayar ve ne zaman ile: Ana tarafından *Checked in A.2*, Ben tarafından *Released*, vb.
- **{{ui:Revisions}}**: revizyon tablosu: tutulan her revizyon, tarihi, geri veren kişi, notu ve onaylayanıyla birlikte. Kasa her birinin bir kopyasını `.ccvault/revs` içinde tutar.
- **{{ui:Uses}}**: bir montajın parçaları.
- **{{ui:Used by}}**: bu parçayı tutan kasadaki her montajı listeler: bir braketi değiştirirseniz hangi montajları kontrol etmeniz gerektiğini bilirsiniz.

## Montajlar: ne kullandıkları ve malzeme listesi

Montajı (`.partcraft.json`, Montaj modundan kaydedilmiş) klasöre koyun ve ekleyin. Adını seçin: **Kullandıkları** montajın tuttuğu parçaları, her parçanın revizyonu ve durumuyla listeler; bir parçadaki **Kullanıldığı yerler** ise onu tutan her montajı listeler. {{ui:Bill of materials (CSV)}} tüm parça listesini, seviye seviye, adetleri, revizyonları ve durumlarıyla birlikte bir elektronik tabloya kaydeder. Bir braketi değiştirirseniz **Kullanıldığı yerler** hangi montajlara bakacağınızı söyler.

## 7. Dosyayı siz tutarken Ben ne görür

Şimdi dosyayı yeniden alın ve Ben'den aynı proje klasörünü kendi bilgisayarında açmasını ve paneli açmasını isteyin. Dosyanın satırında **Ana tarafından, bilgisayarında, şu saatten beri alındı** ifadesini görür ve {{ui:Check out}} düğmesi yoktur. Yine de denerse kasa reddeder: kilit, sistemin ikinci kez oluşturmayacağı bir dosyadır; bu yüzden Studio'da klasör diskteyken iki kişi aynı anda, aynı saniyede bile dosyayı tutamaz. (Tarayıcıda klasör yalnızca en iyi çabayı sağlar ve panel bunu **Klasör** altında belirtir.)

Ana uzaktaysa ve Ben dosyaya ihtiyaç duyarsa, {{ui:Break check-out}} dosyayı serbest bırakır. Bir neden yazmalıdır; neden, kimin aldığıyla birlikte kayda geçer. Proje yöneticileri listeliyorsa yalnızca onlar yapabilir. Varsayılan olarak 14 günden eski bir alma (eski sınır) *uzun süredir* olarak işaretlenir. Bölünmenin ardından Ana'nın geç gelen geri verme işlemi reddedilir; böylece ikiniz birbirinizin üzerine yazamazsınız.

## 8. Bulut klasörleri

Bulut klasörü, ekibinizin bulut depolamasında tutulan bir proje klasörüdür; böylece ekibin paylaşılan bir sürücüye ihtiyacı olmaz. Studio'da, CadCraft hesabınızla oturum açtığınızda, panelde {{ui:Choose the project folder}} seçeneğinin yanında {{ui:Bulut klasörü aç}} görünür. Bunu seçin ve "çalışma alanı / klasör" olarak listelenen klasörü seçin. Klasörü önce bir çalışma alanı sahibi oluşturur ve ekibin bulut depolaması etkin olmalıdır. Yukarıdaki her şey aynı şekilde çalışır; kilidi sunucu oluşturur ve kişiler arasında katıdır. Oturum açmadıysanız panel oturum açmanızı ister. Normal bir tarayıcı sekmesinde bulut düğmesi sunulmaz; Studio'yu kullanın.

## Deneyin

Yukarıdaki sekiz adımı gerçek bir dosyanın kopyasıyla yapın. İki kişilik adımlar için başka bir kişiye ya da iki adla iki pencereye ihtiyacınız var. Gerçek bir paylaşılan klasörle deniyorsanız, Topluluk test sayfası tam bunu soran bir denetim listeler ve sonuçları kabul eder.
