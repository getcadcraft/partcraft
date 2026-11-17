---
title: Lakštinis metalas: atlenkimai ir išklotinė
summary: Pradėkite lakštinio metalo detalę nuo eskizo (plokščios plokštės ar lenkto profilio), kartą nustatykite storį, lenkimo spindulį ir K koeficientą, atlenkite briaunas nuo jos kraštų su lenkimo išpjovomis ir išklokite ją plokštumoje kaip DXF pjovimui.
keywords: išklotinė, išlankstyti, išvystinė, išvystinis ilgis, lenkimo priedas, lenkimo linija, dxf lazeriui, lazerinis pjovimas, lakštinis metalas, pagrindinis atlenkimas, briaunos atlenkimas, atlenkimas, lenkimas, lenkimo spindulys, k koeficientas, storis, kalibras, išpjova, lenkimo išpjova, kanalas, laikiklis, korpusas, lenktas lakštas
from: 144bd0f6
---

:::note
**Dar nepastatyta šioje versijoje.** Lakštiniam metalui reikia tikslaus geometrijos branduolio, kurio ši PartCraft versija neturi: ji visas detales kuria tinklelio branduoliu. [Kas dar nepastatyta](topic:not-built-yet) nurodo, ką daryti vietoj to. Likusi šio puslapio dalis aprašo, kaip tai veikia su tikslaus branduolio.
:::

Lakštinio metalo detalės prasideda nuo **Pagrindinė atlenkta briauna**. Ji nustato lakštą visai detalei: jos **storį**, **vidinį lenkimo spindulį** ir **K koeficientą**. Kiekviena vėlesnė **Briaunos atlenkimas** lenkiasi su tais pačiais skaičiais, todėl detalė lieka vienu lakštu, kurį galima išlankstyti. Abiem reikia **tikslaus branduolio** (žr. [Tinklelio branduolys](topic:solid-kernels)).

## Pradėkite nuo pagrindinės atlenkiamos briaunos

1. Nubraižykite eskizą. Naudokite **uždarą kontūrą** plokščiai plokštei (stačiakampį ar bet kokį uždarą kontūrą su skylėmis). Naudokite **vieną atvirą linijų grandinę** lenktam lakštui, pavyzdžiui L, U ar Z, nubraižytą kaip lakšto šoninį vaizdą.
2. Pažymėkite eskizą elementų istorijoje.
3. Atverkite {{ui:Daugiau}} grupėje Elementai ir pasirinkite {{ui:Pagrindinė atlenkta briauna}}.

Dešiniajame skydelyje:

- **Storis (mm)** yra lakšto kalibras.
- **Lenkimo spindulys (mm)** yra vidinis kiekvieno lenkimo spindulys. 0 duoda aštrų vidinį kampą; išorė vis tiek lenkiasi su spinduliu, lygiu vienam storiui.
- **K koeficientas** nurodo, kur neutralus sluoksnis yra lakšto viduje, nuo 0 (vidinis paviršius) iki 0.5 (vidurys). Jis nulemia, koks ilgas lakštas išklotas plokštumoje. 0.44 yra numatytasis; jūsų dirbtuvės ar medžiagos tiekėjas gali duoti savąjį.
- **Gylis (mm)** yra, kiek lenktas profilis išeina iš eskizo plokštumos. Plokštė jo nepaiso.
- **Storis už lenkimų**: atviras profilis yra vienas lakšto paviršius. Pagal numatymą storis eina į pirmojo lenkimo vidinę pusę, todėl linijos, kurias nubraižėte, yra kanalo išorė. Pažymėkite, kad linijos būtų vidinėje pusėje. Atsakymas tas pats, iš kurio galo braižėte.

Kiekvienas atviros grandinės kampas tampa lenkimu. Per trumpa linija, kad talpintų savo lenkimus, apie tai praneša ir nurodo reikiamą ilgį.

## Lenkti briaunos atlenkimą

1. Spustelėkite tiesią lakšto viršutinio ar apatinio paviršiaus briauną (ilgas briaunas, ne plonas).
2. Pasirinkite {{ui:Daugiau}} › {{ui:Briaunos atlenkimas}}. Jei briauna nepasirinkta, PartCraft laukia, kol spustelėsite; {{key:Esc}} atšaukia.

Atlenkimas lenkiasi aukštyn nuo tos briaunos paviršiaus aplink vidinį lakšto spindulį, o paskui tiesiai eina. Skydelyje:

- **Kampas (°)** – kiek jis lenkiasi, nuo 1 iki 180. 90 yra kvadratinis atlenkimas.
- **Ilgis (mm)** – tiesi atkarpa po lenkimo.
- **Lenkti kita kryptimi** – lenkia nuo kito paviršiaus (žemyn, o ne aukštyn).
- **Poslinkis pradžioje** ir **Poslinkis pabaigoje** sutrumpina atlenkimą nuo kiekvieno briaunos galo.
- **Lenkimo išpjova**: kai galas perkeltas, lakšte šalia jo išpjaunamas tarpas, kad lenkimas ten neplėštų metalo. **Išpjovos plotis** nustato tarpo plotį; jo gylis yra lenkimo spindulys pridėjus storį. Pasirinkite **Nėra**, kad kampas liktų neišpjautas.

Kad vėliau pakeistumėte briauną, skydelyje paspauskite {{ui:Pasirinkti}} ir spustelėkite kitą.

:::tip
Storiui ir spinduliui naudokite parametrus (žr. [Parametrai ir lygtys](topic:parameters)), kad keičiant kalibrą iš karto atsinaujintų visi atlenkimai.
:::

## Išklokite plokštumoje

Abu skydeliai baigiasi **Išklotinė**. Paspauskite {{ui:Išklioti plokštumoje}}:

- Peržiūra rodo išlankstytą lakštą, kiekvieno lenkimo centro linija punktyrinė.
- **Dydis** ir **Plotas** yra plokščio ruošinio.
- Kiekvienas lenkimas išvardytas su kryptimi (**aukštyn** arba **žemyn**, žiūrint nuo pagrindinės briaunos eskizo pusės), kampu ir vidiniu spinduliu.

Kiekvienas lenkimas per save paima neutralaus sluoksnio ilgį, **lenkimo priedą**: kampas (radianais) × (vidinis spindulys + K koeficientas × storis). Taigi 90° 2 mm lakšto lenkimas su 2 mm spinduliu ir K koeficientu 0.44 prideda 4.52 mm plokščio lakšto.

Ant plokščios plokštės skylės, pjūviai ir lenkimo išpjovos rodomos išklotinėje ten, kur jos tikrai yra, įskaitant skyles per atlenkimą.

Norėdami iškirpti daug, paspauskite {{ui:Išdėstymas lakštuose…}} po išklotine: žr. [Išdėstyti plokščias detales ant lakštų](topic:nest-flat-parts). Lenkta pagrindinė atlenkiama briauna išklojama kaip vienas stačiakampis: jos išvystinis ilgis × jos gylis, su lenkimo linija kiekvienam kampui.

{{ui:Įrašyti DXF}} įrašo išklotinę lazeriui, presui ar vandens pjoviklui, milimetrais:

- kontūras sluoksnyje **OUTLINE**, kaip linijos, lankai ir apskritimai;
- lenkimo linijos sluoksnyje **BEND**, punktyrinės;
- pastaba apie kiekvieną lenkimą sluoksnyje **BEND_NOTES**, pavyzdžiui „UP 90° R2“.

Pakeitus ką nors, išklotinė dingsta; norėdami naujos, vėl paspauskite {{ui:Išklioti plokštumoje}}.

:::note
Prieš pjaudami patikrinkite K koeficientą su dirbtuvėmis: išklotinės ilgis nuo jo priklauso, o jis kinta pagal medžiagą, storį ir įrankius.
:::

## Pranešimai

- **Lakštiniam metalui prieš tai reikia pagrindinės atlenkiamos briaunos** – briaunos atlenkimas buvo pridėtas prieš bet kokią pagrindinę atlenkiamą briauną. Perkelkite jį žemiau jos arba pirmiau pridėkite pagrindinę atlenkiamą briauną.
- **Briaunos atlenkimui reikia tiesios briaunos** – atlenkimai lenkiami tik išilgai linijų; lenktos briaunos kol kas negali jų priimti.
- **Ta briauna nėra lakšto storio paviršiuje** – briauna priklauso paviršiui, kuris nėra lakšto viršus ar apačia (pavyzdžiui skylės siena). Pasirinkite viršutinio ar apatinio paviršiaus briauną.
- **Poslinkiai nepalieka nieko iš briaunos** – abu poslinkiai kartu sudaro visą briauną ar daugiau.
- **Briaunos atlenkimai ant lenktos pagrindinės atlenkiamos briaunos dar negali būti išklotos plokštumoje** – pradėkite nuo plokščios plokštės ir visus lenkimus padarykite briaunų atlenkimais, kurie išsilanksto.
- **Pjūviai ir skylės, padaryti po lenktos pagrindinės atlenkiamos briaunos, dar nerodomi jos išklotinėje** – lenkto profilio išklotinė yra tik jo išvystinis stačiakampis.
