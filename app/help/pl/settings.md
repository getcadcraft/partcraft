---
title: Ustawienia PartCraft
summary: Wybierz, który przycisk myszy obraca widok, spraw, by gest na gładziku obracał i przesuwał część, włącz lub wyłącz automatyczne relacje podczas szkicowania oraz ustaw, ile wątków używają solwery symulacji.
keywords: ustawienia, preferencje, opcje, mysz, środkowy przycisk, przycisk kółka, orbita, obrót, obracanie, gładzik, touchpad, przewijanie, przesunięcie, szczypnięcie, relacje, więzy, automatyczne więzy, automatyczne relacje, przyciąganie, zgodność, wątki, wątki solwera, rdzenie, procesory, wielowątkowość, szybsze rozwiązywanie, równoległość
from: 759edcaf
---

Otwórz {{ui:Ustawienia}} kołem zębatym na pasku aplikacji lub {{key:Mod+,}}. Pierwsza karta, {{ui:PartCraft}}, zawiera ustawienia należące do tej aplikacji; {{ui:Ogólne}} zawiera te, które wspólnie mają wszystkie aplikacje CadCraft (motyw, pasek narzędzi, panele). Ustawienia PartCraft istnieją tylko w aplikacji: zmieniasz je tutaj, a ta przeglądarka je zapamiętuje. {{ui:Resetuj ustawienia PartCraft}} przywraca wszystko do wartości początkowych.

## Obracanie widoku

- **Lewy przycisk** (domyślnie): przeciągnij lewym przyciskiem, aby obrócić część; przeciągnij prawym lub środkowym, aby przesunąć widok.
- **Środkowy przycisk**: naciśnij kółko i przeciągnij, aby obrócić część; przytrzymaj {{key:Shift}} (albo {{key:Ctrl}}, albo ⌘) ze środkowym przyciskiem albo przeciągnij prawym przyciskiem, aby przesunąć widok. Lewy przycisk tylko wskazuje ściany, krawędzie i płaszczyzny, więc kliknięcie, które lekko się przesunie, nigdy nie obróci części. Wiele programów CAD działa w ten sposób.

Kółko zawsze powiększa w miejscu wskaźnika. W szkicu prawy i środkowy przycisk przesuwają widok jak wcześniej.

## Przewijanie: kółko myszy lub gładzik

- **Rozpoznaj automatycznie** (domyślnie): PartCraft obserwuje przewijanie. Przewijanie w bok lub drobne, jakie wysyła gładzik, obraca część; pełne kliknięcia kółka powiększają.
- **Kółko myszy**: przewijanie zawsze powiększa w stronę wskaźnika.
- **Gładzik**: przesuń dwoma palcami, aby obrócić część; przytrzymaj {{key:Shift}} i przesuń, aby przesunąć widok; szczypnij, aby powiększyć. W szkicu przesunięcie dwoma palcami przesuwa szkic.

Szczypnięcie powiększa w każdym wyborze. Jeśli „Rozpoznaj automatycznie” zgaduje źle dla Twojej myszy lub gładzika, wybierz ten, którego używasz. Więcej w [Gładzik, dotyk i małe ekrany](topic:trackpad-and-touch).

## Szkicowanie: dodawanie relacji podczas rysowania

**Dodawaj relacje podczas rysowania** (domyślnie włączone): kliknięcie, które przyciąga się do punktu, tworzy nowy punkt zgodny z nim; kliknięcie na krzywej kładzie punkt na tej krzywej; a linia narysowana prawie poziomo lub pionowo staje się pozioma lub pionowa. Zobacz [Relacje i wymiary](topic:relations-dimensions).

Wyłącz to, gdy chcesz umieścić geometrię blisko innej bez łączenia jej z nią. Wskaźnik nadal przyciąga się do punktów i krzywych, ale nic nie jest połączone: linie rysowane w łańcuch nie współdzielą końców, więc przeciągnięcie może je rozsunąć. Dodaj potrzebne relacje samodzielnie z prawego panelu. Zamknięty profil nadal wyciąga się, gdy jego końce się stykają.

