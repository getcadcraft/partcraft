---
title: Pole magnetyczne w 2-D (samouczek)
summary: Wyznacz pole magnetyczne elektromagnesu lub magnesu trwałego za pomocą biblioteki analiz: uruchom przykłady, odczytaj gęstość strumienia, pole w szczelinie, indukcyjność i siłę przyciągania, zmień projekt i zbuduj własny model cewek, magnesów i żelaza.
keywords: magnetyczne, magnetostatyka, pole magnetyczne, gęstość strumienia, tesla, elektromagnes, solenoid, cewka, amperozwoje, rdzeń żelazny, szczelina powietrzna, przenikalność, indukcyjność, siła magnetyczna, reluktancja, obwód magnetyczny, potencjał wektorowy, elektromagnetyzm, metoda elementów skończonych, fem, silnik, siłownik, transformator, magnetostatic2d, magnes trwały, neodym, NdFeB, ferryt, remanencja, punkt pracy, odwracalność, upływ, magnes trzymający
from: 215f6601
---

Biblioteka analiz PartCraft może wyznaczyć pole magnetyczne cewek i żelaza w 2-D: przekroju czegoś długiego i jednakowego na całej długości, jak elektromagnes, rdzeń transformatora, szyna zbiorcza czy przekrój silnika. Ten samouczek uruchamia przykład elektromagnesu z biblioteki, odczytuje wyniki, zmienia go, pokazuje, jak zamodelować własny kształt, a potem dodaje magnes trwały.

Korzysta z obszaru roboczego Skrypt i [biblioteki analiz](topic:craftscript-library). Aby przejść przez samouczek, nie musisz znać języka CraftScript; przykład opisuje, co robi każda linia.

## Co jest modelowane

Rdzeń żelazny w kształcie litery C, 100 × 80 mm na zewnątrz i grubości 20 mm, z 2 mm szczeliny powietrznej w prawej nodze. Cewka o 100 zwojach, przez którą płynie 10 A (1000 amperozwojów), jest nawinięta na lewą nogę. Wszystko jest długie w kierunku wychodzącym z ekranu, więc wyniki są **na metr głębokości**: aby uzyskać wartość dla rzeczywistego magnesu, pomnóż przez rzeczywistą głębokość.

`magnetostatic2d` z biblioteki wyznacza potencjał wektorowy pola magnetycznego na siatce kwadratów 1 mm w pudle powietrza wokół magnesu, a następnie z niego oblicza gęstość strumienia **B** (w teslach).

## Uruchom przykład

1. Wybierz **Skrypt** w polu **Obszar roboczy** po lewej stronie paska narzędzi.
2. Otwórz kartę **Biblioteka** panelu skryptu, a potem **Przykłady** › **Elektromagnes: pole, szczelina, indukcyjność**.
3. Kliknij {{ui:Otwórz (tylko do odczytu)}}, a potem naciśnij {{key:F5}}.

Po sekundzie lub dwóch płótno pokazuje gęstość strumienia, a konsola wypisuje:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Wykres pod płótnem to pionowa gęstość strumienia B_y wzdłuż środkowej linii rdzenia, od lewej do prawej: około −0.55 T w lewej nodze (strumień płynie w dół), niemal zero w oknie i +0.55 T w prawej nodze oraz w poprzek szczeliny (strumień wraca w górę). Ten sam strumień przechodzi przez żelazo i szczelinę, więc obie nogi i szczelina pokazują niemal tę samą wartość.

## Odczytaj wyniki

