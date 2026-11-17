---
title: Atskaitos plokštumos, ašys ir taškai
summary: Kurkite plokštumas, nukreiptas nuo paviršiaus, kampu, per tris taškus, per vidurį, liečiančias cilindrą, statmenas briaunai arba per briauną ir tašką; ašis; taškus briaunų viduryje, susikirtimuose ir plokštumų kampuose; braižykite eskizą ant jų ir naudokite kaip sukimo ašis, masyvų kryptis bei veidrodinio atspindžio plokštumas.
keywords: atskaitos, tarp objektų, vidurys, susikirtimo taškas, plokštuma per briauną ir tašką, atskaitos plokštuma, darbo plokštuma, konstrukcinė plokštuma, nuorodinė plokštuma, poslinkio plokštuma, plokštuma kampu, vidurio plokštuma, liečianti plokštuma, atskaitos ašis, konstrukcinė ašis, nuorodinė ašis, atskaitos taškas, darbo taškas, eskizas ant plokštumos
from: e7eb6fc1
---

Atskaitos geometrija – tai pagalbinė konstrukcija, ant kurios kuriate elementus: **plokštuma**, ant kurios braižyti eskizą, kai paviršiaus nėra, **ašis**, apie kurią sukti ar masyvuoti, **taškas**, kuriame sustabdyti ištraukimą. Ji neturi jokios medžiagos. Plokštumos vaizde rodomos kaip šviesūs kvadratai, ašys – brūkšninėmis linijomis, taškai – mažais kryželiais. Visi trys įtraukiami į istoriją ir seka tuo, iš ko buvo sudaryti, kai keičiate ankstesnius dydžius.

Jie yra elementų grupės {{ui:Daugiau}} meniu: {{ui:Plokštuma}}, {{ui:Ašis}}, {{ui:Taškas}}.

## Sukurti plokštumą

1. Spustelėkite plokščią paviršių arba pagrindinę plokštumą istorijoje, kad pradėtumėte nuo jos (neprivaloma).
2. Pasirinkite {{ui:Daugiau}}, tada {{ui:Plokštuma}}. Ji pradeda kaip poslinkio plokštuma, nutolusi 20 % detalės dydžio nuo to, ką pasirinkote (arba nuo viršutinės plokštumos).
3. Dešiniame skydelyje pasirinkite **Tipą** ir jo nuorodas:

| Tipas | Nuorodos | Skaičiai |
|---|---|---|
| Poslinkis nuo plokštumos ar paviršiaus | **Iš plokštumos** | **Atstumas (mm)**, neigiamas – kita pusė |
| Kampu, per briauną ar ašį | **Iš plokštumos**, **Sukti apie** (pasaulio ašį, ašies elementą ar pasirinktą tiesią briauną) | **Kampas (°)** |
| Per tris taškus | **Taškas 1**, **Taškas 2**, **Taškas 3** | — |
| Vidurio plokštuma tarp dviejų | **Pirmoji plokštuma**, **Antroji plokštuma** (lygiagrečios: per vidurį; susikertančios: plokštuma, dalijanti kampą pusiau) | — |
| Liečianti cilindrą | **Cilindras** (cilindrinis paviršius), **Artimas taškas** (kuri pusė) | — |
| Statmena briaunai, taške | **Briauna**, **Taške** (plokštuma eina per artimiausią briaunos tašką ir per patį tašką) | — |
| Per briauną ir tašką | **Tiesi briauna** (arba ašis), **Per tašką** | — |
| Statmena briaunai per vidurį | **Briauna** (per vidurį, statmena jai), arba be briaunos **Taškas 1** ir **Taškas 2** (plokštuma per vidurį tarp jų) | — |

Kiekviena nuorodos vieta turi mygtuką **Pasirinkti**: spustelėkite jį, tada spustelėkite vaizde. Plokštumos vieta priima pagrindinę plokštumą, atskaitos plokštumą ar plokščią paviršių; taško vieta priima briaunos galą (spustelėkite arti to galo), taško elementą ar vietą ant paviršiaus; briaunos vieta priima briauną. {{key:Esc}} atšaukia pasirinkimą. **Apversti normalę** apverčia plokštumą (kuria kryptimi nukreiptas ant jos esantis eskizas).

