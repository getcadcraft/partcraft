---
title: Mesh nüvəsi
summary: Bu PartCraft versiyası hər detalı brauzerinizdə işləyən mesh nüvəsi ilə qurur. Bunun dairəvi üzlər, həcmlər və fayllar üçün nə demək olduğu, işlədiyini necə görmək olar və hansı elementlərin dəqiq nüvə gözlədiyi.
keywords: nüvə, mesh, manifold, dəqiq, b-rep, faset, əyrilər, opencascade, occt, yuvarlaqlaşdırma dəqiq tələb edir, hələ qurulmayıb, oflayn, webassembly
from: 68d32d16
---

Həndəsə nüvəsi tarixçənizi bərk cismə çevirən mühərrikdir. Bu PartCraft versiyasında belə nüvə var: **mesh nüvəsi** (manifold-3d). O kompüterinizdə kiçik WebAssembly proqramı kimi işləyir və tətbiq açıldıqdan az sonra hazır olur. Detalınızla bağlı heç nə hara isə göndərilmir.

| | Mesh nüvəsi |
|---|---|
| Dairəvi formalar | Düz faset-lər. Detal panelindəki **Əyrilər** onun nə qədər incə olacağını təyin edir |
| Həcmlər və sahələr | Faset bərk cismin, dairəvi detallarda bir az aşağı |
| Eskizlər, ekstruziya, kəsmə, fırlatma, deşiklər, nümunələr, güzgü, istinad müstəviləri | Bəli |
| Yuvarlaqlaşdırma və faska | Düz üzlər arasındakı düz kənarlarda; birləşən yuvarlaqlar kəsilir |
| Qabıq və qaralama | Qabıq düz üzləri açır (dəqiq divar qalınlığı); Qaralama düz üzləri əyir |
| İxrac | STL, 3MF, STEP (faset), çertyoj PDF və DXF |
| Çertyoj görünüşləri | Fasetlərdən çəkilir, kəsik görünüşləri də daxil olmaqla |
| Üzlər və kənarlar | Adlandırılır və növünə görə tanınır (düz, silindr, konus, sfera, torus; düz, dairə), eskizlərdən götürülür: Simulyasiya, Generativ və İstehsal iş sahələri, Ölçmə, seçmə və deşik cədvəli bunlardan istifadə edir |

Bərk cisminiz qurulduqca status panelinin sağ ucundakı çip **Mesh kernel** yazır.

## Dəqiq nüvə nəyi gözləyir

Dəqiq (B-rep) nüvə həqiqi çevrələri, silindrləri və konusları, istənilən kənarda hamar yuvarlaqları, süpürmələri, loftları, səthləri, təbəqə metalı, qabırğaları, bir neçə cismi, STEP idxalını və dəqiq STEP ixracını saxlayır. PartCraft-ın əvvəlki laboratoriya versiyaları bunun üçün OpenCascade istifadə edirdi. Onun lisenziyası (LGPL) bu buraxılışa uyğun gəlmir, burada hər tətbiq Apache-2.0-dır və yalnız icazəli kitabxanalardan istifadə edir, ona görə o daxil edilməyib. Bunun tarixi yoxdur.

Bu vaxta qədər bu elementləri seçəndə onlar **Hələ qurulmayıb** yazır: status paneli səbəbi göstərir və onların düymələrinin tooltip-ləri "hələ qurulmayıb (dəqiq nüvə tələb edir)" ilə bitir. [Hələ qurulmayanlar](topic:not-built-yet) hər birini, nə etməli olduğunuzla birlikdə sadalayır.

Əvvəlki versiyada onlarla qurulmuş detal yenə açılır. Bu elementlər tarixçədə qurulmayıb kimi qeyd olunur (səbəb üçün birinin üzərinə gəlin), qalan detal qurulur və saxlamaq onları dəyişməz saxlayır.

## Dairəvi üzlər və Əyrilər

Mesh nüvəsi dairəni çoxbucaqlı kimi çəkir. Detal panelindəki **Əyrilər** tam dairəyə neçə tərəf veriləcəyini təyin edir: daha çox tərəf daha hamar görünür və həqiqi dəyərə daha yaxın ölçülür, lakin qurulması daha uzun çəkir. {{ui:Ölçmə}} ilə alınan həcmlər, sahələr və məsafələr bu faset bərk cismin üzrədir: deşik və ya çıxıntı üçün həqiqi dairəvi formadan bir az kiçikdirlər.

## Onlayn və oflayn

Mesh nüvəsi tətbiqin öz yükləməsinin bir hissəsidir. Bağlantı olmadan işləmək üçün onlayn ikən PartCraft-ı oflayn istifadə üçün saxlayın: tətbiq panelində {{ui:Oflayn üçün saxla}} seçin və **Oflayn hazırdır** yazana qədər gözləyin. Ətraflı: [Oflayn işləmək](common:offline).
