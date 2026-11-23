---
title: Zondlama: detalı tapın və iş sürüşməsini təyin edin
summary: Zondla üst üzə, yana, deşiyə və ya çıxıntıya toxunun və kontrollerin iş sürüşməsini detalın həqiqətən olduğu yerə köçürməsinə icazə verin, və ya yalnız ölçün. Hər kontrollerin nə edə biləcəyi və nəyin sübut olunmadığı.
keywords: zond, zondlama, toxunma zondu, toxunma ilə təyin, iş sürüşməsi, g54, g31, g38.2, atlamaq, datum, mərkəzi tap, deşik, çıxıntı, kənar, sıfıra təyin et, ölç, yoxlama, g10
from: 1f718b82
---

Manufacture-da {{ui:Probe}} proqrama zondlama dövrü yazır: zond detala toxunur, kontroller isə iş sürüşməsini (G54) səthin tapıldığı yer ilə modelin dediyi yer arasındakı fərq qədər köçürür. Sonrakı əməliyyatlar detalın həqiqətən olduğu yerdə kəsir.

**Burada heç nə dəzgahda işlədilməyib.** Toxunuşdan əvvəlki hərəkətlər adi hərəkətlərdir: zond yalnız zondlama hərəkətinin özündə izlənilir. Yavaş işlədin, əvvəl havada, əlinizi irəliləmənin dayandırılması düyməsi üzərində saxlayın.

## İstifadə

1. **Alətlər** sekmesində ilk zondlama əməliyyatı bir **toxunma zondu** əlavə edir: onun top diametri və zondlama irəliləməsi (təyin etməsəniz 100 mm/dəq).
2. Manufacture alət panelində {{ui:More}} basın, sonra {{ui:Probe}} və toxunulacaq şeyə klik edin. Hər seçim bir dövrdür, klik etdiyiniz sıra ilə:

| Seçim | Dövr | Nə təyin olunur |
|---|---|---|
| Alət oxuna baxan düz üz | Aşağı bir toxunuş | Z |
| Ona kvadrat X və ya Y-ə düz yan üz | Üzə, yuxarısının bir az altında bir toxunuş | X və ya Y |
| Alət oxu boyunca deşik və ya çıxıntı | Dörd toxunuş (+X, −X, +Y, −Y) | Mərkəzin X və Y-i |

3. **Nəticə ilə**: {{ui:Set the work offset}} və ya {{ui:Measure only}}.
4. **Bu qədər uzaqdan başla** və **Bu qədər uzağa keç** gözlənilən səthdən zondlama hərəkətinin nə qədər uzaqdan başladığı və kontrollerin təslim olmadan əvvəl zondun nə qədər getməsinə icazə verildiyidir. **Dərinlik** kürənin deşiyin, çıxıntının və ya yan üzün yuxarısından nə qədər aşağı getməsidir.

Zondlama əməliyyatını birinci qoyun, heç nə kəsməzdən əvvəl.

## Hər kontrollerin nə yazdığı

| Kontroller | Toxunuş | Nəticə |
|---|---|---|
| Fanuc tipli | `G31`, mövqe `#101` ilə `#104` arasında saxlanılır | Sürüşmə dəyişənləri (`#5221` ilə `#5223`) tapılan − gözlənilən qədər köçürülür. Yalnız ölç: fərq `#110`-da (və `#111`-də) qalır. |
| LinuxCNC | `G38.2`, mövqe adlı parametrlərdə saxlanılır | Yeni sürüşmə ilə `G10 L2 P1`. Yalnız ölç: `(DEBUG, …)` mesajı. |
| GRBL | `G38.2` | Bir toxunuş oxu `G10 L20 P1` ilə təyin edir. GRBL-də dəyişənlər yoxdur, ona görə **mərkəz hesablaya bilmir**: fayl bunu şərhdə deyir və heç nə təyin etmir. |

Hesablama postun işidir, ona görə onu dəyişə bilərsiniz: hadisələr `probe-move` və `probe-set`-dir ([Redaktə edilə bilən post-prosessorlar](topic:post-processors)).

## Məhdudiyyətlər

- Bir iş sürüşməsi (G54). Yalnız oxlara kvadrat üzlər: bucaq yoxdur, künc dövrü yoxdur, işin fırlanması yoxdur.
- Alət quraşdırıcısı yoxdur, qırılmış alət yoxlaması yoxdur, ölçünün tolerantlıqla müqayisəsi yoxdur, hesabat yoxdur.
- Zond üçün şpindel işə salınmır və soyuducu sönük qalır; spindeldəki alətin zond olduğunu yoxlayan heç nə yoxdur.
- Xam material simulyasiyası zondlama yolunu işlətmir.
- Zondun öz kalibrləməsi (top ofseti, sap əyilməsi, işə düşmə istiqaməti) kontrollerindir.
