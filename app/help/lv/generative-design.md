---
title: Formas veidošana no slodzēm (Ģeneratīvā darba vide)
summary: Izvēlieties virsmas, kas ir turētas un slogotas, apgabalus, ko saglabāt un atstāt brīvu, mērķa tilpumus un materiālus, un ģenerējiet rezultātus: visstingrākās formas katram tilpumam, atkārtoti pārbaudītas kā cieti ķermeņi, salīdzinātas tabulā un lejupielādētas kā STL, STEP vai jauna detaļa.
keywords: ģeneratīvais dizains, topoloģijas optimizācija, SIMP, vieglums, režģis, organiska forma, rezultāti, salīdzināt, masa, tilpuma daļa, saglabāt, saglabāt cietu, šķērslis, atstāt brīvu, projektēšanas telpa, minimālais elementa izmērs, STL, 3D drukāšana
from: 5b91fa8e
---

Ģeneratīvā darba vide noņem materiālu, kas slodzēm nav vajadzīgs. Jūs norādāt, kur detaļa ir turēta un slogota, kas jāsaglabā un kas jāatstāj brīvs; PartCraft atrod visstingrāko formu katram mērķa tilpumam (**topoloģijas optimizācija**), katru no tām atkārtoti pārbauda kā cietu ķermeni ar reālo materiālu un parāda rezultātus blakus. Tas darbojas ar nosauktajām virsmām, ko detaļai piešķir tīkla kodols (skatiet [Tīkla kodols](topic:solid-kernels)).

Izvēlieties **Ģeneratīvā** lodziņā **Darba vide**. Jūsu detaļa netiek mainīta; pētījums tiek saglabāts detaļas failā.

## Pētījuma iestatīšana

1. Nospiediet **Jauns pētījums** labajā panelī.
2. **Telpa**: *Detaļa, kāda tā ir* noņem materiālu no jūsu detaļas; *Kaste ap detaļu* veido formu kastē, kas ir lielāka par detaļu par **Kastes rezervi**.
3. **Elementa izmērs**: atstājiet tukšu automātiskam izmēram (aptuveni 8,000 kubi) vai ierakstiet savu. Smalkāki izmēri dod smalkākas formas un prasa ilgāku laiku.
4. **Minimālais elements**: elementi, kas ir plānāki par aptuveni divreiz šo vērtību, neveidojas. Tukšs nozīmē pusotru kubu.
5. Atzīmējiet no viena līdz sešiem **Mērķa tilpumiem** (projektēšanas telpas daļa, ko forma drīkst aizpildīt) un no viena līdz četriem **Materiāliem**. Katrs tilpums tiek ģenerēts vienreiz; katrs materiāls tiek pārbaudīts uz šīs formas (visstingrākā forma nav atkarīga no materiāla, bet tās masa, spriegums un drošības koeficients ir).

## Mērķi

- {{ui:Fiksēts}}: noklikšķiniet uz virsmām, kas ir turētas. **Virsma bez berzes** no panelī **Pievienot** saraksta notur virsmu tikai pāri sev (izmantojiet to simetrijas plaknēm).
- {{ui:Spēks}}: noklikšķiniet uz slogotajām virsmām, pēc tam ierakstiet kopējo spēku un izvēlieties tā virzienu panelī. **Spiediens** atrodas sarakstā **Pievienot**.
- {{ui:Saglabāt}}: noklikšķiniet uz virsmām, kuru apkārtnei jāpaliek cietai, un iestatiet, cik dziļi (**Saglabāt cietu dziļumā**) — piemēram, ap skrūvju caurumiem. Virsmas, ko fiksējat vai slogojat, vienmēr tiek saglabātas.
- {{ui:Šķērslis}}: noklikšķiniet uz virsmām, kuru apkārtnei jāpaliek tukšai, un iestatiet, cik tālu (**Atstāt tukšu attālumā**) — vieta vārpstai vai instrumentam.

Pēc virsmu noklikšķināšanas nospiediet **Pabeigt atlasi** vai {{key:Esc}}. Zaļie un sarkanie toņi parāda apgabalus.

## Ģenerēšana un salīdzināšana

Nospiediet {{ui:Ģenerēt}}. Panelī redzams progress un atlikušais laiks; **Apturēt** atceļ. Katrs rezultāts parādās tabulā **Rezultāti**: mērķa tilpums, materiāls, **masa**, **lielākais spriegums**, **lielākā pārvietojums** un **drošības koeficients** (tecēšanas robeža ÷ spriegums), visi no pabeigtās formas atkārtota aprēķina kā ciets kubu režģis ar reālo materiālu.

Izvēlieties rezultātu, lai to redzētu skatā (detaļa ir paslēpta; atzīmējiet **Rādīt detaļu caur to**, lai redzētu abus). Zem tabulas: cik iterācijas tas prasīja un vai tas nostabilizējās, tā stingums kā ciets ķermenis salīdzinājumā ar optimizētāja paša rādītāju un tā virsma.

## Rezultāta izmantošana

- **STL**: slēgts trijstūru tīkls, gatavs 3D drukāšanai.
- **STEP (faceted)**: tā pati virsma kā STEP ciets ķermenis, veidots no plakanām virsmām.
- **Jauns detaļas fails**: PartCraft detaļa, kuras viens elements ir rezultāts kā importēts ciets ķermenis. Atveriet to, lai skicētu uz tās, izgrieztu caurumus vai pārbaudītu darba vidē Simulācija. Tā ir facetēta (tūkstošiem plakanu virsmu), nevis rediģējama forma.
- **Pievienot šai detaļai** savieno rezultātu ar detaļu; tā ir pieejama tikai kastes projektēšanas telpai (ja telpa ir pati detaļa, rezultāts atrodas detaļas iekšpusē).

**Jauns detaļas fails** un **Pievienot šai detaļai** šajā versijā vēl nav izveidoti: rezultāts kļūst par importētu cietu ķermeni, kam vajadzīgs precīzs kodols. STL un STEP (faceted) lejupielādes darbojas.

## Cik tam uzticēties

- Tas optimizē **stingumu** dotajam tilpumam. Vēl nav spriegumu ierobežojumu un ražošanas noteikumu (pārkari, frēzēšanas virzieni, minimālie caurumu izmēri): pārbaudiet izvēlēto rezultātu [Simulācijā](topic:simulation) un pielāgojiet.
- Plāni elementi, kas ir viens vai divi kubi plati, ir aptuveni: smalkām detaļām izmantojiet mazāku elementa izmēru.
- Metode ir SIMP ar blīvuma filtru, sliekšņa projekciju un optimalitātes kritēriju atjauninājumiem; norādītais spriegums un novirze ir rezultātam kā kubiem, kas ir godīgi, bet rupji asos stūros.

## Saistītie

- [Pārbaudīt spriegumu un novirzi (Simulācija)](topic:simulation)
- [Eksportēšana drukāšanai, STEP un DXF](topic:export-files)
- [Kas vēl nav izveidots](topic:not-built-yet)
