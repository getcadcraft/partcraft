---
title: STEP faila atvēršana un tālāka izstrāde
summary: Ienest piegādātāja vai citas CAD programmas STEP modeli PartCraft kā cietu korpusu, kā jaunu detaļu vai pievienot pašreizējai detaļai, iestatīt, kurā virzienā ir augšā, un pievienot skices un elementus.
keywords: step, stp, ievešana, atvērt step, ap203, ap214, ap242, piegādātāja modelis, vienkāršs ciets korpuss, ievests ciets korpuss, augšējā ass, z uz augšu, y uz augšu, trijstūri, facetēts, mezgla step
from: ca0eca5f
---

PartCraft atver STEP failus (`.step` vai `.stp`, AP203, AP214 un AP242) kā **cietus korpusus**, uz kuriem varat zīmēt skices, griezt, urbt un apvienot ar saviem elementiem. Korpusam nav savas vēstures: nevarat mainīt izmērus, ar kuriem tas izveidots, varat tikai pievienot tam vai izgriezt no tā.

Šī versija visas detaļas veido ar tīkla kodolu, tāpēc STEP fails tiek **nolasīts kā trijstūri**: plakanas virsmas paliek plakanas, bet izliektās virsmas (cilindri, konusi, sfēras, tori, B-spline virsmas) kļūst par daudzām mazām plakanām. Tā tilpums atšķiras no precīzā tilpuma par dažām procenta daļām. Izliektas virsmas precīzi saglabāt prasa precīzu kodolu, kas šajā versijā nav pieejams.

## STEP faila atvēršana

1. Izvēlieties {{ui:Atvērt}} vai nospiediet {{key:Mod+O}} un izvēlieties failu `.step` vai `.stp`. Vai ievelciet to 3D skatā.
2. PartCraft nolasa failu un parāda, ko atrada, piemēram: "AP214 fails: 1 ciets ķermenis, 10 virsmu, nolasīts kā trijstūri." Zemāk redzams trijstūru skaits, visi elementi, kas bija jāatstāj ārpusē vai jāapvieno, un tas, vai rezultāts ir noslēgts.
3. Pārbaudiet **Augšā failā**. STEP fails norāda savu mērvienību (milimetros, collās, metros…); PartCraft to pārvērš milimetros, tāpēc **Vienības failā** rāda Milimetri, "fails tā saka". **Izmērs šeit** rāda, cik liels tas būs.
4. Izvēlieties {{ui:Atvērt kā korpusu}}, ja detaļa ir tukša, vai {{ui:Pievienot šai detaļai}} / {{ui:Jauna detaļa}}, ja detaļai jau ir elementi. Pievienojot tiek jautāts, ko **Izmantot to, lai** darītu: pievienotu, izgrieztu vai paturētu tikai pārklāšanos.

Vēsturē parādās elements **Imported1**, un statusa joslā, piemēram, rakstīts: "plate.step ir ciets korpuss: 57995.937 mm³, 6 plakanas virsmas skicēšanai."

## Mezgla STEP

Mezgls tiek ievests kā **viens korpuss**, kurā katra detaļa atrodas tur, kur to novieto fails ("3 detaļas, kas novietotas failā, tiek ievestas tur, kur tās stāv"). Detaļa, kas izmantota divreiz, tiek ievesta divreiz. Detaļu nosaukumi un mezgla koks netiek saglabāti.

## Iestatiet, kurā virzienā ir augšā

Vairums CAD programmu izmanto Z uz augšu; PartCraft izmanto Y uz augšu. Pēc noklusējuma PartCraft pagriež failu tā, lai tā Z šeit vērstos uz augšu. Ja detaļa ieradīsies guļot uz sāna, atlasiet **Imported1** un iestatiet **Augšā failā** uz **Y uz augšu**. **Vienības failā** un **Izmantot to, lai** var mainīt arī tur; katra izmaiņa ir viens atsaukšanas solis.

## Tālāka veidošana

