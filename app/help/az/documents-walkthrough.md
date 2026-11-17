---
title: Sənədlər və düzəlişlər (depo)
summary: Real iş üzrə addım-addım təlimat - detal və yığımlardan ibarət layihə qovluğunu nəzarət altına almaq, detalı götürmək, dəyişdirmək, şərhlə qovluğa qaytarmaq, buraxmaq, onu nəyin istifadə etdiyini və materialların siyahısını görmək, faylı tutduğunuz zaman ikinci şəxsin nə gördüyünü və bulud qovluqları ilə necə işlədiyini görmək.
keywords: depo, sənədlər, təlimat, dərslik, götürmə, qovluğa qaytarma, düzəliş, buraxılış, təsdiq, kilid, tarixçə, harada istifadə olunur, materialların siyahısı, bom, yığım, bulud qovluğu, layihə qovluğu, iki nəfər, paylaşılan qovluq
from: 0a5e6983
---

## Nə edəcəksiniz

Siz Ana-sınız və Riverside Clinic layihəsi üzərində həmkarınız Ben ilə işləyirsiniz. Layihənin detal və yığımları sizin ikinizin də çatdığı bir qovluqda saxlanılır (paylaşılan disk, sinxronlaşdırılmış qovluq və ya bulud qovluğu). Sonda bir fayl ilk nüsxəsindən **A** düzəlişli buraxılmış vəziyyətə keçmiş olacaq, sonra **B.1** kimi yenidən dəyişdiriləcək, kimin nə etdiyini görmüş olacaqsınız və Benin faylı tutduğunuz zaman nə gördüyünü də görəcəksiniz.

Hər şey faylların yanındakı gizli `.ccvault` qovluğunda saxlanılır: server yoxdur, heç nə yüklənmir (bulud qovluğu istisnadır, son addıma baxın). Hər düymə və qayda üçün, tətbiqinizdə varsa, *Sənədlər: götürmə, düzəlişlər və buraxılış* mövzusuna baxın.

## 1. Layihə qovluğunu qurun

1. Alətlər panelinin **Fayl** qrupunda {{ui:Sənədlər…}} seçin.
2. {{ui:Layihə qovluğunu seçin}} seçin və layihənin detal və yığımlarını saxlayan qovluğu seçin. (Layihə qovluqları Studio-da və qovluq aça bilən brauzerlərdə, məsələn Chrome və Edge-də işləyir. Digər brauzerlərdə panel bunu bildirir.)
3. **Siz:** yanındakı {{ui:Dəyiş}} seçin və adınızı yazın, `Ana` (soruşulsa, bu kompüterin adını da). Panel indi *Siz: Ana, kompüterdə* göstərir. Adınız etdiyiniz hər işin üzərində qeyd olunur.
4. {{ui:Bu qovluqda depo başlat}} seçin və layihənin adını yazın, `Riverside clinic`. Panel *Riverside clinic üçün depo başladıldı.* yazır.

## 2. Faylı nəzarət altına alın

1. **Depoda olmayan fayllar** bölməsini açın və `plates/Bracket.partcraft.json` yanındakı {{ui:Əlavə et}} seçin.
2. Fayl **Depodakı fayllar** altında **A.1** düzəlişi və **İşdə** vəziyyəti ilə görünəcək. A.1 onun ilk nüsxəsidir; depo hər düzəlişin nüsxəsini saxlayır.

## 3. Götürün, dəyişdirin, qovluğa qaytarın

1. `plates/Bracket.partcraft.json` yanındakı {{ui:Aç}} seçin. Detal PartCraft-da açılır və panel bağlanır ki, onu görə biləsiniz. Paneli {{ui:Sənədlər…}} vasitəsilə yenidən açın.
2. Paneli yenidən açın və {{ui:Götür}} seçin. Sətir indi **Sizə götürülüb** yazır. `.ccvault/locks` qovluğunda kilid faylı yaradılıb; siz qovluğa qaytarana qədər heç kim bu faylı götürə bilməz.
3. Detalı dəyişdirin: ölçünü redaktə edin, deşik əlavə edin. Fayl sizə götürülməyibsə Saxlamağa icazə verilmir və səbəbini bildirir; {{ui:Fərqli saxla}} həmişə öz nüsxəniz üçün işləyir.
4. Paneli açın, {{ui:Qovluğa qaytar}} seçin və nəyin dəyişdiyini yazın (`Qapını köçürdüm`). Panel *A.2 kimi qovluğa qaytarıldı.* yazır. Layihə qovluğundakı fayl indi açdığınız detaldır və kilid silinib. Heç bir dəyişiklik olmadan qaytarsanız, düzəliş dəyişmir.

Fikrinizi dəyişsəniz, {{ui:Götürməni ləğv et}} faylı yeni düzəliş olmadan geri qaytarır.

## 4. Nəzərdən keçirmə və buraxılış

1. {{ui:Nəzərdən keçirməyə göndər}} seçin. Vəziyyət **Nəzərdən keçirilir** olur və fayl yalnız oxunandır.
2. Təsdiq etməzdən əvvəl {{ui:Layihə parametrləri}} seçin və təsdiq edə bilənləri siyahılayın (hər sətirdə bir ad), məsələn `Ben` və `Carla`, və müəllifdən başqa birinin təsdiq etməli olduğu qaydanı qeyd edin. {{ui:Parametrləri saxla}} seçin. İndi depo özü başqasına icazə vermir.
3. Ben (və ya Carla) {{ui:Təsdiq et}} seçir və təsdiq edənin adını yazır. Vəziyyət **Buraxılıb** olur, düzəliş **A** olur, *təsdiq edən* və adla birlikdə. Buraxılmış fayl yalnız oxunandır. {{ui:Geri göndər}} onu səbəbi ilə birlikdə **İşdə** vəziyyətinə qaytarardı.

