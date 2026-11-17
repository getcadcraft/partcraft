---
title: Prijenos dijelova prema drugim modelerima i iz njih
summary: Pošaljite dio drugom modeleru dijelova kao makronaredbu koja ga ponovno gradi sa živim stablom značajki. Imenovani STEP i otvaranje popisa značajki koji je drugi modeler zapisao još nisu izrađeni u ovoj verziji.
keywords: makronaredba, nije izrađeno, swb, vba, stablo značajki, povratni prijenos, izvezi makronaredbu, cadcraft-sw.json, imenovani step, ap214, globalne varijable, jednadžbe, izvorni dio
from: 97ca61da
---

PartCraft razmjenjuje dijelove sa SolidWorksom u oba smjera, bez formata datoteke koji nitko drugi ne može čitati:

- **Prema van:** makronaredba (`.swb`, običan tekst) koju SolidWorks pokreće da sam izgradi dio, značajku po značajku, sa skicama, odnosima, kotama, globalnim varijablama i jednadžbama. Dobijete izvorni dio sa živim stablom značajki, a ne mrtvo tijelo.
- **Natrag:** makronaredba koju pokrećete unutar SolidWorksa zapisuje značajke i jednadžbe dijela u datoteku `.cadcraft-sw.json`. Otvaranje te datoteke u PartCraftu još nije izrađeno u ovoj verziji (treba egzaktnu jezgru).

:::warning
Ništa od ovoga još nije testirano u SolidWorksu. SolidWorks radi samo na Windowsu i uz licencu, a PartCraft te makronaredbe nikad nije pokretao u njemu. Makronaredbe su napisane prema dokumentaciji SolidWorks API-ja i provjerene samo po strukturi ovdje. Očekujte da ćete prijaviti probleme; dnevnik koji makronaredba zapisuje kaže koji je korak zakazao.
:::

PartCraft ne može zapisati datoteku `.sldprt`: taj format je zatvoren. Makronaredba je način za dobivanje izvornog dijela.

## Pošaljite dio kao makronaredbu

1. Otvorite dio.
2. Odaberite {{ui:Izvoz}}, zatim {{ui:Makronaredba za SolidWorks (.swb)}}. PartCraft preuzima `<part>.swb`; statusna traka kaže da je zapisana „bez egzaktne jezgre“.
3. Dijaloški okvir kaže koliko značajki, globalnih varijabli i jednadžbi makronaredba gradi, i navodi što izostavlja. Uz nju se u ovoj verziji ne sprema STEP: ako vam treba, odaberite {{ui:Izvoz}}, zatim {{ui:STEP (stranični, mrežna jezgra)}}.
4. U SolidWorksu odaberite **Tools > Macro > Run**, odaberite datoteku `.swb` i pričekajte. Stvara novi dio iz vašeg zadanog predloška dijela, postavlja milimetre i gradi svaku značajku.
5. Na kraju poruka kaže koliko je koraka obavljeno, koliko ih je zakazalo i koliko se tijelo podudara s tijelom u programu PartCraft. Potpuni dnevnik, `<part> macro log.txt`, zapisuje se pored makronaredbe.

Što makronaredba gradi:

| PartCraft | U novom dijelu |
|---|---|
| Skica na prednjoj, gornjoj ili desnoj ravnini | Skica na toj ravnini, s linijama, lukovima, kružnicama, točkama, odnosima i kotama (imenovanim kao u PartCraftu, npr. `k7`) |
| Skica na plohi | Skica na istoj plohi, odabrana točkom na njoj |
| Skica na fiksnoj ravnini | Referentna ravnina kroz tri točke i skica na njoj |
| Izvlačenje, rez (slijepo, kroz sve, srednja ravnina, dva smjera, zakošeno) | Boss-extrude ili cut-extrude |
| Rotacija, rotirani rez | Rotacija oko iste osi |
| Rupa (jednostavna, upuštena, stožasto upuštena, s navojem) | Jedan ili dva reza sa svojim skicama (rupa s navojem je njezina bušotina za navoj; bez navoja) |
| Linearni i kružni uzorak, zrcaljenje | Linearni uzorak, kružni uzorak, zrcaljenje (značajke ili tijelo) |
| Zaobljenje, skošenje, ljuska | Zaobljenje, skošenje i ljuska na istim bridovima i plohama, odabrani točkama |
| Parametri i jednadžbe | Globalne varijable i jednadžbe na preimenovanim kotama |
| Potisnute značajke, traka povratka | Potisnute na isti način; traka povratka na istom mjestu |

