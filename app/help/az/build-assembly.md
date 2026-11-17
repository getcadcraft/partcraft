---
title: Birləşmələrlə yığım qurun
summary: Detaldan yığım başlayın, surətləri və digər detal fayllarını daxil edin, onları düz üzlərdə sərt, fırlanan, sürüşən, silindrik, müstəvi, kürə və yuvada pin birləşmələri ilə birləşdirin, oxlarda birləşmələri mərkəzləşdirin, detalı yerində redaktə edin və yığımı saxlayın.
keywords: yığım, birləşmə, mate, qapalı döngə, bağlantı mexanizmi, mexanizm, sərt, fırlanan, sürüşən, silindrik, müstəvi, kürə, sferik, yuvada pin, komponent daxil et, bərkidilmiş, sabit, konsentrik, üst-üstə düşmə, detalı redaktə et, yerində, partcraft-asm
from: a53bbfef
---

Yığım detalları bir yerə yığır. PartCraft-da **birləşmələr** detalları yerləşdirir: hər birləşmə iki detalın hər birinin düz üzündə oturur və onları üz-üzə qoyur. Fırlanan birləşmə detalın dönməsinə imkan verir, sürüşən birləşmə onun sürüşməsinə, sərt birləşmə isə onu sabit tutur.

## Yığıma başlayın

1. Bərk cisimlə detal qurun (boş detal yığıma daxil edilə bilməz: "Əvvəl bərk cisim qurun, sonra onu yığıma daxil edin.").
2. Alətlər panelində {{ui:Yığım}} seçin.

Status paneli deyir: "Yığım Part1 bərkidilmiş detal kimi başladı. Daha çox detal daxil edin (Surət əlavə et, Daxil et və ya Redaktə et › Surət), sonra onları Birləşmə ilə bağlayın." Sol paneldə indi **Detallar** və **Birləşmələr** siyahıda görünür, alətlər panelində isə yığım alətləri göstərilir. Eskiz və xüsusiyyət alətləri gizlənir.

Birinci detal **bərkidilmiş** olur: o heç vaxt hərəkət etmir və qalan hər şey ona nəzərən yerləşir.

## Detalları daxil edin

- {{ui:Surət əlavə et}} seçilmiş detalın (və ya sonuncunun) başqa bir surətini daxil edir. Surətlər bir detalı paylaşır: onu redaktə edin və hər surət dəyişir.
- Redaktə qrupundakı {{ui:Surət}} ({{key:Mod+D}}) seçilmiş detal üçün eyni işi görür. {{key:Mod+C}} və {{key:Mod+V}} detalı kopyalayır və bu yığımda və ya başqasında digərlərinin yanına yapışdırır; {{key:Mod+Shift+V}} onu eyni yerə yapışdırır. Bax: [Kopyalama, yapışdırma və surət çıxarma](topic:copy-paste).
- {{ui:Daxil et}} kompüterinizdəki `.partcraft.json` faylından detal daxil edir. Detal yığıma kopyalanır.

Yeni detallar artıq olan hər şeyin sağında 20 mm məsafədə görünür və birləşmə onları yerləşdirənə qədər orada qalır. Birləşməsi olmayan detalı əl ilə də köçürmək olar: yazılmış qiymətlər və ya sürüklədiyiniz oxlar ilə (bax: [Detalların siyahısı, açılmış görünüşlər və hərəkət edən detallar](topic:assembly-bom-explode)).

## İki detalı birləşdirin

1. {{ui:Birləşmə}} seçin və ya {{key:J}} basın. Sağ panel **Yeni birləşmə** yazır.
2. Birinci detalın düz üzünə klik edin. O, vurğulanır.
3. İkinci detalın düz üzünə klik edin.

İkinci detal yerini dəyişir ki, onun üzü birinci detalın üzünə qarşı, üz-üzə gəlsin. Birləşmə **Birləşmələr** altında görünür, məsələn "Revolute1", və sağ panel onun parametrlərini göstərir.

- Hər iki üz fırlatma ilə yaradılıbsa, birləşmə **fırlanan** kimi başlayır; əks halda **sərt**. Sonradan dəyişin.
- Əyri üzlər seçilə bilməz: "Bu üz əyridir. Düz üz seçin (deşik və ya fırlatmanın oxu ətrafında dönmək üçün, sonradan birləşmədə onu seçin)."
- {{key:Esc}} başladığınız birləşməni ləğv edir (və ya soldakı siyahıda detala klik edin).

### Birləşmə parametrləri

