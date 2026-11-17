---
title: Düyünlər: naqilləmə ilə model qurun
summary: Ədədləri nöqtələrə, nöqtələri əyrilərə, əyriləri səthlərə birləşdirin. Bir ədədi dəyişdikdə aşağı axındakı hər şey yenidən qurulur. Hər düyün həm də CraftScript sətridir və qrafik detal faylında saxlanılır.
keywords: düyünlər, düyün redaktoru, vizual skriptləmə, parametrik, qrafik, naqillər, portlar, sərbəst forma, freeform, nurbs, loft, ekstrüziya, fırlatma, dairə, əyri, səth, ardıcıllıq, aralıq, təsadüfi, siyahı, skript, craftscript, grasshopper
from: 3a4625de
---

**Düyünlər** redaktoru qutuları naqillə birləşdirərək həndəsə qurur. Hər qutu (düyün) kiçik bir iş görür: ədəd, nöqtə, dairə, loft yaradır. Bir düyünün nəticəsini növbətisinin girişinə birləşdirirsiniz və başlanğıcdakı ədədi dəyişdikdə model ardınca gəlir.

Onu iş sahəsi siyahısından açın: {{ui:Nodes}}. Redaktor pəncərəsi açılır. Artıq qrafiki olan detal iş sahəsi açıldıqda onu göstərir. Bu, 3D görünüş üzərində bir pəncərədir: başlıq çubuğundan sürükləyərək köçürün, künc tutacağından çəkərək ölçüsünü dəyişin.

## Naqilləmə

1. Soldakı siyahıdan düyün seçin (axtarış qutusuna yazaraq daraltın; <kbd>Enter</kbd> ilk uyğun olanı əlavə edir). Düyün kətanın ortasında görünür.
2. Bir düyünün sağındakı dairəvi **çıxış** nöqtəsindən digərinin solundakı dairəvi **giriş** nöqtəsinə sürükləyin. Uyğun gəldikdə nöqtə yaşıl, uyğun gəlmədikdə qırmızı olur; səbəbini görmək üçün üzərinə gəlin.
3. Heç nə birləşdirilməyən giriş yazılmış dəyər üçün qutu göstərir. Ədəd yazın və <kbd>Tab</kbd> basın: nəticə yenidən qurulur.
4. Düyünün başlıq çubuğundakı kiçik dairə onun **gözüdür**. Gözü açıq olan düyün 3D görünüşdə çəkilir: əyrilər xətt kimi, səthlər kölgəli, nöqtələr nöqtə kimi.

Düyünü başlıq çubuğundan sürükləyin. Fonu sürükləyərək sürüşdürün, təkərlə miqyası dəyişin. <kbd>Delete</kbd> seçilmiş düyünü silir. {{ui:Tidy}} düyünləri sütunlarla düzləndirir, {{ui:Fit}} hamısını görünüşə gətirir, {{ui:Undo}} və {{ui:Redo}} redaktələriniz arasında gəzir.

## Növlər və vahidlər

Portların növü var: ədəd, bəli/xeyr, nöqtə, vektor, əyri, səth, mesh, bərk cisim və ya bunların hər hansı biri üçün "həndəsə". Nöqtə vektor girişinə və geriyə qoşula bilər. Ədədlərin vahidi var: **uzunluq** millimetrlə, **bucaq** dərəcə ilə. Uzunluq bucaq girişinə qoşula bilməz, uzunluğun uzunluqla vurulması (sahə) isə rədd edilir, beləliklə səhv naqil çəkilərkən dayandırılır.

Kvadrat nöqtə **siyahıdır**. Siyahı tək dəyərli girişə çatdıqda düyün hər element üçün bir dəfə işləyir və nəticəsi siyahı olur. Qısa siyahı son elementini təkrarlayır. Məsələn, **Ardıcıllıq**-dan gələn hündürlüklər **Köçür**-ə verildikdə nüsxələrdən yığın alınır.

## Bərk cisimlər və Boolean-lar düyün kimi

**Bərk cisimlər** qrupu Səthlər panelindəki eyni dəqiq səthlərdən qapalı cisimlər yaradır: **Qutu bərk cismi**, **Silindr bərk cismi** və **Kürə bərk cismi** (ölçülər mm ilə), **Birləşdir**, **Çıxart** və **Kəsişdir** (ikinci bərk cisim birincidən götürülür; tolerantlıq bərk cisim mühərrikinin üçbucaqlarının dəqiq səthlərdən nə qədər uzaq ola biləcəyidir), **Üzlər arası yuvarlaqlaşdırma** (üzlər bərk cisimdəki nömrəsi ilə, 1 onun birincisi üçün; radius və, 0-dan böyük olduqda, sonunda radius), **Bərk cismin həcmi** (mm³) və **Bərk cismi mesh-ə çevir** (görmək və ya bişirmək üçün). Bərk cismin öz port növü var: nöqtə və ya ədəd bərk cisim girişinə qoşula bilməz və nöqtə qırmızı qalır. Boolean və Yuvarlaqlaşdırma düyünləri proqramın öz bərk cisim mühərrikindən istifadə edir; bu mühərrik redaktor ilk dəfə açılanda yüklənir.

## Xətalar

Düyün işini görə bilmirsə, adının altında qırmızı rəngdə səbəbini yazır ("Radius sıfırdan böyük olmalıdır."), sonrakı düyünlər gözləyir. Eyni mesaj Problemlər panelində də Problem kimi görünür, buradan onu tapa bilərsiniz.

## Hər düyün skript sətridir

Qrafiki CraftScript kimi görmək üçün {{ui:Script}} basın: hər düyün üçün bir sətir, məsələn `n3 = nd_circle(n2, n1, [0 0 1]);`. Mətni redaktə edin və qrafiki yenidən qrafik kimi gətirmək üçün {{ui:Make the graph from this script}} basın. Eyni `nd_` funksiyaları PartCraft-dakı CraftScript-də də işləyir, beləliklə qrafik orada işə salına, təkrarlana və ya sınana bilər. Təsadüfi ədədlər həmişə **seed** alır, buna görə eyni qrafik hər kompüterdə eyni nəticəni verir.

## Fayla yadda saxlanılır

Qrafik detal faylında saxlanılır (tarixçədə yox, buna görə redaktordakı {{ui:Undo}} ayrıdır). Düyünlər bərk cismin yanında əyrilər, səthlər və meshlər yaradır: detalın xüsusiyyətlərini dəyişmirlər.
