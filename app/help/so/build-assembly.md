---
title: Dhis isku-dhis oo leh joint-yo
summary: Bilow isku-dhis qayb ka bilaabaneysa, geli nuqullo iyo faylal qayb kale, ku xir rigid, revolute, slider, cylindrical, planar, ball iyo pin-in-slot joint-yo wejiyada siman, joint-yada dhidibbada dhexe ku dhig, tafatir qayb meeshay, oo kaydi isku-dhiska.
keywords: isku-dhis, mate, mates, joint, loop, closed loop, linkage, four-bar, mechanism, rigid, revolute, slider, cylindrical, planar, ball, ball joint, spherical, pin slot, pin in slot, insert component, grounded, fixed, concentric, coincident, edit part, in context, partcraft-asm
from: a53bbfef
---

Isku-dhis wuxuu isku geeyaa qaybaha. PartCraft gudihiisa, **joint-yada** ayaa qaybaha dhigaa: joint kasta wuxuu ku yaal wejiga siman ee laba qaybood kasta, oo wuxuu saarayaa midba midka kale wejiga ka soo horjeeda. Joint revolute wuxuu u ogolaanayaa qayb inay wareegto, slider-ku wuxuu u ogolaanayaa inay siibto, joint rigid-ku wuu hayaa.

## Bilow isku-dhis

1. Dhis qayb leh jidh (qayb madhan ma gali karto isku-dhis: "Marka hore dhis jidh, kadibna geli isku-dhiska.").
2. Dooro {{ui:Isku-dhis}} qalabka qalabka.

Farriinta xaaladda ayaa sheegaysa "Isku-dhis waa la bilaabay, Part1 waa qaybta aasaasan. Geli qaybo dheeraad ah ({{ui:Ku dar nuqul}}, {{ui:Geli}} ama {{ui:Laabid}}), kadibna ku xir joint-yada." Bidixda panel-ku hadda wuxuu liistaa **Qaybaha** iyo **Joint-yada**, qalabka qalabka ayaa muujinaya qalabka isku-dhiska. Qalabka sawir-gacmeedka iyo astaamaha way qarsoomaan.

Qaybta koowaad waa **aasaasan**: weligeed ma dhaqaaqdo, waxa kale oo dhan waxaa loo meel dhigaa iyada ku saleysan.

## Geli qaybaha

- {{ui:Ku dar nuqul}} wuxuu geliyaa nuqul kale oo qaybta la doortay (ama qaybtii ugu dambaysay). Nuqullada qayb wadaagaan: tafatir mid oo dhammaan nuqullada way isbedelaan.
- {{ui:Laabid}} ({{key:Mod+D}}) ee kooxda Wax ka beddel wuxuu sameeyaa sidaas qaybta la doortay. {{key:Mod+C}} iyo {{key:Mod+V}} waxay nuqulaan qayb oo waxay ku dhajiyaan dhinaca kuwa kale, isku-dhiskan ama mid kale; {{key:Mod+Shift+V}} wuxuu ku dhajiyaa meeshii isla. Eeg [Koobiyee, dhaji iyo laabid](topic:copy-paste).
- {{ui:Geli}} wuxuu geliyaa qayb faylka `.partcraft.json` kumbuyuutarkaaga. Qaybta waa la koobiyeeyaa isku-dhiska dhexdiisa.

Qaybaha cusub waxay ka soo muuqdaan 20 mm midig kuwa hore oo dhan, waxayna halkaas joogi doonaan ilaa joint ku meel dhigo. Qayb aan joint lahayn waxaa gacanta lagu dhaqaajin karaa: qiimayaal la qoray ama fallaadho aad jiidato (eeg [Liiska qaybaha, muuqaalada kala fureysan iyo qaybaha la dhaqdhaqaajiyo](topic:assembly-bom-explode)).

## Ku xir laba qayb

