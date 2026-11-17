---
title: Ümarda, faasi ja õõnsusta ümardusega, faasi ja koorega
summary: Vali servi ja lisa konstantse või muutuva raadiusega ümardusi ning võrdseid, kahe kaugusega või kauguse ja nurgaga faase, õõnsusta detail koorega, valides avatavad tahud, muuda, millist servi või tahke element kasutab, ja paranda tavalised vead.
keywords: ümardus, ümarda, segamine, faas, viil, koor, õõnsus, seina paksus, servad, tahud, vali servad, shift-klõps, avatud tahk, täpne tuum, võrgusilma tuum, pole veel ehitatud
from: e41c1c12
---

:::note
**Selles versioonis** ehitab PartCraft ümardusi ja faase võrgusilma tuumaga, ainult **sirgetel servadel kahe lameda tahu vahel**: kasti servad ning ekstrusioonide ja lõigete sirged servad, välised või sisemised nurgad (sisemine nurk lisab materjali). Ümarad servad, nagu augu servad, ja raadius, mis muutub mööda serva, pole veel ehitatud. Kui kaks ümarat serva kohtuvad nurgas, on ümardused nurgast lõigatud (nad kohtuvad terava soonena), mitte segatud. **Koor** töötab samuti võrgusilma tuumaga: see avab ainult lamedaid tahke, erineva paksusega koore pole veel ehitatud ning see on aeglane detailidel, millel on palju ümaraid tahke. Vt [Mis pole veel valmis](topic:not-built-yet).
:::

{{ui:Ümardus}} ümardab servi, {{ui:Faas}} viilutab neid ja {{ui:Koor}} õõnsustab detaili. Kõik kolm töötavad detaili servadel ja tahkudel ning on ehitatud võrgusilma tuumaga. Nende ümardused on fassetiliseks tehtud nagu iga ümar tahk (**Kõverad** seab, kui peenelt); ümarad tahud on silindrid, mida saab valida ja mõõta (vt [Võrgusilma tuum](topic:solid-kernels)).

## Ümarda või faasi servi

### Vali servad enne

1. Klõpsa detaili serva. Kogu serv särab ja paremas paneelis on **Serv**: selle liik (Sirge, Ring või kaar, Kõver), pikkus ja tahud, mille vahel see on.
2. Et lisada servi, {{key:Shift}}+klõpsa neid. Iga on märgitud; {{key:Shift}}+klõps märgitud servale eemaldab selle. Paneeli pealkirjas on nende arv ("4 serva") ja olekuriba ütleb: "4 serva valitud. {{ui:Ümardus}} või {{ui:Faas}} ümardab need; Shift+klõps valib rohkem, Esc tühjendab."
3. Vali {{ui:Ümardus}} või {{ui:Faas}} tööriistaribal või samad nupud paremas paneelis.

Element lisatakse kõigi valitud servadega: 2 mm ümardus või 1 mm faas. Olekuriba ütleb näiteks: "Fillet1 lisatud (4 serva). Muuda selle suurust paremal; {{ui:Vali servad}} muudab, millised."

### Või lisa element esimesena

1. Kui midagi pole valitud, vali {{ui:Ümardus}} või {{ui:Faas}}.
2. PartCraft läheb valimisrežiimi: paremas paneelis on pealkiri "Fillet1: valimine", detail näidatakse nii, nagu see oli enne ümardust (paneel ütleb seda), ja tööriistaribal on {{ui:Valmis}}.
3. Klõpsa iga serva, et seda lisada; klõpsa uuesti, et see eemaldada. Olekuriba loeb need.
4. Vali {{ui:Valmis}} (või paneelis {{ui:Valik on tehtud}}) või vajuta {{key:Esc}} või {{key:Enter}}.

### Seaded

| Säte | Ümardus | Faas |
|---|---|---|
| Suurus | **Raadius (mm)**, vaikimisi 2 | **Kaugus (mm)** servast tagasi mõlemal tahul, vaikimisi 1 |
| **Servad** | Mitu | Mitu |

Allpool loetletud servad nimetavad iga serva kahe tahu järgi, mida see ühendab, nagu "Serv 1: Extrude1 otsatahk × Extrude1 külg". **Eemalda** eemaldab ühe. {{ui:Vali servad}} läheb tagasi valimisse. Ajaloos elemendi topeltklõps teeb sama.

Servi meeldetuletakse kahe tahu järgi, mida need ühendavad, seega jäävad nad õigesse serva, kui muudad mõõdet ajaloos varem.

### Muutuvad ümardused ja faasi tüübid

- **Muutuv raadius** (ümardus): selles versioonis veel pole ("Raadius, mis muutub mööda serva: pole veel ehitatud (vajab täpset tuuma). Anna sellele üks raadius."). Täpse tuumaga: märgi see ja sea **Lõpp-raadius (mm)**. Raadius muutub lineaarselt **Raadiusest** ühes servas kuni **Lõpp-raadiuseni** teises; **Vaheta otsad** pöörab selle ümber.
- **Tüüp** (faas): **Võrdne kaugus**, **Kaks kaugust** (**Teine kaugus** teisel tahul) või **Kaugus ja nurk** (kaugus ühel tahul, viil **Nurk (°)** selle tahuga). **Vaheta küljed** paneb esimese kauguse teisele tahule.

## Koori detail

