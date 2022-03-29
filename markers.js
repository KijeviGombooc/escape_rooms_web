


const markers = [
    {
        name: "A BÖLCSEK KÖVE NYOMÁBAN",
        url: "https://questhunter.hu/quests/harry-potter-a-bolcsek-kove-nyomaban/",
        address: "1077 BUDAPEST, ALMÁSSY UTCA 3.",
        coords: { lat: 47.5, lng: 19.06 },
        content: `<div>
        <p><strong>SEGÍTSETEK MEGTALÁLNI A BÖLCSEK KÖVÉT!</strong></p>
        <p><strong>A szabadulószoba cselekménye:</strong> Ebben a játékban a legismertebb alkimista, Nicolas Flamel műhelyébe csöppentek és oldhattok meg izgalmas feladatokat a bölcsek köve felkutatása érdekében. Ezt csapatmunkával, kreativitással, logikus gondolkodással, az összefüggések átlátásával és jó megfigyelőkészséggel érhetitek el.</p>
        <p>Az örök élet kövének felkutatása közben találkozhattok számos misztikus tárggyal, rejtélyes szimbólumok nyomába eredhettek, a csillagos égbolt mutatja az utatokat és egy varázspálca is a segítségetekre lehet.</p>
        <p>A bájitalok, színek, illatok, ásványok és titkos receptórák között kalandozva olyan élményekben lesz részetek, melyekről nem is álmodtatok!</p>
        <p>Hiteles játékkörnyezet, varázslatos és izgalmas feladványok egy rejtélyek övezte világban, ijesztgetés és horror nélkül.</p>
        <p><strong>Korhatár:</strong> 9+</p>
        </div>`,
    },
    {
        name: "INDIANA JONES ÉS AZ ELVESZETT PIRAMIS",
        url: "https://questhunter.hu/quests/indiana-jones-es-az-elveszett-piramis/",
        address: "BUDAPEST, PAULAY EDE U. 20, 1061",
        content: `<div>
        <p><span class="font17 justify f400"><strong>A szabadulószoba cselekménye:</strong> Indiana Jones professzor hallgatói vagytok. Egy nap megkérdeztétek a híres kincsvadászt, van e olyan kalandja, amely kudarcba fulladt amiatt, mert nem sikerült semmilyen ereklyét, kincset elhoznia a helyszínről?!</span></p>
        <p>El is mesélte nektek, hogy fiatal éveiben kezdő kalandorként felfedezett Egyiptomban egy sírkamrát egy piramis belsejében! A piramis ránézésre nem volt védve csapdákkal, azonban amint belépett, rejtett csapdák tucatjaira derült fény, így hát olyan gyorsan elmenekült, hogy még a kalapját is ott hagyta.</p>
        <p>Úgy gondoltátok, egyedüli személyként esélye sem volt kikerülni mindet, de mivel ti többen vagytok, próbát tesztek a piramis felderítésére!</p>
        <p>Amint beléptek a szarkofág termébe egy csapóajtó kinyílik és lezuhantok egy másik helységbe. Túlélni túlélitek a zuhanást, viszont a levegőtök csupán 60 percre elegendő ebben a romos csapdateremben, így hát jobb, ha siettek egy kiút keresésében!</p>
        <p>(A pálya a TRAP szabadulós játék “PIRAMIS” pályájának csekély átalakításából jött létre, mely ugyanott található. Ha játszottál már ezen a pályán javasoljuk, válassz inkább egy másikat!)</p>
        <p><strong>Korhatár:</strong> 12+</p>
        </div>`,
    },
    {
        name: "A VARÁZSLÓ ISKOLA",
        url: "https://questhunter.hu/quests/a-varazslo-iskola/",
        address: "1066 BUDAPEST ZICHY JENŐ UTCA 27",
        content: `<div>
        <p><strong>A szabadulószoba cselekménye:</strong> A Magic Rooms elhozta a szabaduló szobák legújabb generációját.</p>
        <p>Számkódok, kulcsok és lakatok nélkül, hiszen egy mágikus világban csak a varázslat lehet a megoldás.</p>
        <p>A látványvilág annyira lenyűgöző, hogy tényleg elhiszed, hogy a legendás történet varázslatos világába csöppentél, ahol nektek is mágussá vagy boszorkánnyá kell válnotok, ha szabadulni akartok.</p>
        <p>-De ebből a játékból ki sem akartok majd szabadulni.-</p>
        <p><strong>Korhatár:</strong> 8+ egy fő 18 év feletti játékos részvétele kötelező!</p>
        <p>&nbsp;</p>
        </div>`,
    },
    {
        name: "VARÁZSVILÁG -A TITKOK KAMRÁJA",
        url: "https://questhunter.hu/quests/varazsvilag-titkok-kamraja/",
        address: "1073 BUDAPEST ERZSÉBET KRT 17. 30-AS KAPUCSENGŐ",
        content: `<div class="ctext two-coltext">
        <p><strong>A szabadulószoba cselekménye:</strong> A küldetés egy varázslóiskolai mosdóban kezdődik. Ez a szabadulószobák tekintetében abszolút egyedülálló helyszín rendkívül sok érdekességet rejt a varázslócsapat számára.</p>
        <p>Természetesen már itt is szükség lesz a varázspálcákra, és sok-sok furfanggal tudtok bejutni a mosdó alatt található csatornahálózatba, ahol nem kisebb feladat vár, mint felkutatni egy valódi baziliszkuszt majd végezni vele…</p>
        <p>„Ha szereted Harry Potter történetét, akkor ez a világ is garantáltan elvarázsol majd.”</p>
        <p>A különleges technológiával épített pályán, olyan megoldásokkal találkozhattok, mellyel máshol még soha. Egyedülálló környezetben , a szokásos 60 perces játékidő helyett 75 perces játékmenetet biztosítunk.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        </div>`,
    },
    {
        name: "ROXFORT ÉS A LEGENDÁS ÁLLATOK",
        url: "https://questhunter.hu/quests/az-alkimista/",
        address: "1066 BUDAPEST, ZICHY JENŐ UTCA 39.",
        content: `<div class="ctext two-coltext">
        <p>Egy gonosz varázsló tartja rettegésben városunkat. Professzor Füstenberget a királyi udvarból kitiltották kétes kísérletei miatt, ezután életét az aranykészítésének szentelte, hogy bosszút állhasson az arisztokrácián. Mivel varázserejét mindenképpen rosszra akarja használni, meg kell állítani. A város vezetése azzal a feladattal bíz meg benneteket, hogy, amíg a varázsló távol van, osonjatok be titkos laboratóriumába és csenjétek el varázs aranytallérjait.</p>
        <p>Nehézség: 5/10</p>
        <p>A játék árának előre utalása szükséges a foglalás véglegesítéséhez!</p>
        <p><strong>Korhatár:</strong> 10+</p>
        </div>`,
    },
    {
        name: "SHERLOCK",
        url: "https://questhunter.hu/quests/sherlock-szabaduloszoba/",
        address: "BUDAPEST, 1085 BUDAPEST, MÁRIA UTCA 29.",
        content: `<div class="ctext two-coltext">
        <p><strong>A szabadulószoba cselekménye:</strong> Dr. Watson izgatottan siet a Baker Street-i szabad csapat tagjaihoz az egyik sötét sikátorban. Egy levelet ad át nekik, miközben közli, Holmes bajban van! A rendőrség megfigyelés alatt tartja, így nekik kell őt tisztázni. A doktor távozása után kibontják a levelet, benne egy üzenet mely azt írja: Nekik kell tisztázniuk Holmest a vádak alól. A bizonyítékokat a Baker Street 221/B alatti lakásban fogják megtalálni, ahonnan detektívet elhurcolták.</p>
        <p>Ti vagytok a Baker Street-i szabad csapat!</p>
        <p>Nincs sok időtök, hiszen az igazságszolgáltatás ebben az időben nem vesztegette az idejét…<br>
        Az ilyen ügyek pedig általában kötél általi halállal végződtek…<br>
        Munkára fel!</p>
        <p><strong>Korhatár:</strong> 12+</p>
        </div>`,
    },
    {
        name: "HELYSZÍNELŐK/CSI",
        url: "https://questhunter.hu/quests/helyszinelok/",
        address: "BUDAPEST, 1085. - MÁRIA UTCA 29. - CSENGŐ: PÁNIQ-SZOBA",
        content: `<div class="ctext two-coltext">
        <p><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--><strong>A szabadulószoba cselekménye:</strong> Helyszínelőként nap, mint nap nagy kihívásokkal kell megküzdenetek, de ami most rátok vár, fontosabb minden eddigi ügyeteknél.</p>
        <p>Kollégátokat, akivel együtt dolgoztatok egy nagyon fontos esten, reggel holtan találták a lakásán. Mindez azok után történt, hogy tegnap egy telefonhívásban tudatta veletek, valami igazán nagy dologra bukkant az üggyel kapcsolatban.</p>
        <p>Már sejtitek, hogy a halálának köze lehet mindehhez, ezért sietve indultok el felderíteni a helyszínt. Reménykedtek abban is, hogy megtaláljátok a terhelő bizonyítékot valahol a lakásban, hiszen ez az egyetlen esélyetek arra, hogy az egy óra múlva kezdődő tárgyaláson bebizonyítsátok, amire már régen rájöttetek…</p>
        <p><strong>Korhatár:</strong> 12+</p>
        </div>`,
    },
];