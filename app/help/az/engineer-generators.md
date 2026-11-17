---
title: Fizikadan detallar: generatorlar
summary: Mühəndis iş sahəsi və Yaradılmış cisim elementi - generator seçin, girişləri (axın, təzyiq, temperatur, material, çap üsulu) təyin edin və dərslik düsturlarından ölçülmüş detal alın, məlumat vərəqi, istehsal yoxlamaları və təhlil alətləri üçün fayllarla. Eyni girişlər həmişə eyni detal verir.
keywords: mühəndis, generator, yaradılmış cisim, fizika, qaydalar, istilik dəyişdiricisi, kollektor, nozzle, qəfəs, gyroid, məlumat vərəqi, girişlər, deterministik, eyni girişlər eyni detal, istehsal yoxlamaları, 3D çap, toz yatağı
from: 5a387dc0
---

**Generator** detalın tələblərindən ölçüləndirib quran skriptdir. İstilik dəyişdiricisi generatoru daşınacaq istilik, iki axın və onların temperaturları, təzyiq və materialı qəbul edir; nüvənin nə qədər böyük olmalı və divarının nə qədər qalın olmalı olduğunu hesablayır, onu qurur və istifadə etdiyi rəqəmləri və hər birinin haradan gəldiyini deyir. Girişi dəyişdirin, detal da izləyir.

Nəticə normal cisimdir: detalın element siyahısındadır, çap olunur, ixrac olunur. Generatorun özü də detalda saxlanılır, buna görə fayl generatoru quraşdırılmamış hər kompüterdə açılır, **detalı açmaq heç vaxt skript işlətmir**.

## Cisim yaradın

1. İş sahəsi dəyişdiricisində {{ui:Mühəndis}} iş sahəsini seçin.
2. Siyahıdan generator seçin (PartCraft ilə gələnlər, sonra fayldan açdığınız istənilən) və {{ui:Yeni}} klikləyin.
3. Skript işləyir. Bitdikdə cisim görünüşdə olur və panel onun girişlərini, **məlumat vərəqini** və **yoxlamalarını** göstərir.

Dizayn iş sahəsindən də əlavə edə bilərsiniz: {{ui:Elementlər}} › {{ui:Daha çox}} › {{ui:Yaradılmış cisim}}.

## Dəyişdirin

İstənilən girişi dəyişdirin, yazmağı dayandırdıqdan bir az sonra cisim yenidən yaradılır. Panel üç şeydən hansının doğru olduğunu bildirir:

- **Yenilənib**: cisim skriptə və girişlərə uyğundur.
- **Girişlər dəyişib**: detaldakı cisim əvvəlki girişlərdəndir; yenidən yaradılır, və ya **{{ui:Run}}** basın.
- **Hələ işə salınmayıb** və ya **Son işə salma uğursuz oldu**: skriptin xətası sətri ilə göstərilir.

{{ui:Stop}} çox uzun çəkən işi dayandırır. Geri qaytarma bir addım geri gedir: bir işə salma bir addımdır, bir giriş bir addımdır.

## Məlumat vərəqi

Generatorun hesablaması hər rəqəm **vahidi** və **haradan gəldiyi** ilə (dərslik tənliyi, standart, məlumat vərəqi) siyahılanır. Gizli sabit yoxdur. Vərəq faylın bir hissəsidir, buna görə növbəti kompüterdə də eynidir. [Məlumatın ixracı](topic:data-out) onu JSON və ya PDF kimi necə saxlamağı göstərir.

## Yoxlamalar

Generator öz detalını çap prosesinə qarşı yoxlaya bilər: prosesin saxlaya bildiyindən nazik divarlar və boşluqlar, sərbəst parçalar, tozu və ya qətranı tutan boşluqlar, təmizlənmək üçün çox dar deşiklər və dəstək tələb edən çıxıntılar. Nəticələr paneldə və **{{ui:Problems}}** siyahısında (⚠ düyməsi) göstərilir və detalla birlikdə saxlanılır.

Proses rəqəmləri ümumi dizayn təlimatlarının prosesin (FDM, SLA, SLS, metal toz yatağı) üçün verdiyi yuvarlaq rəqəmlərdir. Onlar **sizin maşınınızın spesifikasiyası deyil**: yoxlamaya güvənməzdən əvvəl onları öz emalatxanınızın rəqəmləri ilə əvəz edin. Yoxlama voksel şəbəkəsi üzərində işləyir, buna görə bir voksel dəqiqliyi ilə düzgündür: divar yalnız həddən bir voksel qədər çox nazik olduqda bildirilir.

## Hazır olanlar

| Generator | Nə yaradır |
|---|---|
| Gyroid blok | Gyroid, Schwarz P və ya diamond təbəqə ilə doldurulmuş blok: ən sadə qəfəs |
| Gyroid istilik dəyişdiricisi | İki mayeli dəyişdiricinin nüvəsi, vəzifəsindən effektivlik-NTU üsulu ilə ölçülüb, divarı təzyiqdən; bir hüceyrədə axın tədqiqatı ilə təzyiq düşküsünü yoxlaya bilər |
| Paylayıcı kollektor | Başlıq və şaxələr, hər boru onun daşıdığı axına görə ölçülür |
| Dərəcələnmiş qəfəs tir | Topologiya optimallaşdırması materialın lazım olduğunu göstərdiyi yerdə divarı qalınlaşan qəfəs |

Hamısı dərslik düsturlarına əsaslanan ilkin qiymətləndirmələrdir. [Mühəndislik kitabxanası](topic:engineering-library) düsturları və onların məhdudiyyətlərini siyahılayır. Ona güvənməzdən əvvəl nəticədə Simulyasiya, Termal və ya Axın işə salın.

## İxrac nəzarəti

Mühəndisin generatorları və məlumat vərəqləri ixrac nəzarəti və sanksiyalar haqqında bildiriş daşıyır. Onu [Mühəndis və ixrac nəzarəti](topic:engineer-export-notice) bölməsində oxuyun; o, hər məlumat vərəqinin altındadır.

## Hələ qurulmayıb

- İstilik dəyişdiricisinin nüvəsində başlıqlar, portlar və birləşdiricilər: yalnız nüvədir.
- Material gücü üçün temperatur əyriləri: materiallar otaq temperaturundadır.
- Kollektorda tee itkiləri və çıxışlar arasında axının bölünməsi.
- Əlavə qovluğundan generatorları bir klikə əlavə etmək; faylı açmaq onu bu brauzerə əlavə edir.
- Digər proqramlar üçün generatorlar.
