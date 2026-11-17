---
title: Splaini, apgriešana, nobīde un citi skices rīki
summary: Zīmējiet splainus ar atbilstības punktiem un vadības punktiem, apgrieziet un pagariniet līknes, nobīdiet ķēdi, spoguļojiet pret centrālo līniju, pievienojiet daudzstūrus un iegriezumus, veidojiet skices masīvus un projicējiet modeļa malas.
keywords: splains, pielāgošanas punkts, vadības punkts, b-splains, nurbs, līkne, apgriezt, pagarināt, nobīde, spoguļot, simetrisks, daudzstūris, sešstūris, iegriezums, masīvs, lineārs masīvs, cirkulārs masīvs, projicēt, projicēt malu, iekļaut, pārveidot objektus
from: 3ecb166a
---

Šie rīki darbojas atvērtā skicē. {{ui:Splains}} un {{ui:Apgriezt}} ir rīkjoslā. Pārējie atrodas zem {{ui:Vairāk}} skices rīku beigās. Katrs rīks ir viens atsaukšanas solis, un {{key:Esc}} to aptur. Pamata zīmēšanas rīkus skatiet sadaļā [Pirmās skices zīmēšana](topic:sketch-basics).

## Splaini

Splains ir gluda līkne. Ir divi veidi.

| Rīks | Taustiņš | Kā zīmēt |
|---|---|---|
| {{ui:Splains}} | {{key:B}} | Noklikšķiniet punktus, caur kuriem iet līkne. Beidziet ar {{key:Enter}}, {{key:Esc}}, labo klikšķi vai dubultklikšķi. Noklikšķiniet uz pirmā punkta vēlreiz, lai aizvērtu splainu |
| {{ui:Vadības punktu splains}} (zem {{ui:Vairāk}}) | | Noklikšķiniet vadības punktus. Līkne tiek vilkta uz tiem, bet tikai pieskaras pirmajam un pēdējam. Punktētais vadības daudzstūris rādās gan zīmēšanas laikā, gan pēc tam |

- **Punkti ir skices punkti.** Velciet tos vai piešķiriet tiem sakarības un izmērus kā jebkuram citam punktam. Splaina pirmais punkts var piesaistīties līnijas galam, kas tos savieno ar sakritības sakarību.
- **Pieskare galā.** Izvēlieties līniju, loku vai splainu, kas saskaras ar vienu splaina galu, tad splainu un izvēlieties {{ui:T Pieskare}}. Splaina gala virziens tad seko līnijai. Pieskare citur, nevis splaina galos, tiek noraidīta: „Pieskare splainam nepieciešama līnija, loks vai splains, kas saskaras ar vienu no tā galiem.”
- **Galapunkti.** Bez pieskares sakarības fiksēta punkta splaina gali ir dabiski (galā nav līknuma). Līkne ir kubiska un iet caur katru punktu, un tās atstarpes nosaka attālumi starp punktiem.
- **Slēgti splaini** veido profilu paši. Atvērti splaini savieno līnijas un lokus slēgtā cilpā kā jebkura cita līkne.
- Dzēšot punktu splaina iekšpusē, punkts tiek noņemts un splains paliek, kamēr tam ir vismaz divi punkti (trīs, ja tas ir slēgts).

Izvilkums un rotācija veido splainu ar tīkla kodolu no īsiem taisniem posmiem (patiesām līknēm nepieciešams precīzs kodols: šajā versijā tas vēl nav izveidots). DXF eksports raksta splainu kā polilīniju, kas paliek 0,01 mm robežās no līknes, jo DXF R12 nav splaina elementa.

## Apgriešana un pagarināšana

| Rīks | Taustiņš | Kā |
|---|---|---|
| {{ui:Apgriezt}} | {{key:T}} | Norādiet uz līknes: gabals, kas tiktu noņemts, tiek rādīts sarkans līdz tuvākajiem krustpunktiem. Noklikšķiniet, lai to noņemtu. Līkne bez krustpunktiem tiek noņemta pilnībā |
| {{ui:Pagarināt}} (zem {{ui:Vairāk}}) | {{key:E}} | Noklikšķiniet uz līnijas vai loka tuvu galam, lai to pagarinātu. Tā aug līdz nākamajai līknei, ko satiek. „Šim galam nav, ko sasniegt.”, ja neviens nav ceļā |

Apgriešana un pagarināšana darbojas ar līnijām, lokiem, riņķiem un splainiem (pagarināšana: tikai līnijām un lokiem).

- Apgriezts **riņķis** kļūst par loku. Tā rādiusa vai diametra izmērs pāriet uz loku.
- Apgriežot līnijas vidu, paliek divas līnijas, kas atrodas uz tās pašas taisnes. Apgriežot loka vidu, paliek divi loki ar vienu centru un sakarību Vienāds.
- Apgriezts **splains** kļūst par vadības punktu splainu, kas precīzi seko vecajai līknei. Pieskares sakarība galā, kas paliek, saglabājas.
- Jaunais gals tiek novietots uz līknes, kas to nogriezusi (uz līnijas, loka vai riņķa vai sakritīgs ar tās galu). Splaini nevar turēt punktu, tāpēc splains, kas griež, nepievieno sakarību.

