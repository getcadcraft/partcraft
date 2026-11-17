---
title: Mayenin axınının simulyasiyası (Axın tədqiqatı)
summary: Detalın daxilindəki kanallar boyunca və ya qutuda onun ətrafında axın: girişlər, çıxışlar, hava, su və ya öz mayeniz, sonra hərəkət edən kəsik müstəvidə sürət və təzyiq, axın xətləri, səth təzyiqi, təzyiq düşməsi, kütlə balansı, sürükləmə və qaldırma, həmçinin laminar üsulun nəyi deyə bildiyi və nəyi deyə bilmədiyi.
keywords: axın, CFD, maye, hesablama mayeləri dinamikası, axın simulyasiyası, hava, su, özlülük, sıxlıq, Reynolds ədədi, laminar, turbulent, təzyiq düşməsi, təzyiq itkisi, giriş, çıxış, qapaq, örtük, sürət, həcmi axın, litr/dəqiqə, statik təzyiq, axın xətləri, kəsik müstəvi, sürükləmə, qaldırma, sürükləmə əmsalı, qaldırma əmsalı, frontal sahə, xarici axın, daxili axın, boru, kanal, kollektor, sopla, qəfəs Boltzmann, qalıq, yığılma
from: 7dc75f29
---

**Axın** tədqiqatı mayenin detalınızın daxilindəki kanallar boyunca (**daxili**) və ya ətrafında (**xarici**) necə hərəkət etdiyini hesablayır. Standart olaraq o **laminardır, sıxılmazdır, izotermikdir və Nyuton tiplidir**: sıxlığı və özlülüyü sabit qalan mayenin hamar axını, istilik, turbulentlik və cazibə olmadan. Yalnız kəmiyyət nümunələri üçün nəzərdə tutulmuş **eksperimental** turbulent model də var (aşağıya bax). O, detalın şəbəkə nüvəsinin verdiyi adlandırılmış üzlər üzərində işləyir (bax: [Şəbəkə nüvəsi](topic:solid-kernels)).

**İş sahəsi** qutusunda **Simulyasiya** seçin, yoxdursa **Yeni tədqiqat** düyməsinə basın və **Növ** parametrini **Axın (CFD)** təyin edin. **Axın modeli** **Laminar** (standart) və ya **Turbulent (Spalart–Allmaras, eksperimental)** olur: aşağıda **Turbulent axın (eksperimental)** bölməsinə baxın. Tədqiqatın struktur parametrləri saxlanılır, ona görə geri qayıda bilərsiniz. Axın parametrləri detal faylında saxlanılır və hər dəyişiklik geri alına bilər.

## Mayeni və hüceyrələri seçin

- **Maye**: 20 °C-də hava və ya su, ya da öz sıxlığınızı (kg/m³) və dinamik özlülüyünüzü (Pa·s) daxil etdiyiniz **Fərdi**. Hava ideal qaz qanunu və Sutherland qanunundan istifadə edir (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); su IAPWS qiymətlərindən istifadə edir (998.21 kg/m³, 1.0016 mPa·s).
- **Hüceyrə ölçüsü**: mayenin həcmi bərabər kublarla doldurulur. Avtomatik ölçü üçün boş buraxın; panel şəbəkəni göstərir. Faydalı nəticələr üçün hər açılış və kanal **ən azı 8–10 hüceyrə enində** olmalıdır; kiçik hüceyrələr daha dəqiqdir, lakin yavaşdır (iki dəfə incə hüceyrə təxminən 16 dəfə çox iş deməkdir).
- **Divarlar**: **İnterpolyasiya** hüceyrələr arasında əyri divarları izləyir (standart); **Geri sıçrama** divarları kub pilləkənləri kimi qəbul edir.

## Detalın daxilində axın

Maye məkanı qapalı olmalıdır. Paneldə **Giriş** və **Çıxış** əlavə edin, sonra baxış pəncərəsində onların üzlərinə klikləyin:

1. **Açılışın ətrafındakı düz üz** — boru ucundakı kənar, port üzü. PartCraft orada açılışın deşiyini qapaqla bağlayır. Həmin üzdəki hər deşik həmin açılışa aiddir, ona görə giriş və çıxış eyni üzdə açılırsa, onlardan birinin üzərində nazik örtük modelləşdirin.
2. **Qapağın daxili üzü** — digər CAD alətlərində olduğu kimi: açılışın üzərində nazik lövhə modelləşdirin (ekstruziya) və mayeyə toxunan üzünü seçin.

Giriş üçün **sürət** (m/s, açılış boyunca bərabər, detala doğru) və ya **həcmi axın** (L/min) təyin edin. Çıxış üçün **statik təzyiq** təyin edin (Pa, manometrik). Əgər açılış açıq qalarsa və ya divar hüceyrədən nazik olarsa, daxili hissə xaricə qoşulur və həll "Qapalı maye məkanı yoxdur" mesajı ilə dayanır.

## Detalın ətrafında axın

**Axın** parametrini **Xarici** təyin edin, **Sürət**i, axının istiqamətini və qutunun axının əksinə (yuxarı), axın istiqamətində (aşağı) və yanlara nə qədər uzandığını təyin edin (boş: 1, 3 və 1 dəfə detalın ən böyük ölçüsü). Axının daxil olduğu qutu üzü giriş, çıxdığı üz 0 Pa-da çıxış, axın boyunca olan üzlər isə sürüşən üzlərdir. Çox kiçik qutu axını detalın yanından sıxır və sürükləməni artırır. **İstinad sahəsi** sürükləmə və qaldırma əmsallarının istifadə etdiyi sahədir (boş: detalın axın boyunca görünən frontal sahəsi); qaldırma, başqa istiqamət seçməsəniz, +Y boyunca ölçülür.

## Həll edin və nəticələri oxuyun

**Həll et** düyməsinə basın. Həll addım sayı, qalıq və qalıq qrafiki ilə arxa planda işləyir; **Dayandır** onu bitirir. O, qalıq (hər addımda sürət sahəsinin nə qədər dəyişdiyi) hədəfdən aşağı düşəndə və təzyiq düşməsi və ya sürükləmə sabitləşəndə dayanır. Əgər əvvəlcə addım həddinə çatarsa, panel qırmızı rənglə **Yığılmayıb** yazır: rəqəmlər sabit cavab deyil, son vəziyyətdir.

- **Kəsik müstəvi**: modelin içindən keçən müstəvidə sürət və ya statik təzyiq; normalını (X, Y və ya Z) seçin və sürgünü çəkərək onu hərəkət etdirin. Dəyərləri oxumaq üçün üzərinə gətirin.
- **Axın xətləri**: girişlərdən (daxili) və ya kəsik müstəvidə qutunun giriş ucu boyunca daraq xətti ilə (xarici).
- **Detal**: bərk, şəffaf (içəridəki müstəvini görmək üçün), səth təzyiqi və ya gizli.
- **Cədvəl**: Reynolds ədədi, təzyiq düşməsi (girişlərdə orta statik təzyiqdən çıxışlarda olan çıxılmaqla), hər açılışın axını və orta təzyiqi, detalın üzərindəki qüvvə, sürükləmə və qaldırma əmsalları və istinad sahəsi ilə (xarici), kütlə balansı (giriş və çıxış müqayisəsi), şəbəkə və həll edici.

## Turbulent axın (eksperimental)

**Axın modeli › Turbulent (Spalart–Allmaras, eksperimental)** zamana görə orta turbulent axını (sabit RANS) həll edir: Spalart–Allmaras modeli hər hüceyrədə burulğan özlülüyü verir, divarların yanındakı hüceyrələr isə incə təbəqəni həll etmək əvəzinə divar üçün Spalding qanunundan istifadə edir. O, hər yerdə tamamilə turbulentdir (laminar sahələr və keçid yoxdur).

**Dəqiqlik yoxlamalarından keçməyib.** Panel, nəticələr və cədvəl hər turbulent tədqiqatda bunu bildirir və xəbərdarlıq bağlana bilməz. Onu **keyfiyyət axın nümunələri** üçün istifadə edin — axının harada ayrıldığı, dövrə yaratdığı və ya sürətləndiyi yerlər — **layihə rəqəmləri üçün deyil**.