1. Dooro {{ui:Joint}} ama riix {{key:J}}. Panel-ka midig wuxuu leeyahay **Joint cusub**.
2. Guji wejig siman oo qaybta koowaad. Wuu iftiimaa.
3. Guji wejig siman oo qaybta labaad.

Qaybta labaad way boodaysaa si wejigeedu ugu jiifo wejiga qaybta koowaad, oo uu u eego. Joint-ka wuxuu ka soo muuqdaa hoosta **Joint-yada**, tusaale ahaan "Revolute1", panel-ka midigna wuxuu muujinayaa dejimahiisa.

- Haddii labada wejiba ay ka sameysan yihiin revolve, joint-ku wuxuu ku bilaabmaa **revolute**; haddii kale **rigid**. Kadib beddel.
- Wejiyada wareegsan lama dooran karo: "Wejigaasi wareegsan yahay. Dooro wejig siman (si aad ugu wareegto god ama dhidibka revolve, dooro joint-ka kadib)."
- {{key:Esc}} wuxuu joojiyaa joint aad bilowday (ama guji qayb liiska bidix).

### Dejinta joint-ka

| Dejinta | Waxa ay sameysa |
|---|---|
| **Nooca** | Mid ka mid ah joint-yada shaxda hoose |
| **Xagal (°)** | Wuxuu qaybta labaad ku wareejiyaa dhidibka joint-ka (xagal toos ah wejiyada) |
| **Kala-bixid (mm)** | Wuxuu qaybta labaad ku siibaa dhidibka, ka fogeeya wejiga (qiyamka taban wuxuu ku riixaa gudaha) |
| **Dhinac X**, **Dhinac Y**, **Janjee X**, **Janjee Y**, **Qolka dhinaca**, **Jihada qolka** | Qiyamada kale, oo muuqda joint-yada isticmaala |
| **Dhexda ku** (labada dhinac kasta) | Meesha dhidibka joint-ka ku gudbaa wejiga: "Asalka wejiga", dhidibka revolve ("Dhidibka Revolve1") ama dhidibka hal god ("Hole1, god 2") |

Qiime kasta oo joint-ku oggol yahay inuu dhaqaajo waxaa hoosteeda ah slider-ka jiidista; kuwa kale mar ayaa la dejiyaa.

| Joint | Waxa dhaqaajiya | Mar mid la dejiyo |
|---|---|---|
| **Rigid** | Waxba | Xagal, Kala-bixid |
| **Revolute** | Xagal (albaab) | Kala-bixid |
| **Slider** | Kala-bixid (fiyoog) | Xagal |
| **Cylindrical** | Xagal iyo kala-bixid (shaft ku jira dhaqaaq fudud) | |
| **Planar** | Dhinac X, Dhinac Y dhinaca wejiga, iyo Xagal (qayb ku siibta miis) | |
| **Ball** | Xagal (wareegid) iyo Janjee X iyo Y, dhexda joint-ka (ball joint) | |
| **Pin in slot** | Qolka dhinaca iyo Xagal (pin qolof toosan ku jira) | Jihada qolka: xagasha qolka ee X wejiga |

X iyo Y ee wejiga waa kuwii qaybta koowaad; dhexda joint-ka waxaa dejinaya **Dhexda ku**.

"Asalka wejiga" waa asalka qaybta oo lagu soo saaray wejiga, taas oo inta badan aan ahayn meesha aad rabto inay qaybuhu isku qaadaan. Qaybaha wareegsan iyo pin-ka, ku dhig **Dhexda ku** dhidibka revolve ama god-ka labada dhinac: dhidibyadu markaas waa isku khad, sida concentric mate.

### Tusaale: laba flange oo wejig ilaa wejig ku xidhan