Šioje versijoje vieta, kuriai reikia briaunos ar cilindro paviršiaus (Liečianti cilindrą ir briaunų vietos), atsako „dar nesukurta“: vietoje to naudokite taškus ar ašį.

## Braižyti eskizą ant plokštumos

Pasirinkite plokštumą (istorijoje arba spustelėdami jos kvadratą vaizde) ir spustelėkite {{ui:Eskizas}}, arba **Braižyti ant jos** jos skydelyje. Eskizas seka plokštumą: pakeitus plokštumos atstumą, pajuda ir eskizas, ir visi ant jo esantys elementai.

## Ašys ir taškai

- {{ui:Ašis}}: per du taškus, cilindro ar kūgio ašis, ten, kur susikerta dvi plokštumos, išilgai tiesios briaunos (arba apskritos briaunos ašis) arba statmena paviršiui per tašką.
- {{ui:Taškas}}: nurodytose koordinatėse, viršūnėje ar eskizo taške, apskritos briaunos centre, taip pat taškai „tarp objektų“:

| Taško tipas | Nuorodos |
|---|---|
| Briaunos vidurys (arba tarp dviejų taškų) | **Briauna** (per vidurį jos ilgio, taip pat lankams ir kreivėms), arba be briaunos **Taškas 1** ir **Taškas 2** |
| Ten, kur briauna ar ašis susikerta su paviršiumi ar plokštuma | **Briauna** (tiesi ar kreivė) arba ašis, ir **Susikerta su plokštuma** (plokštuma ar plokštas paviršius) arba **Arba paviršius** (plokštas paviršius ar cilindras). Apskritimas su plokštuma susikerta du kartus, o tiesė per cilindrą eina du kartus: **Kitas susikirtimas** pasirenka antrąjį |
| Ten, kur susikerta trys plokštumos | **Pirmoji**, **Antroji** ir **Trečioji plokštuma** (plokštumos ar plokšti paviršiai) |

Kiekvienas iš jų nepavyksta su aiškiu pranešimu, kai nuorodos netinka: tiesė lygiagreti plokštumai, tiesė nepasiekia cilindro, briauna nepasiekia plokštumos, trys plokštumos nesusikerta viename taške, arba taškas yra ant tiesės, kuri turėtų nustatyti plokštumą.

Naudokite juos kituose elementuose:

| Kur | Kaip |
|---|---|
| Sukimas | **Ašis**: pasirinkite ašies elementą iš sąrašo (jis turi būti eskizo plokštumoje) |
| Apskritiminis masyvas | **Ašis**: ašies elementas |
| Tiesinis masyvas | **Kryptis**: ašies elementas arba plokštuma (jos normalė) |
| Veidrodinis atspindys | **Veidrodinio atspindžio plokštuma**: atskaitos plokštuma |
| Ištraukimas | **Pabaiga**: Iki paviršiaus ar plokštumos, Iki viršūnės (taško elementas). Šioje versijoje dar nesukurta (reikia tikslaus branduolio) |
| Nuolydis | **Neutrali plokštuma** |

## Kai nuoroda dingsta

Plokštuma, sukurta iš paviršiaus, kurio nebėra, nepavyksta su pranešimu, kuriame nurodomas jo pavadinimas, pavyzdžiui: „Paviršius, ant kurio ji stovi, nebeegzistuoja Extrude1.“ Ji niekada nepersikelia į kitą paviršių. Ant jos esantys eskizai ir elementai pažymimi „nesukurta“, kol pasirinksite naują nuorodą; likusi detalės dalis lieka tokia, kokia buvo.

:::note
Šioje versijoje visos detalės kuriamos su tinklo branduoliu, kuris sukuria plokštumas, ašis ir taškus iš pagrindinių plokštumų, plokščių paviršių, sukurtų Ištraukimu ar Sukimu, eskizo taškų, koordinačių ir kitų atskaitos elementų. Viskas, kam reikia briaunos, briaunos galo ar kreivo paviršiaus, reikalauja tikslaus branduolio: šioje versijoje dar nesukurta („Naudoja kietojo kūno paviršių ar briauną, kurią gali rasti tik tikslus branduolys: šioje versijoje dar nesukurta.“).
:::
