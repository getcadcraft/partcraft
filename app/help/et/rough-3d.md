---
title: 3D-jämedus ja jääk-freesimine
summary: Puhasta toorik kogu mudeli ümber tasase, ümara- või kuulotsaga freesiga kihtide kaupa, jättes viimistluseks ülemõõdu, seejärel lase väiksemal tööriistal lõigata ainult seal, kus esimene jättis materjali. Mida teekonnad tagavad ja mida mitte.
keywords: 3d-jämedus, jämedus, jäme, jääk-freesimine, jääkjämedus, ülejäänud toorik, jäetav ülemõõt, lõikesamm, tasemed, z-tasand, veetase, kaldrada, sukeldamine, ülelõige, väiksem tööriist
from: 29ddc266
---

Kaks toimingut Valmistamises, all {{ui:Veel}} oma tööriistaribal, puhastavad toorikut kogu mudeli ümber 3D-s, hoides tööriista vertikaalselt (või toimingu enda [tööriista suunas](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation)). Need ei võta valikuid.

## 3D-jämedus

{{ui:3D-jäme}} laskub toorikus ülaosast alla ühe **lõikesammu** kaupa. Igal tasemel puhastab see kõik, mida tööriist saab ulatuda ilma mudelit puudutamata: sirged read **sammu laiuse** kaugusel (murdosa tööriista läbimõõdust), seejärel üks kord ümber selle, mida ta võib ulatuda, nii et seinad järgitakse ega jäeta plaanis astmete reana.

- **Jäetav ülemõõt**: kui kaugel tööriist jääb mudelist kõikjal, viimistlusläbiku jaoks (vaikimisi 0.5 mm).
- **Tasand igal lameda tahu juures**: täiendav tase iga mudeli lameda tahu kõrgusel (pluss jäetav ülemõõt), nii et põhja ei jäeta peaaegu terve lõikesammu kõrgusele.
- **Ignoreeri õhemat toorikut kui**: materjal, mis on õhem kui see, üles või külgsuunas, ei ole läbiku väärt (0.05 mm jämedusel, 0.5 mm jääkfreesimisel, nii et seina ääres jääv juuksekarv ei saadaks väiksemat tööriista ümber iga seina).
- **Põhi**: midagi ei lõigata sellest kõrgusest allapoole. Tühi tähendab mudeli põhja.

See algab toorikust sellisena, nagu eelnevad toimingud selle jätsid: pärast tahkude läbikäiku ei lõika see õhku, kus tasanduskäsn on käinud.

Allaminekul: kui tööriist kohtab toorikut allaminekul, laskub ta oma läbiku ulatuses kaldrajal **kaldenurga** järgi, edasi-tagasi kuni kahe tööriista läbimõõduni. Liiga lühike läbik sukeldatakse otse alla **sukeldamise söötmisel**; toiming loeb neid ja hoiatab, sest tööriist, mis ei lõika oma keskpunktil, ei tohiks seda teha.

## Jääk-freesimine

{{ui:Jääk}} on sama strateegia **väiksemale tööriistale pärast suuremat**. See loeb toorikusimulatsiooni ja lõikab ainult seal, kus materjal seisab veel: nurkades, kuhu suurem tööriist ei mahtunud, soontes, kuhu see ei sobinud, ja astmetes, mida see kaldadele jättis. Kõikjal mujal ta ei tee midagi, nii et tema teekond on väike osa sellest, mida sama tööriist võtaks värskel toorikul.

Pane see pärast jämedustoimingut ja vali väiksem tööriist. See vajab eelnevate toimingute toorikusimulatsiooni, mida töötsoon alati käitab.

## Kui head teekonnad on

- **Ülelõiget ei ole.** Tööriista asendid arvutatakse ruudustikul, lõikuri suurusega veidi suurem kui see on (1.4 ruudustiku lahtrit külgsuunas ja jäetava ülemõõdu võrra), nii et kõikjal, kus see seisab, on see mudelist vaba. Testid kontrollivad iga lõikepunkti täpse tööriista vastu täpsel võrgul ja toorikusimulatsioon pärast igat käiku: ei ole ülelõiget ega kiirliikumist läbi toorikust.
- **Selle hind**: seinad jäävad veidi rohkem kui jäetav ülemõõt, kuni summani, mis on toimingul näidatud kui „Lisatoorik seintel“ (umbes 0.5 mm Ø6 tööriista jaoks, vähem väiksema jaoks). Viimistlusläbik võtab selle.

Mida need teekonnad ei ole:

- Read on sirged jooned, mitte detaili kuju nihked ega konstantse kaasamisega kõverad. Need teevad rohkem tõstmisi ja õhuliikumisi kui nihke- või adaptiivne strateegia ning iga taseme esimene rida lõikab tööriista täislaiuses. Lamedapõhjaliste taskute jaoks on [Adaptiivne](topic:manufacture) parem jämedus.
- Tööriista vars ja hoidik ei ole kontrollitud. Hoiatus ütleb, kui lõige on sügavam kui soone pikkus.
- Alalõiked ei ole nähtavad: mudel on see, mida tööriist kohtab oma telge mööda alla tulles. Külje jämedamiseks anna teisele toimingule [kallutatud tööriista suund](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Jääkfreesimine teab toorikut ainult nii hästi kui simulatsiooni ruudustik (0.1 kuni 2 mm lahtrid, detaili suuruse järgi).
- Suurel detailil on programm pikk (üle 100 000 liikumise 200 mm äärikul Ø6 tööriistaga) ja selle arvutamine võtab umbes minuti ning iga muudatus töötsoonis arvutab kogu programmi uuesti. Kasuta jämedamiseks suurimat sobivat tööriista.
- Kontrolli väljundit oma masina simulaatoris enne lõikamist.
