---
title: Żebra i blachy węzłowe
summary: Usztywnij część żebrem narysowanym jako jedna linia: wypełnia się od linii do ścian, na zadaną grubość w poprzek płaszczyzny szkicu, po stronie, którą wybierzesz.
keywords: żebro, blacha węzłowa, przepona, usztywnienie, rozpórka, wspornik, podpora narożnika, cienka ścianka, wzmocnij
from: 5c218881
---

:::note
**Jeszcze nie zbudowano w tej wersji.** Żebro wymaga dokładnego jądra geometrii, którego ta wersja PartCraft nie ma: buduje każdą część jądrem siatkowym. [Co jeszcze nie jest zbudowane](topic:not-built-yet) mówi, co zrobić zamiast tego. Reszta tej strony opisuje, jak działa z dokładnym jądrem.
:::

**Żebro** (albo blacha węzłowa) to cienka ścianka, która usztywnia część, np. trójkąt w narożniku wspornika w kształcie litery L. Rysujesz tylko jego wolną krawędź: PartCraft wypełnia przestrzeń między tą linią a ścianami. Wymaga **dokładnego jądra** (zob. [Jądro siatkowe](topic:solid-kernels)).

## Dodaj żebro

1. Zrób płaszczyznę przez środek miejsca, gdzie idzie żebro (dla wspornika L o głębokości 40 płaszczyznę 20 przed jego szkicem: zob. [Płaszczyzny, osie i punkty odniesienia](topic:reference-geometry)).
2. Naszkicuj na niej **jedną linię** od ściany do ściany — albo kilka linii jedna za drugą dla wygiętej krawędzi żebra. Linia może nie sięgać ścian: jej końce są przedłużane, aż się z nimi spotkają.
3. Zaznacz szkic i wybierz {{ui:Więcej}} › {{ui:Żebro}}.

Żebro wypełnia przestrzeń od linii do ścian po stronie w kierunku środka części, więc blacha węzłowa ląduje w wewnętrznym narożniku. Jeśli ta strona jest otwarta, a druga zamknięta, PartCraft ją odwraca i o tym informuje.

## Ustawienia

- **Grubość (mm)** to grubość żebra w poprzek płaszczyzny szkicu. Może być sterowana parametrem.
- **Grubość** (wybór pod nią): **Wyśrodkowana na płaszczyźnie szkicu**, **Przed płaszczyzną** (wzdłuż jej normalnej) albo **Za płaszczyzną**.
- **Odwróć** wypełnia drugą stronę linii.

## Komunikaty

- **Po tej stronie krawędź żebra nigdy nie styka się z bryłą** — nic się tam nie zamyka: zaznacz albo odznacz **Odwróć**, albo przesuń linię, tak aby ograniczały ją ściany.
- **Żebro potrzebuje jednego otwartego łańcucha linii w swoim szkicu** — szkic ma zamknięty kształt, łuk albo spline, albo linie, które nie łączą się koniec w koniec.
- **Krawędź żebra przebiega tam wewnątrz bryły** — linia leży wewnątrz bryły; narysuj ją w otwartej przestrzeni między ścianami.
