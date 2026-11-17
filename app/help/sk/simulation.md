---
title: Kontrola napätia a priehybu (simulácia)
summary: Vyberte materiál, upevnite plochy, pridajte sily, tlaky alebo vlastnú váhu súčiastky, vyriešte a čítajte na modeli napätie podľa von Misesa, posunutie, bezpečnostný faktor, reakcie a vlastné frekvencie, spolu s tým, čo metóda dokáže a nedokáže povedať.
keywords: simulácia, MKP, FEA, analýza počas úprav, aktualizovať pri úprave, rozbiť to, čo sa zlomí ako prvé, faktor zaťaženia, nelineárna, plasticita, medza klzu, plastická deformácia, bilineárny, kontakt, dvojica kontaktov, penalizácia, spojené, kontakt bez trenia, CalculiX, .inp, .frd, konečné prvky, napätie, deformácia, von Mises, posunutie, priehyb, bezpečnostný faktor, faktor bezpečnosti, reakcia, zaťaženie, sila, tlak, gravitácia, vlastná váha, upevnenie, podpora, väzba, materiál, oceľ, hliník, titán, ABS, PLA, nylón, vlastná frekvencia, modálna, vibrácie, sieť, veľkosť prvku, štvorsten, štvorsteny, sieť zo štvorstenov, voxel, kvalita siete, hlavné napätie, ekvivalentná deformácia, odhad chyby, zakrivené plochy, diery, zaoblenia, adaptívne, adaptívne spresnenie, automatické spresnenie, h-adaptívne, konvergencia, konvergencia siete, presný povrch, guľa, kužeľ, torus, spline, voľný tvar
from: 6f2fdec1
---

Pracovný priestor Simulácia odpovedá na otázku "Ohne sa to alebo zlomí pod týmto zaťažením?" pre súčiastku, ktorú modelujete. Je to **lineárna statická** štúdia (malé deformácie, materiál zostáva pružný) alebo štúdia **vlastnej frekvencie**, riešená na sieti kvadratických štvorstenov, ktoré nasledujú plochy súčiastky (alebo, ak chcete, na sieti malých rovnakých kociek). Funguje na pomenovaných plochách, ktoré jadro siete dáva súčiastke (pozri [Jadro siete](topic:solid-kernels)).

Vyberte **Simulácia** v poli **Pracovný priestor** na ľavej strane panela nástrojov. Súčiastka sa nezmení; štúdia sa uloží vnútri súboru súčiastky a každú zmenu v nej možno vrátiť späť.

## Nastavenie štúdie

1. Stlačte **Nová štúdia** na pravom paneli.
2. Vyberte **Materiál**. Panel ukáže jeho tuhosť (E), Poissonov pomer, hustotu a medzu klzu. Hodnoty sú typické tabuľkové údaje; certifikované hodnoty vášho dodávateľa sa môžu líšiť.
3. Vyberte **Sieť**:
   - **Štvorsteny (presné)**, predvolené: 10-uzlové štvorsteny, ktorých vonkajšie plochy ležia na plochách súčiastky, so zakrivenými hranami na dierach, zaobleniach a iných okrúhlych plochách. Uzly na rovinných, valcových, kužeľových, guľových a torusových plochách, rotačných a vytiahnutých plochách a plochách voľného tvaru (B-spline) ležia na presnom povrchu; každý iný typ plochy nasleduje svoju zobrazovanú sieť a tabuľka výsledkov uvádza, koľko plôch to bolo. Sieť sa sama spresní pri zakrivených plochách, tenkých stenách a ostrých hranách.
   - **Voxelové kocky (rýchle)**: súčiastka vyplnená rovnakými kockami. Rýchle, ale zakrivené plochy sa zmenia na schodíky. Štúdie uložené pred zavedením siete zo štvorstenov si ponechajú tento typ.
4. Nechajte **Veľkosť prvku** prázdnu pre automatickú veľkosť (približne 12,000 štvorstenov alebo 20,000 kociek), alebo zadajte v milimetroch. Panel ukáže, koľko prvkov to približne urobí, pred pridaním jemnejších miest. Pri štvorstenoch **Menšie prvky na zakrivených plochách** (predvolene zapnuté) spresní diery a zaoblenia, kde zvyčajne bývá vrchol napätia.

### Automatické spresnenie

Pri štvorstenoch, statickej alebo vybočovacej štúdii (bez tepelného zaťaženia), štúdii vlastnej frekvencie a stacionárnej tepelnej štúdii sa ponúka **Automatické spresnenie (adaptívne)**. Zaškrtnite ho a nastavte:

