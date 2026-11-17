---
title: Nod: bina model dengan pendawaian
summary: Sambungkan nombor kepada titik, titik kepada lengkung, lengkung kepada permukaan. Tukar satu nombor dan semua yang bergantung padanya dibina semula. Setiap nod juga ialah satu baris CraftScript, dan graf disimpan dalam fail.
keywords: nod, penyunting nod, skrip visual, parametrik, graf, wayar, port, bentuk bebas, freeform, nurbs, loft, ekstrud, putar, bulatan, lengkung, permukaan, siri, julat, rawak, senarai, skrip, craftscript, grasshopper
from: 3a4625de
---

Penyunting **Nod** membina geometri dengan menyambungkan kotak bersama. Setiap kotak (nod) melakukan satu tugas kecil: mencipta nombor, titik, bulatan atau loft. Anda menyambungkan hasil satu nod kepada input nod seterusnya, dan model akan mengikutinya apabila anda menukar nombor di permulaan.

Buka dari senarai ruang kerja: {{ui:Nod}}. Ia membuka tetingkap penyunting. Bahagian yang sudah mempunyai graf akan menunjukkannya apabila anda membuka ruang kerja. Ia ialah tetingkap di atas paparan 3D: seret bar tajuknya untuk mengalihkannya, seret penjurunya untuk menukar saiz.

## Pendawaian

1. Pilih nod daripada senarai di sebelah kiri (taip dalam kotak carian untuk menyempitkannya; <kbd>Enter</kbd> menambah padanan pertama). Ia muncul di tengah kanvas.
2. Seret dari titik **output** bulat di sebelah kanan satu nod ke titik **input** bulat di sebelah kiri nod lain. Titik bertukar hijau apabila ia sesuai dan merah apabila tidak; halakan penunjuk padanya untuk melihat sebabnya.
3. Input yang tiada apa-apa disambungkan menunjukkan kotak untuk nilai yang ditaip. Taip nombor dan tekan <kbd>Tab</kbd>: hasilnya dibina semula.
4. Bulatan kecil dalam bar tajuk nod ialah **matanya**. Nod dengan mata dihidupkan dilukis dalam paparan 3D: sebagai garis untuk lengkung, berlorek untuk permukaan, dan titik untuk titik.

Seret nod mengikut bar tajuknya. Seret latar belakang untuk pan, pusingkan roda tetikus untuk zum. <kbd>Delete</kbd> memadamkan nod yang dipilih. {{ui:Kemas}} menyusun nod dalam lajur, {{ui:Muat}} membawa semuanya ke dalam pandangan, {{ui:Buat asal}} dan {{ui:Buat semula}} melangkah melalui suntingan anda.

## Jenis dan unit

Port mempunyai jenis: nombor, ya/tidak, titik, vektor, lengkung, permukaan, jejaring, pepejal, atau "geometri" untuk mana-mana daripadanya. Titik boleh menyuap input vektor dan sebaliknya. Nombor membawa unit: **panjang** dalam milimeter dan **sudut** dalam darjah. Panjang tidak boleh menyuap sudut, dan panjang didarab dengan panjang (luas) ditolak, jadi wayar yang salah dihentikan apabila anda membuatnya.

Titik segi empat ialah **senarai**. Apabila senarai sampai ke input nilai tunggal, nod berjalan sekali bagi setiap item, dan hasilnya menjadi senarai. Senarai yang lebih pendek mengulang item terakhirnya. Contohnya, **Siri** ketinggian disambung ke **Alih** menghasilkan timbunan salinan.

## Pepejal dan Boolean sebagai nod

Kumpulan **Pepejal** membuat jasad tertutup daripada permukaan tepat yang sama seperti panel Permukaan: **Kotak pepejal**, **Silinder pepejal** dan **Sfera pepejal** (saiz dalam mm), **Union**, **Subtract** dan **Intersect** (pepejal kedua diambil daripada yang pertama; toleransi ialah sejauh mana segitiga enjin pepejal boleh berada daripada permukaan tepat), **Fillet antara muka** (muka mengikut nombornya dalam pepejal, 1 untuk yang pertama; satu jejari dan, jika lebih daripada 0, jejari di hujung), **Isipadu pepejal** (mm³) dan **Pepejal ke jejaring** (untuk melihat atau membakarnya). Pepejal mempunyai jenis port sendiri: satu titik atau nombor tidak boleh disambungkan ke input pepejal, dan titik kekal merah. Nod Boolean dan Fillet menggunakan enjin pepejal program, yang dimuatkan kali pertama penyunting dibuka.

## Ralat

Nod yang tidak dapat melakukan tugasnya menyatakan sebabnya di bawah namanya, dalam merah ("Jejari mesti lebih besar daripada sifar."), dan nod selepasnya menunggu. Mesej yang sama muncul sebagai Masalah dalam panel Masalah, supaya anda boleh mencarinya dari situ.

## Setiap nod ialah satu baris skrip

Tekan {{ui:Skrip}} untuk melihat graf sebagai CraftScript: satu baris bagi setiap nod, seperti `n3 = nd_circle(n2, n1, [0 0 1]);`. Sunting teks dan tekan {{ui:Buat graf daripada skrip ini}} untuk membawanya kembali sebagai graf. Fungsi `nd_` yang sama berfungsi dalam CraftScript di dalam PartCraft, jadi graf boleh dijalankan, digelung atau diuji di sana. Nombor rawak sentiasa memerlukan **benih**, supaya graf yang sama memberi hasil yang sama pada setiap komputer.

## Disimpan bersama fail

Graf disimpan dalam fail bahagian (bukan dalam sejarah, jadi Buat asal dalam penyunting mempunyai sejarahnya sendiri). Nod membuat lengkung, permukaan dan jejaring di sebelah pepejal: ia tidak mengubah ciri bahagian.