Təsdiq edənin adı panelə yazılan addır; bu, kimin imzaladığının qeydidir, şəxsiyyətin sübutu deyil.

## 5. Yeni düzəliş

1. Buraxılmış faylda {{ui:Yeni baxış}} seçin. Siz onu növbəti hərf üçün tutursunuz.
2. Dəyişdirin, sonra {{ui:Qovluğa qaytar}}. Düzəliş **B.1** olur, işdə vəziyyətində. Eyni qayda ilə buraxın və **B** olsun. İlk qovluğa qaytarışdan əvvəl {{ui:Götürməni ləğv et}} onu **A**-da saxlayır.

Düzəliş hərfləri A, B … Z, AA, AB ardıcıllığı ilə gedir. Standartınız bəzi hərfləri buraxırsa, *ASME Y14.35 ardıcıllığından istifadə et* layihə parametri növbəti düzəlişlər üçün I, O, Q, S, X və Z-i keçir.

## 6. Nə baş verdiyini görün

Təfərrüatlarını açmaq üçün faylın adını seçin:

- **{{ui:Tarixçə}}**: hər hadisə, ən yenisi birinci, kim, hansı kompüter və nə vaxt ilə: Ana tərəfindən *A.2 qovluğa qaytarıldı*, Ben tərəfindən *Buraxıldı* və s.
- **{{ui:Düzəlişlər}}**: düzəliş cədvəli: saxlanılan hər düzəliş, onun tarixi, onu kimin qovluğa qaytardığı, qeyd və kimin təsdiq etdiyi. Depo hər birinin nüsxəsini `.ccvault/revs` qovluğunda saxlayır.
- **{{ui:İstifadə edir}}**: yığımın detalları.
- **{{ui:Kim istifadə edir}}**: "Kim istifadə edir" bu detalı saxlayan depodakı hər yığımı siyahılayır: kronşteyni dəyişsəniz, hansı yığımları yoxlamalı olduğunuzu bilirsiniz.

## Yığımlar: nəyi istifadə edirlər və materialların siyahısı

Qovluğa yığımı (`.partcraft.json`, Yığım rejimindən saxlanılıb) qoyun və əlavə edin. Adını seçin: **İstifadə edir** onun saxladığı detalları, hər birinin düzəlişi və vəziyyəti ilə siyahılayır; detalda **Kim istifadə edir** onu saxlayan hər yığımı göstərir. {{ui:Materialların siyahısı (CSV)}} bütün detal siyahısını səviyyə-səviyyə, miqdarları, düzəlişləri və vəziyyətləri ilə elektron cədvəl üçün saxlayır. Kronşteyni dəyişsəniz, **Kim istifadə edir** hansı yığımlara baxmalı olduğunuzu göstərir.

## 7. Siz faylı tutarkən Ben nə görür

İndi faylı yenidən götürün və Bendən eyni layihə qovluğunu öz kompüterində açmasını və paneli açmasını istəyin. Faylın sətrində o, **Ana tərəfindən götürülüb, sizin kompüterinizdə, vaxtdan bəri** yazısını görür və {{ui:Götür}} düyməsi yoxdur. Yenə də cəhd etsə, depo icazə vermir: kilid elə bir fayldır ki, sistem onu iki dəfə yarada bilmir, buna görə də Studio-da qovluq diskdə olduqda iki nəfər, hətta eyni saniyədə, faylı birlikdə tuta bilmir. (Brauzerdə qovluq yalnız təxmini icazə verir və panel bunu **Qovluq** altında bildirir.)

Ana uzaqdadırsa və Ben faylə ehtiyac duyursa, {{ui:Götürməni poz}} onu azad edir. O, səbəb yazmalıdır; bu, kimin götürməsi olduğu ilə birlikdə jurnala yazılır. Layihədə admin siyahısı varsa, yalnız adminlər edə bilər. Köhnəlmə həddindən (defolt 14 gün) köhnə götürmə *çox vaxtdır* kimi qeyd olunur. Pozulduqdan sonra Anın gecikmiş qaytarışı rədd edilir ki, bir-birinizin üzərinə yazmayasınız.

## 8. Bulud qovluqları

Bulud qovluğu komandanızın bulud yaddaşında saxlanılan layihə qovluğudur, buna görə komandaya paylaşılan disk lazım deyil. Studio-da, CadCraft hesabınıza daxil olduqda, panel {{ui:Layihə qovluğunu seçin}} yanında {{ui:Bulud qovluğunu aç}} göstərir. Onu seçin və qovluğu seçin; qovluqlar iş sahəsi / qovluq kimi siyahılanır. İş sahəsinin sahibi qovluğu əvvəlcə yaradır və komandanın bulud yaddaşı aktiv olmalıdır. Yuxarıdakıların hamısı eyni işləyir; kilidi server yaradır və bu, adamlar arasında ciddi tətbiq olunur. Daxil olmamısınızsa, panel daxil olmağınızı tələb edir. Adi brauzer vərəqində bulud düyməsi təklif olunmur; Studio-dan istifadə edin.

## Sınayın

Yuxarıdakı səkkiz addımı real faylın surəti ilə yerinə yetirin. İki nəfərlik addımlar üçün başqa bir adam və ya iki adla iki pəncərə lazımdır. Real paylaşılan qovluqla sınayırsınızsa, İcma sınaqları səhifəsində məhz bunu yoxlayan sınaq var və nəticələri qəbul edir.
