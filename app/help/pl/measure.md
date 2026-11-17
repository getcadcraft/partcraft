---
title: Zmierz odległości, kąty i masę
summary: Kliknij dwie rzeczy w widoku, aby uzyskać najmniejszą odległość, kąt i ΔX ΔY ΔZ; odczytaj długość krawędzi, średnicę otworu, pole ściany lub współrzędne punktu; uzyskaj objętość, masę, środek masy i bezwładność części lub złożenia.
keywords: mierzenie, odległość, minimalna odległość, kąt, długość, promień, średnica, pole, współrzędne, delta, inspekcja, właściwości masowe, masa, ciężar, środek masy, bezwładność, moment bezwładności, gęstość, materiał
from: 20bda0b7
---

**Zmierz** działa na modelu we wszystkich obszarach roboczych (Design, Form, Simulation, Generative, Manufacture) i w złożeniu. Jest w menu {{ui:Widoki}} w grupie **Widok**, albo naciśnij {{key:M}}. Karta otwiera się w lewym górnym rogu widoku.

## Zmierz jedną rzecz

Kliknij wierzchołek, krawędź lub ścianę. Karta pokazuje:

- **Punkt** (wierzchołek, środek krawędzi lub środek okręgu): jego X, Y, Z.
- **Krawędź**: prosta, okrąg lub krzywa oraz jej długość; dla okręgu także promień, średnica i środek.
- **Ściana**: płaska, walec, stożek itd. oraz jej pole; normalna płaskiej ściany; promień i średnica walca (rozmiar otworu). Pola liczone są dla facetów, które buduje jądro siatki.
- **Cała bryła**: przytrzymaj {{key:Shift}} i kliknij część. Otrzymasz jej objętość, pole, masę i bezwładność (zob. niżej).

Wskaźnik przyciąga do wierzchołków, środków krawędzi i środków okręgów w odległości 10 pikseli; mała niebieska kropka pokazuje przyciągnięcie, zanim klikniesz. Aby wskazać środek otworu, wskaż jego środek; aby wskazać jego krawędź (okrąg), wskaż krawędź.

## Zmierz między dwiema rzeczami

Kliknij drugi element. Karta dodaje:

- **Minimalna odległość** i dwa najbliższe punkty, narysowane w widoku linią między nimi.
- **ΔX, ΔY, ΔZ** od pierwszego najbliższego punktu do drugiego.
- **Kąt** między dwiema płaskimi ścianami (między ich normalnymi, 0–180°), między dwiema prostymi krawędziami lub osiami (0–90°) albo między krawędzią a ścianą.
- **Odstęp między płaszczyznami** dla dwóch równoległych płaskich ścian, **Środek do środka** dla dwóch okręgów lub otworów, **Oś do osi** dla dwóch równoległych otworów lub walców.

Trzecie kliknięcie zaczyna nową parę. {{key:Esc}} czyści wskazania; kolejne {{key:Esc}} (albo {{ui:Zamknij}}) zamyka Zmierz. {{ui:Kopiuj}} kopiuje wyniki do schowka jako tekst rozdzielany tabulatorami, gotowy do wklejenia do arkusza.

### Jak dokładnie

PartCraft buduje część jądrem siatki, więc odległości liczone są na facetach siatki, a karta podaje **przybliżone: z facetów**: poprawne dla płaskich ścian i między wierzchołkami, nieco niedokładne dla zakrzywionych. Dokładniejsze ustawienie **Krzywe** zbliża je do prawdy. Dokładny pomiar na prawdziwych powierzchniach wymaga dokładnego jądra: jeszcze nie zbudowano w tej wersji.

## Właściwości masowe

Wybierz {{ui:Właściwości masowe}} w karcie albo w menu {{ui:Widoki}}. Dla części wybierz w karcie **Materiał** (stal, aluminium, tworzywa i inne o zwykłych gęstościach). W złożeniu każda część używa materiału ustawionego w jej właściwościach (zaznacz część, a potem **Materiał**), a wynik dotyczy wszystkich części razem.

Karta pokazuje masę, objętość, pole, środek masy, tensor bezwładności (Ixx, Iyy, Izz oraz iloczyny Ixy, Iyz, Ixz, w kg·mm², względem środka masy wzdłuż osi świata) i momenty główne. Bez materiału pokazuje to samo na jednostkę gęstości (mm⁵) i bez masy.

Liczby są dokładne dla bryły z siatką, którą buduje jądro siatki (zakrzywione ściany jako facety), więc część okrągła wychodzi nieco za niska, i karta to mówi. Gęstości materiałów to typowe wartości z podręczników; prawdziwy stop lub gatunek może różnić się o kilka procent.

## Ograniczenia

- Przyciąganie może znaleźć punkt ukryty za inną geometrią; sprawdź, czy karta pokazuje to, co miałeś na myśli.
- Zmierz zamyka się, gdy otworzysz szkic lub arkusz rysunku albo przełączysz obszar roboczy.
