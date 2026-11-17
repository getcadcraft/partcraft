---
title: Sahələr: məsafə kimi formalar
summary: Sahə nədir (formanın səthinə olan məsafə kimi saxlanılması), skriptdə ilkin formalardan, bul əməliyyatlarından, qəfəslərdən və minimal səthlərdən necə qurulur, bərk cismə necə çevrilir və eyni skriptin niyə həmişə eyni baytları verməsi.
keywords: sahə, işarəli məsafə, sdf, voksel, giroid, tpms, qəfəs, bul, ofset, qabıq, qarışdırma, ikili konturlama, deterministik, su keçirməz, manifold, kərpic
from: faab7480
---

**Sahə** forma təsvir edir: istənilən nöqtədən onun səthinə qədər olan məsafə ilə; içəridə mənfi, səthdə sıfır, xaricdə müsbət. Radiusu 5 olan kürə "mərkəzə olan məsafə minus 5"dir. Formaları birləşdirmək məsafələr üzərində hesabdır: birləşmə ikisindən kiçikdir, kəsişmə böyükdür, bir formanı digərindən çıxmaq birincinin və ikincinin mənfisinin böyüyüdür. Formanı 1 mm böyütmək məsafədən 1 çıxmaq deməkdir; boş divar isə qatlanmış məsafədir.

Buna görə sahələr qəfəslər, kanallar və tədricən qalınlaşan divarlar üçün yaxşıdır: giroidin səthi "sinus cəmi sıfırdır" şərtidir, hissə boyunca 1-dən 3 mm-ə qalınlaşan divar isə hissə boyunca dəyişən bir ədəddir.

## Sahədən gövdəyə

`to_body(field, h)` sahəni `h` millimetr aralı nöqtələr şəbəkəsində nümunələr alır, yalnız səthə yaxın nöqtələri saxlayır (8 × 8 × 8 kərpicdən ibarət seyrək şəbəkə), və səthi **ikili konturlama** ilə qurur: hər səth xanasına bir təpə, səth müstəvilərinin kəsişdiyi yerdə, belə ki iti kənar bir voksel dəqiqliyinə qədər iti qalır. Səth qapalıdır və hər kənar dəqiq iki üçbucaqla paylaşılır; hesabat bunu deyir. Təxminən üç voksel qalınlığından incə xüsusiyyət sıxıla bilər, və belə olduqda hesabat cismin qapalı bərk olmadığını deyir, bunu gizlətmir.

Voksel ölçüsü dəqiqlikdir: 25 voksel eni olan kürənin həcmi bir faizin bir neçə yüzdə birindən çox olmayaraq dəqiqdir, divar isə yalnız öz voksellərinin dəqiqliyi qədər düzgündür. Şəbəkə nə qədər kobuddursa, o qədər sürətlidir.

## Həmişə eyni baytlar

Sahənin saatı və təsadüfi ədədi yoxdur. Giroidin sinus və kosinusu, və kitabxanadakı hər eksponensial, loqarifm və qüvvət sadə riyaziyyatdan hesablanır ki, Node, Chrome, Firefox və Safari eyni bitləri versin; şəbəkə sabit sırayla gəzilir, buna görə eyni skript eyni girişlərlə hər kompüterdə və istənilən sayda iş ipində bayt-bayt eyni meshləri və məlumat vərəqlərini verir. Bu test edilir, o cümlədən brauzerin Node ilə müqayisəsi.

## Növbəti addım

[Generator yazın](topic:write-a-generator) sahələrlə hissə qurur; [Mühəndislik kitabxanası](topic:engineering-library) onu ölçüləndirir.
