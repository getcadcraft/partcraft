---
title: Konfiguratsioonid ja disainitabelid
summary: Hoia detaili mitut suurust ja versiooni nimega konfiguratsioonidena, mis on salvestatud detailifailis, koos iga konfiguratsiooni sees sisse või välja lülitatud elementidega; vaheta neid ühe klikiga, too need sisse või vii välja CSV disainitabelina või loo need kõik käsurealt.
keywords: disainitabel, konfiguratsioonid, konfiguratsioon, suurused, detailide perekond, csv, tabelarvutus, variandid, tabelist juhitud, detailiperekond, peida, elemendi väljalülitamine, valikud, koos või ilma, konfigureerija
from: 17249afb
---

**Konfiguratsioon** on detaili üks suurus: nimega varustatud parameetrite väärtuste hulk. Detail hoiab oma konfiguratsioone oma failis, nii et need liiguvad koos temaga. **Disainitabel** on sama asi CSV-failina, üks rida konfiguratsiooni kohta.

Konfiguratsioonid määravad **parameetreid**, seega lisa need esmalt (vt [Juhi detaili parameetritega](topic:parameters)). Konfiguratsioon salvestab need parameetrid, mis on lihtsad arvud; teistest tuletatud parameetrid (nagu `area = w * d`) järgnevad iseseisvalt.

## Salvesta konfiguratsioon

1. Vahekaardil {{ui:Parameetrid}} määra parameetrid detaili ühele suurusele.
2. Rühmas **Konfiguratsioonid** kirjuta nimi (näiteks `Suur`) ja vajuta {{ui:Salvesta praegused väärtused}} või {{key:Enter}}.

Uus konfiguratsioon on märgitud **aktiivseks**. Kui muudad hiljem parameetrit, ütleb see **aktiivne, muudetud pärast**, et sa teaksid, et detail ei vasta enam sellele.

## Vaheta, uuenda, nimeta ümber, kustuta

- {{ui:Rakenda}} seab parameetrid selle konfiguratsiooni väärtusteks ja ehitab detaili uuesti.
- {{ui:Uuenda}} salvestab praegused väärtused sellesse konfiguratsiooni.
- Et seda ümber nimetada, kirjuta uus nimi selle kasti ja vajuta {{key:Enter}}.
- {{ui:Kustuta}} eemaldab konfiguratsiooni. Parameetrid säilitavad oma väärtused.

Iga neist on üks samm: {{key:Mod+Z}} viib tagasi. Kui nimetad parameetri ümber, järgib iga konfiguratsioon uut nime; kui kustutad ühe, see kaob neist.

## Lülita elemente konfiguratsioonis sisse ja välja

Konfiguratsioon hoiab ka seda, millised elemendid on välja lülitatud, nii et ühel detailil võivad olla versioonid **koos** ja **ilma** millegita: montaažiaugud, faas, ülendus.

1. Lülita element välja: klõpsa sellel ajaloos ja seejärel {{ui:Lülita välja}} paneelis {{ui:Omadused}}.
2. Salvesta konfiguratsioon tavapäraselt, näiteks `Ilma aukudeta`. Selle rida loetleb, mida see välja lülitab.
3. Lülita element uuesti sisse ({{ui:Taasaktiveeri}}) ja salvesta teine konfiguratsioon, näiteks `Aukudega`.

Kui mõni konfiguratsioon on mõne elemendi välja lülitanud, rakendab konfiguratsiooni rakendamine need elemendid välja ja **kõik muud elemendid sisse** koos nende parameetrite väärtustega ühe sammuga. Konfiguratsioon, mis salvestati enne, kui ühtegi elementi välja lülitati, loetakse "kõik sees". {{ui:Uuenda}} salvestab elemendid sellisena, nagu nad praegu on, koos väärtustega.

Detail, mille konfiguratsioonid lülitavad elemente välja, salvestatakse uuema failiversioonina: vanem PartCraft ütleb, et fail on uuemast versioonist, selle asemel et avada see ilma nendeta.

:::note
CSV disainitabel kannab ainult parameetrite väärtusi. Tabeli importimine konfiguratsiooni kohale muudab selle väärtusi ja jätab alles elemendid, mille see välja lülitab; käsurea `--table` loob ainult väärtused.
:::

Detailifail salvestatakse koos konfiguratsioonidega ja sellega, milline neist oli aktiivne. Detail avaneb väärtustega, millega see salvestati.

## Too disainitabel sisse või vii välja

Disainitabel on CSV-fail, kus on veerg iga parameetri jaoks ja rida iga konfiguratsiooni jaoks:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

Esimene veerg võib olla nimega `name`, `config` või `configuration`; iga teine veerg peab olema detaili parameetri nimi. Lahtrid on arvud, ühikutega, kui soovid (`8in`). Tühi lahter jätab selle parameetri rea seest välja.

- {{ui:Impordi CSV}} lisab iga rea konfiguratsioonina. Rida olemasoleva konfiguratsiooni nimega asendab selle. Import on üks samm.
- {{ui:Ekspordi CSV}} kirjutab konfiguratsioonid välja. Kui neid veel pole, kirjutab see ühe rea praeguste väärtustega, tabelarvutuse lähtepunktina.

Konfiguratsiooni nimi, mida tabelarvutus loeks valemina (algab `=`, `+`, `-` või `@`), kirjutatakse eesliitega `'`.

## Kõik suurused korraga

{{ui:Variantide pakk…}} rühmas **Konfiguratsioonid** ehitab kõik konfiguratsioonid või valitud mõned STEP-, IFC-, DWG- ja eelvaatena ühte zip-faili, koos nende parameetrite tabeliga: vt [Tee variantide pakk oma konfiguratsioonidest](topic:variant-pack).

Käsurea tööriist ehitab ühe faili CSV disainitabeli iga rea kohta:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Ekspordi kõigepealt konfiguratsioonid CSV-na, seejärel anna see fail üle `--table`-ga. Vt [Skriptid ja käsurida](topic:scripts-and-cli). Skriptina salvestatud detail hoiab oma konfiguratsioone real `configs json …`.
