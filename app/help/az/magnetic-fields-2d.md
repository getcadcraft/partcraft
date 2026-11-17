---
title: 2-ölçülü maqnit sahələri (dərslik)
summary: Analiz kitabxanası ilə elektromaqnitin və ya daimi maqnitin maqnit sahəsini hesablayın: nümunələri işə salın, maqnit induksiyasını, boşluq sahəsini, induktivliyi və çəkməni oxuyun, layihəni dəyişdirin və öz modelinizi bobinlər, maqnitlər və dəmirdən qurun.
keywords: maqnit, maqnitostatika, maqnit sahəsi, maqnit induksiyası, tesla, elektromaqnit, solenoid, bobin, amper-dönə, dəmir nüvə, hava boşluğu, keçiricilik, induktivlik, maqnit qüvvəsi, reluktans, maqnit dövrə, vektor potensialı, elektromaqnetika, sonlu elementlər, fem, motor, aktuator, transformator, magnetostatic2d, daimi maqnit, neodim, ndfeb, ferrit, qalıq maqnitlənmə, iş nöqtəsi, geri qayıdış, sızma, saxlayıcı maqnit
from: 215f6601
---

PartCraft-ın analiz kitabxanası bobinlərin və dəmirin maqnit sahəsini 2-ölçülü hesablaya bilir: uzun və boyu boyunca eyni olan bir şeyin en kəsiyi, məsələn elektromaqnit, transformator nüvəsi, şin və ya motorun en kəsiyi. Bu dərslik kitabxananın elektromaqnit nümunəsini işə salır, nəyi dediyini oxuyur, onu dəyişdirir, öz formanızı necə modelləşdirəcəyinizi göstərir və sonra daimi maqnit əlavə edir.

Skript iş sahəsindən və [analiz kitabxanasından](topic:craftscript-library) istifadə edir. Bu dərsi izləmək üçün CraftScript dilini bilmək lazım deyil; nümunə hər sətirin nə etdiyini deyir.

## Modelləşdirilən

Xaricdən 100 × 80 mm, qalınlığı 20 mm olan C formalı dəmir nüvə, sağ ayağında 2 mm hava boşluğu. Sol ayağının ətrafında 10 A cərəyan daşıyan 100 dönəli bobin (1000 amper-dönə). Hər şey ekrandan çıxan istiqamətdə uzundur, ona görə cavablar **metr dərinlik üzrədir**: real maqnit üçün real dərinliklə vurun.

Kitabxananın `magnetostatic2d` funksiyası maqnit kəsiyinin ətrafında hava qutusunda 1 mm kvadratlardan ibarət tor üzərində maqnit vektor potensialını həll edir, sonra ondan maqnit induksiyası **B** (tesla ilə) hesablayır.

## Nümunəni işə salın

1. Alətlər panelinin solunda **İş sahəsi** qutusunda **Skript** seçin.
2. Skript panelinin **Kitabxana** bölməsini açın, sonra **Nümunələr** › **Elektromaqnit: sahə, boşluq, induktivlik**.
3. {{ui:Aç (yalnız oxumaq üçün)}} klikləyin, sonra {{key:F5}} basın.

Bir-iki saniyə ərzində kətanda maqnit induksiyası görünür, konsol isə bunu çap edir:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Kətanın altındakı qrafik nüvənin orta xətti boyunca şaquli maqnit induksiyası B_y-dir, soldan sağa: sol ayaqda təxminən −0,55 T (axın onun içindən aşağı gedir), pəncərədə demək olar ki, heç nə yoxdur və sağ ayaqda və boşluqda +0,55 T (axın yuxarı qayıdır). Eyni axın dəmirdən və boşluqdan keçir, buna görə iki ayaq və boşluq demək olar ki, eyni qiyməti göstərir.

## Nəticələri oxuyun

