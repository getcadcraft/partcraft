---
title: Mesh nüvəsi
summary: PartCraft-ın bu versiyası hər detalı brauzerdə işləyən mesh nüvəsi ilə qurur. Bu dairəvi formalar, həcmlər və fayllar üçün nə deməkdir, işlədiyini necə anlamaq olar və hansı elementlər dəqiq nüvə gözləyir.
keywords: nüvə, mesh, manifold, dəqiq, b-rep, fasetli, əyrilər, opencascade, occt, yuvarlaqlaşdırma dəqiq nüvə tələb edir, hələ qurulmayıb, oflayn, webassembly
from: f931645c
---

Həndəsə nüvəsi tarixçəni bərk cismə çevirən mühərrikdir. PartCraft-ın bu versiyasında bu **mesh nüvəsidir** (manifold-3d). O, kompüterinizdə kiçik WebAssembly proqramı kimi işləyir və tətbiq açıldıqdan bir az sonra hazır olur. Detalınız haqqında heç nə heç yerə göndərilmir.

| | Mesh nüvəsi |
|---|---|
| Dairəvi formalar | Düz fasetlər. Detal panelindəki **Əyrilər** nə qədər incə olacağını təyin edir |
| Həcmlər və sahələr | Fasetli bərk cismin; dairəvi detallarda bir az aşağı |
| Eskizlər, ekstruziya, kəsmə, fırlatma, deşiklər, massivlər, güzgü, istinad müstəviləri | Bəli |
| Yuvarlaqlaşdırma və faska | Düz üzlər arasındakı düz kənarlarda; birləşən yuvarlaqlaşdırmalar bucaqlı kəsilir |
| Qabıq və Eğim | Qabıq düz üzləri açır (dəqiq divar qalınlığı); Eğim düz üzləri əyir |
| İxraclar | STL, 3MF, STEP (dəqiq: dairəvi üzlər həqiqi səthlərində yazılır; ya da fasetli), çertyoj PDF və DXF |
| Çertyoj görünüşləri | Fasetlərdən çəkilir, kəsik görünüşləri daxil olmaqla |
| Üzlər və kənarlar | Növünə görə adlandırılır və tanınır (düz, silindr, konus, sfera, torus; düz, dairə). Eskizlərdən götürülür: Simulyasiya, Generativ və İstehsal iş sahələri, Ölçmə, seçmə və deşik cədvəli bunlardan istifadə edir |

Status panelinin sağ ucundakı çip detalı qurarkən **Mesh nüvəsi** yazır.

## Dəqiq nüvə tələb edən elementlər

Dəqiq (B-rep) nüvə həqiqi dairələri, silindrləri və konusları saxlayır. Istənilən kənarda hamar yuvarlaqlaşdırmalar, süpürmələr, lofting-lər, səthlər, təbaqə metal, qabırğalar, bir neçə cisim və əyri üzləri dəqiq saxlanılan STEP idxalı bunun üzərində qurulur. (Dəqiq STEP ixracı bunu gözləmir: mesh nüvəsi hər üzün həqiqi səthini eskizdən bilir və ixrac onları yazır.) Əvvəlki laboratoriya quruluşlarında PartCraft bunun üçün OpenCascade istifadə edirdi. Onun lisenziyası (LGPL) bu buraxılışa uyğun deyil: burada hər tətbiq Apache-2.0 lisenziyalıdır və yalnız icazəli kitabxanalardan istifadə edir, buna görə daxil edilməyib. Bunun tarixi yoxdur.

Bu vaxta qədər bu elementlər seçdiyiniz zaman **Hələ qurulmayıb** yazır: status paneli səbəbi göstərir, düymələrin alətlər ipucları isə "hələ qurulmayıb (dəqiq nüvə tələb edir)" ilə bitir. [Hələ nə qurulmayıb](topic:not-built-yet) hər birini nə etmək lazım olduğu ilə sadalayır.

Bu elementlərlə əvvəlki versiyada yaradılmış detal yenə açılır. Həmin elementlər tarixçədə qurulmamış kimi işarələnmiş qalır (səbəbini görmək üçün üzərinə gəlin), qalan detal qurulur və saxlamaq onları dəyişmədən saxlayır.

## Dairəvi formalar və Əyrilər

Mesh nüvəsi dairəni çoxbucaqlı kimi çəkir. Detal panelindəki **Əyrilər** tam dairənin neçə tərəfi olacağını təyin edir: tərəf sayı çox olduqca daha hamar görünür və həqiqi dəyərə daha yaxın ölçülür, lakin qurulması daha uzun çəkir. Həcmlər, sahələr və {{ui:Ölçmə}} ilə alınan ölçülər bu fasetli bərk cismin ölçüləridir: deşik və ya çıxıntı üçün onlar dairəvi formadan bir az kiçikdir.

## Onlayn və oflayn

Mesh nüvəsi tətbiqin öz yükləməsinin bir hissəsidir. Bağlantı olmadan işləmək üçün onlayn olarkən PartCraft-ı oflayn istifadə üçün saxlayın: tətbiq panelində {{ui:Oflayn üçün saxla}} seçin və **Oflayn hazırdır** yazana qədər gözləyin. Ətraflı: [Oflayn iş](common:offline).