1. Fur qaybta flange (revolve oo leh qaab wareeg oo godad ah) oo dooro {{ui:Isku-dhis}}.
2. Dooro {{ui:Ku dar nuqul}}.
3. Riix {{key:J}}, guji wejiga siman ee diskka flange-ka koowaad (wejigii godadka boolka ka bilaabma), kadibna isla wejiga flange-ka labaad. Wejigii waxaa sameeyay revolve, sidaas darteed joint-ku waa revolute.
4. Deji **Dhexda ku** "Dhidibka Revolve1" labada dhinac. Flange-yadu hadda dhidib isku wadaagaan.
5. Qor `22.5` **Xagal (°)** si aad godadka boolka isugu geeyso, ama jiid slider-ka.

## Silsilado xidhan: linkages

Qaybaha lagu xiro giraan (linkage afar-bar, crank iyo slider, qaab labada dhinac lagu xidho) waxay sameeyaan **loop**. PartCraft wuu xalliyaa loop kasta si uu u xirmo: joint-yada ku jira waxay qaataan qiyamada giraanta isku xira, iyagoo ugu yar dhaqaajiya meesha ay ka bilaabeen.

- **Dejin ama jiid** qiime joint kasta oo loop ku jira, qaybta kale ayaa raacaysa. Linkage afar-bar ah, jiid **Xagal** crank-ka, coupler iyo rocker ayaa la socdaa. Qiimaha aad dejisay waa la hayaa; kuwa kale waxaa laga xisaabiyaa.
- Liiska, joint loop ah oo wali dhaqaajin karo waa **buluug**: qiime kale weli waa la dejin karaa. Loop aan dhaqaajin karin (frame la xidhay) wuu madow ahaan. Loop aan xirmi karin waa **casaan**.
- Sanduuqa **Qaybta** wuxuu muujinayaa **Loops**: intee ka xiran tahay iyo intee qiyam ah ayaa weli dhaqaajin karta, tusaale ahaan "1 xiran; 1 qiime weli dhaqaajin karta".
- {{ui:Hubi dhaqdhaqaaqa isku-dhacyada}} wuxuu joint loop ah ka sii dhaadhicinayaa loop-ka oo raacaya, tallaabo tallaabo (eeg [Hubi isku-dhiska isku-dhacyada iyo dhaqdhaqaaqa](topic:check-assembly)).

Linkage toosan oo laga sameeyay xaashi toosan waa inay isku mid noqdaan qoto dheer: laba qayb oo wejig ilaa wejig ku xidhan labada dhinac giraan ah waxay u baahan yihiin isku heer qotoda labada jihoodba. Isticmaal **Kala-bixid** joint-ka si aad qayb u kor u qaaddo meesha xaashida aan isku darin, ama loop-ku ma xirmi karo.

## Shaqaynta qaybaha

Guji qayb muuqaalka ama liiska si aad u doorato. Panel-ka midig wuxuu muujinayaa magaca qaybta, intee nuqul oo ay jiraan, mugga, joint-yadeeda, iyo haddii ay aasaasan tahay, ama joint-yada ayaa dejiyay, ama "Lama xidhin: wuxuu ku sii jiraa meesha la geliyay". Badhamada:

- {{ui:Wax ka beddel qaybtan}} (ama {{ui:Wax ka beddel qayb}} qalabka qalabka, ama laba jeer guji qaybta liiska): wuxuu furaa qaybta si loo tafatiro;
- {{ui:Geli nuqul}};
- {{ui:Ka dhig qaybta aasaasan}};
- {{ui:Ka saar}}: wuxuu sidoo kale tirtiraa joint-yadeeda, kadib weydiinta.

Isku-dhisku waa inuu hayaa ugu yaraan hal qayb: "Isku-dhisku wuxuu hayaa ugu yaraan hal qayb. Taas beddelkeeda xidh."

### Tafatir qayb meeshay