**Sakarības, kas vairs neatbilst, tiek noņemtas**, un statusa josla saka, cik. Piemēram, garuma izmērs apgrieztai līnijai tiek noņemts, bet horizontālās vai paralēlās sakarības paliek.

## Nobīde

1. Izvēlieties {{ui:Nobīde}} zem {{ui:Vairāk}} vai nospiediet {{key:O}}.
2. Noklikšķiniet uz līnijas, loka, riņķa vai splaina. Visa tā ķēde tiek izcelta: visas līknes, kas savienotas gals pie gala, līdz punktam, kur saskaras trīs vai vairāk. Lai nobīdītu tikai daļu no ķēdes, vispirms atlasiet tās līknes, tad izvēlieties Nobīde un noklikšķiniet uz vienas no tām.
3. Pārvietojiet rādītāju uz pusi, kurā iet kopija. Punktēts priekšskatījums seko. Nospiediet {{key:B}}, lai abās pusēs.
4. Noklikšķiniet, ierakstiet attālumu un nospiediet {{key:Enter}}.

Līnijas un loki tiek nobīdīti precīzi. Stūri tiek pagarināti vai apgriezti, līdz tie saskaras. Kopijai ir viens izmērs **Nobīde**, un pārējie gabali seko tam: veiciet dubultklikšķi uz izmēra, lai mainītu visu kopiju. Attālums, kas ir pārāk liels šai ķēdei, tiek noraidīts, piemēram: „Šis attālums ir pārāk liels šai ķēdei: puse apgriezīsies uz iekšu.”

**Splains** tiek nobīdīts ar jaunu pielāgošanas punktu splainu, kas atrodas 0,001 mm robežās no patiesās nobīdes. Šī kopija ir fiksēta: tā neseko vēlākām izmaiņām, un tai nav izmēra Nobīde. Splainam ķēdē nepieciešami gludi (pieskares) savienojumi galos.

## Spoguļošana

1. Ar Atlasīt izvēlieties, ko spoguļot.
2. Izvēlieties {{ui:Spoguļošana}} zem {{ui:Vairāk}} vai nospiediet {{key:M}}.
3. Noklikšķiniet uz līnijas vai centrālās līnijas, pret kuru spoguļot.

Katram spoguļotajam punktam ir sakarība **Simetrisks** ar oriģinālu, tāpēc kopija seko, kad oriģināls mainās. Punkti, kas atrodas uz spoguļlīnijas, ir kopīgi, un spoguļotajiem riņķiem ir sakarība Vienāds. Ja nekas nebija atlasīts, noklikšķiniet uz spoguļojamajiem objektiem, nospiediet {{key:Enter}}, tad noklikšķiniet uz spoguļlīnijas.

## Daudzstūri un iegriezumi

| Rīks | Kā |
|---|---|
| {{ui:Daudzstūris}} | Noklikšķiniet centru, pēc tam stūri, tad ierakstiet malu skaitu (no 3 līdz 64). Malas ir vienādas, un stūri atrodas uz palīgriņķa. Izmēriet riņķi, lai noteiktu daudzstūra lielumu |
| {{ui:Iegriezums}} | Noklikšķiniet viena gala centru, pēc tam otra gala centru, tad noklikšķiniet, lai iestatītu platumu. Divas līnijas, pieskaras divām vienādām pusriņķa līnijām |

## Skices masīvi

Vispirms atlasiet ģeometriju, tad:

- {{ui:Lineārs masīvs}}: noklikšķiniet sākuma punktu, pēc tam, kur iet pirmā kopija, tad ierakstiet kopiju skaitu (ieskaitot oriģinālu).
- {{ui:Cirkulārs masīvs}}: noklikšķiniet centru, tad ierakstiet kopiju skaitu, vienmērīgi izvietotu pilnā apgriezienā.

Kopijas paņem līdzi sakarības starp atlasīto ģeometriju (cirkulārs masīvs izlaiž horizontālās un vertikālās). Kopijas nav saistītas ar oriģinālu: mainot vienu, pārējās paliek kā ir.

## Detaļas malu projicēšana

1. Izvēlieties {{ui:Projicēt malu}} zem {{ui:Vairāk}}.
2. Noklikšķiniet uz taisnas vai apļveida detaļas malas aiz skices.

Mala tiek precīzi nokopēta uz skices plaknes un fiksēta (sakarība Fiksēt). Tā nesekos vēlākām izmaiņām detaļā. Nospiediet {{key:Q}}, lai to padarītu par palīgģeometriju. Riņķis, kas ir slīps pret skices plakni, projicētos kā elipse, tāpēc tas tiek noraidīts. Tāpat tiek noraidītas brīvas formas malas un malas, kas vērstas taisni prom no skices. Projicēšanai nepieciešams precīzs kodols: šajā versijā tas vēl nav izveidots.
