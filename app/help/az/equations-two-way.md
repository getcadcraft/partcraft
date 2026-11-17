---
title: Tənliklər iki istiqamətdə
summary: Parametri dəyişin və detal izləyir; asılı ədədə yeni ölçü yazın və PartCraft onun arxasındakı parametri hesablayır, bir neçəsi dəyişə biləcəkdə hansının dəyişəcəyini soruşur.
keywords: tənliklər, tərsinə həll, asılı ölçü, iki tərəfli, tərs, məqsədli axtarış, parametrlər, əlaqəli dəyərlər, hansı parametr
from: 82dc0269
---

**Extrude1 dərinliyi = thick + extra** kimi tənlik iki istiqamətdə işləyir.

## İrəli: parametri dəyişin

{{ui:Parametrlər}} nişanında `thick`-i 20-dən 30-a dəyişin. Extrude1-in dərinliyi 30 + extra olur və detal yenidən qurulur.

## Geriyə: asılı ədədi dəyişin

1. Tarixçədə "Extrude1"-ə klikləyin. Onun **Dərinlik (mm)** qutusu **ƒ** göstərir: tənlik onu idarə edir.
2. İstədiyiniz ölçünü yazın, məsələn `40`, və {{key:Enter}} basın.

PartCraft tənliyin arxasındakı parametri, lazım olduqca addımlarla, həll edir (`depth = hub_h`, `hub_h = disc_t + 50`: hündürlük yazsanız `disc_t` dəyişir). Status sətri nə dəyişdiyini deyir, məsələn extra 5-dən 15-ə dəyişdi.

Ədədi bir neçə və ya daha çox parametr idarə etdikdə, qutu **Hansı parametr dəyişməlidir?** soruşur və onları siyahılayır. Birinə klikləyin; qalanları öz dəyərlərini saxlayır. {{ui:Ləğv et}} heç nə dəyişmir.

Eskizdə də eyni işləyir: asılı ölçüyə iki dəfə klikləyin, dəyər yazın, {{key:Enter}} basın. Parametr cədvəlinin **Dəyər** sütununda da işləyir, özü ifadə olan parametr üçün.

## Mümkün olmadıqda

- Tam olmalı olan (nümunə sayı) və ya diapazonda qalmalı olan (360°-yə qədər bucaq) ədəd, heç nə dəyişməmiş rədd edilir.
- Yalnız sabit ədədlərdən ibarət tənlik (`=40`) dəyişdirilə bilən parametrə malik deyil: yazdığınız ədəd onu əvəz edir.
- Yazdığınız ölçünü verən heç bir parametr dəyəri yoxdursa, status sətri bunu deyir və heç nə dəyişmir.
- Yeni dəyərlə həll olunmayan eskiz əvvəlki dəyərlərini saxlayır və status sətri eskizin adını deyir.

Hər dəyişiklik, hansı istiqamətdə olursa-olsun, {{key:Mod+Z}} və {{key:Mod+Y}} üçün bir addımdır.