| Yoxlama | İstinad | Nəticə |
|---|---|---|
| Düz kanal sürtünməsi, birinci hüceyrə y⁺ 49 / 98-də | Dean korrelyasiyası | +3.3 % / +4.7 % |
| Həll edilmiş divarlı kanal (y⁺ ≈ 3), Re_τ 180: həcmi sürət | Moser, Kim & Mansour DNS | −1 % |
| Düz kanal, y⁺ 7–15 və ya 190–380 | Dean korrelyasiyası | +9 ilə +22 % |
| Kub hüceyrələrindən keçən boru sürtünməsi, tam inkişaf etmiş, eninə 10–30 hüceyrə | Colebrook | 30 ilə 34 % yüksək |
| Geriyə baxan pillənin arxasında yenidən birləşmə, pillə hündürlüyü başına 6–14 hüceyrə | Driver & Seegmiller, 6.26 pillə hündürlüyü | 21 ilə 39 % qısa |

Nəticələr daha incə hüceyrələrlə yalnız yavaş yaxşılaşır. Həll edildikdən sonra cədvəl **birinci hüceyrənin y⁺** dəyərini (divar hüceyrələri üzrə min, orta və max) göstərir və yoxlanılmış 1–400 diapazonundan kənarda xəbərdarlıq edir; təxminən 30–300-ə çalışın. **İşləmə müddəti:** avtomatik hüceyrələr bir laptop nüvəsində ən çox bir neçə dəqiqəlik hesablanır (panel şəbəkə və addım həddi üçün ən pis halı göstərir; kiçik boru 20 saniyədən az müddətdə sabitləşir). Hüceyrə ölçüsünün yarıya endirilməsi təxminən 16 dəfə çox vaxt tələb edir. Detala təsir edən qüvvələr açılışlar və ya qutu üzərindəki impuls balansından alınır.

**Bu günə qədər görülən iş:** divar hüceyrələri indi öz kəsici gərginliyini divar qanununa uyğunlaşdırır; bu, düz kanal nəticələrini dəyişmədən boru və pillə xətalarını yuxarıdakı rəqəmlərə endirdi. Bu, layihə rəqəmləri üçün kifayət deyildi. Növbəti addım divarlara yaxın daha incə hüceyrələrdir.

## Nəyi deyə bildiyi və deyə bilmədiyi

- **Laminar model** yalnız laminardır. Borularda axın təxminən 2 000–4 000 Reynolds ədədindən yuxarı turbulentləşir; kütlü cisimlərin arxasında izlər təxminən 50-dən yuxarı burulğanlar ayırmağa başlayır. Panel bu nöqtələrdə xəbərdarlıq edir. Turbulent axın üçün laminar nəticə təzyiq düşməsini aşağı qiymətləndirir və sürükləməni səhv hesablayır. Eksperimental turbulent model (yuxarıda) turbulent axını keyfiyyətcə əhatə edir; onun rəqəmləri hələ etibarlı deyil.
- **Üsul:** qəfəs Boltzmann üsulu (D3Q19, iki relaksasiya zamanlı toqquşma) sabit vəziyyətə qədər işlədilir. Daxildə bir qədər sıxılandır; PartCraft sıxlıq dəyişikliklərini bir neçə faizlə məhdudlaşdırır. Axın hüceyrələr üçün çox sürətlidirsə, başlamaqdan imtina edir və hüceyrələrin nə qədər kiçik olmalı olduğunu bildirir.
- **Yoxlanılıb:** detaldan keçən borudakı Hagen–Poiseuille axını (eninə 20 hüceyrədə təzyiq qradiyenti 1 % daxilində), Ghia et al. qapaqla idarə olunan boşluq (qapaq sürətinin 0.75 % daxilində) və Schäfer–Turek silindr etalonu (diametr başına 10 hüceyrədə sürükləmə 1 % daxilində).
- Modelləşdirilməyib: istilik ötürülməsi, layihə dəqiqliyi ilə turbulentlik (turbulent model eksperimentaldır), sərbəst səthlər, kavitasiya, cazibə, hərəkət edən hissələr, qeyri-Nyuton mayelər, kobud divarlar. Laboratoriya versiyası: vacib nəticələri başqa üsulla yoxlayın.