1. Dooro qayb oo dooro {{ui:Wax ka beddel qayb}}. Qaybtu waxay ka furmaysaa taariikhdeeda; cinwaanka wuxuu leeyahay "Bracket (isku-dhiska Bracket)".
2. Ku beddel sida qayb kasta.
3. Dooro {{ui:Dib}} qalabka qalabka. Isku-dhisku waa cusboonaadaa: nuqul kasta oo qaybtaas wuu isbedelaa, joint-yada ku xiran wejiyada laga sameeyay geesaha sawirka way raacaan.

Soo celinta isbeddelka waa hal tallaabo liiska ka noqoshada isku-dhiska.

## Ka noqo, kaydi iyo xir

- Isku-dhiskan wuxuu leeyahay liis ka noqosho gaar ah: {{key:Mod+Z}} iyo {{key:Mod+Y}} waxay shaqeeyaan joint-yada, gelinta iyo dejimaha.
- {{ui:Kaydi}} ama {{key:Mod+S}} wuxuu soo dejiyaa `<magaca isku-dhiska>.partcraft-asm.json`, oo leh qaybaha oo dhan gudaheeda. Mar dambe fur adigoo isticmaalaya {{ui:Fur}}.
- {{ui:Xir}} wuxuu xiraa isku-dhiska oo wuxuu kuu soo celinayaa qaybtii aad ka bilowday. Haddii isku-dhisku aan la kaydin, wuu weydiinayaa: {{ui:Jooji}}, {{ui:Iska tir isku-dhiska}} ama {{ui:Marka hore kaydi}}.
- Si aad u magacowdo isku-dhiska, guji meel bannaan si wax aan la dooran, oo beddel **Magaca** panel-ka midig.

## Isku-dhisyada waaweyn

Isku-dhis wuxuu hayn karaa kumanaan nuqullo ah oo qayb yar. Nuqullada hal qayb waa la isku keeneeyaa, joint aad wareejiso wuxuu kaliya meeshiisa ku dhigaa qaybaha ka dambeeya, liiska qaybaha ayaa muujinaya safafkiisa ugu horeeya badhan "Muuji wax dheeraad ah" hoosteeda (qaybta la doortay mar walba way ku jirtaa).

- Markaad wareejiso ama aad weyneyso muuqaalka, isku-dhis ka badan ~300,000 saddex-geesood waxaa lagu muujiyaa sanduuq qayb kasta, kadibna oo dhan markii aad joogsato saamayn yar kadib.
- {{ui:Muuqaalada}} › {{ui:Muuqaal fudud}} wuxuu ilaaliyaa sanduuqyada mar walba. Dooritaanka qayb iyo joint-yada weli waxay isticmaalaan qaybaha dhabta ah.
- Xawaaraha wareegidda wuxuu sidoo kale ku xidhan yahay kaarka muuqaalka kumbuyuutarkaaga. Tirooyinka PartCraft-ku cabbiray waxay ku jiraan release notes oo leh kumbuyuutarka ay ka soo jeedaan.

## Dhibaatooyinka joint-ka

- Qayb aan joint gaadhin ayaa liiska lagu muujiyaa **bilaa** (free) panel-kuna wuxuu leeyahay "Bracket2 lama xidhin qaybta aasaasan, sidaas darteed wuxuu ku sii jiraa meesha la geliyay."
- Loop aan xirmi karin (dhererka ma gaadhayo, xad ayaa joogsanaya joint, wejiyada qotoda kuma heshiin): "Revolute3 wuxuu xirayaa loop aan xirmi karin: wuxuu ka baxsan yahay 2.000 mm. Hubi wejiyada, kala-bixidda iyo xadadka joint-yada loop-ka." Joint-yadiisa waxay casaan noqdaan.
- Haddii wejig ama dhidib uu joint-ku isticmaalo uu baabbi'ay kadib tafatirka qayb: "Wejigan joint-ka isticmaalaa ayaa ka maqan Bracket." Ka saar joint-ka oo mar kale samee.

Xiga: [Hubi isku-dhiska isku-dhacyada iyo dhaqdhaqaaqa](topic:check-assembly).