1. Klõpsa lamedat tahku, mida jätta avatuks, näiteks kasti ülemine pind. Või {{key:Shift}}+klõpsa mitut tahku.
2. Vali {{ui:Koor}} tööriistaribalt või {{ui:Koor, avab selle tahu}} tahu paneelist.

Detail muutub 2 mm seinaks valitud avatud tahkudega. Seaded:

| Säte | Mida see teeb | Vaikimisi |
|---|---|---|
| **Sein (mm)** | Seina paksus | 2 |
| **Seinad kasvavad väljapoole (tahud jäävad sisse)** | Märgitud: seinad lisatakse väljapoole, nii et sisemus säilitab detaili suuruse | Väljas: seinad lähevad sissepoole ja väljapool jääb suureks |
| **Avatud tahud** | Mitu tahku eemaldatakse | |

Sissepoole on seinad täpselt seina paksusega: välised nurgad jäävad teravaks, sisemised nurgad tulevad ümaraks (raadius = sein) ja läbi detaili läbiv auk saab selle ümber toru seina. Väljapoole lisatakse seinad algse pinna väljapoole, mis muutub õõnsuseks, ja välised servad tulevad ümaraks. Sisemised tahud nimetatakse nende järgi, mida nad nihutavad, seega saab neid valida.

Ainult lamedaid tahke saab avada: kõvera valimine annab teate "Koor: selles versioonis avab see ainult lamedaid tahke (ehitab võrgusilma tuum)." Koor on aeglane detailidel, millel on palju ümaraid tahke (mitu sekundit tuhande kolmnurga kohta): disaini ajal kasuta jämedamat **Kõverate** seadet.

{{ui:Vali pinnad}} muudab avatud tahke samal viisil, nagu servade valimine. Loend nimetab igaüht, nagu "Tahk 1: Extrude1 otsatahk". Koor ilma avatud tahkudeta pole lubatud: "Vali eemaldatavad (avatud) tahud, seejärel koori."

## Järjekord on oluline

Elemendid ehitatakse ülevalt alla. Enne koort olev ümardus koorutakse koos detailiga, nii et ka sisemised nurgad saavad ümarad. Pärast koort tehtud ümardus ümardab ainult valitud servi. Liiguta elemente nuppudega {{ui:Teisalda üles}} ja {{ui:Teisalda alla}} (vt [Muuda detaili ajaloo kaudu](topic:edit-history)).

Mustrid ja peeglid ei saa kopeerida ümardust, faasi ega koort: "Fillet1 muudab keha servi või seinu; seda ei saa kopeerida. Kopeeri tahket tegevad elemendid (ekstrusioonid, pööramised, augud, impordid)." Tee enne augud või lõiked mustrina, seejärel ümarda kõigi koopiate servad ühe ümarduse abil.

## Kui see ebaõnnestub

| Teade | Mida teha |
|---|---|
| "5 mm ümardus siia ei mahu (see on liiga suur serva kõrval olevale tahule või servad kohtuvad nurgas, mida tuum ei suuda segada)." | Kasuta väiksemat raadiust või ümarda vähem servi korraga (mitu ümarduselementi, väikseim viimane) |
| "Serv, mida see ümardab, on kadunud: serv Extrude1 ja Cut2 vahel." | Varasem muudatus eemaldas selle serva. Vali {{ui:Vali servad}}, eemalda punane serv ja vali uus |
| "Koor ei saanud selle paksusega valmis (…)." | Sein on paksem kui mudeli kitsas osa või kui ümarduse raadius. Tee sein õhemaks või ümardused suuremaks kui sein |
| "Sellel tahul pole nime, mida ajalugu järgida saab; vali mõni teine." | Vali tahk, mille tegi element (enamik tahke on sellised) |
| "Ümardus: selles versioonis ainult sirged servad kahe lameda tahu vahel (need ehitab võrgusilma tuum). Ümarda või faasi kõverad servad visandis." (sama faasi puhul) | Valitud serv on ümar, nagu augu serv, või asub kõveral tahul. Eemalda see {{ui:Vali servad}} abil ja ümarda või faasi see nurk visandis |
| "Raadius, mis muutub mööda serva: pole veel ehitatud (vajab täpset tuuma). Anna sellele üks raadius." | Eemalda märge **Muutuv raadius** |
| "Ümardus võrgusilma tuumaga: kus ümarad servad kohtuvad, on need nurgast lõigatud, mitte segatud." (⚠ ajaloos) | Hoiatus, mitte viga: detail on ehitatud. Valitud servad kohtuvad nurgas ja ümardused kohtuvad seal terava soonena. Ümarda vähem servi või võta soon vastu |
| "Koor: selles versioonis avab see ainult lamedaid tahke (ehitab võrgusilma tuum)." | Avatud tahk on kõver. Eemalda see {{ui:Vali pinnad}} abil; ava ainult lamedad tahud |

## Piirangud

Selles versioonis töötavad ümardused ja faasid ainult sirgetel servadel kahe lameda tahu vahel, ühe raadiusega, ja nurgas kohtuvad ümardused on nurgast lõigatud. Koored avavad ainult lamedaid tahke. Täpse tuumaga muutuv ümardus muutub servas lineaarselt (üks seadus elemendi kohta; punktides servas pole raadiuseid). Tahkude ümardused, täisümarad ümardused ja erineva paksusega koored pole veel ehitatud.