| Parametr | Nə edir |
|---|---|
| **Tip** | Aşağıdakı cədvəldəki birləşmələrdən biri |
| **Bucaq (°)** | İkinci detalı birləşmənin oxu ətrafında döndərir (üzlərə perpendikulyar) |
| **Ofset (mm)** | İkinci detalı ox boyunca üzdən uzaqlaşdırır (mənfi qiymətlər onu içəri itələyir) |
| **X boyunca**, **Y boyunca**, **X ətrafında əyilmə**, **Y ətrafında əyilmə**, **Yuva boyunca**, **Yuva istiqaməti** | Digər dəyərlər, onları istifadə edən birləşmələr üçün göstərilir |
| **Mərkəzləşdir** (hər tərəf üçün) | Birləşmənin oxunun üzü kəsdiyi yer: "The face's own origin" (üzün öz başlanğıcı), fırlatmanın oxu ("Axis of Revolve1") və ya bir deşiyin oxu ("Hole1, hole 2") |

Birləşmənin hərəkət etdirməyə imkan verdiyi hər dəyərin qutusunun altında sürükləmə sürgüsü var; qalanları bir dəfə təyin olunur.

| Birləşmə | Nə hərəkət edir | Bir dəfə təyin edilir |
|---|---|---|
| **Sərt** | heç nə | Bucaq, Ofset |
| **Fırlanan** | Bucaq (menteşə) | Ofset |
| **Sürüşən** | Ofset (kassa) | Bucaq |
| **Silindrik** | Bucaq və Ofset (sadə yataqda val) | |
| **Müstəvi** | X boyunca, üz boyunca Y boyunca və Bucaq (masa üzərində sürüşən detal) | |
| **Kürə** | Bucaq (fırlanma) və X və Y ətrafında əyilmə, birləşmənin mərkəzi ətrafında (kürəli birləşmə) | |
| **Yuvada pin** | Yuva boyunca və Bucaq (düz yuvada pin) | Yuva istiqaməti: yuvanın üzün X-indən bucağı |

Üzün X və Y-i birinci detalın üzünkülərdir; birləşmənin mərkəzi **Mərkəzləşdir** ilə təyin olunur.

"The face's own origin" detalın başlanğıcının üzə proyeksiyasıdır və çox vaxt detalların düzləşməsini istədiyiniz yer deyil. Dairəvi detallar və pinlər üçün hər iki tərəfdə **Mərkəzləşdir**i fırlatmanın və ya deşiyin oxuna təyin edin: oxlar düzləşir, konsentrik birləşmə kimi.

### Nümunə: iki flanş üz-üzə boltla birləşdirilib

1. Flanş detalını (deşiklərin dairəvi massivi ilə fırlatma) açın və {{ui:Yığım}} seçin.
2. {{ui:Surət əlavə et}} seçin.
3. {{key:J}} basın, birinci flanşın diskinin düz üzünə (boltun deşiklərinin başladığı üz) klik edin, sonra ikinci flanşda eyni üzə. Üzlər fırlatma ilə yaradıldığı üçün birləşmə fırlanandır.
4. Hər iki tərəf üçün **Mərkəzləşdir**i "Axis of Revolve1"ə təyin edin. Flanşlar indi bir ox paylaşır.
5. Bolt deşiklərini düzləşdirmək üçün **Bucaq (°)** qutusuna `22.5` yazın, ya da sürgünü sürükləyin.

## Qapalı döngülər: bağlantı mexanizmləri

Halqa şəklində birləşdirilmiş detallar (dörd çubuqlu mexanizm, kriv və sürgü, hər iki tərəfdən bərkidilmiş çərçivə) **döngü** əmələ gətirir. PartCraft hər döngünü qapanacaq şəkildə həll edir: üzərindəki birləşmələr halqanı birləşdirən dəyərləri alır və olduqları yerdən mümkün qədər az hərəkət edirlər.

- **Təyin edin və ya sürükləyin** döngüdəki birləşmənin dəyərini və döngünün qalanı ardınca gedir. Dörd çubuqlu mexanizm üçün krivin **Bucağını** sürükləyin və birləşdirici və yellənən çubuq onunla birlikdə hərəkət edir. Təyin etdiyiniz dəyər saxlanılır; qalanları ondan hesablanır.
- Siyahıda hələ hərəkət edə bilən döngədə birləşmə **mavi** olur: başqa dəyər hələ təyin edilə bilər. Hərəkət edə bilməyən döngə (bərkidilmiş çərçivə) qara qalır. Qapana bilməyən döngə **qırmızı** olur.
- **Detal** qutusu **Döngülər** göstərir: neçəsi qapalıdır və neçə dəyər hələ hərəkət edə bilər, məsələn "1 qapalı; 1 dəyər hələ hərəkət edə bilər".
- {{ui:Hərəkət zamanı toqquşmaları yoxla}} döngüdəki birləşməni, döngü onu izləyərək, addım-addım yoxlayır (bax: [Yığımı toqquşma və hərəkət üçün yoxlayın](topic:check-assembly)).

