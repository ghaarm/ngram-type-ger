// https://kryptografie.de/kryptografie/kryptoanalyse/haeufigkeitsverteilung.htm#hepta
const hexagrams = [
  "schaft",
  "ierung",
  "igkeit",
  "arbeit",
  "chkeit",
  "eitung",
  "altung",
  "schule",
  "ellung",
  "derung",
  "meinde",
  "chtung",
  "verein",
  "sident",
  "eister",
  "hichte",
  "tglied",
  "stelle",
  "ührung",
  "straße",
  "ericht",
  "aktion",
  "chluss",
  "onntag",
  "etzung",
  "ogramm",
  "schlag",
  "amstag",
  "illion",
  "nister",
  "pieler",
  "enheit",
  "stunde",
  "nehmen",
  "olitik",
  "gebiet",
  "olizei",
  "dienst",
  "ration",
  "kirche",
  "rtikel",
  "roblem",
  "partei",
  "minute",
  "reitag",
  "rainer",
  "schuss",
  "amilie",
  "alität",
  "gruppe",
  "erband",
  "tation",
  "tzende",
  "beiter",
  "tember",
  "rojekt",
  "führer",
  "mation",
  "eidung",
  "entamt",
  "terium",
  "erfolg",
  "ktober",
  "istung",
  "ispiel",
  "entrum",
  "ndlung",
  "chnung",
  "gebnis",
  "fahrer",
  "montag",
  "tigung",
  "schutz",
  "mmlung",
  "anlage",
  "nehmer",
  "assung",
  "ttwoch",
  "etrieb",
  "immung",
  "vember",
  "recher",
  "ildung",
  "rstand",
  "ertrag",
  "chance",
  "spräch",
  "itiker",
  "region",
  "chrift",
  "chüler",
  "erstag",
  "cklung",
  "eilung",
  "digung",
  "freund",
  "prache",
  "enstag",
  "erkehr",
  "person",
  "beginn",
  "schung",
  "wasser",
  "sation",
  "heater",
  "bürger",
  "januar",
  "ngebot",
  "system",
  "zember",
  "angabe",
  "insatz",
  "rdnung",
  "ßnahme",
  "anfang",
  "eratur",
  "saison",
  "ologie",
  "sition",
  "chnitt",
  "indung",
  "spruch",
  "enhaus",
  "teller",
  "onzert",
  "endung",
  "leiter",
  "ebruar",
  "herung",
  "gerung",
  "fläche",
  "schäft",
  "fahren",
  "eitrag",
  "garten",
  "wohner",
  "erheit",
  "eichen",
  "undert",
  "ffnung",
  "gesetz",
  "ussion",
  "museum",
  "ichter",
  "sucher",
  "ehörde",
  "ukunft",
  "artner",
  "grenze",
  "uation",
  "lösung",
  "stimme",
  "elefon",
  "ebäude",
  "ufgabe",
  "mittel",
  "stätte",
  "treter",
  "ometer",
  "dliche",
  "enende",
  "ahrung",
  "ußball",
  "itzung",
  "chritt",
  "eblink",
  "onzern",
  "gleich",
  "uktion",
  "terung",
  "lation",
  "eutsch",
  "sterin",
  "finale",
  "ission",
  "tstadt",
  "grafie",
  "träger",
  "ündung",
  "nummer",
  "hrheit",
  "kerung",
  "ohnung",
  "eldung",
  "stitut",
  "ichung",
  "erlage",
  "rektor",
  "echsel",
  "ollege",
  "eresse",
  "trecke",
  "mittag",
  "reform",
  "lärung",
  "kritik",
  "chauer",
  "kation",
  "einung",
  "lehrer",
]