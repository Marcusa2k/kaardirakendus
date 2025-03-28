a)
Maaameti (maaamet.ee/kinnisvara/htraru) leheküljelt muudeti trükis "Tehingud maakondade kaupa" valiku peale.
Ajavahemikus valiti kolmel erineval korral aasta(2022, 2023 ja 2024) algus(jaanuar) ja lõpp(detsember).
Ülejäänud seaded jäeti puutumata ning koostati aruanne(kolmel korral).
Saadud kolmest aruandest pärit andmed kopeeriti YS001.json faili.
Nii palju kui maaameti aruannetes infot oli, täideti YS001.json fail PA117.json eeskujul.
YS001.json failis "code", "label", "ehaklevels", "colorscheme" ja "defaultselection" väärtused lisati loogilisel oletusel arvestades "Statistiliste andmete kuvamise XGIS rakenduses Spetsifikatsioon".
YS001.json failis "dimensions" väärtused tulenesid ülesande nõuetest.

c)
Täideti ära index.json fail lähtudes stat.ee/sites/default/files/vkr/index.json

d)
Ülesandega kaasas olevad kihtide kirjeldused lisati "layers" kausta, application.json "application" kausta ning YS001.json "applications" kausta.
application.json failis statistika moodulis muudeti "statistikaService.href" http://localhost:8080/.
application.json failis statistika moodulis muudeti "mapService.href" http://localhost:8080/layers/.
application.json failis statistika moodulis muudeti "years" 2022, 2023, 2024.
application.json failis skin uueks väärtuseks sai "default".
application.json failis appId uueks väärtuseks sai "prooviylesanne".