Düz çubuqlardan yığılmış düz bağlantı dərinlik üzrə uyğun olmalıdır: halqanın hər iki tərəfində üz-üzə birləşdirilmiş iki detal hər iki istiqamətdə eyni yığın hündürlüyünə malik olmalıdır. Yığın cəmlənmədiyi yerdə detalı qaldırmaq üçün birləşmənin **Ofsetindən** istifadə edin, əks halda döngü qapana bilməz.

## Detallarla işləyin

Detalı seçmək üçün görünüşdə və ya siyahıda ona klik edin. Sağ panel onun detal adını, neçə surəti olduğunu, həcmini, birləşmələrini və bərkidilmiş olub-olmadığını, birləşmələri ilə təyin olunduğunu və ya "Not joined: stays where it was put" (Birləşdirilməyib: olduğu yerdə qalır) göstərir. Düymələr:

- {{ui:Bu detalı redaktə et}} (və ya alətlər panelində {{ui:Detalı redaktə et}}, ya da siyahıda detala iki dəfə klik edin): detalı redaktə üçün açır;
- {{ui:Nüsxə əlavə et}};
- {{ui:Bərkidilmiş detal et}};
- {{ui:Çıxar}}: soruşduqdan sonra birləşmələrini də silir.

Yığımda ən azı bir detal qalır: "Yığımda ən azı bir detal qalır. Onun əvəzinə bağlayın."

### Detalı yerində redaktə edin

1. Detal seçin və {{ui:Detalı redaktə et}} seçin. Detal tarixçəsi ilə açılır; başlıqda "Bracket (in Bracket assembly)" yazılır.
2. Onu hər hansı detal kimi dəyişin.
3. Alətlər panelində {{ui:Geri}} seçin. Yığım yenilənir: həmin detalın hər surəti dəyişir və eskiz kənarlarından yaranmış üzlərdəki birləşmələr izləyir.

Dəyişikliyin geri gətirilməsi yığımın geri qaytarma siyahısında bir addımdır.

## Geri qaytarın, saxlayın və bağlayın

- Yığımın öz geri qaytarma siyahısı var: {{key:Mod+Z}} və {{key:Mod+Y}} birləşmələr, daxil etmələr və parametrlər üzərində işləyir.
- {{ui:Saxla}} və ya {{key:Mod+S}} içində bütün detalları olan `<assembly name>.partcraft-asm.json` faylını yükləyir. Sonra onu {{ui:Aç}} ilə açın.
- {{ui:Bağla}} yığımı bağlayır və başladığınız detala qayıdır. Əgər yığım saxlanmayıbsa, soruşur: {{ui:Ləğv et}}, {{ui:Yığımı atın}} və ya {{ui:Əvvəl saxla}}.
- Yığımın adını dəyişmək üçün boş yerə klik edin ki, heç nə seçilməsin və sağ paneldə **Ad**ı dəyişin.

## Böyük yığımlar

Yığım bir neçə detalın minlərlə surətini saxlaya bilər. Bir detalın surətləri birlikdə çəkilir, fırlatdığınız birləşmə yalnız onun arxasındakı detalları yerləşdirir və detal siyahısı ilk sətirlərini göstərir, altında "Daha çox göstər" düyməsi ilə (seçilmiş detal həmişə siyahıda olur).

- Görünüşü fırladarkən və ya yaxınlaşdırarkən təxminən 300 000-dən çox üçbucaqlı olan yığım hər detal üçün bir qutu kimi çəkilir, dayandıqdan bir az sonra isə tam çəkilir.
- {{ui:Görünüşlər}} › {{ui:Yüngül göstəriş}} qutuları hər zaman saxlayır. Detal və birləşmələri seçmək yenə də real detalları istifadə edir.
- Fırlanma sürəti həm də qrafik kartınızdan asılıdır. PartCraft-ın ölçdüyü rəqəmlər buraxılış qeydlərində, onları əldə etdiyi maşınla birlikdə verilir.

## Birləşmə problemləri

- Heç bir birləşmənin çatmadığı detal **sərbəst** kimi siyahıya salınır və panel deyir: "Bracket2 bərkidilmiş detala birləşdirilməyib, buna görə olduğu yerdə qalır."
- Qapana bilməyən döngə (uzunluqlar çatmır, limit birləşməni dayandırır, üzlər dərinlik üzrə uyğun gəlmir): "Revolute3 qapana bilməyən döngəni bağlayır: 2.000 mm sapma var. Döngünün birləşmələrinin üzlərini, ofsetlərini və limitlərini yoxlayın." Onun birləşmələri qırmızı olur.
- Detalı redaktə etdikdən sonra birləşmənin istifadə etdiyi üz və ya ox yox olarsa: "Bu birləşmənin istifadə etdiyi üz Bracket-dən itib." Birləşməni silin və yenidən yaradın.

Növbəti: [Yığımı toqquşma və hərəkət üçün yoxlayın](topic:check-assembly).