- **Boşluqdakı sahə** 0,543 T-dir. Əl ilə hesablama nüvəni bir maqnit dövrəsi kimi götürür, B = μ0 N I / (g + l / μr), burada g boşluqdur, l dəmirdən keçən yolun uzunluğu, μr dəmirin nisbi keçiriciliyidir; bu 0,552 T verir. Sahə əl hesablamasından bir az aşağıdır, çünki axın boşluq ətrafında genişlənir (kənar sıçrayış) və bir hissəsi pəncərədən qısa yol tapır (sızma). Boşluq kiçildikcə və ya tor incəldikcə iki rəqəm bir-birinə yaxınlaşır.
- **Induktivlik** 100 dönəli bobin üçün metr dərinlik üzrə 0,154 H-dir, sahədə toplanan enerjidən hesablanır. Dövrə düsturu daha az verir (0,110 H/m), çünki yalnız boşluqdan keçən axını sayır, boşluğu keçib sızan axını yox.
- **Boşluğu bağlayan çəkmə** w geniş boşluq üzü üçün B² w / (2 μ0)-dır: metrə təxminən 2300 N, ya da 50 mm dərin maqnit üçün 117 N.
- **1,97 T zirvəsi** pəncərənin daxili küncündədir, axın kəskin dönən yerdə. Model dəmiri xətti qəbul edir; real elektrik poladı təxminən 1,5–2 T-də doyur, ona görə bundan yüksək qiymətləri cavab yox, xəbərdarlıq kimi qəbul edin.

:::note
Kitabxananın öz testləri bu nümunəni işə salır və PartCraft-ın hər dəyişikliyində boşluq sahəsini maqnit dövrəsi düsturu ilə yoxlayır. Metod, istinadları və digər yoxlamalar (uzun solenoid, dəmir nüvəli solenoid) `magnetostatic2d` başlığındadır: kitabxanada onu klikləyin.
:::

## Layihəni dəyişdirin

1. Yalnız oxumaq üçün olan skriptin üstündə {{ui:Surətini çıxar}} klikləyin. Surət detalınızla birlikdə saxlanılır.
2. Yuxarıdakı bir dəyəri dəyişin və yenidən {{key:F5}} basın. Sınayın:
   - `g = 0.001;` — boşluq yarıya enir: boşluqdakı sahə demək olar ki, ikiqat artır, çəkmə də eyni şəkildə (B²-yə görə).
   - `mur = 200;` — zəif nüvə: amper-dönələrin daha çoxu dəmirdə sərf olunur.
   - `N = 200;` — dönələr ikiqat: sahə ikiqat, induktivlik dörd dəfə.
   - `h = 0.0005;` — incə tor: cavablar daha dəqiq, təxminən dörd dəfə uzun.

Hər işə salma kətanı yeniləyir. Skriptin yaratdığı dəyişənlər (məsələn `Bgap`, `L`, `F`) öz hesablamalarınız üçün **Dəyişənlər** siyahısında qalır.

## Öz formanızı modelləşdirin

Nümunə hər tor kvadratı üçün bir dəyər olan üç siyahıdan hər şeyi qurur. Bunu düz xətlərlə tor boyunca çəkilmiş hər formaya görə edə bilərsiniz:

- **Dəmirin yeri:** `iron` nüvənin içindəki kvadratlar üçün doğrudur. Nümunə onu düzbucaqlılardan qurur: `frame & ~window & ~gap` deməkdir "çərçivədə, pəncərədə deyil, boşluqda deyil".
- **Keçiricilik:** `1 + (mur - 1) * iron` havada 1, dəmirdə `mur`-dur. Bir neçə material eyni üsulla öz dəyərlərini alır.
- **Cərəyan:** `J` amper/kvadrat metr ilə cərəyan sıxlığıdır, ekrandan çıxanda müsbət, içəriyə doğru mənfi. Bobinin iki tərəfi var, əks işarələrlə; nümunə `J0`-ı elə hesablayır ki, bir tərəf N I daşısın.

Sonra `r = magnetostatic2d(m, permeability, J)` həll edir. `r.B` hər kvadratda maqnit induksiyasıdır (iki sütun: x və y), `r.Bmag` onun ölçüsü, `r.energy` metr başına toplanan enerjidir. `plot(x, y)` xətt çəkir.

Kitabxana metrlərlə işləyir, görünüş isə millimetrlə, ona görə sahə olduğu kimi göstərilsə min dəfə kiçik çəkilər. Nümunə bunu tor surətində millimetrlə göstərir (`mm = quadGrid(…)`, sonra `show(field(mm, …))`): həmin iki sətri kopyalayın.

