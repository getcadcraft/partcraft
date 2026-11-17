---
title: Seznam dílů, rozložené pohledy a pohyb dílů
summary: Přiřaďte dílům sestavy číslo, popis a materiál, čtěte a stahujte kusovník, vytvářejte rozložené pohledy krok za krokem nebo automaticky, ručně přesouvejte díly bez vazby, nastavte meze vazeb a exportujte celou sestavu jako STL, 3MF nebo kusovník.
keywords: kusovník, seznam dílů, číslo dílu, materiál, hustota, csv, rozložený pohled, rozložit, sbalit, stopy, přesunout díl, tažení, ovladač, posun, otočit, meze vazeb, export sestavy, krok sestavy, výkres sestavy, výnosky
from: ebc9f6f3
---

Tyto nástroje jsou na pravém panelu sestavy (viz [Sestavení sestavy pomocí vazeb](topic:build-assembly)).

## Vlastnosti dílu

Vyberte díl v seznamu vlevo. V části **Vlastnosti dílu** nastavte:

- **Číslo dílu** (až 40 znaků) a **Popis** (až 200 znaků).
- **Materiál**: běžný materiál s jeho hustotou, nebo **Vlastní hustota…** pro zadání v g/cm³. Panel pak zobrazí hmotnost dílu.

Vlastnosti patří dílu, takže je sdílí každá jeho kopie. Ukládají se do souboru sestavy.

## Kusovník

Když nic není vybráno ({{key:Esc}}), panel zobrazuje **Kusovník**: jeden řádek pro každý díl s jeho položkovým číslem, množstvím (kolik kopií), číslem dílu, názvem, materiálem a hmotností. Položková čísla jsou v pořadí, v jakém se díly poprvé objeví v seznamu. Hmotnosti vycházejí z objemu každého dílu (z fasetovaného tělesa, které vytváří mesh jádro, u kulatých dílů o něco nižší) a jeho materiálu. Díl bez materiálu nemá hmotnost a pak není ani celkový součet.

{{ui:Stáhnout CSV}} uloží seznam jako soubor CSV (také **Export › Kusovník (CSV)**). Otevře se v libovolném tabulkovém editoru. Text začínající znaky = nebo + dostane úvodní apostrof, aby jej tabulkový editor nespustil jako vzorec.

## Rozložené pohledy

Rozložený pohled rozdělí díly, aby byly vidět obrázky. Nikdy nemění vazby ani skutečné polohy dílů: ukládání, kontroly kolizí a exporty používají skutečné polohy.

1. Když nic není vybráno, zvolte {{ui:Nový pohled}} v části **Rozložené pohledy**.
2. V části **Přidat krok** zaškrtněte díly, které krok přesouvá, zvolte **Směr** (+X … −Z, normálu plochy, na kterou kliknete, nebo **Přetáhnout šipku v pohledu**) a **Vzdálenost**, pak zvolte {{ui:Přidat krok}}. S volbou **Přetažení** přetáhněte šipku a pusťte: krok převezme směr a vzdálenost, které jste přetáhli.
3. Přidejte další kroky. Přehrávají se postupně za sebou.
4. Posuvníkem mezi **Sestaveno** a **Rozloženo** animujte pohled. Čárkované stopy vedou od klidové polohy každého dílu k jeho aktuální poloze.

{{ui:Automaticky (radiálně)}} odsune každý díl kromě pevného od středu sestavy. {{ui:Automaticky (vazby)}} posune každý spojený díl (se vším, co je pod ním spojeno) ven podél normály plochy jeho vazby. Můžete uchovat několik pojmenovaných pohledů; vyberte jeden v **Pohled**, nebo **Sestaveno** pro návrat dílů na místo. Pohledy se ukládají do souboru sestavy.

## Přesun dílu ručně

Ručně se přesouvá jen díl bez vazby na pevný díl (pevný díl je zafixován, vazby umisťují zbytek). Vyberte jej a v části **Přesun ručně**:

- Zadejte **ΔX, ΔY, ΔZ** a zvolte {{ui:Přesun}}, nebo zvolte osu a **Úhel** a {{ui:Otočit}} (kolem středu dílu).
- {{ui:Tažením přesunout}} zobrazí na dílu šipky: přetáhněte šipku pro posun podél dané osy, nebo čtverec pro posun v rovině. {{ui:Tažením otočit}} zobrazí kroužky pro otočení. Každé přetažení je jeden krok zpět. {{key:Esc}} šipky skryje.

## Meze vazeb

Vyberte vazbu, která se pohybuje, a v části **Meze** zaškrtněte **Držet … mezi mezemi** u kterékoli její hodnoty, pak nastavte její **Minimum** a **Maximum**. Každá hodnota se drží uvnitř svých mezí, její posuvník pokrývá jen tento rozsah a {{ui:Zkontrolovat pohyb na kolize}} prochází jen mezi nimi. Válcová vazba může omezit svůj úhel, posun nebo obojí. Změna typu vazby odstraní meze u hodnot, které nový typ nemá.

## Export celé sestavy

V sestavě nabídka **Export** zapíše celou sestavu se všemi díly na jejich místech:

- **STEP AP242 / AP214** a **Výkres (PDF)** zatím v této verzi nejsou hotové: vyžadují přesné jádro, proto jsou šedé. Místo toho exportujte STEP každého dílu (přesné těleso) přímo z dílu.
- **STL**: jedna síť všech dílů. **3MF**: každý díl jednou, umístěný jednou za každou kopii.
- **Kusovník (CSV)**.

## Omezení

- Výkres sestavy a STEP sestavy zatím v této verzi nejsou hotové (vyžadují přesné jádro). Rozložené pohledy slouží pro obrázky na obrazovce.
