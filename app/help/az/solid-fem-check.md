---
title: Solid FEM: bir detalın gərginlik yoxlanışı
summary: Solid FEM əlavəsini açın, detalı mesh-ə bölün, 3D görünüşdə sabit üzləri və yükü seçin, həll edin və modeldə yerdəyişməni və von Mises gərginliyini oxuyun.
keywords: solid fem, sonlu elementlər, fea, gərginlik, von mises, yerdəyişmə, sabit üz, yük, təzyiq, ağırlıq, təbii tezlik, rəqs forması, mesh, əlavə
from: 8b7e6ba2
---

## Nə edəcəksiniz

Yük altında bir bərk detalı yoxlayın: harada hərəkət edir və gərginlik harada ən yüksəkdir. Tədqiqat xətti və elastikdir, buna görə yoxlama vasitəsidir; nəticələri mühəndisiniz nəzərdən keçirir.

## Addımlar

1. {{ui:Parametrlər}} › {{ui:Əlavələr}} seçin və {{ui:Solid FEM}}-i açın (siz açana qədər söndürülüdür). Sağ paneldə {{ui:Solid FEM}} sekməsini açın.
2. {{ui:Material}} altında birini seçin, ya da {{ui:Fərdi}} seçib Puasson əmsalını, sıxlığı və axıcılıq həddini yazın.
3. {{ui:Sabit üzləri əlavə et}} basın, 3D görünüşdə tutulan üzlərə klikləyin, sonra {{ui:Seçimi bitir}} basın.
4. {{ui:Qüvvə əlavə et}}, {{ui:Təzyiq əlavə et}} və ya {{ui:Ağırlıq əlavə et}} ilə yük əlavə edin və onun üzlərini eyni qayda ilə seçin.
5. {{ui:Detalı mesh-ə böl}} basın, sonra {{ui:Həll et}}. Tezlik istəyirsinizsə, əvvəlcə {{ui:Tədqiqat}} altında {{ui:Təbii tezliklər}} seçin.
6. {{ui:Nəticələr}} və {{ui:Xəbərdarlıqlar}} oxuyun, sonra von Mises gərginliyini, yerdəyişməni və ya rəqs formasını modelə çəkmək üçün {{ui:Modeldə göstər}} basın; {{ui:Qrafiki sil}} onu silir.

## Qeydlər

- Səhifə müəyyən sayda elementə qədər həll edir; status sətri elementin ölçüsünün çox incə olduğunu bildirir.
- Sabit üzlərdə, yük nöqtələrində və kəskin künclərdə gərginlik mesh incəldikcə artır. Pik dəyərə güvənməzdən əvvəl mesh-i incəldin və müqayisə edin.
- Hər dəyişiklik bir geri alma addımıdır və parametrlər detal faylında saxlanılır.
- Axıcılıq və kontakt tədqiqatları üçün bax: [Gərginlik və əyilmənin yoxlanışı](topic:simulation).
