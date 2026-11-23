---
title: Sústruženie na sústruhu
summary: Zarovnajte, hrubujte, dokončite, zapichnite, odrežte, závitujte a vŕtajte sústruženú súčiastku z obrysu, ktorý tvorí pri otáčaní. Sústruhové nástroje, posuvy na otáčku, sústruhové postprocesory a čo nebolo overené.
keywords: sústruženie, sústruh, sústruhovať, zarovnanie, hrubovanie, dokončovanie, zapichovanie, odrezanie, závit, závitovanie, G32, G33, G96, konštantná obvodová rýchlosť, css, polomer hrotu, vymeniteľná destička, tyč, skľučovadlo, priemer, posuv na otáčku, G71, G76
from: d8cc53b0
---

Výroba má sedem operácií pre sústruh. Fungujú na akejkoľvek súčiastke: rezané je **obrys, ktorý súčiastka tvorí pri otáčaní** okolo stredu polotovaru, takže súčiastka, ktorá nie je okrúhla, sa sústruží na okrúhly tvar, ktorý ju drží.

**Nič tu nebolo spustené na sústruhu.** Dráhy sú overené voči geometrii testami; dva postprocesory pre sústruh nasledujú zdokumentované kódy riadiacich systémov. Najprv overte program v simulátore vášho riadiaceho systému a vo vzduchu.

## Nastavenie

Na karte **Nastavenie**:

- **Os nástroja** je os vretena, Z sústruhu. Čelo súčiastky je na +Z; skľučovadlo drží druhý koniec.
- **Polotovar**: vyberte {{ui:Valec}}, tyč. Jej horný posun je to, čo odstráni rez čelovania.
- **Pracovný začiatok**: stred na vrchu polotovaru alebo na vrchu modelu dá Z0 na čelnú plochu, obvyklé miesto.
- **Riadenie**: {{ui:Sústruh v štýle Fanuc (.nc)}} alebo {{ui:Sústruh LinuxCNC (.ngc)}}. Frézovací postprocesor odmietne sústružnícky program a povie to.
- **Maximálne otáčky vretena**: limit, pod ktorým sa drží obvodová rýchlosť.

{{ui:Viac}} na paneli Výroba uvádza sedem sústružníckych operácií na vrchu karty **Operácie**. Prvá, ktorú pridáte, prinesie vlastný nástroj: **sústružnícku destičku** (polomer hrotu, uhol destičky, uhol rezných hrán) alebo **zapichovací nôž** (šírka, polomer rohu, ako hlboko siaha). Zmeňte ich na karte **Nástroje**. Posuvy sú na otáčku a rýchlosť je obvodová rýchlosť v m/min, ktorú riadiaci systém drží pri zmene priemeru; ak chcete rýchlosť pevnú, nastavte nástroju vlastné otáčky (rpm).

## Operácie

| Operácia | Čo robí |
|---|---|
| {{ui:Plocha}} | Zarovná čelo tyče dole na súčiastku, po jednom kroku hĺbky, od vonkajšku až tesne za stred. |
| {{ui:Hrubovanie}} | Prechody pozdĺž Z s **hĺbkou rezu** od seba, dole na obrys plus **prídavok na dokončenie**; potom raz pozdĺž obrysu na odstránenie schodov. Údolie medzi dvoma plecami sa vstupuje zavŕtaním o jednu hĺbku rezu. |
| {{ui:Povrchová úprava}} | Jeden prechod pozdĺž obrysu pri zlomku posuvu nástroja. |
| {{ui:Zapichovanie}} | Zapichuje nôž vedľa seba všade, kde môže zobrať viac než limit zostávajúceho materiálu: drážky, ktoré sústružnícka destička nedosiahla. **Od / Do Z** ju zúžia. |
| {{ui:Odrezanie}} | Odreže súčiastku tesne za jej zadnou plochou, do kúsok za stred, s odsúvaním, ak nastavíte. |
| {{ui:Závit}} | Vonkajší závit: vonkajší priemer, stúpanie, dĺžka, počet prechodov. Hĺbka 0 znamená 0.6134 × stúpanie (60° závit). Každý prechod odoberie rovnakú plochu triesky; prechody naprázdno opakujú posledný. |
| {{ui:Vŕtanie}} | Vrták na strednej čiare do hĺbky, s odsúvaním. |

## Ako sa nástroj udržiava mimo súčiastky

Destička sa berie tak, ako je: jej kružnica hrotu a za ňou zadná hrana, priama čiara, ktorej uhol je 180° mínus uhol rezných hrán a uhol destičky. Tento tvar sa spúšťa na obrys v každom bode pozdĺž Z a dráha je miesto, kde sa zastaví. Takže:

- **Polomer hrotu je už v dráhe.** Postprocesory nezapisujú `G41` ani `G42`; súradnice sú programovaný bod nástroja (roh štvorca okolo hrotu).
- Destička **nedokáže nasledovať stenu strmšiu než jej zadná hrana**. Drážka za plecom zostane nedotknutá a dokončovacia operácia povie, koľko z obrysu nedosiahla. Operácia {{ui:Zapichovanie}} ju odoberie.
- Polotovar sa sleduje pozdĺž Z po každom reze, takže hrubovanie neobrába vzduch, zapichovanie nájde, čo zostalo, a každá operácia ukáže odobratý objem a či zasiahla do súčiastky.

## Obmedzenia

- **Iba vonkajšie sústruženie**: žiadny vyvrtávací nôž, žiadne vnútorné drážky ani závity, žiadne čelné drážky.
- Jedno vreteno, súčiastka držaná na −Z. Žiadne podvreteno, žiadne poháňané nástroje, žiadna os C ani Y, žiadne pohyby pevnej opory ani koníka.
- Dráhy sú priame pohyby: krivky sú krátke čiary v rámci tolerancie (žiadne `G2`/`G3`), a hrubovanie a závitovanie sa zapisujú prechod po prechode (žiadne cykly `G71` ani `G76`).
- Závitovanie je priame prechody s priamym vytiahnutím na konci; dajte závitu odľahčovaciu drážku. Závit sa v polotovare nezobrazuje.
- Vŕtanie na stred nemení model polotovaru.
- Držiak, revolver a skľučovadlo sa nekontrolujú. Nastavte **Zastaviť na Z**, aby nástroj zostal mimo čeľustí.
- Posuvy a otáčky sú východiskové hodnoty, ako pri frézovaní.
