---
title: Detaili muutmine ajaloo kaudu
summary: Muuda elemente ja visandeid pärast valmimist, lülita välja, keri tagasi, lisa elemente varem, muuda järjekorda, nimeta ümber ja kustuta ning võta mis tahes neist tagasi.
keywords: ajalugu, elementide puu, disainipuu, muuda elementi, muuda visandit, välja lülitamine, uuesti sisselülitamine, tagasikerimine, edasikerimine, järjekord, teisalda element, kustuta, nimeta ümber, võta tagasi, tee uuesti, uuesti ehitamine, regenereerimine, vanem ja laps, suur detail, palju elemente, aeglane uuesti ehitamine, 750 elementi
from: 6f75aef4
---

PartCraft-detail on tema ajalugu: tasandite, visandite ja elementide loend vasakul. PartCraft ehitab tahkkeha selle loendi ülaosast uuesti iga kord, kui midagi muutub. Arvu muutmine loendi alguses muudab kõike selle peale ehitatud.

## Muuda elementi

1. Klõpsa ajaloos elementi (või selle all taandes olevat visandit).
2. Muuda selle sätteid paremas paneelis. Iga muudatus ehitab kohe uuesti.

Nuppe OK ja Loobu ei ole: iga muudatus rakendatakse. Kui see ei meeldi, vajuta {{key:Mod+Z}}.

## Muuda, milliseid servi või pindu ümardus, faas või kest kasutab

Topeltklõpsa elementi ajaloos või vali see ja vali {{ui:Vali servad}} (või {{ui:Vali pinnad}}). Klõpsa servi või pindu, et neid lisada või eemaldada, seejärel {{ui:Valmis}} või {{key:Esc}}. Vt [Ümardus, faas ja kest](topic:fillet-chamfer-shell).

## Muuda visandit

1. Topeltklõpsa visandit ajaloos või vali see ja vali paremas paneelis {{ui:Muuda visandit}} (või tööriistaribal {{ui:Visand}}).
2. Detail läheb tagasi seisu, mis oli visandi tegemisel: visandile järgnevad elemendid on muutmise ajal peidetud.
3. Muuda geomeetriat, seoseid või mõõtmeid.
4. Sulge visand. Kogu detail ehitatakse muudatusega uuesti.

Ainult suuruse muutmiseks ei pea visandit avama. Vali element või visand ja muuda paremas paneelis jaotises **Visandi mõõdud** (või **Juhtivad mõõdud**) olevat arvu. Vt [Muuda mõõtmeid visandit avamata](topic:change-sizes).

## Kui element ebaõnnestub

Kui muudatus muudab elemendi võimatuks, ehitab PartCraft kõik muu ja märgib probleemi:

- element näitab ajaloos **⚠ viga** ning selle sõnum on paremas paneelis üleval (sõnumi lugemiseks võid ka rea kohal hoida kursorit);
- elemendid, mis seda vajavad, näitavad **⚠ pole ehitatud** koos tekstiga „Vajab elementi Extrude2, mis ebaõnnestub.“;
- staatuseriba märk ütleb „1 element ebaõnnestub“.

Paranda põhjus (või võta tagasi) ja detail ehitatakse uuesti. Levinud sõnumid ja nende lahendused on jaotises [Tõrkeotsing](topic:troubleshooting).

## Lülita element välja

Väljalülitamine lülitab elemendi välja kustutamata: kasulik, kui proovid detaili ilma auguta või mustrita.

1. Vali element.
2. Vali {{ui:Lülita välja}}. Selle rida näitab **väljas**. Elemendid, mis seda vajavad, ei ehitata samuti.
3. Vali {{ui:Taasaktiveeri}}, et see uuesti sisse lülitada.

## Keri tagasi

Tagasikerimine ehitab detaili ainult kuni teatud punktini, nii et näed seda sellisena, nagu see oli, või lisad elemendi ajaloos varem.

1. Vali element ja vali {{ui:Keri siiani tagasi}}. See element ja kõik selle all olevad on hallid ja ei ole ehitatud. Rida **Tagasikerimise riba · keri edasi** märgib kohta.
2. Iga element, mille nüüd lisad, läheb **riba juurde**, enne hallidena näidatavaid.
3. Klõpsa **Tagasikerimise riba · keri edasi**, et kõik uuesti ehitada.