- **Pole w szczelinie** wynosi 0.543 T. Obliczenie ręczne traktuje rdzeń jako jeden obwód magnetyczny, B = μ0 N I / (g + l / μr), gdzie g to szczelina, l długość drogi przez żelazo, a μr względna przenikalność żelaza; daje 0.552 T. Pole jest nieco niższe niż w obliczeniu ręcznym, bo strumień wybrzusza się wokół szczeliny (rozproszenie brzegowe, fringing), a część strumienia skraca sobie drogę przez okno (upływ, leakage). Przy mniejszej szczelinie lub drobniejszej siatce oba wyniki się zbliżają.
- **Indukcyjność** cewki 100-zwojowej wynosi 0.154 H na metr głębokości, wyznaczona z energii zgromadzonej w polu. Wzór na obwód daje mniej (0.110 H/m), bo liczy tylko strumień przez szczelinę, a nie strumień, który ją omija.
- **Siła przyciągania** domykająca szczelinę wynosi B² w / (2 μ0) dla powierzchni szczeliny o szerokości w: około 2300 N na metr albo 117 N dla magnesu o głębokości 50 mm.
- **Szczyt** 1.97 T leży w wewnętrznych narożnikach okna, gdzie strumień gwałtownie skręca. Model traktuje żelazo jako liniowe; rzeczywista blacha elektrotechniczna nasyca się przy około 1.5 do 2 T, więc wartości powyżej tego traktuj jako ostrzeżenie, a nie odpowiedź.

:::note
Własne testy biblioteki uruchamiają ten przykład i przy każdej zmianie w PartCraft sprawdzają pole w szczelinie względem wzoru na obwód magnetyczny. Metoda, jej źródła i pozostałe sprawdzenia (długi solenoid, solenoid z rdzeniem żelaznym) są w nagłówku `magnetostatic2d`: kliknij go w bibliotece.
:::

## Zmień projekt

1. Kliknij {{ui:Zrób kopię}} nad skryptem tylko do odczytu. Kopia zapisuje się razem z częścią.
2. Zmień wartość na górze i ponownie naciśnij {{key:F5}}. Wypróbuj:
   - `g = 0.001;` — połowa szczeliny: pole w szczelinie prawie się podwaja, tak samo siła przyciągania (rośnie z B²).
   - `mur = 200;` — gorszy rdzeń: więcej amperozwojów zużywa się w żelazie.
   - `N = 200;` — dwa razy więcej zwojów: dwa razy większe pole, cztery razy większa indukcyjność.
   - `h = 0.0005;` — drobniejsza siatka: dokładniejsze wyniki, około cztery razy dłuższy czas.

Każde uruchomienie zastępuje płótno. Zmienne utworzone przez skrypt (np. `Bgap`, `L`, `F`) pozostają na liście **Zmienne** do własnych obliczeń.

## Zamodeluj własny kształt

Przykład buduje wszystko z trzech list, po jednej wartości na kwadrat siatki; można je przygotować dla dowolnego kształtu narysowanego prostymi liniami wzdłuż siatki:

- **Gdzie jest żelazo:** `iron` ma wartość true dla kwadratów wewnątrz rdzenia. Przykład buduje je z prostokątów: `frame & ~window & ~gap` oznacza „w ramce, nie w oknie, nie w szczelinie”.
- **Przenikalność:** `1 + (mur - 1) * iron` wynosi 1 w powietrzu i `mur` w żelazie. Kilku materiałom nadaj ich własne wartości w ten sam sposób.
- **Prąd:** `J` to gęstość prądu w amperach na metr kwadratowy, dodatnia wychodząca z ekranu, ujemna wchodząca w ekran. Cewka ma dwie strony o przeciwnych znakach; przykład wyznacza `J0` tak, aby jedna strona przenosiła N I.

Następnie `r = magnetostatic2d(m, permeability, J)` go rozwiązuje. `r.B` to gęstość strumienia w każdym kwadracie (dwie kolumny: x i y), `r.Bmag` jej wartość, `r.energy` zgromadzona energia na metr. `plot(x, y)` rysuje linię.

Biblioteka pracuje w metrach, a widok w milimetrach, więc pole pokazane wprost byłoby narysowane tysiąc razy za małe. Przykład pokazuje je na kopii siatki w milimetrach (`mm = quadGrid(…)`, a potem `show(field(mm, …))`): skopiuj te dwie linie.

