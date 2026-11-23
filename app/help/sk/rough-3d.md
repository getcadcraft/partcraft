---
title: 3D hrubovanie a obrábanie zvyškov
summary: Vyčistite polotovar okolo celého modelu po vrstvách plochou, vyhnutou alebo guľovou frézou, pričom nechajte prídavok na dokončenie, potom nechajte menší nástroj rezať len tam, kde prvý nechal materiál. Čo dráhy zaručujú a čo nie.
keywords: 3D hrubovanie, hrubovanie, hrubý, obrábanie zvyškov, hrubovanie zvyškov, zvyšný materiál, prídavok, hĺbka rezu, úrovne, úroveň Z, vodná čiara, nábeh, zavŕtanie, zarezanie, menší nástroj
from: 29ddc266
---

Dve operácie vo Výrobe, pod {{ui:Viac}} na jej paneli nástrojov, vyčisťujú polotovar z **celého modelu** v 3D, s nástrojom držaným zvisle (alebo pozdĺž [smeru nástroja](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) operácie). Nevyžadujú výber.

## 3D hrubovanie

{{ui:3D hrubovanie}} postupuje zhora polotovaru po jednom **kroku hĺbky**. Na každej úrovni odstráni všetko, čo nástroj dosiahne bez dotyku modelu: priame rady vo vzdialenosti **priečneho kroku** (zlomok priemeru nástroja), potom raz okolo hrany toho, čo smie dosiahnuť, takže steny sa nasledujú a nezostanú ako rad schodov v pôdoryse.

- **Prídavok na dokončenie**: ako ďaleko nástroj zostáva od modelu všade, pre dokončovací prechod (predvolene 0.5 mm).
- **Úroveň pri každej rovnej ploche**: dodatočná úroveň vo výške každej rovnej plochy modelu (plus prídavok), aby dno nezostalo takmer celý krok hĺbky vysoké.
- **Ignorovať polotovar tenší než**: materiál tenší než toto, smerom hore alebo do strán, nestojí za prechod (0.05 mm pri hrubovaní, 0.5 mm pri obrábaní zvyškov, aby tenký zvyšok pozdĺž steny neposlal menší nástroj okolo každej steny).
- **Spodok**: nič sa nereže pod touto výškou. Prázdne znamená spodok modelu.

Začína z polotovaru **tak, ako ho nechali operácie pred ním**: po prechode čelovaním neobrába vzduch tam, kde prešla čelová fréza.

Zostup: tam, kde by nástroj na ceste dole narazil na polotovar, sa zasúva rampou po vlastnom prechode pod **uhlom rampy**, tam a späť najviac cez dva priemery nástroja. Prechod príliš krátky na to sa zavŕta priamo dole rýchlosťou zavŕtania; operácia tie zavŕtania počíta a upozorní, lebo nástroj, ktorý nereže stredom, by to nemal robiť.

## Obrábanie zvyškov

{{ui:Zvyšky}} je rovnaká stratégia pre **menší nástroj po väčšom**. Číta simuláciu polotovaru a reže len tam, kde materiál stále stojí: vnútorné rohy, do ktorých väčší nástroj nemohol vojsť, drážky, do ktorých sa nezmestil, schody, ktoré zostali na svahoch. Inde nerobí nič, takže jeho dráha je malá časť toho, čo by ten istý nástroj zobral z čerstvého polotovaru.

Umiestnite ju za hrubovaciu operáciu a vyberte menší nástroj. Potrebuje simuláciu polotovaru operácií pred ňou, ktorú pracovný priestor vždy spúšťa.

## Ako dobré sú dráhy

- **Žiadne zarezanie.** Polohy nástroja sa vypočítajú na mriežke, pričom rezák je zobratý o niečo väčší, než je (o 1.4 bunky mriežky do strán a o prídavok na dokončenie), takže kdekoľvek stojí, je mimo modelu. Testy overujú každý rezný bod voči presnému nástroju na presnej sieti a simulácia polotovaru po každom behu: žiadne zarezanie, žiadny rýchly pohyb cez materiál.
- **Cena za to**: steny si ponechajú o trochu viac než prídavok na dokončenie, až do hodnoty zobrazenej ako "Dodatočný polotovar na stenách" pri operácii (asi 0.5 mm pri nástroji Ø6, menej pri menšom). Dokončovací prechod to odoberie.

Čo tieto dráhy nie sú:

- Rady sú priame čiary, nie ofsety tvaru súčiastky ani krivky konštantného záberu. Urobia viac zdvihov a prejazdov naprázdno než ofsetová alebo adaptívna stratégia a prvý rad na každej úrovni reže plnú šírku nástroja. Pre kapsy s rovným dnom je lepšie hrubovanie [Adaptívne](topic:manufacture).
- Stopka a držiak nástroja sa nekontrolujú. Upozornenie sa zobrazí, keď je rez hlbší než dĺžka zubov.
- Podrezy nie sú vidieť: model je to, čo nástroj stretne pri zostupe po svojej osi. Aby ste hrubovali bok, dajte druhej operácii [naklonený smer nástroja](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Obrábanie zvyškov pozná polotovar len tak dobre, ako mriežka simulácie (bunky 0.1 až 2 mm podľa veľkosti súčiastky).
- Na veľkej súčiastke je program dlhý (viac než 100 000 pohybov pre 200 mm prírubu s nástrojom Ø6) a výpočet trvá asi minútu; každá zmena v pracovnom priestore vypočíta celý program znova. Na hrubovanie používajte najväčší nástroj, ktorý sa zmestí.
- Pred rezaním skontrolujte výstup v simulátore vášho stroja.
