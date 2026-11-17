---
title: Kontrola napětí a průhybu (Simulace)
summary: Vyberte materiál, upněte plochy, přidejte síly, tlaky nebo vlastní tíhu dílu, vyřešte a na modelu přečtěte napětí podle von Mises, posunutí, bezpečnostní koeficient, reakce a vlastní frekvence, včetně toho, co metoda umí a neumí říct.
keywords: simulace, FEA, živá analýza, aktualizace při úpravách, zlomit ho, co praskne první, součinitel zatížení, nelineární, plasticita, mez kluzu, plastická deformace, bilineární, kontakt, dvojice kontaktů, penalizace, slepený, kontakt bez tření, CalculiX, .inp, .frd, metoda konečných prvků, napětí, deformace, von Mises, posunutí, průhyb, bezpečnostní koeficient, koeficient bezpečnosti, mez kluzu, reakce, zatížení, síla, tlak, gravitace, vlastní tíha, upnutí, vazba, bez tření, podpora, materiál, ocel, hliník, titan, ABS, PLA, nylon, vlastní frekvence, modální, vibrace, síť, velikost prvku, čtyřstěn, čtyřstěny, síť čtyřstěnů, voxel, kvalita sítě, hlavní napětí, ekvivalentní deformace, odhad chyby, zakřivené plochy, otvory, zaoblení, adaptivní, adaptivní zjemnění, automatické zjemnění, h-adaptivní, konvergence, konvergence sítě, přesný povrch, koule, kužel, torus, spline, volný tvar
from: 6f2fdec1
---

Pracovní prostor Simulace odpovídá na otázku "ohne se to nebo praskne pod tímto zatížením?" pro díl, který modelujete. Je to **lineární statická** studie (malé průhyby, materiál zůstává pružný) nebo studie **vlastní frekvence**, řešená na síti kvadratických čtyřstěnů, která kopíruje plochy dílu (nebo, pokud zvolíte, malých stejných krychlí). Pracuje s pojmenovanými plochami, které jádro sítí dává dílu (viz [Jádro sítí](topic:solid-kernels)).

V poli **Pracovní prostor** vlevo na panelu nástrojů zvolte **Simulace**. Váš díl se nemění; studie se uloží uvnitř souboru dílu a každou změnu lze vrátit zpět.

## Nastavení studie

1. V pravém panelu stiskněte **Nová studie**.
2. Zvolte **Materiál**. Panel ukazuje jeho tuhost (E), Poissonovo číslo, hustotu a mez kluzu. Hodnoty jsou typické tabulkové údaje; certifikované hodnoty vašeho dodavatele se mohou lišit.
3. Zvolte **Síť**:
   - **Čtyřstěnová (přesná)**, výchozí: desetiuzlové čtyřstěny, jejichž vnější plochy leží na plochách dílu, se zakřivenými hranami u otvorů, zaoblení a dalších kulatých ploch. Uzly na rovinných, válcových, kuželových, kulových a toroidních plochách, rotačních a vytažených plochách a plochách volného tvaru (B-spline) leží na přesném povrchu; jiný druh plochy kopíruje svou zobrazovací síť a tabulka výsledků uvádí, kolik ploch tak udělalo. Síť se sama zjemní u zakřivených ploch, tenkých stěn a ostrých hran.
   - **Voxelové krychle (rychlá)**: díl vyplněný stejnými krychlemi. Rychlé, ale zakřivené plochy se změní na schody. Studie uložené před existencí čtyřstěnové sítě si ponechají tuto variantu.
4. Nechte **Velikost prvku** prázdnou pro automatickou velikost (asi 12,000 čtyřstěnů nebo 20,000 krychlí), nebo zadejte velikost v milimetrech. Panel ukazuje, kolik prvků to přibližně udělá, před přidáním jemnějších míst. U čtyřstěnů **Menší prvky na zakřivených plochách** (ve výchozím stavu zapnuto) zjemní otvory a zaoblení, kde napětí obvykle vrcholí.

### Automatické zjemnění

U čtyřstěnů nabízejí statická nebo vzpěrná studie (bez tepelného zatížení), studie vlastní frekvence a ustálená tepelná studie **Automaticky zjemnit (adaptivně)**. Zaškrtněte a nastavte:

- **Cílová chyba (%)**: řešení se zastaví, když odhadovaná chyba klesne pod ni (zpočátku 1 %).
- **Nejvíce průchodů**: nejvíce řešení, která smí provést (zpočátku 5, nejvíce 10).

Každý průchod vyřeší úlohu, najde prvky s největší odhadovanou chybou, rozdělí je (a tolik sousedních, kolik je potřeba, aby síť zůstala celistvá) a znovu vyřeší. Nové uzly na zakřivených plochách přejdou na přesný povrch. Výsledky pak ukážou tabulku a graf s pro každý průchod počtem prvků, počtem neznámých, odhadovanou chybou a špičkovým napětím (nebo teplotou) a posunutím (nebo tepelným tokem), a řádek, proč se zastavilo: cíl byl splněn, průchody došly, další síť by byla příliš velká, nebo průchod selhal (pak vidíte poslední dobrý průchod).

Odhad čtěte jako odhad. Odhad (Zienkiewicz–Zhu; porovnán s přesnými řešeními ukazuje asi 0.6 až 0.95 skutečné chyby) měří chybu na **celém dílu**, takže špičkové napětí u otvoru nebo zaoblení bývá i při malém odhadu stále trochu mimo: u koncentrace napětí nastavte cíl pod 1 % a sledujte, jak se špička od průchodu k průchodu ustaluje. U ostrého vnitřního rohu nebo hrany upnuté plochy je skutečné napětí nekonečné, takže k němu odhad nikdy nedojde: průchody místo toho dojdou.

**Vlastní frekvence a vzpěr.** U studie vlastní frekvence odhad pokrývá každý vámi požadovaný tvar, každý počítaný stejně; tabulka a graf sledují první dvě frekvence. U dílu jen s rovinnými plochami může frekvence od průchodu k průchodu jen klesat (každá síť drží tu předchozí); zakřivené plochy se také přibližují svému skutečnému tvaru, což může frekvenci mírně posunout kterýmkoli směrem. U vzpěru odhad pokrývá předpětí a tvary vzpěru a tabulka sleduje součinitele zatížení. Ověřeno na ocelové tyči 100 × 10 × 10 mm: první frekvence se ustálí z 812.4 na 811.9 Hz během čtyř průchodů, o 0.4 % pod Euler–Bernoulliho (který zanedbává smyk), a součinitel zatížení sloupu je do 0.5 % od Eulera.

## Upnutí a zatížení

Každá studie potřebuje alespoň jednu podporu a pro napětí jedno zatížení.

1. Na panelu nástrojů stiskněte {{ui:Pevné}}. Nová podpora je vybrána a čeká na plochy: klikněte na plochy, které jsou držené bez pohybu (klik na plochu znovu ji odebere). Po dokončení stiskněte **Dokončit výběr** nebo {{key:Esc}}. Modré kužele označují držené plochy.
2. Stiskněte {{ui:Síla}} a klikněte na plochy, na které síla působí. V panelu zadejte **Celková síla** v newtonech a zvolte její **Směr**: do plochy, nebo podél osy. Síla se rozdělí mezi vybrané plochy podle plochy. Oranžové šipky ji ukazují.
3. Stiskněte {{ui:Tlak}} pro tlak v MPa (N/mm²) tlačící do vybraných ploch; záporný tlak táhne.

Další druhy jsou v seznamu **Přidat** v panelu: **plocha bez tření** (plocha může klouzat sama po sobě, ale neodchází od ní — použijte ji pro roviny symetrie a hladké podpory) a **Gravitace** (vlastní tíha dílu, 9.81 m/s², ve směru, který zvolíte).

Podpora, která dílu ponechá volnost klouzat nebo se točit, se odmítne a řekne, který pohyb zůstal volný.

## Řešení a čtení výsledků

Stiskněte {{ui:Řešit}}. Výpočet běží na pozadí; **Zastavit** jej zruší. Potom:

