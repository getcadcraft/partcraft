---
title: .3dm modelini canlı saxla
summary: Modeli onu yaradan proqramda dəyişdirin və PartCraft-dakı cismin onu izləməsinə baxın; Rhino 8 və ya Grasshopper təyinindən, elementləriniz yeni formada yenidən qurulmaqla.
keywords: rhino, grasshopper, canlı əlaqə, canlı bağlantı, 3dm, nurbs, parametrik, bağlantı, sinxronizasiya, skript, göndərmə, idxal olunmuş cisim
from: cf4dc9b2
---

Modeli onu modelləşdirdiyiniz yerdə formalaşdırmağa davam edin, maşınlaşdırma, yoxlama və sənədləşdirməni isə burada aparın. Digər proqramda hər dəyişiklik PartCraft-da bir idxal olunmuş cismi əvəz edir, sonrakı elementlər isə yeni formada yenidən qurulur.

:::note
Bağlantı eyni kompüterdə **CadCraft Studio** tələb edir. Brauzer bölməsi bağlantını götürə bilməz. Heç nə internet üzərindən getmir: skript Studio ilə bu kompüterin öz ünvanı üzərindən, tokenlə danışır.
:::

:::warning
Bu bağlantı skriptin fayl yazıcısı və digər proqramın əvəzedicisi ilə sınaqdan keçirilib, hələ Rhino və ya Grasshopper daxilində yox. Orada nəsə alınmazsa, nə yazdığını bizə bildirin.
:::

## Quraşdırma

1. Studio-da PartCraft-ı açın. {{ui:Parametrlər}} › {{ui:PartCraft}} › {{ui:Köməkçilər}} bölməsində **AI köməkçilərinin və skriptlərin PartCraft-dan istifadə etməsinə icazə ver** qutusunu işarələyin, sonra **Redaktə et**.
2. Studio-da {{ui:Köməkçini qoş}} seçin. Aşağıda yapışdıracağınız ünvanı və tokeni göstərir.
3. Skripti yükləyin: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Rhino-dan

1. `cadcraft_link.py` faylını Rhino-nun skript redaktorunda işə salın (Rhino 8-də Python 3).
2. İlk dəfə ünvanı və tokeni yapışdırın. Onlar ana qovluğunuzdakı `.cadcraft-link.json` faylında saxlanılır, heç vaxt modeldə yox. Studio hər işə düşəndə yeni token yaradır, belə ki skript o zaman yenidən soruşur.

Dayandırmaq üçün skripti yenidən işə salın.

## Grasshopper-dən

Ünvan və token saxlanılsın deyə skripti əvvəlcə Rhino-da bir dəfə işə salın.

1. Script komponenti (Python 3) əlavə edin və ona `cadcraft_link.py`-nin bütün mətnini yapışdırın.
2. Ona bu girişləri verin: `G` (həndəsə, siyahı girişi ilə), `N` (ad, ixtiyari), `On` (bul keçidi) və `Target` (ixtiyari: `model` və ya `part`, hər iki proqram açıqdırsa).
3. `On`-u true edin.

Hər hesablamada `G` göndərilir və əvvəlki göndərilmiş şeyin yerini tutur.

## Burada necə işləyir

- **Bir cisim.** Modeldə görünən hər şey bir idxal olunmuş element olur, [.3dm faylını aç](topic:open-3dm-files) zamanı olduğu kimi.
- **Bağlanmalıdır.** PartCraft kiçik deşikləri və düz açıqlıqları doldurur, digər proqrama isə neçə dənə doldurulduğu bildirilir. Model hələ də bağlanmırsa, PartCraft əvvəlki cismi saxlayır və status paneli bunu deyir. Bağlanan növbəti dəyişiklik onu yeniləyir.
- **Etdiyiniz işi bitirin.** Eskiz və ya çertyojda yeniləmələr rədd edilir və yenidən cəhd olunur; modelə qayıtdığınızda tətbiq olunurlar.
- **Geri qaytarma.** İki saniyə ara ilə olan yeniləmələr bir geri qaytarma addımı paylaşır.
- **Saxla.** Detal faylı bağlantını saxlayır. Yenidən açdıqdan sonra skripti yenidən işə salın, eyni element yenilənəcək.

**Yalnız bir istiqamət.** Burada edilən dəyişikliklər digər proqrama geri getmir.

## Nəsə səhv olarsa

- **"Heç bir ModelCraft və ya PartCraft pəncərəsi buna icazə vermir":** quraşdırmanın 1-ci addımını edin.
- **"Studio tokeni rədd etdi":** Studio yenidən başladılıb. Yeni tokeni kopyalayın və skripti yenidən işə salın. Grasshopper üçün əvvəlcə Rhino-da işə salın.
- **"CadCraft Studio-ya çatmaq olmur":** Studio işləmir və ya ünvan dəyişib.