Domyślnie brzeg pudła zatrzymuje pole: żaden strumień go nie opuszcza. Zrób pudło co najmniej dwa-trzy razy większe od magnesu, aby to nie ściskało pola. Dla magnesu symetrycznego możesz modelować jego połowę: nagłówek `magnetostatic2d` mówi, jakiego warunku brzegowego użyć na osi symetrii.

## Magnesy trwałe

Drugi przykład, **Przykłady** › **Magnes trwały w rdzeniu żelaznym: punkt pracy, upływ, przyciąganie**, to ten sam rdzeń bez cewki, a 10 mm plasterek lewej nogi zastąpiono magnesem namagnesowanym w górę. Uruchom go klawiszem {{key:F5}}. Wypisuje:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Punkt pracy.** Magnes opisuje jego **remanencja** Br (pole, które zachowuje, gdy jest zwarty żelazem: około 1.2 T dla spiekanego magnesu NdFeB, 0.4 T dla ferrytu) oraz przenikalność odwracalna (około 1.05 i 1.1). Otwarcie szczeliny spycha go w dół jego prostej odwracalności: tutaj do 1.04 T, przy czym wewnątrz magnesu H jest skierowane przeciwnie do B.
- **Upływ.** Obliczenie ręczne bez upływu daje 0.97 T w szczelinie; model daje 0.68 T. Magnes napędza swój strumień silnym pchnięciem na krótkim odcinku, więc znaczna jego część wraca prosto przez okno zamiast przez szczelinę. Współczynnik upływu mówi, ile: tutaj 1.53. Ustaw `g = 0;` dla zamkniętej zwory: wtedy magnes pracuje w granicach pół procenta od obliczenia ręcznego.
- **Magnesy we własnym modelu.** Podaj `magnetostatic2d` magnesy jako `struct('Br', Br)`, gdzie `Br` ma jeden wiersz na kwadrat siatki z remanencją wzdłuż x i y w teslach (zero poza magnesami), a kwadratom magnesów nadaj ich przenikalność odwracalną na liście przenikalności:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T upward in the squares where mag is true
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Dla magnesu namagnesowanego pod kątem wpisz `Br·cos(angle)` i `Br·sin(angle)` w dwie kolumny; dla pierścienia namagnesowanego na zewnątrz wyznacz kierunek każdego kwadratu z jego położenia. `r.H` daje natężenie pola H w każdym kwadracie.

Model trzyma magnes na jego prostej odwracalności, bez względu na to, jak mocno go napędzać. Prawdziwy magnes pobudzony poza kolano charakterystyki (dużą szczeliną, silną cewką albo ciepłem) traci część siły na stałe; sprawdź punkt pracy na krzywej producenta dla danego gatunku i temperatury.

Testy biblioteki sprawdzają magnesy względem dwóch wyników ręcznych: okrągłego magnesu na otwartym powietrzu (wewnątrz B = Br / (1 + μr)) oraz magnesu zamkniętego żelazną zworą (obwód magnetyczny), oba w granicach 1 %.

## Czego jeszcze nie robi

- **Nasycenie.** Żelazo jest liniowe: dwa razy większy prąd, dwa razy większe pole, bez granic.
- **Rozmagnesowanie.** Magnesy pozostają na swojej prostej odwracalności (zob. wyżej).
- **Prądy wirowe** i **straty** (straty w żelazie, straty w miedzi).
- **Części ruchome i moment.** Brak wirnika obracającego się w stojanie, brak momentu w funkcji kąta.
- **Kształty okrągłe.** Siatka składa się z równych kwadratów, więc krzywe kontury wychodzą schodkowe.
- **3-D.** Wszystko jest przekrojem czegoś długiego.

Projektowanie silników (obracający się wirnik, moment i straty w 2-D) jest rozważane na późniejszą wersję. Zob. [Jeszcze nie zbudowano](topic:not-built-yet).
