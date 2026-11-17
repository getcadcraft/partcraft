---
title: Skriptləri yazın və işə salın (Skript iş sahəsi)
summary: Skript iş sahəsi addım-addım: CraftScript və ya Lua skripti yazın, F5 ilə işə salın, konsolu oxuyun, nəticələri növbəti skript üçün dəyişənlərdə saxlayın, torları, sahələri və çəkilişləri göstərin, işi dayandırın və skriptləri hissə ilə birlikdə saxlayın.
keywords: skript, skriptləmə, modelləşdirərkən skript, ayrı pəncərəyə çıxar, ikinci ekran, ikinci monitor, param, params, skriptlərdə parametrlər, CraftScript, Lua, kod, proqram, redaktor, konsol, REPL, əmr sətri, işə sal, F5, seçimi işə sal, dayandır, dəyişənlər, iş sahəsi, çəkiliş, sahə, tor, legenda, alt ekran, təhlil, avtomatlaşdırma, matris, ədədi
from: d0003e89
---

**Önizləmə.** Skriptləmə PartCraft 0.3-də yenidir və önizləmədir: dil, kitabxana və skriptlərin saxlanma üsulu hələ dəyişə bilər, indi yazılmış skriptlər sonra kiçik düzəlişlər tələb edə bilər. Nə sındığını bizə bildirin.

Skript iş sahəsi hissənin yanında öz hesablamalarınızı işə salır: kiçik cəmlər, bütöv təhlillər və ya [təhlil kitabxanasındakı](topic:craftscript-library) skriptlər. Skriptlər **CraftScript** dilində (MATLAB-a çox oxşar matris dili, bax [CraftScript dili](topic:craftscript-language)) və ya **Lua** dilində (bax [Lua ilə skriptlər](topic:craftscript-lua)) və ya **Python** dilində (bax [Python ilə skriptlər](topic:craftscript-python)) yazılır.

**Skript** iş sahəsini alətlər panelinin sol tərəfindəki **İş sahəsi** qutusunda seçin. Hissə dəyişmir. Sağ panel skript panelinə çevrilir (adi halından enli; kənarını sürükləyərək dəyişin, ya da {{ui:⋯}} menyusu ilə onu ikinci ekrana keçirin, bax [Panelləri təşkil edin](common:arrange-panels)).

## Modelləşdirərkən skript

Skript yazmaq üçün Dizayn iş sahəsindən çıxmağa ehtiyac yoxdur. Dizaynda sağ panelin {{ui:Skript}} sekmesi eyni redaktoru, konsolu, dəyişənləri və kitabxananı eyni skriptlərlə saxlayır. Xüsusiyyət ağacı və görünüş işləməyə davam edir: xüsusiyyətə klik edib seçin, eskizə iki dəfə klik edib redaktə edin, görünüşü fırladın, sonra {{ui:Skript}} sekmesinə qayıdın və {{key:F5}} basın.

Skriptin **göstərdikləri** (torlar, sahələr, çəkilişlər, cədvəllər) Dizaynda modelinizin üstündə çəkilmir: konsol bunu deyir, bütün göstərmə isə Skript iş sahəsinə keçəndə hazırdır.

{{ui:Ayrı pəncərəyə çıxar}} düyməsi {{ui:İşə sal}} yanındadır; bütün paneli öz pəncərəsinə keçirir, məsələn ikinci ekranda, beləliklə redaktor və tam görünüş yanaşı olur. {{ui:Yerinə qaytar}} onu yenidən yerləşdirir. Bax [Panelləri təşkil edin](common:arrange-panels).

## İlk skriptinizi işə salın

