---
title: Lokšņu metāls: atloki un plakanais raksts
summary: Sāciet lokšņu metāla detaļu no skices (plakana plāksne vai saliekts profils), reizi iestatiet tās biezumu, liekuma rādiusu un K-koeficientu, saliecet atlokus no tās malām ar liekuma atvieglojumiem un izlīdziniet to DXF griešanai.
keywords: plakanais raksts, izlocīt, attīstījums, attīstītais garums, liekuma pielaide, liekuma līnija, dxf lāzeram, lāzergriešana, lokšņu metāls, pamata atloks, malas atloks, atloks, liekums, liekuma rādiuss, K-koeficients, biezums, kalibrs, atvieglojums, liekuma atvieglojums, kanāls, kronšteins, korpuss, saliekta loksne
from: 144bd0f6
---

:::note
**Šajā versijā vēl nav izveidots.** Lokšņu metālam vajadzīgs precīzs ģeometrijas kodols, kāda šai PartCraft versijai nav: tā visas detaļas veido ar tīkla kodolu. [Kas vēl nav izveidots](topic:not-built-yet) saka, ko darīt tā vietā. Pārējā šī lapa apraksta, kā tas darbojas ar precīzu kodolu.
:::

Lokšņu metāla detaļas sākas ar **Pamata atloku**. Tas nosaka loksni visai detaļai: tās **biezumu**, **iekšējo liekuma rādiusu** un **K-koeficientu**. Katrs nākamais **Malas atloks** liecas ar tiem pašiem skaitļiem, tāpēc detaļa paliek viena loksne, ko var izlocīt. Abiem vajadzīgs **precīzs kodols** (skatiet [Tīkla kodols](topic:solid-kernels)).

## Sākt ar pamata atloku

1. Uzzīmējiet skici. Plakanai plāksnei izmantojiet **slēgtu profilu** (taisnstūri vai jebkuru slēgtu kontūru ar caurumiem). Saliektai loksnei izmantojiet **vienu atvērtu līniju ķēdi**, piemēram, L, U vai Z formu, kas zīmēta kā loksnes malas skats.
2. Vēstures elementos atlasiet skici.
3. Elementu grupā atveriet {{ui:Vairāk}} un izvēlieties {{ui:Pamata atloks}}.

Labajā panelī:

- **Biezums (mm)** ir loksnes biezuma kalibrs.
- **Liekuma rādiuss (mm)** ir katra liekuma iekšējais rādiuss. 0 dod asu iekšējo stūri; ārpuse tomēr saliecas ar rādiusu, kas vienāds ar vienu biezumu.
- **K-koeficients** norāda, kur neitrālais slānis atrodas loksnē, no 0 (iekšējā virsma) līdz 0.5 (vidus). Tas nosaka, cik gara ir loksne, kad to izlīdzina. 0.44 ir noklusējums; jūsu darbnīca vai materiālu piegādātājs var dot savu.
- **Dziļums (mm)** ir attālums, cik tālu saliektais profils iziet ārpus skices plaknes. Plāksne to ignorē.
- **Biezums ārpus liekumiem**: atvērtais profils ir viena loksnes virsma. Pēc noklusējuma biezums iet pirmā liekuma iekšpusē, tāpēc zīmētās līnijas ir kanāla ārpuse. Atzīmējiet to, lai līnijas novietotu iekšpusē. Rezultāts ir tāds pats neatkarīgi no tā, no kura gala zīmējāt.

Katrs atvērtas ķēdes stūris kļūst par liekumu. Līnija, kas par īsu, lai turētu savus liekumus, to pasaka, norādot vajadzīgo garumu.

## Malas atloka liekšana

1. Noklikšķiniet uz taisnas malas loksnes augšējā vai apakšējā virsmā (garās malas, nevis šaurās).
2. Izvēlieties {{ui:Vairāk}} › {{ui:Malas atloks}}. Ja nav atlasīta mala, PartCraft gaida, kamēr noklikšķināsiet uz vienas; {{key:Esc}} atceļ.

Atloks liecas uz augšu no šīs malas virsmas ap loksnes iekšējo rādiusu un pēc tam ir taisns. Panelī:

- **Leņķis (°)** ir, cik tālu tas liecas, no 1 līdz 180. 90 ir taisns atloks.
- **Garums (mm)** ir taisnā kāja aiz liekuma.
- **Liekt otrādi** liec to no otras virsmas (uz leju, nevis uz augšu).
- **Nobīde sākumā** un **Nobīde beigās** saīsina atloku no katra malas gala.
- **Liekuma atvieglojums**: ja gals ir nobīdīts, blakus tam loksnē izgriež spraugu, lai liekums tur neplēstu metālu. **Atvieglojuma platums** nosaka spraugas platumu; tās dziļums ir liekuma rādiuss plus biezums. Izvēlieties **Nav**, lai stūris paliktu neizgriezts.

Lai vēlāk mainītu malu, panelī nospiediet {{ui:Izvēlēties}} un noklikšķiniet uz citas.

:::tip
Biezumam un rādiusam izmantojiet parametrus (skatiet [Parametri un vienādojumi](topic:parameters)), lai biezuma maiņa uzreiz atjauninātu visus atlokus.
:::

## Izlīdzināšana

Abi paneļi beidzas ar **Plakano rakstu**. Nospiediet {{ui:Izlīdzināt}}:

- Priekšskatījumā redzama izlocīta loksne, katra liekuma centra līnija ir punktēta.
- **Izmērs** un **Laukums** ir plakanās pamatnes izmēri.
- Katrs liekums ir uzskaitīts ar savu virzienu (**uz augšu** vai **uz leju**, skatoties no pamata atloka skices puses), leņķi un iekšējo rādiusu.

Katrs liekums ņem garumu no loksnes neitrālā slāņa caur to, **liekuma pielaidi**: leņķis (radiānos) × (iekšējais rādiuss + K-koeficients × biezums). Tātad 90° liekums 2 mm loksnei ar 2 mm rādiusu un K-koeficientu 0.44 pievieno 4.52 mm plakanas loksnes.

Plakanai plāksnei caurumi, griezumi un liekuma atvieglojumi parādās plakanajā rakstā tur, kur tie īstenībā atrodas, arī caurumi caur atloku.

Lai izgrieztu daudz, zem plakanā raksta nospiediet {{ui:Izvietot loksnēs…}}: skatiet [Izvietot plakanās detaļas loksnēs](topic:nest-flat-parts). Saliekts pamata atloks izkārtojas kā viens taisnstūris: tā attīstītais garums × tā dziļums, ar liekuma līniju katram stūrim.

{{ui:Saglabāt DXF}} saglabā plakano rakstu lāzeram, presei vai ūdensstrūklai milimetros:

- kontūra slānī **OUTLINE** kā līnijas, loki un riņķi;
- liekuma līnijas slānī **BEND**, punktētas;
- piezīme katram liekumam slānī **BEND_NOTES**, piemēram, "UP 90° R2".

Ja kaut ko mainīsiet, plakanais raksts pazudīs; nospiediet {{ui:Izlīdzināt}} vēlreiz, lai iegūtu jaunu.

:::note
Pirms griešanas pārbaudiet K-koeficientu ar savu darbnīcu: plakanā garums no tā ir atkarīgs, un tas mainās atkarībā no materiāla, biezuma un instrumenta.
:::

## Ziņojumi

- **Lokšņu metālam pirms tā vajadzīgs pamata atloks** — malas atloks tika pievienots pirms jebkura pamata atloka. Pārvietojiet to zem viena vai vispirms pievienojiet pamata atloku.
- **Malas atlokam vajadzīga taisna mala** — atloki liecas tikai pa līnijām; liektas malas vēl nevar izmantot.
- **Šī mala neatrodas uz loksnes biezuma virsmas** — mala pieder virsmai, kas nav loksnes augšējā vai apakšējā virsma (piemēram, cauruma siena). Izvēlieties malu augšējā vai apakšējā virsmā.
- **Nobīdes neatstāj nekā no malas** — abas nobīdes kopā ir visa mala vai vairāk.
- **Malas atloki saliektā pamata atlokā vēl nevar izlīdzināt** — sāciet no plakanas plāksnes un saliecat visu uz augšu ar malas atlokiem, kas izlocās.
- **Griezumi un caurumi, kas izveidoti pēc saliekta pamata atloka, vēl netiek rādīti tā plakanajā rakstā** — saliekta profila plakanais raksts ir tikai tā attīstītais taisnstūris.