- Noklikšķiniet uz korpusa plakanas virsmas un izvēlieties {{ui:Skice uz šīs virsmas}}. STEP modeļa plakanas virsmas saglabā savu vietu, kad korpuss tiek pārbūvēts.
- Pievienojiet griezumus, caurumus, izcilnus, masīvus un spoguļattēlus tāpat kā jebkurai detaļai.
- Pārbaudiet tā izmēru lodziņā **Detaļa**: tilpums, virsmas laukums, izmērs.

Noapaļojumi, nošķelumi un čaulas prasa precīzo kodolu, tāpat kā jebkurai detaļai šajā versijā ([Tīkla kodols](topic:solid-kernels)).

## Kur tas tiek glabāts

Trijstūri tiek glabāti **iekšā** failā `.partcraft.json`, tāpēc detaļas fails ir pašpietiekams: STEP fails vairs nav vajadzīgs.

## Ziņojumi

| Ziņojums | Ko tas nozīmē |
|---|---|
| '"part.stp" nav STEP fails (tas nesākas ar ISO-10303-21).' | Fails nav vienkāršs STEP teksts. Lūdziet sūtītājam AP203, AP214 vai AP242 STEP failu |
| "STEP failu nevarēja nolasīt: tā datu sadaļa trūkst vai ir bojāta." | Fails ir nogriezts vai bojāts. Nokopējiet to vēlreiz |
| "STEP failā nav ne cieta, ne virsmas korpusa: nav ko ievest." | Failā ir tikai zīmējumi, punkti vai dati. Lūdziet cietu korpusu |
| "Šis STEP fails ir par lielu (virs 60 MB), lai to šeit ievestu." un citi lasītāja ierobežojumi (ieraksti, virsmas, trijstūri) | Vienkāršojiet modeli avotā vai sūtiet detaļas pa vienai |
| "… bojātas rindas failā tika izlaistas." | Dažas rindas nevarēja nolasīt; pārējās tika ievestas. Pārbaudiet korpusu |
| "… virsmas nevarēja pārvērst trijstūros un tika izlaistas." | Šīs virsmas atstāj caurumus, ko PartCraft mēģina aizpildīt; ja korpuss nav noslēgts, tas netiek pievienots |
| "… tādu virsmu, ko nenolasa (…), tika izlaistas." | Retāks virsmas veids. Lūdziet modeli ar vienkāršām vai B-spline virsmām |
| "Tas nav noslēgts …" | Virsmas neveido noslēgtu cietu korpusu (virsmu modelis vai izlaistas virsmas). PartCraft parāda atveres un nepievieno neko |

## Ierobežojumi

- Izliektas virsmas tiek zīmētas un mērītas kā plakanas facetes, kā katrai detaļai šajā versijā. PartCraft saglabā faila pašas plakanās virsmas, cilindrus, konusus, sfēras un torus kopā ar korpusu, tāpēc {{ui:Eksportēt}} › {{ui:STEP AP242 (precīzs cietais ķermenis)}} tos ieraksta atpakaļ kā īstas virsmas, caurumus kā caurumus, kopā ar elementiem, ko pievienojāt. Virsmas, ko fails norāda kā splainus, izvilkumus vai rotācijas virsmas, eksportā paliek facetes. Detaļa, kas saglabāta pirms 0.9.1, nesaglabā virsmas: lai tās iegūtu, atveriet STEP failu vēlreiz.
- {{ui:Eksportēt}} › {{ui:DXF no skices vai plakanas virsmas}} ar izvēlētu plakanu virsmu ieraksta faila apaļo caurumu kā īstu riņķi.
- Krāsas, korpusu nosaukumi, mezgla struktūra un PMI (failā esošās pielaides) netiek nolasīti.
- Papildus STEP PartCraft atver STL, OBJ un 3MF tīklus ([STL, OBJ vai 3MF atvēršana](topic:open-meshes)) un `.3dm` failus ([.3dm modeļa atvēršana](topic:open-3dm-files)) kā cietus korpusus. IGES un citu programmu oriģinālformāti netiek atbalstīti.
- Detaļa ar STEP cietu korpusu, kas ievests versijā ar precīzo kodolu, saglabā STEP tekstu; šī versija šo elementu izlaiž (nav pieejams). Atveriet STEP failu vēlreiz, lai ievestu to kā trijstūrus.
