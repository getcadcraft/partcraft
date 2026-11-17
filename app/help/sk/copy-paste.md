---
title: Kopírovanie, prilepenie a duplikovanie
summary: Kopírujte geometriu náčrtu, prvky a súčiastky zostavy; prilepujte tam, kde kliknete, alebo na rovnaké miesto; duplikujte v jednom kroku; a čo ide s kópiou a čo nie.
keywords: kopírovanie, prilepenie, vystrihnutie, duplikovanie, schránka, prilepenie na rovnaké miesto, vybrať všetko, zrušiť výber, zmazať, ctrl c, ctrl v, ctrl d, inštancia, komponent, kopírovanie náčrtu, kopírovanie prvku, kopírovanie súčiastky
from: 611307d7
---

Skupina {{ui:Upraviť}} na paneli nástrojov obsahuje {{ui:Späť}}, {{ui:Znova}}, {{ui:Kopírovať}}, {{ui:Prilepiť}} a ponuku {{ui:Viac}} s {{ui:Vystrihnúť}}, {{ui:Kopírovať}}, {{ui:Prilepiť}}, {{ui:Prilepiť na rovnaké miesto}}, {{ui:Duplikovať}}, {{ui:Zmazať}}, {{ui:Vybrať všetko}} a {{ui:Zrušiť výber}}, každé so svojou klávesou. Čo sa kopíruje, závisí od toho, kde ste: geometria v otvorenom náčrte, prvok v histórii alebo súčiastka v zostave.

Zašednutá položka teraz nemôže konať. Ukážte na ňu: bublina vysvetlí prečo, napríklad "Najprv vyberte geometriu náčrtu" alebo "Schránka obsahuje Sketch2 a Extrude2: prvky sa prilepujú do histórie, takže najprv ukončite náčrt".

| Akcia | Klávesa | V náčrte | V histórii | V zostave |
|---|---|---|---|---|
| Kopírovať | {{key:Mod+C}} | Vybrané body a krivky | Vybraný náčrt, vytiahnutie, rotácia alebo otvor (spolu s náčrtom) | Vybraná súčiastka |
| Vystrihnúť | {{key:Mod+X}} | Skopírovať, potom zmazať | Skopírovať, potom zmazať prvok | Skopírovať, potom odstrániť súčiastku |
| Prilepiť | {{key:Mod+V}} | Kópia sa pohybuje za ukazovateľom; kliknite, kam ju umiestniť | Pridá kópiu na koniec histórie | Nová kópia vedľa ostatných súčiastok |
| Prilepiť na rovnaké miesto | {{key:Mod+Shift+V}} | Na rovnakých súradniciach | Rovnako ako Prilepiť | Na rovnakom mieste ako skopírovaná súčiastka |
| Duplikovať | {{key:Mod+D}} | Skopírovať a presunúť naraz; schránka sa nemení | Druhá kópia hneď za vybraným prvkom | Druhá kópia vedľa ostatných súčiastok |
| Zmazať | {{key:Delete}} | Výber | Prvok (opýta sa, ak ho používajú iné prvky) | Súčiastka alebo kĺb |
| Vybrať všetko | {{key:Mod+A}} | Všetko v náčrte | Nie je k dispozícii | Nie je k dispozícii |
| Zrušiť výber | {{key:Esc}} | Zruší výber | Zruší výber a režim výberu | Zruší výber |

Každé prilepenie, duplikovanie a vystrihnutie je jeden krok v zozname späť: {{key:Mod+Z}} ho vráti späť, {{key:Mod+Y}} ho znova obnoví.

## V náčrte

1. Vyberte, čo kopírovať: kliknite na to, {{key:Shift}}+kliknutie pre ďalšie, potiahnite okno, alebo stlačte {{key:Mod+A}} pre všetko.
2. Stlačte {{key:Mod+C}} alebo vyberte {{ui:Kopírovať}}. Stavový riadok povie, čo bolo skopírované.
3. Stlačte {{key:Mod+V}} alebo vyberte {{ui:Prilepiť}}. Prerušovaná kópia sa pohybuje za ukazovateľom, držaná za svoj stred. Prichytáva sa k bodom: stred skopírovanej kružnice umiestnite na bod kliknutím na tento bod.
4. Kliknite, kam má ísť. Prilepená geometria zostane vybraná, takže ju môžete hneď potiahnuť alebo k nej pridať väzby. {{key:Esc}} zruší prilepenie.

Čo sa skopíruje spolu s tým:

- Skopírovaná úsečka, kružnica alebo oblúk prinesie svoje koncové body a stred.
- Väzby a kóty **medzi skopírovanými položkami** sa prenesú: skopírovaný obdĺžnik je stále obdĺžnik, so svojimi rozmermi.
- Väzby **na geometriu, ktorú ste nekopírovali**, a väzby na začiatok sa zrušia. Stavový riadok ich spočíta: "2 väzby na geometriu mimo kópie sa nepreniesú". Prilepená kópia sa preto dá voľne pohnúť, kým ju nezviažete väzbami alebo kótami.
- Pevný bod zostane pevný na svojej novej polohe.

{{ui:Prilepiť na rovnaké miesto}} umiestni kópiu presne na súradnice originálu, v tomto náčrte alebo v inom: hodí sa na prenos profilu z jedného náčrtu do druhého. V tom istom náčrte kópia leží na originále; potiahnite ju preč.

{{ui:Duplikovať}} ({{key:Mod+D}}) skopíruje výber a hneď ho začne umiestňovať, bez zásahu do obsahu schránky.

:::tip
Ak chcete zopakovať stred otvoru alebo drážku viackrát, skopírujte ju raz a prilepte viackrát: každé {{key:Mod+V}} začne novú kópiu, ktorá sleduje ukazovateľ.
:::

## V histórii

1. Kliknite na náčrt, vytiahnutie, rotáciu alebo otvor v histórii.
2. {{key:Mod+C}} ho skopíruje. Prvok založený na náčrte sa kopíruje spolu s náčrtom.
3. {{key:Mod+V}} pridá kópiu na koniec histórie (pri lište návratu, ak ste sa vrátili), s novými názvami, napríklad Sketch3 a Extrude2.

Kópia leží na rovnakej rovine alebo ploche ako originál, takže stojí na ňom a súčiastka vyzerá rovnako. Ak chcete kópiu presunúť, vyberte nový náčrt a zmeňte jeho rovinu na pravom paneli, alebo ho otvorte a potiahnite alebo znova okótujte profil.

- Prilepenie do **inej súčiastky**: otvorte tú súčiastku a stlačte {{key:Mod+V}}. Ak náčrt kópie bol na ploche, ktorú táto súčiastka nemá, ide na prednú rovinu a stavový riadok to oznámi.
- {{ui:Duplikovať}} robí kopírovanie a prilepenie v jednom kroku v tej istej súčiastke.
- {{ui:Vystrihnúť}} skopíruje prvok a potom ho zmaže (najprv sa opýta, ak ho používajú iné prvky).

Vzory, zrkadlenia, zaoblenia, skosenia, škrupiny a importované telesá sa nedajú kopírovať: visia na hranách, plochách alebo prvkoch vybraných v tejto súčiastke. Namiesto toho skopírujte náčrt alebo prvok, na ktorom stoja, alebo ho zopakujte pomocou {{ui:Lineárne}} alebo {{ui:Kruhové}}.

## V zostave

1. Kliknite na súčiastku v pohľade alebo v zozname vľavo.
2. Vyberte {{ui:Duplikovať}} ({{key:Mod+D}}), alebo {{key:Mod+C}} a potom {{key:Mod+V}}.

Nová kópia je **tá istá súčiastka**: upravte jednu a zmení sa každá kópia. Objaví sa 20 mm napravo od všetkého, čo je už v zostave, otočená rovnako ako kópia, a zostane tam, kým ju kĺb neumiestni. {{ui:Prilepiť na rovnaké miesto}} ({{key:Mod+Shift+V}}) ju umiestni presne tam, kde je skopírovaná súčiastka; spojte ju kĺbom, aby sa pohla (posunutie posuvného kĺbu ju posúva pozdĺž).

Prilepenie súčiastky skopírovanej z inej zostavy prinesie súčiastku so sebou, rovnako ako {{ui:Vložiť}} zo súboru. {{ui:Pridať kópiu}} v skupine Zostava robí to isté ako {{ui:Duplikovať}} a funguje aj bez výberu (skopíruje poslednú súčiastku).

## Schránka

- Je to vlastná schránka PartCraft, nie schránka počítača: geometriu PartCraft nemožno prilepiť do iného programu ani text do pohľadov PartCraft.
- Uchováva sa v tomto prehliadači, takže iná karta PartCraft môže prilepiť to, čo ste skopírovali. Načíta sa späť a skontroluje ako otvorený súbor; poškodený obsah alebo obsah z inej verzie sa odmietne.
- Súčiastka s veľkým importovaným súborom STEP môže byť príliš veľká na uchovanie v prehliadači: vtedy sa prilepí len na tejto karte.
- V poli čísla alebo pri hľadaní v pomocníkovi {{key:Mod+C}} a {{key:Mod+V}} kopírujú a prilepujú text ako obvykle.

Na liste výkresu zatiaľ nie sú kopírovanie a prilepenie k dispozícii; {{ui:Zmazať}} a {{ui:Zrušiť výber}} fungujú na vybranom symbole. Pozri [Čo ešte nie je hotové](topic:not-built-yet).