Nakon svake čvrste značajke makronaredba uspoređuje volumen i veličinu tijela s vrijednostima u PartCraftu. Kad se razlikuju, jednom okrene smjer te značajke i provjeri ponovno; ako to nije bolje, vraća ga i u dnevnik zapisuje „Check“.

### Što se izostavlja

Dijaloški okvir i početak makronaredbe navode sve što nije preneseno, s razlogom. Za sada to su: uvezena tijela (umetnite STEP umjesto toga), provlačenja (sweep), lofti, nagibi, referentne osi i točke, završni uvjeti „do“, izvlačenje samo nekih kontura i sve što o njima ovisi. Splineovi postaju krivulje kroz svoje točke. Ova verzija nema egzaktnu jezgru, pa su izostavljeni i skice na plohama te značajke koje odabiru bridove ili plohe.

## Pošaljite imenovani STEP

Još nije izrađeno u ovoj verziji: {{ui:STEP za SolidWorks (imenovan, AP214)}} treba egzaktnu jezgru, a odabir kaže „STEP za SolidWorks: još nije izrađeno. …“. S egzaktnom jezgrom datoteka nosi ime dijela, milimetre i boju dijela te postavlja Y prema gore, kako SolidWorks prikazuje dijelove (obični izvoz {{ui:STEP AP214 (egzaktno tijelo)}} postavlja Z prema gore). Slova s dijakriticima gube ih u imenu, a ostali znakovi izvan običnog ASCII-ja postaju `_`.

## Vraćanje dijela

Otvaranje datoteke u PartCraftu (korak 3) još nije izrađeno u ovoj verziji: kaže „Otvaranje izvoza iz SolidWorksa: još nije izrađeno. …“. Aplikacija za crtanje CadCraft i dalje otvara datoteku i preuzima njezine skice.

1. Odaberite {{ui:Datoteka}} > {{ui:Izvoz}} > {{ui:Izvezi makronaredbu za vraćanje dijelova (.swb)}} za preuzimanje `CadCraftExport.swb` i stavite je uz svoje dijelove.
2. U SolidWorksu otvorite dio, odaberite **Tools > Macro > Run** i odaberite `CadCraftExport.swb`. Makronaredba zapisuje `<part>.cadcraft-sw.json` pored dijela i ništa u njemu ne mijenja.
3. U PartCraftu odaberite {{ui:Otvori}} i odaberite tu datoteku ili je ispustite na 3D prikaz.
4. S egzaktnom jezgrom PartCraft ponovno gradi dio značajku po značajku i prikazuje što je učinio: npr. „5 od 5 značajki preneseno iz SolidWorksa (Flange.SLDPRT)“, svaku značajku koju nije mogao prenijeti („Nije preneseno: Sweep1 (Sweep).“) i podudara li se volumen s onim koji je zapisao SolidWorks.
5. Spremite ga kao PartCraft dio s {{ui:Spremi}}.

Skice se stavljaju na osnovnu ravninu kad leže na njoj, na odgovarajuću ravnu plohu dijela kad postoji (pa prate kasnije izmjene), a inače na fiksnu ravninu. Bridovi i plohe zaobljenja, skošenja i ljuski pronalaze se iz točaka i čuvaju kao imenovane reference. Globalne varijable postaju parametri (imena s razmacima dobivaju donje crte: „Bolt count“ postaje `Bolt_count`), a jednadžbe postaju jednadžbe na istim kotama. Ništa se ne pogađa: sve što nema odgovarajući par navodi se.

Aplikacija za crtanje CadCraft otvara istu datoteku i preuzima njezine skice.

:::note
Format je `cadcraft-sw-export` verzija 1, obični JSON u milimetrima i stupnjevima. Datoteka iz novije makronaredbe ili ona koja nije valjana odbija se uz razlog.
:::
