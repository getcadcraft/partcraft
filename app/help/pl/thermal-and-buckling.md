---
title: Ciepło, naprężenia termiczne i wyboczenie
summary: Wyznacz temperatury w części z ustalonych temperatur, strumienia ciepła, mocy cieplnej, konwekcji i promieniowania (w stanie ustalonym lub w czasie), obciąż analizę naprężeń wzrostem temperatury i wyznacz obciążenie, przy którym smukła część się wyboczy, wraz z tym, co każda metoda może, a czego nie może ustalić.
keywords: termiczne, przewodzenie ciepła, ciepło, temperatura, przewodzenie, konwekcja, współczynnik wnikania, promieniowanie, emisyjność, strumień ciepła, moc cieplna, generacja ciepła, radiator, nieustalone, czas, chłodzenie, nagrzewanie, Crank-Nicolson, niejawna metoda Eulera, bilans cieplny, naprężenie termiczne, naprężenie termiczne w czasie, nieustalone naprężenie termiczne, hartowanie, szok termiczny, historia naprężeń, najgorszy czas, rozszerzalność cieplna, współczynnik rozszerzalności, wyboczenie, wyboczenie Eulera, współczynnik obciążenia, obciążenie krytyczne, słup, smukły, wartość własna
from: 1a1b7545
---

Te analizy działają w obszarze roboczym Simulation, obok naprężeń statycznych i częstotliwości drgań własnych (zob. [Sprawdź naprężenia i ugięcie](topic:simulation)). Wybierz je w polu **Typ** w panelu. Używają tej samej siatki małych sześcianów i tej samej listy materiałów; każdy materiał z biblioteki ma przewodność cieplną, ciepło właściwe i współczynnik rozszerzalności (typowe wartości z podręczników, pokazane w **Właściwościach**).

## Termiczne: dokąd idzie ciepło?

1. Wybierz **Termiczne (przenoszenie ciepła)** jako **Typ**.
2. Dodaj warunki cieplne z listy **Dodaj** w panelu, a potem kliknij ich ściany (jak przy podporach i obciążeniach):
   - **Stała temperatura**: ściana jest utrzymywana w temperaturze, w °C.
   - **Strumień ciepła**: W/m² płynące do ściany (ujemny wypływa). Działa na prawdziwą powierzchnię ściany, nawet tam, gdzie sześciany tworzą schodki.
   - **Moc cieplna**: suma w watach, rozdzielona na wybrane ściany proporcjonalnie do powierzchni. Użyj jej dla grzałki lub układu o znanej mocy.
   - **Konwekcja**: powietrze lub ciecz o danej temperaturze odbiera ciepło z szybkością h W/(m²·K). Typowe h: nieruchome powietrze 5–10, wentylator 25–100, woda 500–10,000. PartCraft nie oblicza h: w tej analizie nie ma przepływu płynu.
   - **Promieniowanie**: ściana promieniuje do otoczenia o danej temperaturze, z emisyjnością od 0 do 1. Jest **linearyzowane** (promieniowanie zapisane jako współczynnik zależny od temperatury i przeliczane ponownie, aż się ustabilizuje) i dociera tylko do otoczenia: ściany nie wymieniają ciepła między sobą.
3. **Generacja ciepła** (W/m³) ogrzewa całą część od wewnątrz, na przykład część rezystancyjną.
4. Naciśnij **Rozwiąż**. Część jest pokolorowana według temperatury; wybierz **Strumień ciepła** w **Pokaż**, aby zobaczyć, gdzie płynie ciepło. Najedź kursorem na część, aby odczytać oba.

Stacjonarny przepływ ciepła potrzebuje miejsca, dokąd ciepło może odpłynąć: co najmniej jednej stałej temperatury, konwekcji lub promieniowania. Część, która tylko pobiera ciepło, nie ma stanu ustalonego; zrób dla niej analizę nieustaloną.

Tabela podaje najniższą i najwyższą temperaturę oraz to, gdzie się znajdują, największy strumień ciepła oraz **bilans cieplny**: ciepło wchodzące lub wychodzące przez każdy warunek (stała temperatura liczy, ile musi dostarczyć lub pochłonąć), wytworzone ciepło, sumy wchodzącego i wychodzącego ciepła oraz **niezgodność**. Niezgodność powinna być niewielkim ułamkiem ciepła wchodzącego; duża oznacza, że wynikowi nie można ufać.

### W czasie (nieustalone)

Zaznacz **Nieustalone** i podaj **Temperaturę początkową** (cała część zaczyna od niej), **Czas trwania** i liczbę **Kroków czasowych**. **Niejawna metoda Eulera** jest odporna; **Crank–Nicolson** jest dokładniejsza przy tej samej liczbie kroków, ale może falować po nagłej zmianie. Po rozwiązaniu przeciągnij suwak **Czas**, aby zobaczyć temperatury w każdej chwili (skala kolorów pozostaje ta sama dla każdej chwili). Bilans cieplny zawiera wtedy również ciepło magazynowane.

## Naprężenia termiczne: co zmiana temperatury robi z częścią?

W analizie **Naprężenia statyczne** (lub **Wyboczenie**) ustaw **Obciążenie termiczne**:

- **Jednolita zmiana temperatury**: cała część się nagrzewa (lub stygnie, przy ujemnej liczbie) o tyle kelwinów.
- **Temperatury z warunków cieplnych**: dodaj warunki cieplne do tej samej analizy; najpierw rozwiązywane są temperatury ustalone na tej samej siatce, a potem część rozszerza się o α·(T − **temperatura bez naprężeń**).
- **Temperatury w czasie (przebieg nieustalony)**: dodaj warunki cieplne, a potem podaj **Temperaturę początkową**, **Czas trwania**, **Kroki czasowe** i **Schemat czasowy**, jak przy nieustalonej analizie cieplnej. Temperatury są rozwiązywane w czasie na tej samej siatce (sześciany lub czworościany), a analiza statyczna dla temperatur każdej chwili daje naprężenie w tej chwili. **Naprężenie w**:
  - **Najgorszym czasie** (na początku): **Rozwiązania naprężeń** rozłożone równomiernie w przebiegu, łącznie z początkiem (domyślnie 21, najwyżej 51). Wyniki otwierają się w chwili z największym naprężeniem zredukowanym von Misesa; tabela je nazywa, mały wykres pokazuje szczytowe naprężenie w czasie, a suwak **Czas** pokazuje naprężenie w każdej rozwiązanej chwili (skala kolorów pozostaje ta z najgorszej chwili).
  - **Jednym wybranym czasie**: jedna chwila, czyli krok czasowy najbliższy podanemu **Czasowi (s)**. Analiza wyboczenia zawsze bierze jeden wybrany czas (koniec przebiegu, chyba że ustawisz inny).

Część, która jest hartowana (zanurzona z gorącego w zimne) lub nagle ogrzana, jest najbardziej naprężona wtedy, gdy wnętrze i powierzchnia różnią się najbardziej: często od samego początku. Utrzymywana temperatura działa od pierwszej chwili jako nagła zmiana, więc naprężenie na samym początku zależy od rozmiaru elementu (tylko kilka elementów widzi tę zmianę). Czytaj to jako „bardzo wysokie” i patrz na kolejne chwile na suwaku, po wartości, które siatka już rozdziela. Naprężenie jest quasi-statyczne: bez bezwładności, bez drgań od nagłej zmiany.

Część, która może swobodnie rosnąć, nie ma naprężeń termicznych: podeprzyj ją tylko tyle, by się nie przesuwała (na przykład trzy ściany bez tarcia ustawione pod kątem prostym). Ściśnięta między dwiema ścianami jest ściskana: pręt stalowy ogrzany o 50 K między sztywnymi ścianami przenosi około 117 MPa. Obciążenia termiczne równoważą się same, więc reakcje nadal równoważą tylko obciążenia mechaniczne.

## Wyboczenie: kiedy smukła część ulega?

1. Wybierz **Wyboczenie (liniowe)** jako **Typ** i dodaj podpory oraz obciążenia, jak w analizie statycznej.
2. Ustaw **Współczynniki obciążenia do wyznaczenia** (ile postaci wyboczenia).
3. Naciśnij **Rozwiąż**. Każda postać ma **współczynnik obciążenia**: wielokrotność twoich obciążeń, przy której idealna część się wyboczy. Współczynnik 3 oznacza trzykrotność obciążeń; **współczynnik poniżej 1 oznacza, że część wyboczy się pod przyłożonymi obciążeniami**. Tabela podaje też całkowite obciążenie przy każdym współczynniku. Kształt postaci pokazuje, jak się wyboczy (jego wielkość nic nie znaczy).

**Wyboczenie liniowe zawyża rzeczywiste obciążenie wyboczeniowe.** Zakłada doskonałą część: idealnie prostą, bez naprężeń resztkowych i sprężystą. Rzeczywiste części mają drobne niedoskonałości i mogą najpierw się uplastycznić, a cienkościenne powłoki mogą się wyboczyć przy ułamku wartości liniowej. Stosuj duży margines, a współczynnik bliski lub poniżej 3 dla cienkiej powłoki traktuj jako ostrzeżenie.

## Ile można ufać

PartCraft sprawdza te solwery względem wzorów ręcznych: pręt między dwiema temperaturami (dokładnie), żebro chłodzące (w granicach 0,3 K), płyta grzejąca się sama (dokładnie), sześcian stygnący w czasie (w granicach 0,1 % przy Crank–Nicolson), pręt nagle ogrzany na jednym końcu, swobodny pręt ogrzany (bez naprężeń, ΔL = αLΔT), pręt trzymany między ścianami (σ = −EαΔT), płyta hartowana w czasie względem klasycznego rozwiązania szeregowego (w granicach 1 % dla sześcianów, 2,1 % dla czworościanów w środku płyty; 0,5 % na jej powierzchni), ostatnia chwila długiego przebiegu względem stacjonarnego naprężenia termicznego (zgodne z dokładnością do milionowej części) oraz kolumny Eulera (w granicach 1 % dla utwierdzenia i swobody, 1,5 % dla przegubów na obu końcach). Pamiętaj:

- **Stałe wartości materiału.** Przewodność, ciepło właściwe i rozszerzalność się tu nie zmieniają wraz z temperaturą; przy kilkuset stopniach mogą zmienić się o 10–30 %. Sztywność też się nie zmienia.
- **Naprężenie w czasie jest quasi-statyczne i sprężyste**: każda chwila to analiza statyczna (bez bezwładności), bez uplastycznienia, więc hartowanie, które uplastyczniłoby powierzchnię, pokazuje naprężenie powyżej granicy plastyczności.
- **Współczynniki konwekcji są twoim wejściem**, nie są obliczane z przepływu powietrza ani wody.
- **Brak oporu kontaktowego**: część to jedna bryła.
- **Tylko wyboczenie liniowe**: bez niedoskonałości, bez uplastycznienia, bez zachowania po wyboczeniu.
- Schodkowatość sześcianów i ostre wewnętrzne narożniki wpływają na naprężenia termiczne tak samo jak na inne naprężenia (zob. [Sprawdź naprężenia i ugięcie](topic:simulation)).
- To wersja laboratoryjna: sprawdź ważne części w inny sposób.

## Powiązane

- [Sprawdź naprężenia i ugięcie (Simulation)](topic:simulation)
- [Co jeszcze nie jest zbudowane](topic:not-built-yet)