Standart olaraq qutunun kənarı sahəni içəridə saxlayır: heç bir axın çıxmır. Qutunu maqnitin ən azı iki-üç qat ölçüsündə edin ki, bu sahəni sıxmasın. Simmetrik maqnit üçün onun yarısını modelləşdirə bilərsiniz: `magnetostatic2d` başlığı simmetriya xətti üzərində hansı kənar şərtin istifadə olunacağını deyir.

## Daimi maqnitlər

İkinci nümunə, **Nümunələr** › **Dəmir nüvədə daimi maqnit: iş nöqtəsi, sızma, çəkmə**, eyni nüvədir, bobin çıxarılıb və sol ayağın 10 mm dilimi yuxarıya maqnitlənmiş maqnitlə əvəz olunub. {{key:F5}} ilə işə salın. Çıxarır:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **İş nöqtəsi.** Maqnit onun **qalıq maqnitlənməsi** Br (dəmirlə qısaqapanmış olduqda saxladığı sahə: sinterlənmiş NdFeB maqnit üçün təxminən 1,2 T, ferrit üçün 0,4 T) və geri qayıdış keçiriciliyi (təxminən 1,05 və 1,1) ilə təsvir olunur. Boşluq açmaq onu öz geri qayıdış xəttində aşağı salır: burada 1,04 T-yə, maqnitin içində H, B-yə qarşı yönəlmiş.
- **Sızma.** Sızmasız əl hesablaması boşluqda 0,97 T verir; model 0,68 T verir. Maqnit axınını qısa uzunluqda güclü itəklə verir, buna görə onun çox hissəsi boşluqdan keçmək əvəzinə pəncərədən birbaşa geri gedir. Sızma əmsalı bunun nə qədər olduğunu deyir: burada 1,53. Qapalı saxlayıcı üçün `g = 0;` təyin edin: maqnit o zaman əl hesablamasından yarım faizdən az fərqlə işləyir.
- **Öz modelinizdə maqnitlər.** `magnetostatic2d`-yə maqnitləri `struct('Br', Br)` kimi verin, burada `Br` hər tor kvadratı üçün bir sətirdir, x və y boyunca qalıq maqnitlənmə teslada (maqnitlərdən kənarda sıfır), və keçiricilik siyahısında maqnit kvadratlarına öz geri qayıdış keçiriciliyini verin:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T yuxarı, mag doğru olan kvadratlarda
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Bucaq altında maqnitlənmiş maqnit üçün `Br·cos(angle)` və `Br·sin(angle)` iki sütuna qoyun; xaricə maqnitlənmiş halqa üçün hər kvadratın istiqamətini mövqeyindən hesablayın. `r.H` hər kvadratda H sahə gücünü verir.

Model maqnit həddindən çox itələnsə belə onu düz geri qayıdış xəttində saxlayır. Real maqnit dizinin (böyük boşluq, güclü bobin və ya istilik ilə) üstündən itələndikdə gücünün bir hissəsini həmişəlik itirir: iş nöqtəsini maqnitin markası və temperaturu üçün istehsalçının əyrisi ilə yoxlayın.

Kitabxananın testləri maqnitləri iki əl nəticəsi ilə yoxlayır: açıq havada dairəvi maqnit (içəridə B = Br / (1 + μr)) və dəmir saxlayıcı ilə bağlanmış maqnit (maqnit dövrəsi), hər ikisi 1 % daxilində.

## Hələ nə etmir

- **Doyma.** Dəmir xəttidir: cərəyanı ikiqat artırın, sahə sonsuz olaraq ikiqat artır.
- **Demaqnitləşmə.** Maqnitlər düz geri qayıdış xəttində qalır (yuxarıya bax).
- **Burulğan cərəyanları** və **itkilər** (dəmir itkisi, mis itkisi).
- **Hərəkət edən hissələr və moment.** Statorda fırlanan rotor yox, bucaqdan asılı moment yox.
- **Dairəvi formalar.** Tor bərabər kvadratlardan ibarətdir, buna görə əyri konturlar pilləli çıxır.
- **3-ölçü.** Hər şey uzun bir şeyin en kəsiyidir.

Motor layihələndirilməsi (fırlanan rotor, 2-ölçüdə moment və itkilər) sonrakı versiya üçün araşdırılır. Bax: [Hələ hazır deyil](topic:not-built-yet).