Tagasikerimise asukoht salvestatakse faili.

## Muuda elementide järjekorda

1. Vali element.
2. Vali {{ui:Teisalda üles}} või {{ui:Teisalda alla}} või vajuta, kui elemendi ajaloo rida on fookuses, {{key:Alt+Up}} või {{key:Alt+Down}}.

Element ei saa kunagi liikuda kõige kohal, mida ta kasutab. Nupp on hall ja nupule hõljutades (või klahvi proovides) antakse põhjus, näiteks „Extrude2 kasutab Sketch2-te, seega peab Sketch2 olema esimene.“

Element kasutab: oma visandit; tasandit, millel tema visand asub; elemente, mida muster või peegeldus kopeerib; visandi joont või pöörde telge, mida kasutatakse suunana või teljena.

## Kustuta element

1. Vali element ja vali paremas paneelis või tööriistaribal {{ui:Kustuta}} või vajuta {{key:Delete}}.
2. Kui teised elemendid seda kasutavad, küsib PartCraft: „Extrude3 ja Hole1 kasutavad elementi Extrude1 ning kustutatakse samuti.“ Vali {{ui:Kustuta kõik}} või {{ui:Loobu}}.

Elemendi kustutamine ei kustuta selle visandit: visand ilmub vaatesse kasutamata visandina, valmis järgmiseks elemendiks. Kui visandit ei vaja, kustuta see eraldi.

## Nimeta ümber

Vali element ja kirjuta paneeli alumises osas uus **Nimi** (kuni 60 tähemärki). Detaili enda nimi on paremas paneelis, kui midagi pole valitud.

## Sadu elemente sisaldavad detailid

Sadu elemente sisaldavat detaili testitakse 750-ni. PartCraft hoiab alles tahkkeha, mis oli ajaloo keskel, nii et muudatus ajaloo lõpus ehitab uuesti ainult sellele järgnevad elemendid; muudatus ajaloo algusele lähedal ehitab uuesti kõik sellest sõltuva, mis võtab kõige kauem aega. Tagasivõtmine ja uuestitegemine ehitavad uuesti ainult sealt, kus kaks olekut erinevad. Suurema detailiga kiiremini töötamiseks keri tagasi kohta, kus töötad (vt ülalt jaotist Tagasikerimine), või lülita välja need, mida praegu ei vaja. Mitu üksteist mitte puudutavat lõiget ja tõusu rakendatakse koos, seega detail, mis koosneb paljudest eraldi aukudest ja tõusudest, ehitatakse kiiremini, kui elementide arv viitab.

Suur detail ehitatakse taustal uuesti: alumine ehitusmärk ütleb **Ehitatakse uuesti…** ja näitab, kui kaugele on jõutud, ning vaade, paneelid ja menüüd töötavad edasi. Ekraanil olev detail on viimane valmis ehitatud, kuni uus on valmis. Kui muudad midagi uuesti ehitamise ajal, ehitab PartCraft uusima versiooni ja loobub pooleliolevast. Väike detail ehitatakse kohe uuesti.

## Võta tagasi ja tee uuesti

- {{key:Mod+Z}} või {{ui:Võta tagasi}} võtab viimase muudatuse tagasi: elemendi, seadistuse, visandi muudatuse, lohistamise. Staatuseriba ütleb, mis see oli, näiteks „Võetud tagasi: muuda mõõtu.“
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} või {{ui:Tee uuesti}} teeb selle uuesti.
- PartCraft hoiab viimased 200 sammu. (Detail, mis on nii suur, et 200 koopiat võtaks palju mälu, hoiab vähem, kuid mitte kunagi vähem kui 20 uusimat.) Muudatused joonislehel (lõige, teisaldatud GD&T-sümbol) on samas loendis. Faili avamine või uue detaili alustamine tühjendab loendi.

:::mac
Macis kasuta uuestitegemiseks ⇧⌘Z. Safaris võib ⌘Y avada brauseri ajaloo.
:::