- **Cieľová chyba (%)**: riešenie sa zastaví, keď je odhadovaná chyba pod ňou (na začiatok 1 %).
- **Najviac prechodov**: najviac riešení, ktoré môže spraviť (na začiatok 5, najviac 10).

Každý prechod rieši, nájde prvky s najväčšou odhadovanou chybou, rozdelí ich (a toľko susedov, koľko treba, aby sieť zostala celistvá) a znova rieši. Nové uzly na zakrivených plochách sa dostanú na presný povrch. Výsledky potom ukážu tabuľku a graf s pre každý prechod počtom prvkov, neznámych, odhadovanou chybou a špičkovým napätím (alebo teplotou) a posunutím (alebo tepelným tokom), a riadok, prečo sa zastavilo: cieľ bol splnený, prechody sa minuli, ďalšia sieť by bola príliš veľká, alebo prechod zlyhal (vtedy vidíte posledný dobrý prechod).

Odhad čítajte ako odhad. Meria chybu na **celej súčiastke** (Zienkiewicz–Zhu; v porovnaní s presnými riešeniami ukazuje približne 0.6 až 0.95 skutočnej chyby), takže špičkové napätie na diere alebo zaoblení je zvyčajne ešte trochu nepresné, keď odhad vyzerá malý: pri koncentrácii napätia nastavte cieľ pod 1 % a sledujte, ako sa špička ustáli od prechodu k prechodu. Na ostrom vnútornom rohu alebo na hrane upevnenej plochy je skutočné napätie nekonečné, takže sa k nemu odhad nikdy nedostane: prechody sa minú.

**Vlastné frekvencie a vybočenie.** Pri štúdii vlastnej frekvencie odhad pokrýva každý tvar, o ktorý ste požiadali, každý rátaný rovnako; tabuľka a graf sledujú prvé dve frekvencie. Pri súčiastke iba s rovinnými plochami môže frekvencia od prechodu k prechodu iba klesať (každá sieť si drží predchádzajúcu); zakrivené plochy sa tiež viac približujú svojmu skutočnému tvaru, čo môže frekvenciu mierne posunúť ktorýmkoľvek smerom. Pri vybočení odhad pokrýva predpätie a tvary vybočenia a tabuľka sleduje faktory zaťaženia. Overené na oceľovej tyči 100 × 10 × 10 mm: prvá frekvencia sa ustáli z 812.4 na 811.9 Hz počas štyroch prechodov, o 0.4 % pod Euler–Bernoulliho (ktorý ignoruje šmyk), a faktor zaťaženia stĺpa je v rozsahu 0.5 % od Eulerovho.

## Upevnenie a zaťaženie

Každá štúdia potrebuje aspoň jednu podperu a pri napätí aj jedno zaťaženie.

1. Stlačte {{ui:Pevné}} na paneli nástrojov. Nová podpora je vybraná a čaká na plochy: kliknite na plochy, ktoré sa držia nehybne (kliknutím na plochu znova ju odoberiete). Keď skončíte, stlačte **Hotovo s výberom** alebo {{key:Esc}}. Modré kužele označujú držané plochy.
2. Stlačte {{ui:Sila}} a kliknite na plochy, na ktoré pôsobí sila. V paneli zadajte **Celkovú silu** v newtonoch a zvoľte jej **Smer**: do plochy, alebo pozdĺž osi. Sila sa rozdelí medzi vybrané plochy podľa plochy. Oranžové šípky ju zobrazujú.
3. Stlačte {{ui:Tlak}} pre tlak v MPa (N/mm²) tlačiaci do vybraných plôch; záporný tlak ťahá.

Ďalšie druhy sú v zozname **Pridať** v paneli: **Plocha bez trenia** (plocha sa môže kĺzať po sebe, ale nemôže sa od seba odtrhnúť; použite ju na roviny symetrie a hladké podpory) a **Gravitácia** (vlastná váha súčiastky, 9.81 m/s², v smere, ktorý zvolíte).

Podpora, ktorá necháva súčiastku voľne sa posúvať alebo otáčať, sa odmietne a povie, ktorý pohyb zostal voľný.

## Riešenie a čítanie výsledkov

Stlačte {{ui:Vyriešiť}}. Práca beží na pozadí; **Zastaviť** ju zruší. Potom:

- Súčiastka je zafarbená podľa **napätia podľa von Misesa**; v **Zobraziť** zvoľte **Posunutie** alebo **Bezpečnostný faktor**. Legenda uvádza mierku.
- Ukážte na súčiastku a prečítate hodnoty pod kurzorom.
- Zaškrtnite **Deformovaný tvar**, aby ste videli ohnutú súčiastku (pohyb sa zväčší o **Mierku**; skutočný je v tabuľke).
- Tabuľka uvádza najväčšie napätie a kde je, najväčšie posunutie, najmenší **bezpečnostný faktor** (medza klzu ÷ napätie podľa von Misesa; pod 1 materiál tečie), aplikované zaťaženie a **reakcie** v podperách (vyrovnávajú zaťaženie) a použitú sieť.

Pri **vlastných frekvenciách** zvoľte tento **Typ**, nastavte počet **Módov** a riešte. Každý mód zobrazuje svoju frekvenciu a tvar (tvary sú škálované na 1 pri ich najväčšom pohybe).

Ak súčiastku zmeníte, výsledky sa označia ako zastarané: riešte znova.

## Plasticita a kontakt (nelineárne štúdie)

Dva ďalšie typy štúdií idú nad rámec "materiál zostáva pružný":

- **Nelineárna (materiál tečie)** nasleduje priamku materiálu až po jeho medzu klzu, potom plochší sklon (**Sklon po medzi klzu**, 1 % z E, ak necháte prázdne). Zaťaženie ide v **Krokoch zaťaženia**; krok, ktorý sa neustáli, sa sám rozpolí. Výsledky pridajú **Plastickú deformáciu** do grafov a uvedú, koľko zaťaženia bolo prenesené. Ak sa krok stále neustáli, štúdia sa zastaví na poslednom dobrom kroku a panel ⚠ Problémy ukáže, kde: súčiastka tam prekročila svoju pevnosť (kolaps), alebo sú kroky príliš veľké.
- **Kontakt medzi kusmi** nechá oddelené kusy súčiastky tlačiť jeden na druhý. Pridajte **Dvojicu kontaktov**, vyberte plochy strany A (plochy, ktoré tlačia) pomocou {{ui:Vybrať plochy}}, potom strany B pomocou {{ui:Vybrať plochy strany B}}. **Bez trenia** kusy tlačia, kĺžu a oddeľujú sa; **spojené** kusy zostávajú prilepené. Každý kus sa sieťuje samostatne, takže malá medzera medzi nimi je v poriadku. Kontakt je metóda penalizácie: kusy sa do seba trochu zanoria (**faktor penalizácie** × E ÷ veľkosť prvku určuje, aký tuhý je kontakt). Tabuľka ukazuje najhlbšie zanorenie a panel Problémy varuje, keď je viac než 1 % veľkosti prvku: zvýšte faktor alebo použite menšie prvky.

Obe používajú sieť zo štvorstenov. Trenie, veľké kĺzanie a veľké rotácie sa tu neriešia.

## Spustenie v CalculiX

**Export › Vstupný súbor CalculiX (.inp)** (alebo {{ui:Uložiť súbor CalculiX (.inp)}} v paneli) uloží štúdiu ako vstupný súbor pre CalculiX, samostatný program, ktorý nainštalujete a spustíte sami: rovnaká sieť, materiál, podpory, zaťaženia a dvojice kontaktov, v mm, N a MPa. Spustite ho a potom **Export › Výsledky CalculiX (.frd)** prečíta jeho výsledkový súbor späť na rovnakú sieť a zobrazí posunutie (a napätie podľa von Misesa, ak súbor obsahuje napätia). Ak ste medzitým zmenili súčiastku alebo veľkosť prvku, sieť nie je rovnaká a PartCraft to povie: uložte nový vstupný súbor.

## Ako veľmi jej dôverovať

PartCraft kontroluje svoj riešič oproti ručným vzorcom (výchylka konzoly PL³/3EI do 1 %, predĺženie tyče PL/AE presne, prvá frekvencia konzoly do 3 %, napätie okolo diery v doske). Predsa majte na pamäti tieto limity:

- **Sieť.** Pri štvorstenoch PartCraft kontroluje výchylku a ohybové napätie konzoly (do 0.3 %), napätie pri diere v doske (Kt, do približne 1 %), hrubú rúru pod tlakom (Lamé, do 0.3 %) a prvú frekvenciu (do 0.4 %). Tabuľka ukazuje **kvalitu siete** (najmenšie a najväčšie uhly medzi plochami prvkov; pod približne 10° je prvok slabý) a **odhadovanú chybu napätia**: ak je viac než pár percent, riešte znova s menšou veľkosťou prvku alebo nechajte **Automatické spresnenie** urobiť to. Na doske s dierou a tyči s dvoma okrajovými zárezmi automatické spresnenie dosiahlo do 1 % učebnicového Kt s približne šestinou neznámych, ktoré potrebovalo celkové jemnejšie zjemnenie siete. Pri voxelových kockách je diera alebo zaoblenie schodíkom pri veľkosti kocky, takže napätie tam je hrubé.
- **Ostré vnútorné rohy a hrany upevnených plôch nemajú skutočný špičkový bod napätia.** Hodnota tam stále rastie, ako sa prvky zmenšujú. Čítajte napätia trochu ďaleko od takýchto miest alebo zaoblite roh v modeli.
- **Výsledky na čítanie.** Okrem napätia podľa von Misesa, posunutia a bezpečnostného faktora ukáže štúdia zo štvorstenov **maximálne a minimálne hlavné napätie** (ťah a tlak) a **ekvivalentnú deformáciu**. Zaškrtnite **Zobraziť sieť**, aby ste videli prvky.
- **Statické štúdie sú lineárne a pružné.** Pre tečenie a kontakt použite vyššie uvedené nelineárne typy štúdií; veľké priehyby a únava sa neriešia. Teplo, tepelné napätie a lineárne vybočenie sú vlastné typy štúdií: pozri [Teplo, tepelné napätie a vybočenie](topic:thermal-and-buckling).
- **Každý materiál je rovnaký vo všetkých smeroch.** Plasty z 3D tlače sú slabšie napríč svojimi vrstvami, často o tretinu alebo viac.
- Toto je laboratórna verzia: súčiastky, na ktorých záleží, overte iným spôsobom.

## Aktualizácia počas úprav (Live)

Zaškrtnite **Aktualizovať pri úprave** v bloku riešenia a odpovede simulácie budú nasledovať vaše úpravy. Zmeňte kótu, zaťaženie, materiál alebo prostredie a hneď sa objaví **rýchla odpoveď**, urobená prvkami štyrikrát väčšími než má štúdia; keď sa na chvíľu zastavíte (asi sekundu), vlastná **spresnená odpoveď** štúdie ju nahradí. Výsledky hovoria, na ktorú sa pozeráte ("Rýchla odpoveď" alebo "Spresnená odpoveď") a uvádzajú veľkosť prvku. Rýchla odpoveď je dobrá na smer a veľkosť: na oceľovej konzole bola do 1 % pri priehybe a do približne 4 % pri napätí od spresnenej. Pre čísla, ktoré budete používať, dôverujte spresnenej. Statické, vlastné frekvenčné, tepelné a vybočovacie štúdie fungujú takto; Live je nastavenie zobrazenia a nie je uložené v súčiastke. Riešenie, ktoré spustíte sami, zostáva, ako je, až do ďalšej úpravy.

## Zistite, čo sa zlomí ako prvé (Rozbiť to)

Pri statickej alebo vybočovacej štúdii stlačte **Čo sa zlomí ako prvé?** v bloku **Rozbiť to**. PartCraft škáluje zaťaženia štúdie (sily, tlaky a váhu spolu), kým súčiastka nepovolí, a zoradí od najhoršieho **faktor zaťaženia do prvého klzu** (faktor pri dnešných zaťaženiach, pri ktorom najvyššie napätie podľa von Misesa dosiahne medzu klzu materiálu, s červeným značkovačom tam, kde sa to stane) a **faktor zaťaženia do vybočenia** pre tie isté podpory a zaťaženia. Faktor 4.3 znamená, že súčiastka unesie 4.3-násobok svojho zaťaženia, kým povolí; **faktor pod 1 znamená, že už pri zaťažení povoľuje**, a to sa objaví v zozname Problémy ako chyba (najslabšie zistenie sa zobrazí ako poznámka, aj keď všetko drží). Faktory pochádzajú z lineárnej štúdie na štvorstenoch pri vašej veľkosti prvku, takže sú také dobré, aká je táto štúdia; napätie na upevnenej ploche alebo ostrom rohu nemá skutočný vrchol (pozri vyššie) a faktor klzu tam bude na opatrnej strane. Váš asistent môže tú istú kontrolu spustiť nástrojom `break_run`.

## Súvisiace

- [Teplo, tepelné napätie a vybočenie](topic:thermal-and-buckling)
- [Vypestovanie tvaru zo zaťažení (generatívne)](topic:generative-design)
- [Meranie vzdialeností, uhlov a hmotnosti](topic:measure)
- [Čo ešte nie je hotové](topic:not-built-yet)