- Díl je obarven podle **napětí podle von Mises**; v **Zobrazit** zvolte **Posunutí** nebo **Bezpečnostní koeficient**. Legenda dává měřítko.
- Ukažte na díl, abyste přečetli hodnoty pod ukazatelem.
- Zaškrtněte **Deformovaný tvar**, abyste viděli ohnutý díl (pohyb zvětšuje **Měřítko**; skutečný je v tabulce).
- Tabulka uvádí největší napětí a kde je, největší posunutí, nejmenší **bezpečnostní koeficient** (mez kluzu ÷ napětí podle von Mises; pod 1 materiál plyne), působící zatížení a **reakce** v podporách (vyrovnávají zatížení) a použitou síť.

U **vlastních frekvencí** zvolte tento **Typ**, nastavte počet **Tvarů** a vyřešte. Každý tvar ukazuje svou frekvenci a podobu (tvary jsou měřítkovány na 1 při jejich největším pohybu).

Když díl změníte, výsledky se označí jako zastaralé: vyřešte znovu.

## Plasticita a kontakt (nelineární studie)

Dva další typy studií jdou za hranici "materiál zůstává pružný":

- **Nelineární (materiál plyne)** sleduje přímku materiálu až k jeho mezi kluzu, pak plošší sklon (**Sklon po mezi kluzu**, 1 % z E, když zůstane prázdné). Zatížení pokračuje v **Krocích zatížení**; krok, který se neustálí, se sám rozpůlí. Výsledky přidají do grafů **Plastickou deformaci** a řeknou, kolik zatížení bylo přeneseno. Pokud se krok stále neustálí, studie se zastaví na posledním dobrém kroku a panel ⚠ Problémy řekne, kde: díl tam ztratil pevnost (kolaps), nebo jsou kroky příliš velké.
- **Kontakt mezi částmi** nechá oddělené části dílu tlačit jedna na druhou. Přidejte **Dvojici kontaktů**, vyberte plochy strany A (plochy, které tlačí) pomocí {{ui:Vybrat plochy}}, potom stranu B pomocí {{ui:Vybrat plochy strany B}}. **Části bez tření** tlačí, klouzají a oddělují se; **slepené části** zůstávají přilepené. Každá část se síťuje samostatně, takže malá mezera mezi nimi je v pořádku. Kontakt je metoda penalizace: části se do sebe trochu zanoří (**součinitel penalizace** × E ÷ velikost prvku určuje tuhost kontaktu). Tabulka ukazuje nejhlubší zanoření, a panel Problémy varuje, když je větší než 1 % velikosti prvku: zvyšte součinitel nebo použijte menší prvky.

Oba používají čtyřstěnovou síť. Tření, velké klouzání a velké rotace se zde neřeší.

## Spuštění v CalculiX

**Export › Vstupní soubor CalculiX (.inp)** (nebo {{ui:Uložit vstup CalculiX (.inp)}} v panelu) uloží studii jako vstupní soubor pro CalculiX, samostatný program, který si nainstalujete a spustíte sami: stejnou síť, materiál, podpory, zatížení a dvojice kontaktů v mm, N a MPa. Spusťte jej a potom **Export › Výsledky CalculiX (.frd)** načte jeho výsledkový soubor zpět na stejnou síť a ukáže posunutí (a napětí podle von Mises, když soubor obsahuje napětí). Pokud jste mezitím změnili díl nebo velikost prvku, síť už není stejná a PartCraft to řekne: uložte nový vstupní soubor.

## Jak moc jí věřit

PartCraft ověřuje svůj řešič proti ručním vzorcům (průhyb konce konzoly PL³/3EI do 1 %, prodloužení tyče PL/AE přesně, první frekvence konzoly do 3 %, napětí kolem otvoru v desce). Přesto mějte na paměti tato omezení:

- **Síť.** U čtyřstěnů PartCraft ověřuje průhyb a ohybové napětí konzoly (do 0.3 %), napětí u otvoru v desce (Kt, do zhruba 1 %), tlustou trubku pod tlakem (Lamé, do 0.3 %) a první frekvenci (do 0.4 %). Tabulka ukazuje **kvalitu sítě** (nejmenší a největší úhly mezi plochami prvků; pod zhruba 10° je prvek špatný) a **odhadovanou chybu napětí**: pokud je větší než několik procent, vyřešte znovu s menší velikostí prvku, nebo to nechte udělat **Automatické zjemnění**. U desky s otvorem a tyče se dvěma hranovými zářezy se automatické zjemnění dostalo do 1 % učebnicového Kt s přibližně šestinou neznámých, které potřebovalo zjemnění celé sítě. U voxelových krychlí je otvor nebo zaoblení schodem o velikosti krychle, takže napětí tam je hrubé.
- **Ostré vnitřní rohy a hrany upnutých ploch nemají skutečné špičkové napětí.** Hodnota tam roste, jak se prvky zmenšují. Čtěte napětí kousek mimo taková místa, nebo zaoblete roh v modelu.
- **Výsledky ke čtení.** Kromě napětí podle von Mises, posunutí a bezpečnostního koeficientu čtyřstěnová studie ukazuje **maximální a minimální hlavní napětí** (tah a tlak) a **ekvivalentní deformaci**. Zaškrtněte **Zobrazit síť**, abyste viděli prvky.
- **Statické studie jsou lineární a pružné.** Pro plastické chování a kontakt použijte výše uvedené nelineární typy studií; velké průhyby a únava se neřeší. Teplo, tepelné napětí a lineární vzpěr jsou vlastní typy studií: viz [Teplo, tepelné napětí a vzpěr](topic:thermal-and-buckling).
- **Každý materiál je stejný ve všech směrech.** Plasty z 3D tisku jsou slabší napříč svými vrstvami, často o třetinu nebo více.
- Toto je laboratorní verze: díly, na kterých záleží, ověřte jiným způsobem.

## Aktualizace při úpravách (Živě)

Zaškrtněte **Aktualizovat, když upravuji** v bloku Řešit a odpovědi simulace budou sledovat vaše úpravy. Změníte-li kótu, zatížení, materiál nebo prostředí, okamžitě se objeví **rychlá odpověď**, vytvořená s prvky čtyřikrát většími než u studie; když se na chvilku zastavíte (asi sekundu), vlastní **zpřesněná odpověď** studie ji nahradí. Výsledky říkají, na kterou se díváte ("Rychlá odpověď" nebo "Zpřesněná odpověď") a velikost prvku. Rychlá odpověď je dobrá pro směr a velikost: u ocelové konzoly byla na průhybu do 1 % a na napětí asi 4 % od zpřesněné. Pro čísla, která použijete, věřte zpřesněné. Statické, vlastních frekvencí, tepelné a vzpěrné studie fungují takto; Živě je nastavení zobrazení a v dílu se neukládá. Řešení, které stisknete sami, zůstává, dokud se neudělá další úprava.

## Zjistěte, co praskne jako první (Zlomit ho)

U statické nebo vzpěrné studie stiskněte **Co praskne jako první?** v bloku **Zlomit ho**. PartCraft škáluje zatížení studie (síly, tlaky a tíhu dohromady), dokud díl nepovolí, a vypíše od nejhoršího **součinitel zatížení k první mezi kluzu** (součinitel k dnešnímu zatížení, při kterém nejvyšší napětí podle von Mises dosáhne meze kluzu materiálu, s červenou značkou, kde se to stane) a **součinitel zatížení ke vzpěru** pro stejné podpory a zatížení. Součinitel 4.3 znamená, že díl unese 4.3násobek svého zatížení, než povolí; **součinitel pod 1 znamená, že už při daném zatížení povoluje**, a objeví se to v seznamu Problémy jako chyba (nejslabší zjištění se zobrazí jako poznámka, i když vše vyhovuje). Součinitele pocházejí z lineární studie na čtyřstěnech při vaší velikosti prvku, takže jsou tak dobré, jak dobrá je ta studie: napětí u upnuté plochy nebo ostrého rohu nemá skutečnou špičku (viz výše), a součinitel meze kluzu tam bude na opatrné straně. Váš asistent může tutéž kontrolu spustit nástrojem `break_run`.

## Související

- [Teplo, tepelné napětí a vzpěr](topic:thermal-and-buckling)
- [Vytvoření tvaru podle zatížení (generativní)](topic:generative-design)
- [Měření vzdáleností, úhlů a hmotnosti](topic:measure)
- [Co zatím není hotovo](topic:not-built-yet)