:::note
Ustawienie zmienia tylko to, co dodaje nowe rysowanie. Relacje już obecne w szkicu pozostają, a narzędzie Zaokrąglenie nadal tworzy swój łuk styczny i promień.
:::

## Szkicowanie: wymiarowanie podczas rysowania

**Wymiarowanie podczas rysowania** (domyślnie włączone): gdy rysujesz linię, prostokąt, okrąg lub łuk, wpisanie liczby wypełnia pole rozmiaru obok wskaźnika ({{key:Tab}} przechodzi do następnego pola), a {{key:Enter}} rysuje kształt o tym rozmiarze, z wymiarem sterującym dla każdego wpisanego rozmiaru. Wyłączone: wpisywanie liczby podczas rysowania nic nie robi, a kształty rysuje się wyłącznie kliknięciami. Zobacz [Wpisywanie rozmiaru podczas rysowania](topic:sketch-basics#type-the-size-as-you-draw).

## Wskaźnik w rogu

Co pokazuje się w rogu widoku 3D: **Kostka widoku** (domyślnie; prawy górny róg: kliknij ścianę, krawędź lub narożnik, aby spojrzeć stamtąd, przeciągnij, aby orbitować, przeciągnij jej pierścień kompasu, aby obrócić model), **Ikona osi** (mały znacznik X, Y, Z w lewym dolnym rogu, który obraca się razem z widokiem: X czerwony, Y zielony, Z niebieski) albo **Brak**. Żadne z nich nie pojawia się podczas szkicowania ani na arkuszu rysunkowym. Zobacz [Kostka widoku](topic:view-cube).

## Wątki solwera

Ile wątków mogą używać solwery symulacji. **Automatycznie** (domyślnie) wybiera o jeden mniej niż liczba logicznych procesorów komputera (najwyżej 16), dzięki czemu strona pozostaje responsywna podczas rozwiązywania badania; możesz też wybrać liczbę. Duże badania wokselowe, wyboczenie (buckling), naprężenia w czasie i przepływy rozwiązują się szybciej na kilku wątkach (około 2× na 4 wątkach dla 80 000 sześcianów w naszych pomiarach, więcej na bezczynnym komputerze); modele poniżej około 20 000 niewiadomych zostają na jednym wątku, bo uruchomienie wątków kosztuje więcej, niż daje. Rozwiązanie wielowątkowe daje tę samą odpowiedź co jednowątkowe (z dokładnością do zaokrągleń: sumy dodawane są w innej kolejności). Wyniki każdego badania pokazują **N wątków** lub **1 wątek** wraz z powodem pod **Solver**.

Wątki wymagają, aby strona była **cross-origin isolated** (przeglądarka pozwala procesom roboczym współdzielić pamięć tylko wtedy). Strona laboratoryjna to spełnia; gdzie nie, ustawienie to mówi („Ta strona nie jest cross-origin isolated, więc solwery działają na jednym wątku bez względu na wybór.”) i każde rozwiązanie używa jednego wątku. Reszta działa tak samo, a odpowiedzi są te same.

Badania przepływu laminarnego również korzystają z wątków (około 2,5× na 4 wątkach dla 54 000 komórek płynu, ta sama odpowiedź co do ostatniej cyfry). Solwer czworościanów kwadratowych i przewodzenie ciepła działają na jednym wątku: w naszym pomiarze wielowątkowość była wolniejsza (ich solwery ograniczają pamięć i krok, którego nie da się podzielić).

### Na własnym serwerze WWW

Jeśli uruchamiasz PartCraft z własnego serwera, działa on tak, jak jest serwowany. Dla wątków solwera niech serwer wysyła z stroną PartCraft dwa nagłówki:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

W Apache, w `.htaccess` folderu (wymaga mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

W nginx, w bloku `location`, który obsługuje PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Przeładuj stronę: Ustawienia › Wątki solwera zaproponuje wtedy **Automatycznie** z liczbą procesorów Twojego komputera. Drugi nagłówek sprawia, że przeglądarka odrzuca wszystko, co strona ładuje z innej witryny, która na to nie zezwala; dla samego PartCraft jest to w porządku (wszystko ładuje z własnego folderu).
