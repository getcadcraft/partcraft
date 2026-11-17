---
title: Blacha: kołnierze i rozwinięcie płaskie
summary: Zacznij część z blachy od szkicu (płaskiej płyty lub giętego profilu), ustaw raz jej grubość, promień gięcia i współczynnik K, wyginaj kołnierze z krawędzi z odciążeniami gięcia i rozłóż ją na płasko jako DXF do cięcia.
keywords: wzór płaski, rozwinięcie, rozwinięcie płaskie, długość rozwinięta, naddatek na gięcie, linia gięcia, dxf do lasera, cięcie laserowe, blacha, kołnierz bazowy, kołnierz krawędziowy, kołnierz, gięcie, promień gięcia, współczynnik K, k-factor, grubość, miernik blachy, odciążenie, odciążenie gięcia, kątownik, wspornik, obudowa, gięta blacha
from: 144bd0f6
---

:::note
**Jeszcze nie zbudowano w tej wersji.** Blacha wymaga dokładnego jądra geometrii, którego ta wersja PartCraft nie ma: wszystkie części buduje jądrem siatkowym. [Czego jeszcze nie zbudowano](topic:not-built-yet) mówi, co robić zamiast tego. Reszta tej strony opisuje, jak to działa z dokładnym jądrem.
:::

Części z blachy zaczynają się od **kołnierza bazowego**. Ustala on arkusz dla całej części: jego **grubość**, **wewnętrzny promień gięcia** i **współczynnik K**. Każdy późniejszy **kołnierz krawędziowy** gnie się z tymi samymi wartościami, więc część pozostaje jednym arkuszem, który można rozłożyć. Oba wymagają **dokładnego jądra** (zobacz [Jądro siatkowe](topic:solid-kernels)).

## Zacznij od kołnierza bazowego

1. Narysuj szkic. Użyj **zamkniętego profilu** dla płaskiej płyty (prostokąta lub dowolnego zamkniętego kontura z otworami). Użyj **jednego otwartego łańcucha linii** dla giętej blachy, na przykład L, U lub Z narysowanego jako widok krawędzi arkusza.
2. Zaznacz szkic w historii elementów.
3. Otwórz {{ui:Więcej}} w grupie Elementy i wybierz {{ui:Kołnierz bazowy}}.

W panelu po prawej:

- **Grubość (mm)** to grubość arkusza.
- **Promień gięcia (mm)** to wewnętrzny promień każdego zgięcia. 0 daje ostry wewnętrzny narożnik; zewnętrzna strona nadal zaokrągla się promieniem równym jednej grubości.
- **Współczynnik K** określa, gdzie w arkuszu leży warstwa obojętna, od 0 (ściana wewnętrzna) do 0,5 (środek). Decyduje, jak długi jest arkusz po rozłożeniu na płasko. 0,44 to wartość domyślna; Twój warsztat lub dostawca materiału może podać własną.
- **Głębokość (mm)** to odległość, na jaką gięty profil wychodzi poza płaszczyznę szkicu. Płyta ją ignoruje.
- **Grubość poza zgięciami**: otwarty profil to jedna ściana arkusza. Domyślnie grubość idzie do wewnątrz pierwszego zgięcia, więc narysowane linie są zewnętrzną stroną kanału. Zaznacz to, aby zamiast tego umieścić linie od wewnątrz. Wynik jest taki sam, z którego końca rysowałeś.

Każdy narożnik otwartego łańcucha staje się zgięciem. Linia zbyt krótka, by pomieścić swoje zgięcia, mówi o tym, podając potrzebną długość.

## Wyginanie kołnierza krawędziowego

1. Kliknij prostą krawędź górnej lub dolnej ściany arkusza (długie krawędzie, nie cienkie).
2. Wybierz {{ui:Więcej}} › {{ui:Kołnierz krawędziowy}}. Jeśli nie wskazano krawędzi, PartCraft czeka, aż ją klikniesz; {{key:Esc}} anuluje.

Kołnierz wygina się w górę od ściany tej krawędzi wokół wewnętrznego promienia arkusza, a potem biegnie prosto. W panelu:

- **Kąt (°)** to wielkość gięcia, od 1 do 180. 90 to kołnierz prostokątny.
- **Długość (mm)** to prosty odcinek za zgięciem.
- **Gnij w drugą stronę** gnie od drugiej ściany (w dół zamiast w górę).
- **Odsunięcie na początku** i **Odsunięcie na końcu** skracają kołnierz z każdego końca krawędzi.
- **Odciążenie gięcia**: gdy koniec jest odsunięty, obok wycinany jest rowek w arkuszu, aby gięcie nie rozerwało tam metalu. **Szerokość odciążenia** ustala szerokość rowka; jego głębokość to promień gięcia plus grubość. Wybierz **Brak**, aby pozostawić narożnik nieobcięty.

Aby później zmienić krawędź, naciśnij {{ui:Wskaż}} w panelu i kliknij inną.

:::tip
Użyj parametrów dla grubości i promienia (zobacz [Parametry i równania](topic:parameters)), aby zmiana grubości od razu zaktualizowała wszystkie kołnierze.
:::

## Rozkładanie na płasko

Oba panele kończą się sekcją **Rozwinięcie blachy**. Naciśnij {{ui:Rozłóż na płasko}}:

- Podgląd pokazuje rozłożony arkusz, z przerywaną linią środkową każdego zgięcia.
- **Rozmiar** i **Pole** dotyczą płaskiego półfabrykatu.
- Każde zgięcie jest wymienione z kierunkiem (**w górę** lub **w dół**, patrząc od strony szkicu kołnierza bazowego), kątem i wewnętrznym promieniem.

Każde zgięcie zajmuje długość warstwy obojętnej arkusza, **naddatek na gięcie**: kąt (w radianach) × (promień wewnętrzny + współczynnik K × grubość). Zatem zgięcie o 90° arkusza 2 mm z promieniem 2 mm i współczynnikiem K 0,44 dodaje 4,52 mm płaskiego arkusza.

Na płaskiej płycie otwory, wycięcia i odciążenia gięcia pojawiają się na rozwinięciu dokładnie tam, gdzie są, w tym otwory przez kołnierz.

Aby wyciąć wiele części, naciśnij {{ui:Układaj na arkuszach…}} pod rozwinięciem: zobacz [Układanie płaskich części na arkuszach](topic:nest-flat-parts). Gięty kołnierz bazowy rozkłada się jako jeden prostokąt: jego rozwinięta długość × głębokość, z linią gięcia na każdym narożniku.

{{ui:Zapisz DXF}} zapisuje rozwinięcie do lasera, prasy lub wycinarki wodnej, w milimetrach:

- kontur na warstwie **OUTLINE** jako linie, łuki i okręgi;
- linie gięcia na warstwie **BEND**, przerywane;
- notatka przy każdym zgięciu na warstwie **BEND_NOTES**, na przykład „UP 90° R2”.

Zmiana czegokolwiek usuwa rozwinięcie; naciśnij ponownie {{ui:Rozłóż na płasko}}, aby uzyskać nowe.

:::note
Przed cięciem sprawdź współczynnik K ze swoim warsztatem: od niego zależy długość rozwinięcia, a zmienia się w zależności od materiału, grubości i narzędzi.
:::

## Komunikaty

- **Blacha wymaga kołnierza bazowego przed nią** — dodano kołnierz krawędziowy przed jakimkolwiek kołnierzem bazowym. Przenieś go poniżej kołnierza bazowego albo najpierw dodaj kołnierz bazowy.
- **Kołnierz krawędziowy wymaga prostej krawędzi** — kołnierze gną się tylko wzdłuż linii; krzywe krawędzie na razie nie mogą go przyjąć.
- **Ta krawędź nie leży na ścianie grubości arkusza** — krawędź należy do ściany, która nie jest górną ani dolną ścianą arkusza (na przykład ścianą otworu). Wskaż krawędź górnej lub dolnej ściany.
- **Odsunięcia nie zostawiają nic z krawędzi** — oba odsunięcia razem dają całą krawędź lub więcej.
- **Kołnierzy krawędziowych na giętym kołnierzu bazowym nie da się jeszcze rozłożyć na płasko** — zacznij od płaskiej płyty i wygnij wszystko kołnierzami krawędziowymi, które się rozkładają.
- **Wycięcia i otwory wykonane po giętym kołnierzu bazowym nie są jeszcze pokazane w jego rozwinięciu** — rozwinięcie giętego profilu to tylko jego rozwinięty prostokąt.
