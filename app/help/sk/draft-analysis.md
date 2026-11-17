---
title: Kontrola úkosu pre lisovanie a odlievanie
summary: Zafarbite súčiastku podľa jej uhla úkosu voči smeru ťahu formy, zistite, ktoré plochy sa uvoľnia, ktoré potrebujú viac úkosu a ktoré sa uvoľnia z druhej polovice, s podielom každej na ploche.
keywords: analýza úkosu, úkos, zúženie, forma, lisovanie, tlakové odlievanie, vstrekovanie, smer ťahu, deliaca rovina, podrez, uvoľnenie, kontrola úkosu
from: 6a106f83
---

Súčiastky vyrobené vo forme, zápustke alebo pieskovej forme potrebujú **úkos**: steny mierne naklonené, aby sa súčiastka dala vybrať. **Analýza úkosu** zafarbí každú plochu podľa toho, o koľko sa odkláňa od smeru, v ktorom sa forma otvára (**ťah**).

## Zapnutie

1. V pracovnom prostredí Návrh otvorte {{ui:Pohľady}} a vyberte {{ui:Analýza úkosov}}.
2. Nastavte **Ťah**: smer, v ktorom sa forma otvára, pozdĺž X, Y alebo Z v ktoromkoľvek smere, alebo **Kolmo na vybratú plochu**: stlačte {{ui:Vybrať plochu}} a kliknite na rovnú plochu súčiastky.
3. Nastavte **Minimálny úkos** v stupňoch: najmenší sklon, ktorý váš proces potrebuje (často 1° až 3°).

Súčiastka je zafarbená:

| Farba | Znamená |
|---|---|
| Zelená: **Kladný úkos** | Naklonená smerom k ťahu aspoň o minimum: uvoľní sa z tejto polovice formy |
| Okrová: **Potrebuje úkos** | V rámci minima v oboch smeroch, napríklad zvislá stena: tu pridajte úkos |
| Červená: **Záporný úkos** | Naklonená od ťahu aspoň o minimum: uvoľní sa z druhej polovice formy, alebo ide o podrez, ak má súčiastka vyjsť z jednej polovice |

Podiel každej triedy na ploche povrchu súčiastky je zobrazený vedľa nej. **Obrátiť ťah** pozerá z druhej polovice formy: zelená a červená sa vymenia.

Zakrivené plochy sa posudzujú bod po bode, takže valec ležiaci naprieč ťahu ukáže pás, ktorý potrebuje úkos pozdĺž svojich bokov.

Farby nasledujú súčiastku pri jej zmene. {{key:Esc}} alebo {{ui:Zavrieť}} analýzu vypne; nič sa v súčiastke neuloží.

:::tip
Ak chcete pridať úkos, použite prvok {{ui:Úkos}} na okrových plochách (pozri [Ťahanie, loft a úkos](topic:sweep-loft-draft)) a potom skontrolujte znovu.
:::
