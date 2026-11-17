---
title: Çertyoju lazerə göndər
summary: Hər qatın nə etdiyini seçin (kəs, cızıq, oy, doldur, şəkil), başın hərəkətlərinə baxın, GRBL lazer rejimi G-kodunu saxlayın və ya işi çərçivələdikdən sonra brauzerdən göndərin.
keywords: lazer, lazer kəsici, lazer qravyorçu, GRBL, G-kod, oyma, doldurma, dithering, şəkil oyma, cızma, kəsmə, Web Serial, Linux, işi çərçivəyə al, güc, sürət, keçidlər
from: 327b3c46
---

{{ui:Lazer}} paneli çertyojun qatlarını GRBL işlədən lazer üçün proqrama çevirir (əksər həvəskar və kiçik emalatxana diod və CO2 idarəetmə qurğuları). PartCraft-da {{ui:İxrac}} › {{ui:Lazer proqramı…}} seçin, sonra {{ui:DXF-dən konturlar əlavə et…}}: konturlar və deşiklər CUT qatında daxil olur. Bükmə xətləri BEND qatında olan vərəq metal detalların düz şəkilləri dəqiq nüvə tələb edir, bu versiyada isə belə nüvə yoxdur. Parametrlər detal və ya yığım faylında saxlanılır.

:::warning
Hər parametri əvvəlcə tullantı materialda sınayın, lazerinizə uyğun gözlük taxın, varsa qapağı bağlı saxlayın və işləyən lazeri heç vaxt təkbaşına qoymayın. Qatların başlanğıc rəqəmləri yer tutucudur, hər hansı material üçün tövsiyə deyil.
:::

## Hər qatın nə etdiyini seçin

Çertyojun hər qatı bir sətirdir. {{ui:Nə edir}} onu **Kəs**, **Cızıq**, **Xətləri oy**, **Formaları doldur**, **Şəkli oy** və ya **Göndərilmir** kimi təyin edir, həmçinin {{ui:Güc %}}, {{ui:Sürət mm/dəq}} və {{ui:Keçidlər}} sayı ilə.

- **Doldurma** bağlı formaların içini xətlərlə yandırır, aralıq {{ui:Xətlərin aralığı}}, {{ui:Bucaq}} ilə, iki istiqamətdə və ya birində, lazer işləyəndə baş artıq sürətdə olsun deyə kənar hərəkətlə; çarpaz ştrixləmə 90° bucaqla ikinci keçid əlavə edir. Deşiyi olan forma deşiyin yerində açıq qalır.
- **Şəkli oy** şəkli nöqtələrə çevirir (Floyd–Steinberg, Atkinson, sıralı və ya hədd üzrə sadə qara-ağ), ya da *Boz səviyyələr* ilə dəyişən güc verir.
- Sıra: əvvəl şəkillər və doldurmalar, sonra xətt oyması, sonra cızıqlar, sonra kəsmələr, belə ki kəsilən detal oyulan zaman yerindən tərpənməsin. Bir qatın içində yollar **əvvəl içəridən** gedir (lövhədən əvvəl onun içindəki deşik), ən yaxını növbəti.

## Baxış, sonra saxla

Baxış başın nə etdiyini göstərir: yanan xətlər rəngli, sürətli hərəkətlər boz, yandırılan hər şeyin ətrafında yaşıl qutu. Altında ölçü, yanma uzunluğu və vaxt təxmini göstərilir (təcil nəzərə alınmadan; real maşın daha uzun çəkir). {{ui:G-kodu saxla…}} GRBL lazer rejimi G-kodunu yazır: `$32=1`, S dəyərləri ilə `M4` (və ya `M3`), `G0` və `G1` hərəkətləri, sonda `M5`. İşin aşağı-sol küncü X0 Y0-dır, əgər çertyojun başlanğıcını seçməsəniz: maşınınızın iş sıfırını orada təyin edin. G-kod GRBL-in sənədləşdirilmiş lazer rejiminə uyğundur; hələ real lazerdə sınanmayıb.

## Brauzerdən göndər

Chrome və Edge-də {{ui:Qoşul…}} lazerin USB portunu seçməyi istəyir. Siz düymə basana qədər heç nə qoşulmur və göndərilmir. Əvvəlcə {{ui:İşi çərçivəyə al}} basın: baş işin qutusunu lazer **söndürülmüş** halda izləyir (və ya göstərici üçün təyin etdiyiniz aşağı gücdə), beləliklə harada yandırılacağını görürsünüz. Yalnız bundan sonra {{ui:İşi göndər}} aktiv olur və hər hansı dəyişiklikdə yenidən sönür. {{ui:Pauza}} başı saxlayır, {{ui:Dayandır}} isə onu saxlayır, idarəetməni sıfırlayır (lazer sönür) və `M5` göndərir. Web Serial olmayan yerlərdə (Firefox, Safari və CadCraft Studio, onun veb görünüşündə hələ yoxdur) G-kodu saxlayın və lazerinizin öz proqramı ilə göndərin.

## Hələ hazır deyil

Digər idarəetmələrin formatları (Ruida, Marlin lazerləri, satıcı faylları), tabs və giriş/çıxış hərəkətləri, kerf ofseti, material kitabxanaları, fırlanan və Z oxları, kamera ilə hizalama.