1. Redaktorda yazın, məsələn:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'Sinus dalğası')
   disp(max(y))
   ```

2. {{key:F5}} basın (ya da {{ui:İşə sal}}). Redaktorun altındakı konsol skriptin çap etdiyini və «… s-də bitdi» mesajını göstərir. Qrafik 3D görünüşün altındakı **alt ekranlarda** görünür.
3. Nöqtəli vergül olmayan sətir öz dəyərini çap edir, MATLAB-da olduğu kimi: `a = 3` `a = 3` çap edir; `a = 3;` heç nə çap etmir.
4. Skriptin yalnız bir hissəsini işə salmaq üçün sətirləri seçin və {{key:Mod+Enter}} basın ({{ui:Seçim}}). Heç nə seçilməyibsə, kursorun olduğu sətri işə salır.
5. Konsolun altındakı sətir (`>>`-dən sonra) {{key:Enter}} basdıqca bir ifadə işə salır. {{key:Up}} və {{key:Down}} əvvəlki sətirləri gətirir.

## Tapın, qatlayın və tamamlayın

- **Tapın və əvəz edin.** {{key:Mod+F}} basın ({{key:Mod+H}} əvəz etmək üçün də). Kodun üstündə çubuq açılır: tapmaq istədiyinizi yazın; uyğunluqlar işıqlanır, say hansı yerdə olduğunuzu göstərir. Qutunun yanındakı düymələr böyük-kiçik hərf fərqini (**Aa**), yalnız bütöv sözləri (**W**) və müntəzəm ifadəni (**.\***; əvəzləmədə `$1` birinci qrupun uyğunlaşdığını qaytarır) tapır. {{ui:Əvəz et}} cari uyğunluğu əvəz edir, {{ui:Hamısı}} isə hər uyğunluğu bir addım kimi əvəz edir ({{key:Mod+Z}} ilə geri qaytarılır).
- **Qatlama.** Sətir nömrəsinin yanındakı ▾-ya klik edin, ya da kursor `function`, `if`, `for`, `while`, `switch` və ya `try` sətrində olduqda {{key:Mod+Shift+[}} basın (Lua: `function`, `do`, `if`, `repeat`); onun daxili sətirləri gizlənir, sətir neçə sətir olduğunu göstərir. ▸ və ya {{key:Mod+Shift+]}} onu yenidən açır. Qatlama yalnız sətirləri gizlədir: işə salma, saxlama, kopyalama və sətir nömrələri hamısı hər sətiri hesab edir, qatlanmış sətirdə yazmaq isə əvvəl onu açır.
- **Tamamlama.** Bir adın iki hərfini yazın, ya da {{key:Mod+Space}} basın: siyahıda sizin dəyişənləriniz, dilin funksiyaları (arqumentləri ilə), açar sözlər və skriptdə artıq olan adlar göstərilir. Oxlarla seçin və {{key:Enter}} ya da {{key:Tab}} basın.

## Nəsə pis olanda

- Xəta problemi və sətrini göstərir: sətir redaktorda qırmızı işarələnir, konsoldakı **Sətir n** sizi oraya aparır.
- Heç vaxt bitməyən dövr: {{ui:Dayandır}} basın (alətlər paneli və ya panel). Skript dərhal dayanır; dəyişənlər həmin işdən əvvəlki dəyərləri saxlayır.
- Hər işin də addım büdcəsi var (defolt olaraq 2 milyard addım; **İşə salma seçimləri** altında paneldə dəyişdirin). Büdcəni keçən iş mesajla dayanır.

## Dəyişənlər skriptdən skriptə keçir

Skriptin yaratdığı hər ən üst səviyyə dəyişən **Dəyişənlər** sekmesinə düşür (ad, növ, ölçü, ən kiçik və ən böyük dəyər) və növbəti skript üçün orada qalır, hansı dildə olsa da. Bir skript torlayır, növbəti həll edir, üçüncüsü çəkir — belə işləyir.

- Dəyişəni göstərmək üçün ona klik edin: torlar, sahələr və modellər 3D görünüşdə, massivlər isə cədvəl kimi (vektor üçün xətt qrafiki, matris üçün rəng xəritəsi əlavə) alt ekranlarda.
- {{ui:JSON kimi saxla}}, {{ui:CSV kimi saxla}} (ədədlər cədvəli) və {{ui:HDF5 kimi saxla}} onu endirir; {{ui:Sil}} onu silir; {{ui:Hamısını təmizlə}} iş sahəsini boşaldır.
- Hissə faylında qalmaları üçün **Dəyişənləri hissə ilə birlikdə saxla** qutusunu işarələyin (32 MB-a qədər; daha böyükləri yalnız bu ziyarət üçün qalır). Belə hissəni açanda panel onları yükləməyi təklif edir.

## Torlar, sahələr və çəkilişlər

- `show(m)` torun çəkir; `show(f)` sahəni onun torunda legenda ilə rənglədir. Görünüşün sol yuxarısındakı **Göstərilən** siyahısı hər elementi gizlədir ({{ui:göz}} işarəsi) və ya silir, və hissənin özünü gizlədir və ya göstərir. Legendanın altında diapazon yazın (**From**, **to**) və ya {{ui:Avto}} basın; vektor və ya gərginlik sahəsi də hansı komponentin göstəriləcəyini təklif edir.
- `show(f, 'deform', u, 'scale', 50)` yerdəyişmə sahəsi `u` ilə hərəkət etdirilmiş torları çəkir, 50 dəfə böyüdülmüş (`scale` olmadan təxminən modelin ölçüsünün 8%-i).
- Göstərilən torun üstünə klikləyin: ən yaxın düyün, element və orada sahə dəyərləri alt ekranlarda görünür (**Seçilmiş**).
- `plot`, `imagesc` və `table` alt ekranlarda xətt qrafiki, 2-ölçülü massivin rəng xəritəsi və ya cədvəl qoyur. Əvvəlkisi ilə eyni `'id'` (ya da başlıq) olan çəkiliş onu əvəz edir, beləliklə dövrə bir yığılma qrafikini yeniləyə bilər; `'append', true` ona əyri əlavə edir. {{ui:Təmizlə}} alt ekranları boşaldır; ox onları qatlayır.
- İkidən çox çəkiliş olduqda {{ui:Yanaşı}} hamısını eyni anda göstərir (ən yenisi altı); cədvəlin və ya şəklin sekmesinə klik etmək onu təkbaşına yenidən göstərir.
- Hər çəkilişin altında {{ui:PNG}}, {{ui:SVG}} və {{ui:CSV}} var. PNG və SVG onu mövzudan asılı olmayaraq ağ fonda kağız rənglərində çap edir (PNG 1600 × 1000 piksel; SVG bulanıqlaşmadan miqyaslanır). CSV bütün rəqəmlərini saxlayır: əyrilər eyni x-i paylaşırsa bir x sütunu və hər əyri üçün bir sütun, əks halda hər nöqtə üçün əyrinin adı ilə bir sətir.
- {{key:F}} və ya {{ui:Sığdır}} görünüşü göstərilənə sığdırır.

## Fayllar

- Skript qrupundakı {{ui:Aç}} (ya da görünüşün və ya panelin üstünə faylları atın): `.craft`, `.lua` və `.py` faylları yeni skript kimi açılır (işə düşmür); məlumat faylları (STL, OBJ, CSV, JSON, NPY, HDF5) öz fayl adı altında dəyişənlərə yüklənir.
- Skript qrupundakı {{ui:Saxla}} cari skripti fayl kimi endirir.
- Skript qrupundakı {{ui:Yeni}} (ya da sekmələrin yanındakı {{ui:+}}) başqa skript başladır. Sekmənin üstünə iki dəfə klik edin ki, adını dəyişin; onun {{ui:×}} düyməsi onu silir (bunu geri qaytara bilərsiniz).

## Hissənin parametrlərini oxuyun

Skript hissənin parametrlərini (bax [Hissəni parametrlərlə idarə edin](topic:parameters)) adı ilə oxuyur:

```
w = param('width');     % bir parametrin dəyəri, mm ilə (ya da dərəcə, ya da sadə ədəd)
p = params();           % hamısı, struktur kimi: p.width, p.height
```

Lua və Python-da bu `cs.param('width')` və `cs.params()`-dır. Skriptlər parametrləri yalnız oxuyur: onları **Parametrlər** sekmesində dəyişin. Skriptin sekmesinin altında, `param('…')` ilə oxuduğu parametrləri sadalayan sətir var və hissədə olmayanları işarələyir; **Parametrlər** sekmesi skripti hər birinin altında göstərir. İşə salma zamanı qurulan ad, məsələn `param(name)`, siyahıya düşmür.

## Skriptlər hissə ilə saxlanılır

Sekmələrdəki hər skript hissədə saxlanılır, ona görə Fayl qrupundakı {{ui:Saxla}} onları hissə ilə birlikdə saxlayır və onlardakı dəyişikliklər geri qaytarıla bilər. Hissəni açmaq skriptlərini **heç vaxt işə salmır**: konsol neçə skript daşıdığını deyir, və onlar yalnız İşə sal basdıqda işləyir. Başqasının hissəsi istənilən skripti daşıya bilər: işə salmadan əvvəl oxuyun. Skriptlər bu kompüterdə fonda, şəbəkə girişi olmadan işləyir və səhifəyə toxuna bilməz.

## Əlaqəli

- [CraftScript dili](topic:craftscript-language)
- [Lua ilə skriptlər](topic:craftscript-lua)
- [Python ilə skriptlər](topic:craftscript-python)
- [Təhlil kitabxanası](topic:craftscript-library)
- [Öz təhlilinizi yazın](topic:craftscript-own-analysis)
