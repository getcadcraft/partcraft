---
title: Öz təhlilinizi yazın
summary: Skript iş sahəsində təhlili skriptlər kimi qurun: hissəni torlayın, yığın və həll edin, sahəni və yığılma qrafikini göstərin, nəticəni əl hesablaması ilə yoxlayın və addımları dəyişənləri paylaşan ayrı skriptlər kimi saxlayın.
keywords: öz təhlili, fərdi təhlil, FEA skripti, sonlu elementlər, yığmaq, sərtlik, sərhəd şərtləri, həll etmək, pcg, seyrək, sahə, son emal, yığılma, doğrulama, əl hesablaması, yoxlama, iş axını
from: 0f471a8e
---

Skript iş sahəsində təhlil bir-birinə dəyişənləri ötürən bir neçə qısa skriptdir. [Kitabxana](topic:craftscript-library) funksiyasından, ehtiyacınıza ən yaxınından başlayın, nüsxəsini çıxarın və dəyişdirin; ya da aşağıdakı kimi addım-addım qurun.

## 1. Tor

```
model = part();                  % modelləşdirdiyiniz hissə, model kimi
m = tetmesh(model, 4);           % təxminən 4 mm ölçülü tetraedrlər
show(m)
```

Davam etməzdən əvvəl torları görünüşdə yoxlayın: {{key:F}} onu sığdırır, **Göstərilən** siyahısındakı {{ui:göz}} işarəsi hissəni gizlədir.

## 2. Yığın və həll

Element dövrəsini skriptdə yazın (dərslik kimi oxunur), ağır hissələri isə daxili funksiyalara buraxın: element matrisləri, üçlüklərdən seyrək yığma və şərtləndiricili konjugat qradiyent həllədicisi. Kitabxana funksiyası kimi `static_tet` (kitabxanada olduqda) köçürmək üçün tam nümunədir.

## 3. Nəticəni göstərin

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % hər düyün üçün bir dəyər
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Həlledici qalığı', 'id', 'conv')
```

- Legendanın diapazonu yazıla bilər və ya {{ui:Avto}} ilə geri qaytarıla bilər.
- Düyündəki qiymətləri oxumaq üçün torun üzərinə klikləyin.
- Eyni `'id'` saxlayan çəkiliş yerində yenilənir, ona görə yığılmanı izləmək üçün dövrənin içində çap edin və çəkin.

## 4. Yoxlayın

Bildiyiniz bir şeylə müqayisə edin: konsolun uc sapmasını PL³/3EI ilə, dəliyi olan lövhəni gərginlik konsentrasiyası əmsalı ilə, reaksiyaları yüklərlə. Yoxlamanı ayrıca skript kimi yazın ki, hər dəyişiklikdən sonra yenidən işləsin:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('uc %g mm, tir nəzəriyyəsi %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Saxlayın

- Hər addım öz skript səkməsi ola bilər: onlar dəyişənləri paylaşır, ona görə onları bir-birinin ardınca işə salın.
- Skriptlər hissənin içində saxlanılır. Nəticələri də saxlamaq üçün **Dəyişənlər** sekmesində **Dəyişənləri hissə ilə birlikdə saxla** qutusunu işarələyin (32 MB-a qədər).
- Skript qrupundakı {{ui:Saxla}} skripti paylaşmaq üçün endirir; {{ui:Aç}} onu gətirir.
