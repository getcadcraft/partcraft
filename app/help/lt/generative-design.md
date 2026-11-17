---
title: Formos auginimas pagal apkrovas (Generatyvus)
summary: Pasirinkite paviršius, kurie laikomi ir apkraunami, sritis, kurias išlaikyti ir palikti laisvas, tikslinius tūrius ir medžiagas, tuomet generuokite variantus: standžiausias formas kiekvienam tūriui, iš naujo patikrintas kaip kietieji kūnai, palygintas lentelėje ir atsisiųstas kaip STL, STEP arba nauja detalė.
keywords: generatyvus projektavimas, topologijos optimizavimas, SIMP, lengvinimas, gardelė, organiška forma, variantai, palyginimas, masė, tūrio dalis, išsaugoti, išlaikyti, kliūtis, laisva zona, projektavimo erdvė, mažiausias strypas, STL, 3D spausdinimas
from: 5b91fa8e
---

**Generatyvioji** darbo sritis pašalina medžiagą, kurios apkrovos nereikalauja. Nurodote, kur detalė laikoma ir apkraunama, kas turi likti ir kas turi likti laisva; PartCraft randa standžiausią formą kiekvienam tiksliniam tūriui (**topologijos optimizavimas**), kiekvieną iš naujo patikrina kaip kietąjį kūną su tikra medžiaga ir rodo variantus šalia vienas kito. Jis veikia su įvardytais paviršiais, kuriuos tinklo branduolys suteikia detalei (žr. [Tinklo branduolys](topic:solid-kernels)).

Darbo srities sąraše pasirinkite **Generatyvus**. Jūsų detalė nekeičiama; tyrimas įrašomas į detalės failą.

## Sukurkite tyrimą

1. Dešiniame skydelyje spauskite **Naujas tyrimas**.
2. **Erdvė**: *Detalė tokia, kokia yra* pašalina medžiagą iš detalės; *Dėžė aplink detalę* auga formą dėžėje, didesnėje už detalę per **Dėžės paraštę**.
3. **Elemento dydis**: palikite tuščią automatiniam dydžiui (apie 8,000 kubelių) arba įveskite savo. Smulkesni dydžiai duoda smulkesnes formas ir ilgiau trunka.
4. **Mažiausias strypas**: strypai, plonesni nei maždaug dvigubas šis dydis, nesidaro. Tuščias laukas reiškia pusantro kubelio.
5. Pažymėkite nuo vieno iki šešių **Tikslinių tūrių** (projektavimo erdvės dalį, kurią forma gali užpildyti) ir nuo vieno iki keturių **Medžiagų**. Kiekvienas tūris sugeneruojamas vieną kartą; kiekviena medžiaga patikrinama toje formoje (standžiausia forma nuo medžiagos nepriklauso, bet jos masė, įtempis ir saugos koeficientas – priklauso).

## Tikslai

- {{ui:Fiksuoti}}: spustelėkite paviršius, kurie laikomi. **Paviršius be trinties** iš skydelio sąrašo **Pridėti** laiko paviršių tik skersai savęs (naudokite simetrijos plokštumoms).
- {{ui:Jėga}}: spustelėkite apkrautus paviršius, tuomet įveskite bendrą jėgą ir skydelyje pasirinkite jos kryptį. **Slėgis** yra sąraše **Pridėti**.
- {{ui:Išsaugoti}}: spustelėkite paviršius, aplink kuriuos turi likti kieta medžiaga, ir nustatykite, kiek giliai (**Išlaikyti kietą per**) – pavyzdžiui, aplink varžtų skyles. Paviršiai, kuriuos fiksuojate ar apkraunate, visada išlaikomi.
- {{ui:Kliūtis}}: spustelėkite paviršius, aplink kuriuos turi likti tuštuma, ir nustatykite, kiek toli (**Išlaikyti tuščią per**) – vietos velenui ar įrankiui.

Paspauskite **Baigti pasirinkimą** arba {{key:Esc}} po paviršių spustelėjimo. Žalias ir raudonas atspalvis rodo sritis.

## Generuokite ir palyginkite

Spauskite {{ui:Generuoti}}. Skydelyje rodoma eiga ir likęs laikas; **Sustabdyti** atšaukia. Kiekvienas variantas atsiranda lentelėje **Variantai**: tikslinis tūris, medžiaga, **masė**, **didžiausias įtempis**, **didžiausias poslinkis** ir **saugos koeficientas** (takumo riba ÷ įtempis), visi gauti iš baigtos formos perskaičiavimo kaip kietų kubelių su tikra medžiaga.

Pasirinkite variantą, kad pamatytumėte jį vaizde (detalė paslepiama; pažymėkite **Rodyti detalę per jį**, kad matytumėte abu). Po lentele: kiek iteracijų prireikė ir ar jis nusistovėjo, jo standumas kaip kietojo kūno, lyginant su optimizatoriaus paties rodikliu, bei jo paviršius.

## Naudokite variantą

- **STL**: uždaras trikampių tinklas, paruoštas 3D spausdinimui.
- **STEP (faceted)**: tas pats paviršius kaip STEP kietasis kūnas, sudarytas iš plokščių paviršių.
- **Naujas detalės failas**: PartCraft detalė, kurios vienas elementas yra variantas kaip importuotas kietasis kūnas. Atidarykite ją, kad galėtumėte braižyti eskizą, išpjauti skyles arba patikrinti Simuliacijoje. Ji sudaryta iš tūkstančių plokščių paviršių, todėl nėra redaguojama forma.
- **Pridėti prie šios detalės** sujungia variantą su detale; ji įjungiama tik dėžės projektavimo erdvei (kai erdvė yra pati detalė, variantas guli detalės viduje).

**Naujas detalės failas** ir **Pridėti prie šios detalės** šioje versijoje dar neįgyvendinti: variantas tampa importuotu kietuoju kūnu, o tam reikia tikslaus branduolio. STL ir STEP (faceted) atsisiuntimai veikia.

## Kiek jam galima pasitikėti

- Jis optimizuoja **standumą** duotam tūriui. Ribinių įtempių ir gamybos taisyklių (išsikišimai, frezavimo kryptys, mažiausi skylių dydžiai) dar nėra: pasirinktą variantą patikrinkite [Simuliacijoje](topic:simulation) ir koreguokite.
- Plonesni strypai, vieno ar dviejų kubelių pločio, yra apytiksliai: smulkioms detalėms naudokite mažesnį elemento dydį.
- Metodas – SIMP su tankio filtru, slenksčio projekcija ir optimalumo kriterijų atnaujinimais; nurodomas įtempis ir įlinkis yra variantui kaip kubeliams, o tai sąžininga, bet grubu aštriems kampams.

## Susiję

- [Patikrinkite įtempį ir įlinkį (Simuliacija)](topic:simulation)
- [Eksportas spausdinimui, STEP ir DXF](topic:export-files)
- [Kas dar neįgyvendinta](topic:not-built-yet)
